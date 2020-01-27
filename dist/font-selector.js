window.FontSelector=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";t.__esModule=!0,n(1);var o=function(){function e(t,n){n=e.mergeOptionsWithDefaults(n),e.initializeFontSelectors(n,t)}return e.initializeFontSelectors=function(t,n){document.querySelectorAll(n).forEach((function(n){e.loadFonts(n);var o=e.wrapSelectElement(n,t),a=e.createDropdownElement(n,t);o.appendChild(a)}))},e.mergeOptionsWithDefaults=function(t){return t=Object.assign(e.getDefaultOptions(),t)},e.getDefaultOptions=function(){return{wrapperClassName:"font-selector-wrapper",dropdownClassName:"font-selector-dropdown",dropdownSelectedFontClassName:"font-selector-selected-font",dropdownSelectedFontNameClassName:"font-selector-selected-font-name",dropdownFontListClassName:"font-selector-font-list",isExpandedClassName:"font-selector-is-expanded",onExpanded:function(){},onSelected:function(){},onCollapsed:function(){}}},e.createDropdownElement=function(e,t){var n=document.createElement("div"),o=document.createElement("ul"),a=this.getSelectedOption(e),s=a.value,l=a.textContent.trim(),r=this.createSelectedFontElement(s,l,n,t);return this.createFontListListItemElements(n,e,r,t).forEach((function(e){o.appendChild(e)})),n.classList.add(t.dropdownClassName),o.classList.add(t.dropdownFontListClassName),n.appendChild(r),n.appendChild(o),n},e.createSelectedFontElement=function(e,t,n,o){var a=this,s=document.createElement("a"),l=this.getFontFamilyClassName(e),r=document.createElement("span");return r.textContent=t,r.classList.add(o.dropdownSelectedFontNameClassName),s.append(r),s.classList.add(o.dropdownSelectedFontClassName,l),s.addEventListener("click",(function(){a.isExpanded(n,o)?a.collapseFontList(n,o):a.expandFontList(n,o)})),document.body.addEventListener("click",(function(e){e.target&&e.target===s||a.collapseFontList(n,o)})),s},e.isExpanded=function(e,t){return e.classList.contains(t.isExpandedClassName)},e.expandFontList=function(e,t){e.classList.add(t.isExpandedClassName),t.onExpanded()},e.collapseFontList=function(e,t){e.classList.remove(t.isExpandedClassName),t.onCollapsed()},e.createFontListListItemElements=function(e,t,n,o){for(var a=this,s=[],l=function(l){var i=document.createElement("li"),d=t.options[l],c=d.value,u=d.textContent.trim(),p=r.getFontFamilyClassName(c);i.classList.add(p),i.textContent=u,i.setAttribute("data-font",c),i.addEventListener("click",(function(){a.selectFont(i.getAttribute("data-font"),u,e,t,n,o)})),s.push(i)},r=this,i=0;i<t.options.length;i++)l(i);return s},e.selectFont=function(e,t,n,o,a,s){var l=this.getSelectedOption(o),r=this.getFontFamilyClassName(l.value),i=this.getFontFamilyClassName(e),d=document.createElement("span");d.classList.add(s.dropdownSelectedFontNameClassName),a.classList.add(s.dropdownSelectedFontClassName,i),this.collapseFontList(n,s),a.classList.remove(r),a.classList.add(i),d.textContent=t,a.innerHTML="",a.append(d),o.value=e,s.onSelected(e)},e.wrapSelectElement=function(e,t){var n=e.parentNode,o=document.createElement("div");return o.classList.add(t.wrapperClassName),n.insertBefore(o,e),o.appendChild(e),o},e.getSelectedOption=function(e){return e.options[e.options.selectedIndex]},e.loadFonts=function(e){for(var t=0;t<e.options.length;t++){var n=e.options[t],o=n.value,a=n.getAttribute("data-font-url");this.loadFont(o,a)}},e.loadFont=function(e,t){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML="\n@font-face { font-family: '"+e+"'; src: url('"+t+"'); }\n",n.innerHTML+="."+this.getFontFamilyClassName(e)+'{ font-family: "'+e+'"}',document.head.append(n)},e.getFontFamilyClassName=function(e){return"font-"+e.replace(/[^a-z0-9\-]/gi,"-").toLowerCase()},e}();t.default=o},function(e,t,n){}]).default;