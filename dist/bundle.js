(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),r.push([e.id,"body, html{\n    background-image: radial-gradient(rgb(190, 147, 91), white, rgb(190, 147, 91));\n    margin:0px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nh1{\n    color: rgb(68, 43, 28);\n    font-size: 40px;\n    text-align: center;\n    margin: 0px;\n    padding:20px;\n    margin-left: 200px;\n    font-family: 'Pacifico', cursive;\n    font-weight: 500;\n}\n\n#content{\n    margin: 0px;\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    height: 50px;\n    background-image: linear-gradient(135deg, rgb(231, 189, 155), white, rgba(223, 116, 55, 1), rgb(231, 189, 155));\n    margin: 30px 0px 5px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 3px solid;\n    border-image: linear-gradient(135deg, rgb(150, 78, 37), white, rgb(150, 78, 37), white, rgb(150, 78, 37));\n    border-image-slice:1;\n}\n\n.header>ul{\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    gap:30px;\n    font-size: 30px;\n    margin-right: 20px;\n    font-family: 'Pacifico', cursive;\n}\n\n.header button{\n    background-color: rgba(223, 116, 55, 0);\n    border: none;\n    font-size: 29px;\n    color: rgb(68, 43, 28);\n    padding:8px;\n    font-family: 'Pacifico', cursive;\n}\n\n.header>ul>li>button:hover{\n    transform: scaleX(1.2);\n}\n\n.header>ul>li>.activeButton{\n    font-weight: 600;\n    text-decoration: underline;\n}\n\n.logoDiv{\n    height:105px;\n    width:105px;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: 60px;\n    margin-top: -85px;\n    background-image: linear-gradient(135deg, white, rgba(223, 116, 55, 1), rgb(224, 183, 149));\n    border-radius: 50%;\n    border:3px solid;\n    border-color: rgba(150, 78, 37, .5);\n}\n\n.logoImg{\n    height:75px;\n    width:75px;\n}\n\n.mainDiv{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.descriptionDiv{\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex:1 0;\n    margin:15px;\n}\n\n.descriptionDiv>p, .timetableDiv>p{\n    font-size:25px;\n    line-height: 2;\n    text-indent: 30px;\n    font-family: 'Pacifico', cursive;\n    background: -webkit-linear-gradient( rgb(68, 43, 28),rgb(97, 41, 4));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    text-align: center;\n}\n\n.mainDescriptionDiv{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n}\n\n.mainImgDiv{\n    box-shadow: 0px 0px 15px 15px rgb(224, 183, 149) inset;\n    padding:7px;\n    margin: -20px 10px 10px 10px;\n}\n\n.mainImg{\n    width:960px;\n    height: 660px;\n    margin: 5px 5px 5px 5px;\n    flex: 1 0;\n    opacity: 90%;\n    padding:7px;\n    }\n\n.timetableDiv{\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    justify-content: flex-start;\n    flex:1 0;\n}\n\n.footer{\n    height:35px;\n    background-image: linear-gradient(135deg, rgba(223, 116, 55, 1), rgb(231, 189, 155));\n}\n\n.footer>p{\n    margin-top: -4px;\n    color: rgb(68, 43, 28);\n    font-family: 'Pacifico', cursive;\n    text-align: center;\n    font-size: 25px;\n    letter-spacing: 4px;\n}\n\n.itemDiv{\n    display: flex;\n    flex-direction: column;\n    justify-content: first baseline;\n    align-items: center;\n    margin: 10px;\n    box-shadow: 0px 0px 15px 15px rgb(224, 183, 149) inset;\n}\n\n.itemDiv>img{\n    height:250px;\n    width:350px;\n    margin: 15px;\n    opacity: 90%;\n    border-radius: 90%;\n}\n\n.detailsDiv{\n    display:flex;\n    flex-direction: column;\n    margin: 10px;\n    font-size: 20px;\n    color: rgb(68, 43, 28);\n}\n\n.price{\n    font-size: 20px;\n    font-weight: 600;\n    font-family: 'Pacifico', cursive;\n    text-align: right;\n}\n\nh2{\n    margin-top: 5px;\n    margin-bottom: 30px;\n    font-size: 30px;\n    font-family: 'Pacifico', cursive;\n    text-align: center;\n    color: rgba(68, 43, 28, 1);\n}\n\nh3{\n    font-size: 25px;\n    font-family: 'Pacifico', cursive;\n    margin-top: 0px;\n}\n\nh4, p{\n    margin-bottom:0px;\n    margin-top: 0px;\n    margin-right: 20px;\n    margin-left: 20px;\n    }\n\nh4{\n    font-style: italic;\n    margin-top: -20px;\n}\n\n.menuDisplay{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.contactMainDiv{\n    display:flex;\n}\n\n.contactDetailsDiv{\n    display:grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n.contactDetailsDiv>img{\n    height: 20px;\n    width:20px;\n}\n\n#map{\n    height:400px;\n    width:100%;\n}",""]);const c=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},r=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var g=i(u,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=t(o[r]);n[c].references--}for(var s=a(e,i),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),o=t(569),r=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(426),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=r().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),n()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals,t.p,t.p,t.p;const f=document.getElementById("content");function h(){const e=document.createElement("div");e.classList.add("mainDescriptionDiv");const n=document.createElement("div");n.classList.add("descriptionDiv");const t=document.createElement("p");t.textContent='"My wonderful restaurant" was born out of love and respect for traditional Romanian culinary creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you an experience you can feel good about.',n.appendChild(t),e.appendChild(n);const a=document.createElement("div");a.classList.add("mainImgDiv");const i=document.createElement("img");i.classList.add("mainImg"),i.setAttribute("src","./c3f5555faef4a83386b0.webp"),a.appendChild(i),e.appendChild(a);const o=document.createElement("div");o.classList.add("mainDiv"),o.appendChild(e),f.appendChild(o);const r=document.createElement("div");r.classList.add("timetableDiv");const c=document.createElement("p");c.textContent="Monday-Friday: 10.00-23.00";const s=document.createElement("p");s.textContent="Saturday-Sunday: 10.00-17.00",r.appendChild(c),r.appendChild(s),e.appendChild(r)}function x(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("p");n.textContent="Thank you for being part of our journey!",e.appendChild(n),f.appendChild(e)}let b=[{Name:"White Bean Dip",Description:"A creamy and delicious dish, loaded with fresh flavors and combined with traditional smoked sausages.",Ingredients:"white beans, sunflower oil, onion, smoked meat, garlic, spices","No of calories":"420 kcal",Price:"3 €",image:"White-Bean-Dip-1024x683.jpg"},{Name:"Sarmale",Description:"Stuffed cabbage rolls traditionally served on Christmas, New Year's Eve and other celebrations.",Ingredients:"vegetable oil, onion, rice, ground pork, cabbage leaves, bacon, tomato juice","No of calories":"560 kcal",Price:"4 €",image:"c69071597fdd147d8401.jpg"},{Name:"Stuffed peppers",Description:"A popular and delicious Romanian dish consisting of hollowed-out peppers stuffed with ground meat and rice",Ingredients:"green peppers, rice, onion, ground pork, tomato juice, spices","No of calories":"520 kcal",Price:"6 €",image:"romanian-food-ardei-umpluti.jpg.webp"},{Name:"Varza a la Cluj",Description:"Varză a la Cluj is a specialty of Cluj-Napoca in northwestern Romania but it’s served at many restaurants throughout the country.",Ingredients:"sour cabbage, minced meat, onions, rice, tomato sauce, sour cream","No of calories":"580 kcal",Price:"6 €",image:"romanian-food-varza-a-la-cluj.jpg.webp"}],v=[{Name:"Beef Salad",Description:"A type of potato salad traditionally made with beef, typically a holiday dish in Romania",Ingredients:"potatoes, carrots, pickles, beef, peas, mayonnaise, spices","No of calories":"350 kcal",Price:"6 €",image:"romanian-food-salata-de-boeuf.jpg.webp"},{Name:"Eggplant Salad",Description:"A popular Romanian eggplant salad or dip made with roasted and puréed aubergine",Ingredients:"eggplants, lemon juice, onion, mayonnaise, spices","No of calories":"270 kcal",Price:"4 €",image:"romanian-food-salata-de-vinete.jpg.webp"},{Name:"Roasted pepper salad",Description:"A simple side dish or spread made with roasted bell peppers",Ingredients:"roasted bell peppers, salt, sunflower oil, vinegar, garlic","No of calories":"230 kcal",Price:"3 €",image:"romanian-food-ardei-copti.jpg.webp"},{Name:"Zacusca",Description:"A traditional Romanian vegetable spread made with roasted eggplant and red peppers",Ingredients:"roasted eggplant, tomato paste, onions, sweet read pepper, sunflower oil, spices","No of calories":"240 kcal",Price:"3 €",image:"romanian-food-zacusca.jpg.webp"}],y=[{Name:"Cozonac",Description:"A traditional Romanian sweet bread associated with Easter and Christmas",Ingredients:"flour, milk, butter, eggs, sugar, salt, raisins, walnuts","No of calories":"450 kcal",Price:"6 €",image:"romanian-food-cozonac.jpg.webp"},{Name:"Pasca",Description:"A traditional Romanian dessert bread that's always baked for Easter",Ingredients:"flour, milk, butter, eggs, sugar, salt, farmer's cheese, raisins","No of calories":"470 kcal",Price:"7 €",image:"romanian-food-pasca.jpg.webp"},{Name:"Gogosi",Description:"Romanian fried pastries similar to doughnuts, made without a hole and often filled",Ingredients:"flour, milk, butter, eggs, sugar, salt, yeast, strawberry jam","No of calories":"570 kcal",Price:"5 €",image:"romanian-food-gogosi.jpg.webp"},{Name:"Cornulete",Description:"Romanian crescent cookies traditionally baked for holidays and other special occasions",Ingredients:"flour, milk, butter, eggs, sugar, salt, plum jam, vanilla","No of calories":"630 kcal",Price:"7 €",image:"romanian-food-cornulete.jpg.webp"}];function C(){const e=document.querySelector(".mainDiv"),n=document.querySelector(".footer"),t=document.getElementById("content");t.removeChild(e),t.removeChild(n)}function w(e){document.querySelector(`.${e}`).classList.toggle("activeButton")}function E(){document.querySelectorAll(".header button").forEach((e=>e.classList.remove("activeButton")))}!function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.textContent="My wonderful restaurant",e.appendChild(n);const t=document.createElement("ul");let a=["Home","Menu","Contact"];for(let e=0;e<a.length;e++){const n=document.createElement("li"),i=document.createElement("button");i.textContent=`${a[e]}`,i.classList.add(`${a[e]}`),n.appendChild(i),t.appendChild(n)}e.appendChild(t),f.appendChild(e),document.querySelector(".header>ul>li").firstChild.classList.add("Home","activeButton")}(),function(){const e=document.createElement("div");e.classList.add("logoDiv");const n=document.createElement("img");n.classList.add("logoImg"),n.setAttribute("src","./d1b5d369d00c00ee23e5.png"),e.appendChild(n),f.appendChild(e)}(),h(),x(),document.querySelectorAll(".header>ul>li>button").forEach((e=>e.addEventListener("click",(e=>{switch(e.target.textContent){case"Home":C(),h(),E(),w(e.target.textContent),x();break;case"Menu":C(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("mainDiv"),e.appendChild(n);const t=document.createElement("h2");t.textContent="Starters:",n.appendChild(t);const a=document.createElement("div");a.appendChild(s(v)),n.appendChild(a);const i=document.createElement("h2");i.textContent="Main dishes:",n.appendChild(i);const o=document.createElement("div");o.appendChild(s(b)),n.appendChild(o);const r=document.createElement("h2");r.textContent="Desserts:",n.appendChild(r);const c=document.createElement("div");function s(e){const n=document.createElement("div");n.classList.add("menuDisplay");for(let t=0;t<e.length;t++){const a=document.createElement("div");a.classList.add("itemDiv");const i=document.createElement("img");i.setAttribute("src",`${e[t].image}`),a.appendChild(i);const o=document.createElement("div");o.classList.add("detailsDiv");for(let n in e[t])switch(n){case"Name":const a=document.createElement("h2");a.textContent=`${e[t][n]}`,o.appendChild(a);break;case"Description":case"Ingredients":case"Weight":case"No of calories":const i=document.createElement("h4");i.textContent=`${n}:  `;const r=document.createElement("p");r.textContent=`${e[t][n]}`,o.appendChild(i),o.appendChild(r);const c=document.createElement("br");o.appendChild(c);break;case"Price":const s=document.createElement("p");s.classList.add("price"),s.textContent=`${n}:  ${e[t][n]}`,o.appendChild(s)}a.appendChild(o),n.appendChild(a)}return n}c.appendChild(s(y)),n.appendChild(c),e.appendChild(n)}(),E(),w(e.target.textContent),x();break;case"Contact":C(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("mainDiv"),e.appendChild(n);const t=document.createElement("h2");t.textContent="Contact us at:",n.appendChild(t);const a=document.createElement("div");a.classList.add("contactMainDiv");const i=document.createElement("div");i.classList.add("contactDetailsDiv");const o=document.createElement("img");o.setAttribute("src","phone-call.png"),i.appendChild(o),i.appendChild(o);const r=document.createElement("p");r.textContent="+40 123 456 789",i.appendChild(r),a.appendChild(i),n.appendChild(a)}(),E(),w(e.target.textContent),x()}}))))})()})();