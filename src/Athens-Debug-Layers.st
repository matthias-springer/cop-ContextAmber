Smalltalk createPackage: 'Athens-Debug-Layers'!
Layer subclass: #ControlPointLayer
	instanceVariableNames: ''
	package: 'Athens-Debug-Layers'!

!ControlPointLayer class methodsFor: 'initializing'!

partialClasses
	^ { ControlPointPath }
! !

PartialClass subclass: #ControlPointPath
	instanceVariableNames: ''
	package: 'Athens-Debug-Layers'!

!ControlPointPath methodsFor: 'not yet classified'!

arcTo: newEndPoint angle: angle cw: aBool
	self proceed: newEndPoint value: angle value: aBool.
	self drawControlPoint: newEndPoint.
!

close
	self proceed.
	self drawControlPoint: endPoint.
!

curveVia: pt1 and: pt2 to: aPoint
	self proceed: pt1 value: pt2 value: aPoint.
	self drawControlPoint: pt1.
	self drawControlPoint: pt2.
	self drawControlPoint: aPoint.
	self drawControlPoint: endPoint.
!

curveVia: pt1 to: aPoint
	self proceed: pt1 value: aPoint.
	self drawControlPoint: pt1.
	self drawControlPoint: aPoint.
	self drawControlPoint: endPoint.
!

drawControlPoint: aPoint
	context2D push.
	context2D fillStyle: 'rgba(0, 0, 0, 0.5)'.
	context2D fillRect: (aPoint - (5 @ 5) corner: 10 @ 10).
	context2D pop.
!

lineTo: aPoint
	self proceed: aPoint.
	self drawControlPoint: endPoint.
!

moveTo: aPoint
	self proceed: aPoint.
	self drawControlPoint: endPoint.
!

newPath
	self proceed.
	self drawControlPoint: endPoint.
! !

!ControlPointPath class methodsFor: 'accessing'!

base ^ 
	AthensHTMLPath
! !

