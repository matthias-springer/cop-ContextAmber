define("amber-context/ContextAmber", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Compiler-IR", "amber_core/Kernel-Classes", "amber_core/Kernel-Methods", "amber_core/IDE"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('ContextAmber');
$core.packages["ContextAmber"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('ContextAmber', $globals.Object, [], 'ContextAmber');

$globals.ContextAmber.klass.iVarNames = ['instance','defaultActive','scopedStack','compiler'];
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
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@defaultActive"]=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@scopedStack"]=$recv($LayerStack())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self["@compiler"]=$recv($Compiler())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09defaultActive := OrderedCollection new.\x0a\x09scopedStack := LayerStack new.\x0a\x09compiler := Compiler new.\x0a\x09\x22self registerAnnouncements.\x22",
referencedClasses: ["OrderedCollection", "LayerStack", "Compiler"],
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
selector: "newLayer:layerClasses:instanceVariableNames:package:",
protocol: 'layer creation',
fn: function (name,layerClasses,instVarNames,package_){
var self=this;
var layer,partialClassesSource;
function $Layer(){return $globals.Layer||(typeof Layer=="undefined"?nil:Layer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
partialClassesSource=self._partialClassesMethod_(layerClasses);
layer=$recv($Layer())._subclass_instanceVariableNames_package_(name,instVarNames,package_);
$recv(self["@compiler"])._install_forClass_protocol_(partialClassesSource,$recv(layer)._class(),"initializing");
$recv(layer)._initialize();
$1=layer;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLayer:layerClasses:instanceVariableNames:package:",{name:name,layerClasses:layerClasses,instVarNames:instVarNames,package_:package_,layer:layer,partialClassesSource:partialClassesSource},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "layerClasses", "instVarNames", "package"],
source: "newLayer: name layerClasses: layerClasses instanceVariableNames: instVarNames package: package\x0a\x09| layer partialClassesSource |\x0a\x09partialClassesSource := self partialClassesMethod: layerClasses.\x0a\x09layer := Layer subclass: name instanceVariableNames: instVarNames package: package.\x0a\x09compiler install: partialClassesSource forClass: layer class protocol: 'initializing'.\x0a\x09layer initialize.\x0a\x09^ layer",
referencedClasses: ["Layer"],
//>>excludeEnd("ide");
messageSends: ["partialClassesMethod:", "subclass:instanceVariableNames:package:", "install:forClass:protocol:", "class", "initialize"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "newPartialClass:baseClass:package:",
protocol: 'layer creation',
fn: function (name,base,package_){
var self=this;
function $PartialClass(){return $globals.PartialClass||(typeof PartialClass=="undefined"?nil:PartialClass)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PartialClass())._new_baseClass_package_(name,base,package_);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newPartialClass:baseClass:package:",{name:name,base:base,package_:package_},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "base", "package"],
source: "newPartialClass: name baseClass: base package: package\x0a\x09^ PartialClass new: name baseClass: base package: package",
referencedClasses: ["PartialClass"],
//>>excludeEnd("ide");
messageSends: ["new:baseClass:package:"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "partialClassesCollection:",
protocol: 'private',
fn: function (collection){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
stream=""._writeStream();
$recv(stream)._nextPut_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$recv(collection)._do_((function(class_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(class_)._isClass())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(class_)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($1)){
self._error_("object is not a partial class");
};
$2=stream;
$recv($2)._nextPutAll_($recv(class_)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._nextPutAll_(". ");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({class_:class_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(stream)._nextPut_("}");
$4=$recv(stream)._contents();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partialClassesCollection:",{collection:collection,stream:stream},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["collection"],
source: "partialClassesCollection: collection\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09stream nextPut: '{'.\x0a\x09collection do: [ :class | \x0a\x09\x09(class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ].\x0a\x09\x09stream nextPutAll: class asString; \x0a\x09\x09nextPutAll: '. ' ].\x0a\x09stream nextPut: '}'.\x0a\x09^ stream contents\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "nextPut:", "do:", "ifFalse:", "and:", "isClass", "isPartial", "error:", "nextPutAll:", "asString", "contents"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "partialClassesMethod:",
protocol: 'private',
fn: function (collection){
var self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
stream=""._writeStream();
$1=stream;
$recv($1)._nextPutAll_("partialClasses");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._lf();
$recv($1)._tab();
$recv($1)._nextPutAll_("^ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._nextPutAll_(self._partialClassesCollection_(collection));
$3=$recv(stream)._contents();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partialClassesMethod:",{collection:collection,stream:stream},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["collection"],
source: "partialClassesMethod: collection\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09stream \x0a\x09\x09nextPutAll: 'partialClasses';\x0a\x09\x09lf; tab;\x0a\x09\x09nextPutAll: '^ ';\x0a\x09\x09nextPutAll: (self partialClassesCollection: collection).\x0a\x09^ stream contents\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeStream", "nextPutAll:", "lf", "tab", "partialClassesCollection:", "contents"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "registerAnnouncements",
protocol: 'initializing',
fn: function (){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRemove(){return $globals.ClassRemove||(typeof ClassRemove=="undefined"?nil:ClassRemove)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv($recv($SystemAnnouncer())._current())._on_do_($ClassRemove(),(function(announcement){
var partial;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
partial=$recv(announcement)._theClass();
partial;
$1=$recv(partial)._isPartial();
if($core.assert($1)){
return $recv($recv($recv(partial)._class())._base())._removePartial_(partial);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement,partial:partial},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerAnnouncements",{},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerAnnouncements\x0a\x09SystemAnnouncer current on: ClassRemove do: [ :announcement | | partial |\x0a\x09\x09partial := announcement theClass.\x0a\x09\x09partial isPartial ifTrue: [\x0a\x09\x09\x09partial class base removePartial: partial ] ].",
referencedClasses: ["SystemAnnouncer", "ClassRemove"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "current", "theClass", "ifTrue:", "isPartial", "removePartial:", "base", "class"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "shouldCacheIR:for:",
protocol: 'testing',
fn: function (selector,class_){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(class_)._isPartial())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(class_)._partials())._anySatisfy_((function(partialClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(partialClass)._includesSelector_(selector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({partialClass:partialClass},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldCacheIR:for:",{selector:selector,class_:class_},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector", "class"],
source: "shouldCacheIR: selector for: class\x0a\x09^ class isPartial or: [\x0a\x09\x09class partials anySatisfy: [ :partialClass | partialClass includesSelector: selector ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "isPartial", "anySatisfy:", "partials", "includesSelector:"]
}),
$globals.ContextAmber.klass);


$core.addClass('IRProceedInliner', $globals.IRVisitor, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "inlinedMethod:for:with:",
protocol: 'inlining',
fn: function (selector,baseClass,layers){
var self=this;
var recent;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
recent=nil;
$recv(layers)._do_((function(layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(layer)._class())._at_ifPresent_(baseClass,(function(partialClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(partialClass)._includesSelector_(baseClass);
if($core.assert($1)){
var ir;
ir=nil;
ir;
recent=nil;
return recent;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({partialClass:partialClass},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedMethod:for:with:",{selector:selector,baseClass:baseClass,layers:layers,recent:recent},$globals.IRProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector", "baseClass", "layers"],
source: "inlinedMethod: selector for: baseClass with: layers\x0a\x09| recent |\x0a\x09recent := nil.\x09\x09\x22TODO: IR for layers base method\x22\x0a\x09layers do: [ :layer |\x0a\x09\x09layer class at: baseClass ifPresent: [ :partialClass |\x0a\x09\x09\x09(partialClass includesSelector: baseClass) ifTrue: [ | ir |\x0a\x09\x09\x09\x09ir := nil.\x09\x09\x22TODO: unoptimized IR for that method\x22\x0a\x09\x09\x09\x09recent := nil.\x09\x09\x22TODO: run inliner on ir with partial == recent\x22 ] ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "at:ifPresent:", "class", "ifTrue:", "includesSelector:"]
}),
$globals.IRProceedInliner);

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


$core.addClass('Layer', $globals.Object, [], 'ContextAmber');
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


$globals.Layer.klass.iVarNames = ['partialClasses'];
$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: 'accessing',
fn: function (base,block){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@partialClasses"])._at_ifPresent_(base,block);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{base:base,block:block},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["base", "block"],
source: "at: base ifPresent: block\x0a\x09partialClasses at: base ifPresent: block.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:"]
}),
$globals.Layer.klass);

$core.addMethod(
$core.method({
selector: "error:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Layer.klass.superclass.fn.prototype._error_.apply($recv(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "error: aString\x0a\x09\x22 defer executing to allow IDE to show up. \x22\x0a\x09\x22[ super error: aString ] valueWithTimeout: 0.\x22\x0a\x09super error: aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.Layer.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Layer(){return $globals.Layer||(typeof Layer=="undefined"?nil:Layer)}
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self.__tild_eq($Layer());
if($core.assert($1)){
self["@partialClasses"]=$recv($Dictionary())._new();
self["@partialClasses"];
$recv(self._partialClasses())._do_((function(class_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($recv(class_)._isClass())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(class_)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($2)){
self._error_("object is not a partial class");
};
return $recv(self["@partialClasses"])._at_put_($recv(class_)._base(),class_);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({class_:class_},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self ~= Layer ifTrue: [\x0a\x09\x09partialClasses := Dictionary new.\x0a\x09\x09self partialClasses do: [ :class |\x0a\x09\x09\x09(class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ].\x0a\x09\x09\x09partialClasses at: class base put: class ] ].",
referencedClasses: ["Layer", "Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "new", "do:", "partialClasses", "ifFalse:", "and:", "isClass", "isPartial", "error:", "at:put:", "base"]
}),
$globals.Layer.klass);

$core.addMethod(
$core.method({
selector: "isLayer",
protocol: 'testing',
fn: function (){
var self=this;
function $Layer(){return $globals.Layer||(typeof Layer=="undefined"?nil:Layer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__tild_eq($Layer());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLayer",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLayer\x0a\x09^ self ~= Layer",
referencedClasses: ["Layer"],
//>>excludeEnd("ide");
messageSends: ["~="]
}),
$globals.Layer.klass);

$core.addMethod(
$core.method({
selector: "partialClasses",
protocol: 'initializing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("no partial classes defined for layer");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partialClasses",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "partialClasses\x0a\x09self error: 'no partial classes defined for layer'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
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



$core.addClass('PartialClass', $globals.Object, [], 'ContextAmber');

$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("no base class defined for partial class");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"base",{},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base\x0a\x09self error: 'no base class defined for partial class'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "error:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PartialClass.klass.superclass.fn.prototype._error_.apply($recv(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "error: aString\x0a\x09\x22 defer executing to allow IDE to show up. \x22\x0a\x09\x22[ super error: aString ] valueWithTimeout: 0.\x22\x0a\x09super error: aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
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
wrapper=$recv(compiler)._eval_($recv(compiler)._compile_forClass_(wrapperTemplate,self._base()));
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
source: "generateWrapper: method\x0a\x09| wrapper wrapperTemplate compiler |\x0a\x09compiler := Compiler new.\x0a\x09wrapperTemplate := (PartialClass class methodAt: #wrapperTemplate) source.\x0a\x09wrapper := compiler eval: (compiler compile: wrapperTemplate forClass: self base).\x0a\x09wrapper fn basicAt: #selector put: method selector.\x0a\x09wrapper fn basicAt: #original put: method.\x0a\x09wrapper selector: method selector.\x0a\x09wrapper makePartial.\x0a\x09^ wrapper",
referencedClasses: ["Compiler", "PartialClass"],
//>>excludeEnd("ide");
messageSends: ["new", "source", "methodAt:", "class", "eval:", "compile:forClass:", "base", "basicAt:put:", "fn", "selector", "selector:", "makePartial"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $PartialClass(){return $globals.PartialClass||(typeof PartialClass=="undefined"?nil:PartialClass)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self.__tild_eq($PartialClass());
if($core.assert($1)){
$2=$recv(self._base())._isClass();
if(!$core.assert($2)){
self._error_("object is not a class");
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self ~= PartialClass ifTrue: [\x0a\x09\x09self base isClass ifFalse: [ self error: 'object is not a class' ] ].",
referencedClasses: ["PartialClass"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "ifFalse:", "isClass", "base", "error:"]
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
var $1;
$1=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
original=$recv($1)._methodAt_(selector);
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(self._generateWrapper_(original),self._base(),$recv(original)._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installWrapperForSelector:",{selector:selector,original:original},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "installWrapperForSelector: selector\x0a\x09| original |\x0a\x09original := self base methodAt: selector.\x0a\x09ClassBuilder new\x0a\x09\x09installMethod: (self generateWrapper: original)\x0a\x09\x09forClass: self base\x0a\x09\x09protocol: original protocol.",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["methodAt:", "base", "installMethod:forClass:protocol:", "new", "generateWrapper:", "protocol"]
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
selector: "new:baseClass:package:",
protocol: 'class creation',
fn: function (name,base,package_){
var self=this;
var partialClass;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=$recv(base)._isClass();
if(!$core.assert($1)){
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PartialClass.klass.superclass.fn.prototype._error_.apply($recv(self), ["object is not a class"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
partialClass=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PartialClass.klass.superclass.fn.prototype._subclass_instanceVariableNames_package_.apply($recv(self), [name,"",package_]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$recv(partialClass)._class();
$4=$recv("base ^ ".__comma($recv($String())._lf())).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(base)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._compile_protocol_($3,"accessing");
$recv(base)._addPartial_(partialClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:baseClass:package:",{name:name,base:base,package_:package_,partialClass:partialClass},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "base", "package"],
source: "new: name baseClass: base package: package\x0a\x09| partialClass |\x0a\x09base isClass ifFalse: [ super error: 'object is not a class' ].\x0a\x09partialClass := super subclass: name instanceVariableNames: '' package: package.\x0a\x09partialClass class compile: 'base ^ ', String lf, String tab, base name protocol: 'accessing'.\x0a\x09base addPartial: partialClass.",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClass", "error:", "subclass:instanceVariableNames:package:", "compile:protocol:", "class", ",", "lf", "tab", "name", "addPartial:"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "signalSubclassNotAllowed",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("subclassing not allowed for partial classes");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalSubclassNotAllowed",{},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "signalSubclassNotAllowed\x0a\x09self error: 'subclassing not allowed for partial classes'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:",
protocol: 'class creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._signalSubclassNotAllowed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09self signalSubclassNotAllowed.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["signalSubclassNotAllowed"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:category:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._signalSubclassNotAllowed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09self signalSubclassNotAllowed.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["signalSubclassNotAllowed"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
protocol: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._signalSubclassNotAllowed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09self signalSubclassNotAllowed.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["signalSubclassNotAllowed"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:package:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._signalSubclassNotAllowed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09self signalSubclassNotAllowed.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["signalSubclassNotAllowed"]
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
selector: "addPartial:",
protocol: '*ContextAmber',
fn: function (class_){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._ensurePartialsCollectionInitialized();
$recv(self._partials())._add_(class_);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addPartial:",{class_:class_},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["class"],
source: "addPartial: class\x0a\x09self ensurePartialsCollectionInitialized.\x0a\x09self partials add: class.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensurePartialsCollectionInitialized", "add:", "partials"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "ensurePartialsCollectionInitialized",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (typeof(self['partials']) === 'undefined') {
		self['partials'] = $core.Set._new();
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensurePartialsCollectionInitialized",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensurePartialsCollectionInitialized\x0a\x09< if (typeof(self['partials']) === 'undefined') {\x0a\x09\x09self['partials'] = $core.Set._new();\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "partials",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (typeof(self['partials']) === 'undefined') {
		return $core.Set._new();
	} else {
		return self['partials'];
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partials",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "partials\x0a\x09< if (typeof(self['partials']) === 'undefined') {\x0a\x09\x09return $core.Set._new();\x0a\x09} else {\x0a\x09\x09return self['partials'];\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "removePartial:",
protocol: '*ContextAmber',
fn: function (class_){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._partials())._remove_ifAbsent_(class_,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("list of partial classes out of sync");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removePartial:",{class_:class_},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["class"],
source: "removePartial: class\x0a\x09self partials remove: class ifAbsent: [ self error: 'list of partial classes out of sync' ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "partials", "error:"]
}),
$globals.Behavior);

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
selector: "classDeclarationSource",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var stream;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$11,$9,$12,$13,$14,$15,$16,$17,$receiver;
stream=""._writeStream();
$1=self["@selectedClass"];
if(($receiver = $1) == null || $receiver.isNil){
$2=self._classDeclarationTemplate();
return $2;
} else {
$1;
};
$3=$recv(self["@selectedClass"])._isLayer();
if($core.assert($3)){
$4=self._layerDeclarationSource();
return $4;
};
$5=$recv(self["@selectedClass"])._isPartial();
if($core.assert($5)){
$6=self._partialDeclarationSource();
return $6;
};
$7=stream;
$recv($7)._nextPutAll_($recv($recv(self["@selectedClass"])._superclass())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($7)._nextPutAll_(" subclass: #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv($7)._nextPutAll_($recv(self["@selectedClass"])._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$8=$7;
$10=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$11=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__comma($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($8)._nextPutAll_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$12=$recv($7)._nextPutAll_("instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv($recv(self["@selectedClass"])._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$13=stream;
$14=$13;
$15=$recv("'".__comma($recv($String())._lf())).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($14)._nextPutAll_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$recv($13)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
$recv($13)._nextPutAll_($recv(self["@selectedClass"])._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$16=$recv($13)._nextPutAll_("'");
$17=$recv(stream)._contents();
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classDeclarationSource",{stream:stream},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09selectedClass ifNil: [ ^ self classDeclarationTemplate ].\x0a\x09\x22 TODO: encapsulate in layer \x22\x0a\x09selectedClass isLayer\x09\x0a\x09\x09ifTrue: [ ^ self layerDeclarationSource ].\x0a\x09selectedClass isPartial\x0a\x09\x09ifTrue: [ ^ self partialDeclarationSource ].\x0a\x09stream\x0a\x09\x09nextPutAll: selectedClass superclass asString;\x0a\x09\x09nextPutAll: ' subclass: #';\x0a\x09\x09nextPutAll: selectedClass name;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09stream\x0a\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09nextPutAll: selectedClass category;\x0a\x09\x09nextPutAll: ''''.\x0a\x09^ stream contents",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "ifNil:", "classDeclarationTemplate", "ifTrue:", "isLayer", "layerDeclarationSource", "isPartial", "partialDeclarationSource", "nextPutAll:", "asString", "superclass", "name", ",", "lf", "tab", "do:separatedBy:", "instanceVariableNames", "category", "contents"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "layerDeclarationSource",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var stream;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6,$8,$9,$7,$10,$11,$12,$13,$14,$15;
stream=""._writeStream();
$1=stream;
$recv($1)._nextPutAll_("ContextAmber newLayer: #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv(self["@selectedClass"])._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2=$1;
$4=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$5=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("layerClasses: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv($ContextAmber())._partialClassesCollection_($recv(self["@selectedClass"])._partialClasses()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$6=$1;
$8=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$9=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($6)._nextPutAll_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$10=$recv($1)._nextPutAll_("instanceVariableNames: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$recv($recv(self["@selectedClass"])._instanceVariableNames())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$11=stream;
$12=$11;
$13=$recv("'".__comma($recv($String())._lf())).__comma($recv($String())._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($12)._nextPutAll_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=10;
//>>excludeEnd("ctx");
$recv($11)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=11;
//>>excludeEnd("ctx");
$recv($11)._nextPutAll_($recv(self["@selectedClass"])._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=12;
//>>excludeEnd("ctx");
$14=$recv($11)._nextPutAll_("'");
$15=$recv(stream)._contents();
return $15;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"layerDeclarationSource",{stream:stream},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "layerDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09stream\x0a\x09\x09nextPutAll: 'ContextAmber newLayer: #';\x0a\x09\x09nextPutAll: selectedClass name;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'layerClasses: ';\x0a\x09\x09nextPutAll: (ContextAmber partialClassesCollection: selectedClass partialClasses);\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09stream\x0a\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09nextPutAll: selectedClass category;\x0a\x09\x09nextPutAll: ''''.\x0a\x09^ stream contents",
referencedClasses: ["String", "ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "nextPutAll:", "name", ",", "lf", "tab", "partialClassesCollection:", "partialClasses", "do:separatedBy:", "instanceVariableNames", "category", "contents"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "partialDeclarationSource",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var stream;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6,$7;
stream=""._writeStream();
$1=stream;
$recv($1)._nextPutAll_("ContextAmber newPartialClass: #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv(self["@selectedClass"])._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$2=$1;
$4=$recv($String())._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$5=$recv($String())._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("baseClass: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv($recv(self["@selectedClass"])._base())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv($recv($String())._lf()).__comma($recv($String())._tab()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_("package: '");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=7;
//>>excludeEnd("ctx");
$recv($1)._nextPutAll_($recv(self["@selectedClass"])._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=8;
//>>excludeEnd("ctx");
$6=$recv($1)._nextPutAll_("'");
$7=$recv(stream)._contents();
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partialDeclarationSource",{stream:stream},$globals.Browser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "partialDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09stream\x0a\x09\x09nextPutAll: 'ContextAmber newPartialClass: #';\x0a\x09\x09nextPutAll: selectedClass name;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'baseClass: ';\x0a\x09\x09nextPutAll: selectedClass base asString;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09nextPutAll: selectedClass category;\x0a\x09\x09nextPutAll: ''''.\x0a\x09^ stream contents",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "nextPutAll:", "name", ",", "lf", "tab", "asString", "base", "category", "contents"]
}),
$globals.Browser);

$core.addMethod(
$core.method({
selector: "isLayer",
protocol: '*ContextAmber',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLayer\x0a\x09^ false",
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
