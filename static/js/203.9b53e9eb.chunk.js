"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[203],{7203:function(e,a,n){n.r(a),n.d(a,{default:function(){return se}});var t=n(1413),s=n(3433),r=n(5861),l=n(9439),i=n(4687),c=n.n(i),o=n(2791),u=n(934),d=n(1243),m="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",p=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m,"?page=1&limit=").concat(8));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(a){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m,"?page=").concat(a,"&limit=").concat(8));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(m));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=n(2134),x=n(7948),_=n.n(x),b="CarCardList_list__5r8Au",g="CarCardList_card__SQwyM",C="CarCardList_image__igttp",j="CarCardList_buttonFavorite__DbXhO",N="CarCardList_heart__Qtm39",L="CarCardList_textSubtitle__T5D75",y="CarCardList_textContainerFirst__2992T",Z="CarCardList_text__ZYcNf",k="CarCardList_stick__XURuz",S="CarCardList_textContainerSecond__4lSXH",w="CarCardList_textContainerThird__Sr-i7",F="CarCardList_buttonLearnMore__9Kwja",M="CarCardList_imageModal__iLpDW",P="CarCardList_buttonClose__dULBf",B="CarCardList_modalSubtitleContainer__5BCWk",R="CarCardList_modalSubtitleText__KAL5n",T="CarCardList_modalSubtitleTextModel__E41Gc",A="CarCardList_modalContainerFirst__O91ra",H="CarCardList_modalTextFirst__4asqY",z="CarCardList_modalDescription__JJUDr",D="CarCardList_modalAccessoriesTitle__Ao68X",E="CarCardList_modalAccessory__lej1p",O="CarCardList_modalConditionsItem__ljG13",W="CarCardList_buttonRentalCar__rDvBQ",I=n(184),G=document.getElementById("root");_().setAppElement(G);var J=function(e){var a,n=e.cars,t=e.onHandleFavoriteCar,s=(0,o.useState)(""),i=(0,l.Z)(s,2),u=i[0],d=i[1],m=(0,o.useState)(!1),p=(0,l.Z)(m,2),v=p[0],x=p[1],G=function(){x(!1),d("")},J=function(e){var a=e.split(",");return a.length>=2?a[1]:""},K=function(e){var a=e.split(",");return a.length>=2?a[2]:""};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("ul",{className:b,children:n.map((function(e){return(0,I.jsxs)("li",{className:g,children:[(0,I.jsx)("img",{className:C,src:e.img,alt:"car"}),(0,I.jsx)("button",{className:j,type:"button",onClick:function(){return a=e.id,void t(a);var a},children:(0,I.jsx)(f.lo,{className:N})}),(0,I.jsxs)("div",{className:y,children:[(0,I.jsxs)("div",{children:[(0,I.jsxs)("span",{className:L,children:[e.make,", "]}),(0,I.jsx)("span",{className:L,children:e.year})]}),(0,I.jsx)("span",{className:L,children:e.rentalPrice})]}),(0,I.jsxs)("div",{className:S,children:[(0,I.jsxs)("span",{className:Z,children:[J(e.address)," "]}),(0,I.jsx)("div",{className:k}),(0,I.jsxs)("span",{className:Z,children:[K(e.address)," "]}),(0,I.jsx)("div",{className:k}),(0,I.jsx)("span",{className:Z,children:e.rentalCompany})]}),(0,I.jsxs)("div",{className:w,children:[(0,I.jsx)("span",{className:Z,children:e.type}),(0,I.jsx)("div",{className:k}),(0,I.jsx)("span",{className:Z,children:e.model}),(0,I.jsx)("div",{className:k}),(0,I.jsx)("span",{className:Z,children:e.mileage}),(0,I.jsx)("div",{className:k}),(0,I.jsx)("span",{className:Z,children:e.accessories[0]})]}),(0,I.jsx)("button",{className:F,type:"button",onClick:function(){return function(e){x(!0);var a=function(){var a=(0,r.Z)(c().mark((function a(){var n,t;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h();case 3:n=a.sent,t=n.find((function(a){return a.id===e})),d(t),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();a()}(e.id)},children:"Learn More"})]},e.id)}))}),(0,I.jsx)(_(),{style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:10},content:{position:"relative",display:"flex",flexDirection:"column",width:541,height:752,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",marginTop:40,padding:0,paddingTop:40,paddingBottom:40,paddingLeft:40,paddingRight:40,transform:"translate(-50%, -50%)",borderRadius:24,background:"#FFF"}},isOpen:v,onRequestClose:G,children:u&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("img",{className:M,src:u.img,alt:"car"}),(0,I.jsx)("button",{className:P,type:"button",onClick:G,children:(0,I.jsx)(f.oHP,{})}),(0,I.jsxs)("div",{className:B,children:[(0,I.jsx)("span",{className:R,children:u.make}),(0,I.jsxs)("span",{className:T,children:[u.model,","]}),(0,I.jsx)("span",{className:R,children:u.year})]}),(0,I.jsxs)("div",{className:A,children:[(0,I.jsx)("span",{className:H,children:J(u.address)}),(0,I.jsx)("div",{className:k}),(0,I.jsx)("span",{className:H,children:K(u.address)}),(0,I.jsx)("div",{className:k}),(0,I.jsxs)("span",{className:H,children:["Id:",u.id]}),(0,I.jsx)("div",{className:k}),(0,I.jsxs)("span",{className:H,children:["Year:",u.year]}),(0,I.jsx)("div",{className:k}),(0,I.jsxs)("span",{className:H,children:["Type:",u.suv]})]}),(0,I.jsxs)("div",{className:A,children:[(0,I.jsxs)("span",{className:H,children:["Fuel Consumption: ",u.fuelConsumption]}),(0,I.jsx)("div",{className:k}),(0,I.jsxs)("span",{className:H,children:["Engine Size: ",u.engineSize," "]}),(0,I.jsx)("div",{className:k})]}),(0,I.jsx)("p",{className:z,children:u.description}),(0,I.jsx)("p",{className:D,children:"Accessories and functionalities:"}),(0,I.jsx)("div",{className:E,children:u.accessories.map((function(e){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{className:H,children:e},e),(0,I.jsx)("div",{className:k})]})}))}),(0,I.jsx)("p",{className:D,children:"Rental Conditions: "}),(0,I.jsx)("p",{children:(a=u.rentalConditions,a.split("\n")).map((function(e){return(0,I.jsx)("span",{className:O,children:e},e)}))}),(0,I.jsx)("a",{href:"tel: +380730000000",className:W,children:"Rental car"})]})})]})},K=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],X=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],q="CatalogPage_container__w3ZO8",Q="CatalogPage_form__Jq5p5",Y="CatalogPage_labelForm__hB4Sc",U="CatalogPage_inputFrom__25ygl",V="CatalogPage_labelFrom__ZRQoK",$="CatalogPage_inputTo__nASY7",ee="CatalogPage_labelTo__ugawd",ae="CatalogPage_buttonSearch__LqjvX",ne="CatalogPage_sectionList__HWN9L",te="CatalogPage_buttonLoadMore__sGw7i",se=function(){var e,a=(0,o.useState)([]),n=(0,l.Z)(a,2),i=n[0],d=n[1],m=(0,o.useState)(1),f=(0,l.Z)(m,2),x=f[0],_=f[1],b=(0,o.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),g=(0,l.Z)(b,2),C=g[0],j=g[1],N=(0,o.useState)(""),L=(0,l.Z)(N,2),y=L[0],Z=L[1],k=(0,o.useState)(""),S=(0,l.Z)(k,2),w=S[0],F=S[1],M=(0,o.useState)(""),P=(0,l.Z)(M,2),B=P[0],R=P[1],T=(0,o.useState)(""),A=(0,l.Z)(T,2),H=A[0],z=A[1],D=(0,o.useState)(""),E=(0,l.Z)(D,2),O=E[0],W=E[1],G=(0,o.useState)(!1),se=(0,l.Z)(G,2),re=se[0],le=se[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:a=e.sent,d(a),_(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){var e=JSON.stringify(C);localStorage.setItem("favorite",e)}),[C]),(0,o.useEffect)((function(){if(re){var e=(0,s.Z)(O);if(console.log(y),y||w||B&&H){var a=e.filter((function(e){var a=!y||e.make===y.value,n=!w||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(w.value),t=!B&&!H||e.mileage>=B&&e.mileage<=H;return a&&n&&t}));d(a),R(""),z(""),Z(""),F("")}le(!1)}}),[re,B,H,y,w,O]);var ie={control:function(e){return(0,t.Z)((0,t.Z)({},e),{},{width:224,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}},ce={control:function(e){return(0,t.Z)((0,t.Z)({},e),{},{width:125,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18})}};return(0,I.jsxs)("main",{className:q,children:[(0,I.jsx)("section",{children:(0,I.jsxs)("form",{className:Q,onSubmit:function(e){e.preventDefault();var a=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:a=e.sent,W(a),le(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();a()},children:[(0,I.jsxs)("label",{className:Y,children:["Car brand",(0,I.jsx)(u.ZP,{styles:ie,placeholder:"Enter the text",options:K,value:y,onChange:function(e){Z(e)}})]}),(0,I.jsxs)("label",{className:Y,children:["Price/ 1 hour",(0,I.jsx)(u.ZP,{styles:ce,placeholder:"To $",options:X,value:w,onChange:function(e){F(e)}})]}),(0,I.jsxs)("label",{className:Y,children:["\u0421ar mileage / km",(0,I.jsx)("label",{className:V,children:"From"}),(0,I.jsx)("input",{className:U,type:"text",name:"from",value:B,onChange:function(e){R(e.target.value)}})]}),(0,I.jsxs)("label",{className:Y,children:[".",(0,I.jsx)("label",{className:ee,children:"To"}),(0,I.jsx)("input",{className:$,type:"text",name:"to",value:H,onChange:function(e){z(e.target.value)}})]}),(0,I.jsx)("button",{className:ae,children:"Search"})]})}),(0,I.jsxs)("section",{className:ne,children:[(0,I.jsx)(J,{cars:i,onHandleFavoriteCar:function(e){if(0!==C.length){var a=C.find((function(a){return a.id===e}));if(a){var n=C.indexOf(a),t=(0,s.Z)(C);t.splice(n,1),j(t)}else{var r=i.find((function(a){return a.id===e}));j((function(e){return[].concat((0,s.Z)(e),[r])}))}}else{var l=i.find((function(a){return a.id===e}));j((function(e){return[].concat((0,s.Z)(e),[l])}))}}}),(0,I.jsx)("button",{className:te,type:"button",onClick:function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(x);case 3:a=e.sent,d((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(a))})),_((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})]})}}}]);
//# sourceMappingURL=203.9b53e9eb.chunk.js.map