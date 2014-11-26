Smalltalk createPackage: 'ContextAmber'!
Object subclass: #ContextAmber
	instanceVariableNames: ''
	package: 'ContextAmber'!

ContextAmber class instanceVariableNames: 'instance defaultActive scopedStack'!

!ContextAmber class methodsFor: 'accessing'!

defaultActive
	^ defaultActive
! !

!ContextAmber class methodsFor: 'initializing'!

initialize
	defaultActive := OrderedCollection new.
	scopedStack := LayerStack new.
! !

!ContextAmber class methodsFor: 'layer creation'!

newLayer: name layerClasses: layerClasses instanceVariableNames: instVarNames pacakge: package
	| layer |
	layer := Layer subclass: name instanceVariableNames: instVarNames package: package.
	layer layerClasses: layerClasses.
	^ layer
!

newLayerClass: name baseClass: baseClass instanceVariableNames: instVarNames package: package
	| layerClass |
	layerClass := LayerClass subclass: name instanceVariableNames: instVarNames package: package.
	layerClass baseClass: baseClass.
	^ layerClass
! !

!ContextAmber class methodsFor: 'singleton'!

instance
	instance ifNil: [ instance := self new ].
	^ instance
! !

IRVisitor subclass: #IRProceedInliner
	instanceVariableNames: ''
	package: 'ContextAmber'!

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
	instanceVariableNames: 'layerClasses'
	package: 'ContextAmber'!

!Layer methodsFor: 'default activation'!

activate
	ContextAmber defaultActive indexOf: self ifAbsent: [ ContextAmber defaultActive add: self ].
!

deactivate
	ContextAmber defaultActive remove: self ifAbsent: [ ].
! !

Layer class instanceVariableNames: 'layerClasses'!

!Layer class methodsFor: 'accessing'!

layerClasses
	^ layerClasses
!

layerClasses: aCollection
	aCollection do: [ :class | class isClass & class isPartial
		ifFalse: [ self error: 'not a layer class' ] ].
	layerClasses := aCollection.
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
	instanceVariableNames: 'layer'
	package: 'ContextAmber'!

!PartialClass methodsFor: 'accessing'!

layer
	^ layer
!

layer: aLayer
	layer := aLayer.
! !

PartialClass class instanceVariableNames: 'base'!

!PartialClass class methodsFor: 'accessing'!

base
	^ base
!

base: aClass
	aClass isClass ifFalse: [ self error: 'not a class' ].
	base := aClass.
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
	wrapper := compiler eval: (compiler compile: wrapperTemplate forClass: base).
	wrapper fn basicAt: #selector put: method selector.
	wrapper fn basicAt: #original put: method.
	wrapper selector: method selector.
	wrapper makePartial.
	^ wrapper
!

installWrapperForSelector: selector
	| original |
	original := base methodAt: selector.
	ClassBuilder new
		installMethod: (self generateWrapper: original)
		forClass: base
		protocol: original protocol.
!

wrapperTemplate
	| nextLayer selector |
	nextLayer := self activateLayers last.
	selector := arguments callee basicAt: #selector.
	^ (nextLayer class methodAt: selector) fn apply: self withPossibleArguments: arguments
! !

!BlockClosure methodsFor: '*ContextAmber'!

apply: anObject valueWithPossibleArguments: aCollection
	<return self.apply(anObject, aCollection);>
! !

!Class methodsFor: '*ContextAmber'!

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

