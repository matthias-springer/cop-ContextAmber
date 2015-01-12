define("amber-context/Athens-Debug-Layers", ["amber/boot", "amber-context/ContextAmber"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Athens-Debug-Layers');
$core.packages["Athens-Debug-Layers"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('ControlPointLayer', $globals.Layer, [], 'Athens-Debug-Layers');

$core.addMethod(
$core.method({
selector: "partialClasses",
protocol: 'initializing',
fn: function (){
var self=this;
function $ControlPointPath(){return $globals.ControlPointPath||(typeof ControlPointPath=="undefined"?nil:ControlPointPath)}
var $1;
$1=[$ControlPointPath()];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "partialClasses\x0a\x09^ { ControlPointPath }",
referencedClasses: ["ControlPointPath"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ControlPointLayer.klass);


$core.addClass('ControlPointPath', $globals.PartialClass, [], 'Athens-Debug-Layers');
$core.addMethod(
$core.method({
selector: "arcTo:angle:cw:",
protocol: 'not yet classified',
fn: function (newEndPoint,angle,aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed_value_value_(newEndPoint,angle,aBool);
self._drawControlPoint_(newEndPoint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcTo:angle:cw:",{newEndPoint:newEndPoint,angle:angle,aBool:aBool},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newEndPoint", "angle", "aBool"],
source: "arcTo: newEndPoint angle: angle cw: aBool\x0a\x09self proceed: newEndPoint value: angle value: aBool.\x0a\x09self drawControlPoint: newEndPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed:value:value:", "drawControlPoint:"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed();
self._drawControlPoint_(self["@endPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09self proceed.\x0a\x09self drawControlPoint: endPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed", "drawControlPoint:"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "curveVia:and:to:",
protocol: 'not yet classified',
fn: function (pt1,pt2,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed_value_value_(pt1,pt2,aPoint);
self._drawControlPoint_(pt1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawControlPoint:"]=1;
//>>excludeEnd("ctx");
self._drawControlPoint_(pt2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawControlPoint:"]=2;
//>>excludeEnd("ctx");
self._drawControlPoint_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawControlPoint:"]=3;
//>>excludeEnd("ctx");
self._drawControlPoint_(self["@endPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:and:to:",{pt1:pt1,pt2:pt2,aPoint:aPoint},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2", "aPoint"],
source: "curveVia: pt1 and: pt2 to: aPoint\x0a\x09self proceed: pt1 value: pt2 value: aPoint.\x0a\x09self drawControlPoint: pt1.\x0a\x09self drawControlPoint: pt2.\x0a\x09self drawControlPoint: aPoint.\x0a\x09self drawControlPoint: endPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed:value:value:", "drawControlPoint:"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "curveVia:to:",
protocol: 'not yet classified',
fn: function (pt1,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed_value_(pt1,aPoint);
self._drawControlPoint_(pt1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawControlPoint:"]=1;
//>>excludeEnd("ctx");
self._drawControlPoint_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawControlPoint:"]=2;
//>>excludeEnd("ctx");
self._drawControlPoint_(self["@endPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVia:to:",{pt1:pt1,aPoint:aPoint},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "aPoint"],
source: "curveVia: pt1 to: aPoint\x0a\x09self proceed: pt1 value: aPoint.\x0a\x09self drawControlPoint: pt1.\x0a\x09self drawControlPoint: aPoint.\x0a\x09self drawControlPoint: endPoint.\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed:value:", "drawControlPoint:"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "drawControlPoint:",
protocol: 'not yet classified',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$recv(self["@context2D"])._push();
$recv(self["@context2D"])._fillStyle_("rgba(0, 0, 0, 0.5)");
$1=self["@context2D"];
$4=(5).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=$recv(aPoint).__minus($4);
$2=$recv($3)._corner_((10).__at((10)));
$recv($1)._fillRect_($2);
$recv(self["@context2D"])._pop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawControlPoint:",{aPoint:aPoint},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "drawControlPoint: aPoint\x0a\x09context2D push.\x0a\x09context2D fillStyle: 'rgba(0, 0, 0, 0.5)'.\x0a\x09context2D fillRect: (aPoint - (5 @ 5) corner: 10 @ 10).\x0a\x09context2D pop.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["push", "fillStyle:", "fillRect:", "corner:", "-", "@", "pop"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "lineTo:",
protocol: 'not yet classified',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed_(aPoint);
self._drawControlPoint_(self["@endPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineTo:",{aPoint:aPoint},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "lineTo: aPoint\x0a\x09self proceed: aPoint.\x0a\x09self drawControlPoint: endPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed:", "drawControlPoint:"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "moveTo:",
protocol: 'not yet classified',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed_(aPoint);
self._drawControlPoint_(self["@endPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:",{aPoint:aPoint},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "moveTo: aPoint\x0a\x09self proceed: aPoint.\x0a\x09self drawControlPoint: endPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed:", "drawControlPoint:"]
}),
$globals.ControlPointPath);

$core.addMethod(
$core.method({
selector: "newPath",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._proceed();
self._drawControlPoint_(self["@endPoint"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newPath",{},$globals.ControlPointPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newPath\x0a\x09self proceed.\x0a\x09self drawControlPoint: endPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed", "drawControlPoint:"]
}),
$globals.ControlPointPath);


$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
function $AthensHTMLPath(){return $globals.AthensHTMLPath||(typeof AthensHTMLPath=="undefined"?nil:AthensHTMLPath)}
return $AthensHTMLPath();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base ^ \x0a\x09AthensHTMLPath",
referencedClasses: ["AthensHTMLPath"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ControlPointPath.klass);

});
