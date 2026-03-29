var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function u(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t,n,s,i){return t[1]&&i?e(s.ctx.slice(),t[1](i(n))):s.ctx}function h(t,e){const n={};e=new Set(e);for(const s in t)e.has(s)||"$"===s[0]||(n[s]=t[s]);return n}function d(t,e,n){return t.set(n),e}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function E(){return v("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const I=["width","height"];function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){t.value=null==e?"":e}function C(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function k(t,e,n){t.classList[n?"add":"remove"](e)}let A;function N(t){A=t}function D(){if(!A)throw new Error("Function called outside component initialization");return A}function R(t){D().$$.on_mount.push(t)}function O(t){D().$$.on_destroy.push(t)}function L(){const t=D();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}(e,n,{cancelable:s});return i.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}function P(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const x=[],M=[];let U=[];const F=[],$=Promise.resolve();let V=!1;function j(t){U.push(t)}const B=new Set;let q=0;function z(){if(0!==q)return;const t=A;do{try{for(;q<x.length;){const t=x[q];q++,N(t),H(t.$$)}}catch(t){throw x.length=0,q=0,t}for(N(null),x.length=0,q=0;M.length;)M.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];B.has(e)||(B.add(e),e())}U.length=0}while(x.length);for(;F.length;)F.pop()();V=!1,B.clear(),N(t)}function H(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const K=new Set;let G;function Y(){G={r:0,c:[],p:G}}function W(){G.r||i(G.c),G=G.p}function Q(t,e){t&&t.i&&(K.delete(t),t.i(e))}function J(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),G.c.push((()=>{K.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function X(t){t&&t.c()}function Z(t,e,s,o){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,s),o||j((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):i(e),t.$$.on_mount=[]})),c.forEach(j)}function tt(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];U.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),U=e}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(x.push(t),V||(V=!0,$.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,r,o,a,c,u,l=[-1]){const h=A;N(e);const d=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:s(),dirty:l,skip_bound:!1,root:n.target||h.$$.root};u&&u(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&et(e,t)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&Q(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),z()}N(h)}class st{$destroy(){tt(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function rt(e,n=t){let s;const i=new Set;function r(t){if(o(e,t)&&(e=t,s)){const t=!it.length;for(const t of i)t[1](),it.push(t,e);if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.add(c),1===i.size&&(s=n(r)||t),o(e),()=>{i.delete(c),0===i.size&&s&&(s(),s=null)}}}}const ot=rt(!1),at=rt("START"),ct=rt(""),ut=rt(0),lt=rt(0),ht=rt("");function dt(e){let n;return{c(){n=y("a"),n.innerHTML='<img class="app-vitalize-icon svelte-1gpu1vg" src="/logos/vitalize_logo.png" alt="vitalize"/>',b(n,"href","https://www.vitalize.co.jp")},m(t,e){p(t,n,e)},p:t,d(t){t&&g(n)}}}function ft(t){let e,n,s;return{c(){e=y("li"),n=v(t[1]),s=v("枚 GET!")},m(t,i){p(t,e,i),f(e,n),f(e,s)},p(t,e){2&e&&_(n,t[1])},d(t){t&&g(e)}}}function pt(e){let n;return{c(){n=y("div"),n.innerHTML='<a href="https://www.igoo.info/events/event/1726/"><img class="sowfest svelte-1gpu1vg" src="/logos/sowfest.png" alt="sowfest"/></a>',b(n,"class","site-header__end svelte-1gpu1vg")},m(t,e){p(t,n,e)},p:t,d(t){t&&g(n)}}}function gt(e){let n,s,i,r;return{c(){n=y("div"),s=y("button"),s.innerHTML='<i class="fa-solid fa-ranking-star"></i>ランキングを見る',b(n,"class","site-header__end svelte-1gpu1vg")},m(t,o){p(t,n,o),f(n,s),i||(r=T(s,"click",e[3]),i=!0)},p:t,d(t){t&&g(n),i=!1,r()}}}function mt(e){let n,s,i,r;return{c(){n=y("div"),s=y("button"),s.innerHTML='<i class="fa-solid fa-house"></i>スタート画面',b(n,"class","site-header__end svelte-1gpu1vg")},m(t,o){p(t,n,o),f(n,s),i||(r=T(s,"click",e[4]),i=!0)},p:t,d(t){t&&g(n),i=!1,r()}}}function yt(t){let e,n,s,i;return{c(){e=y("div"),n=y("i"),s=w(),i=v(t[2]),b(n,"class","fa-solid fa-clock"),b(e,"class","site-header__end math-font svelte-1gpu1vg")},m(t,r){p(t,e,r),f(e,n),f(e,s),f(e,i)},p(t,e){4&e&&_(i,t[2])},d(t){t&&g(e)}}}function vt(e){let n,s,i,r,o,a,c,u;function l(t,e){return"PLAYING"==t[0]?ft:dt}let h=l(e),d=h(e);function m(t,e){return"PLAYING"==t[0]?yt:"RANKING"==t[0]||"RESULT"==t[0]?mt:"START"==t[0]?gt:pt}let v=m(e),E=v(e);return{c(){n=y("header"),s=y("div"),i=y("div"),i.innerHTML='<a href="https://www.kodomo-kai.or.jp/chiba/karuta/" class="brand svelte-1gpu1vg"><img class="app-icon svelte-1gpu1vg" src="/logos/karuta.png" alt="bosokaruta"/> \n        <p class="app-title svelte-1gpu1vg">タイピング！</p></a>',r=w(),o=y("div"),a=y("nav"),c=y("ul"),d.c(),u=w(),E.c(),b(i,"class","site-header__start svelte-1gpu1vg"),b(c,"class","nav__wrapper svelte-1gpu1vg"),b(a,"class","nav"),b(o,"class","site-header__middle svelte-1gpu1vg"),b(s,"class","wrapper site-header__wrapper svelte-1gpu1vg"),b(n,"class","site-header svelte-1gpu1vg")},m(t,e){p(t,n,e),f(n,s),f(s,i),f(s,r),f(s,o),f(o,a),f(a,c),d.m(c,null),f(s,u),E.m(s,null)},p(t,[e]){h===(h=l(t))&&d?d.p(t,e):(d.d(1),d=h(t),d&&(d.c(),d.m(c,null))),v===(v=m(t))&&E?E.p(t,e):(E.d(1),E=v(t),E&&(E.c(),E.m(s,null)))},i:t,o:t,d(t){t&&g(n),d.d(),E.d()}}}function wt(t,e,n){let s,i,r;return u(t,at,(t=>n(0,s=t))),u(t,ut,(t=>n(1,i=t))),u(t,ht,(t=>n(2,r=t))),[s,i,r,function(){d(at,s="RANKING",s)},function(){d(at,s="START",s)}]}class Et extends st{constructor(t){super(),nt(this,t,wt,vt,o,{})}}function Tt(t){let n,s,r,o;const a=t[2].default,c=function(t,e,n,s){if(t){const i=l(t,e,n,s);return t[0](i)}}(a,t,t[1],null);let u=[t[0]],h={};for(let t=0;t<u.length;t+=1)h=e(h,u[t]);return{c(){n=y("button"),c&&c.c(),function(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set&&-1===I.indexOf(s)?t[s]=e[s]:b(t,s,e[s])}(n,h),k(n,"svelte-1vu9du3",!0)},m(e,i){p(e,n,i),c&&c.m(n,null),n.autofocus&&n.focus(),s=!0,r||(o=[T(n,"click",t[3]),T(n,"mouseover",t[4]),T(n,"mouseenter",t[5]),T(n,"mouseleave",t[6]),T(n,"focus",t[7])],r=!0)},p(t,[e]){c&&c.p&&(!s||2&e)&&function(t,e,n,s,i,r){if(i){const o=l(e,n,s,r);t.p(o,i)}}(c,a,t,t[1],s?function(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|i[s];return t}return e.dirty|i}return e.dirty}(a,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null),k(n,"svelte-1vu9du3",!0)},i(t){s||(Q(c,t),s=!0)},o(t){J(c,t),s=!1},d(t){t&&g(n),c&&c.d(t),r=!1,i(o)}}}function bt(t,n,s){const i=[];let r=h(n,i),{$$slots:o={},$$scope:a}=n,c={class:[r.class]};return t.$$set=t=>{n=e(e({},n),function(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}(t)),s(8,r=h(n,i)),"$$scope"in t&&s(1,a=t.$$scope)},[c,a,o,function(e){P.call(this,t,e)},function(e){P.call(this,t,e)},function(e){P.call(this,t,e)},function(e){P.call(this,t,e)},function(e){P.call(this,t,e)}]}class It extends st{constructor(t){super(),nt(this,t,bt,Tt,o,{})}}const _t={"１":["1"],"２":["2"],"３":["3"],"４":["4"],"５":["5"],"６":["6"],"７":["7"],"８":["8"],"９":["9"],"０":["0"],"Ａ":["A"],"Ｂ":["B"],"Ｃ":["C"],"Ｄ":["D"],"Ｅ":["E"],"Ｆ":["F"],"Ｇ":["G"],"Ｈ":["H"],"Ｉ":["I"],"Ｊ":["J"],"Ｋ":["K"],"Ｌ":["L"],"Ｍ":["M"],"Ｎ":["N"],"Ｏ":["O"],"Ｐ":["P"],"Ｑ":["Q"],"Ｒ":["R"],"Ｓ":["S"],"Ｔ":["T"],"Ｕ":["U"],"Ｖ":["V"],"Ｗ":["W"],"Ｘ":["X"],"Ｙ":["Y"],"Ｚ":["Z"],"あ":["A"],"い":["I"],"う":["U","WU"],"え":["E"],"お":["O"],"か":["KA","CA"],"き":["KI"],"く":["KU","CU","QU"],"け":["KE"],"こ":["KO","CO"],"さ":["SA"],"し":["SHI","CI","SI"],"す":["SU"],"せ":["SE","CE"],"そ":["SO"],"た":["TA"],"ち":["CHI","TI"],"つ":["TSU","TU"],"て":["TE"],"と":["TO"],"な":["NA"],"に":["NI"],"ぬ":["NU"],"ね":["NE"],"の":["NO"],"は":["HA"],"ひ":["HI"],"ふ":["HU","FU"],"へ":["HE"],"ほ":["HO"],"ま":["MA"],"み":["MI"],"む":["MU"],"め":["ME"],"も":["MO"],"や":["YA"],"ゆ":["YU"],"よ":["YO"],"ら":["RA","LA"],"り":["RI","LI"],"る":["RU","LU"],"れ":["RE","LE"],"ろ":["RO","LO"],"わ":["WA"],"を":["WO"],"ん":["NN"],"ン":["N"],"が":["GA"],"ぎ":["GI"],"ぐ":["GU"],"げ":["GE"],"ご":["GO"],"ざ":["ZA"],"じ":["ZI","JI"],"ず":["ZU"],"ぜ":["ZE"],"ぞ":["ZO"],"だ":["DA"],"ぢ":["DI"],"づ":["DU"],"で":["DE"],"ど":["DO"],"ば":["BA"],"び":["BI"],"ぶ":["BU"],"べ":["BE"],"ぼ":["BO"],"ぱ":["PA"],"ぴ":["PI"],"ぷ":["PU"],"ぺ":["PE"],"ぽ":["PO"],"ゔぁ":["VA"],"ゔぃ":["VI"],"ゔ":["VU"],"ゔぇ":["VE"],"ゔぉ":["VO"],"ぁ":["XA","LA"],"ぃ":["XI","XYI","LI","LYI"],"ぅ":["XU","LU"],"ぇ":["XE","XYE","LE","LYE"],"ぉ":["XO","LO"],"ゃ":["XYA","LYA"],"ゅ":["XYU","LYU"],"ょ":["XYO","LYO"],"ヶ":["XKE","LKE"],"ッ":["XTU","LTU","XTSU","LTSU"],"うぃ":["WI"],"うぇ":["WE"],"きゃ":["KYA"],"きぃ":["KYI"],"きぇ":["KYE"],"きゅ":["KYU"],"きょ":["KYO"],"くぁ":["KWA","QA"],"くぃ":["QYI","QI"],"くぇ":["QE"],"くぉ":["QO"],"くゃ":["QYA"],"くゅ":["QYU"],"くょ":["QYO"],"しゃ":["SYA","SHA"],"しぃ":["SYI"],"しゅ":["SYU","SHU"],"しぇ":["SYE","SHE"],"しょ":["SYO","SHO"],"ちゃ":["TYA","CHA","CYA"],"っちゃ":["TTYA","CCHA","CCYA"],"ちぃ":["TYI","CYI"],"っちぃ":["TTYI","CCYI"],"ちゅ":["TYU","CHU","CYU"],"っちゅ":["TTYU","CCHU","CCYU"],"ちぇ":["TYE","CHE","CYE"],"っちぇ":["TTYE","CCHE","CCYE"],"ちょ":["TYO","CHO","CYO"],"っちょ":["TTYO","CCHO","CCYO"],"つぁ":["TSA"],"っつぁ":["TTSA"],"つぃ":["TSI"],"つぇ":["TSE"],"つぉ":["TSO"],"てゃ":["THA"],"てぃ":["THI"],"てゅ":["THU"],"てぇ":["THE"],"てょ":["THO"],"とぁ":["TWA"],"とぃ":["TWI"],"とぅ":["TWU"],"とぇ":["TWE"],"とぉ":["TWO"],"にゃ":["NYA"],"にぃ":["NYI"],"にゅ":["NYU"],"にぇ":["NYE"],"にょ":["NYO"],"ひゃ":["HYA"],"ひぃ":["HYI"],"ひゅ":["HYU"],"ひぇ":["HYE"],"ひょ":["HYO"],"ふぁ":["FA"],"ふぃ":["FYI","FI"],"ふぇ":["FYE","FE"],"ふぉ":["FO"],"ふゃ":["FYA"],"ふゅ":["FYU"],"ふょ":["FYO"],"みゃ":["MYA"],"みぃ":["MYI"],"みゅ":["MYU"],"みぇ":["MYE"],"みょ":["MYO"],"りゃ":["RYA"],"りぃ":["RYI"],"りゅ":["RYU"],"りぇ":["RYE"],"りょ":["RYO"],"ぎゃ":["GYA"],"ぎぃ":["GYI"],"ぎゅ":["GYU"],"ぎぇ":["GYE"],"ぎょ":["GYO"],"じゃ":["ZYA","JA","JYA"],"じぃ":["ZYI","JYI"],"じゅ":["ZYU","JU","JYU"],"じぇ":["ZYE","JE","JYE"],"じょ":["ZYO","JO","JYO"],"ぢゃ":["DYA"],"ぢぃ":["DYI"],"ぢゅ":["DYU"],"ぢぇ":["DYE"],"ぢょ":["DYO"],"でゃ":["DHA"],"でぃ":["DHI","DEXI","DEXYI","DELI","DELYI"],"でゅ":["DHU"],"でぇ":["DHE"],"でょ":["DHO"],"どぁ":["DWA"],"どぃ":["DWI"],"どぅ":["DWU"],"どぇ":["DWE"],"どぉ":["DWO"],"びゃ":["BYA"],"びぃ":["BYI"],"びゅ":["BYU"],"びぇ":["BYE"],"びょ":["BYO"],"ぴゃ":["PYA"],"ぴぃ":["PYI"],"ぴゅ":["PYU"],"ぴぇ":["PYE"],"ぴょ":["PYO"],"！":["!"],"”":['"'],"＃":["#"],"％":["%"],"＆":["&"],"’":["'"],"（":["("],"）":[")"],"ー":["-"],"＝":["="],"＾":["^"],"～":["~"],"￥":["\\"],"|":["|"],"＠":["@"],"‘":["`"],"「":["["],"｛":["{"],"＋":["+"],"＊":["*"],"」":["]"],"｝":["}"],"、":[","],"＜":["<"],"。":["."],"＞":[">"],"・":["/"],"？":["?"],"￥":["\\"],"＿":["_"],"　":[" "]," ":[""],"っか":["KKA"],"っき":["KKI"],"っく":["KKU"],"っけ":["KKE"],"っこ":["KKO"],"っさ":["SSA"],"っし":["SSI"],"っす":["SSU"],"っせ":["SSE"],"っそ":["SSO"],"った":["TTA"],"っち":["CCHI","TTI"],"っつ":["TTU","TTSU"],"って":["TTE"],"っと":["TTO"],"っは":["HHA"],"っひ":["HHI"],"っふ":["FFU","HHU"],"っへ":["HHE"],"っほ":["HHO"],"っや":["YYA"],"っゆ":["YYU"],"っよ":["YYO"],"っわ":["WWA"],"っを":["WWO"],"っふぇ":["FFE"],"っぱ":["PPA"],"っぴ":["PPI"],"っぷ":["PPU"],"っぺ":["PPE"],"っぽ":["PPO"]},St=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},Ct={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),s.push(n[u],n[l],n[h],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(St(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new kt;const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const At=function(t){return function(t){const e=St(t);return Ct.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Nt=function(t){try{return Ct.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Dt=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Rt=()=>{try{return Dt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Nt(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Ot=t=>{var e,n;return null===(n=null===(e=Rt())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},Lt=()=>{var t;return null===(t=Rt())||void 0===t?void 0:t.config},Pt=t=>{var e;return null===(e=Rt())||void 0===e?void 0:e[`_${t}`]};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Mt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Ut extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace($t,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new Ut(s,o,n)}}const $t=/\{\$([^}]+)}/g;function Vt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(jt(n)&&jt(r)){if(!Vt(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function jt(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}class qt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let s;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");s=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===s.next&&(s.next=zt),void 0===s.error&&(s.error=zt),void 0===s.complete&&(s.complete=zt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(t){}})),this.observers.push(s),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function zt(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ht(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new xt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===Gt?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Wt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Yt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Qt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Qt||(Qt={}));const Jt={debug:Qt.DEBUG,verbose:Qt.VERBOSE,info:Qt.INFO,warn:Qt.WARN,error:Qt.ERROR,silent:Qt.SILENT},Xt=Qt.INFO,Zt={[Qt.DEBUG]:"log",[Qt.VERBOSE]:"log",[Qt.INFO]:"info",[Qt.WARN]:"warn",[Qt.ERROR]:"error"},te=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Zt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class ee{constructor(t){this.name=t,this._logLevel=Xt,this._logHandler=te,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Qt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Jt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Qt.DEBUG,...t),this._logHandler(this,Qt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Qt.VERBOSE,...t),this._logHandler(this,Qt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Qt.INFO,...t),this._logHandler(this,Qt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Qt.WARN,...t),this._logHandler(this,Qt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Qt.ERROR,...t),this._logHandler(this,Qt.ERROR,...t)}}let ne,se;const ie=new WeakMap,re=new WeakMap,oe=new WeakMap,ae=new WeakMap,ce=new WeakMap;let ue={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return re.get(t);if("objectStoreNames"===e)return t.objectStoreNames||oe.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return de(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function le(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(se||(se=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(fe(this),e),de(ie.get(this))}:function(...e){return de(t.apply(fe(this),e))}:function(e,...n){const s=t.call(fe(this),e,...n);return oe.set(s,e.sort?e.sort():[e]),de(s)}}function he(t){return"function"==typeof t?le(t):(t instanceof IDBTransaction&&function(t){if(re.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));re.set(t,e)}(t),e=t,(ne||(ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ue):t);var e}function de(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(de(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&ie.set(e,t)})).catch((()=>{})),ce.set(e,t),e}(t);if(ae.has(t))return ae.get(t);const e=he(t);return e!==t&&(ae.set(t,e),ce.set(e,t)),e}const fe=t=>ce.get(t);const pe=["get","getKey","getAll","getAllKeys","count"],ge=["put","add","delete","clear"],me=new Map;function ye(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(me.get(e))return me.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ge.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!pe.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return me.set(e,r),r}ue=(t=>({...t,get:(e,n,s)=>ye(e,n)||t.get(e,n,s),has:(e,n)=>!!ye(e,n)||t.has(e,n)}))(ue);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ve{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const we="@firebase/app",Ee="0.9.13",Te=new ee("@firebase/app"),be="@firebase/app-compat",Ie="@firebase/analytics-compat",_e="@firebase/analytics",Se="@firebase/app-check-compat",Ce="@firebase/app-check",ke="@firebase/auth",Ae="@firebase/auth-compat",Ne="@firebase/database",De="@firebase/database-compat",Re="@firebase/functions",Oe="@firebase/functions-compat",Le="@firebase/installations",Pe="@firebase/installations-compat",xe="@firebase/messaging",Me="@firebase/messaging-compat",Ue="@firebase/performance",Fe="@firebase/performance-compat",$e="@firebase/remote-config",Ve="@firebase/remote-config-compat",je="@firebase/storage",Be="@firebase/storage-compat",qe="@firebase/firestore",ze="@firebase/firestore-compat",He="firebase",Ke="[DEFAULT]",Ge={[we]:"fire-core",[be]:"fire-core-compat",[_e]:"fire-analytics",[Ie]:"fire-analytics-compat",[Ce]:"fire-app-check",[Se]:"fire-app-check-compat",[ke]:"fire-auth",[Ae]:"fire-auth-compat",[Ne]:"fire-rtdb",[De]:"fire-rtdb-compat",[Re]:"fire-fn",[Oe]:"fire-fn-compat",[Le]:"fire-iid",[Pe]:"fire-iid-compat",[xe]:"fire-fcm",[Me]:"fire-fcm-compat",[Ue]:"fire-perf",[Fe]:"fire-perf-compat",[$e]:"fire-rc",[Ve]:"fire-rc-compat",[je]:"fire-gcs",[Be]:"fire-gcs-compat",[qe]:"fire-fst",[ze]:"fire-fst-compat","fire-js":"fire-js",[He]:"fire-js-all"},Ye=new Map,We=new Map;function Qe(t,e){try{t.container.addComponent(e)}catch(n){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Je(t){const e=t.name;if(We.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;We.set(e,t);for(const e of Ye.values())Qe(e,t);return!0}function Xe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ze=new Ft("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tn{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Kt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const en="9.23.0";function nn(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:Ke,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(n||(n=Lt()),!n)throw Ze.create("no-options");const r=Ye.get(i);if(r){if(Vt(n,r.options)&&Vt(s,r.config))return r;throw Ze.create("duplicate-app",{appName:i})}const o=new Wt(i);for(const t of We.values())o.addComponent(t);const a=new tn(n,s,o);return Ye.set(i,a),a}function sn(t=Ke){const e=Ye.get(t);if(!e&&t===Ke&&Lt())return nn();if(!e)throw Ze.create("no-app",{appName:t});return e}function rn(t,e,n){var s;let i=null!==(s=Ge[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Te.warn(t.join(" "))}Je(new Kt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const on="firebase-heartbeat-store";let an=null;function cn(){return an||(an=function(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=de(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(de(o.result),t.oldVersion,t.newVersion,de(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(on)}}).catch((t=>{throw Ze.create("idb-open",{originalErrorMessage:t.message})}))),an}async function un(t,e){try{const n=(await cn()).transaction(on,"readwrite"),s=n.objectStore(on);await s.put(e,ln(t)),await n.done}catch(t){if(t instanceof Ut)Te.warn(t.message);else{const e=Ze.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Te.warn(e.message)}}}function ln(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hn{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new fn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=dn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=dn(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),pn(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=At(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dn(){return(new Date).toISOString().substring(0,10)}class fn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await cn();return await e.transaction(on).objectStore(on).get(ln(t))}catch(t){if(t instanceof Ut)Te.warn(t.message);else{const e=Ze.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Te.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return un(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return un(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function pn(t){return At(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var gn;gn="",Je(new Kt("platform-logger",(t=>new ve(t)),"PRIVATE")),Je(new Kt("heartbeat",(t=>new hn(t)),"PRIVATE")),rn(we,Ee,gn),rn(we,Ee,"esm2017"),rn("fire-js","");var mn,yn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},vn=vn||{},wn=yn||self;function En(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Tn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var bn="closure_uid_"+(1e9*Math.random()>>>0),In=0;function _n(t,e,n){return t.call.apply(t.bind,arguments)}function Sn(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Cn(t,e,n){return(Cn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_n:Sn).apply(null,arguments)}function kn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function An(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Nn(){this.s=this.s,this.o=this.o}Nn.prototype.s=!1,Nn.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,bn)&&t[bn]||(t[bn]=++In))},Nn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rn(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function On(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(En(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function Ln(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ln.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!wn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{wn.addEventListener("test",(()=>{}),e),wn.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function xn(t){return/^[\s\xa0]*$/.test(t)}function Mn(){var t=wn.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return-1!=Mn().indexOf(t)}function Fn(t){return Fn[" "](t),t}Fn[" "]=function(){};var $n,Vn,jn,Bn=Un("Opera"),qn=Un("Trident")||Un("MSIE"),zn=Un("Edge"),Hn=zn||qn,Kn=Un("Gecko")&&!(-1!=Mn().toLowerCase().indexOf("webkit")&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),Gn=-1!=Mn().toLowerCase().indexOf("webkit")&&!Un("Edge");function Yn(){var t=wn.document;return t?t.documentMode:void 0}t:{var Wn="",Qn=(Vn=Mn(),Kn?/rv:([^\);]+)(\)|;)/.exec(Vn):zn?/Edge\/([\d\.]+)/.exec(Vn):qn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Vn):Gn?/WebKit\/(\S+)/.exec(Vn):Bn?/(?:Version)[ \/]?(\S+)/.exec(Vn):void 0);if(Qn&&(Wn=Qn?Qn[1]:""),qn){var Jn=Yn();if(null!=Jn&&Jn>parseFloat(Wn)){$n=String(Jn);break t}}$n=Wn}if(wn.document&&qn){var Xn=Yn();jn=Xn||(parseInt($n,10)||void 0)}else jn=void 0;var Zn=jn;function ts(t,e){if(Ln.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kn){t:{try{Fn(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:es[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ts.$.h.call(this)}}An(ts,Ln);var es={2:"touch",3:"pen",4:"mouse"};ts.prototype.h=function(){ts.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ns="closure_listenable_"+(1e6*Math.random()|0),ss=0;function is(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++ss,this.fa=this.ia=!1}function rs(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function os(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function as(t){const e={};for(const n in t)e[n]=t[n];return e}const cs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function us(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<cs.length;e++)n=cs[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ls(t){this.src=t,this.g={},this.h=0}function hs(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Dn(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(rs(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ds(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}ls.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ds(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new is(e,this.src,r,!!s,i)).ia=n,t.push(e)),e};var fs="closure_lm_"+(1e6*Math.random()|0),ps={};function gs(t,e,n,s,i){if(s&&s.once)return ys(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)gs(t,e[r],n,s,i);return null}return n=_s(n),t&&t[ns]?t.O(e,n,Tn(s)?!!s.capture:!!s,i):ms(t,e,n,!1,s,i)}function ms(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Tn(i)?!!i.capture:!!i,a=bs(t);if(a||(t[fs]=a=new ls(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ts;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Pn||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Es(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function ys(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ys(t,e[r],n,s,i);return null}return n=_s(n),t&&t[ns]?t.P(e,n,Tn(s)?!!s.capture:!!s,i):ms(t,e,n,!0,s,i)}function vs(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)vs(t,e[r],n,s,i);else s=Tn(s)?!!s.capture:!!s,n=_s(n),t&&t[ns]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ds(r=t.g[e],n,s,i))&&(rs(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=bs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ds(e,n,s,i)),(n=-1<t?e[t]:null)&&ws(n))}function ws(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ns])hs(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Es(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=bs(e))?(hs(n,t),0==n.h&&(n.src=null,e[fs]=null)):rs(t)}}}function Es(t){return t in ps?ps[t]:ps[t]="on"+t}function Ts(t,e){if(t.fa)t=!0;else{e=new ts(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ws(t),t=n.call(s,e)}return t}function bs(t){return(t=t[fs])instanceof ls?t:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(t){return"function"==typeof t?t:(t[Is]||(t[Is]=function(e){return t.handleEvent(e)}),t[Is])}function Ss(){Nn.call(this),this.i=new ls(this),this.S=this,this.J=null}function Cs(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new Ln(e,t);else if(e instanceof Ln)e.target=e.target||t;else{var i=e;us(e=new Ln(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ks(o,s,!0,e)&&i}if(i=ks(o=e.g=t,s,!0,e)&&i,i=ks(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=ks(o=e.g=n[r],s,!1,e)&&i}function ks(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hs(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}An(Ss,Nn),Ss.prototype[ns]=!0,Ss.prototype.removeEventListener=function(t,e,n,s){vs(this,t,e,n,s)},Ss.prototype.N=function(){if(Ss.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rs(n[s]);delete e.g[t],e.h--}}this.J=null},Ss.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ss.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var As=wn.JSON.stringify;function Ns(){var t=Ms;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ds=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Rs),(t=>t.reset()));class Rs{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Os(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ls(t){wn.setTimeout((()=>{throw t}),0)}let Ps,xs=!1,Ms=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ds.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Us=()=>{const t=wn.Promise.resolve(void 0);Ps=()=>{t.then(Fs)}};var Fs=()=>{for(var t;t=Ns();){try{t.h.call(t.g)}catch(t){Ls(t)}var e=Ds;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xs=!1};function $s(t,e){Ss.call(this),this.h=t||1,this.g=e||wn,this.j=Cn(this.qb,this),this.l=Date.now()}function Vs(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function js(t,e,n){if("function"==typeof t)n&&(t=Cn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Cn(t.handleEvent,t)}return 2147483647<Number(e)?-1:wn.setTimeout(t,e||0)}function Bs(t){t.g=js((()=>{t.g=null,t.i&&(t.i=!1,Bs(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}An($s,Ss),(mn=$s.prototype).ga=!1,mn.T=null,mn.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Cs(this,"tick"),this.ga&&(Vs(this),this.start()))}},mn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},mn.N=function(){$s.$.N.call(this),Vs(this),delete this.g};class qs extends Nn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bs(this)}N(){super.N(),this.g&&(wn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(t){Nn.call(this),this.h=t,this.g={}}An(zs,Nn);var Hs=[];function Ks(t,e,n,s){Array.isArray(n)||(n&&(Hs[0]=n.toString()),n=Hs);for(var i=0;i<n.length;i++){var r=gs(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Gs(t){os(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ws(t)}),t),t.g={}}function Ys(){this.g=!0}function Ws(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return As(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}zs.prototype.N=function(){zs.$.N.call(this),Gs(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ys.prototype.Ea=function(){this.g=!1},Ys.prototype.info=function(){};var Qs={},Js=null;function Xs(){return Js=Js||new Ss}function Zs(t){Ln.call(this,Qs.Ta,t)}function ti(t){const e=Xs();Cs(e,new Zs(e))}function ei(t,e){Ln.call(this,Qs.STAT_EVENT,t),this.stat=e}function ni(t){const e=Xs();Cs(e,new ei(e,t))}function si(t,e){Ln.call(this,Qs.Ua,t),this.size=e}function ii(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return wn.setTimeout((function(){t()}),e)}Qs.Ta="serverreachability",An(Zs,Ln),Qs.STAT_EVENT="statevent",An(ei,Ln),Qs.Ua="timingevent",An(si,Ln);var ri={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ai(){}function ci(t){return t.h||(t.h=t.i())}function ui(){}ai.prototype.h=null;var li,hi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function di(){Ln.call(this,"d")}function fi(){Ln.call(this,"c")}function pi(){}function gi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new zs(this),this.P=yi,t=Hn?125:void 0,this.V=new $s(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mi}function mi(){this.i=null,this.g="",this.h=!1}An(di,Ln),An(fi,Ln),An(pi,ai),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},li=new pi;var yi=45e3,vi={},wi={};function Ei(t,e,n){t.L=1,t.v=$i(Pi(e)),t.s=n,t.S=!0,Ti(t,null)}function Ti(t,e){t.G=Date.now(),Si(t),t.A=Pi(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Xi(n.i,"t",s),t.C=0,n=t.l.J,t.h=new mi,t.g=Xr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new qs(Cn(t.Pa,t,t.g),t.O)),Ks(t.U,t.g,"readystatechange",t.nb),e=t.I?as(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ti(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function bi(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Ii(t,e,n){let s,i=!0;for(;!t.J&&t.C<n.length;){if(s=_i(t,n),s==wi){4==e&&(t.o=4,ni(14),i=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}if(s==vi){t.o=4,ni(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ws(t.j,t.m,s,null),Di(t,s)}bi(t)&&s!=wi&&s!=vi&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ni(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zr(e),e.M=!0,ni(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),Ni(t),Ai(t))}function _i(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?wi:(n=Number(e.substring(n,s)),isNaN(n)?vi:(s+=1)+n>e.length?wi:(e=e.slice(s,s+n),t.C=s+n,e))}function Si(t){t.Y=Date.now()+t.P,Ci(t,t.P)}function Ci(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ii(Cn(t.lb,t),e)}function ki(t){t.B&&(wn.clearTimeout(t.B),t.B=null)}function Ai(t){0==t.l.H||t.J||Gr(t.l,t)}function Ni(t){ki(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vs(t.V),Gs(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Di(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||rr(n.i,t)))if(!t.K&&rr(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Kr(n),Mr(n)}qr(n),ni(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ii(Cn(n.ib,n),6e3));if(1>=ir(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Wr(n,11)}else if((t.K||n.g==t)&&Kr(n),!xn(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(s=1.5*l,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(or(r,r.h),r.h=null))}if(s.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,Fi(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=Jr(s,s.J?s.pa:null,s.Y),o.K){ar(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(ki(a),Si(a)),s.g=o}else Br(s);0<n.j.length&&Fr(n)}else"stop"!=u[0]&&"close"!=u[0]||Wr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Wr(n,7):xr(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ti()}catch(t){}}function Ri(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(En(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(En(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(En(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(mn=gi.prototype).setTimeout=function(t){this.P=t},mn.nb=function(t){t=t.target;const e=this.M;e&&3==Nr(t)?e.l():this.Pa(t)},mn.Pa=function(t){try{if(t==this.g)t:{const l=Nr(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Hn||this.g&&(this.h.h||this.g.ja()||Dr(this.g)))){this.J||4!=l||7==e||ti(),ki(this);var n=this.g.da();this.ca=n;e:if(bi(this)){var s=Dr(this.g);t="";var i=s.length,r=4==Nr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ni(this),Ai(this);var o="";break e}this.h.i=new wn.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xn(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ni(12),Ni(this),Ai(this);break t}Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Di(this,n)}this.S?(Ii(this,l,o),Hn&&this.i&&3==l&&(Ks(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),Di(this,o)),4==l&&Ni(this),this.i&&!this.J&&(4==l?Gr(this.l,this):(this.i=!1,Si(this)))}else(function(t){const e={};t=(t.g&&2<=Nr(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(xn(t[s]))continue;var n=Os(t[s]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ni(12)):(this.o=0,ni(13)),Ni(this),Ai(this)}}}catch(t){}},mn.mb=function(){if(this.g){var t=Nr(this.g),e=this.g.ja();this.C<e.length&&(ki(this),Ii(this,t,e),this.i&&4!=t&&Si(this))}},mn.cancel=function(){this.J=!0,Ni(this)},mn.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(ti(),ni(17)),Ni(this),this.o=2,Ai(this)):Ci(this,this.Y-t)};var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Li(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Li){this.h=t.h,xi(this,t.j),this.s=t.s,this.g=t.g,Mi(this,t.m),this.l=t.l;var e=t.i,n=new Yi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ui(this,n),this.o=t.o}else t&&(e=String(t).match(Oi))?(this.h=!1,xi(this,e[1]||"",!0),this.s=Vi(e[2]||""),this.g=Vi(e[3]||"",!0),Mi(this,e[4]),this.l=Vi(e[5]||"",!0),Ui(this,e[6]||"",!0),this.o=Vi(e[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}function Pi(t){return new Li(t)}function xi(t,e,n){t.j=n?Vi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ui(t,e,n){e instanceof Yi?(t.i=e,function(t,e){e&&!t.j&&(Wi(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Qi(this,e),Xi(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ji(e,Ki)),t.i=new Yi(e,t.h))}function Fi(t,e,n){t.i.set(e,n)}function $i(t){return Fi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ji(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Bi),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bi(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Li.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ji(e,qi,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ji(e,qi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ji(n,"/"==n.charAt(0)?Hi:zi,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ji(n,Gi)),t.join("")};var qi=/[#\/\?@]/g,zi=/[#\?:]/g,Hi=/[#\?]/g,Ki=/[#\?@]/g,Gi=/#/g;function Yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wi(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Qi(t,e){Wi(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ji(t,e){return Wi(t),e=Zi(t,e),t.g.has(e)}function Xi(t,e,n){Qi(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),Rn(n)),t.h+=n.length)}function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(mn=Yi.prototype).add=function(t,e){Wi(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},mn.forEach=function(t,e){Wi(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},mn.ta=function(){Wi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},mn.Z=function(t){Wi(this);let e=[];if("string"==typeof t)Ji(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},mn.set=function(t,e){return Wi(this),this.i=null,Ji(this,t=Zi(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},mn.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},mn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};var tr=class{constructor(t,e){this.g=t,this.map=e}};function er(t){this.l=t||nr,wn.PerformanceNavigationTiming?t=0<(t=wn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(wn.g&&wn.g.Ka&&wn.g.Ka()&&wn.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nr=10;function sr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ir(t){return t.h?1:t.g?t.g.size:0}function rr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function or(t,e){t.g?t.g.add(e):t.h=e}function ar(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function cr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Rn(t.i)}er.prototype.cancel=function(){if(this.i=cr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ur=class{stringify(t){return wn.JSON.stringify(t,void 0)}parse(t){return wn.JSON.parse(t,void 0)}};function lr(){this.g=new ur}function hr(t,e,n){const s=n||"";try{Ri(t,(function(t,n){let i=t;Tn(t)&&(i=As(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function dr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function fr(t){this.l=t.fc||null,this.j=t.ob||!1}function pr(t,e){Ss.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}An(fr,ai),fr.prototype.g=function(){return new pr(this.l,this.j)},fr.prototype.i=function(t){return function(){return t}}({}),An(pr,Ss);var gr=0;function mr(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function yr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vr(t)}function vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(mn=pr.prototype).open=function(t,e){if(this.readyState!=gr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vr(this)},mn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||wn).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},mn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,yr(this)),this.readyState=gr},mn.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==wn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mr(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},mn.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yr(this):vr(this),3==this.readyState&&mr(this)}},mn.Za=function(t){this.g&&(this.response=this.responseText=t,yr(this))},mn.Ya=function(t){this.g&&(this.response=t,yr(this))},mn.ka=function(){this.g&&yr(this)},mn.setRequestHeader=function(t,e){this.v.append(t,e)},mn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},mn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var wr=wn.JSON.parse;function Er(t){Ss.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tr,this.L=this.M=!1}An(Er,Ss);var Tr="",br=/^https?$/i,Ir=["POST","PUT"];function _r(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sr(t),kr(t)}function Sr(t){t.F||(t.F=!0,Cs(t,"complete"),Cs(t,"error"))}function Cr(t){if(t.h&&void 0!==vn&&(!t.C[1]||4!=Nr(t)||2!=t.da()))if(t.v&&4==Nr(t))js(t.La,0,t);else if(Cs(t,"readystatechange"),4==Nr(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var i=String(t.I).match(Oi)[1]||null;!i&&wn.self&&wn.self.location&&(i=wn.self.location.protocol.slice(0,-1)),s=!br.test(i?i.toLowerCase():"")}n=s}if(n)Cs(t,"complete"),Cs(t,"success");else{t.m=6;try{var r=2<Nr(t)?t.g.statusText:""}catch(t){r=""}t.j=r+" ["+t.da()+"]",Sr(t)}}finally{kr(t)}}}function kr(t,e){if(t.g){Ar(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Cs(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Ar(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(wn.clearTimeout(t.A),t.A=null)}function Nr(t){return t.g?t.g.readyState:0}function Dr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Tr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Rr(t){let e="";return os(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Or(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Rr(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Fi(t,e,n))}function Lr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pr(t){this.Ga=0,this.j=[],this.l=new Ys,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Lr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Lr("baseRetryDelayMs",5e3,t),this.hb=Lr("retryDelaySeedMs",1e4,t),this.eb=Lr("forwardChannelMaxRetries",2,t),this.xa=Lr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new er(t&&t.concurrentRequestLimit),this.Ja=new lr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function xr(t){if(Ur(t),3==t.H){var e=t.W++,n=Pi(t.I);if(Fi(n,"SID",t.K),Fi(n,"RID",e),Fi(n,"TYPE","terminate"),Vr(t,n),(e=new gi(t,t.l,e)).L=2,e.v=$i(Pi(n)),n=!1,wn.navigator&&wn.navigator.sendBeacon)try{n=wn.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&wn.Image&&((new Image).src=e.v,n=!0),n||(e.g=Xr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Si(e)}Qr(t)}function Mr(t){t.g&&(zr(t),t.g.cancel(),t.g=null)}function Ur(t){Mr(t),t.u&&(wn.clearTimeout(t.u),t.u=null),Kr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&wn.clearTimeout(t.m),t.m=null)}function Fr(t){if(!sr(t.i)&&!t.m){t.m=!0;var e=t.Na;Ps||Us(),xs||(Ps(),xs=!0),Ms.add(e,t),t.C=0}}function $r(t,e){var n;n=e?e.m:t.W++;const s=Pi(t.I);Fi(s,"SID",t.K),Fi(s,"RID",n),Fi(s,"AID",t.V),Vr(t,s),t.o&&t.s&&Or(s,t.o,t.s),n=new gi(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),or(t.i,n),Ei(n,s,e)}function Vr(t,e){t.na&&os(t.na,(function(t,n){Fi(e,n,t)})),t.h&&Ri({},(function(t,n){Fi(e,n,t)}))}function jr(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Cn(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),r=!1;else try{hr(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function Br(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ps||Us(),xs||(Ps(),xs=!0),Ms.add(e,t),t.A=0}}function qr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=ii(Cn(t.Ma,t),Yr(t,t.A)),t.A++,!0)}function zr(t){null!=t.B&&(wn.clearTimeout(t.B),t.B=null)}function Hr(t){t.g=new gi(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Pi(t.wa);Fi(e,"RID","rpc"),Fi(e,"SID",t.K),Fi(e,"AID",t.V),Fi(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fi(e,"TO",t.qa),Fi(e,"TYPE","xmlhttp"),Vr(t,e),t.o&&t.s&&Or(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=$i(Pi(e)),n.s=null,n.S=!0,Ti(n,t)}function Kr(t){null!=t.v&&(wn.clearTimeout(t.v),t.v=null)}function Gr(t,e){var n=null;if(t.g==e){Kr(t),zr(t),t.g=null;var s=2}else{if(!rr(t.i,e))return;n=e.F,ar(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;Cs(s=Xs(),new si(s,n)),Fr(t)}else Br(t);else if(3==(i=e.o)||0==i&&0<e.ca||!(1==s&&function(t,e){return!(ir(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=ii(Cn(t.Na,t,e),Yr(t,t.C)),t.C++,0)))}(t,e)||2==s&&qr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Wr(t,5);break;case 4:Wr(t,10);break;case 3:Wr(t,6);break;default:Wr(t,2)}}function Yr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wr(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=Cn(t.pb,t);n||(n=new Li("//www.google.com/images/cleardot.gif"),wn.location&&"http"==wn.location.protocol||xi(n,"https"),$i(n)),function(t,e){const n=new Ys;if(wn.Image){const s=new Image;s.onload=kn(dr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=kn(dr,n,s,"TestLoadImage: error",!1,e),s.onabort=kn(dr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=kn(dr,n,s,"TestLoadImage: timeout",!1,e),wn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else ni(2);t.H=0,t.h&&t.h.za(e),Qr(t),Ur(t)}function Qr(t){if(t.H=0,t.ma=[],t.h){const e=cr(t.i);0==e.length&&0==t.j.length||(On(t.ma,e),On(t.ma,t.j),t.i.i.length=0,Rn(t.j),t.j.length=0),t.h.ya()}}function Jr(t,e,n){var s=n instanceof Li?Pi(n):new Li(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Mi(s,s.m);else{var i=wn.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Li(null);s&&xi(r,s),e&&(r.g=e),i&&Mi(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Fi(s,n,e),Fi(s,"VER",t.ra),Vr(t,s),s}function Xr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Er(new fr({ob:!0})):new Er(t.va)).Oa(t.J),e}function Zr(){}function to(){if(qn&&!(10<=Number(Zn)))throw Error("Environmental error: no available transport.")}function eo(t,e){Ss.call(this),this.g=new Pr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!xn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xn(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new io(this)}function no(t){di.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function so(){fi.call(this),this.status=1}function io(t){this.g=t}function ro(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function oo(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(e^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function ao(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}(mn=Er.prototype).Oa=function(t){this.M=t},mn.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():li.g(),this.C=this.u?ci(this.u):ci(li),this.g.onreadystatechange=Cn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void _r(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=wn.FormData&&t instanceof wn.FormData,!(0<=Dn(Ir,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ar(this),0<this.B&&((this.L=function(t){return qn&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Cn(this.ua,this)):this.A=js(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){_r(this,t)}},mn.ua=function(){void 0!==vn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Cs(this,"timeout"),this.abort(8))},mn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Cs(this,"complete"),Cs(this,"abort"),kr(this))},mn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kr(this,!0)),Er.$.N.call(this)},mn.La=function(){this.s||(this.G||this.v||this.l?Cr(this):this.kb())},mn.kb=function(){Cr(this)},mn.isActive=function(){return!!this.g},mn.da=function(){try{return 2<Nr(this)?this.g.status:-1}catch(t){return-1}},mn.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},mn.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),wr(e)}},mn.Ia=function(){return this.m},mn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(mn=Pr.prototype).ra=8,mn.H=1,mn.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new gi(this,this.l,t);let r=this.s;if(this.U&&(r?(r=as(r),us(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=jr(this,i,e),Fi(n=Pi(this.I),"RID",t),Fi(n,"CVER",22),this.F&&Fi(n,"X-HTTP-Session-Id",this.F),Vr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Rr(r)))+"&"+e:this.o&&Or(n,this.o,r)),or(this.i,i),this.bb&&Fi(n,"TYPE","init"),this.P?(Fi(n,"$req",e),Fi(n,"SID","null"),i.aa=!0,Ei(i,n,null)):Ei(i,n,e),this.H=2}}else 3==this.H&&(t?$r(this,t):0==this.j.length||sr(this.i)||$r(this))},mn.Ma=function(){if(this.u=null,Hr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ii(Cn(this.jb,this),t)}},mn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ni(10),Mr(this),Hr(this))},mn.ib=function(){null!=this.v&&(this.v=null,Mr(this),qr(this),ni(19))},mn.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ni(2)):(this.l.info("Failed to ping google.com"),ni(1))},mn.isActive=function(){return!!this.h&&this.h.isActive(this)},(mn=Zr.prototype).Ba=function(){},mn.Aa=function(){},mn.za=function(){},mn.ya=function(){},mn.isActive=function(){return!0},mn.Va=function(){},to.prototype.g=function(t,e){return new eo(t,e)},An(eo,Ss),eo.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ni(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jr(t,null,t.Y),Fr(t)},eo.prototype.close=function(){xr(this.g)},eo.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=As(t),t=n);e.j.push(new tr(e.fb++,t)),3==e.H&&Fr(e)},eo.prototype.N=function(){this.g.h=null,delete this.j,xr(this.g),delete this.g,eo.$.N.call(this)},An(no,di),An(so,fi),An(io,Zr),io.prototype.Ba=function(){Cs(this.g,"a")},io.prototype.Aa=function(t){Cs(this.g,new no(t))},io.prototype.za=function(t){Cs(this.g,new so)},io.prototype.ya=function(){Cs(this.g,"b")},An(ro,(function(){this.blockSize=-1})),ro.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ro.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(0==i)for(;r<=n;)oo(this,t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){oo(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){oo(this,s),i=0;break}}this.h=i,this.i+=e},ro.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var co={};function uo(t){return-128<=t&&128>t?function(t,e){var n=co;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new ao([0|t],0>t?-1:0)})):new ao([0|t],0>t?-1:0)}function lo(t){if(isNaN(t)||!isFinite(t))return fo;if(0>t)return vo(lo(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ho;return new ao(e,0)}var ho=4294967296,fo=uo(0),po=uo(1),go=uo(16777216);function mo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function yo(t){return-1==t.h}function vo(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ao(n,~t.h).add(po)}function wo(t,e){return t.add(vo(e))}function Eo(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function To(t,e){this.g=t,this.h=e}function bo(t,e){if(mo(e))throw Error("division by zero");if(mo(t))return new To(fo,fo);if(yo(t))return e=bo(vo(t),e),new To(vo(e.g),vo(e.h));if(yo(e))return e=bo(t,vo(e)),new To(vo(e.g),e.h);if(30<t.g.length){if(yo(t)||yo(e))throw Error("slowDivide_ only works with positive integers.");for(var n=po,s=e;0>=s.X(t);)n=Io(n),s=Io(s);var i=_o(n,1),r=_o(s,1);for(s=_o(s,2),n=_o(n,2);!mo(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=_o(s,1),n=_o(n,1)}return e=wo(t,i.R(e)),new To(i,e)}for(i=fo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(r=lo(n)).R(e);yo(o)||0<o.X(t);)o=(r=lo(n-=s)).R(e);mo(r)&&(r=po),i=i.add(r),t=wo(t,o)}return new To(i,t)}function Io(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ao(n,t.h)}function _o(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ao(i,t.h)}(mn=ao.prototype).ea=function(){if(yo(this))return-vo(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ho+s)*e,e*=ho}return t},mn.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(mo(this))return"0";if(yo(this))return"-"+vo(this).toString(t);for(var e=lo(Math.pow(t,6)),n=this,s="";;){var i=bo(n,e).g,r=((0<(n=wo(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(mo(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},mn.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},mn.X=function(t){return yo(t=wo(this,t))?-1:mo(t)?0:1},mn.abs=function(){return yo(this)?vo(this):this},mn.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(65535&this.D(i))+(65535&t.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ao(n,-2147483648&n[n.length-1]?-1:0)},mn.R=function(t){if(mo(this)||mo(t))return fo;if(yo(this))return yo(t)?vo(this).R(vo(t)):vo(vo(this).R(t));if(yo(t))return vo(this.R(vo(t)));if(0>this.X(go)&&0>t.X(go))return lo(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=t.D(i)>>>16,c=65535&t.D(i);n[2*s+2*i]+=o*c,Eo(n,2*s+2*i),n[2*s+2*i+1]+=r*c,Eo(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Eo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Eo(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ao(n,0)},mn.gb=function(t){return bo(this,t).h},mn.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ao(n,this.h&t.h)},mn.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ao(n,this.h|t.h)},mn.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ao(n,this.h^t.h)},to.prototype.createWebChannel=to.prototype.g,eo.prototype.send=eo.prototype.u,eo.prototype.open=eo.prototype.m,eo.prototype.close=eo.prototype.close,ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,oi.COMPLETE="complete",ui.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",Ss.prototype.listen=Ss.prototype.O,Er.prototype.listenOnce=Er.prototype.P,Er.prototype.getLastError=Er.prototype.Sa,Er.prototype.getLastErrorCode=Er.prototype.Ia,Er.prototype.getStatus=Er.prototype.da,Er.prototype.getResponseJson=Er.prototype.Wa,Er.prototype.getResponseText=Er.prototype.ja,Er.prototype.send=Er.prototype.ha,Er.prototype.setWithCredentials=Er.prototype.Oa,ro.prototype.digest=ro.prototype.l,ro.prototype.reset=ro.prototype.reset,ro.prototype.update=ro.prototype.j,ao.prototype.add=ao.prototype.add,ao.prototype.multiply=ao.prototype.R,ao.prototype.modulo=ao.prototype.gb,ao.prototype.compare=ao.prototype.X,ao.prototype.toNumber=ao.prototype.ea,ao.prototype.toString=ao.prototype.toString,ao.prototype.getBits=ao.prototype.D,ao.fromNumber=lo,ao.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return vo(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=lo(Math.pow(n,8)),i=fo,r=0;r<e.length;r+=8){var o=Math.min(8,e.length-r),a=parseInt(e.substring(r,r+o),n);8>o?(o=lo(Math.pow(n,o)),i=i.R(o).add(lo(a))):i=(i=i.R(s)).add(lo(a))}return i};var So=ri,Co=oi,ko=Qs,Ao=10,No=11,Do=fr,Ro=ui,Oo=Er,Lo=ro,Po=ao;const xo="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Mo.UNAUTHENTICATED=new Mo(null),Mo.GOOGLE_CREDENTIALS=new Mo("google-credentials-uid"),Mo.FIRST_PARTY=new Mo("first-party-uid"),Mo.MOCK_USER=new Mo("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Uo="9.23.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Fo=new ee("@firebase/firestore");function $o(){return Fo.logLevel}function Vo(t,...e){if(Fo.logLevel<=Qt.DEBUG){const n=e.map(qo);Fo.debug(`Firestore (${Uo}): ${t}`,...n)}}function jo(t,...e){if(Fo.logLevel<=Qt.ERROR){const n=e.map(qo);Fo.error(`Firestore (${Uo}): ${t}`,...n)}}function Bo(t,...e){if(Fo.logLevel<=Qt.WARN){const n=e.map(qo);Fo.warn(`Firestore (${Uo}): ${t}`,...n)}}function qo(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zo(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw jo(e),new Error(e)}function Ho(t,e){t||zo()}function Ko(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Go={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yo extends Ut{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Mo.UNAUTHENTICATED)))}shutdown(){}}class Xo{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zo{constructor(t){this.t=t,this.currentUser=Mo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Wo;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wo,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Vo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Vo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wo)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Vo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ho("string"==typeof e.accessToken),new Qo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ho(null===t||"string"==typeof t),new Mo(t)}}class ta{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Mo.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ea{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ta(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Mo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class na{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sa{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Vo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Vo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Vo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):Vo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ho("string"==typeof t.token),this.T=t.token,new na(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ia(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ra{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=ia(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function oa(t,e){return t<e?-1:t>e?1:0}function aa(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ca{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Yo(Go.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Yo(Go.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Yo(Go.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Yo(Go.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ca.fromMillis(Date.now())}static fromDate(t){return ca.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ca(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?oa(this.nanoseconds,t.nanoseconds):oa(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ua{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ua(t)}static min(){return new ua(new ca(0,0))}static max(){return new ua(new ca(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class la{constructor(t,e,n){void 0===e?e=0:e>t.length&&zo(),void 0===n?n=t.length-e:n>t.length-e&&zo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===la.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof la?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ha extends la{construct(t,e,n){return new ha(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Yo(Go.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ha(e)}static emptyPath(){return new ha([])}}const da=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fa extends la{construct(t,e,n){return new fa(t,e,n)}static isValidIdentifier(t){return da.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fa.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new fa(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Yo(Go.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Yo(Go.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Yo(Go.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Yo(Go.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new fa(e)}static emptyPath(){return new fa([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pa{constructor(t){this.path=t}static fromPath(t){return new pa(ha.fromString(t))}static fromName(t){return new pa(ha.fromString(t).popFirst(5))}static empty(){return new pa(ha.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ha.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ha.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pa(new ha(t.slice()))}}function ga(t){return new ma(t.readTime,t.key,-1)}class ma{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ma(ua.min(),pa.empty(),-1)}static max(){return new ma(ua.max(),pa.empty(),-1)}}function ya(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=pa.comparator(t.documentKey,e.documentKey),0!==n?n:oa(t.largestBatchId,e.largestBatchId)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */)}class va{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function wa(t){if(t.code!==Go.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Vo("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ea{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&zo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ea(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ea?e:Ea.resolve(e)}catch(t){return Ea.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.reject(e)}static resolve(t){return new Ea(((e,n)=>{e(t)}))}static reject(t){return new Ea(((e,n)=>{n(t)}))}static waitFor(t){return new Ea(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Ea.resolve(!1);for(const n of t)e=e.next((t=>t?Ea.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Ea(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Ea(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function Ta(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ba{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Ia(t){return null==t}function _a(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Sa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ca(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ka(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ba.ct=-1;class Aa{constructor(t,e){this.comparator=t,this.root=e||Da.EMPTY}insert(t,e){return new Aa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Da.BLACK,null,null))}remove(t){return new Aa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Da.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Na(this.root,t,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Na(this.root,t,this.comparator,!0)}}class Na{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Da{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Da.RED,this.left=null!=s?s:Da.EMPTY,this.right=null!=i?i:Da.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Da(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Da.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Da.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Da.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Da.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw zo();if(this.right.isRed())throw zo();const t=this.left.check();if(t!==this.right.check())throw zo();return t+(this.isRed()?0:1)}}Da.EMPTY=null,Da.RED=!0,Da.BLACK=!1,Da.EMPTY=new class{constructor(){this.size=0}get key(){throw zo()}get value(){throw zo()}get color(){throw zo()}get left(){throw zo()}get right(){throw zo()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Da(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ra{constructor(t){this.comparator=t,this.data=new Aa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oa(this.data.getIterator())}getIteratorFrom(t){return new Oa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ra))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ra(this.comparator);return e.data=t,e}}class Oa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class La{constructor(t){this.fields=t,t.sort(fa.comparator)}static empty(){return new La([])}unionWith(t){let e=new Ra(fa.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new La(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return aa(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Pa("Invalid base64 string: "+t):t}}(t);return new xa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return oa(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xa.EMPTY_BYTE_STRING=new xa("");const Ma=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ua(t){if(Ho(!!t),"string"==typeof t){let e=0;const n=Ma.exec(t);if(Ho(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fa(t.seconds),nanos:Fa(t.nanos)}}function Fa(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function $a(t){return"string"==typeof t?xa.fromBase64String(t):xa.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Va(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ja(t){const e=t.mapValue.fields.__previous_value__;return Va(e)?ja(e):e}function Ba(t){const e=Ua(t.mapValue.fields.__local_write_time__.timestampValue);return new ca(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qa{constructor(t,e,n,s,i,r,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class za{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof za&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ha={fields:{__type__:{stringValue:"__max__"}}};function Ka(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Va(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:10:zo()}function Ga(t,e){if(t===e)return!0;const n=Ka(t);if(n!==Ka(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ba(t).isEqual(Ba(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ua(t.timestampValue),s=Ua(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return $a(t.bytesValue).isEqual($a(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Fa(t.geoPointValue.latitude)===Fa(e.geoPointValue.latitude)&&Fa(t.geoPointValue.longitude)===Fa(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Fa(t.integerValue)===Fa(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Fa(t.doubleValue),s=Fa(e.doubleValue);return n===s?_a(n)===_a(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return aa(t.arrayValue.values||[],e.arrayValue.values||[],Ga);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Sa(n)!==Sa(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Ga(n[t],s[t])))return!1;return!0}(t,e);default:return zo()}}function Ya(t,e){return void 0!==(t.values||[]).find((t=>Ga(t,e)))}function Wa(t,e){if(t===e)return 0;const n=Ka(t),s=Ka(e);if(n!==s)return oa(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oa(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Fa(t.integerValue||t.doubleValue),s=Fa(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Qa(t.timestampValue,e.timestampValue);case 4:return Qa(Ba(t),Ba(e));case 5:return oa(t.stringValue,e.stringValue);case 6:return function(t,e){const n=$a(t),s=$a(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=oa(n[t],s[t]);if(0!==e)return e}return oa(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=oa(Fa(t.latitude),Fa(e.latitude));return 0!==n?n:oa(Fa(t.longitude),Fa(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Wa(n[t],s[t]);if(e)return e}return oa(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ha&&e===Ha)return 0;if(t===Ha)return 1;if(e===Ha)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=oa(s[t],r[t]);if(0!==e)return e;const o=Wa(n[s[t]],i[r[t]]);if(0!==o)return o}return oa(s.length,r.length)}(t.mapValue,e.mapValue);default:throw zo()}}function Qa(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return oa(t,e);const n=Ua(t),s=Ua(e),i=oa(n.seconds,s.seconds);return 0!==i?i:oa(n.nanos,s.nanos)}function Ja(t){return Xa(t)}function Xa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ua(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$a(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,pa.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Xa(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Xa(t.fields[i])}`;return n+"}"}(t.mapValue):zo();var e,n}function Za(t){return!!t&&"integerValue"in t}function tc(t){return!!t&&"arrayValue"in t}function ec(t){return!!t&&"nullValue"in t}function nc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sc(t){return!!t&&"mapValue"in t}function ic(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ca(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ic(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ic(t.arrayValue.values[n]);return e}return Object.assign({},t)}class rc{constructor(t){this.value=t}static empty(){return new rc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!sc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ic(e)}setAll(t){let e=fa.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=ic(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());sc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ga(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];sc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ca(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new rc(ic(this.value))}}function oc(t){const e=[];return Ca(t.fields,((t,n)=>{const s=new fa([t]);if(sc(n)){const t=oc(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new La(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class ac{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new ac(t,0,ua.min(),ua.min(),ua.min(),rc.empty(),0)}static newFoundDocument(t,e,n,s){return new ac(t,1,e,ua.min(),n,s,0)}static newNoDocument(t,e){return new ac(t,2,e,ua.min(),ua.min(),rc.empty(),0)}static newUnknownDocument(t,e){return new ac(t,3,e,ua.min(),ua.min(),rc.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ua.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ua.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ac&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ac(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cc{constructor(t,e){this.position=t,this.inclusive=e}}function uc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?pa.comparator(pa.fromName(o.referenceValue),n.key):Wa(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function lc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ga(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hc{constructor(t,e="asc"){this.field=t,this.dir=e}}function dc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fc{}class pc extends fc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Tc(t,e,n):"array-contains"===e?new Sc(t,n):"in"===e?new Cc(t,n):"not-in"===e?new kc(t,n):"array-contains-any"===e?new Ac(t,n):new pc(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new bc(t,n):new Ic(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Wa(e,this.value)):null!==e&&Ka(this.value)===Ka(e)&&this.matchesComparison(Wa(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return zo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gc extends fc{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new gc(t,e)}matches(t){return mc(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function mc(t){return"and"===t.op}function yc(t){return function(t){for(const e of t.filters)if(e instanceof gc)return!1;return!0}(t)&&mc(t)}function vc(t){if(t instanceof pc)return t.field.canonicalString()+t.op.toString()+Ja(t.value);if(yc(t))return t.filters.map((t=>vc(t))).join(",");{const e=t.filters.map((t=>vc(t))).join(",");return`${t.op}(${e})`}}function wc(t,e){return t instanceof pc?function(t,e){return e instanceof pc&&t.op===e.op&&t.field.isEqual(e.field)&&Ga(t.value,e.value)}(t,e):t instanceof gc?function(t,e){return e instanceof gc&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&wc(n,e.filters[s])),!0)}(t,e):void zo()}function Ec(t){return t instanceof pc?function(t){return`${t.field.canonicalString()} ${t.op} ${Ja(t.value)}`}(t):t instanceof gc?function(t){return t.op.toString()+" {"+t.getFilters().map(Ec).join(" ,")+"}"}(t):"Filter"}class Tc extends pc{constructor(t,e,n){super(t,e,n),this.key=pa.fromName(n.referenceValue)}matches(t){const e=pa.comparator(t.key,this.key);return this.matchesComparison(e)}}class bc extends pc{constructor(t,e){super(t,"in",e),this.keys=_c("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ic extends pc{constructor(t,e){super(t,"not-in",e),this.keys=_c("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function _c(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>pa.fromName(t.referenceValue)))}class Sc extends pc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return tc(e)&&Ya(e.arrayValue,this.value)}}class Cc extends pc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ya(this.value.arrayValue,e)}}class kc extends pc{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ya(this.value.arrayValue,e)}}class Ac extends pc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!tc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ya(this.value.arrayValue,t)))}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nc{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.dt=null}}function Dc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Nc(t,e,n,s,i,r,o)}function Rc(t){const e=Ko(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>vc(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ia(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ja(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ja(t))).join(",")),e.dt=t}return e.dt}function Oc(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dc(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lc(t.startAt,e.startAt)&&lc(t.endAt,e.endAt)}function Lc(t){return pa.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pc{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function xc(t){return new Pc(t)}function Mc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Uc(t){const e=Ko(t);if(null===e.wt){e.wt=[];const t=function(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new hc(t)),e.wt.push(new hc(fa.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new hc(fa.keyField(),t))}}}return e.wt}function Fc(t){const e=Ko(t);if(!e._t)if("F"===e.limitType)e._t=Dc(e.path,e.collectionGroup,Uc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Uc(e)){const e="desc"===n.dir?"asc":"desc";t.push(new hc(n.field,e))}const n=e.endAt?new cc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new cc(e.startAt.position,e.startAt.inclusive):null;e._t=Dc(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function $c(t,e,n){return new Pc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vc(t,e){return Oc(Fc(t),Fc(e))&&t.limitType===e.limitType}function jc(t){return`${Rc(Fc(t))}|lt:${t.limitType}`}function Bc(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ec(t))).join(", ")}]`),Ia(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ja(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ja(t))).join(",")),`Target(${e})`}(Fc(t))}; limitType=${t.limitType})`}function qc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):pa.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Uc(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=uc(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Uc(t),e))&&!(t.endAt&&!function(t,e,n){const s=uc(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Uc(t),e))}(t,e)}function zc(t){return(e,n)=>{let s=!1;for(const i of Uc(t)){const t=Hc(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Hc(t,e,n){const s=t.field.isKeyField()?pa.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Wa(s,i):zo()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return zo()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ca(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return ka(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gc=new Aa(pa.comparator);function Yc(){return Gc}const Wc=new Aa(pa.comparator);function Qc(...t){let e=Wc;for(const n of t)e=e.insert(n.key,n);return e}function Jc(t){let e=Wc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Xc(){return tu()}function Zc(){return tu()}function tu(){return new Kc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const eu=new Aa(pa.comparator),nu=new Ra(pa.comparator);function su(...t){let e=nu;for(const n of t)e=e.add(n);return e}const iu=new Ra(oa);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ru(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function ou(t){return{integerValue:""+t}}function au(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?ou(e):ru(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cu{constructor(){this._=void 0}}function uu(t,e,n){return t instanceof du?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Va(e)&&(e=ja(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof fu?pu(t,e):t instanceof gu?mu(t,e):function(t,e){const n=hu(t,e),s=vu(n)+vu(t.gt);return Za(n)&&Za(t.gt)?ou(s):ru(t.serializer,s)}(t,e)}function lu(t,e,n){return t instanceof fu?pu(t,e):t instanceof gu?mu(t,e):n}function hu(t,e){return t instanceof yu?Za(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class du extends cu{}class fu extends cu{constructor(t){super(),this.elements=t}}function pu(t,e){const n=wu(e);for(const e of t.elements)n.some((t=>Ga(t,e)))||n.push(e);return{arrayValue:{values:n}}}class gu extends cu{constructor(t){super(),this.elements=t}}function mu(t,e){let n=wu(e);for(const e of t.elements)n=n.filter((t=>!Ga(t,e)));return{arrayValue:{values:n}}}class yu extends cu{constructor(t,e){super(),this.serializer=t,this.gt=e}}function vu(t){return Fa(t.integerValue||t.doubleValue)}function wu(t){return tc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eu{constructor(t,e){this.field=t,this.transform=e}}class Tu{constructor(t,e){this.version=t,this.transformResults=e}}class bu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bu}static exists(t){return new bu(void 0,t)}static updateTime(t){return new bu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Iu(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _u{}function Su(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new xu(t.key,bu.none()):new Du(t.key,t.data,bu.none());{const n=t.data,s=rc.empty();let i=new Ra(fa.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Ru(t.key,s,new La(i.toArray()),bu.none())}}function Cu(t,e,n){t instanceof Du?function(t,e,n){const s=t.value.clone(),i=Lu(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ru?function(t,e,n){if(!Iu(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Lu(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ou(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ku(t,e,n,s){return t instanceof Du?function(t,e,n,s){if(!Iu(t.precondition,e))return n;const i=t.value.clone(),r=Pu(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ru?function(t,e,n,s){if(!Iu(t.precondition,e))return n;const i=Pu(t.fieldTransforms,s,e),r=e.data;return r.setAll(Ou(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Iu(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Au(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=hu(s.transform,t||null);null!=i&&(null===n&&(n=rc.empty()),n.set(s.field,i))}return n||null}function Nu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&aa(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof fu&&e instanceof fu||t instanceof gu&&e instanceof gu?aa(t.elements,e.elements,Ga):t instanceof yu&&e instanceof yu?Ga(t.gt,e.gt):t instanceof du&&e instanceof du}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Du extends _u{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ru extends _u{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ou(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Lu(t,e,n){const s=new Map;Ho(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,lu(o,a,n[i]))}return s}function Pu(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,uu(t,r,e))}return s}class xu extends _u{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mu extends _u{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uu{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Cu(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ku(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ku(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Zc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Su(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(ua.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),su())}isEqual(t){return this.batchId===t.batchId&&aa(this.mutations,t.mutations,((t,e)=>Nu(t,e)))&&aa(this.baseMutations,t.baseMutations,((t,e)=>Nu(t,e)))}}class Fu{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Ho(t.mutations.length===n.length);let s=eu;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Fu(t,e,n,s)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $u{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vu{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ju,Bu;function qu(t){if(void 0===t)return jo("GRPC error has no .code"),Go.UNKNOWN;switch(t){case ju.OK:return Go.OK;case ju.CANCELLED:return Go.CANCELLED;case ju.UNKNOWN:return Go.UNKNOWN;case ju.DEADLINE_EXCEEDED:return Go.DEADLINE_EXCEEDED;case ju.RESOURCE_EXHAUSTED:return Go.RESOURCE_EXHAUSTED;case ju.INTERNAL:return Go.INTERNAL;case ju.UNAVAILABLE:return Go.UNAVAILABLE;case ju.UNAUTHENTICATED:return Go.UNAUTHENTICATED;case ju.INVALID_ARGUMENT:return Go.INVALID_ARGUMENT;case ju.NOT_FOUND:return Go.NOT_FOUND;case ju.ALREADY_EXISTS:return Go.ALREADY_EXISTS;case ju.PERMISSION_DENIED:return Go.PERMISSION_DENIED;case ju.FAILED_PRECONDITION:return Go.FAILED_PRECONDITION;case ju.ABORTED:return Go.ABORTED;case ju.OUT_OF_RANGE:return Go.OUT_OF_RANGE;case ju.UNIMPLEMENTED:return Go.UNIMPLEMENTED;case ju.DATA_LOSS:return Go.DATA_LOSS;default:return zo()}}(Bu=ju||(ju={}))[Bu.OK=0]="OK",Bu[Bu.CANCELLED=1]="CANCELLED",Bu[Bu.UNKNOWN=2]="UNKNOWN",Bu[Bu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bu[Bu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bu[Bu.NOT_FOUND=5]="NOT_FOUND",Bu[Bu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bu[Bu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bu[Bu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bu[Bu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bu[Bu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bu[Bu.ABORTED=10]="ABORTED",Bu[Bu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bu[Bu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bu[Bu.INTERNAL=13]="INTERNAL",Bu[Bu.UNAVAILABLE=14]="UNAVAILABLE",Bu[Bu.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Hu}static getOrCreateInstance(){return null===Hu&&(Hu=new zu),Hu}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Hu=null;
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ku=new Po([4294967295,4294967295],0);function Gu(t){const e=(new TextEncoder).encode(t),n=new Lo;return n.update(e),new Uint8Array(n.digest())}function Yu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Po([n,s],0),new Po([i,r],0)]}class Wu{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Qu(`Invalid padding: ${e}`);if(n<0)throw new Qu(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Qu(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Qu(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Po.fromNumber(this.It)}Et(t,e,n){let s=t.add(e.multiply(Po.fromNumber(n)));return 1===s.compare(Ku)&&(s=new Po([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Gu(t),[n,s]=Yu(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,s,t);if(!this.At(e))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),r=new Wu(i,s,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.It)return;const e=Gu(t),[n,s]=Yu(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,s,t);this.Rt(e)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Qu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ju{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Xu.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ju(ua.min(),s,new Aa(oa),Yc(),su())}}class Xu{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Xu(n,e,su(),su(),su())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zu{constructor(t,e,n,s){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=s}}class tl{constructor(t,e){this.targetId=t,this.Vt=e}}class el{constructor(t,e,n=xa.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class nl{constructor(){this.St=0,this.Dt=rl(),this.Ct=xa.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=su(),e=su(),n=su();return this.Dt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:zo()}})),new Xu(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=rl()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class sl{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Yc(),this.zt=il(),this.Wt=new Aa(oa)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:zo()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,s=t.Vt.count,i=this.se(n);if(i){const r=i.target;if(Lc(r))if(0===s){const t=new pa(r.path);this.Yt(n,t,ac.newNoDocument(t,ua.min()))}else Ho(1===s);else{const i=this.ie(n);if(i!==s){const s=this.re(t,i);if(0!==s){this.ee(n);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=zu.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var s,i,r,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(s=null==l?void 0:l.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(r=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(s,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:s}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=n;let a,c;try{a=$a(i).toUint8Array()}catch(t){if(t instanceof Pa)return Bo("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new Wu(a,r,o)}catch(t){return Bo(t instanceof Qu?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:s!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let s=0;return n.forEach((n=>{const i=this.Gt.ue(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(r)||(this.Yt(t,n,null),s++)})),s}ce(t){const e=new Map;this.Qt.forEach(((n,s)=>{const i=this.se(s);if(i){if(n.current&&Lc(i.target)){const e=new pa(i.target.path);null!==this.jt.get(e)||this.ae(s,e)||this.Yt(s,e,ac.newNoDocument(e,t))}n.Mt&&(e.set(s,n.Ot()),n.Ft())}}));let n=su();this.zt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const s=new Ju(t,e,this.Wt,this.jt,n);return this.jt=Yc(),this.zt=il(),this.Wt=new Aa(oa),s}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const s=this.Zt(t);this.ae(t,e)?s.Bt(e,1):s.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new nl,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Ra(oa),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Vo("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new nl),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function il(){return new Aa(pa.comparator)}function rl(){return new Aa(pa.comparator)}const ol={asc:"ASCENDING",desc:"DESCENDING"},al={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cl={and:"AND",or:"OR"};class ul{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ll(t,e){return t.useProto3Json||Ia(e)?e:{value:e}}function hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dl(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fl(t,e){return hl(t,e.toTimestamp())}function pl(t){return Ho(!!t),ua.fromTimestamp(function(t){const e=Ua(t);return new ca(e.seconds,e.nanos)}(t))}function gl(t,e){return function(t){return new ha(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ml(t){const e=ha.fromString(t);return Ho(Pl(e)),e}function yl(t,e){return gl(t.databaseId,e.path)}function vl(t,e){const n=ml(e);if(n.get(1)!==t.databaseId.projectId)throw new Yo(Go.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Yo(Go.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pa(Tl(n))}function wl(t,e){return gl(t.databaseId,e)}function El(t){return new ha(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tl(t){return Ho(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function bl(t,e,n){return{name:yl(t,e),fields:n.value.mapValue.fields}}function Il(t,e){return{documents:[wl(t,e.path)]}}function _l(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=wl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return Ol(gc.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Dl(t.field),direction:kl(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=ll(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Sl(t){let e=function(t){const e=ml(t);return 4===e.length?ha.emptyPath():Tl(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ho(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Cl(t);return e instanceof gc&&yc(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new hc(Rl(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ia(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new cc(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new cc(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new Pc(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,u)}function Cl(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rl(t.unaryFilter.field);return pc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rl(t.unaryFilter.field);return pc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rl(t.unaryFilter.field);return pc.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rl(t.unaryFilter.field);return pc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return zo()}}(t):void 0!==t.fieldFilter?function(t){return pc.create(Rl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return zo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return gc.create(t.compositeFilter.filters.map((t=>Cl(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return zo()}}(t.compositeFilter.op))}(t):zo()}function kl(t){return ol[t]}function Al(t){return al[t]}function Nl(t){return cl[t]}function Dl(t){return{fieldPath:t.canonicalString()}}function Rl(t){return fa.fromServerFormat(t.fieldPath)}function Ol(t){return t instanceof pc?function(t){if("=="===t.op){if(nc(t.value))return{unaryFilter:{field:Dl(t.field),op:"IS_NAN"}};if(ec(t.value))return{unaryFilter:{field:Dl(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(nc(t.value))return{unaryFilter:{field:Dl(t.field),op:"IS_NOT_NAN"}};if(ec(t.value))return{unaryFilter:{field:Dl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dl(t.field),op:Al(t.op),value:t.value}}}(t):t instanceof gc?function(t){const e=t.getFilters().map((t=>Ol(t)));return 1===e.length?e[0]:{compositeFilter:{op:Nl(t.op),filters:e}}}(t):zo()}function Ll(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pl(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xl{constructor(t,e,n,s,i=ua.min(),r=ua.min(),o=xa.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new xl(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xl(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ml{constructor(t){this.fe=t}}function Ul(t){const e=Sl({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?$c(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fl{constructor(){this.rn=new $l}addToCollectionParentIndex(t,e){return this.rn.add(e),Ea.resolve()}getCollectionParents(t,e){return Ea.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Ea.resolve()}deleteFieldIndex(t,e){return Ea.resolve()}getDocumentsMatchingTarget(t,e){return Ea.resolve(null)}getIndexType(t,e){return Ea.resolve(0)}getFieldIndexes(t,e){return Ea.resolve([])}getNextCollectionGroupToUpdate(t){return Ea.resolve(null)}getMinOffset(t,e){return Ea.resolve(ma.min())}getMinOffsetFromCollectionGroup(t,e){return Ea.resolve(ma.min())}updateCollectionGroup(t,e,n){return Ea.resolve()}updateIndexEntries(t,e){return Ea.resolve()}}class $l{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ra(ha.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ra(ha.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vl{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Vl(0)}static Mn(){return new Vl(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jl{constructor(){this.changes=new Kc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ac.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ea.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ql{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ku(n.mutation,t,La.empty(),ca.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,su()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=su()){const s=Xc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Qc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Xc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,su())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Yc();const r=tu(),o=tu();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ru)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),ku(o.mutation,e,o.mutation.getFieldMask(),ca.now())):r.set(e.key,La.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Bl(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=tu();let s=new Aa(((t,e)=>t-e)),i=su();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||La.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||su()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Zc();c.forEach((t=>{if(!i.has(t)){const s=Su(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ea.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return pa.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Ea.resolve(Xc());let o=-1,a=i;return r.next((e=>Ea.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ea.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,su()))).next((t=>({batchId:o,changes:Jc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new pa(e)).next((t=>{let e=Qc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Qc();return this.indexManager.getCollectionParents(t,s).next((r=>Ea.forEach(r,(r=>{const o=function(t,e){return new Pc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,ac.newInvalidDocument(s)))}));let n=Qc();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&ku(r.mutation,i,La.empty(),ca.now()),qc(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zl{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Ea.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:pl(n.createTime)}),Ea.resolve()}getNamedQuery(t,e){return Ea.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:Ul(t.bundledQuery),readTime:pl(t.readTime)}}(e)),Ea.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hl{constructor(){this.overlays=new Aa(pa.comparator),this.ls=new Map}getOverlay(t,e){return Ea.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Xc();return Ea.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.we(t,e,s)})),Ea.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),Ea.resolve()}getOverlaysForCollection(t,e,n){const s=Xc(),i=e.length+1,r=new pa(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ea.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Aa(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Xc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Xc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Ea.resolve(o)}we(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $u(e,n));let i=this.ls.get(e);void 0===i&&(i=su(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kl{constructor(){this.fs=new Ra(Gl.ds),this.ws=new Ra(Gl._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Gl(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new Gl(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new pa(new ha([])),n=new Gl(e,t),s=new Gl(e,t+1),i=[];return this.ws.forEachInRange([n,s],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new pa(new ha([])),n=new Gl(e,t),s=new Gl(e,t+1);let i=su();return this.ws.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Gl(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Gl{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return pa.comparator(t.key,e.key)||oa(t.As,e.As)}static _s(t,e){return oa(t.As,e.As)||pa.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Ra(Gl.ds)}checkEmpty(t){return Ea.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Uu(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.Rs=this.Rs.add(new Gl(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Ea.resolve(r)}lookupMutationBatch(t,e){return Ea.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.bs(n),i=s<0?0:s;return Ea.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ea.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Ea.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Gl(e,0),s=new Gl(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,s],(t=>{const e=this.Ps(t.As);i.push(e)})),Ea.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ra(oa);return e.forEach((t=>{const e=new Gl(t,0),s=new Gl(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,s],(t=>{n=n.add(t.As)}))})),Ea.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;pa.isDocumentKey(i)||(i=i.child(""));const r=new Gl(new pa(i),0);let o=new Ra(oa);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.As)),!0)}),r),Ea.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ho(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ea.forEach(e.mutations,(s=>{const i=new Gl(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new Gl(e,0),s=this.Rs.firstAfterOrEqual(n);return Ea.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ea.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wl{constructor(t){this.Ds=t,this.docs=new Aa(pa.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ea.resolve(n?n.document.mutableCopy():ac.newInvalidDocument(e))}getEntries(t,e){let n=Yc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ac.newInvalidDocument(t))})),Ea.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Yc();const r=e.path,o=new pa(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||ya(ga(o),n)<=0||(s.has(o.key)||qc(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ea.resolve(i)}getAllFromCollectionGroup(t,e,n,s){zo()}Cs(t,e){return Ea.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ql(this)}getSize(t){return Ea.resolve(this.size)}}class Ql extends jl{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.os.addEntry(t,s)):this.os.removeEntry(n)})),Ea.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jl{constructor(t){this.persistence=t,this.xs=new Kc((t=>Rc(t)),Oc),this.lastRemoteSnapshotVersion=ua.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Kl,this.targetCount=0,this.Ms=Vl.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),Ea.resolve()}getLastRemoteSnapshotVersion(t){return Ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ea.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Ea.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Ea.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Vl(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Ea.resolve()}updateTargetData(t,e){return this.Fn(e),Ea.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Ea.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ea.waitFor(i).next((()=>s))}getTargetCount(t){return Ea.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Ea.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Ea.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Ea.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Ea.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Ea.resolve(n)}containsKey(t,e){return Ea.resolve(this.ks.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xl{constructor(t,e){this.$s={},this.overlays={},this.Os=new ba(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Jl(this),this.indexManager=new Fl,this.remoteDocumentCache=function(t){return new Wl(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new Ml(e),this.qs=new zl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Yl(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Vo("MemoryPersistence","Starting transaction:",t);const s=new Zl(this.Os.next());return this.referenceDelegate.Us(),n(s).next((t=>this.referenceDelegate.Ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gs(t,e){return Ea.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Zl extends va{constructor(t){super(),this.currentSequenceNumber=t}}class th{constructor(t){this.persistence=t,this.Qs=new Kl,this.js=null}static zs(t){return new th(t)}get Ws(){if(this.js)return this.js;throw zo()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Ea.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Ea.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Ea.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ea.forEach(this.Ws,(n=>{const s=pa.fromPath(n);return this.Hs(t,s).next((t=>{t||e.removeEntry(s,ua.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return Ea.or([()=>Ea.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eh{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=s}static Li(t,e){let n=su(),s=su();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new eh(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nh{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ki(t,e).next((i=>i||this.Gi(t,e,s,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(Mc(e))return Ea.resolve(null);let n=Fc(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=$c(e,null,"F"),n=Fc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=su(...s);return this.Ui.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ji(e,s);return this.zi(e,r,i,n.readTime)?this.Ki(t,$c(e,null,"F")):this.Wi(t,r,e,n)}))))})))))}Gi(t,e,n,s){return Mc(e)||s.isEqual(ua.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const r=this.ji(e,i);return this.zi(e,r,n,s)?this.Qi(t,e):($o()<=Qt.DEBUG&&Vo("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bc(e)),this.Wi(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ua.fromTimestamp(1e9===s?new ca(n+1,0):new ca(n,s));return new ma(i,pa.empty(),e)}(s,-1)))}))}ji(t,e){let n=new Ra(zc(t));return e.forEach(((e,s)=>{qc(t,s)&&(n=n.add(s))})),n}zi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(t,e){return $o()<=Qt.DEBUG&&Vo("QueryEngine","Using full collection scan to execute query:",Bc(e)),this.Ui.getDocumentsMatchingQuery(t,e,ma.min())}Wi(t,e,n,s){return this.Ui.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sh{constructor(t,e,n,s){this.persistence=t,this.Hi=e,this.serializer=s,this.Ji=new Aa(oa),this.Yi=new Kc((t=>Rc(t)),Oc),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ql(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}async function ih(t,e){const n=Ko(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=su();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function rh(t){const e=Ko(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function oh(t,e){const n=Ko(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(xa.EMPTY_BYTE_STRING,ua.min()).withLastLimboFreeSnapshotVersion(ua.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Bs.updateTargetData(t,u))}));let a=Yc(),c=su();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=su(),i=su();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Yc();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(ua.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Vo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:s,sr:i}}))}(t,r,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!s.isEqual(ua.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Ea.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function ah(t,e){const n=Ko(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function ch(t,e,n){const s=Ko(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ta(t))throw t;Vo("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function uh(t,e,n){const s=Ko(t);let i=ua.min(),r=su();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Ko(t),i=s.Yi.get(n);return void 0!==i?Ea.resolve(s.Ji.get(i)):s.Bs.getTargetData(e,n)}(s,t,Fc(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Hi.getDocumentsMatchingQuery(t,e,n?i:ua.min(),n?r:su()))).next((t=>(function(t,e,n){let s=t.Xi.get(e)||ua.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Xi.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ir:r})))))}class lh{constructor(){this.activeTargetIds=iu}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hh{constructor(){this.Hr=new lh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new lh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dh{Yr(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Vo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Vo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let ph=null;function gh(){return null===ph?ph=268435456+Math.round(2147483648*Math.random()):ph++,"0x"+ph.toString(16)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const mh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yh{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vh="WebChannelConnection";class wh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,s,i){const r=gh(),o=this.To(t,e);Vo("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.Eo(a,s,i),this.Ao(t,o,a,n).then((e=>(Vo("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw Bo("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,i,r){return this.Io(t,e,n,s,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Uo,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=mh[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,s){const i=gh();return new Promise(((r,o)=>{const a=new Oo;a.setWithCredentials(!0),a.listenOnce(Co.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case So.NO_ERROR:const e=a.getResponseJson();Vo(vh,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case So.TIMEOUT:Vo(vh,`RPC '${t}' ${i} timed out`),o(new Yo(Go.DEADLINE_EXCEEDED,"Request time out"));break;case So.HTTP_ERROR:const n=a.getStatus();if(Vo(vh,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Go).indexOf(e)>=0?e:Go.UNKNOWN}(e.status);o(new Yo(t,e.message))}else o(new Yo(Go.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Yo(Go.UNAVAILABLE,"Connection failed."));break;default:zo()}}finally{Vo(vh,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(s);Vo(vh,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const s=gh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new to,o=Xs(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Do({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Vo(vh,`Creating RPC '${t}' stream ${s}: ${u}`,a);const l=r.createWebChannel(u,a);let h=!1,d=!1;const f=new yh({ro:e=>{d?Vo(vh,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(h||(Vo(vh,`Opening RPC '${t}' stream ${s} transport.`),l.open(),h=!0),Vo(vh,`RPC '${t}' stream ${s} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Ro.EventType.OPEN,(()=>{d||Vo(vh,`RPC '${t}' stream ${s} transport opened.`)})),p(l,Ro.EventType.CLOSE,(()=>{d||(d=!0,Vo(vh,`RPC '${t}' stream ${s} transport closed`),f.wo())})),p(l,Ro.EventType.ERROR,(e=>{d||(d=!0,Bo(vh,`RPC '${t}' stream ${s} transport errored:`,e),f.wo(new Yo(Go.UNAVAILABLE,"The operation could not be completed")))})),p(l,Ro.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];Ho(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Vo(vh,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=ju[t];if(void 0!==e)return qu(e)}(e),i=o.message;void 0===n&&(n=Go.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.wo(new Yo(n,i)),l.close()}else Vo(vh,`RPC '${t}' stream ${s} received:`,i),f._o(i)}})),p(o,ko.STAT_EVENT,(e=>{e.stat===Ao?Vo(vh,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===No&&Vo(vh,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}function Eh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Th(t){return new ul(t,!0)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,e-n);s>0&&Vo("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ih{constructor(t,e,n,s,i,r,o,a){this.ii=t,this.$o=n,this.Oo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new bh(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===Go.RESOURCE_EXHAUSTED?(jo(e.toString()),jo("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===Go.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new Yo(Go.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return Vo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(Vo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _h extends Ih{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:zo()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(Ho(void 0===e||"string"==typeof e),xa.fromBase64String(e||"")):(Ho(void 0===e||e instanceof Uint8Array),xa.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Go.UNKNOWN:qu(t.code);return new Yo(e,t.message||"")}(o);n=new el(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=vl(t,s.document.name),r=pl(s.document.updateTime),o=s.document.createTime?pl(s.document.createTime):ua.min(),a=new rc({mapValue:{fields:s.document.fields}}),c=ac.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Zu(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=vl(t,s.document),r=s.readTime?pl(s.readTime):ua.min(),o=ac.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Zu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=vl(t,s.document),r=s.removedTargetIds||[];n=new Zu([],r,i,null)}else{if(!("filter"in e))return zo();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:i}=t,r=new Vu(s,i),o=t.targetId;n=new tl(o,r)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return ua.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ua.min():e.readTime?pl(e.readTime):ua.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=El(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=Lc(s)?{documents:Il(t,s)}:{query:_l(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=dl(t,e.resumeToken);const s=ll(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(ua.min())>0){n.readTime=hl(t,e.snapshotVersion.toTimestamp());const s=ll(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return zo()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=El(this.serializer),e.removeTarget=t,this.Wo(e)}}class Sh extends Ih{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(Ho(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=function(t,e){return t&&t.length>0?(Ho(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?pl(t.updateTime):pl(e);return n.isEqual(ua.min())&&(n=pl(e)),new Tu(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=pl(t.commitTime);return this.listener.cu(n,e)}return Ho(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=El(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Du)n={update:bl(t,e.key,e.value)};else if(e instanceof xu)n={delete:yl(t,e.key)};else if(e instanceof Ru)n={update:bl(t,e.key,e.data),updateMask:Ll(e.fieldMask)};else{if(!(e instanceof Mu))return zo();n={verify:yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof du)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yu)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw zo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:fl(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:zo()}(t,e.precondition)),n}(this.serializer,t)))};this.Wo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ch extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new Yo(Go.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Io(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Go.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yo(Go.UNKNOWN,t.toString())}))}vo(t,e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Go.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yo(Go.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class kh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(jo(e),this.mu=!1):Vo("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{Uh(this)&&(Vo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ko(t);e.vu.add(4),await Dh(e),e.bu.set("Unknown"),e.vu.delete(4),await Nh(e)}(this))}))})),this.bu=new kh(n,s)}}async function Nh(t){if(Uh(t))for(const e of t.Ru)await e(!0)}async function Dh(t){for(const e of t.Ru)await e(!1)}function Rh(t,e){const n=Ko(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Mh(n)?xh(n):td(n).Ko()&&Lh(n,e))}function Oh(t,e){const n=Ko(t),s=td(n);n.Au.delete(e),s.Ko()&&Ph(n,e),0===n.Au.size&&(s.Ko()?s.jo():Uh(n)&&n.bu.set("Unknown"))}function Lh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ua.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}td(t).su(e)}function Ph(t,e){t.Vu.qt(e),td(t).iu(e)}function xh(t){t.Vu=new sl({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),td(t).start(),t.bu.gu()}function Mh(t){return Uh(t)&&!td(t).Uo()&&t.Au.size>0}function Uh(t){return 0===Ko(t).vu.size}function Fh(t){t.Vu=void 0}async function $h(t){t.Au.forEach(((e,n)=>{Lh(t,e)}))}async function Vh(t,e){Fh(t),Mh(t)?(t.bu.Iu(e),xh(t)):t.bu.set("Unknown")}async function jh(t,e,n){if(t.bu.set("Online"),e instanceof el&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Au.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Au.delete(s),t.Vu.removeTarget(s))}(t,e)}catch(n){Vo("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Bh(t,n)}else if(e instanceof Zu?t.Vu.Ht(e):e instanceof tl?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ua.min()))try{const e=await rh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(s);i&&t.Au.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.Au.get(e);if(!s)return;t.Au.set(e,s.withResumeToken(xa.EMPTY_BYTE_STRING,s.snapshotVersion)),Ph(t,e);const i=new xl(s.target,e,n,s.sequenceNumber);Lh(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Vo("RemoteStore","Failed to raise snapshot:",e),await Bh(t,e)}}async function Bh(t,e,n){if(!Ta(e))throw e;t.vu.add(1),await Dh(t),t.bu.set("Offline"),n||(n=()=>rh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Vo("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Nh(t)}))}function qh(t,e){return e().catch((n=>Bh(t,n,e)))}async function zh(t){const e=Ko(t),n=ed(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Hh(e);)try{const t=await ah(e.localStore,s);if(null===t){0===e.Eu.length&&n.jo();break}s=t.batchId,Kh(e,t)}catch(t){await Bh(e,t)}Gh(e)&&Yh(e)}function Hh(t){return Uh(t)&&t.Eu.length<10}function Kh(t,e){t.Eu.push(e);const n=ed(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Gh(t){return Uh(t)&&!ed(t).Uo()&&t.Eu.length>0}function Yh(t){ed(t).start()}async function Wh(t){ed(t).hu()}async function Qh(t){const e=ed(t);for(const n of t.Eu)e.uu(n.mutations)}async function Jh(t,e,n){const s=t.Eu.shift(),i=Fu.from(s,e,n);await qh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await zh(t)}async function Xh(t,e){e&&ed(t).ou&&await async function(t,e){if(function(t){switch(t){default:return zo();case Go.CANCELLED:case Go.UNKNOWN:case Go.DEADLINE_EXCEEDED:case Go.RESOURCE_EXHAUSTED:case Go.INTERNAL:case Go.UNAVAILABLE:case Go.UNAUTHENTICATED:return!1;case Go.INVALID_ARGUMENT:case Go.NOT_FOUND:case Go.ALREADY_EXISTS:case Go.PERMISSION_DENIED:case Go.FAILED_PRECONDITION:case Go.ABORTED:case Go.OUT_OF_RANGE:case Go.UNIMPLEMENTED:case Go.DATA_LOSS:return!0}}(n=e.code)&&n!==Go.ABORTED){const n=t.Eu.shift();ed(t).Qo(),await qh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await zh(t)}var n}(t,e),Gh(t)&&Yh(t)}async function Zh(t,e){const n=Ko(t);n.asyncQueue.verifyOperationInProgress(),Vo("RemoteStore","RemoteStore received new credentials");const s=Uh(n);n.vu.add(3),await Dh(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Nh(n)}function td(t){return t.Su||(t.Su=function(t,e,n){const s=Ko(t);return s.fu(),new _h(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{uo:$h.bind(null,t),ao:Vh.bind(null,t),nu:jh.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),Mh(t)?xh(t):t.bu.set("Unknown")):(await t.Su.stop(),Fh(t))}))),t.Su}function ed(t){return t.Du||(t.Du=function(t,e,n){const s=Ko(t);return s.fu(),new Sh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{uo:Wh.bind(null,t),ao:Xh.bind(null,t),au:Qh.bind(null,t),cu:Jh.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await zh(t)):(await t.Du.stop(),t.Eu.length>0&&(Vo("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class nd{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Wo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new nd(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yo(Go.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sd(t,e){if(jo("AsyncQueue",`${e}: ${t}`),Ta(t))return new Yo(Go.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class id{constructor(t){this.comparator=t?(e,n)=>t(e,n)||pa.comparator(e.key,n.key):(t,e)=>pa.comparator(t.key,e.key),this.keyedMap=Qc(),this.sortedSet=new Aa(this.comparator)}static emptySet(t){return new id(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof id))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new id;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rd{constructor(){this.Cu=new Aa(pa.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):zo():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class od{constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new od(t,e,id.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ad{constructor(){this.Nu=void 0,this.listeners=[]}}class cd{constructor(){this.queries=new Kc((t=>jc(t)),Vc),this.onlineState="Unknown",this.ku=new Set}}async function ud(t,e){const n=Ko(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ad),i)try{r.Nu=await n.onListen(s)}catch(t){const n=sd(t,`Initialization of query '${Bc(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&fd(n)}async function ld(t,e){const n=Ko(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function hd(t,e){const n=Ko(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.$u(t)&&(s=!0);i.Nu=t}}s&&fd(n)}function dd(t,e,n){const s=Ko(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function fd(t){t.ku.forEach((t=>{t.next()}))}class pd{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new od(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=od.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gd{constructor(t){this.key=t}}class md{constructor(t){this.key=t}}class yd{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=su(),this.mutatedKeys=su(),this.tc=zc(t),this.ec=new id(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new rd,s=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),l=qc(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:r,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return zo()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const r=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new od(this.query,t.ec,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new rd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=su(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new md(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new gd(n))})),e}hc(t){this.Yu=t.ir,this.Zu=su();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return od.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class vd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wd{constructor(t){this.key=t,this.fc=!1}}class Ed{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Kc((t=>jc(t)),Vc),this._c=new Map,this.mc=new Set,this.gc=new Aa(pa.comparator),this.yc=new Map,this.Ic=new Kl,this.Tc={},this.Ec=new Map,this.Ac=Vl.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Td(t,e){const n=function(t){const e=Ko(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_d.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cd.bind(null,e),e.dc.nu=hd.bind(null,e.eventManager),e.dc.Pc=dd.bind(null,e.eventManager),e}(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const t=await function(t,e){const n=Ko(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Bs.getTargetData(t,e).next((i=>i?(s=i,Ea.resolve(s)):n.Bs.allocateTargetId(t).next((i=>(s=new xl(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ji.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}(n.localStore,Fc(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s,i){t.Rc=(e,n,s)=>async function(t,e,n,s){let i=e.view.sc(n);i.zi&&(i=await uh(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Ld(t,e.targetId,o.cc),o.snapshot}(t,e,n,s);const r=await uh(t.localStore,e,!0),o=new yd(e,r.ir),a=o.sc(r.documents),c=Xu.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Ld(t,n,u.cc);const l=new vd(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}(n,e,s,"current"===r,t.resumeToken),n.isPrimaryClient&&Rh(n.remoteStore,t)}return i}async function bd(t,e){const n=Ko(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter((t=>!Vc(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ch(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Oh(n.remoteStore,s.targetId),Rd(n,s.targetId)})).catch(wa)):(Rd(n,s.targetId),await ch(n.localStore,s.targetId,!0))}async function Id(t,e,n){const s=function(t){const e=Ko(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ad.bind(null,e),e}(t);try{const t=await function(t,e){const n=Ko(t),s=ca.now(),i=e.reduce(((t,e)=>t.add(e.key)),su());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Yc(),c=su();return n.Zi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Au(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Ru(t.key,e,oc(e.value.mapValue),bu.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Jc(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Tc[t.currentUser.toKey()];s||(s=new Aa(oa)),s=s.insert(e,n),t.Tc[t.currentUser.toKey()]=s}(s,t.batchId,n),await Md(s,t.changes),await zh(s.remoteStore)}catch(t){const e=sd(t,"Failed to persist write");n.reject(e)}}async function _d(t,e){const n=Ko(t);try{const t=await oh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.yc.get(e);s&&(Ho(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.fc=!0:t.modifiedDocuments.size>0?Ho(s.fc):t.removedDocuments.size>0&&(Ho(s.fc),s.fc=!1))})),await Md(n,t,e)}catch(t){await wa(t)}}function Sd(t,e,n){const s=Ko(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.wc.forEach(((n,s)=>{const i=s.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ko(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Mu(e)&&(s=!0)})),s&&fd(n)}(s.eventManager,e),t.length&&s.dc.nu(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Cd(t,e,n){const s=Ko(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let t=new Aa(pa.comparator);t=t.insert(r,ac.newNoDocument(r,ua.min()));const n=su().add(r),i=new Ju(ua.min(),new Map,new Aa(oa),t,n);await _d(s,i),s.gc=s.gc.remove(r),s.yc.delete(e),xd(s)}else await ch(s.localStore,e,!1).then((()=>Rd(s,e,n))).catch(wa)}async function kd(t,e){const n=Ko(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Ko(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Ea.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Ho(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=su();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);Dd(n,s,null),Nd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Md(n,t)}catch(t){await wa(t)}}async function Ad(t,e,n){const s=Ko(t);try{const t=await function(t,e){const n=Ko(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ho(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Dd(s,e,n),Nd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Md(s,t)}catch(n){await wa(n)}}function Nd(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function Dd(t,e,n){const s=Ko(t);let i=s.Tc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Od(t,e)}))}function Od(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Oh(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),xd(t))}function Ld(t,e,n){for(const s of n)s instanceof gd?(t.Ic.addReference(s.key,e),Pd(t,s)):s instanceof md?(Vo("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Od(t,s.key)):zo()}function Pd(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(Vo("SyncEngine","New document in limbo: "+n),t.mc.add(s),xd(t))}function xd(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new pa(ha.fromString(e)),s=t.Ac.next();t.yc.set(s,new wd(n)),t.gc=t.gc.insert(n,s),Rh(t.remoteStore,new xl(Fc(xc(n.path)),s,"TargetPurposeLimboResolution",ba.ct))}}async function Md(t,e,n){const s=Ko(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((t,a)=>{o.push(s.Rc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=eh.Li(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.dc.nu(i),await async function(t,e){const n=Ko(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ea.forEach(e,(e=>Ea.forEach(e.Fi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ea.forEach(e.Bi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Ta(t))throw t;Vo("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(e,i)}}}(s.localStore,r))}async function Ud(t,e){const n=Ko(t);if(!n.currentUser.isEqual(e)){Vo("SyncEngine","User change. New user:",e.toKey());const t=await ih(n.localStore,e);n.currentUser=e,function(t){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new Yo(Go.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ec.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Md(n,t.er)}}function Fd(t,e){const n=Ko(t),s=n.yc.get(e);if(s&&s.fc)return su().add(s.key);{let t=su();const s=n._c.get(e);if(!s)return t;for(const e of s){const s=n.wc.get(e);t=t.unionWith(s.view.nc)}return t}}class $d{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Th(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,s){return new sh(t,e,n,s)}(this.persistence,new nh,t.initialUser,this.serializer)}createPersistence(t){return new Xl(th.zs,this.serializer)}createSharedClientState(t){return new hh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Sd(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ud.bind(null,this.syncEngine),await async function(t,e){const n=Ko(t);e?(n.vu.delete(2),await Nh(n)):e||(n.vu.add(2),await Dh(n),n.bu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new cd}createDatastore(t){const e=Th(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new wh(s));var s;return function(t,e,n,s){return new Ch(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Sd(this.syncEngine,t,0),r=fh.D()?new fh:new dh,new Ah(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Ed(t,e,n,s,i,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ko(t);Vo("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Dh(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):jo("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bd{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Mo.UNAUTHENTICATED,this.clientId=ra.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Vo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Vo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yo(Go.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function qd(t,e){t.asyncQueue.verifyOperationInProgress(),Vo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await ih(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Vo("FirestoreClient","Using user provided OfflineComponentProvider");try{await qd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===Go.FAILED_PRECONDITION||t.code===Go.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Bo("Error using user provided cache. Falling back to memory cache: "+n),await qd(t,new $d)}}else Vo("FirestoreClient","Using default OfflineComponentProvider"),await qd(t,new $d);return t._offlineComponents}(t);Vo("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Zh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Zh(e.remoteStore,n))),t._onlineComponents=e}async function Hd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Vo("FirestoreClient","Using user provided OnlineComponentProvider"),await zd(t,t._uninitializedComponentsProvider._online)):(Vo("FirestoreClient","Using default OnlineComponentProvider"),await zd(t,new Vd))),t._onlineComponents}async function Kd(t){const e=await Hd(t),n=e.eventManager;return n.onListen=Td.bind(null,e.syncEngine),n.onUnlisten=bd.bind(null,e.syncEngine),n}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Gd(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const Yd=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Wd(t,e,n){if(!n)throw new Yo(Go.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qd(t){if(!pa.isDocumentKey(t))throw new Yo(Go.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jd(t){if(pa.isDocumentKey(t))throw new Yo(Go.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":zo()}function Zd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Yo(Go.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xd(t);throw new Yo(Go.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tf{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Yo(Go.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Yo(Go.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new Yo(Go.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gd(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Yo(Go.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Yo(Go.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Yo(Go.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class ef{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Yo(Go.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Yo(Go.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Jo;switch(t.type){case"firstParty":return new ea(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Yo(Go.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Yd.get(t);e&&(Vo("ComponentProvider","Removing Datastore"),Yd.delete(t),e.terminate())}(this),Promise.resolve()}}function nf(t,e,n,s={}){var i;const r=(t=Zd(t,ef))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Mo.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[At(JSON.stringify({alg:"none",type:"JWT"})),At(JSON.stringify(r)),""].join(".")}(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Yo(Go.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Mo(r)}t._authCredentials=new Xo(new Qo(e,n))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new of(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sf(this.firestore,t,this._key)}}class rf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rf(this.firestore,t,this._query)}}class of extends rf{constructor(t,e,n){super(t,e,xc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sf(this.firestore,null,new pa(t))}withConverter(t){return new of(this.firestore,t,this._path)}}function af(t,e,...n){if(t=Ht(t),Wd("collection","path",e),t instanceof ef){const s=ha.fromString(e,...n);return Jd(s),new of(t,null,s)}{if(!(t instanceof sf||t instanceof of))throw new Yo(Go.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ha.fromString(e,...n));return Jd(s),new of(t.firestore,null,s)}}function cf(t,e,...n){if(t=Ht(t),1===arguments.length&&(e=ra.A()),Wd("doc","path",e),t instanceof ef){const s=ha.fromString(e,...n);return Qd(s),new sf(t,null,new pa(s))}{if(!(t instanceof sf||t instanceof of))throw new Yo(Go.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ha.fromString(e,...n));return Qd(s),new sf(t.firestore,t instanceof of?t.converter:null,new pa(s))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new bh(this,"async_queue_retry"),this.Xc=()=>{const t=Eh();t&&Vo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=Eh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=Eh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new Wo;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Ta(t))throw t;Vo("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw jo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const s=nd.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(s),s}Zc(){this.Wc&&zo()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}function lf(t){return function(t){if("object"!=typeof t||null===t)return!1;const e=t;for(const t of["next","error","complete"])if(t in e&&"function"==typeof e[t])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}class hf extends ef{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new uf,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ff(this),this._firestoreClient.terminate()}}function df(t){return t._firestoreClient||ff(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ff(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new qa(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Gd(s.experimentalLongPollingOptions),s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Bd(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pf(xa.fromBase64String(t))}catch(t){throw new Yo(Go.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new pf(xa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Yo(Go.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fa(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mf{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Yo(Go.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Yo(Go.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return oa(this._lat,t._lat)||oa(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vf=/^__.*__$/;class wf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ru(t,this.data,this.fieldMask,e,this.fieldTransforms):new Du(t,this.data,e,this.fieldTransforms)}}class Ef{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ru(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw zo()}}class bf{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new bf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.aa({path:n,la:!1});return s.fa(t),s}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.aa({path:n,la:!1});return s.ua(),s}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return xf(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Tf(this.ca)&&vf.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class If{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Th(t)}ya(t,e,n,s=!1){return new bf({ca:t,methodName:e,ga:n,path:fa.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _f(t){const e=t._freezeSettings(),n=Th(t._databaseId);return new If(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sf(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Rf("Data must be an object, but it was:",o,s);const a=Nf(s,o);let c,u;if(r.merge)c=new La(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Of(e,s,n);if(!o.contains(i))throw new Yo(Go.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Mf(t,i)||t.push(i)}c=new La(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new wf(new rc(a),c,u)}class Cf extends mf{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cf}}class kf extends mf{_toFieldTransform(t){return new Eu(t.path,new du)}isEqual(t){return t instanceof kf}}function Af(t,e){if(Df(t=Ht(t)))return Rf("Unsupported field value:",e,t),Nf(t,e);if(t instanceof mf)return function(t,e){if(!Tf(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Af(i,e.wa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ht(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return au(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ca.fromDate(t);return{timestampValue:hl(e.serializer,n)}}if(t instanceof ca){const n=new ca(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hl(e.serializer,n)}}if(t instanceof yf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof pf)return{bytesValue:dl(e.serializer,t._byteString)};if(t instanceof sf){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gl(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${Xd(t)}`)}(t,e)}function Nf(t,e){const n={};return ka(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ca(t,((t,s)=>{const i=Af(s,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Df(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ca||t instanceof yf||t instanceof pf||t instanceof sf||t instanceof mf)}function Rf(t,e,n){if(!Df(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Xd(n);throw"an object"===s?e._a(t+" a custom object"):e._a(t+" "+s)}}function Of(t,e,n){if((e=Ht(e))instanceof gf)return e._internalPath;if("string"==typeof e)return Pf(t,e);throw xf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Lf=new RegExp("[~\\*/\\[\\]]");function Pf(t,e,n){if(e.search(Lf)>=0)throw xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gf(...e.split("."))._internalPath}catch(s){throw xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xf(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Yo(Go.INVALID_ARGUMENT,a+t+c)}function Mf(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uf{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ff(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($f("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ff extends Uf{data(){return super.data()}}function $f(t,e){return"string"==typeof e?Pf(t,e):e instanceof gf?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vf(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Yo(Go.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jf{convertValue(t,e="none"){switch(Ka(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fa(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes($a(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw zo()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ca(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new yf(Fa(t.latitude),Fa(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ja(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ba(t));default:return null}}convertTimestamp(t){const e=Ua(t);return new ca(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ha.fromString(t);Ho(Pl(n));const s=new za(n.get(1),n.get(3)),i=new pa(n.popFirst(5));return s.isEqual(e)||jo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qf extends Uf{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field($f("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class zf extends qf{data(t={}){return super.data(t)}}class Hf{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Bf(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new zf(this._firestore,this._userDataWriter,n.key,n,new Bf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Yo(Go.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new zf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Bf(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new zf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Bf(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Kf(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Kf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return zo()}}class Gf extends jf{constructor(t){super(),this.firestore=t}convertBytes(t){return new pf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sf(this.firestore,null,e)}}function Yf(t){t=Zd(t,rf);const e=Zd(t.firestore,hf),n=df(e),s=new Gf(e);return Vf(t._query),function(t,e,n={}){const s=new Wo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new jd({next:n=>{e.enqueueAndForget((()=>ld(t,o))),n.fromCache&&"server"===s.source?i.reject(new Yo(Go.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new pd(n,r,{includeMetadataChanges:!0,Ku:!0});return ud(t,o)}(await Kd(t),t.asyncQueue,e,n,s))),s.promise}(n,t._query).then((n=>new Hf(e,s,t,n)))}function Wf(t,e,n,...s){t=Zd(t,sf);const i=Zd(t.firestore,hf),r=_f(i);let o;return o="string"==typeof(e=Ht(e))||e instanceof gf?function(t,e,n,s,i,r){const o=t.ya(1,e,n),a=[Of(e,s,n)],c=[i];if(r.length%2!=0)throw new Yo(Go.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Of(e,r[t])),c.push(r[t+1]);const u=[],l=rc.empty();for(let t=a.length-1;t>=0;--t)if(!Mf(u,a[t])){const e=a[t];let n=c[t];n=Ht(n);const s=o.da(e);if(n instanceof Cf)u.push(e);else{const t=Af(n,s);null!=t&&(u.push(e),l.set(e,t))}}const h=new La(u);return new Ef(l,h,o.fieldTransforms)}(r,"updateDoc",t._key,e,n,s):function(t,e,n,s){const i=t.ya(1,e,n);Rf("Data must be an object, but it was:",i,s);const r=[],o=rc.empty();Ca(s,((t,s)=>{const a=Pf(e,t,n);s=Ht(s);const c=i.da(a);if(s instanceof Cf)r.push(a);else{const t=Af(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new La(r);return new Ef(o,a,i.fieldTransforms)}(r,"updateDoc",t._key,e),Jf(i,[o.toMutation(t._key,bu.exists(!0))])}function Qf(t,...e){var n,s,i;t=Ht(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||lf(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(lf(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,l;if(t instanceof sf)u=Zd(t.firestore,hf),l=xc(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const s=n.docs.get(e._key),i=new Gf(t);return new qf(t,i,e._key,s,new Bf(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Zd(t,rf);u=Zd(n.firestore,hf),l=n._query;const s=new Gf(u);c={next:t=>{e[o]&&e[o](new Hf(u,s,n,t))},error:e[o+1],complete:e[o+2]},Vf(t._query)}return function(t,e,n,s){const i=new jd(s),r=new pd(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>ud(await Kd(t),r))),()=>{i.Dc(),t.asyncQueue.enqueueAndForget((async()=>ld(await Kd(t),r)))}}(df(u),l,a,c)}function Jf(t,e){return function(t,e){const n=new Wo;return t.asyncQueue.enqueueAndForget((async()=>Id(await function(t){return Hd(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(df(t),e)}!function(t,e=!0){!function(t){Uo=t}(en),Je(new Kt("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new hf(new Zo(t.getProvider("auth-internal")),new sa(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Yo(Go.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),rn(xo,"3.13.0",t),rn(xo,"3.13.0","esm2017")}();
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
rn("firebase","9.23.0","app");const Xf=function(t,e){const n="string"==typeof t?t:e||"(default)",s=Xe("object"==typeof t?t:sn(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=(t=>{const e=Ot(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]})("firestore");t&&nf(s,...t)}return s}(nn({apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0})),Zf=async(t,e,n)=>{const s=await function(t,e){const n=Zd(t.firestore,hf),s=cf(t),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e);return Jf(n,[Sf(_f(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,bu.exists(!1))]).then((()=>s))}(af(Xf,"event_results"),{name:t,result:e,sub_result:n,created_at:new kf("serverTimestamp")});return console.log("Document written with ID: ",s.id),s.id},tp=async()=>{const t=(await Yf(af(Xf,"event_results"))).docs.map((t=>({id:t.id,...t.data()}))).sort(((t,e)=>t.result===e.result?t.sub_result-e.sub_result:e.result-t.result));return t};function ep(e){let n,s,i,r,o,a,c,u,l,h,d,m,E,T,I,S,k,A,N=e[0].comment+"",D=e[0].text+"",R=e[1].substring(e[3].length)+"",O=e[0].yomi&&sp(e);return{c(){n=y("div"),s=y("div"),i=y("div"),i.innerHTML='<img id="img" alt="画像" height="500px" class="svelte-itdqv7"/>',r=w(),o=y("div"),a=v(N),c=w(),u=y("div"),l=y("div"),h=y("h1"),d=v(D),m=w(),O&&O.c(),E=w(),T=y("h2"),I=y("span"),S=v(e[2]),k=v(e[3]),A=v(R),b(i,"class","img-container omote svelte-itdqv7"),b(o,"class","img-container ura svelte-itdqv7"),b(s,"class","img-container game-karta svelte-itdqv7"),b(h,"class","svelte-itdqv7"),C(I,"color","red"),b(l,"class","text"),b(u,"class","text-container svelte-itdqv7"),b(n,"id","question"),C(n,"visibility","hidden"),b(n,"class","svelte-itdqv7")},m(t,e){p(t,n,e),f(n,s),f(s,i),f(s,r),f(s,o),f(o,a),f(n,c),f(n,u),f(u,l),f(l,h),f(h,d),f(l,m),O&&O.m(l,null),f(l,E),f(l,T),f(T,I),f(I,S),f(I,k),f(T,A)},p(t,e){1&e[0]&&N!==(N=t[0].comment+"")&&_(a,N),1&e[0]&&D!==(D=t[0].text+"")&&_(d,D),t[0].yomi?O?O.p(t,e):(O=sp(t),O.c(),O.m(l,E)):O&&(O.d(1),O=null),4&e[0]&&_(S,t[2]),8&e[0]&&_(k,t[3]),10&e[0]&&R!==(R=t[1].substring(t[3].length)+"")&&_(A,R)},i:t,o:t,d(t){t&&g(n),O&&O.d()}}}function np(t){let e,n,s,i;return e=new It({props:{class:"app-button",$$slots:{default:[ip]},$$scope:{ctx:t}}}),e.$on("click",t[7]),s=new It({props:{class:"app-button",$$slots:{default:[rp]},$$scope:{ctx:t}}}),s.$on("click",t[6]),{c(){X(e.$$.fragment),n=w(),X(s.$$.fragment)},m(t,r){Z(e,t,r),p(t,n,r),Z(s,t,r),i=!0},p(t,n){const i={};16&n[1]&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const r={};16&n[1]&&(r.$$scope={dirty:n,ctx:t}),s.$set(r)},i(t){i||(Q(e.$$.fragment,t),Q(s.$$.fragment,t),i=!0)},o(t){J(e.$$.fragment,t),J(s.$$.fragment,t),i=!1},d(t){tt(e,t),t&&g(n),tt(s,t)}}}function sp(t){let e,n,s,i,r=t[0].yomi.substring(0,t[5])+"",o=t[0].yomi.substring(t[5])+"";return{c(){e=y("h2"),n=y("span"),s=v(r),i=v(o),C(n,"color","red")},m(t,r){p(t,e,r),f(e,n),f(n,s),f(e,i)},p(t,e){33&e[0]&&r!==(r=t[0].yomi.substring(0,t[5])+"")&&_(s,r),33&e[0]&&o!==(o=t[0].yomi.substring(t[5])+"")&&_(i,o)},d(t){t&&g(e)}}}function ip(e){let n,s;return{c(){n=y("i"),s=v("リトライ"),b(n,"class","fa-solid fa-repeat")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function rp(e){let n,s;return{c(){n=y("i"),s=v("結果を見る"),b(n,"class","fa-solid fa-square-poll-vertical")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function op(t){let e,n,s,i;const r=[np,ep],o=[];function a(t,e){return t[4]?0:1}return n=a(t),s=o[n]=r[n](t),{c(){e=y("div"),s.c(),b(e,"class","container svelte-itdqv7")},m(t,s){p(t,e,s),o[n].m(e,null),i=!0},p(t,i){let c=n;n=a(t),n===c?o[n].p(t,i):(Y(),J(o[c],1,1,(()=>{o[c]=null})),W(),s=o[n],s?s.p(t,i):(s=o[n]=r[n](t),s.c()),Q(s,1),s.m(e,null))},i(t){i||(Q(s),i=!0)},o(t){J(s),i=!1},d(t){t&&g(e),o[n].d()}}}function ap(t,e,n){let s=t[e+n];return"ぁ"==s||"ぃ"==s||"ぅ"==s||"ぇ"==s||"ぉ"==s||"ゃ"==s||"ゅ"==s||"ょ"==s}function cp(t,e){let n=t[e+1];return"あ"==n||"い"==n||"う"==n||"え"==n||"お"==n||"な"==n||"に"==n||"ぬ"==n||"ね"==n||"の"==n||"にゃ"==n||"にゅ"==n||"にょ"==n||null==n}function up(t,e,n){let s,i,r,o;u(t,ut,(t=>n(20,s=t))),u(t,lt,(t=>n(21,i=t))),u(t,ht,(t=>n(22,r=t))),u(t,at,(t=>n(23,o=t)));const a=L();let c=[],l=[],h=0,f={},p=0,g="",m="",y="",v=0,w=null,E=!1,T="",b=!1,I=0,_=0,S=[],C=0,k=0;function A(){let t=(new Date).getTime(),e=new Date(v-t),n=~~(e.getMilliseconds()/1e3*100)+"",s=e.getSeconds()+"",i=e.getMinutes()+"";"0"==i&&"0"==s&&M("playWhistleSound"),d(ht,r=`${("00"+i).slice(-2)}'${("00"+s).slice(-2)}"${("00"+n).slice(-2)}`,r),w=setTimeout(A,10)}function N(t){M("playKeyStrokeSound"),t.preventDefault();let e=function(t){if(k=0,x(),b&&(b=!1,"n"==t))return void n(2,m+=t.toUpperCase());n(3,y+=t.toUpperCase());let e=1;if(E)return;let s=f.yomi,r=s[p];"っ"==s[p]||ap(s,p,e)?(r+=s[p+e],e++,"っ"==s[p]&&ap(s,p,e)&&(r+=s[p+e],e++)):"ん"!=s[p]||cp(s,p)||(r="ン",b=!0);let o=_t[r];if(o.some((function(t){if(t===y)return n(5,_+=r.length),!0}))){if(k=1,x(),I++,n(2,m+=y),p+=e,n(3,y=""),p>=f.yomi.length)return k=0,0}else{if(!o.some((t=>t.startsWith(y))))return M("playFailSound"),d(lt,i++,i),n(3,y=""),!1}return}(t.key);0===e&&(M("playGetCardSound"),d(ut,s++,s),I=0,n(5,_=0),h++,n(2,m=""),p=0,P())}R((()=>{window.addEventListener("keydown",N),function(){let t=new Date;t.getTime(),v=t.setMinutes(t.getMinutes()+2),A(),setTimeout((()=>{n(4,E=!0),clearTimeout(w),d(ht,r="",r)}),12e4)}(),D(),setTimeout((()=>{document.getElementById("question").style.visibility="visible"}),400)})),O((()=>{window.removeEventListener("keydown",N),w&&clearTimeout(w)}));const D=async()=>{(await(async()=>await Yf(af(Xf,"cards")))()).forEach((t=>{c.push(t.data())})),l=function(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}(c),P()};function P(){let t;n(1,g=""),n(0,f=l[h]),T="/cards/"+f.picture_card,S=[],C=1,Array.from(f.yomi).forEach(((e,n)=>{2!=C?(t=e,"っ"==e||ap(f.yomi,n,C)?(t+=f.yomi[n+C],C++,"っ"==e&&ap(f.yomi,n,C)&&(t+=f.yomi[n+C],C++)):"ん"!=e||cp(f.yomi,n)||(t="ン"),S.push(_t[t][0])):C=1})),x();document.getElementById("img").src=T}function x(){n(1,g=S.slice(I+k,S.length).join(""))}function M(t){a(t)}return[f,g,m,y,E,_,function(){d(at,o="RESULT",o)},function(){window.removeEventListener("keydown",N),w&&clearTimeout(w),d(at,o="START",o),d(ut,s=0,s),d(lt,i=0,i),d(ht,r="",r)}]}class lp extends st{constructor(t){super(),nt(this,t,up,op,o,{},null,[-1,-1])}}const hp=6;function dp(t,e,n){const s=t.slice();return s[11]=e[n],s}function fp(t,e,n){const s=t.slice();return s[14]=e[n],s[16]=n,s}function pp(t){let e,n,s,i,r,o,a,c,u,l,h,d,m,E,T,I,S,C,k,A,N=(t[1]-1)*t[2]+t[16]+1+"",D=t[14].name+"",R=t[14].result+"",O=t[14].sub_result+"";return{c(){e=y("tr"),n=y("td"),s=v(N),i=w(),r=y("span"),r.textContent="位",o=w(),a=y("td"),c=v(D),u=w(),l=y("span"),l.textContent="さん",h=w(),d=y("td"),m=v(R),E=w(),T=y("span"),T.textContent="枚",I=w(),S=y("td"),C=v(O),k=w(),A=y("span"),A.textContent="回",b(r,"class","ranking-small svelte-8oqu2z"),b(n,"class","ranking-crown-col svelte-8oqu2z"),b(l,"class","ranking-small svelte-8oqu2z"),b(a,"class","ranking-name-col svelte-8oqu2z"),b(T,"class","ranking-small svelte-8oqu2z"),b(d,"class","ranking-result-col svelte-8oqu2z"),b(A,"class","ranking-small svelte-8oqu2z"),b(S,"class","ranking-sub-result-col svelte-8oqu2z"),b(e,"class","svelte-8oqu2z")},m(t,g){p(t,e,g),f(e,n),f(n,s),f(n,i),f(n,r),f(e,o),f(e,a),f(a,c),f(a,u),f(a,l),f(e,h),f(e,d),f(d,m),f(d,E),f(d,T),f(e,I),f(e,S),f(S,C),f(S,k),f(S,A)},p(t,e){2&e&&N!==(N=(t[1]-1)*t[2]+t[16]+1+"")&&_(s,N),1&e&&D!==(D=t[14].name+"")&&_(c,D),1&e&&R!==(R=t[14].result+"")&&_(m,R),1&e&&O!==(O=t[14].sub_result+"")&&_(C,O)},d(t){t&&g(e)}}}function gp(e){let n;return{c(){n=y("tr"),n.innerHTML='<td class="svelte-8oqu2z"></td> \n          <td class="svelte-8oqu2z"></td> \n          <td class="svelte-8oqu2z"></td> \n          <td class="svelte-8oqu2z"></td> \n        ',b(n,"class","svelte-8oqu2z")},m(t,e){p(t,n,e)},p:t,d(t){t&&g(n)}}}function mp(e){let n,s,r,o,a,c,u,l,h,d,v,E,I,_=e[0],S=[];for(let t=0;t<_.length;t+=1)S[t]=pp(fp(e,_,t));let C=Array.from({length:e[2]-e[0].length}),k=[];for(let t=0;t<C.length;t+=1)k[t]=gp(dp(e,C,t));return{c(){n=y("dev"),s=y("table"),r=y("thead"),r.innerHTML='<tr class="svelte-8oqu2z"><th class="svelte-8oqu2z"><i class="fa-solid fa-crown"></i>順位</th> \n        <th class="svelte-8oqu2z"><i class="fa-solid fa-user"></i>ニックネーム</th> \n        <th class="svelte-8oqu2z"><i class="fa-solid fa-check"></i>札の数</th> \n        <th class="svelte-8oqu2z"><i class="fa-solid fa-xmark"></i>お手つき</th></tr>',o=w(),a=y("tbody");for(let t=0;t<S.length;t+=1)S[t].c();c=w();for(let t=0;t<k.length;t+=1)k[t].c();u=w(),l=y("div"),h=y("button"),h.innerHTML='<i class="bi bi-caret-left-fill"></i>',d=w(),v=y("button"),v.innerHTML='<i class="bi bi-caret-right-fill"></i>',b(s,"class","ranking-table svelte-8oqu2z"),b(n,"class","container")},m(t,i){p(t,n,i),f(n,s),f(s,r),f(s,o),f(s,a);for(let t=0;t<S.length;t+=1)S[t]&&S[t].m(a,null);f(a,c);for(let t=0;t<k.length;t+=1)k[t]&&k[t].m(a,null);f(n,u),f(n,l),f(l,h),f(l,d),f(l,v),E||(I=[T(h,"click",e[4]),T(v,"click",e[3])],E=!0)},p(t,[e]){if(7&e){let n;for(_=t[0],n=0;n<_.length;n+=1){const s=fp(t,_,n);S[n]?S[n].p(s,e):(S[n]=pp(s),S[n].c(),S[n].m(a,c))}for(;n<S.length;n+=1)S[n].d(1);S.length=_.length}if(1&e){let n;for(C=Array.from({length:t[2]-t[0].length}),n=0;n<C.length;n+=1){const s=dp(t,C,n);k[n]?k[n].p(s,e):(k[n]=gp(),k[n].c(),k[n].m(a,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=C.length}},i:t,o:t,d(t){t&&g(n),m(S,t),m(k,t),E=!1,i(I)}}}function yp(t,e,n){const s=hp;document.documentElement.style.setProperty("--tr-height",s);let i,r=[],o=[],a=1,c=0;function u(t){const e=(t-1)*s,n=e+s;return r.slice(e,n)}R((async()=>{i=await l()})),O((()=>{i()}));const l=async()=>Qf(af(Xf,"event_results"),(async()=>{const t=await tp();r=t,c=r.length,n(0,o=u(a))}),(t=>{console.log(t)}));return[o,a,s,function(){a<Math.ceil(c/s)&&(n(1,a++,a),n(0,o=u(a)))},function(){a>1&&(n(1,a--,a),n(0,o=u(a)))}]}class vp extends st{constructor(t){super(),nt(this,t,yp,mp,o,{})}}function wp(t){let e;return{c(){e=y("div"),e.innerHTML='<div class="spinner-inner svelte-eaaasu"></div>',b(e,"class","fulfilling-square-spinner svelte-eaaasu")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function Ep(t){let e,n,s,i,r,o,a,c,u,l,h,d;const m=[bp,Tp],T=[];function I(t,e){return t[3]?0:1}return u=I(t),l=T[u]=m[u](t),{c(){e=y("div"),n=v(t[1]),s=v("人中\n      "),i=y("span"),r=v(t[0]),o=v("位 "),a=v("!"),c=w(),l.c(),h=E(),b(i,"class","result-strong svelte-eaaasu"),b(e,"class","result-window result-rank svelte-eaaasu")},m(t,l){p(t,e,l),f(e,n),f(e,s),f(e,i),f(i,r),f(i,o),f(e,a),p(t,c,l),T[u].m(t,l),p(t,h,l),d=!0},p(t,e){(!d||2&e)&&_(n,t[1]),(!d||1&e)&&_(r,t[0]);let s=u;u=I(t),u===s?T[u].p(t,e):(Y(),J(T[s],1,1,(()=>{T[s]=null})),W(),l=T[u],l?l.p(t,e):(l=T[u]=m[u](t),l.c()),Q(l,1),l.m(h.parentNode,h))},i(t){d||(Q(l),d=!0)},o(t){J(l),d=!1},d(t){t&&g(e),t&&g(c),T[u].d(t),t&&g(h)}}}function Tp(t){let e,n,s,i,r,o,a;return i=new It({props:{class:"app-button",$$slots:{default:[Ip]},$$scope:{ctx:t}}}),i.$on("click",t[11]),{c(){e=y("div"),n=y("input"),s=w(),X(i.$$.fragment),b(n,"class","app-form"),b(n,"placeholder","感想を一言お願いします！"),b(e,"class","result-form")},m(c,u){p(c,e,u),f(e,n),S(n,t[4]),p(c,s,u),Z(i,c,u),r=!0,o||(a=T(n,"input",t[14]),o=!0)},p(t,e){16&e&&n.value!==t[4]&&S(n,t[4]);const s={};4194304&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s)},i(t){r||(Q(i.$$.fragment,t),r=!0)},o(t){J(i.$$.fragment,t),r=!1},d(t){t&&g(e),t&&g(s),tt(i,t),o=!1,a()}}}function bp(t){let e,n,s,i;return e=new It({props:{class:"app-button",$$slots:{default:[_p]},$$scope:{ctx:t}}}),e.$on("click",t[12]),s=new It({props:{class:"app-button",$$slots:{default:[Sp]},$$scope:{ctx:t}}}),s.$on("click",t[13]),{c(){X(e.$$.fragment),n=w(),X(s.$$.fragment)},m(t,r){Z(e,t,r),p(t,n,r),Z(s,t,r),i=!0},p(t,n){const i={};4194304&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const r={};4194304&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r)},i(t){i||(Q(e.$$.fragment,t),Q(s.$$.fragment,t),i=!0)},o(t){J(e.$$.fragment,t),J(s.$$.fragment,t),i=!1},d(t){tt(e,t),t&&g(n),tt(s,t)}}}function Ip(e){let n,s;return{c(){n=y("i"),s=v("送信"),b(n,"class","fa-solid fa-paper-plane")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function _p(e){let n,s;return{c(){n=y("i"),s=v("ランキングを見る"),b(n,"class","fa-solid fa-ranking-star")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function Sp(e){let n,s;return{c(){n=y("i"),s=v("スタート画面に戻る"),b(n,"class","fa-solid fa-play")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function Cp(t){let e,n,s,i,r,o,a,u,l,h,d,m,E,T,I,S,C,k,A,N,D,R,O,L,P,x,M=t[2]&&wp(),U=!t[2]&&Ep(t);return{c(){e=y("dev"),n=y("div"),s=v(t[10]),i=v("さんの結果"),r=w(),o=y("div"),a=v("GETした札 … "),u=v(t[9]),l=v("枚"),h=w(),d=y("div"),m=v("お手つきした数 … "),E=v(t[8]),T=v("回"),I=w(),M&&M.c(),S=w(),U&&U.c(),C=w(),k=y("audio"),N=w(),D=y("audio"),O=w(),L=y("audio"),b(n,"class","result-window result-name svelte-eaaasu"),b(o,"class","result-window result-result svelte-eaaasu"),b(d,"class","result-window result-sub-result svelte-eaaasu"),b(e,"class","container"),c(k.src,A="/sounds/roll.mp3")||b(k,"src","/sounds/roll.mp3"),b(k,"preload","auto"),c(D.src,R="/sounds/congratulation1.mp3")||b(D,"src","/sounds/congratulation1.mp3"),b(D,"preload","auto"),c(L.src,P="/sounds/congratulation2.mp3")||b(L,"src","/sounds/congratulation2.mp3"),b(L,"preload","auto")},m(c,g){p(c,e,g),f(e,n),f(n,s),f(n,i),f(e,r),f(e,o),f(o,a),f(o,u),f(o,l),f(e,h),f(e,d),f(d,m),f(d,E),f(d,T),f(e,I),M&&M.m(e,null),f(e,S),U&&U.m(e,null),p(c,C,g),p(c,k,g),t[15](k),p(c,N,g),p(c,D,g),t[16](D),p(c,O,g),p(c,L,g),t[17](L),x=!0},p(t,[n]){(!x||1024&n)&&_(s,t[10]),(!x||512&n)&&_(u,t[9]),(!x||256&n)&&_(E,t[8]),t[2]?M||(M=wp(),M.c(),M.m(e,S)):M&&(M.d(1),M=null),t[2]?U&&(Y(),J(U,1,1,(()=>{U=null})),W()):U?(U.p(t,n),4&n&&Q(U,1)):(U=Ep(t),U.c(),Q(U,1),U.m(e,null))},i(t){x||(Q(U),x=!0)},o(t){J(U),x=!1},d(n){n&&g(e),M&&M.d(),U&&U.d(),n&&g(C),n&&g(k),t[15](null),n&&g(N),n&&g(D),t[16](null),n&&g(O),n&&g(L),t[17](null)}}}function kp(t){t.currentTime=0,t.play()}function Ap(t,e,n){let s,i,r,o,a;u(t,at,(t=>n(19,s=t))),u(t,ht,(t=>n(20,i=t))),u(t,lt,(t=>n(8,r=t))),u(t,ut,(t=>n(9,o=t))),u(t,ct,(t=>n(10,a=t)));let c,l,h,f="",p=0,g=0,m=!0,y=!1,v="";function w(t){"Enter"==t.key&&13==t.keyCode&&E()}function E(){n(3,y=!0),(async(t,e)=>{const n=cf(af(Xf,"event_results"),t);await Wf(n,{feeling:e})})(f,v),window.removeEventListener("keydown",w)}return R((()=>{kp(c),(async()=>{o>0&&(f=await Zf(a,o,r));let t=await(async t=>{const e=await tp(),n=e.find((e=>e.id===t));return[e.indexOf(n)+1,e.length]})(f);n(0,p=t[0]),n(1,g=t[1])})(),setTimeout((()=>{n(2,m=!1),kp(1==p?l:h),window.addEventListener("keydown",w)}),1500)})),O((()=>{d(ct,a="",a),d(ut,o=0,o),d(lt,r=0,r),d(ht,i="",i)})),[p,g,m,y,v,c,l,h,r,o,a,E,function(){d(at,s="RANKING",s)},function(){d(at,s="START",s)},function(){v=this.value,n(4,v)},function(t){M[t?"unshift":"push"]((()=>{c=t,n(5,c)}))},function(t){M[t?"unshift":"push"]((()=>{l=t,n(6,l)}))},function(t){M[t?"unshift":"push"]((()=>{h=t,n(7,h)}))}]}class Np extends st{constructor(t){super(),nt(this,t,Ap,Cp,o,{})}}function Dp(t){let e,n;return e=new It({props:{class:"app-button",$$slots:{default:[Op]},$$scope:{ctx:t}}}),e.$on("click",t[1]),{c(){X(e.$$.fragment)},m(t,s){Z(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function Rp(t){let e,n;return e=new It({props:{class:"app-button disabled",$$slots:{default:[Lp]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(t,s){Z(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function Op(e){let n,s;return{c(){n=y("i"),s=v("スタート！"),b(n,"class","fa-solid fa-play")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function Lp(e){let n,s;return{c(){n=y("i"),s=v("スタート！"),b(n,"class","fa-solid fa-play")},m(t,e){p(t,n,e),p(t,s,e)},p:t,d(t){t&&g(n),t&&g(s)}}}function Pp(t){let e,n,s,i,r,o,a,c,u;const l=[Rp,Dp],h=[];function d(t,e){return t[0]?1:0}return i=d(t),r=h[i]=l[i](t),{c(){e=y("div"),n=y("input"),s=w(),r.c(),o=E(),b(n,"class","app-form"),b(n,"placeholder","ニックネームを入力して、スタート！"),b(e,"class","app-start svelte-1rsxhog")},m(r,l){p(r,e,l),f(e,n),S(n,t[0]),p(r,s,l),h[i].m(r,l),p(r,o,l),a=!0,c||(u=T(n,"input",t[2]),c=!0)},p(t,[e]){1&e&&n.value!==t[0]&&S(n,t[0]);let s=i;i=d(t),i===s?h[i].p(t,e):(Y(),J(h[s],1,1,(()=>{h[s]=null})),W(),r=h[i],r?r.p(t,e):(r=h[i]=l[i](t),r.c()),Q(r,1),r.m(o.parentNode,o))},i(t){a||(Q(r),a=!0)},o(t){J(r),a=!1},d(t){t&&g(e),t&&g(s),h[i].d(t),t&&g(o),c=!1,u()}}}function xp(t,e,n){let s,i;u(t,ct,(t=>n(0,s=t))),u(t,at,(t=>n(3,i=t)));const r=L();function o(){r("playCardSound"),d(at,i="PLAYING",i)}function a(t){s&&"Enter"==t.key&&13==t.keyCode&&o()}return R((()=>{""==s&&d(ct,s=null,s),window.addEventListener("keydown",a)})),O((()=>{window.removeEventListener("keydown",a)})),[s,o,function(){s=this.value,ct.set(s)}]}class Mp extends st{constructor(t){super(),nt(this,t,xp,Pp,o,{})}}function Up(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]])}return n}function Fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}"function"==typeof SuppressedError&&SuppressedError;const $p=Fp,Vp=new Ft("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),jp=new ee("@firebase/auth");function Bp(t,...e){jp.logLevel<=Qt.ERROR&&jp.error(`Auth (${en}): ${t}`,...e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qp(t,...e){throw Kp(t,...e)}function zp(t,...e){return Kp(t,...e)}function Hp(t,e,n){const s=Object.assign(Object.assign({},$p()),{[e]:n});return new Ft("auth","Firebase",s).create(e,{appName:t.name})}function Kp(t,...e){if("string"!=typeof t){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vp.create(t,...e)}function Gp(t,e,...n){if(!t)throw Kp(e,...n)}function Yp(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bp(e),new Error(e)}function Wp(t,e){t||Yp(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qp(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Jp(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Jp()&&"https:"!==Jp()&&!function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Zp{constructor(t,e){this.shortDelay=t,this.longDelay=e,Wp(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tg(t,e){Wp(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eg{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Yp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Yp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Yp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ng={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},sg=new Zp(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ig(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rg(t,e,n,s,i={}){return og(t,i,(async()=>{let i={},r={};s&&("GET"===e?r=s:i={body:JSON.stringify(s)});const o=Bt(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),eg.fetch()(ag(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function og(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ng),e);try{const e=new cg(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw ug(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ug(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw ug(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw ug(t,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Hp(t,a,o);qp(t,a)}}catch(e){if(e instanceof Ut)throw e;qp(t,"network-request-failed",{message:String(e)})}}function ag(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?tg(t.config,i):`${t.config.apiScheme}://${i}`}class cg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(zp(this.auth,"network-request-failed"))),sg.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ug(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=zp(t,e,s);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function lg(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function hg(t){return 1e3*Number(t)}function dg(t){const[e,n,s]=t.split(".");if(void 0===e||void 0===n||void 0===s)return Bp("JWT malformed, contained fewer than 3 sections"),null;try{const t=Nt(n);return t?JSON.parse(t):(Bp("Failed to decode base64 JWT payload"),null)}catch(t){return Bp("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function fg(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Ut&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class pg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gg{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=lg(this.lastLoginAt),this.creationTime=lg(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function mg(t){var e;const n=t.auth,s=await t.getIdToken(),i=await fg(t,async function(t,e){return rg(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:s}));Gp(null==i?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=Up(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new gg(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yg{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Gp(t.idToken,"internal-error"),Gp(void 0!==t.idToken,"internal-error"),Gp(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=dg(t);return Gp(e,"internal-error"),Gp(void 0!==e.exp,"internal-error"),Gp(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Gp(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:s,expiresIn:i}=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */await async function(t,e){const n=await og(t,{},(async()=>{const n=Bt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,r=ag(t,s,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",eg.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:s,expirationTime:i}=e,r=new yg;return n&&(Gp("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),s&&(Gp("string"==typeof s,"internal-error",{appName:t}),r.accessToken=s),i&&(Gp("number"==typeof i,"internal-error",{appName:t}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yg,this.toJSON())}_performRefresh(){return Yp("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vg(t,e){Gp("string"==typeof t||void 0===t,"internal-error",{appName:e})}class wg{constructor(t){var{uid:e,auth:n,stsTokenManager:s}=t,i=Up(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await fg(this,this.stsTokenManager.getToken(this.auth,t));return Gp(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ht(t),s=await n.getIdToken(e),i=dg(s);Gp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r="object"==typeof i.firebase?i.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:lg(hg(i.auth_time)),issuedAtTime:lg(hg(i.iat)),expirationTime:lg(hg(i.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ht(t);await mg(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Gp(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new wg(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Gp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await mg(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fg(this,async function(t,e){return rg(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,s,i,r,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(s=e.email)&&void 0!==s?s:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:E,providerData:T,stsTokenManager:b}=e;Gp(v&&b,t,"internal-error");const I=yg.fromJSON(this.name,b);Gp("string"==typeof v,t,"internal-error"),vg(l,t.name),vg(h,t.name),Gp("boolean"==typeof w,t,"internal-error"),Gp("boolean"==typeof E,t,"internal-error"),vg(d,t.name),vg(f,t.name),vg(p,t.name),vg(g,t.name),vg(m,t.name),vg(y,t.name);const _=new wg({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(_.providerData=T.map((t=>Object.assign({},t)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(t,e,n=!1){const s=new yg;s.updateFromServerResponse(e);const i=new wg({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:n});return await mg(i),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Eg=new Map;function Tg(t){Wp(t instanceof Function,"Expected a class definition");let e=Eg.get(t);return e?(Wp(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eg.set(t,e),e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}bg.type="NONE";const Ig=bg;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _g(t,e,n){return`firebase:${t}:${e}:${n}`}class Sg{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=_g(this.userKey,s.apiKey,i),this.fullPersistenceKey=_g("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?wg._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Sg(Tg(Ig),t,n);const s=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=s[0]||Tg(Ig);const r=_g(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const s=wg._fromJSON(t,e);n!==i&&(o=s),i=n;break}}catch(t){}const a=s.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(r)}catch(t){}}))),new Sg(i,t,n)):new Sg(i,t,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Lg(e))return"Webos";if(Ag(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Rg(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function kg(t=Mt()){return/firefox\//i.test(t)}function Ag(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=Mt()){return/crios\//i.test(t)}function Dg(t=Mt()){return/iemobile/i.test(t)}function Rg(t=Mt()){return/android/i.test(t)}function Og(t=Mt()){return/blackberry/i.test(t)}function Lg(t=Mt()){return/webos/i.test(t)}function Pg(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xg(){return function(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()&&10===document.documentMode}function Mg(t=Mt()){return Pg(t)||Rg(t)||Lg(t)||Og(t)||/windows phone/i.test(t)||Dg(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ug(t,e=[]){let n;switch(t){case"Browser":n=Cg(Mt());break;case"Worker":n=`${Cg(Mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${en}/${s}`}async function Fg(t,e){return rg(t,"GET","/v2/recaptchaConfig",ig(t,e))}function $g(t){return void 0!==t&&void 0!==t.enterprise}class Vg{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jg(t){return new Promise(((e,n)=>{const s=document.createElement("script");var i,r;s.setAttribute("src",t),s.onload=e,s.onerror=t=>{const e=zp("internal-error");e.customData=t,n(e)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(s)}))}class Bg{constructor(t){this.type="recaptcha-enterprise",this.auth=Hg(t)}async verify(t="verify",e=!1){function n(e,n,s){const i=window.grecaptcha;$g(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,s)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Fg(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((s=>{if(void 0!==s.recaptchaKey){const n=new Vg(s);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((i=>{if(!e&&$g(window.grecaptcha))n(i,t,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));jg("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,t,s)})).catch((t=>{s(t)}))}})).catch((t=>{s(t)}))}))}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,s)=>{try{n(t(e))}catch(t){s(t)}}));n.onAbort=e,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zg{constructor(t,e,n,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new qg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Tg(e)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Sg.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null==o?void 0:o.user)||(s=o.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(t){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Gp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await mg(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ht(t):null;return e&&Gp(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Gp(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Tg(t))}))}async initializeRecaptchaConfig(){const t=await Fg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Vg(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new Bg(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ft("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Tg(t)||this._popupRedirectResolver;Gp(e,this,"argument-error"),this.redirectPersistenceManager=await Sg.create(this,[Tg(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,s){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Gp(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,s):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Gp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){jp.logLevel<=Qt.WARN&&jp.warn(`Auth (${en}): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function Hg(t){return Ht(t)}class Kg{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new qt(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return Gp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Gg(t,e,n){const s=Hg(t);Gp(s._canInitEmulator,s,"emulator-config-failed"),Gp(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),r=Yg(e),{host:o,port:a}=function(t){const e=Yg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const t=i[1];return{host:t,port:Wg(s.substr(t.length+1))}}{const[t,e]=s.split(":");return{host:t,port:Wg(e)}}}(e),c=null===a?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */()}function Yg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Qg{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Yp("not implemented")}_getIdTokenResponse(t){return Yp("not implemented")}_linkToIdToken(t,e){return Yp("not implemented")}_getReauthenticationResolver(t){return Yp("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Jg(t,e){return async function(t,e,n,s,i={}){const r=await rg(t,e,n,s,i);return"mfaPendingCredential"in r&&qp(t,"multi-factor-auth-required",{_serverResponse:r}),r}(t,"POST","/v1/accounts:signInWithIdp",ig(t,e))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xg extends Qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Xg(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):qp("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:s}=e,i=Up(e,["providerId","signInMethod"]);if(!n||!s)return null;const r=new Xg(n,s);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(t){return Jg(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jg(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jg(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Bt(e)}return t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tm extends Zg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class em extends tm{constructor(){super("facebook.com")}static credential(t){return Xg._fromParams({providerId:em.PROVIDER_ID,signInMethod:em.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return em.credentialFromTaggedObject(t)}static credentialFromError(t){return em.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return em.credential(t.oauthAccessToken)}catch(t){return null}}}em.FACEBOOK_SIGN_IN_METHOD="facebook.com",em.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class nm extends tm{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Xg._fromParams({providerId:nm.PROVIDER_ID,signInMethod:nm.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return nm.credentialFromTaggedObject(t)}static credentialFromError(t){return nm.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return nm.credential(e,n)}catch(t){return null}}}nm.GOOGLE_SIGN_IN_METHOD="google.com",nm.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class sm extends tm{constructor(){super("github.com")}static credential(t){return Xg._fromParams({providerId:sm.PROVIDER_ID,signInMethod:sm.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sm.credentialFromTaggedObject(t)}static credentialFromError(t){return sm.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return sm.credential(t.oauthAccessToken)}catch(t){return null}}}sm.GITHUB_SIGN_IN_METHOD="github.com",sm.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class im extends tm{constructor(){super("twitter.com")}static credential(t,e){return Xg._fromParams({providerId:im.PROVIDER_ID,signInMethod:im.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return im.credentialFromTaggedObject(t)}static credentialFromError(t){return im.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return im.credential(e,n)}catch(t){return null}}}im.TWITTER_SIGN_IN_METHOD="twitter.com",im.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rm{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,s=!1){const i=await wg._fromIdTokenResponse(t,n,s),r=om(n);return new rm({user:i,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const s=om(n);return new rm({user:t,providerId:s,_tokenResponse:n,operationType:e})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class am extends Ut{constructor(t,e,n,s){var i;super(e.code,e.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,am.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,s){return new am(t,e,n,s)}}function cm(t,e,n,s){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw am._fromErrorAndOperation(t,n,e,s);throw n}))}const um="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lm{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(um,"1"),this.storage.removeItem(um),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hm extends lm{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Mt();return Ag(t)||Pg(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),s=this.localCache[e];n!==s&&t(e,s,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(t.newValue!==s)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const s=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);xg()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,10):s()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}hm.type="LOCAL";const dm=hm;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fm extends lm{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}fm.type="SESSION";const pm=fm;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class gm{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new gm(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:s,data:i}=e.data,r=this.handlersMap[s];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(r).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function mm(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */gm.receivers=[];class ym{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,r;return new Promise(((o,a)=>{const c=mm("",20);s.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:s,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[s.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vm(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function wm(){return void 0!==vm().WorkerGlobalScope&&"function"==typeof vm().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Em="firebaseLocalStorageDb",Tm="firebaseLocalStorage",bm="fbase_key";class Im{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function _m(t,e){return t.transaction([Tm],e?"readwrite":"readonly").objectStore(Tm)}function Sm(){const t=indexedDB.open(Em,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Tm,{keyPath:bm})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Tm)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Em);return new Im(t).toPromise()}(),e(await Sm()))}))}))}async function Cm(t,e,n){const s=_m(t,!0).put({[bm]:e,value:n});return new Im(s).toPromise()}function km(t,e){const n=_m(t,!0).delete(e);return new Im(n).toPromise()}class Am{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Sm()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gm._getInstance(wm()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Sm();return await Cm(t,um,"1"),await km(t,um),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Cm(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=_m(t,!1).get(e),s=await new Im(n).toPromise();return void 0===s?null:s.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>km(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=_m(t,!1).getAll();return new Im(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:s,value:i}of t)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Am.type="LOCAL";const Nm=Am;
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Dm(t,e){return e?Tg(e):(Gp(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */new Zp(3e4,6e4);class Rm extends Qg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jg(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jg(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jg(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Om(t){
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(t,e,n=!1){const s="signIn",i=await cm(t,s,e),r=await rm._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}(t.auth,new Rm(t),t.bypassAuthState)}function Lm(t){const{auth:e,user:n}=t;return Gp(n,e,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await fg(t,cm(s,i,e,t),n);Gp(r.idToken,s,"internal-error");const o=dg(r.idToken);Gp(o,s,"internal-error");const{sub:a}=o;return Gp(t.uid===a,s,"user-mismatch"),rm._forOperation(t,i,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&qp(s,"user-mismatch"),t}}(n,new Rm(t),t.bypassAuthState)}async function Pm(t){const{auth:e,user:n}=t;return Gp(n,e,"internal-error"),async function(t,e,n=!1){const s=await fg(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rm._forOperation(t,"link",s)}(n,new Rm(t),t.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xm{constructor(t,e,n,s,i=!1){this.auth=t,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:s,tenantId:i,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Om;case"linkViaPopup":case"linkViaRedirect":return Pm;case"reauthViaPopup":case"reauthViaRedirect":return Lm;default:qp(this.auth,"internal-error")}}resolve(t){Wp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mm=new Zp(2e3,1e4);async function Um(t,e,n){const s=Hg(t);!function(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&qp(t,"argument-error"),Hp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,e,Zg);const i=Dm(s,n);return new Fm(s,"signInViaPopup",e,i).executeNotNull()}class Fm extends xm{constructor(t,e,n,s,i){super(t,e,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Fm.currentPopupAction&&Fm.currentPopupAction.cancel(),Fm.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Gp(t,this.auth,"internal-error"),t}async onExecution(){Wp(1===this.filter.length,"Popup operations only handle one event");const t=mm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(zp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(zp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fm.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(zp(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Mm.get())};t()}}Fm.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const $m="pendingRedirect",Vm=new Map;class jm extends xm{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Vm.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return _g($m,t.config.apiKey,t.name)}(e),s=function(t){return Tg(t._redirectPersistence)}(t);if(!await s._isAvailable())return!1;const i="true"===await s._get(n);return await s._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Vm.set(this.auth._key(),t)}return this.bypassAuthState||Vm.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Bm(t,e){Vm.set(t._key(),e)}async function qm(t,e,n=!1){const s=Hg(t),i=Dm(s,e),r=new jm(s,i,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Km(t);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Km(t)){const s=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(zp(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hm(t))}saveEventToCache(t){this.cachedEventUids.add(Hm(t)),this.lastProcessedEventTime=Date.now()}}function Hm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Km({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Gm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ym=/^https?/;async function Wm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return rg(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Qm(t))return}catch(t){}qp(t,"unauthorized-domain")}function Qm(t){const e=Qp(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===s?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===s}if(!Ym.test(n))return!1;if(Gm.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jm=new Zp(3e4,6e4);function Xm(){const t=vm().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function Zm(t){return new Promise(((e,n)=>{var s,i,r;function o(){Xm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xm(),n(zp(t,"network-request-failed"))},timeout:Jm.get()})}if(null===(i=null===(s=vm().gapi)||void 0===s?void 0:s.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=vm().gapi)||void 0===r?void 0:r.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return vm()[e]=()=>{gapi.load?o():n(zp(t,"network-request-failed"))},jg(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw ty=null,t}))}let ty=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ey=new Zp(5e3,15e3),ny={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iy(t){const e=t.config;Gp(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tg(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:en},i=sy.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Bt(s).slice(1)}`}async function ry(t){const e=await function(t){return ty=ty||Zm(t),ty}(t),n=vm().gapi;return Gp(n,t,"internal-error"),e.open({where:document.body,url:iy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ny,dontclear:!0},(e=>new Promise((async(n,s)=>{await e.restyle({setHideOnLeave:!1});const i=zp(t,"network-request-failed"),r=vm().setTimeout((()=>{s(i)}),ey.get());function o(){vm().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{s(i)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ay{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function cy(t,e,n,s=500,i=600){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oy),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Mt().toLowerCase();n&&(a=Ng(u)?"_blank":n),kg(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Mt()){var e;return Pg(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e||"",a),new ay(null);const h=window.open(e||"",a,l);Gp(h,t,"popup-blocked");try{h.focus()}catch(t){}return new ay(h)}const uy="__/auth/handler",ly="emulator/auth/handler",hy=encodeURIComponent("fac");async function dy(t,e,n,s,i,r){Gp(t.config.authDomain,t,"auth-domain-config-required"),Gp(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:en,eventId:i};if(e instanceof Zg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof tm){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),u=c?`#${hy}=${encodeURIComponent(c)}`:"";return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${uy}`;return tg(t,ly)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}?${Bt(a).slice(1)}${u}`}const fy="webStorageSupport";const py=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pm,this._completeRedirectFn=qm,this._overrideRedirectResult=Bm}async _openPopup(t,e,n,s){var i;Wp(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return cy(t,await dy(t,e,n,Qp(),s),mm())}async _openRedirect(t,e,n,s){await this._originValidation(t);return function(t){vm().location.href=t}(await dy(t,e,n,Qp(),s)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Wp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await ry(t),n=new zm(t);return e.register("authEvent",(e=>{Gp(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(fy,{type:fy},(n=>{var s;const i=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s[fy];void 0!==i&&e(!!i),qp(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Wm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Mg()||Ag()||Pg()}};var gy="@firebase/auth",my="0.23.2";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Gp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const vy=Pt("authIdTokenMaxAge")||300;let wy=null;function Ey(t=sn()){const e=Xe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Xe(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Vt(n.getOptions(),null!=e?e:{}))return t;qp(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:py,persistence:[Nm,dm,pm]}),s=Pt("authTokenSyncURL");if(s){const t=(i=s,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>vy)return;const s=null==e?void 0:e.token;wy!==s&&(wy=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});!function(t,e,n){Ht(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,s){Ht(t).onIdTokenChanged(e,n,s)}(n,(e=>t(e)))}var i;const r=Ot("auth");return r&&Gg(n,`http://${r}`),n}var Ty;function by(e){let n,s;return n=new vp({}),{c(){X(n.$$.fragment)},m(t,e){Z(n,t,e),s=!0},p:t,i(t){s||(Q(n.$$.fragment,t),s=!0)},o(t){J(n.$$.fragment,t),s=!1},d(t){tt(n,t)}}}function Iy(e){let n,s;return n=new Np({}),{c(){X(n.$$.fragment)},m(t,e){Z(n,t,e),s=!0},p:t,i(t){s||(Q(n.$$.fragment,t),s=!0)},o(t){J(n.$$.fragment,t),s=!1},d(t){tt(n,t)}}}function _y(t){let e,n;return e=new lp({}),e.$on("playKeyStrokeSound",(function(){r(Ay(t[0]))&&Ay(t[0]).apply(this,arguments)})),e.$on("playGetCardSound",(function(){r(Ay(t[1]))&&Ay(t[1]).apply(this,arguments)})),e.$on("playFailSound",(function(){r(Ay(t[2]))&&Ay(t[2]).apply(this,arguments)})),e.$on("playWhistleSound",(function(){r(Ay(t[3]))&&Ay(t[3]).apply(this,arguments)})),{c(){X(e.$$.fragment)},m(t,s){Z(e,t,s),n=!0},p(e,n){t=e},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function Sy(t){let e,n;return e=new Mp({}),e.$on("playCardSound",(function(){r(Ay(t[1]))&&Ay(t[1]).apply(this,arguments)})),{c(){X(e.$$.fragment)},m(t,s){Z(e,t,s),n=!0},p(e,n){t=e},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function Cy(e){let n,s;return{c(){n=y("img"),b(n,"class","google-logo svelte-jtjtfh"),c(n.src,s="/logos/google-logo.gif")||b(n,"src","/logos/google-logo.gif"),b(n,"alt","please login")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function ky(t){let e,n,s,i,o,a,u,l,h,d,m,v,E,I,_,S,C,k,A,N,D,R;e=new Et({});const O=[Cy,Sy,_y,Iy,by],L=[];function P(t,e){return t[4]?"START"===t[5]?1:"PLAYING"===t[5]?2:"RESULT"===t[5]?3:"RANKING"===t[5]?4:-1:0}return~(i=P(t))&&(o=L[i]=O[i](t)),{c(){X(e.$$.fragment),n=w(),s=y("main"),o&&o.c(),a=w(),u=y("a"),u.innerHTML='<img class="qr-code" src="/taiyo_farmland.png" alt="instagram_yohei"/>',l=w(),h=y("audio"),m=w(),v=y("audio"),I=w(),_=y("audio"),C=w(),k=y("audio"),b(u,"href","https://www.instagram.com/taiyo_farmland/"),b(s,"class","svelte-jtjtfh"),c(h.src,d="/sounds/keyStroke.mp3")||b(h,"src","/sounds/keyStroke.mp3"),b(h,"preload","auto"),c(v.src,E="/sounds/getCard.mp3")||b(v,"src","/sounds/getCard.mp3"),b(v,"preload","auto"),c(_.src,S="/sounds/failed.mp3")||b(_,"src","/sounds/failed.mp3"),b(_,"preload","auto"),c(k.src,A="/sounds/whistle.mp3")||b(k,"src","/sounds/whistle.mp3"),b(k,"preload","auto")},m(o,c){Z(e,o,c),p(o,n,c),p(o,s,c),~i&&L[i].m(s,null),f(s,a),f(s,u),p(o,l,c),p(o,h,c),t[6](h),p(o,m,c),p(o,v,c),t[7](v),p(o,I,c),p(o,_,c),t[8](_),p(o,C,c),p(o,k,c),t[9](k),N=!0,D||(R=T(s,"keydown",(function(){r(Ay(t[0]))&&Ay(t[0]).apply(this,arguments)})),D=!0)},p(e,[n]){let r=i;i=P(t=e),i===r?~i&&L[i].p(t,n):(o&&(Y(),J(L[r],1,1,(()=>{L[r]=null})),W()),~i?(o=L[i],o?o.p(t,n):(o=L[i]=O[i](t),o.c()),Q(o,1),o.m(s,a)):o=null)},i(t){N||(Q(e.$$.fragment,t),Q(o),N=!0)},o(t){J(e.$$.fragment,t),J(o),N=!1},d(r){tt(e,r),r&&g(n),r&&g(s),~i&&L[i].d(),r&&g(l),r&&g(h),t[6](null),r&&g(m),r&&g(v),t[7](null),r&&g(I),r&&g(_),t[8](null),r&&g(C),r&&g(k),t[9](null),D=!1,R()}}}function Ay(t){t.currentTime=0,t.play()}function Ny(t,e,n){let s,i,r,o,a,c,l;return u(t,ct,(t=>n(10,s=t))),u(t,ot,(t=>n(4,i=t))),u(t,at,(t=>n(5,r=t))),R((()=>{if(!i){const t=new nm;Um(Ey(),t).then((t=>{d(ot,i=!0,i),d(ct,s=t?.user?.displayName,s)})).catch((t=>{const e=t.code,n=t.message,s=t.email,i=t.credential;console.log(t+" ",e+" ",n+" ",s+" ",i)}))}})),[o,a,c,l,i,r,function(t){M[t?"unshift":"push"]((()=>{o=t,n(0,o)}))},function(t){M[t?"unshift":"push"]((()=>{a=t,n(1,a)}))},function(t){M[t?"unshift":"push"]((()=>{c=t,n(2,c)}))},function(t){M[t?"unshift":"push"]((()=>{l=t,n(3,l)}))}]}Ty="Browser",Je(new Kt("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;Gp(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:Ty,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ug(Ty)},c=new zg(n,s,i,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tg);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Je(new Kt("auth-internal",(t=>(t=>new yy(t))(Hg(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),rn(gy,my,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ty)),rn(gy,my,"esm2017");return new class extends st{constructor(t){super(),nt(this,t,Ny,ky,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
