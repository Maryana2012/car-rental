"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[652],{1652:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(3433),r=t(5861),l=t(9439),u=t(4687),c=t.n(u),o=t(2791),s=t(527),i=t(1243),v="https://648ce1bb8620b8bae7ed79fb.mockapi.io/advert/",p=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(v,"?page=1&limit=").concat(8));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(v,"?page=").concat(n,"&limit=").concat(8));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(v));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(v,"/").concat(n));case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),h=t(2134),x=t(7948),m=t.n(x),g=t(184),Z=document.getElementById("root");m().setAppElement(Z);var k=function(e){var n=e.cars,t=e.onHandleFavoriteCar;return(0,g.jsx)("ul",{children:n.map((function(e){return(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:e.img,alt:"car"}),(0,g.jsx)("button",{type:"button",onClick:function(){return n=e.id,void t(n);var n},children:(0,g.jsx)(h.lo,{})}),(0,g.jsx)("span",{children:e.make}),(0,g.jsx)("span",{children:e.model}),(0,g.jsx)("span",{children:e.year}),(0,g.jsx)("span",{children:e.rentalPrice}),(0,g.jsx)("span",{children:e.address}),(0,g.jsx)("span",{children:e.rentalCompany}),(0,g.jsx)("span",{children:e.type}),(0,g.jsx)("span",{children:e.mileage}),(0,g.jsx)("span",{children:e.accessories[0]}),(0,g.jsx)("button",{type:"button",onClick:function(){return function(e){var n=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(n);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();n(e)}(e.id)},children:"Learn More"})]},e.id)}))})},j=[{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"Subaru",label:"Subaru"},{value:"Hummer",label:"Hummer"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"Mini",label:"Mini"},{value:"Bentley",label:"Bentley"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land Rover",label:"Land Rover"}],y=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"},{value:70,label:"70"},{value:80,label:"80"},{value:90,label:"90"},{value:100,label:"100"},{value:110,label:"110"},{value:120,label:"120"},{value:130,label:"130"},{value:140,label:"140"},{value:150,label:"150"}],w=function(){var e,n=(0,o.useState)([]),t=(0,l.Z)(n,2),u=t[0],i=t[1],v=(0,o.useState)(1),d=(0,l.Z)(v,2),h=d[0],x=d[1],m=(0,o.useState)(null!==(e=JSON.parse(window.localStorage.getItem("favorite")))&&void 0!==e?e:[]),Z=(0,l.Z)(m,2),w=Z[0],C=Z[1],S=(0,o.useState)(""),M=(0,l.Z)(S,2),B=M[0],L=M[1],E=(0,o.useState)(""),H=(0,l.Z)(E,2),N=H[0],P=H[1],A=(0,o.useState)(""),_=(0,l.Z)(A,2),F=_[0],I=_[1],O=(0,o.useState)(""),z=(0,l.Z)(O,2),G=z[0],J=z[1],K=(0,o.useState)(""),R=(0,l.Z)(K,2),V=R[0],W=R[1],D=(0,o.useState)(!1),T=(0,l.Z)(D,2),$=T[0],q=T[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:n=e.sent,i(n),x(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){var e=JSON.stringify(w);localStorage.setItem("favorite",e)}),[w]),(0,o.useEffect)((function(){if($){var e=(0,a.Z)(V);if(B||N||F&&G){var n=e.filter((function(e){var n=!B||e.make===B,t=!N||Number(e.rentalPrice.replace(/[^0-9.-]+/g,""))<=Number(N),a=!F&&!G||e.mileage>=F&&e.mileage<=G;return n&&t&&a}));i(n)}q(!1)}}),[$,F,G,B,N,V]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:n=e.sent,W(n),q(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n()},children:[(0,g.jsx)(s.ZP,{placeholder:"Enter the text",options:j,onChange:function(e){L(e.value)}}),(0,g.jsx)(s.ZP,{placeholder:"To $",options:y,onChange:function(e){P(e.value)}}),(0,g.jsx)("input",{type:"text",name:"from",placeholder:"from",onChange:function(e){I(e.target.value)}}),(0,g.jsx)("input",{type:"text",name:"to",placeholder:"to",onChange:function(e){J(e.target.value)}}),(0,g.jsx)("button",{children:"Search"})]}),(0,g.jsx)(k,{cars:u,onHandleFavoriteCar:function(e){if(0!==w.length){var n=w.find((function(n){return n.id===e}));if(n){var t=w.indexOf(n),r=(0,a.Z)(w);r.splice(t,1),C(r)}else{var l=u.find((function(n){return n.id===e}));C((function(e){return[].concat((0,a.Z)(e),[l])}))}}else{var c=u.find((function(n){return n.id===e}));C((function(e){return[].concat((0,a.Z)(e),[c])}))}}}),(0,g.jsx)("button",{type:"button",onClick:function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(h);case 3:n=e.sent,i((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(n))})),x((function(e){return e+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()},children:"Load More"})]})}}}]);
//# sourceMappingURL=652.0e90c532.chunk.js.map