"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{3120:function(t,e,a){a.d(e,{SD:function(){return o},bG:function(){return l},nv:function(){return d}});var s=a(5861),n=a(4687),r=a.n(n),i=a(1243),c="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",l=function(){var t=(0,s.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(c,"?page=1&limit=").concat(8));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,s.Z)(r().mark((function t(e){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(c,"?page=").concat(e,"&limit=").concat(8));case 3:return a=t.sent,t.abrupt("return",a.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,s.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(c));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},7620:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=a(5861),n=a(3433),r=a(9439),i=a(4687),c=a.n(i),l=a(2791),o=a(7948),d=a.n(o),u=a(2134),m=a(3120),x=a(817),p=a(184),C=document.getElementById("root");d().setAppElement(C);var _=function(){var t,e=(0,l.useState)(""),a=(0,r.Z)(e,2),i=a[0],o=a[1],C=(0,l.useState)(!1),_=(0,r.Z)(C,2),h=_[0],f=_[1],v=(0,l.useState)(null!==(t=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==t?t:[]),Z=(0,r.Z)(v,2),j=Z[0],N=Z[1];(0,l.useEffect)((function(){var t=JSON.stringify(j);localStorage.setItem("favorite",t)}),[j]);var g,b=function(t){if(0!==j.length){var e=j.find((function(e){return e.id===t}));if(e){var a=j.indexOf(e),s=(0,n.Z)(j);s.splice(a,1),N(s)}else{var r=j.find((function(e){return e.id===t}));N((function(t){return[].concat((0,n.Z)(t),[r])}))}}else{var i=j.find((function(e){return e.id===t}));N((function(t){return[].concat((0,n.Z)(t),[i])}))}},L=function(){f(!1),o("")},k=function(t){var e=t.split(",");return e.length>=2?e[1]:""},S=function(t){var e=t.split(",");return e.length>=2?e[2]:""};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("ul",{className:x.Z.listFavorite,children:j.map((function(t){return(0,p.jsxs)("li",{className:x.Z.card,children:[(0,p.jsx)("img",{className:x.Z.image,src:t.img,alt:"car"}),(0,p.jsxs)("button",{className:x.Z.buttonFavorite,type:"button",onClick:function(){return b(t.id)},children:["(",(0,p.jsx)(u.M_L,{className:x.Z.heart,style:{color:"blue"}}),"): }"]}),(0,p.jsxs)("div",{className:x.Z.textContainerFirst,children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{className:x.Z.textSubtitle,children:[t.make,", "]}),(0,p.jsx)("span",{className:x.Z.textSubtitle,children:t.year})]}),(0,p.jsx)("span",{className:x.Z.textSubtitle,children:t.rentalPrice})]}),(0,p.jsxs)("div",{className:x.Z.textContainerSecond,children:[(0,p.jsx)("span",{className:x.Z.text,children:k(t.address)}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsx)("span",{className:x.Z.text,children:S(t.address)}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsx)("span",{className:x.Z.text,children:t.rentalCompany})]}),(0,p.jsxs)("div",{className:x.Z.textContainerThird,children:[(0,p.jsx)("span",{className:x.Z.text,children:t.type}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsx)("span",{className:x.Z.text,children:t.model}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsx)("span",{className:x.Z.text,children:t.mileage}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsx)("span",{className:x.Z.text,children:t.accessories[0]})]}),(0,p.jsx)("button",{className:x.Z.buttonLearnMore,type:"button",onClick:function(){return function(t){f(!0);var e=function(){var e=(0,s.Z)(c().mark((function e(){var a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.nv)();case 3:a=e.sent,s=a.find((function(e){return e.id===t})),o(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}(t.id)},children:"Learn More"})]},t.id)}))}),(0,p.jsx)(d(),{style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:10},content:{position:"relative",display:"flex",flexDirection:"column",width:541,height:752,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",marginTop:40,padding:0,paddingTop:40,paddingBottom:40,paddingLeft:40,paddingRight:40,transform:"translate(-50%, -50%)",borderRadius:24,background:"#FFF"}},isOpen:h,onRequestClose:L,children:i&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{className:x.Z.imageModal,src:i.img,alt:"car"}),(0,p.jsx)("button",{className:x.Z.buttonClose,type:"button",onClick:L,children:(0,p.jsx)(u.oHP,{})}),(0,p.jsxs)("div",{className:x.Z.modalSubtitleContainer,children:[(0,p.jsx)("span",{className:x.Z.modalSubtitleText,children:i.make}),(0,p.jsxs)("span",{className:x.Z.modalSubtitleTextModel,children:[i.model,","]}),(0,p.jsx)("span",{className:x.Z.modalSubtitleText,children:i.year})]}),(0,p.jsxs)("div",{className:x.Z.modalContainerFirst,children:[(0,p.jsx)("span",{className:x.Z.modalTextFirst,children:k(i.address)}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsx)("span",{className:x.Z.modalTextFirst,children:S(i.address)}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsxs)("span",{className:x.Z.modalTextFirst,children:["Id:",i.id]}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsxs)("span",{className:x.Z.modalTextFirst,children:["Year:",i.year]}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsxs)("span",{className:x.Z.modalTextFirst,children:["Type:",i.suv]})]}),(0,p.jsxs)("div",{className:x.Z.modalContainerFirst,children:[(0,p.jsxs)("span",{className:x.Z.modalTextFirst,children:["Fuel Consumption: ",i.fuelConsumption]}),(0,p.jsx)("div",{className:x.Z.stick}),(0,p.jsxs)("span",{className:x.Z.modalTextFirst,children:["Engine Size: ",i.engineSize," "]}),(0,p.jsx)("div",{className:x.Z.stick})]}),(0,p.jsx)("p",{className:x.Z.modalDescription,children:i.description}),(0,p.jsx)("p",{className:x.Z.modalAccessoriesTitle,children:"Accessories and functionalities:"}),(0,p.jsx)("div",{className:x.Z.modalAccessory,children:i.accessories.map((function(t){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:x.Z.modalTextFirst,children:t},t),(0,p.jsx)("div",{className:x.Z.stick})]})}))}),(0,p.jsx)("p",{className:x.Z.modalAccessoriesTitle,children:"Rental Conditions: "}),(0,p.jsx)("p",{children:(g=i.rentalConditions,g.split("\n")).map((function(t){return(0,p.jsx)("span",{className:x.Z.modalConditionsItem,children:t},t)}))}),(0,p.jsx)("a",{href:"tel: +380730000000",className:x.Z.buttonRentalCar,children:"Rental car"})]})})]})},h="FavoritePage_container__uiEWf",f=function(){var t=localStorage.getItem("favorite"),e=JSON.parse(t);return(0,p.jsx)("main",{className:h,children:(0,p.jsx)(_,{favorite:e})})}},817:function(t,e){e.Z={list:"CarCardList_list__5r8Au",listFavorite:"CarCardList_listFavorite__nfVz-",card:"CarCardList_card__SQwyM",image:"CarCardList_image__igttp",buttonFavorite:"CarCardList_buttonFavorite__DbXhO",heart:"CarCardList_heart__Qtm39",textSubtitle:"CarCardList_textSubtitle__T5D75",textContainerFirst:"CarCardList_textContainerFirst__2992T",text:"CarCardList_text__ZYcNf",stick:"CarCardList_stick__XURuz",textContainerSecond:"CarCardList_textContainerSecond__4lSXH",textContainerThird:"CarCardList_textContainerThird__Sr-i7",buttonLearnMore:"CarCardList_buttonLearnMore__9Kwja",imageModal:"CarCardList_imageModal__iLpDW",buttonClose:"CarCardList_buttonClose__dULBf",modalSubtitleContainer:"CarCardList_modalSubtitleContainer__5BCWk",modalSubtitleText:"CarCardList_modalSubtitleText__KAL5n",modalSubtitleTextModel:"CarCardList_modalSubtitleTextModel__E41Gc",modalContainerFirst:"CarCardList_modalContainerFirst__O91ra",modalTextFirst:"CarCardList_modalTextFirst__4asqY",modalDescription:"CarCardList_modalDescription__JJUDr",modalAccessoriesTitle:"CarCardList_modalAccessoriesTitle__Ao68X",modalAccessory:"CarCardList_modalAccessory__lej1p",rentalConditions:"CarCardList_rentalConditions__Bcs6G",modalConditionsItem:"CarCardList_modalConditionsItem__ljG13",buttonRentalCar:"CarCardList_buttonRentalCar__rDvBQ"}}}]);
//# sourceMappingURL=620.ac961fd1.chunk.js.map