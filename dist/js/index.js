(()=>{"use strict";var n={439:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.environment=void 0,e.environment={production:!0,staticsUrl:"https://cdn.jsdelivr.net/gh/pacificosas/avon-mas-stickyfooter@2/assets/",get currentCountry(){switch(window.location.hostname){case"www.avon.co":return"co";case"www.avon.com.ec":return"ec";case"www.avon.com.pe":return"pe"}}}},284:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.chatLink=void 0;var a=t(439);e.chatLink=function(){switch(a.environment.currentCountry){case"co":return"https://www.avon.com.co/REPSuite/static/chat.html";case"ec":return"https://200.105.236.2:8560/webchatavon/";case"pe":return"https://200.105.236.2:8560/webchatavonperu/";default:return"/"}}},752:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.css=void 0,e.css=function(n){return'\n    <style>\n        body{\n            margin: 0;\n            padding: 0;\n            font-family: Arial,Gotham,"Helvetica Neue",Helvetica,sans-serif;\n            font-size: 1em;\n            }\n        .st-av{\n            display: grid;\n            grid-auto-flow: column;\n            grid-auto-columns: 1fr;\n            position: fixed;\n            bottom: 0;\n            width: 100%;\n            border-top: 2px solid #cececea3;\n            padding: 0 0;\n            padding-bottom:1rem;\n            padding-top:0.3rem;\n            margin: 0;\n            margin-block-start: 0;\n            margin-block-end: 0;\n            margin-inline-start: 0;\n            margin-inline-end: 0;\n            padding-inline-start: 0;\n            background:white;\n            z-index:20000000;\n        }\n        .st-av li{\n            list-style: none;  \n            text-align: center;\n            display: block;\n            margin: 0;\n        }\n        .st-av li:last-child{\n            border-right: none;\n        }\n        .st-av li a{\n            text-decoration: none;\n            color: #333;\n        }\n\n        .btn-1{\n            background: url('+n+"sticky-icon-home.jpg) no-repeat center;\n        }\n        .btn-2{\n            background: url("+n+"sticky-icon-regalos.jpg) no-repeat center;\n        }\n\n        .btn-3{\n            background: url("+n+"sticky-icon-offer.jpg) no-repeat center;\n        }\n        .btn-sale{\n            background: url("+n+"sticky-icon-sale.jpg) no-repeat center;\n        }\n        .btn-4{\n            background: url("+n+"sticky-icon-cuenta.jpg) no-repeat center;\n        }\n        .btn-5{\n            background: url("+n+"sticky-icon-chat.jpg) no-repeat center;\n        }\n\n        [class*=btn-]{\n            height: 50px;\n            display: block;\n            width:50%;\n            height:3rem;\n            background-size:contain;\n            margin:auto;\n        }\n    </style>\n    "}},675:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.html=void 0;var a=t(752);e.html=function(n){return"\n    "+a.css(n.assetsRoot)+'\n    <ul class="st-av">\n    <li>\n      <a href="/">\n        <div class="icon btn-1"></div>\n        <div class="name" data-text="Home">Home</div>\n      </a>\n    </li>\n    <li>\n      <a href="'+n.regalosLink+'">\n        <div class="icon btn-2"></div>\n        <div class="name" data-text="Mi carrito">Regalos</div>\n      </a>\n    </li>\n\n    <li>\n      <a href="/special-offers/">\n        <div class="icon btn-3"></div>\n        <div class="name" data-text="Ofertas">Ofertas</div>\n      </a>\n    </li>\n\n    <li>\n      <a href="'+n.saleLink+'">\n        <div class="icon btn-sale"></div>\n        <div class="name" data-text="Sale">Sale</div>\n      </a>\n    </li>\n\n    <li>\n      <a href="'+n.chatLink+'" target="_blank">\n        <div class="icon btn-5"></div>\n        <div class="name" data-text="Chat virtual">Chat virtual</div>\n      </a>\n    </li>\n    '}},505:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.regalosLink=void 0;var a=t(439);e.regalosLink=function(){switch(a.environment.currentCountry){case"co":return"https://www.avon.co/576/regalos";case"ec":return"https://www.avon.com.ec/576/regalos";case"pe":return"https://www.avon.com.pe/576/regalos";default:return"/"}}},436:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.saleLink=void 0;var a=t(439);e.saleLink=function(){switch(a.environment.currentCountry){case"co":return" https://www.avon.co/571/sale";case"ec":return"https://www.avon.com.ec/571/sale";case"pe":return" https://www.avon.com.pe/571/sale";default:return"/"}}}},e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={exports:{}};return n[a](r,r.exports,t),r.exports}(()=>{var n=t(439),e=t(284),a=t(675),r=t(505),i=t(436);if(navigator.userAgent.toLowerCase().match(/mobile/i)){var o=document.createElement("div");o.innerHTML=a.html({chatLink:e.chatLink(),regalosLink:r.regalosLink(),saleLink:i.saleLink(),assetsRoot:n.environment.staticsUrl}),document.body.append(o)}})()})();