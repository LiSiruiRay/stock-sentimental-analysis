(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1018:function(t,e,n){var content=n(1384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("d551236c",content,!0,{sourceMap:!1})},1383:function(t,e,n){"use strict";n(1018)},1384:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,".menu-desktop-sub[data-v-ae5af852]{position:relative;color:#253137}.menu-desktop-sub__title-btn[data-v-ae5af852]{display:flex;align-items:center;height:40px;padding:0 8px;font-weight:400;font-size:16px;background-color:#fabf2c;user-select:none;transition:background-color .3s,color .3s}.menu-desktop-sub__title-icon[data-v-ae5af852]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5000 5000'%3E%3Cpath d='M4420 937.5L2500 2879.3 590 937.5 0 1534.2l2500 2528.3 2500-2528.3-580-596.7z'/%3E%3C/svg%3E\");width:8px;height:8px;margin-left:6px;margin-top:2px;background-position:50% calc(50% + 1px);background-repeat:no-repeat;background-size:contain;transition:background .15s,transform .15s}.menu-desktop-sub:hover .menu-desktop-sub__title-btn[data-v-ae5af852]{background-color:#36474f;color:#fff}.menu-desktop-sub:hover .menu-desktop-sub__title-icon[data-v-ae5af852]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5000 5000' fill='%23fff'%3E%3Cpath d='M4420 937.5L2500 2879.3 590 937.5 0 1534.2l2500 2528.3 2500-2528.3-580-596.7z'/%3E%3C/svg%3E\");background-position:50% calc(50% - 1px);transform:rotate(180deg)}.menu-desktop-sub__list-wrp[data-v-ae5af852]{position:absolute;left:0;top:100%;width:auto;min-width:100%;display:flex;overflow:hidden;background-color:#ebeef0;outline:none;backface-visibility:hidden;opacity:0;visibility:hidden;transform:matrix(1,0,0,.1,0,0);transform-origin:center 0 0;transition:opacity .15s,transform .15s}.menu-desktop-sub__list[data-v-ae5af852]{margin:0;padding:0;list-style:none;width:100%}.menu-desktop-sub__item[data-v-ae5af852]{padding:0}.menu-desktop-sub__link[data-v-ae5af852]{height:40px;min-width:150px;box-sizing:border-box;align-items:center;display:flex;padding:0 8px;text-decoration:none;font-weight:300;font-size:16px;white-space:nowrap;color:inherit;transition:background-color .15s,color .15s}.menu-desktop-sub__link[data-v-ae5af852]:hover{background-color:#36474f;color:#fff}.menu-desktop-sub__link-wrp[data-v-ae5af852]{justify-content:flex-start}.menu-desktop-sub:hover .menu-desktop-sub__list-wrp[data-v-ae5af852]{z-index:4;opacity:1;visibility:visible;transform:matrix(1,0,0,1,0,0);transition-duration:.3s;transition-delay:.15s}.menu-desktop-sub_asia .menu-desktop-sub__title-btn[data-v-ae5af852]{font-weight:700}.menu-desktop-sub_asia .menu-desktop-sub__link[data-v-ae5af852]{font-weight:400}.menu-desktop-sub_rtl[data-v-ae5af852]{direction:rtl}.menu-desktop-sub_rtl .menu-desktop-sub__title-icon[data-v-ae5af852]{margin-left:0;margin-right:4px}.menu-desktop-sub_rtl .menu-desktop-sub__list-wrp[data-v-ae5af852]{left:auto;right:0}@media(min-width:1200px){.menu-desktop-sub__title-btn[data-v-ae5af852]{font-size:18px;padding:0 16px}.menu-desktop-sub__link[data-v-ae5af852]{padding:0 16px}}",""]),o.locals={},t.exports=o},1522:function(t,e,n){"use strict";n.r(e);var o=n(7),r=n(10),l=n(834),d=n(8),c=n(3),f=n(119),m={name:"MenuDesktopSub",components:{LinkResolver:f.a},props:{cap:{type:String,default:""},list:{type:Array,default:function(){return[]}}},computed:Object(r.a)(Object(o.a)({},Object(d.d)({languageShort:function(param){return param.currentLanguage.short}}),Object(d.c)({isRtl:c.ROOT.IS_RTL,isAsia:c.ROOT.IS_ASIA})),{columns:function(){return Object(l.a)(this.list,3)}}),mounted:function(){this.checkIfSubMenuIsOutViewport()},methods:{clickHandler:function(param){return param.target.blur()},checkIfSubMenuIsOutViewport:function(){var t,e,n,o=this.$el.querySelector(".menu-desktop-sub__list-wrp");(t=o,e=t.getBoundingClientRect(),n={},n.top=e.top<0,n.left=e.left<0,n.bottom=e.bottom>(window.innerHeight||document.documentElement.clientHeight),n.right=e.right>(window.innerWidth||document.documentElement.clientWidth),n.any=n.top||n.left||n.bottom||n.right,n.all=n.top&&n.left&&n.bottom&&n.right,n).any&&o.classList.add("flex-wrap")}}},k=(n(1383),n(13)),component=Object(k.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-desktop-sub",class:[t.isAsia&&"menu-desktop-sub_asia",t.isRtl&&"menu-desktop-sub_rtl"]},[e("span",{staticClass:"menu-desktop-sub__title-btn"},[t._v(" "+t._s(t.cap)+" "),e("span",{staticClass:"menu-desktop-sub__title-icon"})]),e("div",{staticClass:"menu-desktop-sub__list-wrp"},t._l(t.columns,(function(n,o){return e("ul",{key:o,staticClass:"menu-desktop-sub__list"},t._l(n,(function(n){return e("li",{key:n.id,staticClass:"menu-desktop-sub__item",attrs:{title:n.title}},[n.url&&n.isExternal?e("a",{staticClass:"menu-desktop-sub__link",attrs:{rel:"noopener",href:n.url,target:n.target},on:{"!click":function(e){return t.clickHandler.apply(null,arguments)}}},[t._v(" "+t._s(n.title)+" ")]):n.url?e("LinkResolver",{staticClass:"menu-desktop-sub__link",attrs:{to:n.url,"language-short":t.languageShort},on:{"!click":function(e){return t.clickHandler.apply(null,arguments)}}},[t._v(" "+t._s(n.title)+" ")]):t._e()],1)})),0)})),0)])}),[],!1,null,"ae5af852",null);e.default=component.exports},834:function(t,e,n){"use strict";var o=function(t,e,n){var o=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(n=n>r?r:n)<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var l=Array(r);++o<r;)l[o]=t[o+e];return l},r=n(407),l=n(277),d=Math.ceil,c=Math.max;e.a=function(t,e,n){e=(n?Object(r.a)(t,e,n):void 0===e)?1:c(Object(l.a)(e),0);var f=null==t?0:t.length;if(!f||e<1)return[];for(var m=0,k=0,_=Array(d(f/e));m<f;)_[k++]=o(t,m,m+=e);return _}}}]);