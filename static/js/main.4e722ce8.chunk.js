(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={Button:"Button_Button__1m_fF"}},21:function(e,t,a){e.exports={App:"App_App__3mQXg"}},22:function(e,t,a){e.exports={PageWrapper:"PageWrapper_PageWrapper__2T1KJ"}},23:function(e,t,a){e.exports=a.p+"static/media/StartGame@2x.fa6b4a54.png"},24:function(e,t,a){e.exports=a.p+"static/media/Group 2@2x.976f641a.png"},25:function(e,t,a){e.exports={Logo:"Logo_Logo__3N9AF"}},27:function(e,t,a){e.exports={CardLayout:"GameLayout_CardLayout__1Qw4n"}},31:function(e,t,a){e.exports=a(50)},36:function(e,t,a){},5:function(e,t,a){e.exports={Card:"Card_Card__1M5vB",Flip:"Card_Flip__9RnwW",CardDisabled:"Card_CardDisabled__1osBf",Disabled:"Card_Disabled__2GkLt",FrontFace:"Card_FrontFace__2qjoP",BackFace:"Card_BackFace__1ohBQ"}},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),o=(a(36),a(7)),s=a(8),d=a(13),l=a(9),u=a(14),p=a(52),f=a(21),m=a.n(f),C=a(22),h=a.n(C),E=function(e){return r.a.createElement("main",{className:h.a.PageWrapper},e.children)},_=a(23),k=a.n(_),y=a(24),b=a.n(y),v=a(25),F=a.n(v),g=function(e){return r.a.createElement("img",{className:F.a.Logo,alt:"Logo",src:"start"===e.page?k.a:b.a})},D=a(10),S=a.n(D),O=a(51),R=function(e){return r.a.createElement(O.a,{className:S.a.Button,to:e.link,onClick:e.clicked},e.btnContent)},A=function(e){return r.a.createElement(E,null,r.a.createElement(g,{page:"start"}),r.a.createElement("h1",null,"MEMORY GAME"),r.a.createElement(R,{btnContent:"Start",link:"/game"}))},w=a(6),j=a(5),B=a.n(j),M=function(e){var t=B.a.Card;return(e.isFliped||e.firstCard===e.id||e.secondCard===e.id)&&(t=[B.a.Card,B.a.Flip].join(" "),e.isDisabled&&(t=[B.a.CardDisabled,B.a.Flip].join(" "))),e.isActive||(t=B.a.Disabled),r.a.createElement("div",{id:e.id,className:t,onClick:e.isActive?function(){return e.clicked(e.id,e.card)}:null},r.a.createElement("img",{className:B.a.FrontFace,alt:"Card",src:"/Memory-game-play/Cards/"+e.card+".png"}),r.a.createElement("img",{className:B.a.BackFace,alt:"Card",src:"/Memory-game-play/Cards/BACK.png"}))},x=a(27),N=a.n(x),T=function(e){var t=e.deck.map(function(t,a){return r.a.createElement(M,{key:a,isDisabled:e.isDisabled,isActive:t.isActive,card:t.card,id:a,isFliped:e.flipped,clicked:e.clicked,firstCard:e.firstCard,secondCard:e.secondCard})});return r.a.createElement("div",{className:N.a.CardLayout},t)},L=function(e){return r.a.createElement("p",null,"Score: ",e.score)},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isDisabled:!0,isDeckFlipped:!0,firstFlipedCard:{id:null,type:null},secondFlipedCard:{id:null,type:null}},a.cardClickHandler=function(e,t){a.state.isDisabled||a.checkFlip(e,t)},a.restartHandler=function(){a.props.createDeck(),a.addDelay(),a.setState({firstFlipedCard:{id:null,type:null},secondFlipedCard:{id:null,type:null}}),a.props.resetScore()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.createDeck()}},{key:"componentDidMount",value:function(){this.addDelay()}},{key:"addDelay",value:function(){var e=this;this.setState({isDisabled:!0,isDeckFlipped:!0}),setTimeout(function(){return e.setState({isDisabled:!1,isDeckFlipped:!1})},5e3)}},{key:"checkFlip",value:function(e,t){var a=this;null!==this.state.firstFlipedCard.id?e!==this.state.firstFlipedCard.id&&this.setState({secondFlipedCard:{id:e,type:t}},function(){return a.checkPair()}):this.setState({firstFlipedCard:{id:e,type:t}})}},{key:"checkPair",value:function(){var e=this;if(this.state.firstFlipedCard.type===this.state.secondFlipedCard.type)return setTimeout(function(){e.props.removeCards(e.state.firstFlipedCard,e.state.secondFlipedCard),e.setState({firstFlipedCard:{id:null,type:null},secondFlipedCard:{id:null,type:null}},function(){return e.checkWin()})},300),void this.props.addScore();setTimeout(function(){return e.setState({firstFlipedCard:{id:null,type:null},secondFlipedCard:{id:null,type:null}})},800),this.props.subscribeScore()}},{key:"checkWin",value:function(){0===this.props.cardsRemain&&this.props.history.push("/end")}},{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(L,{score:this.props.score}),r.a.createElement(T,{isDisabled:this.state.isDisabled,deck:this.props.deck,flipped:this.state.isDeckFlipped,clicked:this.cardClickHandler,firstCard:this.state.firstFlipedCard.id,secondCard:this.state.secondFlipedCard.id,score:this.props.score}),r.a.createElement("button",{className:S.a.Button,onClick:this.restartHandler},"Restart"))}}]),t}(n.Component),P=Object(w.b)(function(e){return{deck:e.deck,score:e.score,cardsRemain:e.cardsRemain}},function(e){return{createDeck:function(){return e({type:"CREATE_DECK"})},removeCards:function(t,a){return e(function(e,t){return{type:"REMOVE_CARDS",firstCard:e,secondCard:t}}(t,a))},addScore:function(){return e({type:"ADD_SCORE"})},subscribeScore:function(){return e({type:"SUBSCTIBE_SCORE"})},resetScore:function(){return e({type:"RESET_SCORE"})}}})(W),G=Object(w.b)(function(e){return{score:e.score}})(function(e){return r.a.createElement(E,null,r.a.createElement(g,null),r.a.createElement("h2",null,"Congratulations!"),r.a.createElement("strong",{style:{"margin-bottom":"10px"}},"Your score: ",e.score),r.a.createElement(R,{btnContent:"Play again",link:"/game"}))}),H=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.App},r.a.createElement(p.a,{exact:!0,path:"/",component:A}),r.a.createElement(p.a,{path:"/game",component:P}),r.a.createElement(p.a,{path:"/end",component:G}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(53),K=a(11),X=a(29),J=a(30),Q=function(e,t){return Object(J.a)({},e,t)},U={deck:[],score:0,cardsRemain:18},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_DECK":return function(e,t){for(var a=["0","2","3","4","5","6","7","8","9","A","J","K","Q"],n=["C","D","H","S"],r=[];r.length<9;){var i=a[Math.floor(Math.random()*a.length)]+n[Math.floor(Math.random()*n.length)];r.push(i),r=r.filter(function(e,t,a){return a.indexOf(e)===t})}var c=[];return r.map(function(e){var t={card:e,isActive:!0};c.push(t)}),c.map(function(e){return c.push(e)}),function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t}(c),Q(e,{deck:c})}(e);case"REMOVE_CARDS":return function(e,t){var a=Object(X.a)(e.deck);return a[t.firstCard.id].isActive=!1,a[t.secondCard.id].isActive=!1,Q(e,{deck:a})}(e,t);case"ADD_SCORE":return function(e,t){var a=e.cardsRemain,n=e.score;return Q(e,{score:n+=42*a,cardsRemain:a-=2})}(e);case"SUBSCTIBE_SCORE":return function(e,t){var a=e.cardsRemain,n=e.score;return Q(e,{score:n-=42*(18-a)})}(e);case"RESET_SCORE":return function(e,t){return Q(e,{score:0,cardsRemain:18})}(e);default:return e}},Y=Object(K.b)(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),q=r.a.createElement(w.a,{store:Y},r.a.createElement(I.a,{basename:"/Memory-game-play/"},r.a.createElement(H,null)));c.a.render(q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.4e722ce8.chunk.js.map