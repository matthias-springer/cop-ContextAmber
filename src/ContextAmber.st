Smalltalk createPackage: 'ContextAmber'!
Object subclass: #ContextAmber
	instanceVariableNames: ''
	package: 'ContextAmber'!

ContextAmber class instanceVariableNames: 'instance defaultActive scopedStack compiler'!

!ContextAmber class methodsFor: 'accessing'!

defaultActive
	^ defaultActive
!

scopedStack
	^ scopedStack
! !

!ContextAmber class methodsFor: 'announcements'!

handleClassRemoved: announcement
	| partial |
	partial := announcement theClass.
	partial isPartial 
		ifTrue: [ partial base removePartial: partial ].
!

handleMethodAdded: announcement
	| method class |
	method := announcement method.
	class := method methodClass.
	class isPartial ifTrue: [
		class base installWrapper: method selector ].
!

handleMethodModified: announcement
	| oldMethod newMethod class |
	oldMethod := announcement oldMethod.
	newMethod := announcement method.
	oldMethod isPartial & newMethod isPartial not ifTrue: [
		oldMethod methodClass installWrapper: oldMethod selector ].
!

registerAnnouncements
	SystemAnnouncer current on: ClassRemoved do: [ :announcement | self handleClassRemoved: announcement ].
	SystemAnnouncer current on: MethodAdded do: [ :announcement | self handleMethodAdded: announcement ].
	SystemAnnouncer current on: MethodModified do: [ :announcement | self handleMethodModified: announcement ].
! !

!ContextAmber class methodsFor: 'error handling'!

warning: aString
	[ self error: aString ] valueWithTimeout: 0.
! !

!ContextAmber class methodsFor: 'initializing'!

initialize
	defaultActive := OrderedCollection new.
	scopedStack := LayerStack new.
	compiler := Compiler new.
	self registerAnnouncements.
! !

!ContextAmber class methodsFor: 'layer creation'!

newLayer: name partialClasses: partials instanceVariableNames: instVarNames package: package
	| layer partialClassesSource |
	partialClassesSource := self partialClassesMethod: partials.
	layer := Layer subclass: name instanceVariableNames: instVarNames package: package.
	compiler install: partialClassesSource forClass: layer class protocol: 'initializing'.
	layer initialize.
	^ layer
!

newPartialClass: name baseClass: base package: package
	^ PartialClass new: name baseClass: base package: package
! !

!ContextAmber class methodsFor: 'private'!

partialClassesCollection: collection
	| stream |
	collection do: [ :class | (class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ] ].
	
	stream := '' writeStream.
	stream nextPutAll: '{ '.
	collection allButLast do: [ :class | 
		stream 
			nextPutAll: class asString; 
			nextPutAll: '. ' ].
	collection size > 0 ifTrue: [ 
		stream 
			nextPutAll: collection last asString;
			nextPut: ' ' ].
	stream nextPut: '}'.
	^ stream contents
!

partialClassesMethod: collection
	| stream |
	stream := '' writeStream.
	stream 
		nextPutAll: 'partialClasses';
		lf; tab;
		nextPutAll: '^ ';
		nextPutAll: (self partialClassesCollection: collection).
	^ stream contents
! !

!ContextAmber class methodsFor: 'singleton'!

instance
	instance ifNil: [ instance := self new ].
	^ instance
! !

!ContextAmber class methodsFor: 'testing'!

shouldCacheIR: selector for: class
	^ class isPartial or: [
		class partials anySatisfy: [ :partialClass | partialClass includesSelector: selector ] ]
! !

InliningCodeGenerator subclass: #ContextInliningCodeGenerator
	instanceVariableNames: ''
	package: 'ContextAmber'!

!ContextInliningCodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	^ self irTranslator
		currentClass: self currentClass;
		visit: (self unoptimizedIR: aNode);
		contents
!

inliner
	^ IRProceedInliner new
!

unoptimizedIR: aNode
	| ir |

	self semanticAnalyzer visit: aNode.
	ir := self translator visit: aNode.
	super inliner visit: ir.
	
	^ ir
! !

IRVisitor subclass: #IRProceedInliner
	instanceVariableNames: 'inlinedSend base selector activeLayers'
	package: 'ContextAmber'!

!IRProceedInliner methodsFor: 'accessing'!

activeLayers
	^ activeLayers
!

activeLayers: aCollection
	activeLayers := aCollection.
!

base
	^ base
!

base: class
	base := class.
!

selector
	^ selector
!

selector: aString
	selector := aString.
! !

!IRProceedInliner methodsFor: 'inlining'!

