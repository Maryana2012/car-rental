"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[652],{652:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(433),r=t(861),l=t(439),u=t(687),c=t.n(u),o=t(791),i=t(527),s=t(243),v="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",p=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(v,"?page=1&limit=").concat(8));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(v,"?page=").concat(n,"&limit=").concat(8));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(v));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=t(134),h=t(184),x=function(e){var n=e.cars,t=e.onHandleFavoriteCar;return(0,h.jsx)("ul",{children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:e.img,alt:"car"}),(0,h.jsx)("button",{type:"button",onClick:function(){return n=e.id,void t(n);var n},children:(0,h.jsx)(d.lo,{})}),(0,h.jsx)("span",{children:e.make}),(0,h.jsx)("span",{children:e.model}),(0,h.jsx)("span",{children:e.year}),(0,h.jsx)("span",{children:e.rentalPrice}),(0,h.jsx)("span",{children:e.address}),(0,h.jsx)("span",{children:e.rentalCompany}),(0,h.jsx)("span",{children:e.type}),(0,h.jsx)("span",{children:e.mileage}),(0,h.jsx)("span",{children:e.accessories[0]}),(0,h.jsx)("button",{type:"button",children:"Learn More"})]},e.id)}))})},m=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],g=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],Z=function(){var e,n=(0,o.useState)([]),t=(0,l.Z)(n,2),u=t[0],s=t[1],v=(0,o.useState)(1),d=(0,l.Z)(v,2),Z=d[0],j=d[1],k=(0,o.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),y=(0,l.Z)(k,2),w=y[0],C=y[1],S=(0,o.useState)(""),M=(0,l.Z)(S,2),B=M[0],L=M[1],H=(0,o.useState)(""),N=(0,l.Z)(H,2),P=N[0],A=N[1],E=(0,o.useState)(""),_=(0,l.Z)(E,2),F=_[0],O=_[1],z=(0,o.useState)(""),G=(0,l.Z)(z,2),I=G[0],J=G[1],K=(0,o.useState)(""),R=(0,l.Z)(K,2),V=R[0],W=R[1],D=(0,o.useState)(!1),T=(0,l.Z)(D,2),$=T[0],q=T[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:n=e.sent,s(n),j(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){var e=JSON.stringify(w);localStorage.setItem("favorite",e)}),[w]),(0,o.useEffect)((function(){if($){var e=(0,a.Z)(V);if(B||P||F&&I){var n=e.filter((function(e){var n=!B||e.make===B,t=!P||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(P),a=!F&&!I||e.mileage>=F&&e.mileage<=I;return n&&t&&a}));s(n)}q(!1)}}),[$,F,I,B,P,V]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:n=e.sent,W(n),q(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n()},children:[(0,h.jsx)(i.ZP,{placeholder:"Enter the text",options:m,onChange:function(e){L(e.value)}}),(0,h.jsx)(i.ZP,{placeholder:"To $",options:g,onChange:function(e){A(e.value)}}),(0,h.jsx)("input",{type:"text",name:"from",placeholder:"from",onChange:function(e){O(e.target.value)}}),(0,h.jsx)("input",{type:"text",name:"to",placeholder:"to",onChange:function(e){J(e.target.value)}}),(0,h.jsx)("button",{children:"Search"})]}),(0,h.jsx)(x,{cars:u,onHandleFavoriteCar:function(e){if(0!==w.length){var n=w.find((function(n){return n.id===e}));if(n){var t=w.indexOf(n),r=(0,a.Z)(w);r.splice(t,1),C(r)}else{var l=u.find((function(n){return n.id===e}));C((function(e){return[].concat((0,a.Z)(e),[l])}))}}else{var c=u.find((function(n){return n.id===e}));C((function(e){return[].concat((0,a.Z)(e),[c])}))}}}),(0,h.jsx)("button",{type:"button",onClick:function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(Z);case 3:n=e.sent,s((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(n))})),j((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})}}}]);
//# sourceMappingURL=652.a9386414.chunk.js.map