Smalltalk createPackage: 'ContextAmber-Tests'!
TestCase subclass: #ASTProceedInlinerTest
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ASTProceedInlinerTest methodsFor: 'tests'!

testSkipLayers
	| inliner skipped layer |
	layer := ContextAmberDemoLayer new.

	"skip all layers"
	inliner := ASTProceedInliner 
		for: #method3 
		in: ContextAmberDemoClass2 
		withLayers: { layer. ContextAmberDemoLayer2 new }.
	skipped := inliner skipLayers.
	self assert: skipped size equals: 0.
	
	"skip last layer"
	inliner := ASTProceedInliner 
		for: #method2 
		in: ContextAmberDemoClass2 
		withLayers: { layer. ContextAmberDemoLayer2 new }.
	skipped := inliner skipLayers.
	self assert: skipped size equals: 1.
	self assert: (skipped at: 1) equals: layer.
	
	"no skipping"
	inliner := ASTProceedInliner
		for: #method2
		in: ContextAmberDemoClass2
		withLayers: { ContextAmberDemoLayer2 new. layer }.
	skipped := inliner skipLayers.
	self assert: skipped size equals: 2.
	self assert: (skipped at: 2) equals: layer.
!

testValueSelector
	| inliner |
	inliner := ASTProceedInliner new.
	
	self assert: (inliner valueSelector: 0) equals: #value.
	self assert: (inliner valueSelector: 1) equals: #value:.
	self assert: (inliner valueSelector: 3) equals: #value:value:value:.
! !

Object subclass: #ContextAmberDemoClass1
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoClass1 methodsFor: 'not yet classified'!

callMethod1
	self error: 'expected partial'.
!

callMethod4
	self error: 'expected partial'.
!

method1 ^ 5
!

method3
	^ 90
!

method4
	^ 90
!

method5
	^ 100
!

methodWithBlock: var1 and: var2
	var1 = var2
		ifTrue: [ ^ var1 * 2 ].
	^ var1 + var2
!

multiply: aNumber with: anotherNumber
	^ aNumber * anotherNumber
! !

Object subclass: #ContextAmberDemoClass2
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoClass2 methodsFor: 'not yet classified'!

add: aNumber and: anotherNumber
	^ aNumber + anotherNumber
!

method1
!

method2
! !

Layer subclass: #ContextAmberDemoLayer
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoLayer class methodsFor: 'initializing'!

partialClasses
	^ { ContextAmberDemoPartialClass1. ContextAmberDemoPartialClass2 }
! !

Layer subclass: #ContextAmberDemoLayer2
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoLayer2 class methodsFor: 'initializing'!

partialClasses
	^ { ContextAmberDemoPartial2Class2 }
! !

PartialClass subclass: #ContextAmberDemoPartial2Class2
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoPartial2Class2 methodsFor: 'not yet classified'!

add: aNumber and: anotherNumber
	^ (self proceed: aNumber * 2 value: anotherNumber) + 5
! !

!ContextAmberDemoPartial2Class2 class methodsFor: 'accessing'!

base ^ 
	ContextAmberDemoClass2
! !

PartialClass subclass: #ContextAmberDemoPartialClass1
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoPartialClass1 methodsFor: 'not yet classified'!

callMethod1
	^ self method1
!

callMethod4
	^ self method4
!

method1
	^ 10
!

method5
	^ 110
!

methodWithBlock: var1 and: var2
	^ self proceed: 2 * var1 value: 3 * var2.
!

multiply: aNumber with: anotherNumber
	^ aNumber * anotherNumber * 10
! !

!ContextAmberDemoPartialClass1 class methodsFor: 'accessing'!

base ^ 
	ContextAmberDemoClass1
! !

PartialClass subclass: #ContextAmberDemoPartialClass2
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoPartialClass2 methodsFor: 'not yet classified'!

add: aNumber and: anotherNumber
	^ (self proceed: aNumber + 1 value: anotherNumber) * 10
!

method2
! !

!ContextAmberDemoPartialClass2 class methodsFor: 'accessing'!

base ^ 
	ContextAmberDemoClass2
! !

TestCase subclass: #ContextAmberTest
	instanceVariableNames: 'object layer1 layer2 layer3'
	package: 'ContextAmber-Tests'!

