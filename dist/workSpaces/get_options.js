!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accessToken=t.apiUrl=t.apiVer=void 0,t.apiVer="1.0",t.apiUrl="https://app.asana.com/api/"+t.apiVer,t.accessToken=VARS.accessToken},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWorkspacesProjects=t.getWorkspaces=void 0;var n=r(0),o=r(2);t.getWorkspaces=function(){return o.decodeApiResponse(httpGet(o.getUrl("/workspaces?limit=10"),{Authorization:"Bearer "+n.accessToken}))},t.getWorkspacesProjects=function(e){return o.decodeApiResponse(httpGet(o.getUrl("/workspaces/"+e+"/projects?opt_fields=gid,name&limit=10"),{Authorization:"Bearer "+n.accessToken}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeApiResponse=t.getUrl=void 0;var n=r(0);t.getUrl=function(e){return n.apiUrl+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}}},,,function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);t.default=function(){return{add:o.getWorkspaces().response.data.map((function(e){return n(n({},e),{description:e.name+" workspace"})}))}}}])}));