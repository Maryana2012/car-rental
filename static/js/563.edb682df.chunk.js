"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[563],{3120:function(e,a,n){n.d(a,{SD:function(){return c},bG:function(){return o},nv:function(){return u}});var t=n(5861),s=n(4687),r=n.n(s),l=n(1243),i="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",o=function(){var e=(0,t.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(i,"?page=1&limit=").concat(8));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.Z)(r().mark((function e(a){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(i,"?page=").concat(a,"&limit=").concat(8));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(i));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},1564:function(e,a,n){n.d(a,{Z:function(){return T}});var t=n(5861),s=n(9439),r=n(4687),l=n.n(r),i=n(2791),o=n(2134),c=n(3120),u=n(7948),d=n.n(u),m={imageModal:"Modal_imageModal__UOsLF",buttonClose:"Modal_buttonClose__5LpkD",modalSubtitleContainer:"Modal_modalSubtitleContainer__MAqh8",modalSubtitleText:"Modal_modalSubtitleText__wKh6v",modalSubtitleTextModel:"Modal_modalSubtitleTextModel__+qvLE",modalContainerFirst:"Modal_modalContainerFirst__pCh50",modalTextFirst:"Modal_modalTextFirst__4G-nQ",modalDescription:"Modal_modalDescription__uJ4eb",modalAccessoriesTitle:"Modal_modalAccessoriesTitle__MaXfN",modalAccessory:"Modal_modalAccessory__MYEe3",rentalConditions:"Modal_rentalConditions__5lW1M",modalConditionsItem:"Modal_modalConditionsItem__+vZA2",modalMilage:"Modal_modalMilage__+lc8T",modalMileage:"Modal_modalMileage__Ag+VV",buttonRentalCar:"Modal_buttonRentalCar__whHyW"},p=n(184),v=document.getElementById("root");d().setAppElement(v);var f=function(e){var a=e.findCar,n=e.modalStatus,t=e.closeModal,r=(0,i.useState)(!1),l=(0,s.Z)(r,2),c=l[0],u=l[1];(0,i.useEffect)((function(){u(n)}),[n]);var v;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d(),{style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:10},content:{position:"relative",display:"flex",flexDirection:"column",width:541,height:752,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",marginTop:40,padding:0,paddingTop:40,paddingBottom:40,paddingLeft:40,paddingRight:40,transform:"translate(-50%, -50%)",borderRadius:24,background:"#FFF"}},isOpen:c,onRequestClose:function(){t()},children:a&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{className:m.imageModal,src:a.img,alt:"car"}),(0,p.jsx)("button",{className:m.buttonClose,type:"button",onClick:t,children:(0,p.jsx)(o.oHP,{})}),(0,p.jsxs)("div",{className:m.modalSubtitleContainer,children:[(0,p.jsx)("span",{className:m.modalSubtitleText,children:a.make}),(0,p.jsxs)("span",{className:m.modalSubtitleTextModel,children:[a.model,","]}),(0,p.jsx)("span",{className:m.modalSubtitleText,children:a.year})]}),(0,p.jsxs)("div",{className:m.modalContainerFirst,children:[(0,p.jsx)("span",{className:m.modalTextFirst,children:function(e){var a=e.split(",");return a.length>=2?a[1]:""}(a.address)}),(0,p.jsx)("div",{className:m.stick}),(0,p.jsx)("span",{className:m.modalTextFirst,children:function(e){var a=e.split(",");return a.length>=2?a[2]:""}(a.address)}),(0,p.jsx)("div",{className:m.stick}),(0,p.jsxs)("span",{className:m.modalTextFirst,children:["Id:",a.id]}),(0,p.jsx)("div",{className:m.stick}),(0,p.jsxs)("span",{className:m.modalTextFirst,children:["Year:",a.year]}),(0,p.jsx)("div",{className:m.stick}),(0,p.jsxs)("span",{className:m.modalTextFirst,children:["Type:",a.type]})]}),(0,p.jsxs)("div",{className:m.modalContainerFirst,children:[(0,p.jsxs)("span",{className:m.modalTextFirst,children:["Fuel Consumption: ",a.fuelConsumption]}),(0,p.jsx)("div",{className:m.stick}),(0,p.jsxs)("span",{className:m.modalTextFirst,children:["Engine Size: ",a.engineSize," "]}),(0,p.jsx)("div",{className:m.stick})]}),(0,p.jsx)("p",{className:m.modalDescription,children:a.description}),(0,p.jsx)("p",{className:m.modalAccessoriesTitle,children:"Accessories and functionalities:"}),(0,p.jsx)("div",{className:m.modalAccessory,children:a.accessories.map((function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:m.modalTextFirst,children:e},e),(0,p.jsx)("div",{className:m.stick})]})}))}),(0,p.jsx)("p",{className:m.modalAccessoriesTitle,children:"Rental Conditions: "}),(0,p.jsx)("p",{children:(v=a.rentalConditions,v.split("\n")).map((function(e){return(0,p.jsx)("span",{className:m.modalConditionsItem,children:e},e)}))}),(0,p.jsxs)("div",{className:m.modalAccessory,children:[(0,p.jsxs)("span",{className:m.modalConditionsItem,children:["Mileage: ",(0,p.jsx)("span",{className:m.modalMileage,children:a.mileage.toLocaleString("en-US")})]}),(0,p.jsxs)("span",{className:m.modalConditionsItem,children:["Price: ",(0,p.jsx)("span",{className:m.modalMileage,children:a.rentalPrice})]})]}),(0,p.jsx)("a",{href:"tel: +380730000000",className:m.buttonRentalCar,children:"Rental car"})]})})})},h="CarCard_card__zY44T",x="CarCard_image__sW6iY",g="CarCard_buttonFavorite__ej6Yt",_="CarCard_heart__xoNvT",b="CarCard_textSubtitle__Afp8I",j="CarCard_textModel__GO9yA",C="CarCard_textContainerFirst__Uri55",N="CarCard_text__7bEFc",M="CarCard_stick__CUGkh",y="CarCard_textContainerSecond__PaFqt",S="CarCard_textContainerThird__j3JmW",k="CarCard_buttonLearnMore__yCMkX",F=function(e){var a=e.id,n=e.img,r=e.make,u=e.year,d=e.rentalPrice,m=e.address,v=e.rentalCompany,F=e.type,Z=e.model,T=e.mileage,w=e.accessories,L=e.makeFavorite,P=e.favorite,A=(0,i.useState)(""),R=(0,s.Z)(A,2),B=R[0],I=R[1],E=(0,i.useState)(!1),W=(0,s.Z)(E,2),z=W[0],D=W[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("li",{className:h,children:[(0,p.jsx)("img",{className:x,src:n,alt:"car"}),(0,p.jsx)("button",{className:g,type:"button",onClick:function(){return function(e){L(e)}(a)},children:P.find((function(e){return e.id===a}))?(0,p.jsx)(o.M_L,{className:_,style:{color:"blue"}}):(0,p.jsx)(o.lo,{className:_})}),(0,p.jsxs)("div",{className:C,children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{className:b,children:[r,", "]}),(0,p.jsxs)("span",{className:j,children:[Z," "]}),(0,p.jsx)("span",{className:b,children:u})]}),(0,p.jsx)("span",{className:b,children:d})]}),(0,p.jsxs)("div",{className:y,children:[(0,p.jsxs)("span",{className:N,children:[function(e){var a=e.split(",");return a.length>=2?a[1]:""}(m)," "]}),(0,p.jsx)("div",{className:M}),(0,p.jsxs)("span",{className:N,children:[function(e){var a=e.split(",");return a.length>=2?a[2]:""}(m)," "]}),(0,p.jsx)("div",{className:M}),(0,p.jsx)("span",{className:N,children:v})]}),(0,p.jsxs)("div",{className:S,children:[(0,p.jsx)("span",{className:N,children:F}),(0,p.jsx)("div",{className:M}),(0,p.jsx)("span",{className:N,children:Z}),(0,p.jsx)("div",{className:M}),(0,p.jsx)("span",{className:N,children:T}),(0,p.jsx)("div",{className:M}),(0,p.jsx)("span",{className:N,children:w[0]})]}),(0,p.jsx)("button",{className:k,type:"button",onClick:function(){return function(e){D(!0);var a=function(){var a=(0,t.Z)(l().mark((function a(){var n,t;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,c.nv)();case 3:n=a.sent,t=n.find((function(a){return a.id===e})),I(t),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();a()}(a)},children:"Learn More"})]},a),(0,p.jsx)(f,{findCar:B,modalStatus:z,closeModal:function(){D(!1),I("")}})]})},Z="CarList_list__Bss5J",T=function(e){var a=e.cars,n=e.favorite,t=e.handleFavoriteCar;return(0,p.jsx)("ul",{className:Z,children:a.map((function(e){return(0,p.jsx)(F,{id:e.id,img:e.img,make:e.make,year:e.year,rentalPrice:e.rentalPrice,address:e.address,rentalCompany:e.rentalCompany,type:e.type,model:e.model,mileage:e.mileage,favorite:n,accessories:e.accessories[0],makeFavorite:t},e.id)}))})}},563:function(e,a,n){n.r(a),n.d(a,{default:function(){return F}});var t=n(5861),s=n(3433),r=n(9439),l=n(4687),i=n.n(l),o=n(2791),c=n(934),u=n(3120),d=n(1413),m=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],p=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],v={control:function(e){return(0,d.Z)((0,d.Z)({},e),{},{width:224,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18,"&:hover":{cursor:"pointer"}})},placeholder:function(e){return(0,d.Z)((0,d.Z)({},e),{},{color:"#121417",fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500})}},f={control:function(e){return(0,d.Z)((0,d.Z)({},e),{},{width:125,height:48,borderRadius:14,background:"#F7F7FB",border:"none",marginRight:18,fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500,color:"#121417",paddingLeft:18,"&:hover":{cursor:"pointer"}})},placeholder:function(e){return(0,d.Z)((0,d.Z)({},e),{},{color:"#121417",fontFamily:"Manrope, sans-serif",fontSize:18,fontWeight:500})}},h=n(1564),x="CatalogPage_container__w3ZO8",g="CatalogPage_form__Jq5p5",_="CatalogPage_labelForm__hB4Sc",b="CatalogPage_inputFrom__25ygl",j="CatalogPage_labelFrom__ZRQoK",C="CatalogPage_inputTo__nASY7",N="CatalogPage_labelTo__ugawd",M="CatalogPage_buttonSearch__LqjvX",y="CatalogPage_sectionList__HWN9L",S="CatalogPage_buttonLoadMore__sGw7i",k=n(184),F=function(){var e,a=(0,o.useState)([]),n=(0,r.Z)(a,2),l=n[0],d=n[1],F=(0,o.useState)(1),Z=(0,r.Z)(F,2),T=Z[0],w=Z[1],L=(0,o.useState)(""),P=(0,r.Z)(L,2),A=P[0],R=P[1],B=(0,o.useState)(""),I=(0,r.Z)(B,2),E=I[0],W=I[1],z=(0,o.useState)(""),D=(0,r.Z)(z,2),G=D[0],H=D[1],O=(0,o.useState)(""),q=(0,r.Z)(O,2),J=q[0],U=q[1],Y=(0,o.useState)(""),K=(0,r.Z)(Y,2),V=K[0],X=K[1],Q=(0,o.useState)(!1),$=(0,r.Z)(Q,2),ee=$[0],ae=$[1],ne=(0,o.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),te=(0,r.Z)(ne,2),se=te[0],re=te[1];(0,o.useEffect)((function(){var e=JSON.stringify(se);localStorage.setItem("favorite",e)}),[se]);(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.bG)();case 3:a=e.sent,d(a),w(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){if(ee){var e=(0,s.Z)(V);if(A||E||G&&J){var a=G.replace(/,/g,""),n=J.replace(/,/g,""),t=e.filter((function(e){var t=!A||e.make===A.value,s=!E||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(E.value),r=!G&&!J||e.mileage>=a&&e.mileage<=n;return t&&s&&r}));d(t),H(""),U(""),R(""),W("")}ae(!1)}}),[ee,G,J,A,E,V]);return(0,k.jsxs)("main",{className:x,children:[(0,k.jsx)("section",{children:(0,k.jsxs)("form",{className:g,onSubmit:function(e){e.preventDefault();var a=function(){var e=(0,t.Z)(i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.nv)();case 3:a=e.sent,X(a),ae(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();a()},children:[(0,k.jsxs)("label",{className:_,children:["Car brand",(0,k.jsx)(c.ZP,{styles:v,placeholder:"Enter the text",options:m,value:A,onChange:function(e){R(e)}})]}),(0,k.jsxs)("label",{className:_,children:["Price/ 1 hour",(0,k.jsx)(c.ZP,{styles:f,placeholder:"To $",options:p,value:E,onChange:function(e){W(e)}})]}),(0,k.jsxs)("label",{className:_,children:["\u0421ar mileage / km",(0,k.jsx)("label",{className:j,children:"From"}),(0,k.jsx)("input",{className:b,type:"text",name:"from",value:G,onChange:function(e){var a=e.target.value.replace(/,/g,"");isNaN(a)||H(parseInt(a,10).toLocaleString("en-US"))}})]}),(0,k.jsxs)("label",{className:_,children:[".",(0,k.jsx)("label",{className:N,children:"To"}),(0,k.jsx)("input",{className:C,type:"text",name:"to",value:J,onChange:function(e){var a=e.target.value.replace(/,/g,"");isNaN(a)||U(parseInt(a,10).toLocaleString("en-US"))}})]}),(0,k.jsxs)("label",{className:_,children:[".",(0,k.jsx)("button",{className:M,children:"Search"})]})]})}),(0,k.jsxs)("section",{className:y,children:[(0,k.jsx)(h.Z,{cars:l,favorite:se,handleFavoriteCar:function(e){if(0!==se.length){var a=se.find((function(a){return a.id===e}));if(a){var n=se.indexOf(a),t=(0,s.Z)(se);t.splice(n,1),re(t)}else{var r=l.find((function(a){return a.id===e}));re((function(e){return[].concat((0,s.Z)(e),[r])}))}}else{var i=l.find((function(a){return a.id===e}));re((function(e){return[].concat((0,s.Z)(e),[i])}))}}}),l.length>=8&&l.length<25&&(0,k.jsx)("button",{className:S,type:"button",onClick:function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.SD)(T);case 3:a=e.sent,d((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(a))})),w((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})]})}}}]);
//# sourceMappingURL=563.edb682df.chunk.js.map