Smalltalk createPackage: 'ContextAmber'!
Object subclass: #ContextAmber
	instanceVariableNames: ''
	package: 'ContextAmber'!

ContextAmber class instanceVariableNames: 'instance defaultActive scopedStack compiler'!

!ContextAmber class methodsFor: 'accessing'!

defaultActive
	^ defaultActive
! !

!ContextAmber class methodsFor: 'initializing'!

initialize
	defaultActive := OrderedCollection new.
	scopedStack := LayerStack new.
	compiler := Compiler new.
	"self registerAnnouncements."
!

registerAnnouncements
	SystemAnnouncer current on: ClassRemove do: [ :announcement | | partial |
		partial := announcement theClass.
		partial isPartial ifTrue: [
			partial class base removePartial: partial ] ].
! !

!ContextAmber class methodsFor: 'layer creation'!

newLayer: name layerClasses: layerClasses instanceVariableNames: instVarNames package: package
	| layer partialClassesSource |
	partialClassesSource := self partialClassesMethod: layerClasses.
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
	stream := '' writeStream.
	stream nextPut: '{'.
	collection do: [ :class | 
		(class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ].
		stream nextPutAll: class asString; 
		nextPutAll: '. ' ].
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

IRVisitor subclass: #IRProceedInliner
	instanceVariableNames: ''
	package: 'ContextAmber'!

!IRProceedInliner methodsFor: 'inlining'!

inlinedMethod: selector for: baseClass with: layers
	| recent |
	recent := nil.		"TODO: IR for layers base method"
	layers do: [ :layer |
		layer class at: baseClass ifPresent: [ :partialClass |
			(partialClass includesSelector: baseClass) ifTrue: [ | ir |
				ir := nil.		"TODO: unoptimized IR for that method"
				recent := nil.		"TODO: run inliner on ir with partial == recent" ] ] ].
! !

!IRProceedInliner methodsFor: 'testing'!

shouldInlineSend: anIRSend
	^ anIRSend isInlined not and: [
		self class shouldInline: anIRSend ]
! !

!IRProceedInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('proceed' 'proceed:')
!

shouldInline: anIRInstruction
	^ self inlinedSelectors includes: anIRInstruction selector
! !

Object subclass: #Layer
	instanceVariableNames: ''
	package: 'ContextAmber'!

!Layer methodsFor: 'default activation'!

activate
	ContextAmber defaultActive indexOf: self ifAbsent: [ ContextAmber defaultActive add: self ].
!

deactivate
	ContextAmber defaultActive remove: self ifAbsent: [ ].
! !

Layer class instanceVariableNames: 'partialClasses'!

!Layer class methodsFor: 'accessing'!

at: base ifPresent: block
	partialClasses at: base ifPresent: block.
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
			partialClasses at: class base put: class ] ].
!

partialClasses
	self error: 'no partial classes defined for layer'.
! !

!Layer class methodsFor: 'testing'!

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
		primaryCollection removeAt: index.
		secondaryCollection removeAt: index ].
! !

!LayerStack methodsFor: 'stack'!

add: aLayer
	addStack indexOf: aLayer ifAbsent: [
		addStack add: aLayer.
		removeStack add: nil ].
!

do: aBlock
	(1 to: self size) do: [ :index | | addEl removeEl |
		addEl := addStack at: index.
		removeEl := addStack at: index. 
		addEl
			ifNil: [ aBlock value: #remove value: removeEl ]
			ifNotNil: [ aBlock value: #add value: addEl ] ].
!

remove: aLayer
	self remove: aLayer in: addStack collapse: removeStack.
	removeStack add: aLayer.
	addStack add: nil.
!

reset: aLayer
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
	base addPartial: partialClass.
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
		self base isClass ifFalse: [ self error: 'object is not a class' ] ].
! !

!PartialClass class methodsFor: 'testing'!

isPartial
	^ self ~= PartialClass
! !

!PartialClass class methodsFor: 'wrapper'!

generateWrapper: method
	| wrapper wrapperTemplate compiler |
	compiler := Compiler new.
	wrapperTemplate := (PartialClass class methodAt: #wrapperTemplate) source.
	wrapper := compiler eval: (compiler compile: wrapperTemplate forClass: self base).
	wrapper fn basicAt: #selector put: method selector.
	wrapper fn basicAt: #original put: method.
	wrapper selector: method selector.
	wrapper makePartial.
	^ wrapper
!

installWrapperForSelector: selector
	| original |
	original := self base methodAt: selector.
	ClassBuilder new
		installMethod: (self generateWrapper: original)
		forClass: self base
		protocol: original protocol.
!

wrapperTemplate
	| nextLayer selector |
	nextLayer := self activateLayers last.
	selector := arguments callee basicAt: #selector.
	^ (nextLayer class methodAt: selector) fn apply: self withPossibleArguments: arguments
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

partials
	< if (typeof(self['partials']) === 'undefined') {
		return $core.Set._new();
	} else {
		return self['partials'];
	} >
!

removePartial: class
	self partials remove: class ifAbsent: [ self error: 'list of partial classes out of sync' ].
! !

!BlockClosure methodsFor: '*ContextAmber'!

apply: anObject valueWithPossibleArguments: aCollection
	<return self.apply(anObject, aCollection);>
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
		nextPutAll: 'layerClasses: ';
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

isPartial
	^ (self basicAt: #partial) ifNil: [ false ].
!

makePartial
	self basicAt: #partial put: #true.
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
	
	self layerStack ifNotNil: [
		self layerStack do: [ :operation :layer | 
			operation = #add
				ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]
				ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].
				
	"TODO: same for scoped stack"
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

resetLayer: aLayer
	self initializeLayers.
	self layerStack reset: aLayer.
! !

