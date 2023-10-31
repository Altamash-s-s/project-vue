(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{394:function(t,e,n){},397:function(t,e,n){},400:function(t,e,n){"use strict";n(394)},402:function(t,e,n){},406:function(t,e,n){"use strict";var r={name:"SfScrollable",components:{SfButton:n(27).a},props:{maxContentHeight:{type:String,default:""},showText:{type:String,default:"Show"},hideText:{type:String,default:"Hide"}},data:()=>({isHidden:!0,hasScroll:!1}),computed:{style(){return{"--_scrollable-max-height":this.maxContentHeight.trim()?this.maxContentHeight:void 0}}}},l=(n(400),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-scrollable",class:{"is-open":!t.isHidden}},[n("div",{ref:"content",staticClass:"sf-scrollable__content",style:t.style},[t._t("default")],2),t._v(" "),t._t("view-all",(function(){return[n("SfButton",{directives:[{name:"show",rawName:"v-show",value:t.hasScroll,expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{click:function(e){t.isHidden=!t.isHidden}}},[t.isHidden?n("span",[t._v(t._s(t.showText))]):n("span",[t._v(t._s(t.hideText))])])]}),null,{hasScroll:t.hasScroll,showText:t.showText,hideText:t.hideText})],2)}),[],!1,null,null,null);e.a=component.exports},409:function(t,e,n){"use strict";n(397)},416:function(t,e,n){"use strict";n(402)},428:function(t,e,n){"use strict";var r={name:"SfPrice",props:{regular:{type:[String,Number],default:null},special:{type:[String,Number],default:null}}},l=(n(409),n(8)),component=Object(l.a)(r,(function(t,e){var n=e._c;return n("div",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-price"],style:[e.data.style,e.data.staticStyle]},"div",e.data.attrs,!1),e.listeners),[e._t("regular",(function(){return[n("span",{staticClass:"sf-price__regular",class:{"display-none":!e.props.regular||e.props.special}},[e._v("\n      "+e._s(e.props.regular)+"\n    ")])]}),null,{props:e.props}),e._v(" "),e._t("old",(function(){return[n("del",{staticClass:"sf-price__old",class:{"display-none":!e.props.special}},[e._v("\n      "+e._s(e.props.regular)+"\n    ")])]}),null,{props:e.props}),e._v(" "),e._t("special",(function(){return[n("ins",{staticClass:"sf-price__special",class:{"display-none":!e.props.special}},[e._v("\n      "+e._s(e.props.special)+"\n    ")])]}),null,{props:e.props})],2)}),[],!0,null,null,null);e.a=component.exports},429:function(t,e,n){"use strict";var r={name:"SfRating",inject:{components:{default:{SfIcon:n(28).a}}},props:{max:{type:Number,default:5},score:{type:Number,default:1},icon:{type:String,default:"star"}},finalScore:(t,e)=>!t||t<0||t>e&&e>0||e<=0?0:t,finalMax:t=>!t||t<=0?1:t},l=(n(416),n(8)),component=Object(l.a)(r,(function(t,e){var n=e._c;return n("div",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-rating"],style:[e.data.style,e.data.staticStyle]},"div",e.data.attrs,!1),e.listeners),[e._l(Math.ceil(e.$options.finalScore(e.props.score,e.props.max)),(function(t){return e._t("icon-positive",(function(){return[n(e.injections.components.SfIcon,{key:"p"+t,tag:"component",staticClass:"sf-rating__icon",attrs:{icon:e.props.icon,coverage:t===Math.ceil(e.$options.finalScore(e.props.score,e.props.max))&&e.$options.finalScore(e.props.score,e.props.max)%1>0?e.$options.finalScore(e.props.score,e.props.max)%1:1}})]}))})),e._v(" "),e._l(parseInt(e.$options.finalMax(e.props.max),10)-Math.ceil(e.$options.finalScore(e.props.score,e.props.max)),(function(t){return e._t("icon-negative",(function(){return[n(e.injections.components.SfIcon,{key:"n"+t,tag:"component",staticClass:"sf-rating__icon sf-rating__icon--negative",attrs:{icon:e.props.icon}})]}))}))],2)}),[],!0,null,null,null);e.a=component.exports},647:function(t,e,n){},648:function(t,e,n){},854:function(t,e,n){"use strict";n(647)},855:function(t,e,n){"use strict";n(648)},907:function(t,e,n){"use strict";n.r(e);var r=n(4),l=n(156),o={name:"SfMegaMenuColumn",components:{SfMenuItem:l.a},props:{title:{type:String,default:""}},inject:["megaMenu"],computed:{active(){return this.megaMenu.active}}},c=n(8),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-mega-menu-column",class:{"is-active":t.active===t.title}},[t._t("title",(function(){return[n("SfMenuItem",{staticClass:"sf-mega-menu-column__header",attrs:{label:t.title},on:{click:function(e){return t.megaMenu.changeActive(t.title)}}})]}),null,{title:t.title,changeActive:t.megaMenu.changeActive}),t._v(" "),n("div",{staticClass:"sf-mega-menu-column__content"},[t._t("default")],2)],2)}),[],!1,null,null,null).exports,f=n(151);r.default.component("SfMegaMenuColumn",d);var m={name:"SfMegaMenu",components:{SfBar:f.a,SfMenuItem:l.a},props:{title:{type:String,default:""},visible:{type:Boolean,default:!1},isAbsolute:{type:Boolean,default:!1},transitionName:{type:String,default:"sf-fade"},asideTitle:{type:String,default:""}},data:()=>({active:""}),provide(){var t={};return Object.defineProperty(t,"active",{get:()=>this.active}),Object.defineProperty(t,"changeActive",{value:this.changeActive}),{megaMenu:t}},methods:{changeActive(t){this.active=t,this.$emit("change",t)},back(){this.active||this.$emit("close"),this.active=""}}},_=(n(854),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transitionName}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"sf-mega-menu",class:[{"is-active":t.active},{"is-absolute":t.isAbsolute}]},[n("SfBar",{staticClass:"sf-mega-menu__bar",attrs:{title:t.active||t.title,back:!0},on:{"click:back":t.back}}),t._v(" "),n("div",{staticClass:"sf-mega-menu__content"},[n("div",{staticClass:"sf-mega-menu__menu"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"sf-mega-menu__aside",class:{"display-none":!t.$slots.aside}},[n("SfMenuItem",{staticClass:"sf-mega-menu__aside-header desktop-only",attrs:{label:t.asideTitle}}),t._v(" "),t._t("aside")],2)])],1)])}),[],!1,null,null,null).exports),v=n(909),h=n(406),S=n(27),y=n(0),C=n(80),x=n(15),w=n(59),M=Object(y.b)({name:"SearchResults",components:{SfMegaMenu:_,SfProductCard:v.a,SfScrollable:h.a,SfMenuItem:l.a,SfButton:S.a,SvgImage:w.a},props:{visible:{type:Boolean,default:!1},searchResults:{type:Array,default:()=>[]}},setup(){var{getMagentoImage:t,imageSizes:e}=Object(x.k)(),{getProductPath:n}=Object(x.l)();return{productGetters:C.a,getMagentoImage:t,imageSizes:e,getProductPath:n}}}),k=(n(855),Object(c.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SfMegaMenu",{staticClass:"search",attrs:{visible:t.visible,title:t.$t("Search results")}},[n("transition",{attrs:{name:"sf-fade",mode:"out-in"}},[t.searchResults&&t.searchResults.length>0?n("div",{key:"results",staticClass:"search__wrapper-results"},[n("SfMegaMenuColumn",{staticClass:"sf-mega-menu-column--pined-content-on-mobile search__results",attrs:{title:t.$t("Product suggestions")},scopedSlots:t._u([{key:"title",fn:function(e){var title=e.title;return[n("SfMenuItem",{staticClass:"sf-mega-menu-column__header search__header",attrs:{label:title},scopedSlots:t._u([{key:"mobile-nav-icon",fn:function(){return[t._v("\n                ​\n              ")]},proxy:!0}],null,!0)})]}}],null,!1,3075151688)},[t._v(" "),n("SfScrollable",{staticClass:"results--desktop desktop-only",attrs:{"show-text":"","hide-text":""}},[n("div",{staticClass:"results-listing"},t._l(t.searchResults,(function(e,r){return n("SfProductCard",{key:r,staticClass:"result-card",attrs:{"image-tag":"nuxt-img","regular-price":t.$fc(t.productGetters.getPrice(e).regular),"max-rating":5,"score-rating":t.productGetters.getAverageRating(e),"reviews-count":t.productGetters.getTotalReviews(e),"image-width":t.imageSizes.productCard.width,"image-height":t.imageSizes.productCard.height,image:t.getMagentoImage(t.productGetters.getProductThumbnailImage(e)),"nuxt-img-config":{fit:"cover"},alt:t.productGetters.getName(e),title:t.productGetters.getName(e),link:t.localePath(t.getProductPath(e)),"wishlist-icon":!1}})})),1)]),t._v(" "),n("div",{staticClass:"results--mobile smartphone-only"},t._l(t.searchResults,(function(e,r){return n("SfProductCard",{key:r,staticClass:"result-card",attrs:{"image-tag":"nuxt-img","regular-price":t.$fc(t.productGetters.getPrice(e).regular),"max-rating":5,"score-rating":t.productGetters.getAverageRating(e),"reviews-count":t.productGetters.getTotalReviews(e),"image-width":t.imageSizes.productCardHorizontal.width,"image-height":t.imageSizes.productCardHorizontal.height,image:t.getMagentoImage(t.productGetters.getProductThumbnailImage(e)),"nuxt-img-config":{fit:"cover"},alt:t.productGetters.getName(e),title:t.productGetters.getName(e),link:t.localePath(t.getProductPath(e)),"wishlist-icon":!1}})})),1)],1),t._v(" "),n("div",{staticClass:"action-buttons smartphone-only"},[n("SfButton",{staticClass:"action-buttons__button color-light",on:{click:function(e){return t.$emit("close")}}},[t._v("\n            "+t._s(t.$t("Cancel"))+"\n          ")])],1)],1):n("div",{key:"no-results",staticClass:"before-results"},[n("SvgImage",{staticClass:"before-results__picture",attrs:{icon:"error_image",label:t.$t("Error"),width:"412",height:"412"}}),t._v(" "),n("p",{staticClass:"before-results__paragraph"},[t._v("\n          "+t._s(t.$t("You haven’t searched for items yet"))+"\n        ")]),t._v(" "),n("p",{staticClass:"before-results__paragraph"},[t._v("\n          "+t._s(t.$t("Let’s start now – we’ll help you"))+"\n        ")]),t._v(" "),n("SfButton",{staticClass:"before-results__button color-secondary smartphone-only",on:{click:function(e){return t.$emit("close")}}},[t._v("\n          "+t._s(t.$t("Go back"))+"\n        ")])],1)])],1)],1)}),[],!1,null,"60156d74",null));e.default=k.exports}}]);
//# sourceMappingURL=2519b89.modern.js.map