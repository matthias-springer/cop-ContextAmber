define("amber-context/ContextAmber", ["amber/boot", "amber_core/Compiler-Core", "amber_core/Kernel-Objects", "amber_core/Compiler-Inlining", "amber_core/Compiler-Semantic", "amber_core/Compiler-IR", "amber_core/Compiler-AST", "amber_core/Kernel-Classes", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections", "amber_core/IDE"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('ContextAmber');
$core.packages["ContextAmber"].transport = {"type":"amd","amdNamespace":"amber-context"};

$core.addClass('ASTProceedInliner', $globals.NodeVisitor, ['inlinedSend', 'base', 'selector', 'activeLayers'], 'ContextAmber');
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
$globals.ASTProceedInliner);

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
$globals.ASTProceedInliner);

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
$globals.ASTProceedInliner);

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
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return eval(aString); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09< return eval(aString); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "inlinedCompiledMethod",
protocol: 'inlining',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._eval_(self._inlinedMethod());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedCompiledMethod",{},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedCompiledMethod\x0a\x09^ self eval: self inlinedMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["eval:", "inlinedMethod"]
}),
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "inlinedMethod",
protocol: 'inlining',
fn: function (){
var self=this;
var remainingLayers,nextLayer,partialMethodNode,currentActiveLayers;
function $ContextInliningCodeGenerator(){return $globals.ContextInliningCodeGenerator||(typeof ContextInliningCodeGenerator=="undefined"?nil:ContextInliningCodeGenerator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3,$8,$9,$7,$10,$6,$11,$16,$15,$14,$13,$12,$18,$19,$17;
currentActiveLayers=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=1;
//>>excludeEnd("ctx");
self._activeLayers_(self._skipLayers());
$2=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
if($core.assert($1)){
$4=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$5=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt_gt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
partialMethodNode=$recv($3)._ast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ast"]=1;
//>>excludeEnd("ctx");
partialMethodNode;
} else {
nextLayer=$recv(self._activeLayers())._removeLast();
nextLayer;
$8=$recv(nextLayer)._class();
$9=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._partialFor_($9);
$10=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__gt_gt($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=2;
//>>excludeEnd("ctx");
partialMethodNode=$recv($6)._ast();
partialMethodNode;
};
$11=$recv(partialMethodNode)._sequenceNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sequenceNode"]=1;
//>>excludeEnd("ctx");
$16=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=3;
//>>excludeEnd("ctx");
$15=$recv($16).__gt_gt(self._selector());
$14=$recv($15)._inliningStrategy();
$13=$recv($14)._updateMethodAST_(currentActiveLayers);
$12=$recv($13)._sequenceNode();
$recv($11)._addFirstNode_($12);
self._visit_(partialMethodNode);
$18=$recv($ContextInliningCodeGenerator())._new();
$recv($18)._currentClass_(self._base());
$19=$recv($18)._compileNode_(partialMethodNode);
$17=$19;
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedMethod",{remainingLayers:remainingLayers,nextLayer:nextLayer,partialMethodNode:partialMethodNode,currentActiveLayers:currentActiveLayers},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedMethod\x0a\x09| remainingLayers nextLayer partialMethodNode currentActiveLayers |\x0a\x09currentActiveLayers := self activeLayers.\x0a\x09self activeLayers: self skipLayers.\x0a\x09self activeLayers isEmpty\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09partialMethodNode := (self base >> self selector) ast ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09nextLayer := self activeLayers removeLast.\x0a\x09\x09\x09partialMethodNode := ((nextLayer class partialFor: self base) >> self selector) ast ].\x0a\x09partialMethodNode sequenceNode addFirstNode: ((self base >> self selector) inliningStrategy updateMethodAST: currentActiveLayers) sequenceNode.\x0a\x09self visit: partialMethodNode.\x0a\x09^ ContextInliningCodeGenerator new\x0a\x09\x09currentClass: self base;\x0a\x09\x09compileNode: partialMethodNode",
referencedClasses: ["ContextInliningCodeGenerator"],
//>>excludeEnd("ide");
messageSends: ["activeLayers", "activeLayers:", "skipLayers", "ifTrue:ifFalse:", "isEmpty", "ast", ">>", "base", "selector", "removeLast", "partialFor:", "class", "addFirstNode:", "sequenceNode", "updateMethodAST:", "inliningStrategy", "visit:", "currentClass:", "new", "compileNode:"]
}),
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "inlinedSend:",
protocol: 'inlining',
fn: function (args){
var self=this;
function $PartialBlockNode(){return $globals.PartialBlockNode||(typeof PartialBlockNode=="undefined"?nil:PartialBlockNode)}
function $SendNode(){return $globals.SendNode||(typeof SendNode=="undefined"?nil:SendNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$8,$9,$7,$10,$6,$11,$12,$13,$14,$15,$receiver;
$1=self["@inlinedSend"];
if(($receiver = $1) == null || $receiver.isNil){
var recursiveInliner,nextLayer,nextPartialMethodAST,remainingLayers,blockNode,blockScope;
remainingLayers=self._skipLayers();
remainingLayers;
$2=$recv(remainingLayers)._isEmpty();
if($core.assert($2)){
$4=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$5=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt_gt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
nextPartialMethodAST=$recv($3)._ast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ast"]=1;
//>>excludeEnd("ctx");
nextPartialMethodAST;
} else {
nextLayer=$recv(remainingLayers)._removeLast();
nextLayer;
$8=$recv(nextLayer)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$9=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._partialFor_($9);
$10=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__gt_gt($10);
nextPartialMethodAST=$recv($6)._ast();
nextPartialMethodAST;
};
recursiveInliner=$recv(self._class())._for_in_withLayers_(self._selector(),self._base(),remainingLayers);
recursiveInliner;
$recv(recursiveInliner)._visit_(nextPartialMethodAST);
$11=$recv($PartialBlockNode())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($11)._parameters_($recv(nextPartialMethodAST)._arguments());
$recv($11)._addNode_($recv($recv(nextPartialMethodAST)._sequenceNode())._asBlockSequenceNode());
$12=$recv($11)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
blockNode=$12;
blockNode;
$13=$recv($SendNode())._new();
$recv($13)._receiver_(blockNode);
$recv($13)._selector_(self._valueSelector_($recv(args)._size()));
$recv($13)._arguments_(args);
$14=$recv($13)._yourself();
self["@inlinedSend"]=$14;
self["@inlinedSend"];
} else {
$1;
};
$15=self["@inlinedSend"];
return $15;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:",{args:args},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "inlinedSend: args\x0a\x09inlinedSend ifNil: [ | recursiveInliner nextLayer nextPartialMethodAST remainingLayers blockNode blockScope |\x0a\x09\x09\x22Caches IRSend node for proceed calls. IRSend node has further partial calls inlined recursively.\x22\x0a\x09\x09remainingLayers := self skipLayers.\x0a\x09\x09remainingLayers isEmpty\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09nextPartialMethodAST := (self base >> self selector) ast ]\x0a\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09nextLayer := remainingLayers removeLast.\x0a\x09\x09\x09\x09nextPartialMethodAST := ((nextLayer class partialFor: self base) >> self selector) ast ].\x0a\x09\x09recursiveInliner := self class for: self selector in: self base withLayers: remainingLayers.\x0a\x09\x09recursiveInliner visit: nextPartialMethodAST.\x0a\x09\x09blockNode := PartialBlockNode new\x0a\x09\x09\x09parameters: nextPartialMethodAST arguments;\x0a\x09\x09\x09addNode: nextPartialMethodAST sequenceNode asBlockSequenceNode;\x0a\x09\x09\x09yourself.\x0a\x09\x09inlinedSend := SendNode new\x0a\x09\x09\x09receiver: blockNode;\x0a\x09\x09\x09selector: (self valueSelector: args size);\x0a\x09\x09\x09arguments: args;\x0a\x09\x09\x09yourself ].\x0a\x09^ inlinedSend",
referencedClasses: ["PartialBlockNode", "SendNode"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "skipLayers", "ifTrue:ifFalse:", "isEmpty", "ast", ">>", "base", "selector", "removeLast", "partialFor:", "class", "for:in:withLayers:", "visit:", "parameters:", "new", "arguments", "addNode:", "asBlockSequenceNode", "sequenceNode", "yourself", "receiver:", "selector:", "valueSelector:", "size", "arguments:"]
}),
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'initializing',
fn: function (){
var self=this;
self["@inlinedSend"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09inlinedSend := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTProceedInliner);

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
$globals.ASTProceedInliner);

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
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineSend:",
protocol: 'testing',
fn: function (aSendNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._class())._inlinedSelectors())._includes_($recv(aSendNode)._selector());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{aSendNode:aSendNode},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSendNode"],
source: "shouldInlineSend: aSendNode\x0a\x09^ self class inlinedSelectors includes: aSendNode selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "inlinedSelectors", "class", "selector"]
}),
$globals.ASTProceedInliner);

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
}, function($ctx1) {$ctx1.fill(self,"skipLayers",{result:result},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "skipLayers\x0a\x09\x22 returns a collection of activeLayers beginning with the next layer that contains a partial for the current selector \x22\x0a\x09| result |\x0a\x09result := self activeLayers copy.\x0a\x09\x0a\x09result reverseDo: [ :layer |\x0a\x09\x09(layer class hasPartial: self selector for: self base)\x0a\x09\x09\x09ifTrue: [ ^ result ]\x0a\x09\x09\x09ifFalse: [ result removeLast ] ].\x0a\x09\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "activeLayers", "reverseDo:", "ifTrue:ifFalse:", "hasPartial:for:", "class", "selector", "base", "removeLast"]
}),
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "valueSelector:",
protocol: 'inlining',
fn: function (numArgs){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(numArgs).__eq((0));
if($core.assert($1)){
return "value";
} else {
var result;
result="";
result;
$recv(numArgs)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(result).__comma("value:");
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$2=result;
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueSelector:",{numArgs:numArgs},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["numArgs"],
source: "valueSelector: numArgs\x0a\x09numArgs = 0 \x0a\x09\x09ifTrue: [ ^ #value ]\x0a\x09\x09ifFalse: [ | result |\x0a\x09\x09\x09result := ''.\x0a\x09\x09\x09numArgs timesRepeat: [ result := result, 'value:' ].\x0a\x09\x09\x09^ result ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "timesRepeat:", ","]
}),
$globals.ASTProceedInliner);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aSendNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._shouldInlineSend_(aSendNode);
if($core.assert($2)){
$1=$recv(aSendNode)._replaceWith_(self._inlinedSend_($recv(aSendNode)._arguments()));
} else {
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ASTProceedInliner.superclass.fn.prototype._visitSendNode_.apply($recv(self), [aSendNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aSendNode:aSendNode},$globals.ASTProceedInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSendNode"],
source: "visitSendNode: aSendNode\x0a\x09^ (self shouldInlineSend: aSendNode)\x0a\x09\x09ifTrue: [ aSendNode replaceWith: (self inlinedSend: aSendNode arguments) ]\x0a\x09\x09ifFalse: [ super visitSendNode: aSendNode ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "replaceWith:", "inlinedSend:", "arguments", "visitSendNode:"]
}),
$globals.ASTProceedInliner);


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
}, function($ctx1) {$ctx1.fill(self,"for:in:withLayers:",{selector:selector,base:base,aCollection:aCollection},$globals.ASTProceedInliner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector", "base", "aCollection"],
source: "for: selector in: base withLayers: aCollection\x0a\x09^ self new\x0a\x09\x09base: base;\x0a\x09\x09selector: selector;\x0a\x09\x09activeLayers: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["base:", "new", "selector:", "activeLayers:", "yourself"]
}),
$globals.ASTProceedInliner.klass);