inlinedSend
	inlinedSend ifNil: [ | recursiveInliner nextLayer nextPartialMethodIR remainingLayers |
		"Caches IRSend node for proceed calls. IRSend node has further partial calls inlined recursively."
		remainingLayers := self skipLayers.
		nextLayer := remainingLayers removeLast.
		recursiveInliner := self class for: self selector in: self base withLayers: remainingLayers.
		nextPartialMethodIR := ((nextLayer partialFor: self base) >> self selector) IR.
		recursiveInliner visit: nextPartialMethodIR.
		inlinedSend := IRSend new
			selector: #value;
			index: 1;
			add: nextPartialMethodIR asClosure;
			yourself ].
	^ inlinedSend
!

skipLayers
	" returns a collection of activeLayers beginning with the next layer that contains a partial for the current selector "
	| result |
	result := self activeLayers copy.
	
	result reverseDo: [ :layer |
		(layer class hasPartial: self selector for: self base)
			ifTrue: [ ^ result ]
			ifFalse: [ result removeLast ] ].
	
	^ result
! !

!IRProceedInliner methodsFor: 'testing'!

shouldInlineSend: anIRSend
	^ anIRSend isInlined not and: [
		self class inlinedSelectors includes: anIRSend selector ]
! !

!IRProceedInliner methodsFor: 'visiting'!

visitIRSend: anIRSend
	^ (self shouldInlineSend: anIRSend)
		ifTrue: [ anIRSend replaceWith: self inlinedSend ]
		ifFalse: [ super visitIRSend: anIRSend ]
! !

!IRProceedInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('proceed' 'proceed:')
! !

!IRProceedInliner class methodsFor: 'instance creation'!

for: selector in: base withLayers: aCollection
	^ self new
		base: base;
		selector: selector;
		activeLayers: aCollection;
		yourself
! !

Object subclass: #Layer
	instanceVariableNames: 'id'
	package: 'ContextAmber'!

!Layer methodsFor: 'accessing'!

id
	^ id
! !

!Layer methodsFor: 'default activation'!

activate
	ContextAmber defaultActive indexOf: self ifAbsent: [ ContextAmber defaultActive add: self ].
!

deactivate
	ContextAmber defaultActive remove: self ifAbsent: [ ].
! !

!Layer methodsFor: 'initializing'!

initialize
	id := Layer nextId.
! !

Layer class instanceVariableNames: 'partialClasses nextId'!

!Layer class methodsFor: 'accessing'!

at: base ifPresent: block
	partialClasses at: base ifPresent: block.
!

nextId
	nextId := nextId * 2.
	^ nextId / 2
!

partialFor: base
	^ partialClasses at: base ifAbsent: [ self error: 'no partial class for base in this layer' ].
! !

!Layer class methodsFor: 'error handling'!

error: aString
	" defer executing to allow IDE to show up. "
	"[ super error: aString ] valueWithTimeout: 0."
	super error: aString.
! !

!Layer class methodsFor: 'initializing'!

initialize
	self ~= Layer ifTrue: [
		partialClasses := Dictionary new.
		self partialClasses do: [ :class |
			(class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ].
			partialClasses at: class base put: class ] ]
		ifFalse: [ nextId := 1 ].
!

partialClasses
	self error: 'no partial classes defined for layer'.
! !

!Layer class methodsFor: 'testing'!

hasPartial: selector for: base
	| partialClass |
	partialClass := self partialClasses 
		detect: [ :partial | partial base = base ] 
		ifNone: [ ^ false ].
	^ partialClass hasPartial: selector
!

isLayer
	^ self ~= Layer
! !

Object subclass: #LayerStack
	instanceVariableNames: 'addStack removeStack'
	package: 'ContextAmber'!

!LayerStack methodsFor: 'initializing'!

initialize
	addStack := OrderedCollection new.
	removeStack := OrderedCollection new.
! !

!LayerStack methodsFor: 'private'!

remove: aLayer in: primaryCollection collapse: secondaryCollection
	| index |
	index := primaryCollection indexOf: aLayer ifAbsent: [ nil ].
	index ifNotNil: [ 
		primaryCollection removeIndex: index.
		secondaryCollection removeIndex: index ].
! !

!LayerStack methodsFor: 'stack'!

add: aLayer
	aLayer class isLayer
		ifFalse: [ self error: 'object is not a layer' ].
		
	addStack indexOf: aLayer ifAbsent: [
		addStack add: aLayer.
		removeStack add: nil ].
!

