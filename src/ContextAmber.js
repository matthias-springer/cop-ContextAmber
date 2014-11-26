define("amber-context/ContextAmber", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Compiler-IR", "amber_core/Kernel-Classes", "amber_core/Kernel-Methods"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('ContextAmber');
$core.packages["ContextAmber"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('ContextAmber', $globals.Object, [], 'ContextAmber');

$globals.ContextAmber.klass.iVarNames = ['instance','defaultActive','scopedStack'];
$core.addMethod(
$core.method({
selector: "defaultActive",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@defaultActive"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultActive\x0a\x09^ defaultActive",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $LayerStack(){return $globals.LayerStack||(typeof LayerStack=="undefined"?nil:LayerStack)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@defaultActive"]=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@scopedStack"]=$recv($LayerStack())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09defaultActive := OrderedCollection new.\x0a\x09scopedStack := LayerStack new.",
referencedClasses: ["OrderedCollection", "LayerStack"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "instance",
protocol: 'singleton',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@instance"];
if(($receiver = $1) == null || $receiver.isNil){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09instance ifNil: [ instance := self new ].\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "newLayer:layerClasses:instanceVariableNames:pacakge:",
protocol: 'layer creation',
fn: function (name,layerClasses,instVarNames,package_){
var self=this;
var layer;
function $Layer(){return $globals.Layer||(typeof Layer=="undefined"?nil:Layer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
layer=$recv($Layer())._subclass_instanceVariableNames_package_(name,instVarNames,package_);
$recv(layer)._layerClasses_(layerClasses);
$1=layer;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLayer:layerClasses:instanceVariableNames:pacakge:",{name:name,layerClasses:layerClasses,instVarNames:instVarNames,package_:package_,layer:layer},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "layerClasses", "instVarNames", "package"],
source: "newLayer: name layerClasses: layerClasses instanceVariableNames: instVarNames pacakge: package\x0a\x09| layer |\x0a\x09layer := Layer subclass: name instanceVariableNames: instVarNames package: package.\x0a\x09layer layerClasses: layerClasses.\x0a\x09^ layer",
referencedClasses: ["Layer"],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:", "layerClasses:"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "newLayerClass:baseClass:instanceVariableNames:package:",
protocol: 'layer creation',
fn: function (name,baseClass,instVarNames,package_){
var self=this;
var layerClass;
function $LayerClass(){return $globals.LayerClass||(typeof LayerClass=="undefined"?nil:LayerClass)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
layerClass=$recv($LayerClass())._subclass_instanceVariableNames_package_(name,instVarNames,package_);
$recv(layerClass)._baseClass_(baseClass);
$1=layerClass;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLayerClass:baseClass:instanceVariableNames:package:",{name:name,baseClass:baseClass,instVarNames:instVarNames,package_:package_,layerClass:layerClass},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "baseClass", "instVarNames", "package"],
source: "newLayerClass: name baseClass: baseClass instanceVariableNames: instVarNames package: package\x0a\x09| layerClass |\x0a\x09layerClass := LayerClass subclass: name instanceVariableNames: instVarNames package: package.\x0a\x09layerClass baseClass: baseClass.\x0a\x09^ layerClass",
referencedClasses: ["LayerClass"],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:", "baseClass:"]
}),
$globals.ContextAmber.klass);


$core.addClass('IRProceedInliner', $globals.IRVisitor, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "shouldInlineSend:",
protocol: 'testing',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(anIRSend)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._class())._shouldInline_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},$globals.IRProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09self class shouldInline: anIRSend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "shouldInline:", "class"]
}),
$globals.IRProceedInliner);


$core.addMethod(
$core.method({
selector: "inlinedSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["proceed", "proceed:"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSelectors\x0a\x09^ #('proceed' 'proceed:')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRProceedInliner.klass);

$core.addMethod(
$core.method({
selector: "shouldInline:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._inlinedSelectors())._includes_($recv(anIRInstruction)._selector());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRInstruction:anIRInstruction},$globals.IRProceedInliner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09^ self inlinedSelectors includes: anIRInstruction selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "inlinedSelectors", "selector"]
}),
$globals.IRProceedInliner.klass);


$core.addClass('Layer', $globals.Object, ['layerClasses'], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "activate",
protocol: 'default activation',
fn: function (){
var self=this;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($ContextAmber())._defaultActive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defaultActive"]=1;
//>>excludeEnd("ctx");
$recv($1)._indexOf_ifAbsent_(self,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($ContextAmber())._defaultActive())._add_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate",{},$globals.Layer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activate\x0a\x09ContextAmber defaultActive indexOf: self ifAbsent: [ ContextAmber defaultActive add: self ].",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "defaultActive", "add:"]
}),
$globals.Layer);

$core.addMethod(
$core.method({
selector: "deactivate",
protocol: 'default activation',
fn: function (){
var self=this;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($ContextAmber())._defaultActive())._remove_ifAbsent_(self,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deactivate",{},$globals.Layer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deactivate\x0a\x09ContextAmber defaultActive remove: self ifAbsent: [ ].",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "defaultActive"]
}),
$globals.Layer);


$globals.Layer.klass.iVarNames = ['layerClasses'];
$core.addMethod(
$core.method({
selector: "layerClasses",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@layerClasses"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "layerClasses\x0a\x09^ layerClasses",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Layer.klass);

$core.addMethod(
$core.method({
selector: "layerClasses:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(aCollection)._do_((function(class_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(class_)._isClass()).__and($recv(class_)._isPartial());
if(!$core.assert($1)){
return self._error_("not a layer class");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({class_:class_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@layerClasses"]=aCollection;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"layerClasses:",{aCollection:aCollection},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "layerClasses: aCollection\x0a\x09aCollection do: [ :class | class isClass & class isPartial\x0a\x09\x09ifFalse: [ self error: 'not a layer class' ] ].\x0a\x09layerClasses := aCollection.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:", "&", "isClass", "isPartial", "error:"]
}),
$globals.Layer.klass);


$core.addClass('LayerStack', $globals.Object, ['addStack', 'removeStack'], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'stack',
fn: function (aLayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@addStack"])._indexOf_ifAbsent_(aLayer,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@addStack"])._add_(aLayer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
return $recv(self["@removeStack"])._add_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aLayer:aLayer},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "add: aLayer\x0a\x09addStack indexOf: aLayer ifAbsent: [\x0a\x09\x09addStack add: aLayer.\x0a\x09\x09removeStack add: nil ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "add:"]
}),
$globals.LayerStack);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'stack',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$recv((1)._to_(self._size()))._do_((function(index){
var addEl,removeEl;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
addEl=$recv(self["@addStack"])._at_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
addEl;
removeEl=$recv(self["@addStack"])._at_(index);
removeEl;
$1=addEl;
if(($receiver = $1) == null || $receiver.isNil){
return $recv(aBlock)._value_value_("remove",removeEl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(aBlock)._value_value_("add",addEl);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,addEl:addEl,removeEl:removeEl},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09(1 to: self size) do: [ :index | | addEl removeEl |\x0a\x09\x09addEl := addStack at: index.\x0a\x09\x09removeEl := addStack at: index. \x0a\x09\x09addEl\x0a\x09\x09\x09ifNil: [ aBlock value: #remove value: removeEl ]\x0a\x09\x09\x09ifNotNil: [ aBlock value: #add value: addEl ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "size", "at:", "ifNil:ifNotNil:", "value:value:"]
}),
$globals.LayerStack);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@addStack"]=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@removeStack"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09addStack := OrderedCollection new.\x0a\x09removeStack := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.LayerStack);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'stack',
fn: function (aLayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove_in_collapse_(aLayer,self["@addStack"],self["@removeStack"]);
$recv(self["@removeStack"])._add_(aLayer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(self["@addStack"])._add_(nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{aLayer:aLayer},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "remove: aLayer\x0a\x09self remove: aLayer in: addStack collapse: removeStack.\x0a\x09removeStack add: aLayer.\x0a\x09addStack add: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:in:collapse:", "add:"]
}),
$globals.LayerStack);

$core.addMethod(
$core.method({
selector: "remove:in:collapse:",
protocol: 'private',
fn: function (aLayer,primaryCollection,secondaryCollection){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
index=$recv(primaryCollection)._indexOf_ifAbsent_(aLayer,(function(){
return nil;

}));
$1=index;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(primaryCollection)._removeAt_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeAt:"]=1;
//>>excludeEnd("ctx");
$recv(secondaryCollection)._removeAt_(index);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:in:collapse:",{aLayer:aLayer,primaryCollection:primaryCollection,secondaryCollection:secondaryCollection,index:index},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer", "primaryCollection", "secondaryCollection"],
source: "remove: aLayer in: primaryCollection collapse: secondaryCollection\x0a\x09| index |\x0a\x09index := primaryCollection indexOf: aLayer ifAbsent: [ nil ].\x0a\x09index ifNotNil: [ \x0a\x09\x09primaryCollection removeAt: index.\x0a\x09\x09secondaryCollection removeAt: index ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "ifNotNil:", "removeAt:"]
}),
$globals.LayerStack);

$core.addMethod(
$core.method({
selector: "reset:",
protocol: 'stack',
fn: function (aLayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove_in_collapse_(aLayer,self["@removeStack"],self["@addStack"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:in:collapse:"]=1;
//>>excludeEnd("ctx");
self._remove_in_collapse_(aLayer,self["@addStack"],self["@removeStack"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset:",{aLayer:aLayer},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "reset: aLayer\x0a\x09self remove: aLayer in: removeStack collapse: addStack.\x0a\x09self remove: aLayer in: addStack collapse: removeStack.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:in:collapse:"]
}),
$globals.LayerStack);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'stack',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@addStack"])._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ addStack size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.LayerStack);



$core.addClass('PartialClass', $globals.Object, ['layer'], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "layer",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@layer"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "layer\x0a\x09^ layer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PartialClass);

$core.addMethod(
$core.method({
selector: "layer:",
protocol: 'accessing',
fn: function (aLayer){
var self=this;
self["@layer"]=aLayer;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "layer: aLayer\x0a\x09layer := aLayer.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PartialClass);


$globals.PartialClass.klass.iVarNames = ['base'];
$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@base"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base\x0a\x09^ base",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "base:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aClass)._isClass();
if(!$core.assert($1)){
self._error_("not a class");
};
self["@base"]=aClass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"base:",{aClass:aClass},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "base: aClass\x0a\x09aClass isClass ifFalse: [ self error: 'not a class' ].\x0a\x09base := aClass.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClass", "error:"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "generateWrapper:",
protocol: 'wrapper',
fn: function (method){
var self=this;
var wrapper,wrapperTemplate,compiler;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $PartialClass(){return $globals.PartialClass||(typeof PartialClass=="undefined"?nil:PartialClass)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
compiler=$recv($Compiler())._new();
wrapperTemplate=$recv($recv($recv($PartialClass())._class())._methodAt_("wrapperTemplate"))._source();
wrapper=$recv(compiler)._eval_($recv(compiler)._compile_forClass_(wrapperTemplate,self["@base"]));
$1=$recv(wrapper)._fn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fn"]=1;
//>>excludeEnd("ctx");
$2=$recv(method)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$recv($1)._basicAt_put_("selector",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$recv($recv(wrapper)._fn())._basicAt_put_("original",method);
$recv(wrapper)._selector_($recv(method)._selector());
$recv(wrapper)._makePartial();
$3=wrapper;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateWrapper:",{method:method,wrapper:wrapper,wrapperTemplate:wrapperTemplate,compiler:compiler},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["method"],
source: "generateWrapper: method\x0a\x09| wrapper wrapperTemplate compiler |\x0a\x09compiler := Compiler new.\x0a\x09wrapperTemplate := (PartialClass class methodAt: #wrapperTemplate) source.\x0a\x09wrapper := compiler eval: (compiler compile: wrapperTemplate forClass: base).\x0a\x09wrapper fn basicAt: #selector put: method selector.\x0a\x09wrapper fn basicAt: #original put: method.\x0a\x09wrapper selector: method selector.\x0a\x09wrapper makePartial.\x0a\x09^ wrapper",
referencedClasses: ["Compiler", "PartialClass"],
//>>excludeEnd("ide");
messageSends: ["new", "source", "methodAt:", "class", "eval:", "compile:forClass:", "basicAt:put:", "fn", "selector", "selector:", "makePartial"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "installWrapperForSelector:",
protocol: 'wrapper',
fn: function (selector){
var self=this;
var original;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
original=$recv(self["@base"])._methodAt_(selector);
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(self._generateWrapper_(original),self["@base"],$recv(original)._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installWrapperForSelector:",{selector:selector,original:original},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "installWrapperForSelector: selector\x0a\x09| original |\x0a\x09original := base methodAt: selector.\x0a\x09ClassBuilder new\x0a\x09\x09installMethod: (self generateWrapper: original)\x0a\x09\x09forClass: base\x0a\x09\x09protocol: original protocol.",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["methodAt:", "installMethod:forClass:protocol:", "new", "generateWrapper:", "protocol"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "isPartial",
protocol: 'testing',
fn: function (){
var self=this;
function $PartialClass(){return $globals.PartialClass||(typeof PartialClass=="undefined"?nil:PartialClass)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__tild_eq($PartialClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isPartial",{},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartial\x0a\x09^ self ~= PartialClass",
referencedClasses: ["PartialClass"],
//>>excludeEnd("ide");
messageSends: ["~="]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "wrapperTemplate",
protocol: 'wrapper',
fn: function (){
var self=this;
var nextLayer,selector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
nextLayer=$recv(self._activateLayers())._last();
selector=$recv($recv(arguments)._callee())._basicAt_("selector");
$1=$recv($recv($recv($recv(nextLayer)._class())._methodAt_(selector))._fn())._apply_withPossibleArguments_(self,arguments);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapperTemplate",{nextLayer:nextLayer,selector:selector},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapperTemplate\x0a\x09| nextLayer selector |\x0a\x09nextLayer := self activateLayers last.\x0a\x09selector := arguments callee basicAt: #selector.\x0a\x09^ (nextLayer class methodAt: selector) fn apply: self withPossibleArguments: arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "activateLayers", "basicAt:", "callee", "apply:withPossibleArguments:", "fn", "methodAt:", "class"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "apply:valueWithPossibleArguments:",
protocol: '*ContextAmber',
fn: function (anObject,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self.apply(anObject, aCollection);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply:valueWithPossibleArguments:",{anObject:anObject,aCollection:aCollection},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "apply: anObject valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(anObject, aCollection);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "isPartial",
protocol: '*ContextAmber',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartial\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "isPartial",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._basicAt_("partial");
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isPartial",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartial\x0a\x09^ (self basicAt: #partial) ifNil: [ false ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "basicAt:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "makePartial",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("partial","true");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makePartial",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makePartial\x0a\x09self basicAt: #partial put: #true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "activateLayer:",
protocol: '*ContextAmber',
fn: function (aLayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._initializeLayers();
$recv(self._layerStack())._add_(aLayer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateLayer:",{aLayer:aLayer},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "activateLayer: aLayer\x0a\x09self initializeLayers.\x0a\x09self layerStack add: aLayer.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeLayers", "add:", "layerStack"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "activeLayers",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var layers;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
layers=$recv($OrderedCollection())._new();
$recv(layers)._addAll_($recv($ContextAmber())._defaultActive());
$1=self._layerStack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["layerStack"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self._layerStack())._do_((function(operation,layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(operation).__eq("add");
if($core.assert($2)){
return $recv(layers)._indexOf_ifAbsent_(layer,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(layers)._add_(layer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
} else {
return $recv(layers)._remove_ifAbsent_(layer,(function(){

}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({operation:operation,layer:layer},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activeLayers",{layers:layers},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeLayers\x0a\x09| layers |\x0a\x09layers := OrderedCollection new.\x0a\x09layers addAll: ContextAmber defaultActive.\x0a\x09\x0a\x09self layerStack ifNotNil: [\x0a\x09\x09self layerStack do: [ :operation :layer | \x0a\x09\x09\x09operation = #add\x0a\x09\x09\x09\x09ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]\x0a\x09\x09\x09\x09ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].\x0a\x09\x09\x09\x09\x0a\x09\x22TODO: same for scoped stack\x22",
referencedClasses: ["OrderedCollection", "ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["new", "addAll:", "defaultActive", "ifNotNil:", "layerStack", "do:", "ifTrue:ifFalse:", "=", "indexOf:ifAbsent:", "add:", "remove:ifAbsent:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deactivateLayer:",
protocol: '*ContextAmber',
fn: function (aLayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._initializeLayers();
$recv(self._layerStack())._remove_(aLayer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deactivateLayer:",{aLayer:aLayer},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "deactivateLayer: aLayer\x0a\x09self initializeLayers.\x0a\x09self layerStack remove: aLayer.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeLayers", "remove:", "layerStack"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "initializeLayers",
protocol: '*ContextAmber',
fn: function (){
var self=this;
function $LayerStack(){return $globals.LayerStack||(typeof LayerStack=="undefined"?nil:LayerStack)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._layerStack();
if(($receiver = $1) == null || $receiver.isNil){
self._layerStack_($recv($LayerStack())._new());
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeLayers",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeLayers\x0a\x09self layerStack ifNil: [ self layerStack: LayerStack new ].",
referencedClasses: ["LayerStack"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "layerStack", "layerStack:", "new"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "layerStack",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return self['layerStack']; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"layerStack",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "layerStack\x0a\x09< return self['layerStack']; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "layerStack:",
protocol: '*ContextAmber',
fn: function (aStack){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 self['layerStack'] = aStack; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"layerStack:",{aStack:aStack},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStack"],
source: "layerStack: aStack\x0a\x09< self['layerStack'] = aStack; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "resetLayer:",
protocol: '*ContextAmber',
fn: function (aLayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._initializeLayers();
$recv(self._layerStack())._reset_(aLayer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetLayer:",{aLayer:aLayer},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "resetLayer: aLayer\x0a\x09self initializeLayers.\x0a\x09self layerStack reset: aLayer.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeLayers", "reset:", "layerStack"]
}),
$globals.Object);

});