$core.addMethod(
$core.method({
selector: "inlinedSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["proceed", "proceed:", "proceed:value:", "proceed:value:value:", "proceed:value:value:value:", "proceed:value:value:value:value:", "proceed:value:value:value:value:value:"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSelectors\x0a\x09^ #('proceed' 'proceed:' 'proceed:value:' 'proceed:value:value:' 'proceed:value:value:value:' 'proceed:value:value:value:value:' 'proceed:value:value:value:value:value:')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTProceedInliner.klass);


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
selector: "globalLayerComposition",
protocol: 'accessing',
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
}, function($ctx1) {$ctx1.fill(self,"globalLayerComposition",{layers:layers},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerComposition\x0a\x09| layers |\x0a\x09layers := OrderedCollection new.\x0a\x09layers addAll: ContextAmber defaultActive.\x0a\x0a\x09ContextAmber scopedStack do: [ :operation :layer |\x0a\x09\x09operation = #add\x0a\x09\x09\x09ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]\x0a\x09\x09\x09ifFalse: [ layers remove: layer ifAbsent: [ ] ] ].\x0a\x0a\x09self layerStack ifNotNil: [\x0a\x09\x09self layerStack do: [ :operation :layer | \x0a\x09\x09\x09operation = #add\x0a\x09\x09\x09\x09ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]\x0a\x09\x09\x09\x09ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].\x0a\x09\x09\x09\x09\x0a\x09^ layers",
referencedClasses: ["OrderedCollection", "ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["new", "addAll:", "defaultActive", "do:", "scopedStack", "ifTrue:ifFalse:", "=", "indexOf:ifAbsent:", "add:", "remove:ifAbsent:", "ifNotNil:", "layerStack"]
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
$recv(class_)._handleMethodAdded_(method);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleMethodAdded:",{announcement:announcement,method:method,class_:class_},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "handleMethodAdded: announcement\x0a\x09| method class |\x0a\x09method := announcement method.\x0a\x09class := method methodClass.\x0a\x09class isPartial ifTrue: [ class handleMethodAdded: method ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method", "methodClass", "ifTrue:", "isPartial", "handleMethodAdded:"]
}),
$globals.ContextAmber.klass);

$core.addMethod(
$core.method({
selector: "handleMethodModified:",
protocol: 'announcements',
fn: function (announcement){
var self=this;
var oldMethod,newMethod,class_;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$6,$7,$9,$8;
oldMethod=$recv(announcement)._oldMethod();
newMethod=$recv(announcement)._method();
$2=$recv(oldMethod)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isPartial"]=1;
//>>excludeEnd("ctx");
$4=$recv(newMethod)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isPartial"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._not();
$1=$recv($2).__and($3);
if($core.assert($1)){
$5=$recv($ClassBuilder())._new();
$6=oldMethod;
$7=$recv(oldMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$recv($5)._installMethod_forClass_protocol_($6,$7,$recv(oldMethod)._protocol());
return self;
};
$9=$recv(newMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._isPartial();
if($core.assert($8)){
$recv($recv(newMethod)._methodClass())._handleMethodAdded_(newMethod);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleMethodModified:",{announcement:announcement,oldMethod:oldMethod,newMethod:newMethod,class_:class_},$globals.ContextAmber.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "handleMethodModified: announcement\x0a\x09| oldMethod newMethod class |\x0a\x09oldMethod := announcement oldMethod.\x0a\x09newMethod := announcement method.\x0a\x09oldMethod isPartial & newMethod isPartial not ifTrue: [\x0a\x09\x09\x22not a partial method\x22\x0a\x09\x09\x22TODO: install wrapper\x22\x0a\x09\x09ClassBuilder new installMethod: oldMethod forClass: oldMethod methodClass protocol: oldMethod protocol.\x0a\x09\x09^ self ].\x0a\x09newMethod methodClass isPartial ifTrue: [ newMethod methodClass handleMethodAdded: newMethod ].",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["oldMethod", "method", "ifTrue:", "&", "isPartial", "not", "installMethod:forClass:protocol:", "new", "methodClass", "protocol", "handleMethodAdded:"]
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
selector: "semanticAnalyzer",
protocol: 'compiling',
fn: function (){
var self=this;
function $ContextInliningSemanticAnalyzer(){return $globals.ContextInliningSemanticAnalyzer||(typeof ContextInliningSemanticAnalyzer=="undefined"?nil:ContextInliningSemanticAnalyzer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($ContextInliningSemanticAnalyzer())._on_(self._currentClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{},$globals.ContextInliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "semanticAnalyzer\x0a\x09^ ContextInliningSemanticAnalyzer on: self currentClass",
referencedClasses: ["ContextInliningSemanticAnalyzer"],
//>>excludeEnd("ide");
messageSends: ["on:", "currentClass"]
}),
$globals.ContextInliningCodeGenerator);



$core.addClass('ContextInliningSemanticAnalyzer', $globals.SemanticAnalyzer, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "errorShadowingVariable:",
protocol: 'error handling',
fn: function (aString){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09\x22shadowing allowed for inlined proceed calls\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContextInliningSemanticAnalyzer);



$core.addClass('IRPartialClosure', $globals.IRClosure, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitIRPartialClosure_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.IRPartialClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRPartialClosure: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRPartialClosure:"]
}),
$globals.IRPartialClosure);

$core.addMethod(
$core.method({
selector: "isPartialClosure",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartialClosure\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRPartialClosure);



$core.addClass('InliningStrategy', $globals.Object, ['method', 'compiler'], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "base",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._method())._methodClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"base",{},$globals.InliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "base\x0a\x09^ self method methodClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodClass", "method"]
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "compiler",
protocol: 'accessing',
fn: function (){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@compiler"]).__eq(nil);
if($core.assert($1)){
self["@compiler"]=$recv($Compiler())._new();
self["@compiler"];
};
$2=self["@compiler"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiler",{},$globals.InliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiler\x0a\x09compiler = nil\x0a\x09\x09ifTrue: [ compiler := Compiler new ].\x0a\x09^ compiler",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "new"]
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "installWrapper",
protocol: 'wrapper',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("[LOG] installing wrapper for ".__comma($recv($recv(self["@method"])._methodClass())._asString())).__comma(">>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv(self["@method"])._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(self._wrapper(),self._base(),self._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installWrapper",{},$globals.InliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "installWrapper\x0a\x09Transcript show: '[LOG] installing wrapper for ', method methodClass asString, '>>', method selector, String lf.\x0a\x09ClassBuilder new installMethod: self wrapper forClass: self base protocol: self protocol.",
referencedClasses: ["Transcript", "String", "ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "asString", "methodClass", "selector", "lf", "installMethod:forClass:protocol:", "new", "wrapper", "base", "protocol"]
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@method"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "method:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
self["@method"]=aCompiledMethod;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._method())._protocol();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol",{},$globals.InliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x09^ self method protocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol", "method"]
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._method())._selector();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector",{},$globals.InliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ self method selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector", "method"]
}),
$globals.InliningStrategy);

$core.addMethod(
$core.method({
selector: "wrapper",
protocol: 'wrapper',
fn: function (){
var self=this;
var wrapper,wrapperTemplate,methodSignature;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$7,$6,$5,$8,$9,$11,$10,$12,$16,$15,$14,$13,$17,$18,$19,$20,$21,$22;
methodSignature="";
$3=$recv(self["@method"])._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._tokenize_(":");
$1=$recv($2)._allButLast();
$4=$recv(self["@method"])._arguments();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arguments"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_do_($4,(function(sel,arg){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv(methodSignature).__comma(sel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(": ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(arg);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
methodSignature=$recv($5).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return methodSignature;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sel:sel,arg:arg},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$8=$recv(methodSignature).__eq("");
if($core.assert($8)){
methodSignature=$recv(self["@method"])._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
methodSignature;
};
wrapperTemplate=$recv($recv(self._class()).__gt_gt("wrapperTemplate"))._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
wrapperTemplate=$recv(wrapperTemplate)._replace_with_("wrapperTemplate",methodSignature);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
$9=wrapperTemplate;
$11=$recv(self["@method"])._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=3;
//>>excludeEnd("ctx");
$10="#".__comma($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
wrapperTemplate=$recv($9)._replace_with_("SELECTOR",$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=2;
//>>excludeEnd("ctx");
$12=wrapperTemplate;
$16=$recv(self["@method"])._arguments();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arguments"]=2;
//>>excludeEnd("ctx");
$15=$recv($16)._join_(". ");
$14="{ ".__comma($15);
$13=$recv($14).__comma(" }");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
wrapperTemplate=$recv($12)._replace_with_("ARGUMENTS",$13);
$17=self._compiler();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["compiler"]=1;
//>>excludeEnd("ctx");
wrapper=$recv($17)._eval_($recv(self._compiler())._compile_forClass_(wrapperTemplate,self._base()));
$18=$recv(wrapper)._fn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fn"]=1;
//>>excludeEnd("ctx");
$19=$recv(self["@method"])._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=4;
//>>excludeEnd("ctx");
$recv($18)._basicAt_put_("selector",$19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=1;
//>>excludeEnd("ctx");
$20=$recv(wrapper)._fn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fn"]=2;
//>>excludeEnd("ctx");
$recv($20)._basicAt_put_("original",self["@method"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=2;
//>>excludeEnd("ctx");
$21=$recv(wrapper)._fn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fn"]=3;
//>>excludeEnd("ctx");
$recv($21)._basicAt_put_("compiledSource",$recv($recv(self["@method"])._fn())._compiledSource());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:put:"]=3;
//>>excludeEnd("ctx");
$recv(wrapper)._basicAt_put_("args",$recv(self["@method"])._arguments());
$recv(wrapper)._selector_($recv(self["@method"])._selector());
$recv(wrapper)._source_($recv(self["@method"])._source());
$22=wrapper;
return $22;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapper",{wrapper:wrapper,wrapperTemplate:wrapperTemplate,methodSignature:methodSignature},$globals.InliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapper\x0a\x09| wrapper wrapperTemplate methodSignature |\x0a\x09methodSignature := ''.\x0a\x09(method selector tokenize: ':') allButLast with: method arguments do: [ :sel :arg | methodSignature := methodSignature, sel, ': ', arg, ' ' ].\x0a\x09methodSignature = '' ifTrue: [ methodSignature := method selector ].\x0a\x09wrapperTemplate := (self class >> #wrapperTemplate) source.\x0a\x09wrapperTemplate := wrapperTemplate replace: 'wrapperTemplate' with: methodSignature.\x0a\x09wrapperTemplate := wrapperTemplate replace: 'SELECTOR' with: '#', method selector.\x0a\x09wrapperTemplate := wrapperTemplate replace: 'ARGUMENTS' with: '{ ', (method arguments join: '. '), ' }'.\x0a\x09wrapper := self compiler eval: (self compiler compile: wrapperTemplate forClass: self base).\x0a\x09wrapper fn basicAt: #selector put: method selector.\x0a\x09wrapper fn basicAt: #original put: method.\x0a\x09wrapper fn basicAt: #compiledSource put: method fn compiledSource.\x0a\x09wrapper basicAt: #args put: method arguments.\x0a\x09wrapper selector: method selector.\x0a\x09wrapper source: method source.\x0a\x09^ wrapper",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:", "allButLast", "tokenize:", "selector", "arguments", ",", "ifTrue:", "=", "source", ">>", "class", "replace:with:", "join:", "eval:", "compiler", "compile:forClass:", "base", "basicAt:put:", "fn", "compiledSource", "selector:", "source:"]
}),
$globals.InliningStrategy);


$globals.InliningStrategy.klass.iVarNames = ['instance'];
$core.addMethod(
$core.method({
selector: "on:",
protocol: 'singleton',
fn: function (aCompiledMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@instance"]).__eq(nil);
if($core.assert($1)){
self["@instance"]=self._new();
self["@instance"];
};
$recv(self["@instance"])._method_(aCompiledMethod);
$2=self["@instance"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCompiledMethod:aCompiledMethod},$globals.InliningStrategy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "on: aCompiledMethod\x0a\x09instance = nil\x0a\x09\x09ifTrue: [ instance := self new ].\x0a\x09instance method: aCompiledMethod.\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "new", "method:"]
}),
$globals.InliningStrategy.klass);


$core.addClass('ClassWideInliningStrategy', $globals.InliningStrategy, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "compositionChangeForObject:",
protocol: 'layer composition',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(anObject)._markLayersDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compositionChangeForObject:",{anObject:anObject},$globals.ClassWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "compositionChangeForObject: anObject\x0a\x09anObject markLayersDirty.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["markLayersDirty"]
}),
$globals.ClassWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "globalLayerCompositionChanged",
protocol: 'layer composition',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._base())._incrementLayerCompositionVersion();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalLayerCompositionChanged",{},$globals.ClassWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerCompositionChanged\x0a\x09self base incrementLayerCompositionVersion.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["incrementLayerCompositionVersion", "base"]
}),
$globals.ClassWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "installInlinedWithLayers:",
protocol: 'inlining',
fn: function (activeLayers){
var self=this;
var inlined;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $8,$7,$6,$5,$10,$9,$4,$3,$2,$1,$13,$12,$11,$14;
$8=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$6="[LOG] installing inlined method class ".__comma($7);
$5=$recv($6).__comma(" selector ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$10=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" activeLayers: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv(activeLayers)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
$13=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__gt_gt(self._selector());
$11=$recv($12)._methodCache();
inlined=$recv($11)._at_(activeLayers);
$14=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=2;
//>>excludeEnd("ctx");
$recv($14)._fn_(inlined);
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(self._method(),self._base(),self._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installInlinedWithLayers:",{activeLayers:activeLayers,inlined:inlined},$globals.ClassWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["activeLayers"],
source: "installInlinedWithLayers: activeLayers\x0a\x09| inlined |\x0a\x09Transcript show: '[LOG] installing inlined method class ', self base asString, ' selector ', self method selector, ' activeLayers: ', activeLayers asString, String lf.\x0a\x09inlined := (self base >> self selector) methodCache at: activeLayers.\x0a\x09\x22inlined := ASTProceedInliner new\x0a\x09\x09selector: self selector;\x0a\x09\x09base: self base;\x0a\x09\x09activeLayers: activeLayers;\x0a\x09\x09inlinedCompiledMethod.\x22\x0a\x09self method fn: inlined.\x0a\x09ClassBuilder new installMethod: self method forClass: self base protocol: self protocol.",
referencedClasses: ["Transcript", "String", "ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "asString", "base", "selector", "method", "lf", "at:", "methodCache", ">>", "fn:", "installMethod:forClass:protocol:", "new", "protocol"]
}),
$globals.ClassWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "updateMethodAST:",
protocol: 'inlining',
fn: function (activeLayers){
var self=this;
var source;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$7,$6,$8,$9,$10;
$1=$recv(self._class()).__gt_gt("updateMethodTemplate");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
source=$recv($1)._source();
$2=source;
$4=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$3="#".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
source=$recv($2)._replace_with_("SELECTOR",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
$5=source;
$7="'".__comma($recv(activeLayers)._asCompositionSignature());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
source=$recv($5)._replace_with_("ACTIVELAYERS",$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=2;
//>>excludeEnd("ctx");
$8=source;
$9=$recv("{ ".__comma($recv($recv($recv(self._base()).__gt_gt(self._selector()))._arguments())._join_(". "))).__comma(" }");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
source=$recv($8)._replace_with_("ARGUMENTS",$9);
$10=$recv($Smalltalk())._parse_(source);
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodAST:",{activeLayers:activeLayers,source:source},$globals.ClassWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["activeLayers"],
source: "updateMethodAST: activeLayers\x0a\x09| source |\x0a\x09source := (self class >> #updateMethodTemplate) source.\x0a\x09source := source replace: 'SELECTOR' with: '#', self selector.\x0a\x09source := source replace: 'ACTIVELAYERS' with: '''', activeLayers asCompositionSignature, ''''.\x0a\x09source := source replace: 'ARGUMENTS' with: '{ ', ((self base >> self selector) arguments join: '. '), ' }'.\x0a\x09^ Smalltalk parse: source",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["source", ">>", "class", "replace:with:", ",", "selector", "asCompositionSignature", "join:", "arguments", "base", "parse:"]
}),
$globals.ClassWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "updateMethodTemplate",
protocol: 'inlining',
fn: function (){
var self=this;
function $ACTIVELAYERS(){return $globals.ACTIVELAYERS||(typeof ACTIVELAYERS=="undefined"?nil:ACTIVELAYERS)}
function $SELECTOR(){return $globals.SELECTOR||(typeof SELECTOR=="undefined"?nil:SELECTOR)}
function $ARGUMENTS(){return $globals.ARGUMENTS||(typeof ARGUMENTS=="undefined"?nil:ARGUMENTS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._compositionSignature()).__eq($ACTIVELAYERS());
if(!$core.assert($1)){
$recv($recv($recv(self._class()).__gt_gt($SELECTOR()))._inliningStrategy())._installInlinedWithLayers_(self._activeLayers());
$2=self._perform_withArguments_($SELECTOR(),$ARGUMENTS());
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodTemplate",{},$globals.ClassWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMethodTemplate\x0a\x09(self compositionSignature = ACTIVELAYERS) ifFalse: [ \x0a\x09\x09(self class >> SELECTOR) inliningStrategy installInlinedWithLayers: self activeLayers.\x0a\x09\x09^ self perform: SELECTOR withArguments: ARGUMENTS ]",
referencedClasses: ["ACTIVELAYERS", "SELECTOR", "ARGUMENTS"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "compositionSignature", "installInlinedWithLayers:", "inliningStrategy", ">>", "class", "activeLayers", "perform:withArguments:"]
}),
$globals.ClassWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "wrapperTemplate",
protocol: 'wrapper',
fn: function (){
var self=this;
function $SELECTOR(){return $globals.SELECTOR||(typeof SELECTOR=="undefined"?nil:SELECTOR)}
function $ARGUMENTS(){return $globals.ARGUMENTS||(typeof ARGUMENTS=="undefined"?nil:ARGUMENTS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv($recv($recv(self._class()).__gt_gt($SELECTOR()))._inliningStrategy())._installInlinedWithLayers_(self._activeLayers());
$1=self._perform_withArguments_($SELECTOR(),$ARGUMENTS());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapperTemplate",{},$globals.ClassWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapperTemplate\x0a\x09(self class >> SELECTOR) inliningStrategy installInlinedWithLayers: self activeLayers.\x0a\x09^ self perform: SELECTOR withArguments: ARGUMENTS",
referencedClasses: ["SELECTOR", "ARGUMENTS"],
//>>excludeEnd("ide");
messageSends: ["installInlinedWithLayers:", "inliningStrategy", ">>", "class", "activeLayers", "perform:withArguments:"]
}),
$globals.ClassWideInliningStrategy);



$core.addClass('ObjectWideInliningStrategy', $globals.InliningStrategy, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "compositionChangeForObject:",
protocol: 'layer composition',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(anObject)._basicDelete_($recv(self._selector())._asJavaScriptMethodName());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compositionChangeForObject:",{anObject:anObject},$globals.ObjectWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "compositionChangeForObject: anObject\x0a\x09anObject basicDelete: self selector asJavaScriptMethodName.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicDelete:", "asJavaScriptMethodName", "selector"]
}),
$globals.ObjectWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "globalLayerCompositionChanged",
protocol: 'layer composition',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._base()).__gt_gt(self._selector()))._globalLayerCompositionChanged();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalLayerCompositionChanged",{},$globals.ObjectWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerCompositionChanged\x0a\x09(self base >> self selector) globalLayerCompositionChanged.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["globalLayerCompositionChanged", ">>", "base", "selector"]
}),
$globals.ObjectWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "installInlinedWithLayers:on:",
protocol: 'inlining',
fn: function (layerComposition,object){
var self=this;
var inlined;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $8,$7,$6,$5,$9,$4,$3,$2,$1,$12,$13,$11,$10;
$8=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$6="[LOG] installing object-wide inlined method class ".__comma($7);
$5=$recv($6).__comma(" selector ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$9=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" activeLayers: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv(layerComposition)._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
$12=self._base();
$13=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__gt_gt($13);
$10=$recv($11)._methodCache();
inlined=$recv($10)._at_(layerComposition);
$recv(object)._basicAt_put_($recv(self._selector())._asJavaScriptMethodName(),inlined);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installInlinedWithLayers:on:",{layerComposition:layerComposition,object:object,inlined:inlined},$globals.ObjectWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["layerComposition", "object"],
source: "installInlinedWithLayers: layerComposition on: object\x0a\x09| inlined |\x0a\x09Transcript show: '[LOG] installing object-wide inlined method class ', self base asString, ' selector ', self selector, ' activeLayers: ', layerComposition asString, String lf.\x0a\x09inlined := (self base >> self selector) methodCache at: layerComposition.\x0a\x09object basicAt: self selector asJavaScriptMethodName put: inlined.",
referencedClasses: ["Transcript", "String"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "asString", "base", "selector", "lf", "at:", "methodCache", ">>", "basicAt:put:", "asJavaScriptMethodName"]
}),
$globals.ObjectWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "updateMethodAST:",
protocol: 'inlining',
fn: function (activeLayers){
var self=this;
var source;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$8,$7,$6,$9,$15,$16,$14,$13,$12,$11,$10,$17,$18,$19;
$1=$recv(self._class()).__gt_gt("updateMethodTemplate");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
source=$recv($1)._source();
$2=source;
$4=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$3="#".__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
source=$recv($2)._replace_with_("SELECTOR",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
$5=source;
$8=$recv($recv(activeLayers)._collect_((function(layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(layer)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
})))._join_(". ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["join:"]=1;
//>>excludeEnd("ctx");
$7="{ ".__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(" }");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
source=$recv($5)._replace_with_("ACTIVELAYERS",$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=2;
//>>excludeEnd("ctx");
$9=source;
$15=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$16=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__gt_gt($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">>"]=2;
//>>excludeEnd("ctx");
$13=$recv($14)._arguments();
$12=$recv($13)._join_(". ");
$11="{ ".__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$10=$recv($11).__comma(" }");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
source=$recv($9)._replace_with_("ARGUMENTS",$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=3;
//>>excludeEnd("ctx");
$17=source;
$18=$recv("'".__comma($recv($recv(self._base()).__gt_gt(self._selector()))._globalCompositionSignature())).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
source=$recv($17)._replace_with_("GLOBALSIGNATURE",$18);
$19=$recv($Smalltalk())._parse_(source);
return $19;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodAST:",{activeLayers:activeLayers,source:source},$globals.ObjectWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["activeLayers"],
source: "updateMethodAST: activeLayers\x0a\x09| source |\x0a\x09source := (self class >> #updateMethodTemplate) source.\x0a\x09source := source replace: 'SELECTOR' with: '#', self selector.\x0a\x09source := source replace: 'ACTIVELAYERS' with: '{ ', ((activeLayers collect: [ :layer | layer id ]) join: '. '), ' }'.\x0a\x09source := source replace: 'ARGUMENTS' with: '{ ', ((self base >> self selector) arguments join: '. '), ' }'.\x0a\x09source := source replace: 'GLOBALSIGNATURE' with: '''', (self base >> self selector) globalCompositionSignature, ''''.\x0a\x09^ Smalltalk parse: source",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["source", ">>", "class", "replace:with:", ",", "selector", "join:", "collect:", "id", "arguments", "base", "globalCompositionSignature", "parse:"]
}),
$globals.ObjectWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "updateMethodTemplate",
protocol: 'inlining',
fn: function (){
var self=this;
function $GLOBALSIGNATURE(){return $globals.GLOBALSIGNATURE||(typeof GLOBALSIGNATURE=="undefined"?nil:GLOBALSIGNATURE)}
function $SELECTOR(){return $globals.SELECTOR||(typeof SELECTOR=="undefined"?nil:SELECTOR)}
function $ARGUMENTS(){return $globals.ARGUMENTS||(typeof ARGUMENTS=="undefined"?nil:ARGUMENTS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($GLOBALSIGNATURE()).__tild_eq(self._globalCompositionSignatureFor_($SELECTOR()));
if($core.assert($1)){
$recv($recv($recv(self._class()).__gt_gt($SELECTOR()))._inliningStrategy())._installInlinedWithLayers_on_(self._activeLayers(),self);
$2=self._perform_withArguments_($SELECTOR(),$ARGUMENTS());
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodTemplate",{},$globals.ObjectWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMethodTemplate\x0a\x09GLOBALSIGNATURE ~= (self globalCompositionSignatureFor: SELECTOR) ifTrue: [\x0a\x09\x09(self class >> SELECTOR) inliningStrategy installInlinedWithLayers: self activeLayers on: self.\x0a\x09\x09^ self perform: SELECTOR withArguments: ARGUMENTS ].",
referencedClasses: ["GLOBALSIGNATURE", "SELECTOR", "ARGUMENTS"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "globalCompositionSignatureFor:", "installInlinedWithLayers:on:", "inliningStrategy", ">>", "class", "activeLayers", "perform:withArguments:"]
}),
$globals.ObjectWideInliningStrategy);

$core.addMethod(
$core.method({
selector: "wrapperTemplate",
protocol: 'wrapper',
fn: function (){
var self=this;
var inlined;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $SELECTOR(){return $globals.SELECTOR||(typeof SELECTOR=="undefined"?nil:SELECTOR)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $ARGUMENTS(){return $globals.ARGUMENTS||(typeof ARGUMENTS=="undefined"?nil:ARGUMENTS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $8,$7,$6,$5,$4,$3,$10,$9,$2,$1,$11;
$8=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$6="[LOG] installing object-wide inlined method class ".__comma($7);
$5=$recv($6).__comma(" selector ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($SELECTOR());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" activeLayers: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$10=self._activeLayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeLayers"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._asString();
$2=$recv($3).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($String())._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
inlined=$recv($recv($recv(self._class()).__gt_gt($SELECTOR()))._methodCache())._at_(self._activeLayers());
self._basicAt_put_($recv($SELECTOR())._asJavaScriptMethodName(),inlined);
$11=self._perform_withArguments_($SELECTOR(),$ARGUMENTS());
return $11;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrapperTemplate",{inlined:inlined},$globals.ObjectWideInliningStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapperTemplate\x0a\x09| inlined |\x0a\x09Transcript show: '[LOG] installing object-wide inlined method class ', self class asString, ' selector ', SELECTOR, ' activeLayers: ', self activeLayers asString, String lf.\x0a\x09inlined := (self class >> SELECTOR) methodCache at: self activeLayers.\x0a\x09self basicAt: SELECTOR asJavaScriptMethodName put: inlined.\x0a\x09^ self perform: SELECTOR withArguments: ARGUMENTS",
referencedClasses: ["Transcript", "SELECTOR", "String", "ARGUMENTS"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "asString", "class", "activeLayers", "lf", "at:", "methodCache", ">>", "basicAt:put:", "asJavaScriptMethodName", "perform:withArguments:"]
}),
$globals.ObjectWideInliningStrategy);



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
$recv($recv($ContextAmber())._defaultActive())._add_(self);
return $recv(self._class())._globalLayerCompositionChanged();
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
source: "activate\x0a\x09ContextAmber defaultActive indexOf: self ifAbsent: [ \x0a\x09\x09ContextAmber defaultActive add: self.\x0a\x09\x09self class globalLayerCompositionChanged ].",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "defaultActive", "add:", "globalLayerCompositionChanged", "class"]
}),
$globals.Layer);

$core.addMethod(
$core.method({
selector: "asString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._id())._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{},$globals.Layer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self id asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString", "id"]
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
var $early={};
try {
$recv($recv($ContextAmber())._defaultActive())._remove_ifAbsent_(self,(function(){
throw $early=[self];

}));
$recv(self._class())._globalLayerCompositionChanged();
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deactivate",{},$globals.Layer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deactivate\x0a\x09ContextAmber defaultActive remove: self ifAbsent: [ ^ self ].\x0a\x09self class globalLayerCompositionChanged.",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "defaultActive", "globalLayerCompositionChanged", "class"]
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
selector: "affectsClass:",
protocol: 'testing',
fn: function (base){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._partialClasses())._anySatisfy_((function(partial){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(partial)._base()).__eq(base);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({partial:partial},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"affectsClass:",{base:base},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["base"],
source: "affectsClass: base\x0a\x09^ self partialClasses anySatisfy: [ :partial | partial base = base ] ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["anySatisfy:", "partialClasses", "=", "base"]
}),
$globals.Layer.klass);

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
selector: "compositionChangeForObject:",
protocol: 'layer composition',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._partialClasses())._do_((function(partial){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(partial)._compositionChangeForObject_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({partial:partial},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compositionChangeForObject:",{anObject:anObject},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "compositionChangeForObject: anObject\x0a\x09self partialClasses do: [ :partial |\x0a\x09\x09partial compositionChangeForObject: anObject ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "partialClasses", "compositionChangeForObject:"]
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
selector: "globalLayerCompositionChanged",
protocol: 'layer composition',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._partialClasses())._do_((function(partial){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(partial)._globalLayerCompositionChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({partial:partial},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalLayerCompositionChanged",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerCompositionChanged\x0a\x09\x22TODO: get list of partial selectors here, so that we do not increment a version number more than once\x22\x0a\x09self partialClasses do: [ :partial |\x0a\x09\x09partial globalLayerCompositionChanged ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "partialClasses", "globalLayerCompositionChanged"]
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
self["@nextId"]=$recv(self["@nextId"]).__plus((1));
$1=self["@nextId"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextId",{},$globals.Layer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09nextId := nextId + 1.\x0a\x09^ nextId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
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



$core.addClass('MethodCache', $globals.Object, ['keys', 'values', 'proceedInliner'], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (layerComposition){
var self=this;
var inlinedMethod,compositionKey;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
compositionKey=$recv(layerComposition)._asCompositionSignature();
$recv(self["@keys"])._withIndexDo_((function(key,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(key).__eq(compositionKey);
if($core.assert($1)){
$2=$recv(self["@values"])._at_(index);
throw $early=[$2];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@proceedInliner"])._reset();
$3=self["@proceedInliner"];
$recv($3)._activeLayers_(layerComposition);
$4=$recv($3)._inlinedCompiledMethod();
inlinedMethod=$recv($4)._fn();
$recv(self["@keys"])._addFirst_(compositionKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFirst:"]=1;
//>>excludeEnd("ctx");
$recv(self["@values"])._addFirst_(inlinedMethod);
$5=$recv($recv(self["@keys"])._size()).__gt(self._maxSize());
if($core.assert($5)){
$recv(self["@keys"])._removeLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeLast"]=1;
//>>excludeEnd("ctx");
$recv(self["@values"])._removeLast();
};
$6=inlinedMethod;
return $6;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{layerComposition:layerComposition,inlinedMethod:inlinedMethod,compositionKey:compositionKey},$globals.MethodCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["layerComposition"],
source: "at: layerComposition\x0a\x09| inlinedMethod compositionKey |\x0a\x09compositionKey := layerComposition asCompositionSignature.\x0a\x09\x0a\x09keys withIndexDo: [ :key :index |\x0a\x09\x09(key = compositionKey) ifTrue: [ ^ values at: index ] ].\x0a\x09\x0a\x09proceedInliner reset.\x0a\x09inlinedMethod := (proceedInliner\x0a\x09\x09activeLayers: layerComposition;\x0a\x09\x09inlinedCompiledMethod) fn.\x0a\x09\x09\x0a\x09keys addFirst: compositionKey.\x0a\x09values addFirst: inlinedMethod.\x0a\x09\x0a\x09keys size > self maxSize ifTrue: [\x0a\x09\x09keys removeLast.\x0a\x09\x09values removeLast ].\x0a\x09\x0a\x09^ inlinedMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asCompositionSignature", "withIndexDo:", "ifTrue:", "=", "at:", "reset", "fn", "activeLayers:", "inlinedCompiledMethod", "addFirst:", ">", "size", "maxSize", "removeLast"]
}),
$globals.MethodCache);

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
self["@keys"]=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@values"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MethodCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09keys := OrderedCollection new.\x0a\x09values := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.MethodCache);

$core.addMethod(
$core.method({
selector: "maxSize",
protocol: 'accessing',
fn: function (){
var self=this;
return (3);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxSize\x0a\x09^ 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodCache);

$core.addMethod(
$core.method({
selector: "proceedInliner",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@proceedInliner"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceedInliner\x0a\x09^ proceedInliner",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodCache);

$core.addMethod(
$core.method({
selector: "proceedInliner:",
protocol: 'accessing',
fn: function (anInliner){
var self=this;
self["@proceedInliner"]=anInliner;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInliner"],
source: "proceedInliner: anInliner\x0a\x09proceedInliner := anInliner.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodCache);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aCompiledMethod){
var self=this;
var inliner;
function $ASTProceedInliner(){return $globals.ASTProceedInliner||(typeof ASTProceedInliner=="undefined"?nil:ASTProceedInliner)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3;
$1=$recv($ASTProceedInliner())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._selector_($recv(aCompiledMethod)._selector());
$recv($1)._base_($recv(aCompiledMethod)._methodClass());
$2=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
inliner=$2;
$4=self._new();
$recv($4)._proceedInliner_(inliner);
$5=$recv($4)._yourself();
$3=$5;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCompiledMethod:aCompiledMethod,inliner:inliner},$globals.MethodCache.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "on: aCompiledMethod\x0a\x09| inliner |\x0a\x09inliner := ASTProceedInliner new\x0a\x09\x09selector: aCompiledMethod selector;\x0a\x09\x09base: aCompiledMethod methodClass;\x0a\x09\x09yourself.\x0a\x09^ self new\x0a\x09\x09proceedInliner: inliner;\x0a\x09\x09yourself",
referencedClasses: ["ASTProceedInliner"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "selector", "base:", "methodClass", "yourself", "proceedInliner:"]
}),
$globals.MethodCache.klass);


$core.addClass('PartialBlockNode', $globals.BlockNode, [], 'ContextAmber');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitPartialBlockNode_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.PartialBlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitPartialBlockNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitPartialBlockNode:"]
}),
$globals.PartialBlockNode);

$core.addMethod(
$core.method({
selector: "isPartialBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartialBlockNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PartialBlockNode);



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
selector: "compositionChangeForObject:",
protocol: 'layer composition',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._methods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self._base()).__gt_gt($recv(method)._selector()))._inliningStrategy())._compositionChangeForObject_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compositionChangeForObject:",{anObject:anObject},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "compositionChangeForObject: anObject\x0a\x09self methods do: [ :method | (self base >> method selector) inliningStrategy compositionChangeForObject: anObject ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "methods", "compositionChangeForObject:", "inliningStrategy", ">>", "base", "selector"]
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
selector: "globalLayerCompositionChanged",
protocol: 'layer composition',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._methods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self._base()).__gt_gt($recv(method)._selector()))._inliningStrategy())._globalLayerCompositionChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalLayerCompositionChanged",{},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerCompositionChanged\x0a\x09self methods do: [ :method | (self base >> method selector) inliningStrategy globalLayerCompositionChanged ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "methods", "globalLayerCompositionChanged", "inliningStrategy", ">>", "base", "selector"]
}),
$globals.PartialClass.klass);

$core.addMethod(
$core.method({
selector: "handleMethodAdded:",
protocol: 'partial methods',
fn: function (method){
var self=this;
var isPartialMethod;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$6,$7,$5,$4,$8,$11,$10,$9;
$2=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=1;
//>>excludeEnd("ctx");
$3=$recv(method)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._canUnderstand_($3);
isPartialMethod=$recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["base"]=2;
//>>excludeEnd("ctx");
$7=$recv(method)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__gt_gt($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[">>"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
return $recv($4).__tild_eq("*Context-Hidden");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$8=isPartialMethod;
if($core.assert($8)){
$11=self._base();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["base"]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__gt_gt($recv(method)._selector());
$9=$recv($10)._inliningStrategy();
$recv($9)._installWrapper();
} else {
var protocol;
protocol=$recv(method)._protocol();
protocol;
$recv($recv($ClassBuilder())._new())._installMethod_forClass_protocol_(method,self._base(),"*Context-Hidden");
$recv(method)._protocol_(protocol);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleMethodAdded:",{method:method,isPartialMethod:isPartialMethod},$globals.PartialClass.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["method"],
source: "handleMethodAdded: method\x0a\x09| isPartialMethod |\x0a\x09isPartialMethod := (self base canUnderstand: method selector) and: [ (self base >> method selector) protocol ~= '*Context-Hidden' ].\x0a\x09isPartialMethod\x0a\x09\x09\x09ifTrue: [ (self base >> method selector) inliningStrategy installWrapper ]\x0a\x09\x09\x09ifFalse: [ | protocol | \x22TODO: handle like partial method\x22\x0a\x09\x09\x09\x09protocol := method protocol.\x0a\x09\x09\x09\x09ClassBuilder new installMethod: method forClass: self base protocol: '*Context-Hidden'.\x0a\x09\x09\x09\x09method protocol: protocol ].",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["and:", "canUnderstand:", "base", "selector", "~=", "protocol", ">>", "ifTrue:ifFalse:", "installWrapper", "inliningStrategy", "installMethod:forClass:protocol:", "new", "protocol:"]
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
var $1,$3,$2;
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
$recv(self._base())._addPartial_(self);
$recv(self._methods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleMethodAdded_(method);
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
source: "initialize\x0a\x09self ~= PartialClass ifTrue: [\x0a\x09\x09self base isClass ifFalse: [ self error: 'object is not a class' ].\x0a\x09\x09self base addPartial: self.\x0a\x09\x09self methods do: [ :method | self handleMethodAdded: method ] ].",
referencedClasses: ["PartialClass"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "ifFalse:", "isClass", "base", "error:", "addPartial:", "do:", "methods", "handleMethodAdded:"]
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
selector: "replace:with:",
protocol: '*ContextAmber',
fn: function (aNode,anotherNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AssignmentNode.superclass.fn.prototype._replace_with_.apply($recv(self), [aNode,anotherNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(self["@left"]).__eq(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._left_(anotherNode);
};
$2=$recv(self["@right"]).__eq(aNode);
if($core.assert($2)){
self._right_(anotherNode);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aNode:aNode,anotherNode:anotherNode},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anotherNode"],
source: "replace: aNode with: anotherNode\x0a\x09super replace: aNode with: anotherNode.\x0a\x09left = aNode ifTrue: [ self left: anotherNode ].\x0a\x09right = aNode ifTrue: [ self right: anotherNode ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "ifTrue:", "=", "left:", "right:"]
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "\x5c>",
protocol: '*ContextAmber',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return self['methods'][aString]; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"\x5c>",{aString:aString},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "\x5c> aString\x0a\x09< return self['methods'][aString]; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

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
selector: "globalLayerComposition",
protocol: '*ContextAmber',
fn: function (){
var self=this;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($ContextAmber())._globalLayerComposition())._select_((function(layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(layer)._class())._affectsClass_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalLayerComposition",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerComposition\x0a\x09^ ContextAmber globalLayerComposition select: [ :layer | layer class affectsClass: self ]",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["select:", "globalLayerComposition", "affectsClass:", "class"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "incrementLayerCompositionVersion",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (typeof(self['layerCompositionVersion']) === 'undefined') {
		self['layerCompositionVersion'] = 2;
	} else {
		self['layerCompositionVersion'] = self['layerCompositionVersion'] + 1;
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"incrementLayerCompositionVersion",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "incrementLayerCompositionVersion\x0a\x09< if (typeof(self['layerCompositionVersion']) === 'undefined') {\x0a\x09\x09self['layerCompositionVersion'] = 2;\x0a\x09} else {\x0a\x09\x09self['layerCompositionVersion'] = self['layerCompositionVersion'] + 1;\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "layerCompositionVersion",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (typeof(self['layerCompositionVersion']) === 'undefined') {
		return 1;
	} else {
		return self['layerCompositionVersion'];
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"layerCompositionVersion",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "layerCompositionVersion\x0a\x09< if (typeof(self['layerCompositionVersion']) === 'undefined') {\x0a\x09\x09return 1;\x0a\x09} else {\x0a\x09\x09return self['layerCompositionVersion'];\x0a\x09} >",
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
selector: "sourceString",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return self.toString() ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sourceString",{},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sourceString\x0a\x09< return self.toString() >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:value:",
protocol: '*ContextAmber',
fn: function (firstArg,secondArg,thirdArg,forthArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self(firstArg, secondArg, thirdArg, forthArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg,forthArg:forthArg},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg", "thirdArg", "forthArg"],
source: "value: firstArg value: secondArg value: thirdArg value: forthArg\x0a\x09<return self(firstArg, secondArg, thirdArg, forthArg);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:value:value:",
protocol: '*ContextAmber',
fn: function (firstArg,secondArg,thirdArg,forthArg,fifthArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self(firstArg, secondArg, thirdArg, forthArg, fifthArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg,forthArg:forthArg,fifthArg:fifthArg},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg", "thirdArg", "forthArg", "fifthArg"],
source: "value: firstArg value: secondArg value: thirdArg value: forthArg value: fifthArg\x0a\x09<return self(firstArg, secondArg, thirdArg, forthArg, fifthArg);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:value:value:value:",
protocol: '*ContextAmber',
fn: function (firstArg,secondArg,thirdArg,forthArg,fifthArg,sixthArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self(firstArg, secondArg, thirdArg, forthArg, fifthArg, sixthArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg,forthArg:forthArg,fifthArg:fifthArg,sixthArg:sixthArg},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg", "thirdArg", "forthArg", "fifthArg", "sixthArg"],
source: "value: firstArg value: secondArg value: thirdArg value: forthArg value: fifthArg value: sixthArg\x0a\x09<return self(firstArg, secondArg, thirdArg, forthArg, fifthArg, sixthArg);>",
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
var $1,$2,$3;
$1=$recv($ContextAmber())._scopedStack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopedStack"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_(layer);
$2=$recv(layer)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($2)._globalLayerCompositionChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globalLayerCompositionChanged"]=1;
//>>excludeEnd("ctx");
result=self._value();
$recv($recv($ContextAmber())._scopedStack())._pop();
$recv($recv(layer)._class())._globalLayerCompositionChanged();
$3=result;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withLayer:",{layer:layer,result:result},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["layer"],
source: "withLayer: layer\x0a\x09| result |\x0a\x09ContextAmber scopedStack add: layer.\x0a\x09layer class globalLayerCompositionChanged.\x0a\x09result := self value.\x0a\x09ContextAmber scopedStack pop.\x0a\x09layer class globalLayerCompositionChanged.\x0a\x09^ result",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["add:", "scopedStack", "globalLayerCompositionChanged", "class", "value", "pop"]
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
var $1,$2,$3;
$1=$recv($ContextAmber())._scopedStack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopedStack"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove_(layer);
$2=$recv(layer)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($2)._globalLayerCompositionChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globalLayerCompositionChanged"]=1;
//>>excludeEnd("ctx");
result=self._value();
$recv($recv($ContextAmber())._scopedStack())._pop();
$recv($recv(layer)._class())._globalLayerCompositionChanged();
$3=result;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withoutLayer:",{layer:layer,result:result},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["layer"],
source: "withoutLayer: layer\x0a\x09| result |\x0a\x09ContextAmber scopedStack remove: layer.\x0a\x09layer class globalLayerCompositionChanged.\x0a\x09result := self value.\x0a\x09ContextAmber scopedStack pop.\x0a\x09layer class globalLayerCompositionChanged.\x0a\x09^ result",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["remove:", "scopedStack", "globalLayerCompositionChanged", "class", "value", "pop"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "isPartialBlockNode",
protocol: '*ContextAmber',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartialBlockNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: '*ContextAmber',
fn: function (aNode,anotherNode){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BlockNode.superclass.fn.prototype._replace_with_.apply($recv(self), [aNode,anotherNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(anotherNode)._parent_(self);
$1=self._parameters();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parameters"]=1;
//>>excludeEnd("ctx");
index=$recv($1)._indexOf_ifAbsent_(aNode,(function(){
throw $early=[self];

}));
$recv(self._parameters())._at_put_(index,anotherNode);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aNode:aNode,anotherNode:anotherNode,index:index},$globals.BlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anotherNode"],
source: "replace: aNode with: anotherNode\x0a\x09| index |\x0a\x09super replace: aNode with: anotherNode.\x0a\x09anotherNode parent: self.\x0a\x09index := self parameters indexOf: aNode ifAbsent: [ ^ self ].\x0a\x09self parameters at: index put: anotherNode.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "parent:", "indexOf:ifAbsent:", "parameters", "at:put:"]
}),
$globals.BlockNode);

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
selector: "replace:with:",
protocol: '*ContextAmber',
fn: function (aNode,anotherNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CascadeNode.superclass.fn.prototype._replace_with_.apply($recv(self), [aNode,anotherNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(self["@receiver"]).__eq(aNode);
if($core.assert($1)){
$recv(anotherNode)._parent_(self);
self._receiver_(anotherNode);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aNode:aNode,anotherNode:anotherNode},$globals.CascadeNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anotherNode"],
source: "replace: aNode with: anotherNode\x0a\x09super replace: aNode with: anotherNode.\x0a\x09receiver = aNode ifTrue: [\x0a\x09\x09anotherNode parent: self.\x0a\x09\x09self receiver: anotherNode ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "ifTrue:", "=", "parent:", "receiver:"]
}),
$globals.CascadeNode);

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
selector: "globalCompositionSignature",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var signature;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
signature=self._basicAt_("globalSignature");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$1=signature;
if(($receiver = $1) == null || $receiver.isNil){
self._globalLayerCompositionChanged();
} else {
$1;
};
$2=self._basicAt_("globalSignature");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalCompositionSignature",{signature:signature},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalCompositionSignature\x0a\x09| signature |\x0a\x09signature := self basicAt: 'globalSignature'.\x0a\x09signature ifNil: [ self globalLayerCompositionChanged ].\x0a\x09^ self basicAt: 'globalSignature'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:", "ifNil:", "globalLayerCompositionChanged"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "globalLayerCompositionChanged",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var composition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._globalLayerComposition();
composition=$recv($1)._select_((function(layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(layer)._class())._hasPartial_for_(self._selector(),self._methodClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._basicAt_put_("globalSignature",$recv(composition)._asCompositionSignature());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalLayerCompositionChanged",{composition:composition},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalLayerCompositionChanged\x0a\x09| composition |\x0a\x09composition := self methodClass globalLayerComposition select: [ :layer | layer class hasPartial: self selector for: self methodClass ].\x0a\x09self basicAt: 'globalSignature' put: composition asCompositionSignature.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "globalLayerComposition", "methodClass", "hasPartial:for:", "class", "selector", "basicAt:put:", "asCompositionSignature"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "hasPartial",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._methodClass())._partials())._anySatisfy_((function(partial){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(partial)._hasPartial_(self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({partial:partial},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasPartial",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasPartial\x0a\x09^ self methodClass partials anySatisfy: [ :partial | partial hasPartial: self selector ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["anySatisfy:", "partials", "methodClass", "hasPartial:", "selector"]
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "inliningStrategy",
protocol: '*ContextAmber',
fn: function (){
var self=this;
function $ObjectWideInliningStrategy(){return $globals.ObjectWideInliningStrategy||(typeof ObjectWideInliningStrategy=="undefined"?nil:ObjectWideInliningStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($ObjectWideInliningStrategy())._on_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliningStrategy",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inliningStrategy\x0a\x09^ ObjectWideInliningStrategy on: self\x0a\x09\x22^ ClassWideInliningStrategy on: self\x22",
referencedClasses: ["ObjectWideInliningStrategy"],
//>>excludeEnd("ide");
messageSends: ["on:"]
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
selector: "methodCache",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (typeof(self['methodCache']) === 'undefined') {
		self['methodCache'] = smalltalk.MethodCache._on_(self);
	} 
	return self['methodCache'];
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodCache",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodCache\x0a\x09< if (typeof(self['methodCache']) === 'undefined') {\x0a\x09\x09self['methodCache'] = smalltalk.MethodCache._on_(self);\x0a\x09} \x0a\x09return self['methodCache'];\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "inlineLayers:",
protocol: '*ContextAmber',
fn: function (activeLayers){
var self=this;
var method;
function $ContextInliningCodeGenerator(){return $globals.ContextInliningCodeGenerator||(typeof ContextInliningCodeGenerator=="undefined"?nil:ContextInliningCodeGenerator)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv($ContextInliningCodeGenerator())._new();
$recv($1)._activeLayers_(activeLayers);
$2=$1;
$3=self._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
$recv($2)._source_($3);
$recv($1)._currentClass_(self._currentClass());
$4=$recv($1)._compileNode_($recv($Smalltalk())._parse_(self._source()));
method=$4;
$5=self._eval_(method);
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineLayers:",{activeLayers:activeLayers,method:method},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["activeLayers"],
source: "inlineLayers: activeLayers\x0a\x09| method |\x0a\x09method := ContextInliningCodeGenerator new\x0a\x09\x09activeLayers: activeLayers;\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09compileNode: (Smalltalk parse: self source).\x0a\x09^ self eval: method",
referencedClasses: ["ContextInliningCodeGenerator", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["activeLayers:", "new", "source:", "source", "currentClass:", "currentClass", "compileNode:", "parse:", "eval:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "visitPartialBlockNode:",
protocol: '*ContextAmber',
fn: function (aNode){
var self=this;
var closure;
function $IRPartialClosure(){return $globals.IRPartialClosure||(typeof IRPartialClosure=="undefined"?nil:IRPartialClosure)}
function $IRTempDeclaration(){return $globals.IRTempDeclaration||(typeof IRTempDeclaration=="undefined"?nil:IRTempDeclaration)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$9;
$1=$recv($IRPartialClosure())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._arguments_($recv(aNode)._parameters());
$recv($1)._requiresSmalltalkContext_($recv(aNode)._requiresSmalltalkContext());
$2=$1;
$3=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$recv($2)._scope_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
closure=$4;
$6=$recv(aNode)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._temps();
$recv($5)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($IRTempDeclaration())._new();
$recv($7)._name_($recv(each)._name());
$recv($7)._scope_($recv(aNode)._scope());
$8=$recv($7)._yourself();
return $recv(closure)._add_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($recv(aNode)._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(closure)._add_(self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$9=closure;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitPartialBlockNode:",{aNode:aNode,closure:closure},$globals.IRASTTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitPartialBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRPartialClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
referencedClasses: ["IRPartialClosure", "IRTempDeclaration"],
//>>excludeEnd("ide");
messageSends: ["arguments:", "new", "parameters", "requiresSmalltalkContext:", "requiresSmalltalkContext", "scope:", "scope", "yourself", "do:", "temps", "add:", "name:", "name", "nodes", "visit:"]
}),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "isPartialClosure",
protocol: '*ContextAmber',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartialClosure\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRClosure);

$core.addMethod(
$core.method({
selector: "visitIRPartialClosure:",
protocol: '*ContextAmber',
fn: function (anIRClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutClosureWith_arguments_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$recv($2)._nextPutVars_($recv($recv(anIRClosure)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
})));
$3=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=3;
//>>excludeEnd("ctx");
return $recv($3)._nextPutBlockContextFor_during_(anIRClosure,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutNonLocalReturnHandlingWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.supercall = true, 
//>>excludeEnd("ctx");
$globals.IRJSTranslator.superclass.fn.prototype._visitIRClosure_.apply($recv(self), [anIRClosure]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$recv(anIRClosure)._arguments());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRPartialClosure:",{anIRClosure:anIRClosure},$globals.IRJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "visitIRPartialClosure: anIRClosure\x0a\x09self stream\x0a\x09\x09nextPutClosureWith: [\x0a\x09\x09\x09self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09self stream\x0a\x09\x09\x09\x09nextPutBlockContextFor: anIRClosure\x0a\x09\x09\x09\x09during: [ \x0a\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [ super visitIRClosure: anIRClosure ] ] ]\x0a\x09\x09arguments: anIRClosure arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutClosureWith:arguments:", "stream", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "nextPutBlockContextFor:during:", "nextPutNonLocalReturnHandlingWith:", "visitIRClosure:", "arguments"]
}),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRPartialClosure:",
protocol: '*ContextAmber',
fn: function (anIRPartialClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitIRClosure_(anIRPartialClosure);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRPartialClosure:",{anIRPartialClosure:anIRPartialClosure},$globals.IRVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRPartialClosure"],
source: "visitIRPartialClosure: anIRPartialClosure\x0a\x09^ self visitIRClosure: anIRPartialClosure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRClosure:"]
}),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "args:",
protocol: '*ContextAmber',
fn: function (aDictionary){
var self=this;
self["@args"]=aDictionary;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "args: aDictionary\x0a\x09args := aDictionary.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "temps:",
protocol: '*ContextAmber',
fn: function (aDictionary){
var self=this;
self["@temps"]=aDictionary;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "temps: aDictionary\x0a\x09temps := aDictionary.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

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
selector: "isPartialBlockNode",
protocol: '*ContextAmber',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPartialBlockNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "addFirstNode:",
protocol: '*ContextAmber',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._nodes())._addFirst_(aNode);
$recv(aNode)._parent_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFirstNode:",{aNode:aNode},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "addFirstNode: aNode\x0a\x09self nodes addFirst: aNode.\x0a\x09aNode parent: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addFirst:", "nodes", "parent:"]
}),
$globals.Node);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: '*ContextAmber',
fn: function (aNode,anotherNode){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(anotherNode)._parent_(self);
$1=self._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
index=$recv($1)._indexOf_ifAbsent_(aNode,(function(){
throw $early=[self];

}));
$recv(self._nodes())._at_put_(index,anotherNode);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aNode:aNode,anotherNode:anotherNode,index:index},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anotherNode"],
source: "replace: aNode with: anotherNode\x0a\x09| index |\x0a\x09anotherNode parent: self.\x0a\x09index := self nodes indexOf: aNode ifAbsent: [ ^ self ].\x0a\x09self nodes at: index put: anotherNode.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "indexOf:ifAbsent:", "nodes", "at:put:"]
}),
$globals.Node);

$core.addMethod(
$core.method({
selector: "replaceWith:",
protocol: '*ContextAmber',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._parent())._replace_with_(self,aNode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replaceWith:",{aNode:aNode},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "replaceWith: aNode\x0a\x09self parent replace: self with: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "parent"]
}),
$globals.Node);

$core.addMethod(
$core.method({
selector: "visitPartialBlockNode:",
protocol: '*ContextAmber',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitBlockNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitPartialBlockNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitPartialBlockNode: aNode\x0a\x09^ self visitBlockNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitBlockNode:"]
}),
$globals.NodeVisitor);

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
$recv($recv(aLayer)._class())._compositionChangeForObject_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateLayer:",{aLayer:aLayer},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "activateLayer: aLayer\x0a\x09self initializeLayers.\x0a\x09self layerStack add: aLayer.\x0a\x09aLayer class compositionChangeForObject: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeLayers", "add:", "layerStack", "compositionChangeForObject:", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "activeLayers",
protocol: '*ContextAmber',
fn: function (){
var self=this;
var layers;
function $ContextAmber(){return $globals.ContextAmber||(typeof ContextAmber=="undefined"?nil:ContextAmber)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
layers=$recv($ContextAmber())._globalLayerComposition();
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
$3=layers;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activeLayers",{layers:layers},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeLayers\x0a\x09| layers |\x0a\x09layers := ContextAmber globalLayerComposition.\x0a\x0a\x09self layerStack ifNotNil: [\x0a\x09\x09self layerStack do: [ :operation :layer | \x0a\x09\x09\x09operation = #add\x0a\x09\x09\x09\x09ifTrue: [ layers indexOf: layer ifAbsent: [ layers add: layer ] ]\x0a\x09\x09\x09\x09ifFalse: [ layers remove: layer ifAbsent: [ ] ] ] ].\x0a\x09\x09\x09\x09\x09\x09\x0a\x09^ layers",
referencedClasses: ["ContextAmber"],
//>>excludeEnd("ide");
messageSends: ["globalLayerComposition", "ifNotNil:", "layerStack", "do:", "ifTrue:ifFalse:", "=", "indexOf:ifAbsent:", "add:", "remove:ifAbsent:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "compositionSignature",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (self['activeLayersDirty'] === true || self['activeLayersDirty'] === undefined || self['activeLayersVersion'] != self.klass._layerCompositionVersion()) {
		self['compositionSignature'] = self._activeLayers()._asCompositionSignature();
		self['activeLayersDirty'] = false;
		self['activeLayersVersion'] = self._class()._layerCompositionVersion();
	}
	return self['compositionSignature']; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compositionSignature",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compositionSignature\x0a\x09< if (self['activeLayersDirty'] === true || self['activeLayersDirty'] === undefined || self['activeLayersVersion'] != self.klass._layerCompositionVersion()) {\x0a\x09\x09self['compositionSignature'] = self._activeLayers()._asCompositionSignature();\x0a\x09\x09self['activeLayersDirty'] = false;\x0a\x09\x09self['activeLayersVersion'] = self._class()._layerCompositionVersion();\x0a\x09}\x0a\x09return self['compositionSignature']; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
$recv($recv(aLayer)._class())._compositionChangeForObject_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deactivateLayer:",{aLayer:aLayer},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "deactivateLayer: aLayer\x0a\x09self initializeLayers.\x0a\x09self layerStack remove: aLayer.\x0a\x09aLayer class compositionChangeForObject: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeLayers", "remove:", "layerStack", "compositionChangeForObject:", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "globalCompositionSignatureFor:",
protocol: '*ContextAmber',
fn: function (selector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (self.klass.methods[selector]['globalSignature'] === undefined) {
		return '';
	} else {
		return self.klass.methods[selector]['globalSignature'];
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalCompositionSignatureFor:",{selector:selector},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "globalCompositionSignatureFor: selector\x0a\x09< if (self.klass.methods[selector]['globalSignature'] === undefined) {\x0a\x09\x09return '';\x0a\x09} else {\x0a\x09\x09return self.klass.methods[selector]['globalSignature'];\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "initializeLayers",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if (self['layerStack'] === undefined) {
		self['layerStack'] = smalltalk.LayerStack._new();
	} ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeLayers",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeLayers\x0a\x09< if (self['layerStack'] === undefined) {\x0a\x09\x09self['layerStack'] = smalltalk.LayerStack._new();\x0a\x09} >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
selector: "markLayersDirty",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 self['activeLayersDirty']  = true; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"markLayersDirty",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "markLayersDirty\x0a\x09< self['activeLayersDirty']  = true; >",
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
$recv($recv(aLayer)._class())._compositionChangeForObject_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetLayer:",{aLayer:aLayer},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLayer"],
source: "resetLayer: aLayer\x0a\x09self initializeLayers.\x0a\x09self layerStack reset: aLayer.\x0a\x09aLayer class compositionChangeForObject: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeLayers", "reset:", "layerStack", "compositionChangeForObject:", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "nonLocalReturn",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=self._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._isMethodScope();
$2=$recv($3)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["not"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__and($recv($recv($recv(self._scope())._node())._isPartialBlockNode())._not());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},$globals.ReturnNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not & self scope node isPartialBlockNode not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["&", "not", "isMethodScope", "scope", "isPartialBlockNode", "node"]
}),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: '*ContextAmber',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aClass)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aClass)._isPartial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
self["@theClass"]=$recv(aClass)._base();
self["@theClass"];
} else {
self["@theClass"]=aClass;
self["@theClass"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09(aClass notNil and: [ aClass isPartial ])\x0a\x09\x09ifTrue: [ theClass := aClass base ]\x0a\x09\x09ifFalse: [ theClass := aClass ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "notNil", "isPartial", "base"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: '*ContextAmber',
fn: function (aNode,anotherNode){
var self=this;
var idx;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=$recv(self["@receiver"]).__eq(aNode);
if($core.assert($1)){
self._receiver_(anotherNode);
};
$recv(anotherNode)._parent_(self);
$2=self._arguments();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arguments"]=1;
//>>excludeEnd("ctx");
idx=$recv($2)._indexOf_ifAbsent_(aNode,(function(){
throw $early=[self];

}));
$recv(self._arguments())._at_put_(idx,anotherNode);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aNode:aNode,anotherNode:anotherNode,idx:idx},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anotherNode"],
source: "replace: aNode with: anotherNode\x0a\x09| idx |\x0a\x09receiver = aNode ifTrue: [ self receiver: anotherNode ].\x0a\x09anotherNode parent: self.\x0a\x09idx := self arguments indexOf: aNode ifAbsent: [ ^ self ].\x0a\x09self arguments at: idx put: anotherNode.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "receiver:", "parent:", "indexOf:ifAbsent:", "arguments", "at:put:"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "asCompositionSignature",
protocol: '*ContextAmber',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._collect_((function(layer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(layer)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({layer:layer},$ctx1,1)});
//>>excludeEnd("ctx");
})))._join_("-");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asCompositionSignature",{},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asCompositionSignature\x0a\x09^ (self collect: [ :layer | layer asString ]) join: '-'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["join:", "collect:", "asString"]
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
