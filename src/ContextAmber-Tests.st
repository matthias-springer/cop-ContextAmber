Smalltalk createPackage: 'ContextAmber-Tests'!
Layer subclass: #AaaLayer
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!AaaLayer class methodsFor: 'initializing'!

partialClasses
	^ {}
! !

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

PartialClass subclass: #DemoPartialClass
	instanceVariableNames: ''
	package: 'ContextAmber-Tests'!

!DemoPartialClass class methodsFor: 'accessing'!

base ^ 
	DemoClass
! !

