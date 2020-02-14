!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let i=function(e,t){for(let n in t)e.style[n]=t[n]},r=function(e){for(;e.hasChildNodes();)e.firstChild.remove()},a=function(e){return e>9?""+e:"0"+e},d=function(e){let t,n,i=function(){let i=new Date,r=new Date(i-n);t=r;let d=r.getMinutes(),o=r.getSeconds();e.innerText="Time: "+a(d)+":"+a(o)};this.start=function(){return n=new Date,i(),setInterval(i,1e3),n},this.stop=function(){return clearInterval(i),t}},o=function(e,t,n){let i,r=this,a=function(){if(this.attach=function(e){e.appendChild(i)},this.detach=function(){i.style.backgroundImage="none",this.setStyle(i,{backgroundColor:"white","box-shadow":"0px 0px 0px white"}),i.removeEventListener("mouseover",d),i.removeEventListener("mouseout",o),i.setAttribute("removed","removed")},this.chosen=function(){this.setBackgroundImage(this.frontCard),this.setStyle(i,{"box-shadow":"10px 10px 5px grey"}),i.removeEventListener("mouseover",d),i.removeEventListener("mouseout",o)},this.reject=function(){this.setBackgroundImage(this.backCard),this.setStyle(i,{"box-shadow":"0px 0px 0px white"}),i.addEventListener("mouseover",d,!1),i.addEventListener("mouseout",o,!1)},this.setImages=function(e,t){i.setAttribute("cardimage",e.name),this.frontCard=e,this.backCard=t,this.setBackgroundImage(t)},this.setBackgroundImage=function(e){i.style.backgroundImage=`url('${e.url}')`,i.style.backgroundSize="100% 100%",i.style.backgroundRepeat="no-repeat",i.backgroundPosition="center"},this.setId=function(e){this.id=e,i.setAttribute("id",this.id)},this.handleEvent=function(e,t){i.addEventListener(e,t.bind(null,r))},i=document.createElement("div"),this.setStyle(i,{height:"120px",width:"90px",display:"inline-block",margin:"5px",position:"relative","transform-style":"preserve-3d",transition:"transform .5s"}),i.addEventListener("mouseover",d,!1),i.addEventListener("mouseout",o,!1),i.addEventListener("chosen",c,!1),i.addEventListener("reject",s,!1),!(e&&t&&n))throw"Missing required parameters";this.setId(e),this.setImages(t,n)}.bind(this),d=()=>{this.setStyle(i,{"box-shadow":"10px 10px 5px grey"})},o=()=>{this.setStyle(i,{"box-shadow":"0px 0px 0px white"})},c=()=>{this.chosen()},s=()=>{this.reject()};a()};o.prototype={setStyle:i};var c=o;var s=function(e){let t=[],n=this;this.cardList=t,this.remaining=0,this.createCard=function(e,t,i){let r=new c(e,t,i);return this.cardList.push(r),this.remaining++,r.handleEvent("removeCard",(function(e){n.removeCard(e)})),r},this.removeCard=function(e){let n;for(let i in t)if(t[i]===e){n=i;break}this.cardList.splice(n,1),e.detach(),this.remaining--},this.append=function(t){t.attach(e)}};let u=()=>{location.reload()};var l=function(e){let t=document.querySelector("#context"),n=document.createElement("h1");n.appendChild(document.createTextNode("Congratulations!")),t.appendChild(n);let r=document.createElement("p");r.appendChild(document.createTextNode("You won in "+a(e.getMinutes())+":"+a(e.getSeconds()))),t.appendChild(r);let d=document.createElement("button");d.appendChild(document.createTextNode("Play again")),d.addEventListener("click",u,!1),i(d,{"border-radius":"15px",width:"90px",height:"40px","margin-top":"15px"}),t.appendChild(d)},p=n.p+"images/7cb93bd787a48bde1b9b9c6f96388e98.jpg",m=n.p+"images/1d1405edacd4c19393f46b238b10d635.jpg",h=n.p+"images/0a3fd339487e5b83d41653a4e222a797.jpg",f=n.p+"images/6585f2b61ceb1c9fbdb503a315eebbd1.jpg",g=n.p+"images/0e2cc6488a7b8e60842a74822310088d.jpg",b=n.p+"images/06246a4aea255f55a9851e5c02743022.jpg",v=n.p+"images/f7635097460026e4eb7df4bc943df268.jpg",x=n.p+"images/91ef40a7f2ee57b9bd297a0dad67a59c.jpg",E=n.p+"images/447552f6056f1f6138a4aa2289d23831.jpg",C=n.p+"images/90f280795e92146ae912c11df9077768.jpg",y=n.p+"images/212900e2b98a00afd6ef00e2bcfb484d.jpg";let w=function(e){this.name=e.replace(".jpg",""),this.url=e},j=function(){this.images=[m,h,f,g,b,v,x,E,C,y]};j.prototype={getFrontCard:function(){let e=Math.floor(Math.random()*this.images.length),t=this.images[e];return this.images.splice(e,1),new w(t)},getBackCard:function(){return new w(p)}};var k=j;var L=function(e){let t=function(e){let t=0,n=new k,i=n.getBackCard();for(;t<e;){let e=n.getFrontCard();C.createCard("card"+t,e,i),C.createCard("card"+(t+1),e,i),t+=2}let r=function(e){let t,n,i=e,r=i.length;for(let e=0;e<r-1;e++)t=Math.floor(Math.random()*(r-e)+e),n=i[e],i[e]=i[t],i[t]=n;return i}(C.cardList);for(let e of r)C.append(e)},n=e=>{let t=e.target.getAttribute("id");t&&t.includes("card")&&!e.target.getAttribute("removed")&&a(e.target)},a=function(e){if(f){if(!g){if(f===e)return;g=e,g.dispatchEvent(new Event("chosen")),f.getAttribute("cardimage")===g.getAttribute("cardimage")?setTimeout(o,2e3):setTimeout(c,2e3)}}else f=e,f.dispatchEvent(new Event("chosen"))},o=function(){f.dispatchEvent(new Event("removeCard")),g.dispatchEvent(new Event("removeCard")),f=void 0,g=void 0,b.innerText="Remaining cards: "+C.remaining,0===C.remaining&&u()},c=function(){f.dispatchEvent(new Event("reject")),g.dispatchEvent(new Event("reject")),f=void 0,g=void 0},u=function(){let e=y.stop();p.removeEventListener("click",n),r(p),l(e)},p=document.getElementById("context"),m=document.createElement("div");m.setAttribute("id","table"),i(m,{perspective:"1000px"});let h=document.createElement("div");h.setAttribute("id","score");let f,g,b=document.createElement("p"),v=document.createElement("p"),x=document.createElement("button"),E=document.createTextNode("Back");h.appendChild(b),h.appendChild(x),h.appendChild(v),x.appendChild(E),x.addEventListener("click",(function(){location.reload()}),!1),i(h,{position:"absolute",bottom:0,"text-align":"left","padding-left":"10px",width:"95%"}),i(x,{"border-radius":"15px",float:"right","margin-left":"50px",width:"60px",height:"30px"}),p.appendChild(m),p.appendChild(h);let C=new s(m),y=new d(v);t(Number.parseInt(e)),b.innerText="Remaining cards: "+C.remaining,p.addEventListener("click",n,!1),y.start()};var T=function(){let e=function(t){let a=new FormData(t.target),d=Number(a.get("radioTable"));if(6===d||12===d||20===d){if(20===d){let e=document.querySelector("#root");i(e,{width:"80%"})}o.removeEventListener("submit",e),r(n),L(d)}t.preventDefault()},t=document.getElementById("root"),n=document.createElement("div");n.setAttribute("id","context");let a=document.createElement("h1");a.appendChild(document.createTextNode("Welcome to the Memory game!")),n.appendChild(a);let d=document.createElement("p");d.appendChild(document.createTextNode("Insert the number of cards")),n.appendChild(d);let o=document.createElement("form");o.setAttribute("method","post"),o.setAttribute("id","tableForm");let c=document.createElement("div");for(let e of[6,12,20]){let t=document.createElement("div"),n=document.createElement("input"),i=document.createElement("label");n.setAttribute("id","radioTable"+e),n.setAttribute("type","radio"),n.setAttribute("name","radioTable"),n.setAttribute("value",e.toString()),6===e&&n.setAttribute("checked","checked"),i.appendChild(document.createTextNode(e+" cards")),t.appendChild(n),t.appendChild(i),c.appendChild(t)}i(c,{"margin-bottom":"15px"}),o.appendChild(c);let s=document.createElement("div"),u=document.createElement("button");u.setAttribute("type","submit");let l=document.createTextNode("Play!");u.appendChild(l),i(u,{"border-radius":"15px",width:"80px",height:"30px","margin-top":"15px"}),s.appendChild(u),o.appendChild(s),o.addEventListener("submit",e,!1),n.appendChild(o),t.appendChild(n)};window.addEventListener("load",(function(){let e=document.getElementsByTagName("body")[0],t=document.createElement("div");t.setAttribute("id","root"),i(t,{margin:"auto",width:"50%",border:"1px solid grey",padding:"150px 0","text-align":"center",position:"relative","border-radius":"25px"}),e.appendChild(t),T()}),!1)}]);