"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[923],{9923:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(1413),r=a(3433),s=a(5861),l=a(9439),i=a(4687),o=a.n(i),c=a(2791),u=a(934),d=a(1243),m="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",v=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m,"?page=1&limit=").concat(8));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.Z)(o().mark((function e(t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m,"?page=").concat(t,"&limit=").concat(8));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=a(2134),h=a(7948),b=a.n(h),g=a(817),C=a(184),_=document.getElementById("root");console.log(_),b().setAppElement(_);var Z=function(e){var t=e.cars,a=e.onHandleFavoriteCar,n=(0,c.useState)(""),r=(0,l.Z)(n,2),i=r[0],u=r[1],d=(0,c.useState)(!1),m=(0,l.Z)(d,2),v=m[0],p=m[1],h=function(){p(!1),u("")},_=function(e){var t=e.split(",");return t.length>=2?t[1]:""},Z=function(e){var t=e.split(",");return t.length>=2?t[2]:""};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("ul",{className:g.Z.list,id:"list",children:t.map((function(e){return(0,C.jsxs)("li",{className:g.Z.card,children:[(0,C.jsx)("img",{className:g.Z.image,src:e.img,alt:"car"}),(0,C.jsx)("button",{className:g.Z.buttonFavorite,type:"button",onClick:function(){return t=e.id,void a(t);var t},children:(0,C.jsx)(f.lo,{className:g.Z.heart})}),(0,C.jsxs)("div",{className:g.Z.textContainerFirst,children:[(0,C.jsxs)("div",{children:[(0,C.jsxs)("span",{className:g.Z.textSubtitle,children:[e.make,", "]}),(0,C.jsx)("span",{className:g.Z.textSubtitle,children:e.year})]}),(0,C.jsx)("span",{className:g.Z.textSubtitle,children:e.rentalPrice})]}),(0,C.jsxs)("div",{className:g.Z.textContainerSecond,children:[(0,C.jsxs)("span",{className:g.Z.text,children:[_(e.address)," "]}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsxs)("span",{className:g.Z.text,children:[Z(e.address)," "]}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsx)("span",{className:g.Z.text,children:e.rentalCompany})]}),(0,C.jsxs)("div",{className:g.Z.textContainerThird,children:[(0,C.jsx)("span",{className:g.Z.text,children:e.type}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsx)("span",{className:g.Z.text,children:e.model}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsx)("span",{className:g.Z.text,children:e.mileage}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsx)("span",{className:g.Z.text,children:e.accessories[0]})]}),(0,C.jsx)("button",{className:g.Z.buttonLearnMore,type:"button",onClick:function(){return function(e){p(!0);var t=function(){var t=(0,s.Z)(o().mark((function t(){var a,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x();case 3:a=t.sent,n=a.find((function(t){return t.id===e})),u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}(e.id)},children:"Learn More"})]},e.id)}))}),(0,C.jsx)(b(),{style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:10},content:{position:"relative",display:"flex",flexDirection:"column",width:541,height:752,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",marginTop:40,padding:0,paddingTop:40,paddingBottom:40,paddingLeft:40,paddingRight:40,transform:"translate(-50%, -50%)",borderRadius:24,background:"#FFF"}},isOpen:v,onRequestClose:h,children:i&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("img",{className:g.Z.imageModal,src:i.img,alt:"car"}),(0,C.jsx)("button",{className:g.Z.buttonClose,type:"button",onClick:h,children:(0,C.jsx)(f.oHP,{})}),(0,C.jsxs)("div",{className:g.Z.modalSubtitleContainer,children:[(0,C.jsx)("p",{className:g.Z.modalSubtitleText,children:i.make}),(0,C.jsxs)("p",{className:g.Z.modalSubtitleTextModel,children:[i.model,","]}),(0,C.jsx)("p",{className:g.Z.modalSubtitleText,children:i.year})]}),(0,C.jsxs)("div",{className:g.Z.modalContainerFirst,children:[(0,C.jsx)("p",{className:g.Z.modalTextFirst,children:_(i.address)}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsx)("p",{className:g.Z.modalTextFirst,children:Z(i.address)}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsxs)("p",{className:g.Z.modalTextFirst,children:["Id:",i.id]}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsxs)("p",{className:g.Z.modalTextFirst,children:["Year:",i.year]}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsxs)("p",{className:g.Z.modalTextFirst,children:["Type:",i.suv]})]}),(0,C.jsxs)("div",{className:g.Z.modalContainerFirst,children:[(0,C.jsxs)("p",{className:g.Z.modalTextFirst,children:["Fuel Consumption: ",i.fuelConsumption]}),(0,C.jsx)("div",{className:g.Z.stick}),(0,C.jsxs)("p",{className:g.Z.modalTextFirst,children:["Engine Size: ",i.engineSize," "]}),(0,C.jsx)("div",{className:g.Z.stick})]}),(0,C.jsx)("p",{className:g.Z.modalDescription,children:i.description})]})})]})},j=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],N=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],S="CatalogPage_container__w3ZO8",k="CatalogPage_form__Jq5p5",L="CatalogPage_inputFrom__25ygl",F="CatalogPage_labelFrom__ZRQoK",y="CatalogPage_inputTo__nASY7",w="CatalogPage_labelTo__ugawd",T="CatalogPage_buttonSearch__LqjvX",M="CatalogPage_sectionList__HWN9L",P="CatalogPage_buttonLoadMore__sGw7i",B=function(){var e,t=(0,c.useState)([]),a=(0,l.Z)(t,2),i=a[0],d=a[1],m=(0,c.useState)(1),f=(0,l.Z)(m,2),h=f[0],b=f[1],g=(0,c.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),_=(0,l.Z)(g,2),B=_[0],R=_[1],z=(0,c.useState)(""),D=(0,l.Z)(z,2),H=D[0],A=D[1],E=(0,c.useState)(""),O=(0,l.Z)(E,2),W=O[0],I=O[1],J=(0,c.useState)(""),K=(0,l.Z)(J,2),q=K[0],G=K[1],X=(0,c.useState)(""),Y=(0,l.Z)(X,2),Q=Y[0],U=Y[1],V=(0,c.useState)(""),$=(0,l.Z)(V,2),ee=$[0],te=$[1],ae=(0,c.useState)(!1),ne=(0,l.Z)(ae,2),re=ne[0],se=ne[1];(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,d(t),b(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){var e=JSON.stringify(B);localStorage.setItem("favorite",e)}),[B]),(0,c.useEffect)((function(){if(re){var e=(0,r.Z)(ee);if(H||W||q&&Q){var t=e.filter((function(e){var t=!H||e.make===H.value,a=!W||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(W.value),n=!q&&!Q||e.mileage>=q&&e.mileage<=Q;return t&&a&&n}));d(t),G(""),U(""),A(""),I("")}se(!1)}}),[re,q,Q,H,W,ee]);var le={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{width:224,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}},ie={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{width:125,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}};return(0,C.jsxs)("main",{className:S,children:[(0,C.jsx)("section",{children:(0,C.jsxs)("form",{className:k,onSubmit:function(e){e.preventDefault();var t=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:t=e.sent,te(t),se(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();t()},children:[(0,C.jsx)(u.ZP,{styles:le,placeholder:"Enter the text",options:j,value:H,onChange:function(e){A(e)}}),(0,C.jsx)(u.ZP,{styles:ie,placeholder:"To $",options:N,onChange:function(e){I(e)}}),(0,C.jsx)("label",{className:F,children:"From"}),(0,C.jsx)("input",{className:L,type:"text",name:"from",value:q,onChange:function(e){G(e.target.value)}}),(0,C.jsx)("label",{className:w,children:"To"}),(0,C.jsx)("input",{className:y,type:"text",name:"to",value:Q,onChange:function(e){U(e.target.value)}}),(0,C.jsx)("button",{className:T,children:"Search"})]})}),(0,C.jsxs)("section",{className:M,children:[(0,C.jsx)(Z,{cars:i,onHandleFavoriteCar:function(e){if(0!==B.length){var t=B.find((function(t){return t.id===e}));if(t){var a=B.indexOf(t),n=(0,r.Z)(B);n.splice(a,1),R(n)}else{var s=i.find((function(t){return t.id===e}));R((function(e){return[].concat((0,r.Z)(e),[s])}))}}else{var l=i.find((function(t){return t.id===e}));R((function(e){return[].concat((0,r.Z)(e),[l])}))}}}),(0,C.jsx)("button",{className:P,type:"button",onClick:function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(h);case 3:t=e.sent,d((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))})),b((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})]})}},817:function(e,t){t.Z={list:"CarCardList_list__5r8Au",listFavorite:"CarCardList_listFavorite__nfVz-",card:"CarCardList_card__SQwyM",image:"CarCardList_image__igttp",buttonFavorite:"CarCardList_buttonFavorite__DbXhO",heart:"CarCardList_heart__Qtm39",textSubtitle:"CarCardList_textSubtitle__T5D75",textContainerFirst:"CarCardList_textContainerFirst__2992T",text:"CarCardList_text__ZYcNf",stick:"CarCardList_stick__XURuz",textContainerSecond:"CarCardList_textContainerSecond__4lSXH",textContainerThird:"CarCardList_textContainerThird__Sr-i7",buttonLearnMore:"CarCardList_buttonLearnMore__9Kwja",imageModal:"CarCardList_imageModal__iLpDW",buttonClose:"CarCardList_buttonClose__dULBf",modalSubtitleContainer:"CarCardList_modalSubtitleContainer__5BCWk",modalSubtitleText:"CarCardList_modalSubtitleText__KAL5n",modalSubtitleTextModel:"CarCardList_modalSubtitleTextModel__E41Gc",modalContainerFirst:"CarCardList_modalContainerFirst__O91ra",modalTextFirst:"CarCardList_modalTextFirst__4asqY",modalDescription:"CarCardList_modalDescription__JJUDr"}}}]);
//# sourceMappingURL=923.a22782ed.chunk.js.map