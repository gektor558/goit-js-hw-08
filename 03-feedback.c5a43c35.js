!function(){function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof r&&r&&r.Object===Object&&r,c="object"==typeof self&&self&&self.Object===Object&&self,v=f||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,y=function(){return v.Date.now()};function E(e,t,r){var n,a,o,l,s,u,f=0,c=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function E(t){var r=n,i=a;return n=a=void 0,f=t,l=e.apply(i,r)}function h(e){return f=e,s=setTimeout(S,t),c?E(e):l}function U(e){var r=e-u;return void 0===u||r>=t||r<0||v&&e-f>=o}function S(){var e=y();if(U(e))return j(e);s=setTimeout(S,function(e){var r=t-(e-u);return v?g(r,o-(e-f)):r}(e))}function j(e){return s=void 0,m&&n?E(e):(n=a=void 0,l)}function O(){var e=y(),r=U(e);if(n=arguments,a=this,u=e,r){if(void 0===s)return h(u);if(v)return s=setTimeout(S,t),E(u)}return void 0===s&&(s=setTimeout(S,t)),l}return t=b(t)||0,p(r)&&(c=!!r.leading,o=(v="maxWait"in r)?d(b(r.maxWait)||0,t):o,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==s&&clearTimeout(s),f=0,n=u=a=s=void 0},O.flush=function(){return void 0===s?l:j(y())},O}function p(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(p(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=p(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=l.test(t);return i||s.test(t)?u(t.slice(2),i?2:8):o.test(t)?NaN:+t}t=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return p(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),E(e,t,{leading:n,maxWait:t,trailing:a})};var h={formUserEl:document.querySelector(".feedback-form"),localStorageKey:"feedback-form-state"};h.saveUserEmailEl=h.formUserEl.children[0].firstElementChild,h.saveUserMessageEl=h.formUserEl.children[1].firstElementChild;var U=e(t)((function(){try{var e=h.localStorageKey,t={email:h.saveUserEmailEl.value,message:h.saveUserMessageEl.value},r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}),500);h.saveUserEmailEl.addEventListener("input",U),h.saveUserMessageEl.addEventListener("input",U);var S=function(){try{var e=localStorage.getItem(h.localStorageKey);return null===e?{email:"",message:""}:JSON.parse(e)}catch(e){return console.error("Get state error: ",e.message),{email:"",message:""}}}();h.saveUserEmailEl.value=S.email,h.saveUserMessageEl.value=S.message,h.formUserEl.addEventListener("submit",(function(e){e.preventDefault();var t={email:h.saveUserEmailEl.value,message:h.saveUserMessageEl.value};if(""===t.email.trim()||""===t.message.trim())return void alert("Будь ласка, заповніть усі обов'язкові поля");h.formUserEl.reset(),localStorage.removeItem(h.localStorageKey),console.log(t)}))}();
//# sourceMappingURL=03-feedback.c5a43c35.js.map