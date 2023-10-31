(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1037:function(t,r,e){"use strict";e.r(r);e(14),e(12),e(15),e(16),e(17);var c=e(4),o=(e(20),e(0)),n=e(1030),l=e(49),d=e(589),f=e(508),m=e(30),O=e(57),P=e(637),_=e(626);function h(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var y=Object(o.b)({components:{CategoryProductPrice:P.a,SfProductCardHorizontal:n.a,SfButton:l.a,SfProperty:d.a,SkeletonLoader:f.a},props:{products:{type:Array,required:!0},pricesLoaded:Boolean,loading:Boolean},emits:["click:wishlist","click:add-to-cart"],setup:function(t){var r=Object(o.s)(),e=Object(o.q)(t).products,c=Object(_.a)(e).productsWithCommonProductCardProps;return{productsFormatted:Object(o.a)((function(){return c.value.map((function(t){var label=t.commonProps.isInWishlist?"Remove from Wishlist":"Save for later";return j(j({},t),{},{wishlistMessage:r.i18n.t(label)})}))})),imageSize:Object(m.k)().imageSizes.productCardHorizontal,isAuthenticated:Object(O.b)().isAuthenticated}}}),v=(e(955),e(9)),component=Object(v.a)(y,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("transition-group",{staticClass:"list-layout",attrs:{appear:"",name:"slide",tag:"div"}},[t.loading?t._l(12,(function(r){return e("div",{key:r,staticClass:"sf-product-card-horizontal card skeleton-container",attrs:{"data-testid":"skeleton"}},[e("SkeletonLoader",{attrs:{height:t.imageSize.height+"px"}})],1)})):t._l(t.productsFormatted,(function(r){return e("SfProductCardHorizontal",t._b({key:r.uid,staticClass:"card",attrs:{"data-testid":"product-card","image-height":t.imageSize.height,"image-width":t.imageSize.width,"wishlist-icon":!1},on:{"click:wishlist":function(e){return t.$emit("click:wishlist",r)},"click:add-to-cart":function(e){return t.$emit("click:add-to-cart",{product:r,quantity:e})}},scopedSlots:t._u([{key:"configuration",fn:function(){return[e("SfProperty",{staticClass:"desktop-only card__property-size",attrs:{name:"Size",value:"XS"}}),t._v(" "),e("SfProperty",{staticClass:"desktop-only",attrs:{name:"Color",value:"white"}})]},proxy:!0},{key:"price",fn:function(){return[e("CategoryProductPrice",{attrs:{product:r}})]},proxy:!0},{key:"actions",fn:function(){return[t.isAuthenticated?e("SfButton",{staticClass:"sf-button--text card__add-to-wishlist",attrs:{"data-testid":"wishlist-button"},on:{click:function(e){return t.$emit("click:wishlist",r)}}},[t._v("\n          "+t._s(r.wishlistMessage)+"\n        ")]):t._e()]},proxy:!0}],null,!0)},"SfProductCardHorizontal",r.commonProps,!1))}))],2)}),[],!1,null,"69056bfe",null);r.default=component.exports},570:function(t,r,e){},625:function(t,r,e){"use strict";e(570)},626:function(t,r,e){"use strict";e.d(r,"a",(function(){return j}));e(14),e(12),e(15),e(16),e(17);var c=e(4),o=(e(20),e(0)),n=e(30),l=e(57),d=e(86),f=e(200),m=e(117),O=e(85),P=e(523);function _(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var j=function(t){var r=Object(n.k)().getMagentoImage,e=Object(d.b)().isInWishlist,c=Object(l.b)().isAuthenticated,_=Object(P.a)().isInCart,j=Object(f.a)().getProductPath,y=Object(o.s)();return{productsWithCommonProductCardProps:Object(o.a)((function(){return t.value.map((function(t,o){var n={image:r(Object(m.h)(t)),imageTag:"nuxt-img",nuxtImgConfig:{fit:"cover"}},l={isInWishlist:e({product:t}),isInWishlistIcon:c.value?"heart_fill":"",wishlistIcon:c.value?"heart":""},d=Object(m.g)(t),f={regularPrice:y.$fc(d.regular),specialPrice:d.special&&y.$fc(Object(m.g)(t).special),maximumPrice:d.maximum&&y.$fc(Object(m.g)(t).maximum)},P={reviewsCount:Object(O.h)(t),scoreRating:Object(O.b)(t)},link=y.localeRoute(j(t)),v=h(h(h(h({title:Object(m.f)(t),link:link,style:{"--index":o},isAddedToCart:_(t)},n),l),f),P);return h(h({},t),{},{commonProps:v})}))}))}}},637:function(t,r,e){"use strict";var c=e(0),o=e(503),n=Object(c.b)({name:"CategoryProductPrice",components:{SfPrice:o.a},props:{product:{type:Object,required:!0}}}),l=(e(625),e(9)),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return"GroupedProduct"===t.product.__typename?e("div",{staticClass:"product-price"},[e("div",{staticClass:"product-price__row"},[e("span",{staticClass:"product-price__label"},[t._v(t._s(t.$t("Starting at"))+":")]),t._v(" "),e("SfPrice",{staticClass:"sf-product-card__price",attrs:{regular:t.product.commonProps.regularPrice,special:t.product.commonProps.specialPrice}})],1)]):"BundleProduct"===t.product.__typename?e("div",{staticClass:"product-price"},[e("div",{staticClass:"product-price__row"},[e("span",{staticClass:"product-price__label"},[t._v(t._s(t.$t("From"))+":")]),t._v(" "),e("SfPrice",{staticClass:"sf-product-card__price",attrs:{regular:t.product.commonProps.regularPrice,special:t.product.commonProps.specialPrice}})],1),t._v(" "),e("div",{staticClass:"product-price__row"},[e("span",{staticClass:"product-price__label"},[t._v(t._s(t.$t("To"))+":")]),t._v(" "),e("SfPrice",{staticClass:"sf-product-card__price",attrs:{regular:t.product.commonProps.maximumPrice}})],1)]):e("div",{staticClass:"product-price"},[e("SfPrice",{staticClass:"sf-product-card__price",attrs:{regular:t.product.commonProps.regularPrice,special:t.product.commonProps.specialPrice}})],1)}),[],!1,null,null,null);r.a=component.exports},745:function(t,r,e){},955:function(t,r,e){"use strict";e(745)}}]);
//# sourceMappingURL=8ee662a.js.map