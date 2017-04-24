!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-measure"),require("react-motion"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","react-measure","react-motion","styled-components"],n):"object"==typeof exports?exports.ReactExpandable=n(require("react"),require("react-measure"),require("react-motion"),require("styled-components")):e.ReactExpandable=n(e.React,e.ReactMeasure,e.ReactMotion,e.ReactStyled)}(this,function(e,n,t,r){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="dist/",n(n.s=10)}([function(e,n){function t(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(n){try{return s.call(null,e)}catch(n){return s.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?y=d.concat(y):v=-1,y.length&&a())}function a(){if(!h){var e=o(u);h=!0;for(var n=y.length;n;){for(d=y,y=[];++v<n;)d&&d[v].run();v=-1,n=y.length}d=null,h=!1,i(e)}}function c(e,n){this.fun=e,this.array=n}function f(){}var l,s,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,y=[],h=!1,v=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];y.push(new c(e,n)),1!==y.length||h||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,n,t){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,n,t){"use strict";(function(n){function t(e,n,t,o,i,u,a,c){if(r(n),!e){var f;if(void 0===n)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,o,i,u,a,c],s=0;f=new Error(n.replace(/%s/g,function(){return l[s++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var r=function(e){};"production"!==n.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=t}).call(n,t(0))},function(e,n,t){"use strict";(function(n){var r=t(1),o=r;"production"!==n.env.NODE_ENV&&function(){var e=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(n,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!n){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];e.apply(void 0,[t].concat(o))}}}(),e.exports=o}).call(n,t(0))},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){function r(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var o=t(12),i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=o(r)},function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=r},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function i(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function f(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=f(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"],["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]),p=f(["\n  display: flex;\n  flex-direction: column;\n  background: #EEE;\n  ","\n"],["\n  display: flex;\n  flex-direction: column;\n  background: #EEE;\n  ","\n"]),d=f(["\n"],["\n"]),y=f(["\n  height: ","px;\n  overflow: hidden;\n"],["\n  height: ","px;\n  overflow: hidden;\n"]),h=t(6),v=r(h),m=t(7),g=r(m),b=t(5),O=r(b),x=t(8),w=t(9),E=r(w),T=E.default.div(s),_=E.default.div(p,function(e){return!e.isFirst&&"margin-top: 10px;"}),j=E.default.div(d),R=E.default.div(y,function(e){return e.animation*e.contentHeight}),N=function(e){function n(){var e,t,r,o;u(this,n);for(var c=arguments.length,f=Array(c),l=0;l<c;l++)f[l]=arguments[l];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(f))),r.getDefaultStyle=function(e){for(var n=e.children,t={},r=0;r<n.length;r++)t[r]=0;return t},r.calculateStyle=function(e){for(var n=e.children,t=e.springOptions,r=e.activeIndexes,o={},i=0;i<n.length;i++)o[i]=(0,x.spring)(r.indexOf(i)>-1,t);return o},r.trigger=function(e,n){var t=n.enableMultiOpen,o=n.activeIndexes,u=o.indexOf(e);u>-1?r.setState({activeIndexes:t?[].concat(i(o.slice(0,u)),i(o.slice(u+1))):[]}):r.setState({activeIndexes:t?[].concat(i(o),[e]):[e]})},r.updateChildHeight=function(e,n,t){t.childrenHeights;r.state.childrenHeights[e]=n},o=t,a(r,o)}return c(n,e),l(n,[{key:"componentWillMount",value:function(){this.setState({activeIndexes:[],childrenHeights:this.props.children.map(function(){return 0})})}},{key:"render",value:function(){var e=this,n=this.props,t=n.children,r=n.springOptions,i=n.enableMultiOpen,u=n.headers,a=(o(n,["children","springOptions","enableMultiOpen","headers"]),this.state),c=a.activeIndexes,f=a.childrenHeights;return v.default.createElement(x.Motion,{defaultStyle:this.getDefaultStyle({children:t}),style:this.calculateStyle({children:t,springOptions:r,activeIndexes:c})},function(n){return v.default.createElement(T,null,t.map(function(t,r){return v.default.createElement(_,{isFirst:0===r,key:r},v.default.createElement(j,{onClick:function(){return e.trigger(r,{enableMultiOpen:i,activeIndexes:c})}},u[r]({isOpened:c.indexOf(r)>-1})),v.default.createElement(R,{contentHeight:f[r],animation:n[r]},v.default.createElement(g.default,{whitelist:["height"],onMeasure:function(n){var t=n.height;return e.updateChildHeight(r,t,{childrenHeights:f})}},t)))}))})}}]),n}(v.default.Component);N.propTypes={children:O.default.arrayOf(O.default.element),headers:O.default.arrayOf(O.default.func),springOptions:O.default.shape({stiffness:O.default.number,damping:O.default.number,precision:O.default.number}),enableMultiOpen:v.default.PropTypes.bool},n.default=N},function(e,n,t){"use strict";(function(n){function r(e,t,r,c,f){if("production"!==n.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var s;try{o("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",c||"React class",r,l),s=e[l](t,l,c,r,null,u)}catch(e){s=e}if("production"!==n.env.NODE_ENV&&i(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,l,typeof s),s instanceof Error&&!(s.message in a)){a[s.message]=!0;var p=f?f():"";"production"!==n.env.NODE_ENV&&i(!1,"Failed %s type: %s%s",r,s.message,null!=p?p:"")}}}var o=t(2),i=t(3),u=t(4),a={};e.exports=r}).call(n,t(0))},function(e,n,t){"use strict";(function(n){var r=t(1),o=t(2),i=t(3),u=t(4),a=t(11);e.exports=function(e){function t(e){var n=e&&(T&&e[T]||e[_]);if("function"==typeof n)return n}function c(e,n){return e===n?0!==e||1/e==1/n:e!==e&&n!==n}function f(e){this.message=e,this.stack=""}function l(e){function t(t,o,a,c,l,s,p){if(c=c||j,s=s||a,"production"!==n.env.NODE_ENV&&p!==u&&"undefined"!=typeof console){var d=c+":"+a;r[d]||("production"!==n.env.NODE_ENV&&i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will not work in production with the next major version. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",s,c),r[d]=!0)}return null==o[a]?t?new f(null===o[a]?"The "+l+" `"+s+"` is marked as required in `"+c+"`, but its value is `null`.":"The "+l+" `"+s+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,a,c,l,s)}if("production"!==n.env.NODE_ENV)var r={};var o=t.bind(null,!1);return o.isRequired=t.bind(null,!0),o}function s(e){function n(n,t,r,o,i,u){var a=n[t];if(O(a)!==e)return new f("Invalid "+o+" `"+i+"` of type `"+x(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return l(n)}function p(e){function n(n,t,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=n[t];if(!Array.isArray(a)){return new f("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<a.length;c++){var l=e(a,c,r,o,i+"["+c+"]",u);if(l instanceof Error)return l}return null}return l(n)}function d(e){function n(n,t,r,o,i){if(!(n[t]instanceof e)){var u=e.name||j;return new f("Invalid "+o+" `"+i+"` of type `"+w(n[t])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return l(n)}function y(e){function t(n,t,r,o,i){for(var u=n[t],a=0;a<e.length;a++)if(c(u,e[a]))return null;return new f("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?l(t):("production"!==n.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function h(e){function n(n,t,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=n[t],c=O(a);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in a)if(a.hasOwnProperty(l)){var s=e(a,l,r,o,i+"."+l,u);if(s instanceof Error)return s}return null}return l(n)}function v(e){function t(n,t,r,o,i){for(var a=0;a<e.length;a++){if(null==(0,e[a])(n,t,r,o,i,u))return null}return new f("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}return Array.isArray(e)?l(t):("production"!==n.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull)}function m(e){function n(n,t,r,o,i){var a=n[t],c=O(a);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var p=s(a,l,r,o,i+"."+l,u);if(p)return p}}return null}return l(n)}function g(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(g);if(null===n||e(n))return!0;var r=t(n);if(!r)return!1;var o,i=r.call(n);if(r!==n.entries){for(;!(o=i.next()).done;)if(!g(o.value))return!1}else for(;!(o=i.next()).done;){var u=o.value;if(u&&!g(u[1]))return!1}return!0;default:return!1}}function b(e,n){return"symbol"===e||("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}function O(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":b(n,e)?"symbol":n}function x(e){var n=O(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function w(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var E,T="function"==typeof Symbol&&Symbol.iterator,_="@@iterator",j="<<anonymous>>";if("production"!==n.env.NODE_ENV)E={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:function(){return l(r.thatReturnsNull)}(),arrayOf:p,element:function(){function n(n,t,r,o,i){var u=n[t];if(!e(u)){return new f("Invalid "+o+" `"+i+"` of type `"+O(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(n)}(),instanceOf:d,node:function(){function e(e,n,t,r,o){return g(e[n])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}return l(e)}(),objectOf:h,oneOf:y,oneOfType:v,shape:m};else{var R=function(){o(!1,"React.PropTypes type checking code is stripped in production.")};R.isRequired=R;var N=function(){return R};E={array:R,bool:R,func:R,number:R,object:R,string:R,symbol:R,any:R,arrayOf:N,element:R,instanceOf:N,node:R,objectOf:N,oneOf:N,oneOfType:N,shape:N}}return f.prototype=Error.prototype,E.checkPropTypes=a,E.PropTypes=E,E}}).call(n,t(0))}])});