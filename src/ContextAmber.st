Smalltalk createPackage: 'ContextAmber'!
NodeVisitor subclass: #ASTProceedInliner
	instanceVariableNames: 'inlinedSend base selector activeLayers'
	package: 'ContextAmber'!

!ASTProceedInliner methodsFor: 'accessing'!

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

!ASTProceedInliner methodsFor: 'initializing'!

reset
	inlinedSend := nil.
! !

!ASTProceedInliner methodsFor: 'inlining'!

inlinedCompiledMethod
	^ self eval: self inlinedMethod
!

inlinedMethod
	| remainingLayers nextLayer partialMethodNode currentActiveLayers |
	currentActiveLayers := self activeLayers.
	self activeLayers: self skipLayers.
	self activeLayers isEmpty
		ifTrue: [
			partialMethodNode := (self base \> self selector) ast ]
		ifFalse: [ 
			nextLayer := self activeLayers removeLast.
			partialMethodNode := ((nextLayer class partialFor: self base) \> self selector) ast ].
	partialMethodNode sequenceNode addFirstNode: ((self base \> self selector) inliningStrategy updateMethodAST: currentActiveLayers) sequenceNode.
	self visit: partialMethodNode.
	^ ContextInliningCodeGenerator new
		currentClass: self base;
		compileNode: partialMethodNode
!

