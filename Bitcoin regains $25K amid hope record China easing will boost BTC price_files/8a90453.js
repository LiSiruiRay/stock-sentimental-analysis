(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1273:function(t,e,n){"use strict";function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}window;function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function c(t,e){return t(e={exports:{}},e.exports),e.exports}var l=function(element){var t;if("SELECT"===element.nodeName)element.focus(),t=element.value;else if("INPUT"===element.nodeName||"TEXTAREA"===element.nodeName){var e=element.hasAttribute("readonly");e||element.setAttribute("readonly",""),element.select(),element.setSelectionRange(0,element.value.length),e||element.removeAttribute("readonly"),t=element.value}else{element.hasAttribute("contenteditable")&&element.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(element),n.removeAllRanges(),n.addRange(o),t=n.toString()}return t},f=c((function(t,e){!function(t,e){var n=o(e);function o(t){return t&&t.__esModule?t:{default:t}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return l(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=f}(t,l)}));function d(){}r(f),d.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var data=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),i=0,n=e.length;i<n;i++)e[i].fn.apply(e[i].ctx,data);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,c=o.length;i<c;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}};var h=d,y=c((function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}}));y.node,y.nodeList,y.string,y.fn;if("undefined"!=typeof Element&&!Element.prototype.matches){var m=Element.prototype;m.matches=m.matchesSelector||m.mozMatchesSelector||m.msMatchesSelector||m.oMatchesSelector||m.webkitMatchesSelector}var v=function(element,t){for(;element&&9!==element.nodeType;){if("function"==typeof element.matches&&element.matches(t))return element;element=element.parentNode}};function k(element,t,e,n,o){var r=E.apply(this,arguments);return element.addEventListener(e,r,o),{destroy:function(){element.removeEventListener(e,r,o)}}}function E(element,t,e,n){return function(e){e.delegateTarget=v(e.target,t),e.delegateTarget&&n.call(element,e)}}var w=function(t,e,n,o,r){return"function"==typeof t.addEventListener?k.apply(null,arguments):"function"==typeof n?k.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(element){return k(element,e,n,o,r)})))};var S=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!y.string(e))throw new TypeError("Second argument must be a String");if(!y.fn(n))throw new TypeError("Third argument must be a Function");if(y.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(y.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(y.string(t))return function(t,e,n){return w(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")},T=c((function(t,e){!function(t,e,n,o){var r=f(e),c=f(n),l=f(o);function f(t){return t&&t.__esModule?t:{default:t}}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var y=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var k=function(t){function e(t,n){h(this,e);var o=m(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return v(e,t),y(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,l.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return E("action",t)}},{key:"defaultTarget",value:function(t){var e=E("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return E("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(c.default);function E(t,element){var e="data-clipboard-"+t;if(element.hasAttribute(e))return element.getAttribute(e)}t.exports=k}(t,f,h,S)})),x=r(T);if(!x)throw new Error("[vue-clipboards] cannot locate Clipboard.");function A(t){return"object"===o(window.HTMLElement)?t instanceof window.HTMLElement:t&&"object"===o(t)&&1===t.nodeType&&"string"==typeof t.nodeName}function O(t){var e=t.target;if(document.createRange){var n=document.createRange(),o=window.getSelection();n.selectNode(e),o.removeAllRanges(),o.addRange(n)}else{var r=document.body.createTextRange();r.moveToElementText(e),r.select()}}var L={bind:function(t,e,n){return new Promise((function(r,c){var text,l,option,f,d,data,h,y,m;if(text=e.value,l=e.modifiers,option={},f=null,text&&"function"==typeof text)return Promise.resolve(text()).then(function(t){try{return text=t,v.call(this)}catch(t){return c(t)}}.bind(this),c);function v(){return/(string|number)/.test(o(text))?(option.text=function(){return"".concat(text)},n.data.attrs&&n.data.attrs.model&&(f=A(n.data.attrs.model)?n.data.attrs.model:document.querySelector(n.data.attrs.model)),n.elm.offsetParent?option.container=n.elm.offsetParent:A(f)?option.container=f:option.container=t.parentElement||document.body,n.elm.$clipboards=new x(t,option),d=n.componentOptions,data=n.data,h=d?d.listeners:null,y=data?data.on:null,(m=h&&h||y&&y)&&"object"===o(m)&&Object.keys(m).length&&Object.keys(m).map((function(t){return n.elm.$clipboards.on(t,m[t].fn||m[t].fns)})),(l.nselect||!1)&&n.elm.addEventListener("dblclick",O),r(n.elm.$clipboards)):c(new Error("[vue-clipboards] Invalid value. Please use a valid value."))}return v.call(this)}))},unbind:function(t){t.elm&&t.elm.$clipboards&&t.elm.$clipboards.destroy&&(t.elm.$clipboards.destroy(),t.elm.removeEventListener("dblclick",O),delete t.elm.$clipboards)},update:function(t,e,n){e.def.unbind(n),n.elm.removeEventListener("dblclick",O),e.def.bind(t,e,n)}};e.a=function(t){t.directive("clipboard",L)}},1337:function(t,e,n){"use strict";e.a=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},1499:function(t,e,n){"use strict";e.a=function(t){return t&&t.length?t[0]:void 0}},810:function(t,e,n){"use strict";var o=n(9),r=n(18),c=n(273).indexOf,l=n(213),f=r([].indexOf),d=!!f&&1/f([1],1,-0)<0,h=l("indexOf");o({target:"Array",proto:!0,forced:d||!h},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return d?f(this,t,e)||0:c(this,t,e)}})}}]);