!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,function(){return n={},r.m=o={7:function(e,t,o){"use strict";
// @description Setup the asana automation package
open("https://app.asana.com/0/developer-console"),click("New access token");var n="workerb-"+(new Date).getTime();type(n,"What will this token be used for?",{method:"by_placeholder"}),click("I agree to the API terms and conditions",{method:"by_label"}),click("Create token");n=read(".CopyTextbox-text",{method:"by_query_selector"});notify(n,"success",3e3),n?(setVars([{name:"asanaAccessToken",value:n}],{local:!0}),notify("Access token added successfully","success",3e3),reIndex()):notify("Empty token","error",3e3)}},r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7);function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o,n});