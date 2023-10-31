(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{394:function(e,t,n){},396:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){"use strict";n(394)},401:function(e,t,n){},404:function(e,t,n){"use strict";n(396)},405:function(e,t,n){"use strict";var l={name:"SfChevron",directives:{focus:n(382).a}},c=(n(404),n(8)),component=Object(c.a)(l,(function(e,t){var n=t._c;return n("span",t._g(t._b({class:[t.data.class,t.data.staticClass,"sf-chevron"],style:[t.data.style,t.data.staticStyle]},"span",t.data.attrs,!1),t.listeners),[t._t("default",(function(){return[n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),t._v(" "),n("span",{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]}))],2)}),[],!0,null,null,null);t.a=component.exports},406:function(e,t,n){"use strict";var l={name:"SfScrollable",components:{SfButton:n(27).a},props:{maxContentHeight:{type:String,default:""},showText:{type:String,default:"Show"},hideText:{type:String,default:"Hide"}},data:()=>({isHidden:!0,hasScroll:!1}),computed:{style(){return{"--_scrollable-max-height":this.maxContentHeight.trim()?this.maxContentHeight:void 0}}}},c=(n(400),n(8)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sf-scrollable",class:{"is-open":!e.isHidden}},[n("div",{ref:"content",staticClass:"sf-scrollable__content",style:e.style},[e._t("default")],2),e._v(" "),e._t("view-all",(function(){return[n("SfButton",{directives:[{name:"show",rawName:"v-show",value:e.hasScroll,expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{click:function(t){e.isHidden=!e.isHidden}}},[e.isHidden?n("span",[e._v(e._s(e.showText))]):n("span",[e._v(e._s(e.hideText))])])]}),null,{hasScroll:e.hasScroll,showText:e.showText,hideText:e.hideText})],2)}),[],!1,null,null,null);t.a=component.exports},412:function(e,t,n){"use strict";n(399)},415:function(e,t,n){"use strict";n(401)},455:function(e,t,n){"use strict";var l=n(4),c=n(384),r=n(405),o=n(27),d=n(406),h={name:"SfTab",components:{SfChevron:r.a,SfScrollable:d.a,SfButton:o.a},inject:["tabConfig"],props:{title:{type:String,default:""}},data:()=>({isActive:!1,desktopMin:1024}),computed:{tabMaxContentHeight(){return this.tabConfig.tabMaxContentHeight},tabShowText(){return this.tabConfig.tabShowText},tabHideText(){return this.tabConfig.tabHideText}},methods:{tabClick(){if(c.a){var e=Math.max(document.documentElement.clientWidth,window.innerWidth);this.isActive&&e>this.desktopMin||this.$parent.$emit("toggle",this._uid)}}}},f=n(8),v=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sf-tabs__tab"},[e._t("title",(function(){return[n("SfButton",{staticClass:"sf-button--pure sf-tabs__title",class:{"is-active":e.isActive},attrs:{"aria-pressed":e.isActive.toString()},on:{click:e.tabClick}},[e._v("\n      "+e._s(e.title)+"\n      "),n("SfChevron",{staticClass:"sf-tabs__chevron",class:{"sf-chevron--right":!e.isActive}})],1)]}),null,{tabClick:e.tabClick,isActive:e.isActive,title:e.title}),e._v(" "),n("div",{staticClass:"sf-tabs__content"},[n("div",{staticClass:"sf-tabs__content__tab",class:{"display-none":!e.isActive}},[e.tabMaxContentHeight?n("SfScrollable",{attrs:{"max-content-height":e.tabMaxContentHeight,"show-text":e.tabShowText,"hide-text":e.tabHideText}},[e._t("default")],2):e._t("default")],2)])],2)}),[],!1,null,null,null).exports;l.default.component("SfTab",v);var _={name:"SfTabs",props:{openTab:{type:Number,default:1},tabMaxContentHeight:{type:String,default:""},tabShowText:{type:String,default:"show"},tabHideText:{type:String,default:"hide"}},data:()=>({initialTabActivated:!1}),watch:{openTab(e,t){e!==t&&this.toggle(this.$children[e-1]._uid)}},mounted(){this.$on("toggle",this.toggle),this.openTab&&this.openChild()},methods:{toggle(e){this.$children.forEach((t=>{t.isActive=t._uid===e}));var t=this.$children.findIndex((e=>!0===e.isActive))+1;this.$emit("click:tab",t)},openChild(){this.openTab<this.$children.length+1&&(this.$children[this.openTab-1].isActive=!0,this.initialTabActivated=!0)}},provide:function(){var e={};return Object.defineProperty(e,"tabMaxContentHeight",{get:()=>this.tabMaxContentHeight}),Object.defineProperty(e,"tabShowText",{get:()=>this.tabShowText}),Object.defineProperty(e,"tabHideText",{get:()=>this.tabHideText}),{tabConfig:e}}},m=(n(412),Object(f.a)(_,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.initialTabActivated,expression:"initialTabActivated"}],staticClass:"sf-tabs"},[e._t("default")],2)}),[],!1,null,null,null));t.a=m.exports},457:function(e,t,n){"use strict";n(17),n(12);var l=n(28),c={name:"SfCheckbox",directives:{focus:n(382).a},components:{SfIcon:l.a},model:{prop:"selected",event:"change"},props:{name:{type:String,default:""},value:{type:[String,Boolean],default:""},label:{type:String,default:""},hintMessage:{type:String,default:"Required."},required:{type:Boolean,default:!1},infoMessage:{type:String,default:""},errorMessage:{type:String,default:"This field is not correct."},valid:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},selected:{type:[Array,Boolean],default:()=>[]}},computed:{isChecked(){return"boolean"==typeof this.selected?this.selected:this.selected.includes(this.value)},computedMessageSlotName(){return this.messagesHandler("show-error-message","show-info-message",this.required?"show-hint-message":"")},computedMessage(){return this.messagesHandler(this.errorMessage,this.infoMessage,this.required?this.hintMessage:"")},computedMessageClass(){return this.messagesHandler("sf-checkbox__message--error","sf-checkbox__message--info",this.required?"sf-checkbox__message--hint":"")},nameWithoutWhitespace(){return this.name.replace(/\s/g,"")}},methods:{inputHandler(){if("boolean"==typeof this.selected)this.$emit("change",!this.selected);else{var e=[...this.selected];e.includes(this.value)?e=e.filter((e=>e!==this.value)):e.push(this.value),this.$emit("change",e)}},messagesHandler(e,t,n){return this.errorMessage&&!this.valid?e:this.infoMessage&&this.valid?t:this.hintMessage?n:""}}},r=(n(415),n(8)),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sf-checkbox",class:{"is-active":e.isChecked,"is-disabled":e.disabled,"has-error":!e.valid,"is-required":e.required},attrs:{"data-testid":e.name}},[n("label",{staticClass:"sf-checkbox__container"},[n("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-checkbox__input",attrs:{type:"checkbox",name:e.name,disabled:e.disabled,"aria-invalid":!e.valid,"aria-required":e.required,"aria-describedby":e.errorMessage?e.nameWithoutWhitespace+"-error":null},domProps:{value:e.value,checked:e.isChecked},on:{change:e.inputHandler}}),e._v(" "),e._t("checkmark",(function(){return[n("span",{staticClass:"sf-checkbox__checkmark",class:{"sf-checkbox__checkmark is-active":e.isChecked}},[n("SfIcon",{class:{"display-none":!e.isChecked},attrs:{icon:"check",color:"white"}})],1)]}),null,{isChecked:e.isChecked,disabled:e.disabled}),e._v(" "),e._t("label",(function(){return[n("span",{staticClass:"sf-checkbox__label",class:{"display-none":!e.label}},[e._v(e._s(e.label))])]}),null,{label:e.label,isChecked:e.isChecked,disabled:e.disabled})],2),e._v(" "),n("div",{staticClass:"sf-checkbox__message"},[n("transition",{attrs:{name:"sf-fade"}},[e.disabled?e._e():e._t(e.computedMessageSlotName,(function(){return[n("div",{class:e.computedMessageClass,attrs:{id:e.nameWithoutWhitespace+"-error","aria-live":"assertive"}},[e._v("\n          "+e._s(e.computedMessage)+"\n        ")])]}),null,{computedMessage:e.computedMessage})],2)],1)])}),[],!1,null,null,null);t.a=component.exports},578:function(e,t,n){},700:function(e,t,n){"use strict";n(578)},927:function(e,t,n){"use strict";n.r(t);var l=n(2),c=n(455),r=n(457),o=n(27),d=n(44),h=n(0),f=n(35),v=Object(h.b)({name:"MyNewsletter",components:{SfTabs:c.a,SfCheckbox:r.a,SfButton:o.a,SfLink:d.a},setup(){var{user:e,updateUser:t,isAuthenticated:n}=Object(f.b)(),c=Object(h.l)(!!e.value.is_subscribed),r=function(){var r=Object(l.a)((function*(){n.value&&e.value.email&&(yield t({user:{is_subscribed:c.value}}))}));return function(){return r.apply(this,arguments)}}();return{isSubscribed:c,saveForm:r}}}),_=v,m=(n(700),n(8)),component=Object(m.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SfTabs",{staticClass:"tab-orphan"},[n("SfTab",{attrs:{title:e.$t("My newsletter")}},[n("p",{staticClass:"message"},[e._v("\n      "+e._s(e.$t("Set up newsletter"))+"\n    ")]),e._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"form__checkbox-group"},[n("SfCheckbox",{directives:[{name:"e2e",rawName:"v-e2e",value:"sign-up-newsletter",expression:"'sign-up-newsletter'"}],staticClass:"form__element",attrs:{label:e.$t("Sign Up for Newsletter"),name:"signupNewsletter"},model:{value:e.isSubscribed,callback:function(t){e.isSubscribed=t},expression:"isSubscribed"}})],1),e._v(" "),n("SfButton",{staticClass:"form__button",attrs:{type:"submit"},on:{click:e.saveForm}},[e._v("\n        "+e._s(e.$t("Save changes"))+"\n      ")])],1),e._v(" "),n("p",{staticClass:"notice"},[e._v("\n      "+e._s(e.$t("Read and understand"))+"\n      "),n("SfLink",{staticClass:"notice__link",attrs:{link:"#"}},[e._v("\n        "+e._s(e.$t("Privacy"))+"\n      ")]),e._v("\n      and\n      "),n("SfLink",{staticClass:"notice__link",attrs:{link:"#"}},[e._v("\n        "+e._s(e.$t("Cookies Policy"))+"\n      ")]),e._v("\n      "+e._s(e.$t("Commercial information"))+"\n    ")],1)])],1)}),[],!1,null,"4f6bd5cd",null);t.default=component.exports}}]);
//# sourceMappingURL=ebed2aa.modern.js.map