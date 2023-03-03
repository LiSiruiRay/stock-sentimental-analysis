(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1015:function(e,t,c){var content=c(1378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(27).default)("57f4b6ec",content,!0,{sourceMap:!1})},1377:function(e,t,c){"use strict";c(1015)},1378:function(e,t,c){var r=c(26)((function(i){return i[1]}));r.push([e.i,".tickers-desktop[data-v-3e40cdf6]{display:flex;justify-content:flex-end;font-size:.8125rem;line-height:1}.tickers-desktop__select[data-v-3e40cdf6]{flex-shrink:0;position:relative;display:flex;flex-direction:column;align-items:center}.tickers-desktop__select-space[data-v-3e40cdf6]{display:block;font-weight:100;opacity:0}.tickers-desktop__select-btn[data-v-3e40cdf6]{background-color:transparent;cursor:pointer;padding:0;margin-top:8px;width:18px;height:19px;border:none;display:block;transition:border-color .3s}.tickers-desktop__select-icon[data-v-3e40cdf6]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 19'%3E%3Cpath fill='%23465a65' d='M9.5.5a9 9 0 109 9 9 9 0 00-9-9zm0 17a8 8 0 118-8 8 8 0 01-8 8z'/%3E%3Cpath fill='%239daab1' d='M13.8 7.93a.4.4 0 01.57 0 .43.43 0 01.13.3.42.42 0 01-.13.3l-4.58 4.56a.43.43 0 01-.58 0L4.63 8.5a.4.4 0 010-.57.41.41 0 01.57-.06v.06l4.3 4.3z'/%3E%3C/svg%3E\");width:18px;height:18px;background-position:50%;background-repeat:no-repeat;background-size:contain;transition:background .3s}.tickers-desktop__select-btn:hover .tickers-desktop__select-icon[data-v-3e40cdf6]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 19'%3E%3Cpath fill='%23fabf2c' d='M9.5.5a9 9 0 109 9 9 9 0 00-9-9zm0 17a8 8 0 118-8 8 8 0 01-8 8z'/%3E%3Cpath fill='%239daab1' d='M13.8 7.93a.4.4 0 01.57 0 .43.43 0 01.13.3.42.42 0 01-.13.3l-4.58 4.56a.43.43 0 01-.58 0L4.63 8.5a.4.4 0 010-.57.41.41 0 01.57-.06v.06l4.3 4.3z'/%3E%3C/svg%3E\")}.tickers-desktop__currency-selector[data-v-3e40cdf6]{position:absolute;left:calc(50% - 80px);top:calc(50% + 18px);width:160px;transform-origin:center 0 0}.tickers-desktop__list[data-v-3e40cdf6]{display:flex;align-items:center;white-space:nowrap;margin:0;padding:0;list-style:none}.tickers-desktop__item[data-v-3e40cdf6]{flex-shrink:0;padding:0 10px;color:#465a65;border-right:1px solid #324149}.tickers-desktop__item[data-v-3e40cdf6]:last-child{border-right:0}.tickers-desktop__link[data-v-3e40cdf6]{display:block;text-decoration:none;color:inherit;cursor:pointer}.tickers-desktop__coin-cap[data-v-3e40cdf6]{display:block;color:#fabf2c;font-weight:100}.tickers-desktop__coin-value[data-v-3e40cdf6]{direction:ltr;display:block;margin-top:10px;color:#fff}.tickers-desktop__coin-diff[data-v-3e40cdf6]{direction:ltr;display:block;margin-top:10px;font-size:.75rem}.tickers-desktop__coin-value_up[data-v-3e40cdf6]{color:#3abc98}.tickers-desktop__coin-value_down[data-v-3e40cdf6]{color:#ff4a68}.tickers-desktop__link:hover .tickers-desktop__coin-cap[data-v-3e40cdf6]{text-decoration:underline}.tickers-desktop_rtl[data-v-3e40cdf6]{direction:rtl}.tickers-desktop_rtl .tickers-desktop__item[data-v-3e40cdf6]{border-left:1px solid #324149;border-right:0}.tickers-desktop_rtl .tickers-desktop__item[data-v-3e40cdf6]:last-child{border-left:0}@media(min-width:1200px){.tickers-desktop[data-v-3e40cdf6]{font-size:1rem}.tickers-desktop__item[data-v-3e40cdf6]{padding-left:15px;padding-right:15px}}",""]),r.locals={},e.exports=r},1538:function(e,t,c){"use strict";c.r(t);var r=c(7),o=c(10),n=c(8),d=c(3),l={name:"TickersDesktop",components:{CurrencySelector:c(524).a},data:function(){return{isCurrencySelectorShown:!1,isCurrencySelectorInTransition:!1}},computed:Object(r.a)({},Object(n.d)({languageShort:function(param){return param.currentLanguage.short}}),Object(n.c)({isRtl:d.ROOT.IS_RTL}),Object(n.c)("tickers",{coins:d.TICKERS.DESKTOP_COINS_BY_CURRENCY,currencySign:d.TICKERS.SIGN})),methods:Object(o.a)(Object(r.a)({},Object(n.b)("tickers",{handleCurrencyChange:d.TICKERS.SET_CURRENCY})),{handleCurrencySelectorShow:function(){this.isCurrencySelectorInTransition||(this.isCurrencySelectorShown=!0)},handleCurrencySelectorHide:function(){var e=this;this.isCurrencySelectorShown=!1,this.$nextTick((function(){e.$refs.currencySelectorButton.focus()}))}})},k=(c(1377),c(13)),component=Object(k.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"tickers-desktop",class:[e.isRtl&&"tickers-desktop_rtl"]},[t("div",{staticClass:"tickers-desktop__select"},[t("span",{staticClass:"tickers-desktop__select-space"},[e._v("X")]),t("button",{ref:"currencySelectorButton",staticClass:"btn tickers-desktop__select-btn",attrs:{type:"button"},on:{click:e.handleCurrencySelectorShow}},[e._m(0)]),t("Transition",{attrs:{name:"drop"},on:{"before-enter":function(t){e.isCurrencySelectorInTransition=!0},"before-leave":function(t){e.isCurrencySelectorInTransition=!0},"after-enter":function(t){e.isCurrencySelectorInTransition=!1},"after-leave":function(t){e.isCurrencySelectorInTransition=!1}}},[e.isCurrencySelectorShown?t("CurrencySelector",{staticClass:"tickers-desktop__currency-selector",on:{"on-hide":e.handleCurrencySelectorHide}}):e._e()],1)],1),t("ul",{staticClass:"tickers-desktop__list"},e._l(e.coins,(function(c){return t("li",{key:c.id,staticClass:"tickers-desktop__item"},[t("NuxtLink",{staticClass:"tickers-desktop__link",attrs:{to:c.url,"language-short":e.languageShort}},[t("span",{staticClass:"tickers-desktop__coin-cap",attrs:{"data-e2e":"name"}},[e._v(" "+e._s(c.name)+" ")]),t("span",{staticClass:"tickers-desktop__coin-value",attrs:{"data-e2e":"price"}},[e._v(" "+e._s(e.currencySign)+e._s(c.valueAltDesktop)+" ")]),t("span",{staticClass:"tickers-desktop__coin-diff",class:{"tickers-desktop__coin-value_up":c.isUp,"tickers-desktop__coin-value_down":c.isDown},attrs:{"data-e2e":"change"}},[e._v(" "+e._s(c.changePercentage)+" ")])])],1)})),0)])}),[function(){var e=this._self._c;return e("span",{staticClass:"btn__wrp"},[e("span",{staticClass:"btn__icon tickers-desktop__select-icon"})])}],!1,null,"3e40cdf6",null);t.default=component.exports}}]);