!ContextAmberTest methodsFor: 'running'!

setUp
	object := Object new.
	layer1 := ContextAmberDemoLayer new.
	layer2 := ContextAmberDemoLayer new.
	layer3 := ContextAmberDemoLayer new.
!

testAffectsClass
	self assert: (ContextAmberDemoLayer2 affectsClass: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer2 affectsClass: ContextAmberDemoClass1).
!

testClassWideLayerCompositionVersion
	| version |
	version := DemoClass layerCompositionVersion.
	DemoClass incrementLayerCompositionVersion.
	self assert: DemoClass layerCompositionVersion equals: version + 1.
!

testDefaultLayers
	| layers |
	self assert: self activeLayers size equals: 0.
	layer1 activate.
	
	layers := self activeLayers.
	self assert: layers size equals: 1.
	self assert: layers first equals: layer1.
	
	layer1 deactivate.
	self assert: self activeLayers size equals: 0.
!

testGlobalLayerComposition
	self assert: ContextAmber globalLayerComposition size equals: 0.
	
	layer1 activate.
	self assert: ContextAmber globalLayerComposition size equals: 1.
	self assert: (ContextAmber globalLayerComposition at: 1) equals: layer1.
	
	layer2 activate.
	self assert: ContextAmber globalLayerComposition size equals: 2.
	self assert: (ContextAmber globalLayerComposition at: 1) equals: layer1.
	self assert: (ContextAmber globalLayerComposition at: 2) equals: layer2.
	
	layer1 deactivate.
	self assert: ContextAmber globalLayerComposition size equals: 1.
	self assert: (ContextAmber globalLayerComposition at: 1) equals: layer2.
	
	layer2 deactivate.
	self assert: ContextAmber globalLayerComposition size equals: 0.
!

testGlobalLayerCompositionWithScoped
	| comp |
	self assert: ContextAmber globalLayerComposition size equals: 0.
	
	layer1 activate.
	self assert: ContextAmber globalLayerComposition size equals: 1.
	self assert: (ContextAmber globalLayerComposition at: 1) equals: layer1.
	
	comp := [ ContextAmber globalLayerComposition ] withLayer: layer2.
	self assert: comp size equals: 2.
	self assert: (comp at: 1) equals: layer1.
	self assert: (comp at: 2) equals: layer2.
	
	layer1 deactivate.
	self assert: ContextAmber globalLayerComposition size equals: 0.
	
	comp := [ ContextAmber globalLayerComposition ] withLayer: layer1.
	self assert: comp size equals: 1.
	self assert: (comp at: 1) equals: layer1.

	self assert: ContextAmber globalLayerComposition size equals: 0.
!

