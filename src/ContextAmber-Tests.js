define("amber-context/ContextAmber-Tests", ["amber/boot", "amber_core/Kernel-Objects", "amber-context/ContextAmber", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('ContextAmber-Tests');
$core.packages["ContextAmber-Tests"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('ContextAmberDemoClass1', $globals.Object, [], 'ContextAmber-Tests');
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
$globals.ContextAmberDemoClass1);

$core.addMethod(
$core.method({
selector: "method3",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoClass1);



$core.addClass('ContextAmberDemoClass2', $globals.Object, [], 'ContextAmber-Tests');
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
$globals.ContextAmberDemoClass2);

$core.addMethod(
$core.method({
selector: "method2",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoClass2);



$core.addClass('ContextAmberDemoLayer', $globals.Layer, [], 'ContextAmber-Tests');

$core.addMethod(
$core.method({
selector: "partialClasses",
protocol: 'initializing',
fn: function (){
var self=this;
function $ContextAmberDemoPartialClass1(){return $globals.ContextAmberDemoPartialClass1||(typeof ContextAmberDemoPartialClass1=="undefined"?nil:ContextAmberDemoPartialClass1)}
function $ContextAmberDemoPartialClass2(){return $globals.ContextAmberDemoPartialClass2||(typeof ContextAmberDemoPartialClass2=="undefined"?nil:ContextAmberDemoPartialClass2)}
var $1;
$1=[$ContextAmberDemoPartialClass1(),$ContextAmberDemoPartialClass2()];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "partialClasses\x0a\x09^ { ContextAmberDemoPartialClass1. ContextAmberDemoPartialClass2 }",
referencedClasses: ["ContextAmberDemoPartialClass1", "ContextAmberDemoPartialClass2"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoLayer.klass);


$core.addClass('ContextAmberDemoLayer2', $globals.Layer, [], 'ContextAmber-Tests');

$core.addMethod(
$core.method({
selector: "partialClasses",
protocol: 'initializing',
fn: function (){
var self=this;
function $ContextAmberDemoPartial2Class2(){return $globals.ContextAmberDemoPartial2Class2||(typeof ContextAmberDemoPartial2Class2=="undefined"?nil:ContextAmberDemoPartial2Class2)}
var $1;
$1=[$ContextAmberDemoPartial2Class2()];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "partialClasses\x0a\x09^ { ContextAmberDemoPartial2Class2 }",
referencedClasses: ["ContextAmberDemoPartial2Class2"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoLayer2.klass);


$core.addClass('ContextAmberDemoPartial2Class2', $globals.PartialClass, [], 'ContextAmber-Tests');

$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
return $ContextAmberDemoClass2();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base ^ \x0a\x09ContextAmberDemoClass2",
referencedClasses: ["ContextAmberDemoClass2"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoPartial2Class2.klass);


$core.addClass('ContextAmberDemoPartialClass1', $globals.PartialClass, [], 'ContextAmber-Tests');
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
$globals.ContextAmberDemoPartialClass1);


$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
function $ContextAmberDemoClass1(){return $globals.ContextAmberDemoClass1||(typeof ContextAmberDemoClass1=="undefined"?nil:ContextAmberDemoClass1)}
return $ContextAmberDemoClass1();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base ^ \x0a\x09ContextAmberDemoClass1",
referencedClasses: ["ContextAmberDemoClass1"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoPartialClass1.klass);


$core.addClass('ContextAmberDemoPartialClass2', $globals.PartialClass, [], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "method2",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoPartialClass2);


$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
return $ContextAmberDemoClass2();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base ^ \x0a\x09ContextAmberDemoClass2",
referencedClasses: ["ContextAmberDemoClass2"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmberDemoPartialClass2.klass);


$core.addClass('ContextAmberTest', $globals.TestCase, ['object', 'layer1', 'layer2', 'layer3'], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $ContextAmberDemoLayer(){return $globals.ContextAmberDemoLayer||(typeof ContextAmberDemoLayer=="undefined"?nil:ContextAmberDemoLayer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@object"]=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@layer1"]=$recv($ContextAmberDemoLayer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@layer2"]=$recv($ContextAmberDemoLayer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self["@layer3"]=$recv($ContextAmberDemoLayer())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.ContextAmberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09object := Object new.\x0a\x09layer1 := ContextAmberDemoLayer new.\x0a\x09layer2 := ContextAmberDemoLayer new.\x0a\x09layer3 := ContextAmberDemoLayer new.",
referencedClasses: ["Object", "ContextAmberDemoLayer"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ContextAmberTest);

$core.addMethod(
$core.method({
selector: "testDefaultLayers",
protocol: 'running',
fn: function (){
var self=this;
var layers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(self["@layer1"])._activate();
layers=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=2;
//>>excludeEnd("ctx");
$3=$recv(layers)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(layers)._first(),self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$recv(self["@layer1"])._deactivate();
self._assert_equals_($recv(self._activeLayers())._size(),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDefaultLayers",{layers:layers},$globals.ContextAmberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDefaultLayers\x0a\x09| layers |\x0a\x09self assert: self activeLayers size equals: 0.\x0a\x09layer1 activate.\x0a\x09\x0a\x09layers := self activeLayers.\x0a\x09self assert: layers size equals: 1.\x0a\x09self assert: layers first equals: layer1.\x0a\x09\x0a\x09layer1 deactivate.\x0a\x09self assert: self activeLayers size equals: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "size", "activeLayers", "activate", "first", "deactivate"]
}),
$globals.ContextAmberTest);

$core.addMethod(
$core.method({
selector: "testObjectLayers",
protocol: 'running',
fn: function (){
var self=this;
var layers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(self["@layer1"])._activate();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@object"])._activateLayer_(self["@layer3"]);
$recv(self["@object"])._deactivateLayer_(self["@layer2"]);
layers=$recv(self["@object"])._activeLayers();
layers;
self._assert_equals_($recv(layers)._size(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(layers)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(layers)._at_((2)),self["@layer3"]);
$recv(self["@object"])._resetLayer_(self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["resetLayer:"]=1;
//>>excludeEnd("ctx");
return $recv(self["@object"])._resetLayer_(self["@layer3"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._withLayer_(self["@layer2"]);
$recv(self["@layer1"])._deactivate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testObjectLayers",{layers:layers},$globals.ContextAmberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testObjectLayers\x0a\x09| layers |\x0a\x09self assert: self activeLayers size equals: 0.\x0a\x09layer1 activate.\x0a\x09\x0a\x09[ object activateLayer: layer3.\x0a\x09\x09object deactivateLayer: layer2.\x0a\x09\x09\x0a\x09\x09layers := object activeLayers.\x0a\x09\x09self assert: layers size equals: 2.\x0a\x09\x09self assert: (layers at: 1) equals: layer1.\x0a\x09\x09self assert: (layers at: 2) equals: layer3.\x0a\x09\x09\x0a\x09\x09object resetLayer: layer2.\x0a\x09\x09object resetLayer: layer3 ] withLayer: layer2.\x0a\x09\x09\x0a\x09layer1 deactivate.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "size", "activeLayers", "activate", "withLayer:", "activateLayer:", "deactivateLayer:", "at:", "resetLayer:", "deactivate"]
}),
$globals.ContextAmberTest);

$core.addMethod(
$core.method({
selector: "testReverseDo",
protocol: 'running',
fn: function (){
var self=this;
var array,arrayReversed;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
array=[(1),(8),(9)];
arrayReversed=$recv($OrderedCollection())._new();
$recv(array)._reverseDo_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(arrayReversed)._add_(item);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((1)._to_((3)))._do_((function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(arrayReversed)._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return self._assert_equals_($1,$recv($recv(array)._reversed())._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReverseDo",{array:array,arrayReversed:arrayReversed},$globals.ContextAmberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReverseDo\x0a\x09| array arrayReversed |\x0a\x09array := {1. 8. 9 }.\x0a\x09arrayReversed := OrderedCollection new.\x0a\x09\x0a\x09array reverseDo: [ :item | arrayReversed add: item ].\x0a\x09(1 to: 3) do: [ :index |\x0a\x09\x09self assert: (arrayReversed at: index) equals: (array reversed at: index) ].",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "reverseDo:", "add:", "do:", "to:", "assert:equals:", "at:", "reversed"]
}),
$globals.ContextAmberTest);

$core.addMethod(
$core.method({
selector: "testScopedLayers",
protocol: 'running',
fn: function (){
var self=this;
var layers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5;
$2=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(self["@layer1"])._activate();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
layers=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["activeLayers"]=2;
//>>excludeEnd("ctx");
layers;
$3=$recv(layers)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$4=$recv(layers)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($4,self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$5=$recv(layers)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($5,self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
layers=self._activeLayers();
layers;
self._assert_equals_($recv(layers)._size(),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
return self._assert_equals_($recv(layers)._at_((1)),self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._withoutLayer_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._withLayer_(self["@layer2"]);
$recv(self["@layer1"])._deactivate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScopedLayers",{layers:layers},$globals.ContextAmberTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScopedLayers\x0a\x09| layers |\x0a\x09self assert: self activeLayers size equals: 0.\x0a\x09layer1 activate.\x0a\x09\x0a\x09[ layers := self activeLayers.\x0a\x09\x09self assert: layers size equals: 2.\x0a\x09\x09self assert: (layers at: 1) equals: layer1.\x0a\x09\x09self assert: (layers at: 2) equals: layer2.\x0a\x09\x09\x0a\x09\x09[ layers := self activeLayers.\x0a\x09\x09self assert: layers size equals: 1.\x0a\x09\x09self assert: (layers at: 1) equals: layer2 ]\x0a\x09\x09\x09withoutLayer: layer1 ]\x0a\x09\x09withLayer: layer2.\x0a\x09\x09\x0a\x09layer1 deactivate.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "size", "activeLayers", "activate", "withLayer:", "at:", "withoutLayer:", "deactivate"]
}),
$globals.ContextAmberTest);



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
}, function($ctx1) {$ctx1.fill(self,"method1",{},$globals.DemoClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method1\x0a\x09console log: 'TODO: check layer composition, call layer on top of stack'.",
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



$core.addClass('DemoPartialClass', $globals.PartialClass, [], 'ContextAmber-Tests');

$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
function $DemoClass(){return $globals.DemoClass||(typeof DemoClass=="undefined"?nil:DemoClass)}
return $DemoClass();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base ^ \x0a\x09DemoClass",
referencedClasses: ["DemoClass"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DemoPartialClass.klass);


$core.addClass('IRProceedInlinerTest', $globals.TestCase, [], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "testSkipLayers",
protocol: 'tests',
fn: function (){
var self=this;
var inliner,skipped,layer;
function $ContextAmberDemoLayer(){return $globals.ContextAmberDemoLayer||(typeof ContextAmberDemoLayer=="undefined"?nil:ContextAmberDemoLayer)}
function $IRProceedInliner(){return $globals.IRProceedInliner||(typeof IRProceedInliner=="undefined"?nil:IRProceedInliner)}
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
function $ContextAmberDemoLayer2(){return $globals.ContextAmberDemoLayer2||(typeof ContextAmberDemoLayer2=="undefined"?nil:ContextAmberDemoLayer2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$5;
layer=$recv($ContextAmberDemoLayer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=layer;
$3=$recv($ContextAmberDemoLayer2())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3];
inliner=$recv($IRProceedInliner())._for_in_withLayers_("method2",$ContextAmberDemoClass2(),$1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["for:in:withLayers:"]=1;
//>>excludeEnd("ctx");
skipped=$recv(inliner)._skipLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["skipLayers"]=1;
//>>excludeEnd("ctx");
$4=$recv(skipped)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($4,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$5=$recv(skipped)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($5,layer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
inliner=$recv($IRProceedInliner())._for_in_withLayers_("method2",$ContextAmberDemoClass2(),[$recv($ContextAmberDemoLayer2())._new(),layer]);
skipped=$recv(inliner)._skipLayers();
self._assert_equals_($recv(skipped)._size(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(skipped)._at_((2)),layer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSkipLayers",{inliner:inliner,skipped:skipped,layer:layer},$globals.IRProceedInlinerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSkipLayers\x0a\x09| inliner skipped layer |\x0a\x09layer := ContextAmberDemoLayer new.\x0a\x09\x0a\x09\x22skip last layer\x22\x0a\x09inliner := IRProceedInliner \x0a\x09\x09for: #method2 \x0a\x09\x09in: ContextAmberDemoClass2 \x0a\x09\x09withLayers: { layer. ContextAmberDemoLayer2 new }.\x0a\x09skipped := inliner skipLayers.\x0a\x09self assert: skipped size equals: 1.\x0a\x09self assert: (skipped at: 1) equals: layer.\x0a\x09\x0a\x09\x22no skipping\x22\x0a\x09inliner := IRProceedInliner\x0a\x09\x09for: #method2\x0a\x09\x09in: ContextAmberDemoClass2\x0a\x09\x09withLayers: { ContextAmberDemoLayer2 new. layer }.\x0a\x09skipped := inliner skipLayers.\x0a\x09self assert: skipped size equals: 2.\x0a\x09self assert: (skipped at: 2) equals: layer.",
referencedClasses: ["ContextAmberDemoLayer", "IRProceedInliner", "ContextAmberDemoClass2", "ContextAmberDemoLayer2"],
//>>excludeEnd("ide");
messageSends: ["new", "for:in:withLayers:", "skipLayers", "assert:equals:", "size", "at:"]
}),
$globals.IRProceedInlinerTest);



$core.addClass('LayerStackTest', $globals.TestCase, ['stack', 'layer1', 'layer2', 'layer3', 'layer4'], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $LayerStack(){return $globals.LayerStack||(typeof LayerStack=="undefined"?nil:LayerStack)}
function $ContextAmberDemoLayer(){return $globals.ContextAmberDemoLayer||(typeof ContextAmberDemoLayer=="undefined"?nil:ContextAmberDemoLayer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@stack"]=$recv($LayerStack())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@layer1"]=$recv($ContextAmberDemoLayer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@layer2"]=$recv($ContextAmberDemoLayer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self["@layer3"]=$recv($ContextAmberDemoLayer())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
self["@layer4"]=$recv($ContextAmberDemoLayer())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09stack := LayerStack new.\x0a\x09layer1 := ContextAmberDemoLayer new.\x0a\x09layer2 := ContextAmberDemoLayer new.\x0a\x09layer3 := ContextAmberDemoLayer new.\x0a\x09layer4 := ContextAmberDemoLayer new.",
referencedClasses: ["LayerStack", "ContextAmberDemoLayer"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.LayerStackTest);

$core.addMethod(
$core.method({
selector: "testAdd",
protocol: 'tests',
fn: function (){
var self=this;
var result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@stack"])._add_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer3"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@stack"])._size(),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv($OrderedCollection())._new();
$recv(self["@stack"])._do_((function(op,el){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._add_(el);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({op:op,el:el},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(result)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$2=$recv(result)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv(result)._at_((3)),self["@layer3"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAdd",{result:result},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAdd\x0a\x09| result |\x0a\x09stack add: layer1.\x0a\x09stack add: layer2.\x0a\x09stack add: layer3.\x0a\x09\x0a\x09self assert: stack size equals: 3.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09stack do: [ :op :el | result add: el ].\x0a\x09self assert: (result at: 1) equals: layer1.\x0a\x09self assert: (result at: 2) equals: layer2.\x0a\x09self assert: (result at: 3) equals: layer3.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["add:", "assert:equals:", "size", "new", "do:", "at:"]
}),
$globals.LayerStackTest);

$core.addMethod(
$core.method({
selector: "testEmptyStack",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_equals_($recv(self["@stack"])._size(),(0));
$recv(self["@stack"])._do_((function(op,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("no element expected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({op:op,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEmptyStack",{},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEmptyStack\x09\x0a\x09self assert: stack size equals: 0.\x0a\x09stack do: [ :op :value | self error: 'no element expected' ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "size", "do:", "error:"]
}),
$globals.LayerStackTest);

$core.addMethod(
$core.method({
selector: "testNotALayer",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self["@stack"];
$2=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
return $recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self["@stack"];
$4=$recv($Object())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
return $recv($3)._remove_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:raise:"]=2;
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stack"])._reset_($recv($Object())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNotALayer",{},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNotALayer\x0a\x09self should: [ stack add: Object new ] raise: Error.\x0a\x09self should: [ stack remove: Object new ] raise: Error.\x0a\x09self should: [ stack reset: Object new ] raise: Error.",
referencedClasses: ["Object", "Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "add:", "new", "remove:", "reset:"]
}),
$globals.LayerStackTest);

$core.addMethod(
$core.method({
selector: "testPop",
protocol: 'tests',
fn: function (){
var self=this;
var result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self["@stack"])._add_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer3"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv(self["@stack"])._pop();
self._assert_equals_($recv(self["@stack"])._size(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv($OrderedCollection())._new();
$recv(self["@stack"])._do_((function(op,el){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._add_(el);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({op:op,el:el},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(result)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv(result)._at_((2)),self["@layer2"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPop",{result:result},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPop\x0a\x09| result |\x0a\x09stack add: layer1.\x0a\x09stack add: layer2.\x0a\x09stack add: layer3.\x0a\x09stack pop.\x0a\x09\x0a\x09self assert: stack size equals: 2.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09stack do: [ :op :el | result add: el ].\x0a\x09self assert: (result at: 1) equals: layer1.\x0a\x09self assert: (result at: 2) equals: layer2.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["add:", "pop", "assert:equals:", "size", "new", "do:", "at:"]
}),
$globals.LayerStackTest);

$core.addMethod(
$core.method({
selector: "testRemove",
protocol: 'tests',
fn: function (){
var self=this;
var result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv(self["@stack"])._add_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer3"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv(self["@stack"])._remove_(self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$recv(self["@stack"])._remove_(self["@layer4"]);
self._assert_equals_($recv(self["@stack"])._size(),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv($OrderedCollection())._new();
$recv(self["@stack"])._do_((function(op,el){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._add_(el);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({op:op,el:el},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(result)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$2=$recv(result)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($2,self["@layer3"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$3=$recv(result)._at_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($3,self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($recv(result)._at_((4)),self["@layer4"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemove",{result:result},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemove\x0a\x09| result |\x0a\x09stack add: layer1.\x0a\x09stack add: layer2.\x0a\x09stack add: layer3.\x0a\x09stack remove: layer2.\x0a\x09stack remove: layer4.\x0a\x09\x0a\x09self assert: stack size equals: 4.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09stack do: [ :op :el | result add: el ].\x0a\x09self assert: (result at: 1) equals: layer1.\x0a\x09self assert: (result at: 2) equals: layer3.\x0a\x09self assert: (result at: 3) equals: layer2.\x0a\x09self assert: (result at: 4) equals: layer4.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["add:", "remove:", "assert:equals:", "size", "new", "do:", "at:"]
}),
$globals.LayerStackTest);

$core.addMethod(
$core.method({
selector: "testReset",
protocol: 'tests',
fn: function (){
var self=this;
var result;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(self["@stack"])._add_(self["@layer3"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv(self["@stack"])._remove_(self["@layer1"]);
$recv(self["@stack"])._add_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv(self["@stack"])._reset_(self["@layer1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reset:"]=1;
//>>excludeEnd("ctx");
$recv(self["@stack"])._reset_(self["@layer2"]);
self._assert_equals_($recv(self["@stack"])._size(),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
result=$recv($OrderedCollection())._new();
$recv(self["@stack"])._do_((function(op,el){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._add_(el);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({op:op,el:el},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assert_equals_($recv(result)._at_((1)),self["@layer3"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReset",{result:result},$globals.LayerStackTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReset\x0a\x09| result |\x0a\x09stack add: layer1.\x0a\x09stack add: layer2.\x0a\x09stack add: layer3.\x0a\x09stack remove: layer1.\x0a\x09stack add: layer1.\x0a\x09stack reset: layer1.\x0a\x09stack reset: layer2.\x0a\x09\x0a\x09self assert: stack size equals: 1.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09stack do: [ :op :el | result add: el ].\x0a\x09self assert: (result at: 1) equals: layer3.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["add:", "remove:", "reset:", "assert:equals:", "size", "new", "do:", "at:"]
}),
$globals.LayerStackTest);



$core.addClass('LayerTest', $globals.TestCase, [], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "testCreation",
protocol: 'tests',
fn: function (){
var self=this;
var layer;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
layer=$recv($ContextAmber())._newLayer_partialClasses_instanceVariableNames_package_("ContextAmberTestLayer",[],"","ContextAmber-Tests");
self._assert_($recv(layer)._isLayer());
self._assert_equals_($recv($recv(layer)._partialClasses())._size(),(0));
$recv($Smalltalk())._removeClass_(layer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCreation",{layer:layer},$globals.LayerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCreation\x0a\x09| layer |\x0a\x09layer := ContextAmber newLayer: #ContextAmberTestLayer partialClasses: {} instanceVariableNames: '' package: 'ContextAmber-Tests'.\x0a\x09self assert: layer isLayer.\x0a\x09self assert: layer partialClasses size equals: 0.\x0a\x09Smalltalk removeClass: layer.",
referencedClasses: ["ContextAmber", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["newLayer:partialClasses:instanceVariableNames:package:", "assert:", "isLayer", "assert:equals:", "size", "partialClasses", "removeClass:"]
}),
$globals.LayerTest);

$core.addMethod(
$core.method({
selector: "testHasPartial",
protocol: 'tests',
fn: function (){
var self=this;
function $ContextAmberDemoLayer(){return $globals.ContextAmberDemoLayer||(typeof ContextAmberDemoLayer=="undefined"?nil:ContextAmberDemoLayer)}
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($ContextAmberDemoLayer())._hasPartial_for_("method2",$ContextAmberDemoClass2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasPartial:for:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
$2=$recv($ContextAmberDemoLayer())._hasPartial_for_("method1",$ContextAmberDemoClass2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasPartial:for:"]=2;
//>>excludeEnd("ctx");
self._deny_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=$recv($ContextAmberDemoLayer())._hasPartial_for_("undef",$ContextAmberDemoClass2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasPartial:for:"]=3;
//>>excludeEnd("ctx");
self._deny_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
self._deny_($recv($ContextAmberDemoLayer())._hasPartial_for_("method1",nil));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHasPartial",{},$globals.LayerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHasPartial\x0a\x09self assert: (ContextAmberDemoLayer hasPartial: #method2 for: ContextAmberDemoClass2).\x0a\x09self deny: (ContextAmberDemoLayer hasPartial: #method1 for: ContextAmberDemoClass2).\x0a\x09self deny: (ContextAmberDemoLayer hasPartial: #undef for: ContextAmberDemoClass2).\x0a\x09self deny: (ContextAmberDemoLayer hasPartial: #method1 for: nil).",
referencedClasses: ["ContextAmberDemoLayer", "ContextAmberDemoClass2"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasPartial:for:", "deny:"]
}),
$globals.LayerTest);

$core.addMethod(
$core.method({
selector: "testPartialFor",
protocol: 'tests',
fn: function (){
var self=this;
function $ContextAmberDemoLayer2(){return $globals.ContextAmberDemoLayer2||(typeof ContextAmberDemoLayer2=="undefined"?nil:ContextAmberDemoLayer2)}
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
function $ContextAmberDemoPartial2Class2(){return $globals.ContextAmberDemoPartial2Class2||(typeof ContextAmberDemoPartial2Class2=="undefined"?nil:ContextAmberDemoPartial2Class2)}
function $ContextAmberDemoClass1(){return $globals.ContextAmberDemoClass1||(typeof ContextAmberDemoClass1=="undefined"?nil:ContextAmberDemoClass1)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($ContextAmberDemoLayer2())._partialFor_($ContextAmberDemoClass2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["partialFor:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,$ContextAmberDemoPartial2Class2());
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ContextAmberDemoLayer2())._partialFor_($ContextAmberDemoClass1());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPartialFor",{},$globals.LayerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPartialFor\x0a\x09self assert: (ContextAmberDemoLayer2 partialFor: ContextAmberDemoClass2) equals: ContextAmberDemoPartial2Class2.\x0a\x09self should: [ ContextAmberDemoLayer2 partialFor: ContextAmberDemoClass1 ] raise: Error.",
referencedClasses: ["ContextAmberDemoLayer2", "ContextAmberDemoClass2", "ContextAmberDemoPartial2Class2", "ContextAmberDemoClass1", "Error"],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "partialFor:", "should:raise:"]
}),
$globals.LayerTest);



$core.addClass('PartialClassTest', $globals.TestCase, [], 'ContextAmber-Tests');
$core.addMethod(
$core.method({
selector: "testBehaviorPartials",
protocol: 'tests',
fn: function (){
var self=this;
var partials;
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
function $ContextAmberDemoPartialClass2(){return $globals.ContextAmberDemoPartialClass2||(typeof ContextAmberDemoPartialClass2=="undefined"?nil:ContextAmberDemoPartialClass2)}
function $ContextAmberDemoPartial2Class2(){return $globals.ContextAmberDemoPartial2Class2||(typeof ContextAmberDemoPartial2Class2=="undefined"?nil:ContextAmberDemoPartial2Class2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
partials=$recv($ContextAmberDemoClass2())._partials();
self._assert_equals_($recv(partials)._size(),(2));
$1=$recv(partials)._includes_($ContextAmberDemoPartialClass2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv(partials)._includes_($ContextAmberDemoPartial2Class2()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBehaviorPartials",{partials:partials},$globals.PartialClassTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBehaviorPartials\x0a\x09| partials |\x0a\x09partials := ContextAmberDemoClass2 partials.\x0a\x09self assert: partials size equals: 2.\x0a\x09self assert: (partials includes: ContextAmberDemoPartialClass2).\x0a\x09self assert: (partials includes: ContextAmberDemoPartial2Class2).",
referencedClasses: ["ContextAmberDemoClass2", "ContextAmberDemoPartialClass2", "ContextAmberDemoPartial2Class2"],
//>>excludeEnd("ide");
messageSends: ["partials", "assert:equals:", "size", "assert:", "includes:"]
}),
$globals.PartialClassTest);

$core.addMethod(
$core.method({
selector: "testCreation",
protocol: 'tests',
fn: function (){
var self=this;
var partial;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
function $DemoClass(){return $globals.DemoClass||(typeof DemoClass=="undefined"?nil:DemoClass)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
partial=$recv($ContextAmber())._newPartialClass_baseClass_package_("ContextAmberTestPartial",$DemoClass(),"ContextAmber-Tests");
self._assert_equals_($recv(partial)._base(),$DemoClass());
self._assert_($recv(partial)._isPartial());
$recv($Smalltalk())._removeClass_(partial);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCreation",{partial:partial},$globals.PartialClassTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCreation\x0a\x09| partial |\x0a\x09partial := ContextAmber newPartialClass: #ContextAmberTestPartial baseClass: DemoClass package: 'ContextAmber-Tests'.\x0a\x09self assert: partial base equals: DemoClass.\x0a\x09self assert: partial isPartial.\x0a\x09Smalltalk removeClass: partial.",
referencedClasses: ["ContextAmber", "DemoClass", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["newPartialClass:baseClass:package:", "assert:equals:", "base", "assert:", "isPartial", "removeClass:"]
}),
$globals.PartialClassTest);

$core.addMethod(
$core.method({
selector: "testCreationWithInvalidBase",
protocol: 'tests',
fn: function (){
var self=this;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ContextAmber())._newPartialClass_baseClass_package_("ContextAmberTestPartial",(7),"ContextAmber-Tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
self._assert_equals_($recv($Smalltalk())._at_("ContextAmberTestPartial"),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCreationWithInvalidBase",{},$globals.PartialClassTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCreationWithInvalidBase\x0a\x09self \x0a\x09\x09should: [ ContextAmber newPartialClass: #ContextAmberTestPartial baseClass: 7 package: 'ContextAmber-Tests' ]\x0a\x09\x09raise: Error.\x0a\x09self assert: (Smalltalk at: #ContextAmberTestPartial) equals: nil.",
referencedClasses: ["ContextAmber", "Error", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "newPartialClass:baseClass:package:", "assert:equals:", "at:"]
}),
$globals.PartialClassTest);

$core.addMethod(
$core.method({
selector: "testHasPartial",
protocol: 'tests',
fn: function (){
var self=this;
function $ContextAmberDemoPartialClass1(){return $globals.ContextAmberDemoPartialClass1||(typeof ContextAmberDemoPartialClass1=="undefined"?nil:ContextAmberDemoPartialClass1)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($ContextAmberDemoPartialClass1())._hasPartial_("method1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hasPartial:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_($recv($ContextAmberDemoPartialClass1())._hasPartial_("method2"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testHasPartial",{},$globals.PartialClassTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testHasPartial\x0a\x09self assert: (ContextAmberDemoPartialClass1 hasPartial: #method1).\x0a\x09self deny: (ContextAmberDemoPartialClass1 hasPartial: #method2).",
referencedClasses: ["ContextAmberDemoPartialClass1"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasPartial:", "deny:"]
}),
$globals.PartialClassTest);

$core.addMethod(
$core.method({
selector: "testWrapperInstalledOnCompilation",
protocol: 'tests',
fn: function (){
var self=this;
function $ContextAmberDemoClass1(){return $globals.ContextAmberDemoClass1||(typeof ContextAmberDemoClass1=="undefined"?nil:ContextAmberDemoClass1)}
function $ContextAmberDemoPartialClass1(){return $globals.ContextAmberDemoPartialClass1||(typeof ContextAmberDemoPartialClass1=="undefined"?nil:ContextAmberDemoPartialClass1)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($ContextAmberDemoClass1()).__gt_gt("method3");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isPartial"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$recv($ContextAmberDemoPartialClass1())._compile_("method3");
self._assert_($recv($recv($ContextAmberDemoClass1()).__gt_gt("method3"))._isPartial());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWrapperInstalledOnCompilation",{},$globals.PartialClassTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWrapperInstalledOnCompilation\x0a\x09self deny: (ContextAmberDemoClass1 >> #method3) isPartial.\x0a\x09ContextAmberDemoPartialClass1 compile: 'method3'.\x0a\x09self assert: (ContextAmberDemoClass1 >> #method3) isPartial.",
referencedClasses: ["ContextAmberDemoClass1", "ContextAmberDemoPartialClass1"],
//>>excludeEnd("ide");
messageSends: ["deny:", "isPartial", ">>", "compile:", "assert:"]
}),
$globals.PartialClassTest);

$core.addMethod(
$core.method({
selector: "testWrapperInstalledOnStartup",
protocol: 'tests',
fn: function (){
var self=this;
function $ContextAmberDemoClass2(){return $globals.ContextAmberDemoClass2||(typeof ContextAmberDemoClass2=="undefined"?nil:ContextAmberDemoClass2)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($ContextAmberDemoClass2()).__gt_gt("method1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isPartial"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
self._assert_($recv($recv($ContextAmberDemoClass2()).__gt_gt("method2"))._isPartial());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWrapperInstalledOnStartup",{},$globals.PartialClassTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWrapperInstalledOnStartup\x0a\x09self deny: (ContextAmberDemoClass2 >> #method1) isPartial.\x0a\x09self assert: (ContextAmberDemoClass2 >> #method2) isPartial.",
referencedClasses: ["ContextAmberDemoClass2"],
//>>excludeEnd("ide");
messageSends: ["deny:", "isPartial", ">>", "assert:"]
}),
$globals.PartialClassTest);


});
