(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(0),c=e.n(a),o=e(2),u=e.n(o),r=e(3),i=e(4),s=e(6),d=e(5),l=(e(12),e(13),function(t){var n=t.count,e=t.add100,a=t.addOne,o=t.increase;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Count: ".concat(n)),c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{className:"button button--one",type:"button",onClick:a},"add one"),c.a.createElement("button",{type:"button",onClick:e,className:"button button--hundred"},"add 100"),c.a.createElement("button",{type:"button",onClick:o,className:"button button--increase"},"increase")))}),b=function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement(l,{count:this.state.count,add100:this.add100,addOne:this.addOne,increase:this.increase})}}]),e}(c.a.Component);u.a.render(c.a.createElement(b,null),document.getElementById("root"))},7:function(t,n,e){t.exports=e(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c6637d1c.chunk.js.map