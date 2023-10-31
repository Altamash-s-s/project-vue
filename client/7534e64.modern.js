(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{398:function(t,e,n){},411:function(t,e,n){"use strict";n(398)},437:function(t,e,n){},454:function(t,e,n){"use strict";var c={name:"SfListItem"},r=n(8),l=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"sf-list__item"},[t._t("default")],2)}),[],!1,null,null,null).exports;n(4).default.component("SfListItem",l);var o={name:"SfList"},d=(n(411),Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"sf-list"},[t._t("default")],2)}),[],!1,null,null,null));e.a=d.exports},470:function(t,e,n){"use strict";n(437)},491:function(t,e,n){"use strict";e.a={functional:!0,props:{transition:{type:[String,Boolean],default:"fade"},group:{type:Boolean,default:!1}},render(t,{data:data,children:e,props:n}){const c=!1===n.transition;return t(n.group?"transition-group":"transition",{...data,attrs:{name:c?"":n.transition}},e)}}},492:function(t,e,n){},544:function(t,e,n){"use strict";n(492)},642:function(t,e,n){},643:function(t,e,n){},682:function(t,e,n){"use strict";var c={name:"SfCharacteristic",components:{SfIcon:n(28).a},props:{colorIcon:{type:String,default:""},sizeIcon:{type:String,default:""},icon:{type:[String,Array],default:""},title:{type:String,default:""},description:{type:String,default:""}}},r=(n(470),n(8)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-characteristic"},[t._t("icon",(function(){return[n("div",{staticClass:"sf-characteristic__icon"},[n("SfIcon",{attrs:{"aria-hidden":"true",color:t.colorIcon,size:t.sizeIcon,icon:t.icon}})],1)]}),null,{colorIcon:t.colorIcon,sizeIcon:t.sizeIcon,icon:t.icon}),t._v(" "),t._t("text",(function(){return[n("div",{staticClass:"sf-characteristic__text"},[t._t("title",(function(){return[n("div",{staticClass:"sf-characteristic__title"},[t._v(t._s(t.title))])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("div",{staticClass:"sf-characteristic__description"},[t._v(t._s(t.description))])]}),null,{description:t.description})],2)]}),null,{title:t.title,description:t.description})],2)}),[],!1,null,null,null);e.a=component.exports},849:function(t,e,n){"use strict";n(642)},850:function(t,e,n){"use strict";n(643)},894:function(t,e,n){"use strict";var c=n(147),r=n(491),l=n(144),o=n(27),d=n(81),f=n(384),_={name:"SfBottomModal",components:{SfOverlay:c.a,SfButton:o.a,SfCircleIcon:d.a,SfHeading:l.a,SfTransition:r.a},props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:""},transition:{type:[String,Boolean],default:""}},watch:{isOpen:{handler(t){f.a&&(t?document.addEventListener("keydown",this.keydownHandler):document.removeEventListener("keydown",this.keydownHandler))},immediate:!0}},methods:{close(){this.$emit("click:close")},keydownHandler(t){"Escape"!==t.key&&"Esc"!==t.key&&27!==t.keyCode||this.close()}}},m=(n(544),n(8)),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-bottom-modal"},[n("SfOverlay",{staticClass:"sf-bottom-modal__overlay",attrs:{visible:t.isOpen},on:{click:t.close}}),t._v(" "),n("SfTransition",{attrs:{transition:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"sf-bottom-modal__container",attrs:{role:"dialog","aria-modal":"true"}},[t._t("title",(function(){return[n("SfHeading",{staticClass:"sf-bottom-modal__title",class:{"display-none":!t.title},attrs:{level:3,title:t.title}})]})),t._v(" "),t._t("close-desktop",(function(){return[n("SfCircleIcon",{staticClass:"sf-circle-icon--small sf-bottom-modal__close",attrs:{"aria-label":"Close",icon:"cross"},on:{click:t.close}})]})),t._v(" "),t._t("default"),t._v(" "),t._t("close-mobile",(function(){return[n("SfButton",{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{click:t.close}},[t._v("Cancel")])]}))],2)])],1)}),[],!1,null,null,null);e.a=component.exports},911:function(t,e,n){"use strict";n.r(e);n(12);var c=n(27),r=n(0),l=n(82),o=n(454),d=n(894),f=n(682),_=n(15),m=Object(r.b)({name:"CurrenciesModal",components:{SfButton:c.a,SfList:o.a,SfBottomModal:d.a,SfCharacteristic:f.a},props:{isModalOpen:Boolean,selectedCurrency:{type:String,default:""}},emits:["closeModal"],setup(){var{currency:t,change:e,load:n}=Object(_.f)(),c=Object(r.a)((()=>{var e;return(null===(e=t.value)||void 0===e?void 0:e.available_currency_codes)||[]}));return Object(r.g)((()=>{var e;t.value&&(null===(e=t.value)||void 0===e?void 0:e.available_currency_codes)||n()})),{changeCurrency:e,availableCurrencies:c}},methods:{closeModal(){this.$emit("closeModal")}}}),v=(n(849),n(8)),y=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfBottomModal",{attrs:{"is-open":t.isModalOpen,title:t.$t("Choose Currency")},on:{"click:close":t.closeModal},scopedSlots:t._u([{key:"close-mobile",fn:function(){return[n("SfButton",{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{click:t.closeModal}},[t._v("\n      "+t._s(t.$t("Cancel"))+"\n    ")])]},proxy:!0}])},[t.availableCurrencies.length>1?n("SfList",t._l(t.availableCurrencies,(function(e){return n("SfListItem",{key:e},[n("a",{class:t.selectedCurrency===e?"container__currency--selected-label":"",attrs:{href:"/"},on:{click:function(n){return n.preventDefault(),t.changeCurrency({id:e})}}},[n("SfCharacteristic",{staticClass:"currency",scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(e))])]},proxy:!0}],null,!0)})],1)])})),1):t._e()],1)}),[],!1,null,"4503cfed",null).exports,C=Object(r.b)({name:"CurrencySelector",components:{SfButton:c.a,CurrenciesModal:y},setup(){var{selectedCurrency:t,selectedLocale:e}=Object(l.a)();return{currentCurrencySymbol:Object(r.a)((()=>{try{return(0).toLocaleString(e.value.replace(/[!"$-/:-?[\]^_`{-~]/,"-"),{style:"currency",currency:t.value,minimumFractionDigits:0,maximumFractionDigits:0}).replace(/\d/g,"").trim()}catch(t){return e.value}})),isCurrencyModalOpen:Object(r.l)(!1),selectedCurrency:t,selectedLocale:e}}}),S=(n(850),Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("SfButton",{staticClass:"container__currency container__currency--selected",on:{click:function(e){t.isCurrencyModalOpen=!t.isCurrencyModalOpen}}},[t._v("\n    "+t._s(t.currentCurrencySymbol)+"\n  ")]),t._v(" "),t.isCurrencyModalOpen?n("CurrenciesModal",{attrs:{"is-modal-open":t.isCurrencyModalOpen,"selected-currency":t.selectedCurrency},on:{closeModal:function(e){t.isCurrencyModalOpen=!1}}}):t._e()],1)}),[],!1,null,"201046b0",null));e.default=S.exports}}]);
//# sourceMappingURL=7534e64.modern.js.map