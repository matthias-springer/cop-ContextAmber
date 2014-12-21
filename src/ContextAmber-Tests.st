Smalltalk createPackage: 'ContextAmber-Tests'!
Object subclass: #ContextAmberDemoClass1
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoClass1 methodsFor: 'not yet classified'!

method1
!

method3
! !

Object subclass: #ContextAmberDemoClass2
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoClass2 methodsFor: 'not yet classified'!

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

!ContextAmberDemoPartial2Class2 class methodsFor: 'accessing'!

base ^ 
	ContextAmberDemoClass2
! !

PartialClass subclass: #ContextAmberDemoPartialClass1
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoPartialClass1 methodsFor: 'not yet classified'!

method1
! !

!ContextAmberDemoPartialClass1 class methodsFor: 'accessing'!

base ^ 
	ContextAmberDemoClass1
! !

PartialClass subclass: #ContextAmberDemoPartialClass2
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!ContextAmberDemoPartialClass2 methodsFor: 'not yet classified'!

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

TestCase subclass: #IRProceedInlinerTest
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!IRProceedInlinerTest methodsFor: 'tests'!

testSkipLayers
	| inliner skipped layer |
	layer := ContextAmberDemoLayer new.
	
	"skip last layer"
	inliner := IRProceedInliner 
		for: #method2 
		in: ContextAmberDemoClass2 
		withLayers: { layer. ContextAmberDemoLayer2 new }.
	skipped := inliner skipLayers.
	self assert: skipped size equals: 1.
	self assert: (skipped at: 1) equals: layer.
	
	"no skipping"
	inliner := IRProceedInliner
		for: #method2
		in: ContextAmberDemoClass2
		withLayers: { ContextAmberDemoLayer2 new. layer }.
	skipped := inliner skipLayers.
	self assert: skipped size equals: 2.
	self assert: (skipped at: 2) equals: layer.
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

testCreation
	| layer |
	layer := ContextAmber newLayer: #ContextAmberTestLayer partialClasses: {} instanceVariableNames: '' package: 'ContextAmber-Tests'.
	self assert: layer isLayer.
	self assert: layer partialClasses size equals: 0.
	Smalltalk removeClass: layer.
!

testHasPartial
	self assert: (ContextAmberDemoLayer hasPartial: #method2 for: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer hasPartial: #method1 for: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer hasPartial: #undef for: ContextAmberDemoClass2).
	self deny: (ContextAmberDemoLayer hasPartial: #method1 for: nil).
!

testPartialFor
	self assert: (ContextAmberDemoLayer2 partialFor: ContextAmberDemoClass2) equals: ContextAmberDemoPartial2Class2.
	self should: [ ContextAmberDemoLayer2 partialFor: ContextAmberDemoClass1 ] raise: Error.
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

testWrapperInstalledOnStartup
	self deny: (ContextAmberDemoClass2 >> #method1) isPartial.
	self assert: (ContextAmberDemoClass2 >> #method2) isPartial.
! !