inlinedSend: args
	inlinedSend ifNil: [ | recursiveInliner nextLayer nextPartialMethodAST remainingLayers blockNode blockScope |
		"Caches IRSend node for proceed calls. IRSend node has further partial calls inlined recursively."
		remainingLayers := self skipLayers.
		remainingLayers isEmpty
			ifTrue: [
				nextPartialMethodAST := (self base \> self selector) ast ]
			ifFalse: [ 
				nextLayer := remainingLayers removeLast.
				nextPartialMethodAST := ((nextLayer class partialFor: self base) \> self selector) ast ].
		recursiveInliner := self class for: self selector in: self base withLayers: remainingLayers.
		recursiveInliner visit: nextPartialMethodAST.
		blockNode := PartialBlockNode new
			parameters: nextPartialMethodAST arguments;
			addNode: nextPartialMethodAST sequenceNode asBlockSequenceNode;
			yourself.
		inlinedSend := SendNode new
			receiver: blockNode;
			selector: (self valueSelector: args size);
			arguments: args;
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
!

valueSelector: numArgs
	numArgs = 0 
		ifTrue: [ ^ #value ]
		ifFalse: [ | result |
			result := ''.
			numArgs timesRepeat: [ result := result, 'value:' ].
			^ result ].
! !

!ASTProceedInliner methodsFor: 'private'!

eval: aString
	< return eval(aString); >
! !

!ASTProceedInliner methodsFor: 'testing'!

shouldInlineSend: aSendNode
	^ self class inlinedSelectors includes: aSendNode selector
! !

!ASTProceedInliner methodsFor: 'visiting'!

visitSendNode: aSendNode
	^ (self shouldInlineSend: aSendNode)
		ifTrue: [ aSendNode replaceWith: (self inlinedSend: aSendNode arguments) ]
		ifFalse: [ super visitSendNode: aSendNode ]
! !

!ASTProceedInliner class methodsFor: 'accessing'!

inlinedSelectors
	^ #('proceed' 'proceed:' 'proceed:value:' 'proceed:value:value:' 'proceed:value:value:value:' 'proceed:value:value:value:value:' 'proceed:value:value:value:value:value:')
! !

!ASTProceedInliner class methodsFor: 'instance creation'!

for: selector in: base withLayers: aCollection
	^ self new
		base: base;
		selector: selector;
		activeLayers: aCollection;
		yourself
! !

Object subclass: #ContextAmber
	instanceVariableNames: ''
	package: 'ContextAmber'!

ContextAmber class instanceVariableNames: 'instance defaultActive scopedStack compiler'!

!ContextAmber class methodsFor: 'accessing'!

defaultActive
	^ defaultActive
!

globalLayerComposition
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
	class isPartial ifTrue: [ class handleMethodAdded: method ].
!

handleMethodModified: announcement
	| oldMethod newMethod class |
	oldMethod := announcement oldMethod.
	newMethod := announcement method.
	oldMethod isPartial & newMethod isPartial not ifTrue: [
		"not a partial method"
		"TODO: install wrapper"
		ClassBuilder new installMethod: oldMethod forClass: oldMethod methodClass protocol: oldMethod protocol.
		^ self ].
	newMethod methodClass isPartial ifTrue: [ newMethod methodClass handleMethodAdded: newMethod ].
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

semanticAnalyzer
	^ ContextInliningSemanticAnalyzer on: self currentClass
! !

SemanticAnalyzer subclass: #ContextInliningSemanticAnalyzer
	instanceVariableNames: ''
	package: 'ContextAmber'!

!ContextInliningSemanticAnalyzer methodsFor: 'error handling'!

errorShadowingVariable: aString
	"shadowing allowed for inlined proceed calls"
! !

IRClosure subclass: #IRPartialClosure
	instanceVariableNames: ''
	package: 'ContextAmber'!

!IRPartialClosure methodsFor: 'testing'!

isPartialClosure
	^ true
! !

!IRPartialClosure methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitIRPartialClosure: self
! !

Object subclass: #InliningStrategy
	instanceVariableNames: 'method compiler'
	package: 'ContextAmber'!

!InliningStrategy methodsFor: 'accessing'!

base
	^ self method methodClass
!

compiler
	compiler = nil
		ifTrue: [ compiler := Compiler new ].
	^ compiler
!

method
	^ method
!

method: aCompiledMethod
	method := aCompiledMethod.
!

protocol
	^ self method protocol
!

selector
	^ self method selector
! !

!InliningStrategy methodsFor: 'wrapper'!

installWrapper
	ClassBuilder new installMethod: self wrapper forClass: self base protocol: self protocol.
!

wrapper
	| wrapper wrapperTemplate methodSignature |
	methodSignature := ''.
	(method selector tokenize: ':') allButLast with: method arguments do: [ :sel :arg | methodSignature := methodSignature, sel, ': ', arg, ' ' ].
	methodSignature = '' ifTrue: [ methodSignature := method selector ].
	wrapperTemplate := (self class \> #wrapperTemplate) source.
	wrapperTemplate := wrapperTemplate replace: 'wrapperTemplate' with: methodSignature.
	wrapperTemplate := wrapperTemplate replace: 'SELECTOR' with: '#', method selector.
	wrapperTemplate := wrapperTemplate replace: 'ARGUMENTS' with: '{ ', (method arguments join: '. '), ' }'.
	wrapper := self compiler eval: (self compiler compile: wrapperTemplate forClass: self base).
	wrapper fn basicAt: #selector put: method selector.
	wrapper fn basicAt: #original put: method.
	wrapper fn basicAt: #compiledSource put: method fn compiledSource.
	wrapper basicAt: #args put: method arguments.
	wrapper selector: method selector.
	wrapper source: method source.
	^ wrapper
! !

InliningStrategy class instanceVariableNames: 'instance'!

!InliningStrategy class methodsFor: 'singleton'!

on: aCompiledMethod
	instance = nil
		ifTrue: [ instance := self new ].
	instance method: aCompiledMethod.
	^ instance
! !

InliningStrategy subclass: #ClassWideInliningStrategy
	instanceVariableNames: ''
	package: 'ContextAmber'!

!ClassWideInliningStrategy methodsFor: 'inlining'!

installInlinedWithLayers: activeLayers
	self method fn: ((self base \> self selector) methodCache at: activeLayers).
	ClassBuilder new installMethod: self method forClass: self base protocol: self protocol.
!

updateMethodAST: activeLayers
	| source |
	source := (self class \> #updateMethodTemplate) source.
	source := source replace: 'SELECTOR' with: '#', self selector.
	source := source replace: 'ACTIVELAYERS' with: '''', activeLayers asCompositionSignature, ''''.
	source := source replace: 'ARGUMENTS' with: '{ ', ((self base \> self selector) arguments join: '. '), ' }'.
	^ Smalltalk parse: source
!

updateMethodTemplate
	(self compositionSignature = ACTIVELAYERS) ifFalse: [ 
		(self class \> SELECTOR) inliningStrategy installInlinedWithLayers: self activeLayers.
		^ self perform: SELECTOR withArguments: ARGUMENTS ]
! !

!ClassWideInliningStrategy methodsFor: 'layer composition'!

compositionChangeForObject: anObject
	anObject markLayersDirty.
!

globalLayerCompositionChanged
	self base incrementLayerCompositionVersion.
! !

!ClassWideInliningStrategy methodsFor: 'wrapper'!

wrapperTemplate
	(self class \> SELECTOR) inliningStrategy installInlinedWithLayers: self activeLayers.
	^ self perform: SELECTOR withArguments: ARGUMENTS
! !

InliningStrategy subclass: #ObjectWideInliningStrategy
	instanceVariableNames: ''
	package: 'ContextAmber'!

!ObjectWideInliningStrategy methodsFor: 'inlining'!

installInlinedWithLayers: layerComposition on: object
	object basicAt: self selector asJavaScriptMethodName put: ((self base \> self selector) methodCache at: layerComposition).
!

updateMethodAST: activeLayers
	| source |
	source := (self class \> #updateMethodTemplate) source.
	source := source replace: 'SELECTOR' with: '#', self selector.
	source := source replace: 'ACTIVELAYERS' with: '{ ', ((activeLayers collect: [ :layer | layer id ]) join: '. '), ' }'.
	source := source replace: 'ARGUMENTS' with: '{ ', ((self base \> self selector) arguments join: '. '), ' }'.
	source := source replace: 'GLOBALSIGNATURE' with: '''', (self base \> self selector) globalCompositionSignature, ''''.
	^ Smalltalk parse: source
!

updateMethodTemplate
	GLOBALSIGNATURE ~= (self globalCompositionSignatureFor: SELECTOR) ifTrue: [
		(self class \> SELECTOR) inliningStrategy installInlinedWithLayers: self activeLayers on: self.
		^ self perform: SELECTOR withArguments: ARGUMENTS ].
! !

!ObjectWideInliningStrategy methodsFor: 'layer composition'!

compositionChangeForObject: anObject
	anObject basicDelete: self selector asJavaScriptMethodName.
!

globalLayerCompositionChanged
	(self base \> self selector) globalLayerCompositionChanged.
! !

!ObjectWideInliningStrategy methodsFor: 'wrapper'!

wrapperTemplate
	self basicAt: SELECTOR asJavaScriptMethodName put: ((self class \> SELECTOR) methodCache at: self activeLayers).
	^ self perform: SELECTOR withArguments: ARGUMENTS
! !

Object subclass: #Layer
	instanceVariableNames: 'id'
	package: 'ContextAmber'!

!Layer methodsFor: 'accessing'!

asString
	^ self id asString
!

id
	^ id
! !

!Layer methodsFor: 'default activation'!

activate
	ContextAmber defaultActive indexOf: self ifAbsent: [ 
		ContextAmber defaultActive add: self.
		self class globalLayerCompositionChanged ].
!

deactivate
	ContextAmber defaultActive remove: self ifAbsent: [ ^ self ].
	self class globalLayerCompositionChanged.
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
	nextId := nextId + 1.
	^ nextId
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

!Layer class methodsFor: 'layer composition'!

compositionChangeForObject: anObject
	self partialClasses do: [ :partial |
		partial compositionChangeForObject: anObject ].
!

globalLayerCompositionChanged
	"TODO: get list of partial selectors here, so that we do not increment a version number more than once"
	self partialClasses do: [ :partial |
		partial globalLayerCompositionChanged ].
! !

!Layer class methodsFor: 'testing'!

affectsClass: base
	^ self partialClasses anySatisfy: [ :partial | partial base = base ]
!

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

Object subclass: #MethodCache
	instanceVariableNames: 'keys values proceedInliner'
	package: 'ContextAmber'!

!MethodCache methodsFor: 'accessing'!

at: layerComposition
	| inlinedMethod compositionKey |
	compositionKey := layerComposition asCompositionSignature.
	
	keys withIndexDo: [ :key :index |
		(key = compositionKey) ifTrue: [ ^ values at: index ] ].
	
	proceedInliner reset.
	inlinedMethod := (proceedInliner
		activeLayers: layerComposition;
		inlinedCompiledMethod) fn.
		
	keys addFirst: compositionKey.
	values addFirst: inlinedMethod.
	
	keys size > self maxSize ifTrue: [
		keys removeLast.
		values removeLast ].
	
	^ inlinedMethod
!

maxSize
	^ 3
!

proceedInliner
	^ proceedInliner
!

proceedInliner: anInliner
	proceedInliner := anInliner.
! !

!MethodCache methodsFor: 'initializing'!

initialize
	keys := OrderedCollection new.
	values := OrderedCollection new.
! !

!MethodCache class methodsFor: 'instance creation'!

on: aCompiledMethod
	| inliner |
	inliner := ASTProceedInliner new
		selector: aCompiledMethod selector;
		base: aCompiledMethod methodClass;
		yourself.
	^ self new
		proceedInliner: inliner;
		yourself
! !

BlockNode subclass: #PartialBlockNode
	instanceVariableNames: ''
	package: 'ContextAmber'!

!PartialBlockNode methodsFor: 'testing'!

isPartialBlockNode
	^ true
! !

!PartialBlockNode methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitPartialBlockNode: self
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
		self methods do: [ :method | self handleMethodAdded: method ] ].
! !

!PartialClass class methodsFor: 'layer composition'!

compositionChangeForObject: anObject
	self methods do: [ :method | (self base \> method selector) inliningStrategy compositionChangeForObject: anObject ].
!

globalLayerCompositionChanged
	self methods do: [ :method | (self base \> method selector) inliningStrategy globalLayerCompositionChanged ].
! !

!PartialClass class methodsFor: 'partial methods'!

handleMethodAdded: method
	| isPartialMethod |
	isPartialMethod := (self base canUnderstand: method selector) and: [ (self base \> method selector) protocol ~= '*Context-Hidden' ].
	isPartialMethod
			ifTrue: [ (self base \> method selector) inliningStrategy installWrapper ]
			ifFalse: [ | protocol | "TODO: handle like partial method"
				protocol := method protocol.
				ClassBuilder new installMethod: method forClass: self base protocol: '*Context-Hidden'.
				method protocol: protocol ].
! !

!PartialClass class methodsFor: 'testing'!

hasPartial: selector
	^ self includesSelector: selector
!

isPartial
	^ self ~= PartialClass
! !

!AssignmentNode methodsFor: '*ContextAmber'!

replace: aNode with: anotherNode
	super replace: aNode with: anotherNode.
	left = aNode ifTrue: [ self left: anotherNode ].
	right = aNode ifTrue: [ self right: anotherNode ].
! !

!Behavior methodsFor: '*ContextAmber'!

\> aString
	< return self['methods'][aString]; >
!

addPartial: class
	self ensurePartialsCollectionInitialized.
	self partials add: class.
!

ensurePartialsCollectionInitialized
	< if (typeof(self['partials']) === 'undefined') {
		self['partials'] = $core.Set._new();
	} >
!

globalLayerComposition
	^ ContextAmber globalLayerComposition select: [ :layer | layer class affectsClass: self ]
!

incrementLayerCompositionVersion
	< if (typeof(self['layerCompositionVersion']) === 'undefined') {
		self['layerCompositionVersion'] = 2;
	} else {
		self['layerCompositionVersion'] = self['layerCompositionVersion'] + 1;
	} >
!

layerCompositionVersion
	< if (typeof(self['layerCompositionVersion']) === 'undefined') {
		return 1;
	} else {
		return self['layerCompositionVersion'];
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
	self partials remove: class ifAbsent: [ ContextAmber warning: 'list of partial classes out of sync' ].
! !

!BlockClosure methodsFor: '*ContextAmber'!

apply: anObject valueWithPossibleArguments: aCollection
	<return self.apply(anObject, aCollection);>
!

sourceString
	< return self.toString() >
!

value: firstArg value: secondArg value: thirdArg value: forthArg
	<return self(firstArg, secondArg, thirdArg, forthArg);>
!

value: firstArg value: secondArg value: thirdArg value: forthArg value: fifthArg
	<return self(firstArg, secondArg, thirdArg, forthArg, fifthArg);>
!

value: firstArg value: secondArg value: thirdArg value: forthArg value: fifthArg value: sixthArg
	<return self(firstArg, secondArg, thirdArg, forthArg, fifthArg, sixthArg);>
!

withLayer: layer
	| result |
	ContextAmber scopedStack add: layer.
	layer class globalLayerCompositionChanged.
	result := self value.
	ContextAmber scopedStack pop.
	layer class globalLayerCompositionChanged.
	^ result
!

withoutLayer: layer
	| result |
	ContextAmber scopedStack remove: layer.
	layer class globalLayerCompositionChanged.
	result := self value.
	ContextAmber scopedStack pop.
	layer class globalLayerCompositionChanged.
	^ result
! !

!BlockNode methodsFor: '*ContextAmber'!

isPartialBlockNode
	^ false
!

replace: aNode with: anotherNode
	| index |
	super replace: aNode with: anotherNode.
	anotherNode parent: self.
	index := self parameters indexOf: aNode ifAbsent: [ ^ self ].
	self parameters at: index put: anotherNode.
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

!CascadeNode methodsFor: '*ContextAmber'!

replace: aNode with: anotherNode
	super replace: aNode with: anotherNode.
	receiver = aNode ifTrue: [
		anotherNode parent: self.
		self receiver: anotherNode ].
! !

!Class methodsFor: '*ContextAmber'!

isLayer
	^ false
!

isPartial
	^ false
! !

!CompiledMethod methodsFor: '*ContextAmber'!

globalCompositionSignature
	| signature |
	signature := self basicAt: 'globalSignature'.
	signature ifNil: [ self globalLayerCompositionChanged ].
	^ self basicAt: 'globalSignature'
!

globalLayerCompositionChanged
	| composition |
	composition := self methodClass globalLayerComposition select: [ :layer | layer class hasPartial: self selector for: self methodClass ].
	self basicAt: 'globalSignature' put: composition asCompositionSignature.
!

hasPartial
	^ self methodClass partials anySatisfy: [ :partial | partial hasPartial: self selector ].
!

inliningStrategy
	"^ ObjectWideInliningStrategy on: self"
	^ ClassWideInliningStrategy on: self
!

isPartial
	^ (self fn basicAt: #original) isNil not
!

methodCache
	< if (typeof(self['methodCache']) === 'undefined') {
		self['methodCache'] = smalltalk.MethodCache._on_(self);
	} 
	return self['methodCache'];
	>
! !

!Compiler methodsFor: '*ContextAmber'!

inlineLayers: activeLayers
	| method |
	method := ContextInliningCodeGenerator new
		activeLayers: activeLayers;
		source: self source;
		currentClass: self currentClass;
		compileNode: (Smalltalk parse: self source).
	^ self eval: method
! !

!IRASTTranslator methodsFor: '*ContextAmber'!

visitPartialBlockNode: aNode
	| closure |
	closure := IRPartialClosure new
		arguments: aNode parameters;
		requiresSmalltalkContext: aNode requiresSmalltalkContext;
		scope: aNode scope;
		yourself.
	aNode scope temps do: [ :each |
		closure add: (IRTempDeclaration new
			name: each name;
			scope: aNode scope;
			yourself) ].
	aNode nodes do: [ :each | closure add: (self visit: each) ].
	^ closure
! !

!IRClosure methodsFor: '*ContextAmber'!

isPartialClosure
	^ false
! !

!IRJSTranslator methodsFor: '*ContextAmber'!

visitIRPartialClosure: anIRClosure
	self stream
		nextPutClosureWith: [
			self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |
					each name asVariableName ]).
			self stream
				nextPutBlockContextFor: anIRClosure
				during: [ 
					self stream nextPutNonLocalReturnHandlingWith: [ super visitIRClosure: anIRClosure ] ] ]
		arguments: anIRClosure arguments
! !

!IRVisitor methodsFor: '*ContextAmber'!

visitIRPartialClosure: anIRPartialClosure
	^ self visitIRClosure: anIRPartialClosure
! !

!LexicalScope methodsFor: '*ContextAmber'!

args: aDictionary
	args := aDictionary.
!

temps: aDictionary
	temps := aDictionary.
! !

!Metaclass methodsFor: '*ContextAmber'!

isPartial
	^ false
! !

!MethodNode methodsFor: '*ContextAmber'!

isPartialBlockNode
	^ false
! !

!Node methodsFor: '*ContextAmber'!

addFirstNode: aNode
	self nodes addFirst: aNode.
	aNode parent: self
!

replace: aNode with: anotherNode
	| index |
	anotherNode parent: self.
	index := self nodes indexOf: aNode ifAbsent: [ ^ self ].
	self nodes at: index put: anotherNode.
!

replaceWith: aNode
	self parent replace: self with: aNode
! !

!NodeVisitor methodsFor: '*ContextAmber'!

visitPartialBlockNode: aNode
	^ self visitBlockNode: aNode
! !

!Object methodsFor: '*ContextAmber'!

activateLayer: aLayer
	self initializeLayers.
	self layerStack add: aLayer.
	aLayer class compositionChangeForObject: self.
!

activeLayers
	| layers |
	layers := ContextAmber globalLayerComposition.

	self layerStack ifNotNil: [
		self layerStack do: [ :operation :layer | 
			operation = #add
				ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]
				ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].
						
	^ layers
!

compositionSignature
	< if (self['activeLayersDirty'] === true || self['activeLayersDirty'] === undefined || self['activeLayersVersion'] !!= self.klass._layerCompositionVersion()) {
		self['compositionSignature'] = self._activeLayers()._asCompositionSignature();
		self['activeLayersDirty'] = false;
		self['activeLayersVersion'] = self._class()._layerCompositionVersion();
	}
	return self['compositionSignature']; >
!

deactivateLayer: aLayer
	self initializeLayers.
	self layerStack remove: aLayer.
	aLayer class compositionChangeForObject: self.
!

globalCompositionSignatureFor: selector
	< if (self.klass.methods[selector]['globalSignature'] === undefined) {
		return '';
	} else {
		return self.klass.methods[selector]['globalSignature'];
	} >
!

initializeLayers
	< if (self['layerStack'] === undefined) {
		self['layerStack'] = smalltalk.LayerStack._new();
	} >
!

layerStack
	< return self['layerStack']; >
!

markLayersDirty
	< self['activeLayersDirty']  = true; >
!

resetLayer: aLayer
	self initializeLayers.
	self layerStack reset: aLayer.
	aLayer class compositionChangeForObject: self.
! !

!ReturnNode methodsFor: '*ContextAmber'!

nonLocalReturn
	^ self scope isMethodScope not & self scope node isPartialBlockNode not
! !

!SemanticAnalyzer methodsFor: '*ContextAmber'!

theClass: aClass
	(aClass notNil and: [ aClass isPartial ])
		ifTrue: [ theClass := aClass base ]
		ifFalse: [ theClass := aClass ].
! !

!SendNode methodsFor: '*ContextAmber'!

replace: aNode with: anotherNode
	| idx |
	receiver = aNode ifTrue: [ self receiver: anotherNode ].
	anotherNode parent: self.
	idx := self arguments indexOf: aNode ifAbsent: [ ^ self ].
	self arguments at: idx put: anotherNode.
! !

!SequenceableCollection methodsFor: '*ContextAmber'!

asCompositionSignature
	^ (self collect: [ :layer | layer asString ]) join: '-'
!

reverseDo: aBlock
	<
		self = self._numericallyIndexable();
		for(var i=self.length - 1; -1 < i; i--) {
			aBlock._value_(self[i]);
		}
	>
! !

