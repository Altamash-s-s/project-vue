(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1030:function(t,n,e){"use strict";e(37);var r=e(503),o=e(50),l=e(68),c=e(504),d=e(205),f=e(49),_=e(635),m={name:"SfProductCardHorizontal",components:{SfPrice:r.a,SfRating:c.a,SfImage:d.a,SfIcon:o.a,SfLink:l.a,SfButton:f.a,SfAddToCart:_.a},props:{description:{type:String,default:""},image:{type:[Array,Object,String],default:""},imageWidth:{type:[Number,String],default:null},imageHeight:{type:[Number,String],default:null},title:{type:String,default:""},link:{type:[String,Object],default:null},linkTag:{type:String,default:void 0},scoreRating:{type:[Number,Boolean],default:!1},reviewsCount:{type:[Number,Boolean],default:!1},maxRating:{type:[Number,String],default:5},regularPrice:{type:[Number,String],default:null},specialPrice:{type:[Number,String],default:null},wishlistIcon:{type:[String,Array,Boolean],default:"heart"},isInWishlistIcon:{type:[String,Array],default:"heart_fill"},isInWishlist:{type:Boolean,default:!1},qty:{type:[Number,String],default:1},imageTag:{type:String,default:""},nuxtImgConfig:{type:Object,default:function(){return{}}}},data:function(){return{quantity:this.qty}},computed:{currentWishlistIcon:function(){return this.isInWishlist?this.isInWishlistIcon:this.wishlistIcon},ariaLabel:function(){return this.isInWishlist?"Remove from wishlist":"Add to wishlist"},itemQuantity:{get:function(){return"string"==typeof this.quantity?Number(this.quantity):this.quantity},set:function(t){this.quantity=t}}},methods:{toggleIsInWishlist:function(){this.$emit("click:wishlist",!this.isInWishlist)}}},y=(e(954),e(9)),component=Object(y.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sf-product-card-horizontal"},[e("div",{staticClass:"sf-product-card-horizontal__image-wrapper"},[t._t("image",(function(){return[e("SfLink",{staticClass:"\n          sf-product-card-horizontal__link\n          sf-product-card-horizontal__link--image\n        ",attrs:{link:t.link}},[Array.isArray(t.image)?t._l(t.image.slice(0,2),(function(picture,n){return e("SfImage",{key:n,staticClass:"sf-product-card-horizontal__picture",attrs:{src:picture,alt:t.title,width:t.imageWidth,height:t.imageHeight,"image-tag":t.imageTag,"nuxt-img-config":t.nuxtImgConfig}})})):e("SfImage",{staticClass:"sf-product-card-horizontal__image",attrs:{src:t.image,alt:t.title,width:t.imageWidth,height:t.imageHeight,"image-tag":t.imageTag,"nuxt-img-config":t.nuxtImgConfig}})],2)]}),null,{image:t.image,title:t.title,link:t.link,imageHeight:t.imageHeight,imageWidth:t.imageWidth,imageTag:t.imageTag,nuxtImgConfig:t.nuxtImgConfig})],2),t._v(" "),e("div",{staticClass:"sf-product-card-horizontal__main"},[e("div",{staticClass:"sf-product-card-horizontal__details"},[t._t("title",(function(){return[e("SfLink",{staticClass:"sf-product-card-horizontal__link",attrs:{link:t.link}},[e("h3",{staticClass:"sf-product-card-horizontal__title"},[t._v("\n            "+t._s(t.title)+"\n          ")])])]}),null,{title:t.title,link:t.link}),t._v(" "),t._t("description",(function(){return[e("p",{staticClass:"sf-product-card-horizontal__description desktop-only"},[t._v("\n          "+t._s(t.description)+"\n        ")])]})),t._v(" "),e("div",{staticClass:"sf-product-card-horizontal__configuration"},[t._t("configuration")],2)],2),t._v(" "),e("div",{staticClass:"sf-product-card-horizontal__actions-wrapper"},[t._t("price",(function(){return[e("SfPrice",{staticClass:"sf-product-card-horizontal__price",class:{"display-none":!t.regularPrice},attrs:{regular:t.regularPrice,special:t.specialPrice}})]}),null,{specialPrice:t.specialPrice,regularPrice:t.regularPrice}),t._v(" "),t._t("reviews",(function(){return[e("div",{staticClass:"sf-product-card-horizontal__reviews",class:{"display-none":!t.scoreRating}},["number"==typeof t.scoreRating?e("SfRating",{staticClass:"sf-product-card-horizontal__rating",attrs:{max:t.maxRating,score:t.scoreRating}}):t._e(),t._v(" "),e("SfButton",{staticClass:"sf-button--pure sf-product-card-horizontal__reviews-count",class:{"display-none":!t.reviewsCount},attrs:{"aria-label":"Read "+t.reviewsCount+" reviews about "+t.title,href:"#"},on:{click:function(n){return t.$emit("click:reviews")}}},[t._v("\n            ("+t._s(t.reviewsCount)+")\n          ")])],1)]}),null,{maxRating:t.maxRating,scoreRating:t.scoreRating}),t._v(" "),e("div",{staticClass:"sf-product-card-horizontal__actions"},[t._t("actions")],2),t._v(" "),e("div",{staticClass:"sf-product-card-horizontal__add-to-cart"},[t._t("add-to-cart",(function(){return[e("SfAddToCart",{staticClass:"sf-product-card-horizontal__add-to-cart desktop-only",on:{input:function(n){return t.$emit("input",n)},click:function(n){return t.$emit("click:add-to-cart",t.itemQuantity)}},model:{value:t.itemQuantity,callback:function(n){t.itemQuantity=n},expression:"itemQuantity"}})]}))],2)],2),t._v(" "),!1!==t.wishlistIcon?e("SfButton",{staticClass:"\n        sf-button--pure\n        smartphone-only\n        sf-product-card-horizontal__wishlist-icon\n      ",attrs:{"aria-label":t.ariaLabel+" "+t.title},on:{click:t.toggleIsInWishlist}},[t._t("wishlist-icon",(function(){return[e("SfIcon",{attrs:{icon:t.currentWishlistIcon,size:"19px","data-test":"sf-wishlist-icon"}})]}),null,{currentWishlistIcon:t.currentWishlistIcon})],2):t._e()],1)])}),[],!1,null,null,null);n.a=component.exports},472:function(t,n,e){},477:function(t,n,e){},484:function(t,n,e){"use strict";e(472)},491:function(t,n,e){"use strict";e(477)},493:function(t,n,e){},503:function(t,n,e){"use strict";e(37);var r={name:"SfPrice",props:{regular:{type:[String,Number],default:null},special:{type:[String,Number],default:null}}},o=(e(484),e(9)),component=Object(o.a)(r,(function(t,n){var e=n._c;return e("div",n._g(n._b({class:[n.data.class,n.data.staticClass,"sf-price"],style:[n.data.style,n.data.staticStyle]},"div",n.data.attrs,!1),n.listeners),[n._t("regular",(function(){return[e("span",{staticClass:"sf-price__regular",class:{"display-none":!n.props.regular||n.props.special}},[n._v("\n      "+n._s(n.props.regular)+"\n    ")])]}),null,{props:n.props}),n._v(" "),n._t("old",(function(){return[e("del",{staticClass:"sf-price__old",class:{"display-none":!n.props.special}},[n._v("\n      "+n._s(n.props.regular)+"\n    ")])]}),null,{props:n.props}),n._v(" "),n._t("special",(function(){return[e("ins",{staticClass:"sf-price__special",class:{"display-none":!n.props.special}},[n._v("\n      "+n._s(n.props.special)+"\n    ")])]}),null,{props:n.props})],2)}),[],!0,null,null,null);n.a=component.exports},504:function(t,n,e){"use strict";e(37);var r={name:"SfRating",inject:{components:{default:{SfIcon:e(50).a}}},props:{max:{type:Number,default:5},score:{type:Number,default:1},icon:{type:String,default:"star"}},finalScore:function(t,n){return!t||t<0||t>n&&n>0||n<=0?0:t},finalMax:function(t){return!t||t<=0?1:t}},o=(e(491),e(9)),component=Object(o.a)(r,(function(t,n){var e=n._c;return e("div",n._g(n._b({class:[n.data.class,n.data.staticClass,"sf-rating"],style:[n.data.style,n.data.staticStyle]},"div",n.data.attrs,!1),n.listeners),[n._l(Math.ceil(n.$options.finalScore(n.props.score,n.props.max)),(function(t){return n._t("icon-positive",(function(){return[e(n.injections.components.SfIcon,{key:"p"+t,tag:"component",staticClass:"sf-rating__icon",attrs:{icon:n.props.icon,coverage:t===Math.ceil(n.$options.finalScore(n.props.score,n.props.max))&&n.$options.finalScore(n.props.score,n.props.max)%1>0?n.$options.finalScore(n.props.score,n.props.max)%1:1}})]}))})),n._v(" "),n._l(parseInt(n.$options.finalMax(n.props.max),10)-Math.ceil(n.$options.finalScore(n.props.score,n.props.max)),(function(t){return n._t("icon-negative",(function(){return[e(n.injections.components.SfIcon,{key:"n"+t,tag:"component",staticClass:"sf-rating__icon sf-rating__icon--negative",attrs:{icon:n.props.icon}})]}))}))],2)}),[],!0,null,null,null);n.a=component.exports},511:function(t,n,e){},517:function(t,n,e){},520:function(t,n,e){"use strict";e(493)},537:function(t,n,e){"use strict";e(37),e(19),e(13),e(35),e(36);var r=e(209),o=e(49),l={name:"SfQuantitySelector",inject:{components:{default:{SfInput:r.a,SfButton:o.a}}},model:{prop:"qty"},props:{qty:{type:[Number,String],default:1},disabled:{type:Boolean,default:!1},min:{type:Number,default:null},max:{type:Number,default:null},ariaLabel:{type:String,default:"Quantity"}},handleInput:function(t,n,e,r){var o=e||1;return t<o||isNaN(t)?t=o:null!==r&&t>r&&(t=r),n.input&&n.input(t)},handleBlur:function(t){return t.blur&&t.blur()},uniqueKey:function(){return"quantitySelector"+Math.random().toString(16).slice(2)}},c=(e(543),e(9)),component=Object(c.a)(l,(function(t,n){var e=n._c;return e("div",{class:[n.data.class,n.data.staticClass,"sf-quantity-selector"],style:[n.data.style,n.data.staticStyle],attrs:{"aria-label":n.props.ariaLabel}},[e(n.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{disabled:n.props.disabled||Boolean(null!==n.props.min&&n.props.qty<=n.props.min),"data-testid":"decrease"},on:{click:function(t){n.$options.handleInput(Number(n.props.qty)-1,n.listeners,n.props.min,n.props.max)}}},[n._v("\n    −\n  ")]),n._v(" "),e(n.injections.components.SfInput,{tag:"component",staticClass:"sf-quantity-selector__input",attrs:{type:"number",name:n.$options.uniqueKey(),value:Number(n.props.qty),disabled:n.props.disabled,"data-testid":"sf-quantity-selector input"},on:{input:function(t){return n.$options.handleInput(t,n.listeners,n.props.min,n.props.max)},blur:function(t){return n.$options.handleBlur(n.listeners)}}}),n._v(" "),e(n.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{disabled:n.props.disabled||Boolean(null!==n.props.max&&n.props.qty>=n.props.max),"data-testid":"increase"},on:{click:function(t){n.$options.handleInput(Number(n.props.qty)+1,n.listeners,n.props.min,n.props.max)}}},[n._v("\n    +\n  ")])],1)}),[],!0,null,null,null);n.a=component.exports},543:function(t,n,e){"use strict";e(511)},571:function(t,n,e){"use strict";e(517)},589:function(t,n,e){"use strict";e(37);var r={name:"SfProperty",props:{name:{type:String,default:""},value:{type:[String,Number],default:""}}},o=(e(520),e(9)),component=Object(o.a)(r,(function(t,n){var e=n._c;return e("div",n._g(n._b({class:[n.data.class,n.data.staticClass,"sf-property"],style:[n.data.style,n.data.staticStyle]},"div",n.data.attrs,!1),n.listeners),[n._t("name",(function(){return[e("span",{staticClass:"sf-property__name"},[n._v("\n      "+n._s(n.props.name)+"\n    ")])]}),null,{props:n.props}),n._v(" "),n._t("value",(function(){return[e("span",{staticClass:"sf-property__value"},[n._v("\n      "+n._s(n.props.value)+"\n    ")])]}),null,{props:n.props})],2)}),[],!0,null,null,null);n.a=component.exports},635:function(t,n,e){"use strict";e(37);var r=e(49),o=e(537),l={name:"SfAddToCart",components:{SfButton:r.a,SfQuantitySelector:o.a},model:{prop:"qty"},props:{disabled:{type:Boolean,default:!1},qty:{type:[Number,String],default:1}}},c=(e(571),e(9)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sf-add-to-cart"},[t._t("quantity-select-input",(function(){return[e("SfQuantitySelector",{staticClass:"sf-add-to-cart__select-quantity",attrs:{qty:t.qty,"aria-label":"Quantity",disabled:t.disabled},on:{input:function(n){return t.$emit("input",n)}}})]}),null,{qty:t.qty}),t._v(" "),t._t("add-to-cart-btn",(function(){return[e("SfButton",t._g({staticClass:"sf-add-to-cart__button",attrs:{disabled:t.disabled}},t.$listeners),[t._v("\n      Add to cart\n    ")])]}))],2)}),[],!1,null,null,null);n.a=component.exports},744:function(t,n,e){},954:function(t,n,e){"use strict";e(744)}}]);
//# sourceMappingURL=2fdffb8.js.map