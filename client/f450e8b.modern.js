(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{419:function(t,e,r){},451:function(t,e,r){"use strict";r(419)},497:function(t,e,r){},498:function(t,e,r){},499:function(t,e,r){},550:function(t,e,r){"use strict";r(497)},551:function(t,e,r){"use strict";r(498)},552:function(t,e,r){"use strict";r(499)},553:function(t,e,r){"use strict";r(9);var n=r(2),o=r(5),c=r(4),l={name:"SfCarouselItem"},d=r(8),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"sf-carousel-item glide__slide"},[t._t("default")],2)}),[],!1,null,null,null).exports,h=r(558),m=r(549);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default.component("SfCarouselItem",f);var w={name:"SfCarousel",components:{SfArrow:h.a},props:{settings:{type:Object,default:()=>({})}},data:()=>({glide:null,defaultSettings:{type:"carousel",rewind:!0,perView:4,slidePerPage:!0,gap:0,breakpoints:{1023:{perView:2,peek:{before:0,after:50}}}}}),computed:{mergedOptions(){var t=O({},this.defaultSettings.breakpoints);return this.settings.breakpoints&&(t=O(O({},t),this.settings.breakpoints)),O(O(O({},this.defaultSettings),this.settings),{},{breakpoints:t})}},mounted:function(){this.$nextTick((()=>{if(this.$slots.default){var t=new m.a(this.$refs.glide,this.mergedOptions),e=this.$slots.default.filter((slot=>slot.tag)).length;e<=t.settings.perView&&(t.settings.perView=e,t.settings.rewind=!1,this.$refs.controls.style.display="none"),t.mount(),t.on("run.before",(r=>{var{slidePerPage:n,rewind:o,type:c}=this.mergedOptions;if(n){var{perView:l}=t.settings;if(!(!l>1)){var d,{direction:f}=r;switch(f){case">":case"<":(d=Math.ceil(t.index/l)*l+(">"===f?l:-l))>=e?d="slider"!==c||o?0:t.index:(d<0||d+l>e)&&(d="slider"!==c||o?e-l:t.index),r.direction="=",r.steps=d}}}})),this.glide=t}}))},methods:{go(t){if(this.glide)switch(t){case"prev":this.glide.go("<");break;case"next":this.glide.go(">")}}}},_=(r(551),Object(d.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf-carousel"},[r("div",{ref:"controls",staticClass:"sf-carousel__controls"},[t._t("prev",(function(){return[r("SfArrow",{attrs:{"aria-label":"previous","data-testid":"carousel-prev-button"},on:{click:function(e){return t.go("prev")}}})]}),null,{go:function(){return t.go("prev")}}),t._v(" "),t._t("next",(function(){return[r("SfArrow",{staticClass:"sf-arrow--right",attrs:{"aria-label":"next","data-testid":"carousel-next-button"},on:{click:function(e){return t.go("next")}}})]}),null,{go:function(){return t.go("next")}})],2),t._v(" "),r("div",{staticClass:"sf-carousel__wrapper"},[r("div",{ref:"glide",staticClass:"glide"},[r("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[r("ul",{staticClass:"glide__slides sf-carousel__slides"},[t._t("default")],2)])])])])}),[],!1,null,null,null).exports),S=r(909),j=r(556),y=r(432),P=r(27),C=r(0),k=r(80),I=r(448),x=r(15),H=r(61),$=r(35),A=r(59);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var G=Object(C.b)({name:"ProductsCarousel",components:{SfCarousel:_,SfProductCard:S.a,SfSection:j.a,SfLoader:y.a,SfButton:P.a,SvgImage:A.a},props:{title:{type:String,required:!1,default:""},products:{type:Array,required:!1,default:()=>[]},loading:Boolean},setup(t){var{isAuthenticated:e}=Object($.b)(),{isInWishlist:r,addOrRemoveItem:o}=Object(H.a)(),{addItemToCart:c,isInCart:l}=Object(I.a)(),{getProductPath:d}=Object(x.l)(),f=Object(C.a)((()=>t.products.map((t=>E(E({},t),{},{isInWishlist:r({product:t})}))))),h=function(){var t=Object(n.a)((function*(t){yield o({product:t})}));return function(e){return t.apply(this,arguments)}}(),{getMagentoImage:m,imageSizes:v}=Object(x.k)();return{addItemToCart:c,addItemToWishlist:h,isAuthenticated:e,isInCart:l,isInWishlist:r,mappedProducts:f,productGetters:k.a,getMagentoImage:m,imageSizes:v,getProductPath:d}}}),T=G,B=(r(552),Object(d.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"section",attrs:{"title-heading":t.title}},[r("SfLoader",{class:{loading:t.loading},attrs:{loading:t.loading}},[r("SfCarousel",{staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:{peek:16,breakpoints:{1023:{peek:0,perView:2}}}},scopedSlots:t._u([{key:"prev",fn:function(t){return[r("SfButton",{staticClass:"sf-arrow",attrs:{"aria-label":"previous"},on:{click:function(e){return t.go("prev")}}},[r("SvgImage",{attrs:{icon:"arrow_left",width:"24",height:"24"}})],1)]}},{key:"next",fn:function(t){return[r("SfButton",{staticClass:"sf-arrow",attrs:{"aria-label":"next"},on:{click:function(e){return t.go("next")}}},[r("SvgImage",{attrs:{icon:"arrow_right",width:"24",height:"24"}})],1)]}}])},t._l(t.mappedProducts,(function(e,i){return r("SfCarouselItem",{key:i,staticClass:"carousel__item"},[r("SfProductCard",{attrs:{"image-tag":"nuxt-img",title:t.productGetters.getName(e),"image-width":t.imageSizes.productCard.width,"image-height":t.imageSizes.productCard.height,image:t.getMagentoImage(t.productGetters.getProductThumbnailImage(e)),"nuxt-img-config":{fit:"cover"},"regular-price":t.$fc(t.productGetters.getPrice(e).regular),"special-price":t.productGetters.getPrice(e).special&&t.$fc(t.productGetters.getPrice(e).special),link:t.localePath(t.getProductPath(e)),"max-rating":5,"score-rating":t.productGetters.getAverageRating(e),"reviews-count":t.productGetters.getTotalReviews(e),"is-in-wishlist":t.isInWishlist({product:e}),"is-added-to-cart":t.isInCart(e),"wishlist-icon":t.isAuthenticated?"heart":"","is-in-wishlist-icon":t.isAuthenticated?"heart_fill":""},on:{"click:wishlist":function(r){return t.addItemToWishlist(e)},"click:add-to-cart":function(r){return t.addItemToCart({product:e,quantity:1})}}})],1)})),1)],1)],1)}),[],!1,null,"eabfe5b0",null));e.a=B.exports},556:function(t,e,r){"use strict";var n={name:"SfSection",components:{SfHeading:r(144).a},props:{titleHeading:{type:String,default:""},subtitleHeading:{type:String,default:""},levelHeading:{type:Number,default:2}}},o=(r(451),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sf-section"},[t._t("heading",(function(){return[t.titleHeading?r("SfHeading",{attrs:{level:t.levelHeading,title:t.titleHeading,description:t.subtitleHeading}}):t._e()]}),null,{levelHeading:t.levelHeading,titleHeading:t.titleHeading,subtitleHeading:t.subtitleHeading}),t._v(" "),r("div",{staticClass:"sf-section__content"},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},558:function(t,e,r){"use strict";var n=r(27),o=r(28),c={name:"SfArrow",inject:{components:{default:{SfButton:n.a,SfIcon:o.a}}},props:{ariaLabel:{type:String,default:"Arrow label"}}},l=(r(550),r(8)),component=Object(l.a)(c,(function(t,e){var r=e._c;return r(e.injections.components.SfButton,e._g(e._b({tag:"component",class:[e.data.class,e.data.staticClass,"sf-arrow"],style:[e.data.style,e.data.staticStyle],attrs:{"aria-label":e.props.ariaLabel,type:"button"}},"component",e.data.attrs,!1),e.listeners),[e._t("default",(function(){return[r(e.injections.components.SfIcon,e._b({tag:"component",class:[e.data.class,e.data.staticClass,"sf-arrow__icon"],attrs:{size:"1.5rem",icon:"arrow_left","aria-hidden":"true"}},"component",e.data.attrs,!1))]}))],2)}),[],!0,null,null,null);e.a=component.exports},953:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(23),r(0)),c=r(163),l=r(553),d=r(141),f=Object(o.b)({name:"RelatedProducts",components:{ProductsCarousel:l.a},setup(){var{routeData:t}=Object(d.a)(),{search:e,loading:r}=Object(c.a)(),l=Object(o.l)([]);return Object(o.g)(Object(n.a)((function*(){var r={filter:{sku:{eq:t.sku}}};l.value=yield e(r)}))),{products:l,loading:r}}}),h=r(8),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return!t.loading&&t.products&&t.products.length>0?r("ProductsCarousel",{attrs:{products:t.products,title:t.$t("Match it with")}}):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=f450e8b.modern.js.map