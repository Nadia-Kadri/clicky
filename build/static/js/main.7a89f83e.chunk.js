(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),r=a.n(i),o=(a(7),a(1)),l=a(2),s=a(4),m=a(3),p=a(5);var u={color:"#fff",textAlign:"center",padding:"10px",margin:"10px"},g=function(){return c.a.createElement("div",null,c.a.createElement("h5",{style:u},"Click on an image to earn points, but be careful not to click on any more than once!"))},h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{style:d},"Clicky Game"),c.a.createElement("div",{style:k},this.props.header),c.a.createElement("div",{style:f},c.a.createElement("span",{className:"currentScore"},"Current Score: ",this.props.score," | "),c.a.createElement("span",{className:"topScore"},"Top Score: ",this.props.topScore)))}}]),t}(n.Component),d={float:"left",width:"33.33%",fontSize:"20px"},k={float:"left",width:"33.33%",textAlign:"center",fontSize:"15px"},f={float:"left",width:"33.33%",textAlign:"right",fontSize:"20px"},b=h,j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.animal,t=e.id,a=e.name,n=e.imageURL;return console.log("".concat(t,"   ").concat(a,"   ").concat(this.props.animal.click)),c.a.createElement("span",null,c.a.createElement("img",{src:n,alt:a,className:"img-responsive",height:"25%",width:"25%",onClick:this.props.onClick.bind(this,t)}))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log("----------------------"),S(this.props.animals).map((function(t){return c.a.createElement(j,{onClick:e.props.onClick,key:t.id,animal:t})}))}}]),t}(n.Component),S=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},v=y,O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,topScore:0,header:"Click on an image to begin!",animals:[{id:1,name:"deer",imageURL:"images/deer.jpg",click:!1},{id:2,name:"elephant",imageURL:"images/elephant.jpg",click:!1},{id:3,name:"lion",imageURL:"images/lion.jpg",click:!1},{id:4,name:"turtle",imageURL:"images/turtle.jpg",click:!1},{id:5,name:"arcticfox",imageURL:"images/arcticfox.jpg",click:!1},{id:6,name:"bunny",imageURL:"images/bunny.jpg",click:!1},{id:7,name:"cat",imageURL:"images/cat.jpg",click:!1},{id:8,name:"duck",imageURL:"images/duck.jpg",click:!1},{id:9,name:"hedgehog",imageURL:"images/hedgehog.jpg",click:!1},{id:10,name:"monkey",imageURL:"images/monkey.jpg",click:!1},{id:11,name:"pig",imageURL:"images/pig3.jpg",click:!1},{id:12,name:"puppy",imageURL:"images/puppy.jpg",click:!1}]},a.onClick=function(e){a.setState({animals:a.state.animals.map((function(t){return t.id===e&&a.checkAnimal(t),t}))})},a.checkAnimal=function(e){!0===e.click?(a.setState({header:"You guessed incorrectly!"}),a.setState({animals:a.state.animals.map((function(e){return e.click=!1,e}))}),a.resetScore(),a.checkScore(a.state.score,a.state.topScore)):(e.click=!0,a.setState({header:"You guessed correctly!"}),a.incrementScore())},a.incrementScore=function(){a.setState({score:a.state.score+1})},a.resetScore=function(){a.setState({score:0})},a.checkScore=function(e,t){e>t&&a.setState({topScore:e})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,{score:this.state.score,topScore:this.state.topScore,header:this.state.header}),c.a.createElement(g,null),c.a.createElement("div",{className:"container"},c.a.createElement(v,{onClick:this.onClick,animals:this.state.animals})))}}]),t}(n.Component);r.a.render(c.a.createElement(O,null),document.getElementById("root"))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.7a89f83e.chunk.js.map