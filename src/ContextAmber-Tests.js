define("amber-context/ContextAmber-Tests", ["amber/boot", "amber_core/SUnit", "amber_core/Kernel-Objects", "amber-context/ContextAmber"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('ContextAmber-Tests');
$core.packages["ContextAmber-Tests"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('ContextAmberTest', $globals.TestCase, [], 'ContextAmber-Tests');


$core.addClass('DemoClass', $globals.Object, [], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "method1",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(console)._log_("TODO: check layer composition, call layer on top of stack");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapperTemplate",{},$globals.DemoClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapperTemplate\x0a\x09console log: 'TODO: check layer composition, call layer on top of stack'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:"]
}),
$globals.DemoClass);

$core.addMethod(
$core.method({
selector: "wrapperTemplate",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(console)._log_("TODO: check layer composition, call layer on top of stack");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapperTemplate",{},$globals.DemoClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapperTemplate\x0a\x09console log: 'TODO: check layer composition, call layer on top of stack'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:"]
}),
$globals.DemoClass);



$core.addClass('DemoClassLayer', $globals.LayerClass, [], 'ContextAmber-Tests');

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $DemoClass(){return $globals.DemoClass||(typeof DemoClass=="undefined"?nil:DemoClass)}
self["@baseClass"]=$DemoClass();
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09baseClass := DemoClass.",
referencedClasses: ["DemoClass"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DemoClassLayer.klass);


$core.addClass('DemoLayer', $globals.Object, [], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "jsMethod",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 x = self; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsMethod",{},$globals.DemoLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsMethod\x0a\x09< x = self; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DemoLayer);

$core.addMethod(
$core.method({
selector: "method1",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DemoLayer);


});
