"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{3120:function(e,a,t){t.d(a,{SD:function(){return c},bG:function(){return o},nv:function(){return u}});var n=t(5861),s=t(4687),r=t.n(s),l=t(1243),i="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",o=function(){var e=(0,n.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(i,"?page=1&limit=").concat(8));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(r().mark((function e(a){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(i,"?page=").concat(a,"&limit=").concat(8));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(i));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},8099:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var n=t(1413),s=t(3433),r=t(5861),l=t(9439),i=t(4687),o=t.n(i),c=t(2791),u=t(934),d=t(3120),m=t(2134),v=t(7948),x=t.n(v),p=t(817),h=t(184),f=document.getElementById("root");x().setAppElement(f);var b=function(e){var a,t=e.cars,n=e.onHandleFavoriteCar,s=(0,c.useState)(""),i=(0,l.Z)(s,2),u=i[0],v=i[1],f=(0,c.useState)(!1),b=(0,l.Z)(f,2),C=b[0],_=b[1],g=function(){_(!1),v("")},Z=function(e){var a=e.split(",");return a.length>=2?a[1]:""},j=function(e){var a=e.split(",");return a.length>=2?a[2]:""};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{className:p.Z.list,children:t.map((function(e){return(0,h.jsxs)("li",{className:p.Z.card,children:[(0,h.jsx)("img",{className:p.Z.image,src:e.img,alt:"car"}),(0,h.jsx)("button",{className:p.Z.buttonFavorite,type:"button",onClick:function(){return a=e.id,void n(a);var a},children:(0,h.jsx)(m.lo,{className:p.Z.heart})}),(0,h.jsxs)("div",{className:p.Z.textContainerFirst,children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("span",{className:p.Z.textSubtitle,children:[e.make,", "]}),(0,h.jsx)("span",{className:p.Z.textSubtitle,children:e.year})]}),(0,h.jsx)("span",{className:p.Z.textSubtitle,children:e.rentalPrice})]}),(0,h.jsxs)("div",{className:p.Z.textContainerSecond,children:[(0,h.jsxs)("span",{className:p.Z.text,children:[Z(e.address)," "]}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsxs)("span",{className:p.Z.text,children:[j(e.address)," "]}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsx)("span",{className:p.Z.text,children:e.rentalCompany})]}),(0,h.jsxs)("div",{className:p.Z.textContainerThird,children:[(0,h.jsx)("span",{className:p.Z.text,children:e.type}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsx)("span",{className:p.Z.text,children:e.model}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsx)("span",{className:p.Z.text,children:e.mileage}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsx)("span",{className:p.Z.text,children:e.accessories[0]})]}),(0,h.jsx)("button",{className:p.Z.buttonLearnMore,type:"button",onClick:function(){return function(e){_(!0);var a=function(){var a=(0,r.Z)(o().mark((function a(){var t,n;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,d.nv)();case 3:t=a.sent,n=t.find((function(a){return a.id===e})),v(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();a()}(e.id)},children:"Learn More"})]},e.id)}))}),(0,h.jsx)(x(),{style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:10},content:{position:"relative",display:"flex",flexDirection:"column",width:541,height:752,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",marginTop:40,padding:0,paddingTop:40,paddingBottom:40,paddingLeft:40,paddingRight:40,transform:"translate(-50%, -50%)",borderRadius:24,background:"#FFF"}},isOpen:C,onRequestClose:g,children:u&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{className:p.Z.imageModal,src:u.img,alt:"car"}),(0,h.jsx)("button",{className:p.Z.buttonClose,type:"button",onClick:g,children:(0,h.jsx)(m.oHP,{})}),(0,h.jsxs)("div",{className:p.Z.modalSubtitleContainer,children:[(0,h.jsx)("span",{className:p.Z.modalSubtitleText,children:u.make}),(0,h.jsxs)("span",{className:p.Z.modalSubtitleTextModel,children:[u.model,","]}),(0,h.jsx)("span",{className:p.Z.modalSubtitleText,children:u.year})]}),(0,h.jsxs)("div",{className:p.Z.modalContainerFirst,children:[(0,h.jsx)("span",{className:p.Z.modalTextFirst,children:Z(u.address)}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsx)("span",{className:p.Z.modalTextFirst,children:j(u.address)}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsxs)("span",{className:p.Z.modalTextFirst,children:["Id:",u.id]}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsxs)("span",{className:p.Z.modalTextFirst,children:["Year:",u.year]}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsxs)("span",{className:p.Z.modalTextFirst,children:["Type:",u.suv]})]}),(0,h.jsxs)("div",{className:p.Z.modalContainerFirst,children:[(0,h.jsxs)("span",{className:p.Z.modalTextFirst,children:["Fuel Consumption: ",u.fuelConsumption]}),(0,h.jsx)("div",{className:p.Z.stick}),(0,h.jsxs)("span",{className:p.Z.modalTextFirst,children:["Engine Size: ",u.engineSize," "]}),(0,h.jsx)("div",{className:p.Z.stick})]}),(0,h.jsx)("p",{className:p.Z.modalDescription,children:u.description}),(0,h.jsx)("p",{className:p.Z.modalAccessoriesTitle,children:"Accessories and functionalities:"}),(0,h.jsx)("div",{className:p.Z.modalAccessory,children:u.accessories.map((function(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:p.Z.modalTextFirst,children:e},e),(0,h.jsx)("div",{className:p.Z.stick})]})}))}),(0,h.jsx)("p",{className:p.Z.modalAccessoriesTitle,children:"Rental Conditions: "}),(0,h.jsx)("p",{children:(a=u.rentalConditions,a.split("\n")).map((function(e){return(0,h.jsx)("span",{className:p.Z.modalConditionsItem,children:e},e)}))}),(0,h.jsx)("a",{href:"tel: +380730000000",className:p.Z.buttonRentalCar,children:"Rental car"})]})})]})},C=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],_=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],g="CatalogPage_container__w3ZO8",Z="CatalogPage_form__Jq5p5",j="CatalogPage_labelForm__hB4Sc",N="CatalogPage_inputFrom__25ygl",S="CatalogPage_labelFrom__ZRQoK",k="CatalogPage_inputTo__nASY7",L="CatalogPage_labelTo__ugawd",F="CatalogPage_buttonSearch__LqjvX",y="CatalogPage_sectionList__HWN9L",T="CatalogPage_buttonLoadMore__sGw7i",w=function(){var e,a=(0,c.useState)([]),t=(0,l.Z)(a,2),i=t[0],m=t[1],v=(0,c.useState)(1),x=(0,l.Z)(v,2),p=x[0],f=x[1],w=(0,c.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),M=(0,l.Z)(w,2),P=M[0],A=M[1],B=(0,c.useState)(""),R=(0,l.Z)(B,2),D=R[0],z=R[1],H=(0,c.useState)(""),E=(0,l.Z)(H,2),G=E[0],I=E[1],O=(0,c.useState)(""),W=(0,l.Z)(O,2),J=W[0],K=W[1],X=(0,c.useState)(""),q=(0,l.Z)(X,2),Q=q[0],Y=q[1],U=(0,c.useState)(""),V=(0,l.Z)(U,2),$=V[0],ee=V[1],ae=(0,c.useState)(!1),te=(0,l.Z)(ae,2),ne=te[0],se=te[1];(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.bG)();case 3:a=e.sent,m(a),f(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){var e=JSON.stringify(P);localStorage.setItem("favorite",e)}),[P]),(0,c.useEffect)((function(){if(ne){var e=(0,s.Z)($);if(console.log(D),D||G||J&&Q){var a=e.filter((function(e){var a=!D||e.make===D.value,t=!G||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(G.value),n=!J&&!Q||e.mileage>=J&&e.mileage<=Q;return a&&t&&n}));m(a),K(""),Y(""),z(""),I("")}se(!1)}}),[ne,J,Q,D,G,$]);var re={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{width:224,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}},le={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{width:125,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}};return(0,h.jsxs)("main",{className:g,children:[(0,h.jsx)("section",{children:(0,h.jsxs)("form",{className:Z,onSubmit:function(e){e.preventDefault();var a=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.nv)();case 3:a=e.sent,ee(a),se(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();a()},children:[(0,h.jsxs)("label",{className:j,children:["Car brand",(0,h.jsx)(u.ZP,{styles:re,placeholder:"Enter the text",options:C,value:D,onChange:function(e){z(e)}})]}),(0,h.jsxs)("label",{className:j,children:["Price/ 1 hour",(0,h.jsx)(u.ZP,{styles:le,placeholder:"To $",options:_,value:G,onChange:function(e){I(e)}})]}),(0,h.jsxs)("label",{className:j,children:["\u0421ar mileage / km",(0,h.jsx)("label",{className:S,children:"From"}),(0,h.jsx)("input",{className:N,type:"text",name:"from",value:J,onChange:function(e){K(e.target.value)}})]}),(0,h.jsxs)("label",{className:j,children:[".",(0,h.jsx)("label",{className:L,children:"To"}),(0,h.jsx)("input",{className:k,type:"text",name:"to",value:Q,onChange:function(e){Y(e.target.value)}})]}),(0,h.jsx)("button",{className:F,children:"Search"})]})}),(0,h.jsxs)("section",{className:y,children:[(0,h.jsx)(b,{cars:i,onHandleFavoriteCar:function(e){if(0!==P.length){var a=P.find((function(a){return a.id===e}));if(a){var t=P.indexOf(a),n=(0,s.Z)(P);n.splice(t,1),A(n)}else{var r=i.find((function(a){return a.id===e}));A((function(e){return[].concat((0,s.Z)(e),[r])}))}}else{var l=i.find((function(a){return a.id===e}));A((function(e){return[].concat((0,s.Z)(e),[l])}))}}}),(0,h.jsx)("button",{className:T,type:"button",onClick:function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.SD)(p);case 3:a=e.sent,m((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(a))})),f((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})]})}},817:function(e,a){a.Z={list:"CarCardList_list__5r8Au",listFavorite:"CarCardList_listFavorite__nfVz-",card:"CarCardList_card__SQwyM",image:"CarCardList_image__igttp",buttonFavorite:"CarCardList_buttonFavorite__DbXhO",heart:"CarCardList_heart__Qtm39",textSubtitle:"CarCardList_textSubtitle__T5D75",textContainerFirst:"CarCardList_textContainerFirst__2992T",text:"CarCardList_text__ZYcNf",stick:"CarCardList_stick__XURuz",textContainerSecond:"CarCardList_textContainerSecond__4lSXH",textContainerThird:"CarCardList_textContainerThird__Sr-i7",buttonLearnMore:"CarCardList_buttonLearnMore__9Kwja",imageModal:"CarCardList_imageModal__iLpDW",buttonClose:"CarCardList_buttonClose__dULBf",modalSubtitleContainer:"CarCardList_modalSubtitleContainer__5BCWk",modalSubtitleText:"CarCardList_modalSubtitleText__KAL5n",modalSubtitleTextModel:"CarCardList_modalSubtitleTextModel__E41Gc",modalContainerFirst:"CarCardList_modalContainerFirst__O91ra",modalTextFirst:"CarCardList_modalTextFirst__4asqY",modalDescription:"CarCardList_modalDescription__JJUDr",modalAccessoriesTitle:"CarCardList_modalAccessoriesTitle__Ao68X",modalAccessory:"CarCardList_modalAccessory__lej1p",rentalConditions:"CarCardList_rentalConditions__Bcs6G",modalConditionsItem:"CarCardList_modalConditionsItem__ljG13",buttonRentalCar:"CarCardList_buttonRentalCar__rDvBQ"}}}]);
//# sourceMappingURL=99.b91d25fa.chunk.js.map