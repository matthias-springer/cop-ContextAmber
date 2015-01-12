define("amber-context/Athens-Core-Paints", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Athens-Core-Paints');
$core.packages["Athens-Core-Paints"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('AthensAbstractPaint', $globals.Object, [], 'Athens-Core-Paints');
$core.addMethod(
$core.method({
selector: "asAthensPaintOn:",
protocol: 'converting',
fn: function (anAthensCanvas){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAthensCanvas"],
source: "asAthensPaintOn: anAthensCanvas \x0a    ^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensAbstractPaint);



$core.addClass('AthensPaint', $globals.AthensAbstractPaint, [], 'Athens-Core-Paints');
$core.addMethod(
$core.method({
selector: "asStrokePaintOn:",
protocol: 'converting',
fn: function (aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aCanvas)._surface())._createStrokePaintFor_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asStrokePaintOn:",{aCanvas:aCanvas},$globals.AthensPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "asStrokePaintOn: aCanvas\x0a    \x22default implementation\x22\x0a    ^ aCanvas surface createStrokePaintFor: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createStrokePaintFor:", "surface"]
}),
$globals.AthensPaint);

$core.addMethod(
$core.method({
selector: "fillPath:on:",
protocol: 'rendering',
fn: function (athensBalloonPath,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillPath:on:",{athensBalloonPath:athensBalloonPath,anAthensCanvas:anAthensCanvas},$globals.AthensPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["athensBalloonPath", "anAthensCanvas"],
source: "fillPath: athensBalloonPath on: anAthensCanvas \x0a\x0a    \x22This is a terminal method in rendering dispatch scheme\x0a    canvas->shape->paint. See AthensCanvas>>fillShape: \x22\x0a    \x0a    self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPaint);

$core.addMethod(
$core.method({
selector: "fillRectangle:on:",
protocol: 'rendering',
fn: function (aRect,anAthensCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillRectangle:on:",{aRect:aRect,anAthensCanvas:anAthensCanvas},$globals.AthensPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect", "anAthensCanvas"],
source: "fillRectangle: aRect on: anAthensCanvas\x0a    \x22This is a terminal method in rendering dispatch scheme\x0a    canvas->shape->paint. See AthensCanvas>>fillShape: \x22\x0a    \x0a    self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AthensPaint);



$core.addClass('AthensStrokePaint', $globals.AthensPaint, ['fillPaint', 'width', 'capStyle', 'joinStyle', 'innerJoinStyle', 'miterLimit'], 'Athens-Core-Paints');
$core.addMethod(
$core.method({
selector: "asStrokePaintOn:",
protocol: 'converting',
fn: function (aCanvas){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "asStrokePaintOn: aCanvas\x0a    \x22receiver is stroke paint already\x22\x0a    ^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "capStyle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@capStyle"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "capStyle\x0a\x0a    ^ capStyle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "capStyle:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@capStyle"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "capStyle: anObject\x0a\x0a    capStyle := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "fillPaint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@fillPaint"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fillPaint\x0a\x0a    ^ fillPaint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "fillPaint:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@fillPaint"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fillPaint: anObject\x0a\x0a    fillPaint := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AthensStrokePaint.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@width"]=(1);
self["@capStyle"]="butt";
self["@joinStyle"]="bevel";
self["@innerJoinStyle"]="bevel";
self["@miterLimit"]=(4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AthensStrokePaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    super initialize.\x0a    width := 1.\x0a    capStyle := #butt.\x0a    joinStyle := #bevel.\x0a    innerJoinStyle := #bevel.\x0a    miterLimit := 4.0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "innerJoinStyle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@innerJoinStyle"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "innerJoinStyle\x0a\x0a    ^ innerJoinStyle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "innerJoinStyle:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@innerJoinStyle"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "innerJoinStyle: anObject\x0a\x0a    innerJoinStyle := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "joinStyle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@joinStyle"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "joinStyle\x0a\x0a    ^ joinStyle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "joinStyle:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@joinStyle"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "joinStyle: anObject\x0a\x0a    joinStyle := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "miterLimit",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@miterLimit"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "miterLimit\x0a\x0a    ^ miterLimit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "miterLimit:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@miterLimit"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "miterLimit: anObject\x0a\x0a    miterLimit := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@width"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x0a    ^ width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);

$core.addMethod(
$core.method({
selector: "width:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@width"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "width: anObject\x0a\x0a    width := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AthensStrokePaint);



$core.addClass('GradientPaint', $globals.AthensAbstractPaint, ['stops', 'colorRamp'], 'Athens-Core-Paints');
$core.addMethod(
$core.method({
selector: "atStop:put:",
protocol: 'accessing',
fn: function (anOffset,aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@colorRamp"])._add_($recv(anOffset).__minus_gt(aColor));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atStop:put:",{anOffset:anOffset,aColor:aColor},$globals.GradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOffset", "aColor"],
source: "atStop: anOffset put: aColor\x0a\x0a    colorRamp add: (anOffset -> aColor).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "->"]
}),
$globals.GradientPaint);

$core.addMethod(
$core.method({
selector: "colorRamp",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@colorRamp"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "colorRamp\x0a    ^ colorRamp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GradientPaint);

$core.addMethod(
$core.method({
selector: "colorRamp:",
protocol: 'accessing',
fn: function (aRamp){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@colorRamp"]=$recv(aRamp)._copy();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorRamp:",{aRamp:aRamp},$globals.GradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRamp"],
source: "colorRamp: aRamp\x0a\x22The color ramp is a collection of associations with keys - floating point values between 0 and 1\x0aand values with Colors, for example:\x0a\x0a{  0 -> Color white. 1 -> Color black }.\x0a\x22\x0a    colorRamp := aRamp copy.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy"]
}),
$globals.GradientPaint);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.GradientPaint.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@colorRamp"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.GradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    super initialize.\x0a    colorRamp := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.GradientPaint);

$core.addMethod(
$core.method({
selector: "is:",
protocol: 'testing',
fn: function (aSymbol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSymbol).__eq("pattern"))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.GradientPaint.superclass.fn.prototype._is_.apply($recv(self), [aSymbol]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"is:",{aSymbol:aSymbol},$globals.GradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "is: aSymbol\x0a    ^ aSymbol = #pattern or:[ super is: aSymbol]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "=", "is:"]
}),
$globals.GradientPaint);



$core.addClass('LinearGradientPaint', $globals.GradientPaint, ['start', 'stop'], 'Athens-Core-Paints');
$core.addMethod(
$core.method({
selector: "asAthensPaintOn:",
protocol: 'converting',
fn: function (aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aCanvas)._surface())._createLinearGradient_start_stop_(self._colorRamp(),self._start(),self._stop());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},$globals.LinearGradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "asAthensPaintOn: aCanvas\x0a    ^ aCanvas surface\x0a            createLinearGradient: self colorRamp\x0a                start: self start \x0a                stop: self stop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createLinearGradient:start:stop:", "surface", "colorRamp", "start", "stop"]
}),
$globals.LinearGradientPaint);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@start"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a    ^ start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LinearGradientPaint);

$core.addMethod(
$core.method({
selector: "start:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@start"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "start: anObject\x0a    \x0a    start := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LinearGradientPaint);

$core.addMethod(
$core.method({
selector: "stop",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@stop"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x0a    ^ stop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LinearGradientPaint);

$core.addMethod(
$core.method({
selector: "stop:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@stop"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "stop: anObject\x0a    \x0a    stop := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LinearGradientPaint);


$core.addMethod(
$core.method({
selector: "from:to:",
protocol: 'instance creation',
fn: function (aStartPoint,aStopPoint){
var self=this;
var p;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
p=self._new();
$recv(p)._initializeFrom_to_(aStartPoint,aStopPoint);
$1=p;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"from:to:",{aStartPoint:aStartPoint,aStopPoint:aStopPoint,p:p},$globals.LinearGradientPaint.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStartPoint", "aStopPoint"],
source: "from: aStartPoint  to: aStopPoint\x0a    | p |\x0a    p := self new.\x0a    p initializeFrom: aStartPoint  to: aStopPoint.\x0a    ^ p",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initializeFrom:to:"]
}),
$globals.LinearGradientPaint.klass);


$core.addClass('RadialGradientPaint', $globals.GradientPaint, ['center', 'radius', 'focalPoint'], 'Athens-Core-Paints');
$core.addMethod(
$core.method({
selector: "asAthensPaintOn:",
protocol: 'converting',
fn: function (aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aCanvas)._surface())._createRadialGradient_center_radius_focalPoint_(self["@colorRamp"],self["@center"],self["@radius"],self["@focalPoint"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asAthensPaintOn:",{aCanvas:aCanvas},$globals.RadialGradientPaint)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "asAthensPaintOn: aCanvas\x0a    ^ aCanvas surface\x0a        createRadialGradient:  colorRamp\x0a        center: center\x0a        radius: radius\x0a        focalPoint: focalPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createRadialGradient:center:radius:focalPoint:", "surface"]
}),
$globals.RadialGradientPaint);

$core.addMethod(
$core.method({
selector: "center",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@center"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "center\x0a    \x0a    ^ center",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RadialGradientPaint);

$core.addMethod(
$core.method({
selector: "center:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@center"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "center: aPoint\x0a\x0a    center := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RadialGradientPaint);

$core.addMethod(
$core.method({
selector: "focalPoint",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@focalPoint"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focalPoint\x0a    \x0a    ^ focalPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RadialGradientPaint);

$core.addMethod(
$core.method({
selector: "focalPoint:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@focalPoint"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "focalPoint: aPoint\x0a\x0a    focalPoint := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RadialGradientPaint);

$core.addMethod(
$core.method({
selector: "radius",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@radius"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radius\x0a    \x0a    ^ radius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RadialGradientPaint);

$core.addMethod(
$core.method({
selector: "radius:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@radius"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "radius: aNumber\x0a\x0a    radius := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RadialGradientPaint);


});
