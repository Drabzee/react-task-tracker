(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],[,,,,function(e,t,n){e.exports={task:"Task_task__1IAtP",info:"Task_info__2rAd_",datetime:"Task_datetime__1xUeX"}},,function(e,t,n){e.exports={formGroup:"Form_formGroup__1iZnP",inlineGroup:"Form_inlineGroup__3t7i7"}},,,,function(e,t,n){e.exports={btn:"Button_btn__3xaJM"}},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),s=(n(17),n(7)),o=n(12),d=n(2),l=n(6),j=n.n(l),u=n(10),b=n.n(u),m=n(0),f=function(e){var t=e.children,n=e.bgColor,a=e.width,r=e.onClick;return Object(m.jsx)("button",{onClick:r,style:{backgroundColor:n,width:a},className:"".concat(b.a.btn),children:t})},O=function(e){var t=e.addTask,n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(d.a)(s,2),l=o[0],u=o[1],b=Object(a.useState)(!1),O=Object(d.a)(b,2),h=O[0],x=O[1];return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c?l?(t({name:c,datetime:l,reminder:h}),e.target.reset(),i(""),u(""),x(!1)):alert("Date and Time filed is mandatory"):alert("Task field is mandatory")},children:[Object(m.jsxs)("div",{className:j.a.formGroup,children:[Object(m.jsx)("label",{children:"Task"}),Object(m.jsx)("input",{onChange:function(e){return i(e.target.value)},value:c,type:"text",name:"name",placeholder:"Add Task"})]}),Object(m.jsxs)("div",{className:j.a.formGroup,children:[Object(m.jsx)("label",{children:"Date and Time"}),Object(m.jsx)("input",{onChange:function(e){return u(e.target.value)},value:l,type:"datetime-local",name:"datetime"})]}),Object(m.jsxs)("div",{className:j.a.inlineGroup,children:[Object(m.jsx)("p",{children:"Set Reminder"}),Object(m.jsx)("input",{onChange:function(e){return x(e.target.checked)},checked:h,type:"checkbox",name:"reminder"})]}),Object(m.jsx)(f,{bgColor:"black",width:"100%",className:"btnFull",children:"Save Task"})]})},h=(n(19),function(e){var t=e.toggleForm,n=e.isFormVisible;return Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"Task Tracker"}),Object(m.jsx)(f,{bgColor:n?"red":"green",onClick:t,children:n?"Close":"Add"})]})}),x=n(4),k=n.n(x),g=n(11),p=function(e){var t=e.name,n=e.datetime,a=e.reminder,r=e.toggleReminder,c=e.deleteTask;return Object(m.jsxs)("div",{onDoubleClick:r,style:{borderLeftWidth:a?4:0},className:k.a.task,children:[Object(m.jsxs)("div",{className:k.a.info,children:[Object(m.jsx)("p",{className:k.a.name,children:t}),Object(m.jsx)("p",{className:k.a.datetime,children:n.replace("T"," at ")})]}),Object(m.jsx)(g.a,{onClick:c,color:"red"})]})},v=function(e){var t=e.tasks,n=e.toggleReminder,a=e.deleteTask;return Object(m.jsx)("div",{children:t.length?t.map((function(e){return Object(m.jsx)(p,{deleteTask:function(){return a(e.id)},toggleReminder:function(){return n(e.id)},name:e.name,datetime:e.datetime,reminder:e.reminder},e.id)})):Object(m.jsx)("p",{style:{textAlign:"center",color:"gray",fontSize:".8rem",fontStyle:"italic",marginTop:30},children:"No tasks to display"})})},T=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(d.a)(c,2),l=i[0],j=i[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h,{isFormVisible:l,toggleForm:function(){j(!l)}}),l&&Object(m.jsx)(O,{addTask:function(e){r([].concat(Object(o.a)(n),[Object(s.a)({id:Math.floor(1e3*Math.random()+1)},e)]))}}),Object(m.jsx)(v,{deleteTask:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)},toggleReminder:function(e){r(n.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))},tasks:n})]})};var _=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(T,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root")),C()}],[[20,1,2]]]);
//# sourceMappingURL=main.0e1e9d3e.chunk.js.map