!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-measure"),require("react-motion"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","react-measure","react-motion","styled-components"],n):"object"==typeof exports?exports.ReactExpandable=n(require("react"),require("react-measure"),require("react-motion"),require("styled-components")):e.ReactExpandable=n(e.React,e.ReactMeasure,e.ReactMotion,e.ReactStyled)}(this,function(e,n,t,r){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="dist/",n(n.s=7)}([function(e,n){function t(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(n){try{return s.call(null,e)}catch(n){return s.call(this,e)}}}function a(){h&&d&&(h=!1,d.length?y=d.concat(y):v=-1,y.length&&u())}function u(){if(!h){var e=o(a);h=!0;for(var n=y.length;n;){for(d=y,y=[];++v<n;)d&&d[v].run();v=-1,n=y.length}d=null,h=!1,i(e)}}function c(e,n){this.fun=e,this.array=n}function f(){}var l,s,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,y=[],h=!1,v=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];y.push(new c(e,n)),1!==y.length||h||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){(function(n){if("production"!==n.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=t(11)(o,!0)}else e.exports=t(10)()}).call(n,t(0))},function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=r},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function i(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function f(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=f(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"],["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]),p=f(["\n  display: flex;\n  flex-direction: column;\n"],["\n  display: flex;\n  flex-direction: column;\n"]),d=f(["\n"],["\n"]),y=f(["\n  height: ","px;\n  overflow: hidden;\n"],["\n  height: ","px;\n  overflow: hidden;\n"]),h=t(3),v=r(h),m=t(4),b=r(m),g=t(2),O=r(g),w=t(5),x=t(6),E=r(x),j=E.default.div(s),T=E.default.div(p),P=E.default.div(d),_=E.default.div(y,function(e){return e.animation*e.contentHeight}),S=function(e){function n(){var e,t,r,o;a(this,n);for(var c=arguments.length,f=Array(c),l=0;l<c;l++)f[l]=arguments[l];return t=r=u(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(f))),r.getDefaultStyle=function(e){for(var n=e.children,t={},r=0;r<n.length;r++)t[r]=0;return t},r.calculateStyle=function(e){for(var n=e.children,t=e.springOptions,r=e.activeIndexes,o={},i=0;i<n.length;i++)o[i]=(0,w.spring)(r.indexOf(i)>-1,t);return o},r.trigger=function(e,n){var t=n.enableMultiOpen,o=n.activeIndexes,a=o.indexOf(e);a>-1?r.setState({activeIndexes:t?[].concat(i(o.slice(0,a)),i(o.slice(a+1))):[]}):r.setState({activeIndexes:t?[].concat(i(o),[e]):[e]})},r.updateChildHeight=function(e,n,t){t.childrenHeights;r.state.childrenHeights[e]=n},o=t,u(r,o)}return c(n,e),l(n,[{key:"componentWillMount",value:function(){this.setState({activeIndexes:[],childrenHeights:this.props.children.map(function(){return 0})})}},{key:"render",value:function(){var e=this,n=this.props,t=n.children,r=n.springOptions,i=n.enableMultiOpen,a=n.headers,u=o(n,["children","springOptions","enableMultiOpen","headers"]),c=this.state,f=c.activeIndexes,l=c.childrenHeights;return v.default.createElement(w.Motion,{defaultStyle:this.getDefaultStyle({children:t}),style:this.calculateStyle({children:t,springOptions:r,activeIndexes:f})},function(n){return v.default.createElement(j,u,t.map(function(t,r){return v.default.createElement(T,{key:r},v.default.createElement(P,{onClick:function(){return e.trigger(r,{enableMultiOpen:i,activeIndexes:f})}},a[r]({isOpened:f.indexOf(r)>-1})),v.default.createElement(_,{contentHeight:l[r],animation:n[r]},v.default.createElement(b.default,{whitelist:["height"],onMeasure:function(n){var t=n.height;return e.updateChildHeight(r,t,{childrenHeights:l})}},t)))}))})}}]),n}(v.default.Component);S.propTypes={children:O.default.arrayOf(O.default.element).isRequired,headers:O.default.arrayOf(O.default.func).isRequired,springOptions:O.default.shape({stiffness:O.default.number,damping:O.default.number,precision:O.default.number}),enableMultiOpen:O.default.bool},S.defaultProps={enableMultiOpen:!1},n.default=S},function(e,n,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,u,c=r(e),f=1;f<arguments.length;f++){t=Object(arguments[f]);for(var l in t)i.call(t,l)&&(c[l]=t[l]);if(o){u=o(t);for(var s=0;s<u.length;s++)a.call(t,u[s])&&(c[u[s]]=t[u[s]])}}return c}},function(e,n,t){"use strict";(function(n){function r(e,t,r,u,c){if("production"!==n.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var l;try{if("function"!=typeof e[f]){var s=Error((u||"React class")+": "+r+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.");throw s.name="Invariant Violation",s}l=e[f](t,f,u,r,null,i)}catch(e){l=e}if(!l||l instanceof Error||o((u||"React class")+": type specification of "+r+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var p=c?c():"";o("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}var o=function(){};if("production"!==n.env.NODE_ENV){var i=t(1),a={};o=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}e.exports=r}).call(n,t(0))},function(e,n,t){"use strict";function r(){}var o=t(1);e.exports=function(){function e(e,n,t,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return t.checkPropTypes=r,t.PropTypes=t,t}},function(e,n,t){"use strict";(function(n){function r(){return null}var o=t(8),i=t(1),a=t(9),u=function(){};"production"!==n.env.NODE_ENV&&(u=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),e.exports=function(e,t){function c(e){var n=e&&(P&&e[P]||e[_]);if("function"==typeof n)return n}function f(e,n){return e===n?0!==e||1/e==1/n:e!==e&&n!==n}function l(e){this.message=e,this.stack=""}function s(e){function r(r,c,f,s,p,d,y){if(s=s||S,d=d||f,y!==i){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}if("production"!==n.env.NODE_ENV&&"undefined"!=typeof console){var v=s+":"+f;!o[v]&&a<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[v]=!0,a++)}}return null==c[f]?r?new l(null===c[f]?"The "+p+" `"+d+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(c,f,s,p,d)}if("production"!==n.env.NODE_ENV)var o={},a=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function n(n,t,r,o,i,a){var u=n[t];if(x(u)!==e)return new l("Invalid "+o+" `"+i+"` of type `"+E(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return s(n)}function d(e){function n(n,t,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u)){return new l("Invalid "+o+" `"+a+"` of type `"+x(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var f=e(u,c,r,o,a+"["+c+"]",i);if(f instanceof Error)return f}return null}return s(n)}function y(e){function n(n,t,r,o,i){if(!(n[t]instanceof e)){var a=e.name||S;return new l("Invalid "+o+" `"+i+"` of type `"+T(n[t])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return s(n)}function h(e){function t(n,t,r,o,i){for(var a=n[t],u=0;u<e.length;u++)if(f(a,e[u]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?s(t):("production"!==n.env.NODE_ENV&&u("Invalid argument supplied to oneOf, expected an instance of array."),r)}function v(e){function n(n,t,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=n[t],c=x(u);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in u)if(u.hasOwnProperty(f)){var s=e(u,f,r,o,a+"."+f,i);if(s instanceof Error)return s}return null}return s(n)}function m(e){function t(n,t,r,o,a){for(var u=0;u<e.length;u++){if(null==(0,e[u])(n,t,r,o,a,i))return null}return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==n.env.NODE_ENV&&u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var a=e[o];if("function"!=typeof a)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(a)+" at index "+o+"."),r}return s(t)}function b(e){function n(n,t,r,o,a){var u=n[t],c=x(u);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var p=s(u,f,r,o,a+"."+f,i);if(p)return p}}return null}return s(n)}function g(e){function n(n,t,r,a,u){var c=n[t],f=x(c);if("object"!==f)return new l("Invalid "+a+" `"+u+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var s=o({},n[t],e);for(var p in s){var d=e[p];if(!d)return new l("Invalid "+a+" `"+u+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(n[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,p,r,a,u+"."+p,i);if(y)return y}return null}return s(n)}function O(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(O);if(null===n||e(n))return!0;var t=c(n);if(!t)return!1;var r,o=t.call(n);if(t!==n.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!O(i[1]))return!1}return!0;default:return!1}}function w(e,n){return"symbol"===e||("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}function x(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(n,e)?"symbol":n}function E(e){if(void 0===e||null===e)return""+e;var n=x(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function j(e){var n=E(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}function T(e){return e.constructor&&e.constructor.name?e.constructor.name:S}var P="function"==typeof Symbol&&Symbol.iterator,_="@@iterator",S="<<anonymous>>",k={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return s(r)}(),arrayOf:d,element:function(){function n(n,t,r,o,i){var a=n[t];if(!e(a)){return new l("Invalid "+o+" `"+i+"` of type `"+x(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return s(n)}(),instanceOf:y,node:function(){function e(e,n,t,r,o){return O(e[n])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}return s(e)}(),objectOf:v,oneOf:h,oneOfType:m,shape:b,exact:g};return l.prototype=Error.prototype,k.checkPropTypes=a,k.PropTypes=k,k}}).call(n,t(0))}])});