do: aBlock
	(1 to: self size) do: [ :index | | addEl removeEl |
		addEl := addStack at: index.
		removeEl := removeStack at: index. 
		addEl
			ifNil: [ aBlock value: #remove value: removeEl ]
			ifNotNil: [ aBlock value: #add value: addEl ] ].
!

pop
	addStack removeLast.
	removeStack removeLast.
!

remove: aLayer
	aLayer class isLayer
		ifFalse: [ self error: 'object is not a layer' ].
		
	self remove: aLayer in: addStack collapse: removeStack.
	removeStack add: aLayer.
	addStack add: nil.
!

reset: aLayer
	aLayer class isLayer
		ifFalse: [ self error: 'object is not a layer' ].
		
	self remove: aLayer in: removeStack collapse: addStack.
	self remove: aLayer in: addStack collapse: removeStack.
!

size
	^ addStack size
! !

Object subclass: #PartialClass
	instanceVariableNames: ''
	package: 'ContextAmber'!

!PartialClass class methodsFor: 'accessing'!

base
	self error: 'no base class defined for partial class'.
! !

!PartialClass class methodsFor: 'class creation'!

new: name baseClass: base package: package
	| partialClass |
	base isClass ifFalse: [ super error: 'object is not a class' ].
	partialClass := super subclass: name instanceVariableNames: '' package: package.
	partialClass class compile: 'base ^ ', String lf, String tab, base name protocol: 'accessing'.
	partialClass initialize.
	^ partialClass
!

subclass: aString instanceVariableNames: anotherString
	self signalSubclassNotAllowed.
!

subclass: aString instanceVariableNames: aString2 category: aString3
	self signalSubclassNotAllowed.
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	self signalSubclassNotAllowed.
!

subclass: aString instanceVariableNames: aString2 package: aString3
	self signalSubclassNotAllowed.
! !

!PartialClass class methodsFor: 'error handling'!

error: aString
	" defer executing to allow IDE to show up. "
	"[ super error: aString ] valueWithTimeout: 0."
	super error: aString.
!

signalSubclassNotAllowed
	self error: 'subclassing not allowed for partial classes'.
! !

!PartialClass class methodsFor: 'initializing'!

initialize
	self ~= PartialClass ifTrue: [
		self base isClass ifFalse: [ self error: 'object is not a class' ].
		self base addPartial: self.
		self methods do: [ :method | self base installWrapper: method selector ] ].
! !

!PartialClass class methodsFor: 'testing'!

hasPartial: selector
	^ self includesSelector: selector
!

isPartial
	^ self ~= PartialClass
! !

!Behavior methodsFor: '*ContextAmber'!

addPartial: class
	self ensurePartialsCollectionInitialized.
	self partials add: class.
!

ensurePartialsCollectionInitialized
	< if (typeof(self['partials']) === 'undefined') {
		self['partials'] = $core.Set._new();
	} >
!

generateWrapper: method
	| wrapper wrapperTemplate compiler |
	compiler := Compiler new.
	wrapperTemplate := (Behavior >> #wrapperTemplate) source.
	wrapper := compiler eval: (compiler compile: wrapperTemplate forClass: self).
	wrapper fn basicAt: #selector put: method selector.
	wrapper fn basicAt: #original put: method.
	wrapper selector: method selector.
	wrapper source: method source.
	^ wrapper
!

installWrapper: selector
	| original wrapper |
	Transcript show: '[LOG] installing wrapper for ', self asString, '>>', selector, String lf.
	original := self >> selector.
	wrapper := self generateWrapper: original.
	ClassBuilder new installMethod: wrapper forClass: self protocol: original protocol.
!

partials
	< if (typeof(self['partials']) === 'undefined') {
		return $core.Set._new();
	} else {
		return self['partials'];
	} >
!

removePartial: class
	self partials remove: class ifAbsent: [ ContextAmber warning: 'list of partial classes out of sync' ].
!

wrapperTemplate
	| nextLayer selector |
	Transcript show: '[LOG] wrapper call', String lf.
	nextLayer := self activeLayers last.
	selector := arguments callee basicAt: #selector.
	^ (nextLayer class >> selector) fn apply: self withPossibleArguments: arguments
! !

!BlockClosure methodsFor: '*ContextAmber'!

apply: anObject valueWithPossibleArguments: aCollection
	<return self.apply(anObject, aCollection);>
!

withLayer: layer
	| result |
	ContextAmber scopedStack add: layer.
	result := self value.
	ContextAmber scopedStack pop.
	^ result
!

withoutLayer: layer
	| result |
	ContextAmber scopedStack remove: layer.
	result := self value.
	ContextAmber scopedStack pop.
	^ result
! !

!Browser methodsFor: '*ContextAmber'!

classDeclarationSource
	| stream |
	stream := '' writeStream.
	selectedClass ifNil: [ ^ self classDeclarationTemplate ].
	" TODO: encapsulate in layer "
	selectedClass isLayer	
		ifTrue: [ ^ self layerDeclarationSource ].
	selectedClass isPartial
		ifTrue: [ ^ self partialDeclarationSource ].
	stream
		nextPutAll: selectedClass superclass asString;
		nextPutAll: ' subclass: #';
		nextPutAll: selectedClass name;
		nextPutAll: String lf, String tab;
		nextPutAll: 'instanceVariableNames: '''.
	selectedClass instanceVariableNames
		do: [ :each | stream nextPutAll: each ]
		separatedBy: [ stream nextPutAll: ' ' ].
	stream
		nextPutAll: '''', String lf, String tab;
		nextPutAll: 'package: ''';
		nextPutAll: selectedClass category;
		nextPutAll: ''''.
	^ stream contents
!

layerDeclarationSource
	| stream |
	stream := '' writeStream.
	stream
		nextPutAll: 'ContextAmber newLayer: #';
		nextPutAll: selectedClass name;
		nextPutAll: String lf, String tab;
		nextPutAll: 'partialClasses: ';
		nextPutAll: (ContextAmber partialClassesCollection: selectedClass partialClasses);
		nextPutAll: String lf, String tab;
		nextPutAll: 'instanceVariableNames: '''.
	selectedClass instanceVariableNames
		do: [ :each | stream nextPutAll: each ]
		separatedBy: [ stream nextPutAll: ' ' ].
	stream
		nextPutAll: '''', String lf, String tab;
		nextPutAll: 'package: ''';
		nextPutAll: selectedClass category;
		nextPutAll: ''''.
	^ stream contents
!

partialDeclarationSource
	| stream |
	stream := '' writeStream.
	stream
		nextPutAll: 'ContextAmber newPartialClass: #';
		nextPutAll: selectedClass name;
		nextPutAll: String lf, String tab;
		nextPutAll: 'baseClass: ';
		nextPutAll: selectedClass base asString;
		nextPutAll: String lf, String tab;
		nextPutAll: 'package: ''';
		nextPutAll: selectedClass category;
		nextPutAll: ''''.
	^ stream contents
! !

!Class methodsFor: '*ContextAmber'!

isLayer
	^ false
!

isPartial
	^ false
! !

!CompiledMethod methodsFor: '*ContextAmber'!

IR
	| ir ast generator |
	"ir := self basicAt: #IR.
	ir ifNotNil: [ ^ ir ]."
	
	ast := Smalltalk parse: self source.
	generator := ContextInliningCodeGenerator new.
	ir := generator
		source: self source;
		currentClass: self class;
		unoptimizedIR: ast.
	
	" TODO: caching (deepCopy fails)"
	"ir := ir deepCopy.
	self basicAt: #IR put: ir."
	^ ir
!

isPartial
	^ (self fn basicAt: #original) isNil not
! !

!IRMethod methodsFor: '*ContextAmber'!

asClosure
	| closure |
	closure := IRClosure new.
	closure arguments: self arguments.
	closure scope: self scope.
	self instructions do: [ :instr | closure add: instr ].
	^ closure
! !

!Metaclass methodsFor: '*ContextAmber'!

isPartial
	^ false
! !

!Object methodsFor: '*ContextAmber'!

activateLayer: aLayer
	self initializeLayers.
	self layerStack add: aLayer.
!

activeLayers
	| layers |
	layers := OrderedCollection new.
	layers addAll: ContextAmber defaultActive.
	
	ContextAmber scopedStack do: [ :operation :layer |
		operation = #add
			ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]
			ifFalse: [ layers remove: layer ifAbsent: [ ] ] ].
			
	self layerStack ifNotNil: [
		self layerStack do: [ :operation :layer | 
			operation = #add
				ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]
				ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].
			
	^ layers
!

deactivateLayer: aLayer
	self initializeLayers.
	self layerStack remove: aLayer.
!

initializeLayers
	self layerStack ifNil: [ self layerStack: LayerStack new ].
!

layerStack
	< return self['layerStack']; >
!

layerStack: aStack
	< self['layerStack'] = aStack; >
!

objectLayersDirty
	< if (typeof(self['layersDirty']) === 'undefined') {
		return false;
	} else {
		return self['layersDirty'];
	} >
!

objectLayersDirty: aBoolean
	< self['layersDirty']  = aBoolean; >
!

resetLayer: aLayer
	self initializeLayers.
	self layerStack reset: aLayer.
! !

!SequenceableCollection methodsFor: '*ContextAmber'!

compositionSignature
	| last nextIndex |
	self isEmpty ifTrue: [ ^ 0 ].
	last := self first id.
	nextIndex := 2.
	
	(2 to: self size) do: [ :index | | next |
		next := (self at: index) id.
		last := (last + next) * (last + next + 1) * next / 2 ].
	
	^ (last + self size) * (last + self size + 1) * self size / 2
!

reverseDo: aBlock
	<
		self = self._numericallyIndexable();
		for(var i=self.length - 1; -1 < i; i--) {
			aBlock._value_(self[i]);
		}
	>
! !

