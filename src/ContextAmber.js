define("amber-context/ContextAmber", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Compiler-Inlining", "amber_core/Compiler-IR", "amber_core/Kernel-Classes", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections", "amber_core/IDE"], function($boot){
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
selector: "handleClassRemoved:",
protocol: 'announcements',
fn: function (announcement){
var self=this;
var partial;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
partial=$recv(announcement)._theClass();
$1=$recv(partial)._isPartial();
if($core.assert($1)){
$recv($recv(partial)._base())._removePartial_(partial);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleClassRemoved:",{announcement:announcement,partial:partial},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "handleClassRemoved: announcement\x0a\x09| partial |\x0a\x09partial := announcement theClass.\x0a\x09partial isPartial \x0a\x09\x09ifTrue: [ partial base removePartial: partial ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "ifTrue:", "isPartial", "removePartial:", "base"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "handleMethodAdded:",
protocol: 'announcements',
fn: function (announcement){
var self=this;
var method,class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
method=$recv(announcement)._method();
class_=$recv(method)._methodClass();
$1=$recv(class_)._isPartial();
if($core.assert($1)){
$recv($recv(class_)._base())._installWrapper_($recv(method)._selector());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleMethodAdded:",{announcement:announcement,method:method,class_:class_},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "handleMethodAdded: announcement\x0a\x09| method class |\x0a\x09method := announcement method.\x0a\x09class := method methodClass.\x0a\x09class isPartial ifTrue: [\x0a\x09\x09class base installWrapper: method selector ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method", "methodClass", "ifTrue:", "isPartial", "installWrapper:", "base", "selector"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "handleMethodModified:",
protocol: 'announcements',
fn: function (announcement){
var self=this;
var oldMethod,newMethod,class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
oldMethod=$recv(announcement)._oldMethod();
newMethod=$recv(announcement)._method();
$2=$recv(oldMethod)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isPartial"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__and($recv($recv(newMethod)._isPartial())._not());
if($core.assert($1)){
$recv($recv(oldMethod)._methodClass())._installWrapper_($recv(oldMethod)._selector());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleMethodModified:",{announcement:announcement,oldMethod:oldMethod,newMethod:newMethod,class_:class_},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "handleMethodModified: announcement\x0a\x09| oldMethod newMethod class |\x0a\x09oldMethod := announcement oldMethod.\x0a\x09newMethod := announcement method.\x0a\x09oldMethod isPartial & newMethod isPartial not ifTrue: [\x0a\x09\x09oldMethod methodClass installWrapper: oldMethod selector ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["oldMethod", "method", "ifTrue:", "&", "isPartial", "not", "installWrapper:", "methodClass", "selector"]
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
self._registerAnnouncements();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09defaultActive := OrderedCollection new.\x0a\x09scopedStack := LayerStack new.\x0a\x09compiler := Compiler new.\x0a\x09self registerAnnouncements.",
referencedClasses: ["OrderedCollection", "LayerStack", "Compiler"],
//>>excludeEnd("ide");
messageSends: ["new", "registerAnnouncements"]
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
selector: "newLayer:partialClasses:instanceVariableNames:package:",
protocol: 'layer creation',
fn: function (name,partials,instVarNames,package_){
var self=this;
var layer,partialClassesSource;
function $Layer(){return $globals.Layer||(typeof Layer=="undefined"?nil:Layer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
partialClassesSource=self._partialClassesMethod_(partials);
layer=$recv($Layer())._subclass_instanceVariableNames_package_(name,instVarNames,package_);
$recv(self["@compiler"])._install_forClass_protocol_(partialClassesSource,$recv(layer)._class(),"initializing");
$recv(layer)._initialize();
$1=layer;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLayer:partialClasses:instanceVariableNames:package:",{name:name,partials:partials,instVarNames:instVarNames,package_:package_,layer:layer,partialClassesSource:partialClassesSource},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "partials", "instVarNames", "package"],
source: "newLayer: name partialClasses: partials instanceVariableNames: instVarNames package: package\x0a\x09| layer partialClassesSource |\x0a\x09partialClassesSource := self partialClassesMethod: partials.\x0a\x09layer := Layer subclass: name instanceVariableNames: instVarNames package: package.\x0a\x09compiler install: partialClassesSource forClass: layer class protocol: 'initializing'.\x0a\x09layer initialize.\x0a\x09^ layer",
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
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
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
return self._error_("object is not a partial class");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({class_:class_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
stream=""._writeStream();
$recv(stream)._nextPutAll_("{ ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv($recv(collection)._allButLast())._do_((function(class_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=stream;
$3=$2;
$4=$recv(class_)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$recv($3)._nextPutAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$5=$recv($2)._nextPutAll_(". ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({class_:class_},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$6=$recv($recv(collection)._size()).__gt((0));
if($core.assert($6)){
$7=stream;
$recv($7)._nextPutAll_($recv($recv(collection)._last())._asString());
$8=$recv($7)._nextPut_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPut:"]=1;
//>>excludeEnd("ctx");
$8;
};
$recv(stream)._nextPut_("}");
$9=$recv(stream)._contents();
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partialClassesCollection:",{collection:collection,stream:stream},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["collection"],
source: "partialClassesCollection: collection\x0a\x09| stream |\x0a\x09collection do: [ :class | (class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ] ].\x0a\x09\x0a\x09stream := '' writeStream.\x0a\x09stream nextPutAll: '{ '.\x0a\x09collection allButLast do: [ :class | \x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: class asString; \x0a\x09\x09\x09nextPutAll: '. ' ].\x0a\x09collection size > 0 ifTrue: [ \x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: collection last asString;\x0a\x09\x09\x09nextPut: ' ' ].\x0a\x09stream nextPut: '}'.\x0a\x09^ stream contents\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:", "and:", "isClass", "isPartial", "error:", "writeStream", "nextPutAll:", "allButLast", "asString", "ifTrue:", ">", "size", "last", "nextPut:", "contents"]
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
protocol: 'announcements',
fn: function (){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $ClassRemoved(){return $globals.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $MethodAdded(){return $globals.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodModified(){return $globals.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($SystemAnnouncer())._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["current"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_($ClassRemoved(),(function(announcement){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleClassRemoved_(announcement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$2=$recv($SystemAnnouncer())._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["current"]=2;
//>>excludeEnd("ctx");
$recv($2)._on_do_($MethodAdded(),(function(announcement){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleMethodAdded_(announcement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv($recv($SystemAnnouncer())._current())._on_do_($MethodModified(),(function(announcement){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleMethodModified_(announcement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerAnnouncements",{},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerAnnouncements\x0a\x09SystemAnnouncer current on: ClassRemoved do: [ :announcement | self handleClassRemoved: announcement ].\x0a\x09SystemAnnouncer current on: MethodAdded do: [ :announcement | self handleMethodAdded: announcement ].\x0a\x09SystemAnnouncer current on: MethodModified do: [ :announcement | self handleMethodModified: announcement ].",
referencedClasses: ["SystemAnnouncer", "ClassRemoved", "MethodAdded", "MethodModified"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "current", "handleClassRemoved:", "handleMethodAdded:", "handleMethodModified:"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "scopedStack",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@scopedStack"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scopedStack\x0a\x09^ scopedStack",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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

$core.addMethod(
$core.method({
selector: "warning:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"warning:",{aString:aString},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "warning: aString\x0a\x09[ self error: aString ] valueWithTimeout: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithTimeout:", "error:"]
}),
$globals.ContextAmber.klass);


$core.addClass('ContextInliningCodeGenerator', $globals.InliningCodeGenerator, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._irTranslator();
$recv($2)._currentClass_(self._currentClass());
$recv($2)._visit_(self._unoptimizedIR_(aNode));
$3=$recv($2)._contents();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode},$globals.ContextInliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: (self unoptimizedIR: aNode);\x0a\x09\x09contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentClass:", "irTranslator", "currentClass", "visit:", "unoptimizedIR:", "contents"]
}),
$globals.ContextInliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "inliner",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRProceedInliner(){return $globals.IRProceedInliner||(typeof IRProceedInliner=="undefined"?nil:IRProceedInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($IRProceedInliner())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliner",{},$globals.ContextInliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inliner\x0a\x09^ IRProceedInliner new",
referencedClasses: ["IRProceedInliner"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ContextInliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "unoptimizedIR:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var ir;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._semanticAnalyzer())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
ir=$recv(self._translator())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ContextInliningCodeGenerator.superclass.fn.prototype._inliner.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($1)._visit_(ir);
$2=ir;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unoptimizedIR:",{aNode:aNode,ir:ir},$globals.ContextInliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "unoptimizedIR: aNode\x0a\x09| ir |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09super inliner visit: ir.\x0a\x09\x0a\x09^ ir",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner"]
}),
$globals.ContextInliningCodeGenerator);



$core.addClass('IRProceedInliner', $globals.IRVisitor, ['inlinedSend', 'base', 'selector', 'activeLayers'], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "activeLayers",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@activeLayers"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeLayers\x0a\x09^ activeLayers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "activeLayers:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@activeLayers"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "activeLayers: aCollection\x0a\x09activeLayers := aCollection.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRProceedInliner);

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
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "base:",
protocol: 'accessing',
fn: function (class_){
var self=this;
self["@base"]=class_;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["class"],
source: "base: class\x0a\x09base := class.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "inlinedSend",
protocol: 'inlining',
fn: function (){
var self=this;
function $IRSend(){return $globals.IRSend||(typeof IRSend=="undefined"?nil:IRSend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$receiver;
$1=self["@inlinedSend"];
if(($receiver = $1) == null || $receiver.isNil){
var recursiveInliner,nextLayer,nextPartialMethodIR,remainingLayers;
remainingLayers=self._skipLayers();
remainingLayers;
nextLayer=$recv(remainingLayers)._removeLast();
nextLayer;
$2=self._class();
$3=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$4=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
recursiveInliner=$recv($2)._for_in_withLayers_($3,$4,remainingLayers);
recursiveInliner;
nextPartialMethodIR=$recv($recv($recv(nextLayer)._partialFor_(self._base())).__gt_gt(self._selector()))._IR();
nextPartialMethodIR;
$recv(recursiveInliner)._visit_(nextPartialMethodIR);
$5=$recv($IRSend())._new();
$recv($5)._selector_("value");
$recv($5)._index_((1));
$recv($5)._add_($recv(nextPartialMethodIR)._asClosure());
$6=$recv($5)._yourself();
self["@inlinedSend"]=$6;
self["@inlinedSend"];
} else {
$1;
};
$7=self["@inlinedSend"];
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend",{},$globals.IRProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSend\x0a\x09inlinedSend ifNil: [ | recursiveInliner nextLayer nextPartialMethodIR remainingLayers |\x0a\x09\x09\x22Caches IRSend node for proceed calls. IRSend node has further partial calls inlined recursively.\x22\x0a\x09\x09remainingLayers := self skipLayers.\x0a\x09\x09nextLayer := remainingLayers removeLast.\x0a\x09\x09recursiveInliner := self class for: self selector in: self base withLayers: remainingLayers.\x0a\x09\x09nextPartialMethodIR := ((nextLayer partialFor: self base) >> self selector) IR.\x0a\x09\x09recursiveInliner visit: nextPartialMethodIR.\x0a\x09\x09inlinedSend := IRSend new\x0a\x09\x09\x09selector: #value;\x0a\x09\x09\x09index: 1;\x0a\x09\x09\x09add: nextPartialMethodIR asClosure;\x0a\x09\x09\x09yourself ].\x0a\x09^ inlinedSend",
referencedClasses: ["IRSend"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "skipLayers", "removeLast", "for:in:withLayers:", "class", "selector", "base", "IR", ">>", "partialFor:", "visit:", "selector:", "new", "index:", "add:", "asClosure", "yourself"]
}),
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
return $recv($recv(self._class())._inlinedSelectors())._includes_($recv(anIRSend)._selector());
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
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09self class inlinedSelectors includes: anIRSend selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "includes:", "inlinedSelectors", "class", "selector"]
}),
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "skipLayers",
protocol: 'inlining',
fn: function (){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
var $early={};
try {
result=$recv(self._activeLayers())._copy();
$recv(result)._reverseDo_((function(layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(layer)._class())._hasPartial_for_(self._selector(),self._base());
if($core.assert($1)){
$2=result;
throw $early=[$2];
} else {
return $recv(result)._removeLast();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=result;
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"skipLayers",{result:result},$globals.IRProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "skipLayers\x0a\x09\x22 returns a collection of activeLayers beginning with the next layer that contains a partial for the current selector \x22\x0a\x09| result |\x0a\x09result := self activeLayers copy.\x0a\x09\x0a\x09result reverseDo: [ :layer |\x0a\x09\x09(layer class hasPartial: self selector for: self base)\x0a\x09\x09\x09ifTrue: [ ^ result ]\x0a\x09\x09\x09ifFalse: [ result removeLast ] ].\x0a\x09\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "activeLayers", "reverseDo:", "ifTrue:ifFalse:", "hasPartial:for:", "class", "selector", "base", "removeLast"]
}),
$globals.IRProceedInliner);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._shouldInlineSend_(anIRSend);
if($core.assert($2)){
$1=$recv(anIRSend)._replaceWith_(self._inlinedSend());
} else {
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRProceedInliner.superclass.fn.prototype._visitIRSend_.apply($recv(self), [anIRSend]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},$globals.IRProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ anIRSend replaceWith: self inlinedSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "replaceWith:", "inlinedSend", "visitIRSend:"]
}),
$globals.IRProceedInliner);


$core.addMethod(
$core.method({
selector: "for:in:withLayers:",
protocol: 'instance creation',
fn: function (selector,base,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._base_(base);
$recv($2)._selector_(selector);
$recv($2)._activeLayers_(aCollection);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:in:withLayers:",{selector:selector,base:base,aCollection:aCollection},$globals.IRProceedInliner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector", "base", "aCollection"],
source: "for: selector in: base withLayers: aCollection\x0a\x09^ self new\x0a\x09\x09base: base;\x0a\x09\x09selector: selector;\x0a\x09\x09activeLayers: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["base:", "new", "selector:", "activeLayers:", "yourself"]
}),
$globals.IRProceedInliner.klass);

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


$core.addClass('Layer', $globals.Object, ['id'], 'ContextAmber');
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

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Layer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Layer(){return $globals.Layer||(typeof Layer=="undefined"?nil:Layer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@id"]=$recv($Layer())._nextId();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Layer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09id := Layer nextId.",
referencedClasses: ["Layer"],
//>>excludeEnd("ide");
messageSends: ["nextId"]
}),
$globals.Layer);


$globals.Layer.klass.iVarNames = ['partialClasses','nextId'];
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
selector: "hasPartial:for:",
protocol: 'testing',
fn: function (selector,base){
var self=this;
var partialClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
partialClass=$recv(self._partialClasses())._detect_ifNone_((function(partial){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(partial)._base()).__eq(base);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({partial:partial},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[false];

}));
$1=$recv(partialClass)._hasPartial_(selector);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasPartial:for:",{selector:selector,base:base,partialClass:partialClass},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector", "base"],
source: "hasPartial: selector for: base\x0a\x09| partialClass |\x0a\x09partialClass := self partialClasses \x0a\x09\x09detect: [ :partial | partial base = base ] \x0a\x09\x09ifNone: [ ^ false ].\x0a\x09^ partialClass hasPartial: selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "partialClasses", "=", "base", "hasPartial:"]
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
} else {
self["@nextId"]=(1);
self["@nextId"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self ~= Layer ifTrue: [\x0a\x09\x09partialClasses := Dictionary new.\x0a\x09\x09self partialClasses do: [ :class |\x0a\x09\x09\x09(class isClass and: [class isPartial]) ifFalse: [ self error: 'object is not a partial class' ].\x0a\x09\x09\x09partialClasses at: class base put: class ] ]\x0a\x09\x09ifFalse: [ nextId := 1 ].",
referencedClasses: ["Layer", "Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "~=", "new", "do:", "partialClasses", "ifFalse:", "and:", "isClass", "isPartial", "error:", "at:put:", "base"]
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
selector: "nextId",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@nextId"]=$recv(self["@nextId"]).__star((2));
$1=$recv(self["@nextId"]).__slash((2));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextId",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09nextId := nextId * 2.\x0a\x09^ nextId / 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "/"]
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

$core.addMethod(
$core.method({
selector: "partialFor:",
protocol: 'accessing',
fn: function (base){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@partialClasses"])._at_ifAbsent_(base,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("no partial class for base in this layer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"partialFor:",{base:base},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["base"],
source: "partialFor: base\x0a\x09^ partialClasses at: base ifAbsent: [ self error: 'no partial class for base in this layer' ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "error:"]
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
var $1;
$1=$recv($recv(aLayer)._class())._isLayer();
if(!$core.assert($1)){
self._error_("object is not a layer");
};
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aLayer:aLayer},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "add: aLayer\x0a\x09aLayer class isLayer\x0a\x09\x09ifFalse: [ self error: 'object is not a layer' ].\x0a\x09\x09\x0a\x09addStack indexOf: aLayer ifAbsent: [\x0a\x09\x09addStack add: aLayer.\x0a\x09\x09removeStack add: nil ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isLayer", "class", "error:", "indexOf:ifAbsent:", "add:"]
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
removeEl=$recv(self["@removeStack"])._at_(index);
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
source: "do: aBlock\x0a\x09(1 to: self size) do: [ :index | | addEl removeEl |\x0a\x09\x09addEl := addStack at: index.\x0a\x09\x09removeEl := removeStack at: index. \x0a\x09\x09addEl\x0a\x09\x09\x09ifNil: [ aBlock value: #remove value: removeEl ]\x0a\x09\x09\x09ifNotNil: [ aBlock value: #add value: addEl ] ].",
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
selector: "pop",
protocol: 'stack',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@addStack"])._removeLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeLast"]=1;
//>>excludeEnd("ctx");
$recv(self["@removeStack"])._removeLast();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pop",{},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pop\x0a\x09addStack removeLast.\x0a\x09removeStack removeLast.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast"]
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
var $1;
$1=$recv($recv(aLayer)._class())._isLayer();
if(!$core.assert($1)){
self._error_("object is not a layer");
};
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
source: "remove: aLayer\x0a\x09aLayer class isLayer\x0a\x09\x09ifFalse: [ self error: 'object is not a layer' ].\x0a\x09\x09\x0a\x09self remove: aLayer in: addStack collapse: removeStack.\x0a\x09removeStack add: aLayer.\x0a\x09addStack add: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isLayer", "class", "error:", "remove:in:collapse:", "add:"]
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
$recv(primaryCollection)._removeIndex_(index);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeIndex:"]=1;
//>>excludeEnd("ctx");
$recv(secondaryCollection)._removeIndex_(index);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:in:collapse:",{aLayer:aLayer,primaryCollection:primaryCollection,secondaryCollection:secondaryCollection,index:index},$globals.LayerStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer", "primaryCollection", "secondaryCollection"],
source: "remove: aLayer in: primaryCollection collapse: secondaryCollection\x0a\x09| index |\x0a\x09index := primaryCollection indexOf: aLayer ifAbsent: [ nil ].\x0a\x09index ifNotNil: [ \x0a\x09\x09primaryCollection removeIndex: index.\x0a\x09\x09secondaryCollection removeIndex: index ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "ifNotNil:", "removeIndex:"]
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
var $1;
$1=$recv($recv(aLayer)._class())._isLayer();
if(!$core.assert($1)){
self._error_("object is not a layer");
};
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
source: "reset: aLayer\x0a\x09aLayer class isLayer\x0a\x09\x09ifFalse: [ self error: 'object is not a layer' ].\x0a\x09\x09\x0a\x09self remove: aLayer in: removeStack collapse: addStack.\x0a\x09self remove: aLayer in: addStack collapse: removeStack.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isLayer", "class", "error:", "remove:in:collapse:"]
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
selector: "hasPartial:",
protocol: 'testing',
fn: function (selector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._includesSelector_(selector);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasPartial:",{selector:selector},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "hasPartial: selector\x0a\x09^ self includesSelector: selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includesSelector:"]
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
var $1,$3,$2,$4;
$1=self.__tild_eq($PartialClass());
if($core.assert($1)){
$3=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isClass();
if(!$core.assert($2)){
self._error_("object is not a class");
};
$4=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=2;
//>>excludeEnd("ctx");
$recv($4)._addPartial_(self);
$recv(self._methods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._base())._installWrapper_($recv(method)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self ~= PartialClass ifTrue: [\x0a\x09\x09self base isClass ifFalse: [ self error: 'object is not a class' ].\x0a\x09\x09self base addPartial: self.\x0a\x09\x09self methods do: [ :method | self base installWrapper: method selector ] ].",
referencedClasses: ["PartialClass"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "ifFalse:", "isClass", "base", "error:", "addPartial:", "do:", "methods", "installWrapper:", "selector"]
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
var $1,$2,$4,$3,$5;
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
$recv(partialClass)._initialize();
$5=partialClass;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:baseClass:package:",{name:name,base:base,package_:package_,partialClass:partialClass},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "base", "package"],
source: "new: name baseClass: base package: package\x0a\x09| partialClass |\x0a\x09base isClass ifFalse: [ super error: 'object is not a class' ].\x0a\x09partialClass := super subclass: name instanceVariableNames: '' package: package.\x0a\x09partialClass class compile: 'base ^ ', String lf, String tab, base name protocol: 'accessing'.\x0a\x09partialClass initialize.\x0a\x09^ partialClass",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClass", "error:", "subclass:instanceVariableNames:package:", "compile:protocol:", "class", ",", "lf", "tab", "name", "initialize"]
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
selector: "generateWrapper:",
protocol: '*ContextAmber',
fn: function (method){
var self=this;
var wrapper,wrapperTemplate,compiler;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Behavior(){return $globals.Behavior||(typeof Behavior=="undefined"?nil:Behavior)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
compiler=$recv($Compiler())._new();
wrapperTemplate=$recv($recv($Behavior()).__gt_gt("wrapperTemplate"))._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
wrapper=$recv(compiler)._eval_($recv(compiler)._compile_forClass_(wrapperTemplate,self));
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
$recv(wrapper)._source_($recv(method)._source());
$3=wrapper;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateWrapper:",{method:method,wrapper:wrapper,wrapperTemplate:wrapperTemplate,compiler:compiler},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["method"],
source: "generateWrapper: method\x0a\x09| wrapper wrapperTemplate compiler |\x0a\x09compiler := Compiler new.\x0a\x09wrapperTemplate := (Behavior >> #wrapperTemplate) source.\x0a\x09wrapper := compiler eval: (compiler compile: wrapperTemplate forClass: self).\x0a\x09wrapper fn basicAt: #selector put: method selector.\x0a\x09wrapper fn basicAt: #original put: method.\x0a\x09wrapper selector: method selector.\x0a\x09wrapper source: method source.\x0a\x09^ wrapper",
referencedClasses: ["Compiler", "Behavior"],
//>>excludeEnd("ide");
messageSends: ["new", "source", ">>", "eval:", "compile:forClass:", "basicAt:put:", "fn", "selector", "selector:", "source:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "installWrapper:",
protocol: '*ContextAmber',
fn: function (selector){
var self=this;
var original,wrapper;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("[LOG] installing wrapper for ".__comma(self._asString())).__comma(">>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(selector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
original=self.__gt_gt(selector);
wrapper=self._generateWrapper_(original);
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(wrapper,self,$recv(original)._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installWrapper:",{selector:selector,original:original,wrapper:wrapper},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "installWrapper: selector\x0a\x09| original wrapper |\x0a\x09Transcript show: '[LOG] installing wrapper for ', self asString, '>>', selector, String lf.\x0a\x09original := self >> selector.\x0a\x09wrapper := self generateWrapper: original.\x0a\x09ClassBuilder new installMethod: wrapper forClass: self protocol: original protocol.",
referencedClasses: ["Transcript", "String", "ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "asString", "lf", ">>", "generateWrapper:", "installMethod:forClass:protocol:", "new", "protocol"]
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
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._partials())._remove_ifAbsent_(class_,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ContextAmber())._warning_("list of partial classes out of sync");
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
source: "removePartial: class\x0a\x09self partials remove: class ifAbsent: [ ContextAmber warning: 'list of partial classes out of sync' ].",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "partials", "warning:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "wrapperTemplate",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var nextLayer,selector;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv($Transcript())._show_("[LOG] wrapper call".__comma($recv($String())._lf()));
nextLayer=$recv(self._activeLayers())._last();
selector=$recv($recv(arguments)._callee())._basicAt_("selector");
$1=$recv($recv($recv($recv(nextLayer)._class()).__gt_gt(selector))._fn())._apply_withPossibleArguments_(self,arguments);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapperTemplate",{nextLayer:nextLayer,selector:selector},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapperTemplate\x0a\x09| nextLayer selector |\x0a\x09Transcript show: '[LOG] wrapper call', String lf.\x0a\x09nextLayer := self activeLayers last.\x0a\x09selector := arguments callee basicAt: #selector.\x0a\x09^ (nextLayer class >> selector) fn apply: self withPossibleArguments: arguments",
referencedClasses: ["Transcript", "String"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "lf", "last", "activeLayers", "basicAt:", "callee", "apply:withPossibleArguments:", "fn", ">>", "class"]
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
selector: "withLayer:",
protocol: '*ContextAmber',
fn: function (layer){
var self=this;
var result;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($ContextAmber())._scopedStack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopedStack"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_(layer);
result=self._value();
$recv($recv($ContextAmber())._scopedStack())._pop();
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withLayer:",{layer:layer,result:result},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["layer"],
source: "withLayer: layer\x0a\x09| result |\x0a\x09ContextAmber scopedStack add: layer.\x0a\x09result := self value.\x0a\x09ContextAmber scopedStack pop.\x0a\x09^ result",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["add:", "scopedStack", "value", "pop"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "withoutLayer:",
protocol: '*ContextAmber',
fn: function (layer){
var self=this;
var result;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($ContextAmber())._scopedStack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopedStack"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove_(layer);
result=self._value();
$recv($recv($ContextAmber())._scopedStack())._pop();
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withoutLayer:",{layer:layer,result:result},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["layer"],
source: "withoutLayer: layer\x0a\x09| result |\x0a\x09ContextAmber scopedStack remove: layer.\x0a\x09result := self value.\x0a\x09ContextAmber scopedStack pop.\x0a\x09^ result",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["remove:", "scopedStack", "value", "pop"]
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
$recv($1)._nextPutAll_("partialClasses: ");
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
source: "layerDeclarationSource\x0a\x09| stream |\x0a\x09stream := '' writeStream.\x0a\x09stream\x0a\x09\x09nextPutAll: 'ContextAmber newLayer: #';\x0a\x09\x09nextPutAll: selectedClass name;\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'partialClasses: ';\x0a\x09\x09nextPutAll: (ContextAmber partialClassesCollection: selectedClass partialClasses);\x0a\x09\x09nextPutAll: String lf, String tab;\x0a\x09\x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09selectedClass instanceVariableNames\x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09stream\x0a\x09\x09nextPutAll: '''', String lf, String tab;\x0a\x09\x09nextPutAll: 'package: ''';\x0a\x09\x09nextPutAll: selectedClass category;\x0a\x09\x09nextPutAll: ''''.\x0a\x09^ stream contents",
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
selector: "IR",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var ir,ast,generator;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $ContextInliningCodeGenerator(){return $globals.ContextInliningCodeGenerator||(typeof ContextInliningCodeGenerator=="undefined"?nil:ContextInliningCodeGenerator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=self._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
ast=$recv($Smalltalk())._parse_($1);
generator=$recv($ContextInliningCodeGenerator())._new();
$2=generator;
$recv($2)._source_(self._source());
$recv($2)._currentClass_(self._class());
$3=$recv($2)._unoptimizedIR_(ast);
ir=$3;
$4=ir;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"IR",{ir:ir,ast:ast,generator:generator},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "IR\x0a\x09| ir ast generator |\x0a\x09\x22ir := self basicAt: #IR.\x0a\x09ir ifNotNil: [ ^ ir ].\x22\x0a\x09\x0a\x09ast := Smalltalk parse: self source.\x0a\x09generator := ContextInliningCodeGenerator new.\x0a\x09ir := generator\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self class;\x0a\x09\x09unoptimizedIR: ast.\x0a\x09\x0a\x09\x22 TODO: caching (deepCopy fails)\x22\x0a\x09\x22ir := ir deepCopy.\x0a\x09self basicAt: #IR put: ir.\x22\x0a\x09^ ir",
referencedClasses: ["Smalltalk", "ContextInliningCodeGenerator"],
//>>excludeEnd("ide");
messageSends: ["parse:", "source", "new", "source:", "currentClass:", "class", "unoptimizedIR:"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isPartial",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._fn())._basicAt_("original"))._isNil())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isPartial",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartial\x0a\x09^ (self fn basicAt: #original) isNil not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isNil", "basicAt:", "fn"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "asClosure",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var closure;
function $IRClosure(){return $globals.IRClosure||(typeof IRClosure=="undefined"?nil:IRClosure)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
closure=$recv($IRClosure())._new();
$recv(closure)._arguments_(self._arguments());
$recv(closure)._scope_(self._scope());
$recv(self._instructions())._do_((function(instr){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(closure)._add_(instr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({instr:instr},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=closure;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asClosure",{closure:closure},$globals.IRMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asClosure\x0a\x09| closure |\x0a\x09closure := IRClosure new.\x0a\x09closure arguments: self arguments.\x0a\x09closure scope: self scope.\x0a\x09self instructions do: [ :instr | closure add: instr ].\x0a\x09^ closure",
referencedClasses: ["IRClosure"],
//>>excludeEnd("ide");
messageSends: ["new", "arguments:", "arguments", "scope:", "scope", "do:", "instructions", "add:"]
}),
$globals.IRMethod);

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
$globals.Metaclass);

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
var $1,$2,$3,$4,$receiver;
layers=$recv($OrderedCollection())._new();
$recv(layers)._addAll_($recv($ContextAmber())._defaultActive());
$recv($recv($ContextAmber())._scopedStack())._do_((function(operation,layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(operation).__eq("add");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return $recv(layers)._indexOf_ifAbsent_(layer,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(layers)._add_(layer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["indexOf:ifAbsent:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(layers)._remove_ifAbsent_(layer,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remove:ifAbsent:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({operation:operation,layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$2=self._layerStack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["layerStack"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(self._layerStack())._do_((function(operation,layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(operation).__eq("add");
if($core.assert($3)){
return $recv(layers)._indexOf_ifAbsent_(layer,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(layers)._add_(layer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)});
//>>excludeEnd("ctx");
}));
} else {
return $recv(layers)._remove_ifAbsent_(layer,(function(){

}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({operation:operation,layer:layer},$ctx1,7)});
//>>excludeEnd("ctx");
}));
};
$4=layers;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activeLayers",{layers:layers},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeLayers\x0a\x09| layers |\x0a\x09layers := OrderedCollection new.\x0a\x09layers addAll: ContextAmber defaultActive.\x0a\x09\x0a\x09ContextAmber scopedStack do: [ :operation :layer |\x0a\x09\x09operation = #add\x0a\x09\x09\x09ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]\x0a\x09\x09\x09ifFalse: [ layers remove: layer ifAbsent: [ ] ] ].\x0a\x09\x09\x09\x0a\x09self layerStack ifNotNil: [\x0a\x09\x09self layerStack do: [ :operation :layer | \x0a\x09\x09\x09operation = #add\x0a\x09\x09\x09\x09ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]\x0a\x09\x09\x09\x09ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].\x0a\x09\x09\x09\x0a\x09^ layers",
referencedClasses: ["OrderedCollection", "ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["new", "addAll:", "defaultActive", "do:", "scopedStack", "ifTrue:ifFalse:", "=", "indexOf:ifAbsent:", "add:", "remove:ifAbsent:", "ifNotNil:", "layerStack"]
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
selector: "objectLayersDirty",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (typeof(self['layersDirty']) === 'undefined') {
		return false;
	} else {
		return self['layersDirty'];
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"objectLayersDirty",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "objectLayersDirty\x0a\x09< if (typeof(self['layersDirty']) === 'undefined') {\x0a\x09\x09return false;\x0a\x09} else {\x0a\x09\x09return self['layersDirty'];\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "objectLayersDirty:",
protocol: '*ContextAmber',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 self['layersDirty']  = aBoolean; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"objectLayersDirty:",{aBoolean:aBoolean},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "objectLayersDirty: aBoolean\x0a\x09< self['layersDirty']  = aBoolean; >",
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

$core.addMethod(
$core.method({
selector: "compositionSignature",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var last,nextIndex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$6,$8,$7,$5,$4,$13,$14,$12,$17,$18,$16,$15,$11,$10,$9;
$1=self._isEmpty();
if($core.assert($1)){
return (0);
};
last=$recv(self._first())._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
nextIndex=(2);
$3=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$2=(2)._to_($3);
$recv($2)._do_((function(index){
var next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
next=$recv(self._at_(index))._id();
next;
$6=$recv(last).__plus(next);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$8=$recv(last).__plus(next);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__star($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__star(next);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
last=$recv($4).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=1;
//>>excludeEnd("ctx");
return last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index,next:next},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$13=last;
$14=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__plus($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
$17=last;
$18=self._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=3;
//>>excludeEnd("ctx");
$16=$recv($17).__plus($18);
$15=$recv($16).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
$11=$recv($12).__star($15);
$10=$recv($11).__star(self._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__slash((2));
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compositionSignature",{last:last,nextIndex:nextIndex},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compositionSignature\x0a\x09| last nextIndex |\x0a\x09self isEmpty ifTrue: [ ^ 0 ].\x0a\x09last := self first id.\x0a\x09nextIndex := 2.\x0a\x09\x0a\x09(2 to: self size) do: [ :index | | next |\x0a\x09\x09next := (self at: index) id.\x0a\x09\x09last := (last + next) * (last + next + 1) * next / 2 ].\x0a\x09\x0a\x09^ (last + self size) * (last + self size + 1) * self size / 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isEmpty", "id", "first", "do:", "to:", "size", "at:", "/", "*", "+"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "reverseDo:",
protocol: '*ContextAmber',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		self = self._numericallyIndexable();
		for(var i=self.length - 1; -1 < i; i--) {
			aBlock._value_(self[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reverseDo:",{aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "reverseDo: aBlock\x0a\x09<\x0a\x09\x09self = self._numericallyIndexable();\x0a\x09\x09for(var i=self.length - 1; -1 < i; i--) {\x0a\x09\x09\x09aBlock._value_(self[i]);\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

});
