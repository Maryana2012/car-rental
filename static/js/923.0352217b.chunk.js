"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[923],{9923:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var n=t(1413),s=t(3433),r=t(5861),l=t(9439),i=t(4687),o=t.n(i),c=t(2791),u=t(934),d=t(1243),m="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",v=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m,"?page=1&limit=").concat(8));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(o().mark((function e(a){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m,"?page=").concat(a,"&limit=").concat(8));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=t(2134),b=t(7948),f=t.n(b),C=t(817),_=t(184),g=document.getElementById("root");f().setAppElement(g);var Z=function(e){var a,t=e.cars,n=e.onHandleFavoriteCar,s=(0,c.useState)(""),i=(0,l.Z)(s,2),u=i[0],d=i[1],m=(0,c.useState)(!1),v=(0,l.Z)(m,2),x=v[0],b=v[1],g=function(){b(!1),d("")},Z=function(e){var a=e.split(",");return a.length>=2?a[1]:""},j=function(e){var a=e.split(",");return a.length>=2?a[2]:""};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{className:C.Z.list,children:t.map((function(e){return(0,_.jsxs)("li",{className:C.Z.card,children:[(0,_.jsx)("img",{className:C.Z.image,src:e.img,alt:"car"}),(0,_.jsx)("button",{className:C.Z.buttonFavorite,type:"button",onClick:function(){return a=e.id,void n(a);var a},children:(0,_.jsx)(h.lo,{className:C.Z.heart})}),(0,_.jsxs)("div",{className:C.Z.textContainerFirst,children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("span",{className:C.Z.textSubtitle,children:[e.make,", "]}),(0,_.jsx)("span",{className:C.Z.textSubtitle,children:e.year})]}),(0,_.jsx)("span",{className:C.Z.textSubtitle,children:e.rentalPrice})]}),(0,_.jsxs)("div",{className:C.Z.textContainerSecond,children:[(0,_.jsxs)("span",{className:C.Z.text,children:[Z(e.address)," "]}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsxs)("span",{className:C.Z.text,children:[j(e.address)," "]}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsx)("span",{className:C.Z.text,children:e.rentalCompany})]}),(0,_.jsxs)("div",{className:C.Z.textContainerThird,children:[(0,_.jsx)("span",{className:C.Z.text,children:e.type}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsx)("span",{className:C.Z.text,children:e.model}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsx)("span",{className:C.Z.text,children:e.mileage}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsx)("span",{className:C.Z.text,children:e.accessories[0]})]}),(0,_.jsx)("button",{className:C.Z.buttonLearnMore,type:"button",onClick:function(){return function(e){b(!0);var a=function(){var a=(0,r.Z)(o().mark((function a(){var t,n;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p();case 3:t=a.sent,n=t.find((function(a){return a.id===e})),d(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();a()}(e.id)},children:"Learn More"})]},e.id)}))}),(0,_.jsx)(f(),{style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:10},content:{position:"relative",display:"flex",flexDirection:"column",width:541,height:752,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",marginTop:40,padding:0,paddingTop:40,paddingBottom:40,paddingLeft:40,paddingRight:40,transform:"translate(-50%, -50%)",borderRadius:24,background:"#FFF"}},isOpen:x,onRequestClose:g,children:u&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("img",{className:C.Z.imageModal,src:u.img,alt:"car"}),(0,_.jsx)("button",{className:C.Z.buttonClose,type:"button",onClick:g,children:(0,_.jsx)(h.oHP,{})}),(0,_.jsxs)("div",{className:C.Z.modalSubtitleContainer,children:[(0,_.jsx)("span",{className:C.Z.modalSubtitleText,children:u.make}),(0,_.jsxs)("span",{className:C.Z.modalSubtitleTextModel,children:[u.model,","]}),(0,_.jsx)("span",{className:C.Z.modalSubtitleText,children:u.year})]}),(0,_.jsxs)("div",{className:C.Z.modalContainerFirst,children:[(0,_.jsx)("span",{className:C.Z.modalTextFirst,children:Z(u.address)}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsx)("span",{className:C.Z.modalTextFirst,children:j(u.address)}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsxs)("span",{className:C.Z.modalTextFirst,children:["Id:",u.id]}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsxs)("span",{className:C.Z.modalTextFirst,children:["Year:",u.year]}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsxs)("span",{className:C.Z.modalTextFirst,children:["Type:",u.suv]})]}),(0,_.jsxs)("div",{className:C.Z.modalContainerFirst,children:[(0,_.jsxs)("span",{className:C.Z.modalTextFirst,children:["Fuel Consumption: ",u.fuelConsumption]}),(0,_.jsx)("div",{className:C.Z.stick}),(0,_.jsxs)("span",{className:C.Z.modalTextFirst,children:["Engine Size: ",u.engineSize," "]}),(0,_.jsx)("div",{className:C.Z.stick})]}),(0,_.jsx)("p",{className:C.Z.modalDescription,children:u.description}),(0,_.jsx)("p",{className:C.Z.modalAccessoriesTitle,children:"Accessories and functionalities:"}),(0,_.jsx)("div",{className:C.Z.modalAccessory,children:u.accessories.map((function(e){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:C.Z.modalTextFirst,children:e},e),(0,_.jsx)("div",{className:C.Z.stick})]})}))}),(0,_.jsx)("p",{className:C.Z.modalAccessoriesTitle,children:"Rental Conditions: "}),(0,_.jsx)("p",{children:(a=u.rentalConditions,a.split("\n")).map((function(e){return(0,_.jsx)("span",{className:C.Z.modalConditionsItem,children:e},e)}))}),(0,_.jsx)("a",{href:"tel: +380730000000",className:C.Z.buttonRentalCar,children:"Rental car"})]})})]})},j=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],N=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],k="CatalogPage_container__w3ZO8",L="CatalogPage_form__Jq5p5",S="CatalogPage_labelForm__hB4Sc",F="CatalogPage_inputFrom__25ygl",y="CatalogPage_labelFrom__ZRQoK",T="CatalogPage_inputTo__nASY7",w="CatalogPage_labelTo__ugawd",M="CatalogPage_buttonSearch__LqjvX",P="CatalogPage_sectionList__HWN9L",A="CatalogPage_buttonLoadMore__sGw7i",B=function(){var e,a=(0,c.useState)([]),t=(0,l.Z)(a,2),i=t[0],d=t[1],m=(0,c.useState)(1),h=(0,l.Z)(m,2),b=h[0],f=h[1],C=(0,c.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),g=(0,l.Z)(C,2),B=g[0],R=g[1],D=(0,c.useState)(""),z=(0,l.Z)(D,2),H=z[0],E=z[1],I=(0,c.useState)(""),O=(0,l.Z)(I,2),W=O[0],G=O[1],J=(0,c.useState)(""),K=(0,l.Z)(J,2),X=K[0],q=K[1],Q=(0,c.useState)(""),Y=(0,l.Z)(Q,2),U=Y[0],V=Y[1],$=(0,c.useState)(""),ee=(0,l.Z)($,2),ae=ee[0],te=ee[1],ne=(0,c.useState)(!1),se=(0,l.Z)(ne,2),re=se[0],le=se[1];(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:a=e.sent,d(a),f(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){var e=JSON.stringify(B);localStorage.setItem("favorite",e)}),[B]),(0,c.useEffect)((function(){if(re){var e=(0,s.Z)(ae);if(console.log(H),H||W||X&&U){var a=e.filter((function(e){var a=!H||e.make===H.value,t=!W||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(W.value),n=!X&&!U||e.mileage>=X&&e.mileage<=U;return a&&t&&n}));d(a),q(""),V(""),E(""),G("")}le(!1)}}),[re,X,U,H,W,ae]);var ie={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{width:224,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}},oe={control:function(e){return(0,n.Z)((0,n.Z)({},e),{},{width:125,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}};return(0,_.jsxs)("main",{className:k,children:[(0,_.jsx)("section",{children:(0,_.jsxs)("form",{className:L,onSubmit:function(e){e.preventDefault();var a=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:a=e.sent,te(a),le(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();a()},children:[(0,_.jsxs)("label",{className:S,children:["Car brand",(0,_.jsx)(u.ZP,{styles:ie,placeholder:"Enter the text",options:j,value:H,onChange:function(e){E(e)}})]}),(0,_.jsxs)("label",{className:S,children:["Price/ 1 hour",(0,_.jsx)(u.ZP,{styles:oe,placeholder:"To $",options:N,value:W,onChange:function(e){G(e)}})]}),(0,_.jsxs)("label",{className:S,children:["\u0421ar mileage / km",(0,_.jsx)("label",{className:y,children:"From"}),(0,_.jsx)("input",{className:F,type:"text",name:"from",value:X,onChange:function(e){q(e.target.value)}})]}),(0,_.jsxs)("label",{className:S,children:[".",(0,_.jsx)("label",{className:w,children:"To"}),(0,_.jsx)("input",{className:T,type:"text",name:"to",value:U,onChange:function(e){V(e.target.value)}})]}),(0,_.jsx)("button",{className:M,children:"Search"})]})}),(0,_.jsxs)("section",{className:P,children:[(0,_.jsx)(Z,{cars:i,onHandleFavoriteCar:function(e){if(0!==B.length){var a=B.find((function(a){return a.id===e}));if(a){var t=B.indexOf(a),n=(0,s.Z)(B);n.splice(t,1),R(n)}else{var r=i.find((function(a){return a.id===e}));R((function(e){return[].concat((0,s.Z)(e),[r])}))}}else{var l=i.find((function(a){return a.id===e}));R((function(e){return[].concat((0,s.Z)(e),[l])}))}}}),(0,_.jsx)("button",{className:A,type:"button",onClick:function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(b);case 3:a=e.sent,d((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(a))})),f((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})]})}},817:function(e,a){a.Z={list:"CarCardList_list__5r8Au",listFavorite:"CarCardList_listFavorite__nfVz-",card:"CarCardList_card__SQwyM",image:"CarCardList_image__igttp",buttonFavorite:"CarCardList_buttonFavorite__DbXhO",heart:"CarCardList_heart__Qtm39",textSubtitle:"CarCardList_textSubtitle__T5D75",textContainerFirst:"CarCardList_textContainerFirst__2992T",text:"CarCardList_text__ZYcNf",stick:"CarCardList_stick__XURuz",textContainerSecond:"CarCardList_textContainerSecond__4lSXH",textContainerThird:"CarCardList_textContainerThird__Sr-i7",buttonLearnMore:"CarCardList_buttonLearnMore__9Kwja",imageModal:"CarCardList_imageModal__iLpDW",buttonClose:"CarCardList_buttonClose__dULBf",modalSubtitleContainer:"CarCardList_modalSubtitleContainer__5BCWk",modalSubtitleText:"CarCardList_modalSubtitleText__KAL5n",modalSubtitleTextModel:"CarCardList_modalSubtitleTextModel__E41Gc",modalContainerFirst:"CarCardList_modalContainerFirst__O91ra",modalTextFirst:"CarCardList_modalTextFirst__4asqY",modalDescription:"CarCardList_modalDescription__JJUDr",modalAccessoriesTitle:"CarCardList_modalAccessoriesTitle__Ao68X",modalAccessory:"CarCardList_modalAccessory__lej1p",rentalConditions:"CarCardList_rentalConditions__Bcs6G",modalConditionsItem:"CarCardList_modalConditionsItem__ljG13",buttonRentalCar:"CarCardList_buttonRentalCar__rDvBQ"}}}]);
//# sourceMappingURL=923.0352217b.chunk.js.map