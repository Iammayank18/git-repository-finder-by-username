(this["webpackJsonpgit-repo-fetch"]=this["webpackJsonpgit-repo-fetch"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(5),s=n.n(r),a=(n(11),n(12),n(3)),i=n.n(a),j=n(6),o=n(4),l=(n(14),n(0)),u=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(o.a)(s,2),u=a[0],h=a[1],b=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://api.github.com/users/".concat(n,"/repos")).then((function(e){return e.json()})).then((function(e){console.log(e.map((function(e){return e.git_url}))),console.log(e),h(e.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("tr",{className:"text-light",children:Object(l.jsx)("a",{className:"",rel:"noreferrer",href:e.html_url,target:"_blank",children:e.full_name})})})})))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"containers",children:Object(l.jsxs)("div",{className:" mt-4 box",id:"main-box",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form-main justify-content-center",action:"",onSubmit:b,children:[Object(l.jsx)("input",{type:"text",name:"username",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Github username"}),Object(l.jsx)("button",{className:"button-main",type:"submit",children:Object(l.jsx)("i",{className:"fa fa-search search-icon"})})]})}),Object(l.jsx)("div",{className:"data_body",children:Object(l.jsxs)("table",{class:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:Object(l.jsx)("th",{scope:"col",className:"text-light",children:"Repository"})})}),Object(l.jsx)("tbody",{children:u})]})})]})})})},h=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"bg-dark text-light p-3",children:Object(l.jsx)("h1",{children:"GitHub Repository Fetcher"})})})},b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:["Made By ",Object(l.jsx)("i",{class:"fa fa-github","aria-hidden":"true"}),Object(l.jsx)("a",{href:"https://github.com/Iammayank18",children:"Mayank"})]})})})};var d=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};s.a.render(Object(l.jsx)(d,{}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.b8aaa9b4.chunk.js.map