(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{395:function(t,e,n){},403:function(t,e,n){"use strict";n(395)},417:function(t,e,n){"use strict";var r=n(0),o=Object(r.b)({name:"HTMLContent",props:{tag:{type:String,default:"div"},content:{type:String,default:""}}}),l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",domProps:{innerHTML:t._s(t.$dompurify(t.content))}})}),[],!1,null,null,null);e.a=component.exports},432:function(t,e,n){"use strict";var r={name:"SfLoader",props:{loading:{default:!0,type:Boolean}}},o=(n(403),n(8)),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("div",e._g(e._b({ref:e.data.ref,class:[e.data.class,e.data.staticClass,"sf-loader"],style:[e.data.style,e.data.staticStyle]},"div",e.data.attrs,!1),e.listeners),[n("transition",{attrs:{name:"sf-fade",mode:"out-in"}},[e.props.loading?n("div",{staticClass:"sf-loader__overlay"},[e._t("loader",(function(){return[n("svg",{staticClass:"sf-loader__spinner",attrs:{role:"img",width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[e._v("Loading...")]),e._v(" "),n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[n("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),e._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]}))],2):e._t("default")],2)],1)}),[],!0,null,null,null);e.a=component.exports},443:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o}));var r=n(0);const o=()=>{const{req:t}=Object(r.s)(),e=!(!t||!t.$vsfCache)&&t.$vsfCache.enabled;if(!t||!e)return{addTags:()=>{},clearTags:()=>{},getTags:()=>[],setTags:()=>{}};const n=t.$vsfCache;return{addTags:a=>a.forEach((a=>n.tagsSet.add(a))),clearTags:()=>n.tagsSet.clear(),getTags:()=>Array.from(n.tagsSet),setTags:a=>{const t=n.tagsSet,e=a(Array.from(t));t.clear(),e.forEach((a=>t.add(a)))}}};var l,a;(a=l||(l={})).Product="P",a.Category="C",a.Attribute="A",a.Cart="B",a.Filter="F",a.Block="O",a.View="V"},444:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var n={meta:[]};return((null==t?void 0:t.meta_title)||(null==t?void 0:t.title)||(null==t?void 0:t.name))&&(n.title=(null==t?void 0:t.meta_title)||(null==t?void 0:t.title)||(null==t?void 0:t.name)),(null==t?void 0:t.meta_description)&&n.meta.push({hid:"description",name:"description",content:t.meta_description}),((null==t?void 0:t.meta_keyword)||(null==t?void 0:t.meta_keywords))&&n.meta.push({hid:"keywords",name:"keywords",content:(null==t?void 0:t.meta_keyword)||(null==t?void 0:t.meta_keywords)}),e&&n.meta.push({name:"robots",content:"noindex, nofollow"}),n}},475:function(t,e,n){},521:function(t,e,n){"use strict";n(475)},680:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(432),l=n(144),d=n(0),c=n(443),f=n(444),v=n(15),m=n(141),_=n(417),h=Object(d.b)({name:"CmsPage",components:{HTMLContent:_.a,SfLoader:o.a,SfHeading:l.a},setup(){var{routeData:t}=Object(m.a)(),{addTags:e}=Object(c.b)(),{error:n}=Object(d.s)(),{loadPage:o,loading:l,error:f}=Object(v.d)(),_=Object(d.l)(null);return Object(d.t)(Object(r.a)((function*(){var r;_.value=yield o({identifier:t.identifier}),!(null===(r=null==f?void 0:f.value)||void 0===r?void 0:r.page)&&_.value||n({statusCode:404}),e([{prefix:c.a.View,value:t.identifier}])}))),{page:_,loading:l}},head(){return Object(f.a)(this.page)}}),w=(n(521),n(8)),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SfLoader",{attrs:{loading:t.loading}},[n("div",{staticClass:"cms-page"},[t.page&&t.page.content_heading?n("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.page.content_heading,level:1}}):t._e(),t._v(" "),t.page&&t.page.content?n("HTMLContent",{attrs:{content:t.page.content}}):t._e()],1)])}),[],!1,null,"314ecbd5",null);e.default=component.exports}}]);
//# sourceMappingURL=ee0e1b0.modern.js.map