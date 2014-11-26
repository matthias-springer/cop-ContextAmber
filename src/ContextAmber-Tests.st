Smalltalk createPackage: 'ContextAmber-Tests'!
TestCase subclass: #ContextAmberTest
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

Object subclass: #DemoClass
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!DemoClass methodsFor: 'not yet classified'!

wrapperTemplate
	console log: 'TODO: check layer composition, call layer on top of stack'.
!

wrapperTemplate
	console log: 'TODO: check layer composition, call layer on top of stack'.
! !

LayerClass subclass: #DemoClassLayer
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!DemoClassLayer class methodsFor: 'initializing'!

initialize
	baseClass := DemoClass.
! !

Object subclass: #DemoLayer
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!DemoLayer methodsFor: 'not yet classified'!

jsMethod
	< x = self; >
!

method1
! !