testHasPartial
	self assert: (ContextAmberDemoClass1>>#method1) hasPartial.
	self deny: (ContextAmberDemoClass1>>#method4) hasPartial.
!

testObjectLayers
	| layers |
	self assert: self activeLayers size equals: 0.
	layer1 activate.
	
	[ object activateLayer: layer3.
		object deactivateLayer: layer2.
		
		layers := object activeLayers.
		self assert: layers size equals: 2.
		self assert: (layers at: 1) equals: layer1.
		self assert: (layers at: 2) equals: layer3.
		
		object resetLayer: layer2.
		object resetLayer: layer3 ] withLayer: layer2.
		
	layer1 deactivate.
!

testReverseDo
	| array arrayReversed |
	array := {1. 8. 9 }.
	arrayReversed := OrderedCollection new.
	
	array reverseDo: [ :item | arrayReversed add: item ].
	(1 to: 3) do: [ :index |
		self assert: (arrayReversed at: index) equals: (array reversed at: index) ].
!

testScopedLayers
	| layers |
	self assert: self activeLayers size equals: 0.
	layer1 activate.
	
	[ layers := self activeLayers.
		self assert: layers size equals: 2.
		self assert: (layers at: 1) equals: layer1.
		self assert: (layers at: 2) equals: layer2.
		
		[ layers := self activeLayers.
		self assert: layers size equals: 1.
		self assert: (layers at: 1) equals: layer2 ]
			withoutLayer: layer1 ]
		withLayer: layer2.
		
	layer1 deactivate.
! !

Object subclass: #DemoClass
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!DemoClass methodsFor: 'not yet classified'!

method1
	console log: 'TODO: check layer composition, call layer on top of stack'.
!

wrapperTemplate
	console log: 'TODO: check layer composition, call layer on top of stack'.
! !

PartialClass subclass: #DemoPartialClass
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!DemoPartialClass class methodsFor: 'accessing'!

base ^ 
	DemoClass
! !

TestCase subclass: #LayerStackTest
	instanceVariableNames: 'stack layer1 layer2 layer3 layer4'
	package: 'ContextAmber-Tests'!

!LayerStackTest methodsFor: 'running'!

setUp
	stack := LayerStack new.
	layer1 := ContextAmberDemoLayer new.
	layer2 := ContextAmberDemoLayer new.
	layer3 := ContextAmberDemoLayer new.
	layer4 := ContextAmberDemoLayer new.
! !

!LayerStackTest methodsFor: 'tests'!

testAdd
	| result |
	stack add: layer1.
	stack add: layer2.
	stack add: layer3.
	
	self assert: stack size equals: 3.
	result := OrderedCollection new.
	
	stack do: [ :op :el | result add: el ].
	self assert: (result at: 1) equals: layer1.
	self assert: (result at: 2) equals: layer2.
	self assert: (result at: 3) equals: layer3.
!

testEmptyStack	
	self assert: stack size equals: 0.
	stack do: [ :op :value | self error: 'no element expected' ].
!

testNotALayer
	self should: [ stack add: Object new ] raise: Error.
	self should: [ stack remove: Object new ] raise: Error.
	self should: [ stack reset: Object new ] raise: Error.
!

testPop
	| result |
	stack add: layer1.
	stack add: layer2.
	stack add: layer3.
	stack pop.
	
	self assert: stack size equals: 2.
	result := OrderedCollection new.
	
	stack do: [ :op :el | result add: el ].
	self assert: (result at: 1) equals: layer1.
	self assert: (result at: 2) equals: layer2.
!

testRemove
	| result |
	stack add: layer1.
	stack add: layer2.
	stack add: layer3.
	stack remove: layer2.
	stack remove: layer4.
	
	self assert: stack size equals: 4.
	result := OrderedCollection new.
	
	stack do: [ :op :el | result add: el ].
	self assert: (result at: 1) equals: layer1.
	self assert: (result at: 2) equals: layer3.
	self assert: (result at: 3) equals: layer2.
	self assert: (result at: 4) equals: layer4.
!

testReset
	| result |
	stack add: layer1.
	stack add: layer2.
	stack add: layer3.
	stack remove: layer1.
	stack add: layer1.
	stack reset: layer1.
	stack reset: layer2.
	
	self assert: stack size equals: 1.
	result := OrderedCollection new.
	
	stack do: [ :op :el | result add: el ].
	self assert: (result at: 1) equals: layer3.
! !

TestCase subclass: #LayerTest
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!LayerTest methodsFor: 'tests'!

testBaseMethodWithoutLayer
	| obj |
	obj := ContextAmberDemoClass1 new.
	self assert: obj method5 equals: 100.
!

testCreation
	| layer |
	layer := ContextAmber newLayer: #ContextAmberTestLayer partialClasses: {} instanceVariableNames: '' package: 'ContextAmber-Tests'.
	self assert: layer isLayer.
	self assert: layer partialClasses size equals: 0.
	Smalltalk removeClass: layer.
!

testDefaultLayer
	| obj layer |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	self assert: obj method1 equals: 5.
	
	layer activate.
	self assert: obj method1 equals: 10.
	
	layer deactivate.
	self assert: obj method1 equals: 5.
!

testDefaultScopedLayer
	| obj layer |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	self assert: obj method1 equals: 5.
	
	layer activate.
	self assert: obj method1 equals: 10.
	
	self assert: ([ obj method1 ] withoutLayer: layer) equals: 5.
	self assert: obj method1 equals: 10.
	
	layer deactivate.
	self assert: obj method1 equals: 5.
!

testHasPartial
	self assert: (ContextAmberDemoLayer hasPartial: #method2 for: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer hasPartial: #method1 for: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer hasPartial: #undef for: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer hasPartial: #method1 for: nil).
!

testInlinedNonLocalReturn
	| obj layer |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	layer activate.
	
	self assert: (obj methodWithBlock: 3 and: 2) equals: 12.
	self assert: (obj methodWithBlock: 0 and: 1) equals: 3.
	
	layer deactivate.
!

testMultiArgsMethod
	| layer obj |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	self assert: (obj multiply: 6 with: 7) equals: 42.
	
	layer activate.
	self assert: (obj multiply: 6 with: 7) equals: 420.
	
	layer deactivate.
!

testMultiArgsProceed
	| layer1 obj |
	obj := ContextAmberDemoClass2 new.
	layer1 := ContextAmberDemoLayer new.
	
	self assert: (obj add: 5 and: 8) equals: 13.
	
	layer1 activate.
	self assert: (obj add: 5 and: 8) equals: 140.
	
	layer1 deactivate.
!

testMultiLevelInline
	| layer1 layer2 obj |
	obj := ContextAmberDemoClass2 new.
	layer1 := ContextAmberDemoLayer new.
	layer2 := ContextAmberDemoLayer2 new.
	
	self assert: (obj add: 5 and: 8) equals: 13.
	
	layer1 activate.
	self assert: ([ (obj add: 5 and: 8) ] withLayer: layer2) equals: 195.
	
	layer1 deactivate.
!

testObjectLayer
	| obj layer |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	self assert: obj method1 equals: 5.
	
	obj activateLayer: layer.
	self assert: obj method1 equals: 10.
	
	"obj deactivateLayer: layer.
	self assert: obj method1 equals: 5."
!

testPartialFor
	self assert: (ContextAmberDemoLayer2 partialFor: ContextAmberDemoClass2) equals: ContextAmberDemoPartial2Class2.
	self should: [ ContextAmberDemoLayer2 partialFor: ContextAmberDemoClass1 ] raise: Error.
!

testScopedLayer
	| obj layer |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	
	self assert: obj method1 equals: 5.
	self assert: ([ obj method1 ] withLayer: layer) equals: 10.
	self assert: obj method1 equals: 5.
!

testSelfCallFromPartial
	| obj layer |
	obj := ContextAmberDemoClass1 new.
	layer := ContextAmberDemoLayer new.
	layer activate.
	
	self assert: obj callMethod1 equals: 10.
	self assert: obj callMethod4 equals: 90.
	
	layer deactivate.
! !

TestCase subclass: #PartialClassTest
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!PartialClassTest methodsFor: 'tests'!

testBehaviorPartials
	| partials |
	partials := ContextAmberDemoClass2 partials.
	self assert: partials size equals: 2.
	self assert: (partials includes: ContextAmberDemoPartialClass2).
	self assert: (partials includes: ContextAmberDemoPartial2Class2).
!

testCreation
	| partial |
	partial := ContextAmber newPartialClass: #ContextAmberTestPartial baseClass: DemoClass package: 'ContextAmber-Tests'.
	self assert: partial base equals: DemoClass.
	self assert: partial isPartial.
	Smalltalk removeClass: partial.
!

testCreationWithInvalidBase
	self 
		should: [ ContextAmber newPartialClass: #ContextAmberTestPartial baseClass: 7 package: 'ContextAmber-Tests' ]
		raise: Error.
	self assert: (Smalltalk at: #ContextAmberTestPartial) equals: nil.
!

testHasPartial
	self assert: (ContextAmberDemoPartialClass1 hasPartial: #method1).
	self deny: (ContextAmberDemoPartialClass1 hasPartial: #method2).
!

testWrapperInstalledOnCompilation
	self deny: (ContextAmberDemoClass1 >> #method3) isPartial.
	ContextAmberDemoPartialClass1 compile: 'method3'.
	self assert: (ContextAmberDemoClass1 >> #method3) isPartial.
!

testWrapperInstalledOnRecompilation
	self assert: (ContextAmberDemoClass1 >> #method1) isPartial.
	ContextAmberDemoClass1 compile: 'method1 ^ 5'.
	self assert: (ContextAmberDemoClass1 >> #method1) isPartial.
!

testWrapperInstalledOnStartup
	self deny: (ContextAmberDemoClass2 >> #method1) isPartial.
	self assert: (ContextAmberDemoClass2 >> #method2) isPartial.
! !

