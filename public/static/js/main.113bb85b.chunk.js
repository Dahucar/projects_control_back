(this["webpackJsonpfrontend-cadem"]=this["webpackJsonpfrontend-cadem"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(11),r=c.n(a),s=c(3),o=c(4),i=c.n(o),j=c(2),l=c(9),d=c(8),u=c(0),b=function(){return Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Desafio Cadem"})})})},m=function(){return Object(u.jsx)("div",{className:"spinner-content",children:Object(u.jsx)("div",{className:"hijo spinner-grow text-primary",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},p=function(e){var t=e.typeAlert,c=e.msg;return Object(u.jsx)("div",{className:"alert ".concat(t),role:"alert",children:c})},O="http://localhost:4350/api/",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=""!=e?"".concat(O,"/").concat(e):"".concat(O);return"GET"==c?fetch(n,{method:c}):fetch(n,{method:c,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},h={loading:!0,msg:"",projectName:"",projectList:[]},f=c(7),x=Object(n.createContext)(null),g=function(){var e=Object(n.useContext)(x),t=e.projectState,c=e.setProjectState,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(s.a)(t,2),a=c[0],r=c[1];return[a,function(e){var t=e.target;r(Object(j.a)(Object(j.a)({},a),{},Object(f.a)({},t.name,t.value)))},function(){r(e)}]}({nameP:"",dateP:""}),r=Object(s.a)(a,3),o=r[0],b=r[1],m=r[2],p=o.nameP,O=o.dateP,g=function(){var e=Object(d.a)(i.a.mark((function e(t){var n,a,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,e.next=5,n.json();case 5:500!=(a=e.sent).code&&200==a.code?(r=a.information,s=r.proyecto,o=r.subproyecto,c({loading:!1,msg:"",projectName:s,projectList:Object(l.a)(o)})):c(Object(j.a)(Object(j.a)({},h),{},{loading:!1,msg:a.msg}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=t.loading;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=null;t=""==p&&""==O?"":"project/".concat(""==p?"empty":p,"/").concat(""==O?"empty":O),g(t),m()},className:"mt-1 d-flex",children:[Object(u.jsx)("input",{type:"search",className:"form-control me-2",placeholder:"Enter your name project",name:"nameP",value:p,onChange:b,disabled:y}),Object(u.jsx)("input",{type:"date",className:"form-control me-2",name:"dateP",value:O,onChange:b,disabled:y}),Object(u.jsx)("button",{className:"btn btn-success",type:"submit",disabled:y,children:"Search"})]})},y=function(e){var t=e.styleDate,c=e.subproyecto;return Object(u.jsx)("div",{className:"project-item badge rounded-pill",style:t,children:Object(u.jsx)("h4",{children:c})})},N=(c(18),function(){var e=Object(n.useContext)(x).projectState.projectList,t=[],c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0!=t?{background:"yellow"}:1==e?{background:"green"}:0==e?{background:"red"}:void 0};return Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)("div",{className:"timeline-content",children:e.map((function(e,n){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e.timestamp.split(" ",1),r=t.includes(a[0]),s=null;return 0==r?(t.push(a[0]),s=c(e.estatus)):s=c(e.estatus,2),Object(u.jsx)(y,{subproyecto:e.subproyecto,styleDate:s},n)}(e,n)}))})})})})}),S=function(e){var t=e.subproyecto;return Object(u.jsx)("div",{className:"subproject",children:t})},w=function(){var e=Object(n.useContext)(x).projectState,t=e.projectName,c=e.projectList;return Object(u.jsxs)("div",{className:"content-project mb-2",children:[Object(u.jsx)("div",{className:"project",children:t}),c.map((function(e,t){return Object(u.jsx)(S,{subproyecto:e.subproyecto},t)}))]})},P=function(){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-4",children:Object(u.jsx)(w,{})}),Object(u.jsx)("div",{className:"col-8",children:Object(u.jsx)(N,{})})]})},k=function(){var e=Object(n.useContext)(x),t=e.projectState,c=e.setProjectState,a=function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.next=5,t.json();case 5:500!=(n=e.sent).code&&200==n.code?(a=n.information,r=a.proyecto,s=a.subproyecto,c({loading:!1,msg:"",projectName:r,projectList:Object(l.a)(s)})):c(Object(j.a)(Object(j.a)({},h),{},{loading:!1,msg:n.msg}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){a()}),[]);var r=t.loading,s=t.msg;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("section",{className:"container-fluid",children:[Object(u.jsx)(g,{}),Object(u.jsx)("div",{className:"card mt-1",children:Object(u.jsxs)("div",{className:"card-body",children:[""!=s&&Object(u.jsx)(p,{typeAlert:"alert-danger",msg:s}),r||""!=s?Object(u.jsx)(m,{}):Object(u.jsx)(P,{})]})})]})]})},C=function(){var e=Object(n.useState)(h),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(u.jsx)(x.Provider,{value:{projectState:c,setProjectState:a},children:Object(u.jsx)(k,{})})};c(19);r.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.113bb85b.chunk.js.map