(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=(n(21),n(15)),s=n(1),u=n.n(s),l=n(8),p=n(4),d=n(2),m=n(7),f=n.n(m);n(26);f.a.initializeApp({apiKey:"AIzaSyBEJ_KrRmNT-hCpJXd6iui1QLNHLnuXfHw",authDomain:"todos-7f286.firebaseapp.com",databaseURL:"https://todos-7f286.firebaseio.com",projectId:"todos-7f286",storageBucket:"todos-7f286.appspot.com",messagingSenderId:"358642450370",appId:"1:358642450370:web:c6254fdd458b84599b605b",measurementId:"G-VF3HQ4V29C"});var b=function(){var e=r.a.useState([]),t=Object(d.a)(e,2),n=t[0],o=t[1],c=r.a.useState(""),s=Object(d.a)(c,2),m=s[0],b=s[1],v=r.a.useState(!1),h=Object(d.a)(v,2),E=h[0],g=h[1],y=r.a.useState(""),x=Object(d.a)(y,2),j=x[0],k=x[1],O=r.a.useState(""),w=Object(d.a)(O,2),N=w[0],S=w[1],C=r.a.useState(""),A=Object(d.a)(C,2),I=A[0],D=A[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.a.firestore(),e.prev=1,e.next=4,t.collection("todos").get();case 4:n=e.sent,a=n.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})),console.log(a),o(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var J=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m.trim()){e.next=4;break}return console.log("sin texto"),e.abrupt("return");case 4:return e.prev=4,a=f.a.firestore(),e.next=8,a.collection("todos").add({name:m,description:N,prioity:I});case 8:r=e.sent,c={name:m,description:N,prioity:I},o([].concat(Object(i.a)(n),[Object(l.a)({id:r.id},c)])),b(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=f.a.firestore(),e.next=4,a.collection("todos").doc(t).delete();case 4:r=n.filter((function(e){return e.id!==t})),o(r),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("se ejecuto el editar"),m.trim()){e.next=5;break}return console.log("sin texto"),e.abrupt("return");case 5:return e.prev=5,a=f.a.firestore(),e.next=9,a.collection("todos").doc(j).update({name:m,description:N,prioity:I});case 9:r=n.map((function(e){return e.id===j?{id:e.id,name:m,description:N,prioity:I}:e})),o(r),b(""),k(""),g(!1),S(""),D(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:E?H:J},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Add todo",className:"form-control mb-2",value:m,onChange:function(e){return b(e.target.value)},name:"todo"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Add description",className:"form-control mb-2",value:N,onChange:function(e){return S(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Add priority",className:"form-control mb-2",value:I,onChange:function(e){return D(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-sm   btn-primary"},E?"Edit":"Add")),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group"},n.map((function(e){return console.log(e),r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("h3",null,e.name),r.a.createElement("span",null,e.description),r.a.createElement("p",null,e.prioity),r.a.createElement("button",{className:"btn btn-sm   btn-primary   float-right",onClick:function(){B(e.id)}},"Delete"),r.a.createElement("button",{className:"btn btn-sm  btn-primary float-right  mr-2",onClick:function(){b(e.name),k(e.id),g(e.id)}},"Edit"))}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cff5dc83.chunk.js.map