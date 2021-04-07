(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{21:function(n,t,e){},22:function(n,t,e){},23:function(n,t,e){},27:function(n,t,e){},28:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var o=e(0),i=e(4),c=e.n(i),r=(e(21),e(6)),s=e(7),a=e(11),l=e(10),u=e(15),d=(e(22),e(30)),h=(e(23),e(1)),f={enter:400,exit:1e3},m=function(n){return Object(h.jsx)(d.a,{mountOnEnter:!0,unmountOnExit:!0,in:n.show,timeout:f,classNames:{enter:"",enterActive:"ModalOpen",exit:"",exitActive:"ModalClosed"},children:Object(h.jsxs)("div",{className:"Modal",children:[Object(h.jsx)("h1",{children:"A Modal"}),Object(h.jsx)("button",{className:"Button",onClick:n.closed,children:"Dismiss"})]})})},j=(e(27),function(n){var t=["Backdrop",n.show?"BackdropOpen":"BackdropClose"];return Object(h.jsx)("div",{className:t.join(" ")})}),O=e(31),b=(e(28),function(n){Object(a.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(r.a)(this,e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={items:[1,2,3]},n.addItemHandler=function(){n.setState((function(n){return{items:n.items.concat(n.items.length+1)}}))},n.removeItemHandler=function(t){n.setState((function(n){return{items:n.items.filter((function(n,e){return e!==t}))}}))},n}return Object(s.a)(e,[{key:"render",value:function(){var n=this,t=this.state.items.map((function(t,e){return Object(h.jsx)(d.a,{classNames:"fade",timeout:300,children:Object(h.jsx)("li",{className:"ListItem",onClick:function(){return n.removeItemHandler(e)},children:t})},e)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"Button",onClick:this.addItemHandler,children:"Add Item"}),Object(h.jsx)("p",{children:"Click Item to Remove."}),Object(h.jsx)(O.a,{component:"ul",className:"List",children:t})]})}}]),e}(o.Component)),g=function(n){Object(a.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(r.a)(this,e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={modalIsOpen:!1,showBlock:!1},n.showModal=function(){n.setState({modalIsOpen:!0})},n.closeModal=function(){n.setState({modalIsOpen:!1})},n}return Object(s.a)(e,[{key:"render",value:function(){var n=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React Animations"}),Object(h.jsx)("button",{className:"Button",onClick:function(){return n.setState((function(n){return{showBlock:!n.showBlock}}))},children:"Toggle"}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{in:this.state.showBlock,timeout:300,mountOnEnter:!0,unmountOnExit:!0,onEnter:function(){return console.log("onEnter")},onEntering:function(){return console.log("onEntering")},onEntered:function(){return console.log("onEntered")},onExit:function(){return console.log("onExit")},onExiting:function(){return console.log("onExiting")},onExited:function(){return console.log("onExited")},children:function(n){return Object(h.jsx)("div",{style:{backgroundColor:"red",width:100,height:100,margin:"auto",transition:"opacity 1s ease-out",opacity:"exiting"===n?0:1}})}}),Object(h.jsx)(m,{show:this.state.modalIsOpen,closed:this.closeModal}),this.state.modalIsOpen?Object(h.jsx)(j,{show:!0}):null,Object(h.jsx)("button",{className:"Button",onClick:this.showModal,children:"Open Modal"}),Object(h.jsx)("h3",{children:"Animating Lists"}),Object(h.jsx)(b,{})]})}}]),e}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}c.a.render(Object(h.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react_animations",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react_animations","/service-worker.js");p?function(n){fetch(n).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):v(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n):v(n)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.36f41c0b.chunk.js.map