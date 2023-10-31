(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{473:function(t,e,n){},486:function(t,e,n){"use strict";n(473)},512:function(t,e,n){},529:function(t,e,n){"use strict";var o={name:"SfListItem"},l=n(9),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"sf-list__item"},[t._t("default")],2)}),[],!1,null,null,null).exports;n(6).default.component("SfListItem",c);var r={name:"SfList"},f=(n(486),Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"sf-list"},[t._t("default")],2)}),[],!1,null,null,null));e.a=f.exports},545:function(t,e,n){"use strict";n(512)},566:function(t,e,n){"use strict";e.a={functional:!0,props:{transition:{type:[String,Boolean],default:"fade"},group:{type:Boolean,default:!1}},render(t,{data:data,children:e,props:n}){const o=!1===n.transition;return t(n.group?"transition-group":"transition",{...data,attrs:{name:o?"":n.transition}},e)}}},567:function(t,e,n){},622:function(t,e,n){"use strict";n(567)},722:function(t,e,n){},723:function(t,e,n){},760:function(t,e,n){"use strict";var o={name:"SfCharacteristic",components:{SfIcon:n(50).a},props:{colorIcon:{type:String,default:""},sizeIcon:{type:String,default:""},icon:{type:[String,Array],default:""},title:{type:String,default:""},description:{type:String,default:""}}},l=(n(545),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-characteristic"},[t._t("icon",(function(){return[n("div",{staticClass:"sf-characteristic__icon"},[n("SfIcon",{attrs:{"aria-hidden":"true",color:t.colorIcon,size:t.sizeIcon,icon:t.icon}})],1)]}),null,{colorIcon:t.colorIcon,sizeIcon:t.sizeIcon,icon:t.icon}),t._v(" "),t._t("text",(function(){return[n("div",{staticClass:"sf-characteristic__text"},[t._t("title",(function(){return[n("div",{staticClass:"sf-characteristic__title"},[t._v(t._s(t.title))])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("div",{staticClass:"sf-characteristic__description"},[t._v(t._s(t.description))])]}),null,{description:t.description})],2)]}),null,{title:t.title,description:t.description})],2)}),[],!1,null,null,null);e.a=component.exports},929:function(t,e,n){"use strict";n(722)},930:function(t,e,n){"use strict";n(723)},978:function(t,e,n){"use strict";var o=n(204),l=n(566),c=n(199),r=n(49),f=n(118),d=n(459),_={name:"SfBottomModal",components:{SfOverlay:o.a,SfButton:r.a,SfCircleIcon:f.a,SfHeading:c.a,SfTransition:l.a},props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:""},transition:{type:[String,Boolean],default:""}},watch:{isOpen:{handler:function(t){d.a&&(t?document.addEventListener("keydown",this.keydownHandler):document.removeEventListener("keydown",this.keydownHandler))},immediate:!0}},methods:{close:function(){this.$emit("click:close")},keydownHandler:function(t){"Escape"!==t.key&&"Esc"!==t.key&&27!==t.keyCode||this.close()}}},m=(n(622),n(9)),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-bottom-modal"},[n("SfOverlay",{staticClass:"sf-bottom-modal__overlay",attrs:{visible:t.isOpen},on:{click:t.close}}),t._v(" "),n("SfTransition",{attrs:{transition:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"sf-bottom-modal__container",attrs:{role:"dialog","aria-modal":"true"}},[t._t("title",(function(){return[n("SfHeading",{staticClass:"sf-bottom-modal__title",class:{"display-none":!t.title},attrs:{level:3,title:t.title}})]})),t._v(" "),t._t("close-desktop",(function(){return[n("SfCircleIcon",{staticClass:"sf-circle-icon--small sf-bottom-modal__close",attrs:{"aria-label":"Close",icon:"cross"},on:{click:t.close}})]})),t._v(" "),t._t("default"),t._v(" "),t._t("close-mobile",(function(){return[n("SfButton",{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{click:t.close}},[t._v("Cancel")])]}))],2)])],1)}),[],!1,null,null,null);e.a=component.exports},998:function(t,e,n){"use strict";n.r(e);var o=n(198),l=n(49),c=n(760),r=n(205),f=n(0),d=n(529),_=n(978),m=n(30),v=Object(f.b)({name:"StoresModal",components:{SfButton:l.a,SfList:d.a,SfBottomModal:_.a,SfCharacteristic:c.a,SfImage:r.a},props:{isLangModalOpen:Boolean,storeConfig:{type:Object,default:function(){return{}}}},emits:["closeModal"],setup:function(){var t=Object(m.m)(),e=t.stores,n=t.change,o=t.load,l=Object(f.a)((function(){var t;return null!==(t=e.value)&&void 0!==t?t:[]}));return Object(f.g)((function(){var t;e.value&&(null===(t=e.value)||void 0===t?void 0:t.length)||o()})),{availableStores:l,changeStore:n}},methods:{closeModal:function(){this.$emit("closeModal")}}}),S=(n(929),n(9)),h=Object(S.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfBottomModal",{attrs:{"is-open":t.isLangModalOpen,title:t.availableStores.length>0?t.$t("Change Store"):""},on:{"click:close":t.closeModal},scopedSlots:t._u([{key:"close-mobile",fn:function(){return[n("SfButton",{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{click:t.closeModal}},[t._v("\n      "+t._s(t.$t("Cancel"))+"\n    ")])]},proxy:!0}])},[t.availableStores.length>1?n("SfList",t._l(t.availableStores,(function(e){return n("SfListItem",{key:e.id},[n("a",{staticClass:"container__store--link",class:t.storeConfig.store_code===e.store_code?"container__store--selected":"",attrs:{href:"/"},on:{click:function(n){return n.preventDefault(),t.changeStore(e)}}},[n("SfCharacteristic",{staticClass:"language",scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(e.store_name))])]},proxy:!0},{key:"icon",fn:function(){return[n("SfImage",{staticClass:"language__flag",attrs:{"image-tag":"nuxt-img",src:"/icons/langs/"+e.locale+".webp",width:"20",height:"20",alt:"Flag"}})]},proxy:!0}],null,!0)})],1)])})),1):t._e()],1)}),[],!1,null,"1b5b2b7c",null).exports,C=Object(f.b)({name:"StoreSwitcher",components:{StoresModal:h,SfButton:l.a,SfCharacteristic:c.a,SfImage:r.a,LazyHydrate:o.a},setup:function(){var t=Object(m.c)().config;return{isLangModalOpen:Object(f.l)(!1),storeConfig:t}}}),y=(n(930),Object(S.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("SfButton",{staticClass:"container__lang container__lang--selected",on:{click:function(e){t.isLangModalOpen=!t.isLangModalOpen}}},[n("SfCharacteristic",{staticClass:"store-switcher",scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"desktop-only"},[t._v(t._s(t.storeConfig.store_name))])]},proxy:!0},t.storeConfig.locale?{key:"icon",fn:function(){return[n("SfImage",{staticClass:"language__flag",attrs:{"image-tag":"nuxt-img",src:"/icons/langs/"+t.storeConfig.locale+".webp",width:"20",height:"20",alt:"Flag"}})]},proxy:!0}:null],null,!0)})],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[t.isLangModalOpen?n("StoresModal",{attrs:{"store-config":t.storeConfig,"is-lang-modal-open":t.isLangModalOpen},on:{closeModal:function(e){t.isLangModalOpen=!1}}}):t._e()],1)],1)}),[],!1,null,"d8ef8c7c",null));e.default=y.exports}}]);
//# sourceMappingURL=11f0e21.js.map