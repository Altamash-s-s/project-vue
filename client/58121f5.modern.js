(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{443:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n(0);const l=()=>{const{req:t}=Object(r.s)(),e=!(!t||!t.$vsfCache)&&t.$vsfCache.enabled;if(!t||!e)return{addTags:()=>{},clearTags:()=>{},getTags:()=>[],setTags:()=>{}};const n=t.$vsfCache;return{addTags:a=>a.forEach((a=>n.tagsSet.add(a))),clearTags:()=>n.tagsSet.clear(),getTags:()=>Array.from(n.tagsSet),setTags:a=>{const t=n.tagsSet,e=a(Array.from(t));t.clear(),e.forEach((a=>t.add(a)))}}};var o,a;(a=o||(o={})).Product="P",a.Category="C",a.Attribute="A",a.Cart="B",a.Filter="F",a.Block="O",a.View="V"},444:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var n={meta:[]};return((null==t?void 0:t.meta_title)||(null==t?void 0:t.title)||(null==t?void 0:t.name))&&(n.title=(null==t?void 0:t.meta_title)||(null==t?void 0:t.title)||(null==t?void 0:t.name)),(null==t?void 0:t.meta_description)&&n.meta.push({hid:"description",name:"description",content:t.meta_description}),((null==t?void 0:t.meta_keyword)||(null==t?void 0:t.meta_keywords))&&n.meta.push({hid:"keywords",name:"keywords",content:(null==t?void 0:t.meta_keyword)||(null==t?void 0:t.meta_keywords)}),e&&n.meta.push({name:"robots",content:"noindex, nofollow"}),n}},464:function(t,e,n){},515:function(t,e,n){"use strict";n(464)},560:function(t,e,n){},561:function(t,e,n){},562:function(t,e,n){},684:function(t,e,n){"use strict";n(560)},685:function(t,e,n){"use strict";n(561)},686:function(t,e,n){"use strict";n(562)},889:function(t,e,n){"use strict";var r=n(27),l=n(44),o={name:"SfBanner",components:{SfButton:r.a,SfLink:l.a},props:{title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},buttonText:{type:String,default:""},link:{type:String,default:null},background:{type:String,default:""},image:{type:[String,Object],default:""},imageTag:{type:String,default:null},nuxtImgConfig:{type:Object,default:()=>({})}},computed:{style(){var image=this.image,t=this.background,e=t=>"url(".concat(this.$img(t,this.nuxtImgConfig),")");return"nuxt-img"===this.imageTag||"nuxt-picture"===this.imageTag?{"--_banner-background-image":image.mobile?e(image.mobile):e(image),"--_banner-background-desktop-image":image.desktop&&e(image.desktop),"--_banner-background-color":t}:{"--_banner-background-image":image.mobile?"url(".concat(image.mobile,")"):"url(".concat(image,")"),"--_banner-background-desktop-image":image.desktop&&"url(".concat(image.desktop,")"),"--_banner-background-color":t}},wrapper(){return this.link?"SfLink":"SfButton"}}},c=(n(515),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g({staticClass:"sf-banner",style:t.style},t.$listeners),[n(t.wrapper,{tag:"component",staticClass:"sf-banner__wrapper",attrs:{link:t.link}},[t._t("subtitle",(function(){return[n("span",{staticClass:"sf-banner__subtitle",class:{"display-none":!t.subtitle}},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{staticClass:"sf-banner__title",class:{"display-none":!t.title}},[t._v("\n        "+t._s(t.title)+"\n      ")])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("span",{staticClass:"sf-banner__description",class:{"display-none":!t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])]}),null,{description:t.description}),t._v(" "),t._t("call-to-action",null,null,{buttonText:t.buttonText})],2),t._v(" "),n("div",{staticClass:"sf-banner__wrapper-desktop",attrs:{link:t.link}},[t._t("subtitle",(function(){return[n("span",{staticClass:"sf-banner__subtitle",class:{"display-none":!t.subtitle}},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{staticClass:"sf-banner__title",class:{"display-none":!t.title}},[t._v("\n        "+t._s(t.title)+"\n      ")])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("span",{staticClass:"sf-banner__description",class:{"display-none":!t.description}},[t._v("\n        "+t._s(t.description)+"\n      ")])]}),null,{description:t.description}),t._v(" "),t._t("call-to-action",(function(){return[t.buttonText?n("SfButton",t._g({staticClass:"sf-banner__call-to-action color-secondary",attrs:{link:t.link,"data-testid":"banner-cta-button"}},t.$listeners),[t._v("\n        "+t._s(t.buttonText)+"\n      ")]):t._e()]}),null,{buttonText:t.buttonText})],2),t._v(" "),t._t("img-tag")],2)}),[],!1,null,null,null);e.a=component.exports},903:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(0),o=n(143),c=n(443),d=n(889),m={name:"SfBannerGrid",props:{bannerGrid:{type:Number,default:1}}},_=(n(685),n(8)),f=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-banner-grid"},[1===t.bannerGrid?[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-A")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--medium"},[t._t("banner-B")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col"},[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-C")],2)]),t._v(" "),n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-D")],2)])])])]:t._e(),t._v(" "),2===t.bannerGrid?[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--small"},[t._t("banner-A")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col"},[n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--higher"},[t._t("banner-B")],2),t._v(" "),n("div",{staticClass:"sf-banner-grid__col sf-banner-grid__col--higher"},[t._t("banner-C")],2)]),t._v(" "),n("div",{staticClass:"sf-banner-grid__row"},[n("div",{staticClass:"sf-banner-grid__col"},[t._t("banner-D")],2)])])])]:t._e()],2)}),[],!1,null,null,null).exports,h=n(27),v=n(148),w=Object(l.b)({name:"HeroSection",components:{SfButton:h.a,SfImage:v.a},props:{title:{type:String,default:""},subtitle:{type:String,default:""},buttonText:{type:String,default:""},imageHeight:{type:[Number,String],default:""},imageSrc:{type:String,default:""},imageTag:{type:String,default:""},imageWidth:{type:[Number,String],default:""},link:{type:String,default:""},nuxtImgConfig:{type:Object,default:()=>({})}}}),C=(n(684),Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("SfImage",{staticClass:"hero__image",attrs:{"image-tag":t.imageTag,src:t.imageSrc,alt:t.title,width:t.imageWidth,height:t.imageHeight,"nuxt-img-config":t.nuxtImgConfig,placeholder:""}}),t._v(" "),n("div",{staticClass:"hero__wrapper"},[t._t("subtitle",(function(){return[n("span",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"hero__subtitle"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])]}),null,{subtitle:t.subtitle}),t._v(" "),t._t("title",(function(){return[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"hero__title"},[t._v("\n        "+t._s(t.title)+"\n      ")])]}),null,{title:t.title}),t._v(" "),t._t("call-to-action",(function(){return[t.buttonText&&t.link?n("SfButton",{staticClass:"hero__button",attrs:{link:t.localePath(t.link)}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")]):t._e()]}),null,{buttonText:t.buttonText,link:t.link})],2)],1)}),[],!1,null,"c4bd1a5a",null).exports),k=n(444),S=n(15),y=n(157),T=Object(l.b)({name:"HomePage",components:{HeroSection:C,LazyHydrate:o.a,LoadWhenVisible:y.a,SfBanner:d.a,SfBannerGrid:f,CallToAction:()=>n.e(115).then(n.bind(null,936)),InstagramFeed:()=>n.e(66).then(n.bind(null,937)),MobileStoreBanner:()=>n.e(126).then(n.bind(null,895)),NewProducts:()=>Promise.all([n.e(1),n.e(88)]).then(n.bind(null,938))},setup(){var{addTags:t}=Object(c.b)(),{loadPage:e}=Object(S.d)(),{app:n}=Object(l.s)(),o=(new Date).getFullYear(),{isDesktop:d}=n.$device,m=Object(l.l)(null),_=Object(l.l)({title:n.i18n.t("Colorful summer dresses are already in store"),subtitle:n.i18n.t("SUMMER COLLECTION {year}",{year:o}),buttonText:n.i18n.t("Learn more"),imageSrc:"/homepage/bannerB.webp",imageWidth:d?1240:328,imageHeight:d?400:224,imageConfig:{fit:"cover",format:"webp"},link:"/women.html"}),f=Object(l.l)([{slot:"banner-A",subtitle:n.i18n.t("Dresses"),title:n.i18n.t("Cocktail & Party"),description:n.i18n.t("Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."),buttonText:n.i18n.t("Shop now"),image:{mobile:"/homepage/bannerB.webp",desktop:"/homepage/bannerF.webp"},imageConfig:{fit:"cover",width:d?332:328,height:d?840:343,format:"webp"},class:"sf-banner--slim desktop-only",link:"/women/women-clothing-skirts"},{slot:"banner-B",subtitle:n.i18n.t("Dresses"),title:n.i18n.t("Linen Dresses"),description:n.i18n.t("Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."),buttonText:n.i18n.t("Shop now"),image:"/homepage/bannerE.webp",imageConfig:{fit:"cover",width:d?496:328,height:d?840:343,format:"webp"},class:"sf-banner--slim banner-central desktop-only",link:"/women/women-clothing-dresses"},{slot:"banner-C",subtitle:n.i18n.t("T-Shirts"),title:n.i18n.t("The Office Life"),image:"/homepage/bannerC.webp",imageConfig:{fit:"cover",width:d?332:328,height:d?400:343,format:"webp"},class:"sf-banner--slim banner__tshirt",link:"/women/women-clothing-shirts"},{slot:"banner-D",subtitle:n.i18n.t("Summer Sandals"),title:n.i18n.t("Eco Sandals"),image:"/homepage/bannerG.webp",imageConfig:{fit:"cover",width:d?332:328,height:d?400:343,format:"webp"},class:"sf-banner--slim",link:"/women/women-shoes-sandals"}]),h=Object(l.l)({title:n.i18n.t("Subscribe to Newsletters"),description:n.i18n.t("Be aware of upcoming sales and events. Receive gifts and special offers!"),buttonText:n.i18n.t("Subscribe"),imageSrc:"/homepage/newsletter.webp",imageWidth:d?1240:400,imageHeight:d?202:200,imageConfig:{fit:"cover",format:"webp"}});return Object(l.t)(Object(r.a)((function*(){m.value=yield e({identifier:"home"})}))),Object(l.g)((()=>{t([{prefix:c.a.View,value:"home"}])})),{banners:f,callToAction:h,hero:_,page:m}},head(){return Object(k.a)(this.page)}}),x=(n(686),Object(_.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("HeroSection",{staticClass:"hero-section",attrs:{title:t.hero.title,subtitle:t.hero.subtitle,"button-text":t.hero.buttonText,link:t.hero.link,"image-src":t.hero.imageSrc,"image-width":t.hero.imageWidth,"image-height":t.hero.imageHeight,"nuxt-img-config":t.hero.imageConfig,"image-tag":"nuxt-img"}}),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("SfBannerGrid",{staticClass:"banner-grid",attrs:{"banner-grid":1},scopedSlots:t._u([t._l(t.banners,(function(t){return{key:t.slot,fn:function(){return[n("SfBanner",{key:t.slot,class:t.class,attrs:{title:t.title,subtitle:t.subtitle,description:t.description,"button-text":t.buttonText,"image-tag":"nuxt-img",image:t.image,"nuxt-img-config":t.imageConfig}})]},proxy:!0}}))],null,!0)})],1),t._v(" "),n("LoadWhenVisible",[n("NewProducts",{staticClass:"products",attrs:{"button-text":t.$t("See more"),title:t.$t("New Products"),link:"/women.html"}})],1),t._v(" "),n("LoadWhenVisible",[n("CallToAction",{staticClass:"call-to-action",attrs:{title:t.callToAction.title,"button-text":t.callToAction.buttonText,description:t.callToAction.description,"image-tag":"nuxt-img","image-src":t.callToAction.imageSrc,"image-width":t.callToAction.imageWidth,"image-height":t.callToAction.imageHeight,"nuxt-img-config":t.callToAction.imageConfig}})],1),t._v(" "),n("LoadWhenVisible",[n("InstagramFeed")],1),t._v(" "),n("LoadWhenVisible",[n("MobileStoreBanner")],1)],1)}),[],!1,null,"1f474401",null));e.default=x.exports}},0,[1,88,115,66,126]]);
//# sourceMappingURL=58121f5.modern.js.map