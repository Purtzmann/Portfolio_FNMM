(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,c,s){},54:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s(7),n=s.n(i),r=s(3),a=s(10),j=s.n(a),l=s(20),o=s(4),d=s(21),m=s.n(d),b=Object(o.b)("weather/fetch",function(){var e=Object(l.a)(j.a.mark((function e(c,s){var t,i,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.rejectWithValue,s.getState,s.dispatch,e.prev=1,e.next=4,m.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=").concat("78e442a84270aaefc42a254ec9d75a62"));case 4:return i=e.sent,n=i.data,e.abrupt("return",n);case 9:if(e.prev=9,e.t0=e.catch(1),null===e.t0||void 0===e.t0?void 0:e.t0.response){e.next=13;break}throw e.t0;case 13:return e.abrupt("return",t(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.data));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(c,s){return e.apply(this,arguments)}}()),p=Object(o.c)({name:"weather",initialState:{},extraReducers:function(e){e.addCase(b.pending,(function(e,c){e.loading=!0})),e.addCase(b.fulfilled,(function(e,c){e.weather=null===c||void 0===c?void 0:c.payload,e.loading=!1,e.error=void 0})),e.addCase(b.rejected,(function(e,c){e.loading=!1,e.weather=void 0,e.error=null===c||void 0===c?void 0:c.payload}))}}).reducer,x=s(22),h=s(0),O=new Date,_=function(){var e=Object(t.useState)({hours:O.getHours(),minutes:O.getMinutes(),seconds:O.getSeconds()}),c=Object(x.a)(e,2),s=c[0],i=c[1];return Object(t.useEffect)((function(){var e=setInterval((function(){var e=new Date;i({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()})}),1e3);return function(){return clearInterval(e)}}),[]),Object(h.jsxs)("div",{className:"heure",children:[Object(h.jsxs)("p",{children:[s.hours,":"]}),Object(h.jsx)("p",{children:s.minutes}),Object(h.jsxs)("p",{className:"heure__seconds",children:[":",s.seconds]})]})},u=function(){var e=Object(r.b)();Object(t.useEffect)((function(){e(b("La Rochelle"))}),[]);var c=Object(r.c)((function(e){return e})),s=c.weather;c.loading,c.error;return Object(h.jsxs)("section",{className:"accueil",children:[Object(h.jsxs)("div",{className:"accueil__meteo",children:[Object(h.jsxs)("div",{className:"accueil__meteo--heure",children:[Object(h.jsxs)("div",{className:"bulletPoint",children:[Object(h.jsx)("div",{className:"bulletPoint__bar"}),Object(h.jsx)("div",{className:"bulletPoint__point"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(_,{})})]}),Object(h.jsxs)("div",{className:"accueil__meteo--picture",children:[Object(h.jsxs)("div",{className:"bulletPoint",children:[Object(h.jsx)("div",{className:"bulletPoint__bar"}),Object(h.jsx)("div",{className:"bulletPoint__point"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(null===s||void 0===s?void 0:s.weather[0].icon,"@2x.png"),alt:"",className:"logo-meteo"})})]}),Object(h.jsxs)("div",{className:"accueil__meteo--temp",children:[Object(h.jsxs)("div",{className:"bulletPoint",children:[Object(h.jsx)("div",{className:"bulletPoint__bar"}),Object(h.jsx)("div",{className:"bulletPoint__point"})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[Math.round(((null===s||void 0===s?void 0:s.main.temp)-32)/2*.1),"\xb0"]})})]})]}),Object(h.jsx)("div",{className:"accueil__informations",children:Object(h.jsxs)("div",{className:"informations",children:[Object(h.jsx)("h2",{className:"informations__bonjour",children:"Bonjour, je suis"}),Object(h.jsx)("p",{className:"informations__identite",children:"Fran\xe7ois-Nicolas Marc-Martin,"}),Object(h.jsx)("p",{className:"informations__metier",children:"Developpeur Web. "}),Object(h.jsx)("p",{className:"informations__presentation",children:"Je suis d\xe9veloppeur web junior sp\xe9cialis\xe9 dans la cr\xe9ation de site web. Actuellement \xe0 la recheche d'un job en tant que d\xe9veloppeur front end."})]})})]})},g=function(){return Object(h.jsxs)("div",{id:"contact",className:"contact",children:[Object(h.jsxs)("div",{className:"contact__title",children:[Object(h.jsx)("img",{src:"./picto/iconmonstr-linkedin-3-64-white.png",alt:"picto-user"}),Object(h.jsx)("h2",{children:".Contact"})]}),Object(h.jsxs)("div",{className:"contact__information",children:[Object(h.jsx)("p",{children:"Email: francoisnicolas.marcmartin@gmail.com"}),Object(h.jsxs)("p",{children:["Linkedin: ",Object(h.jsx)("a",{href:"www.linkedin.com/in/francois-nicolas-marc-martin",children:"www.linkedin.com/in/francois-nicolas-marc-martin"})]})]}),Object(h.jsxs)("div",{className:"contact__reseau",children:[Object(h.jsx)("a",{href:"https://github.com/Purtzmann/",children:Object(h.jsx)("img",{className:"side__picto",src:"./picto/iconmonstr-github-1-64-side.png",alt:""})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/francois-nicolas-marc-martin/",children:Object(h.jsx)("img",{className:"side__picto",src:"./picto/iconmonstr-linkedin-3-64-side.png",alt:""})}),Object(h.jsx)("a",{href:"https://twitter.com/Francois2M",children:Object(h.jsx)("img",{className:"side__picto",src:"./picto/iconmonstr-twitter-3-64-side.png",alt:""})})]})]})},v=function(){return Object(h.jsx)("section",{id:"experience",className:"experience",children:Object(h.jsxs)("div",{className:"experience__container",children:[Object(h.jsxs)("div",{className:"experience__title",children:[Object(h.jsx)("img",{src:"./picto/iconmonstr-linkedin-3-64.png",alt:"picto-user"}),Object(h.jsx)("h2",{children:".Curriculum Vitae"})]}),Object(h.jsxs)("div",{className:"experience__content",children:[Object(h.jsxs)("div",{className:"experience__description",children:[Object(h.jsxs)("div",{className:"experience__description__study",children:[Object(h.jsx)("div",{className:"experience__date",children:Object(h.jsx)("p",{children:"2020"})}),Object(h.jsx)("div",{className:"experience__logo",children:Object(h.jsx)("img",{src:"./logo_formation/eauvive_100px.png"})}),Object(h.jsxs)("div",{className:"experience__name",children:[Object(h.jsx)("p",{children:"L'Eau Vive"}),Object(h.jsx)("p",{children:"Charg\xe9 de marketin relationnel"})]})]}),Object(h.jsxs)("div",{className:"experience__description__study",children:[Object(h.jsx)("div",{className:"experience__date",children:Object(h.jsx)("p",{children:"2019"})}),Object(h.jsx)("div",{className:"experience__logo",children:Object(h.jsx)("img",{src:"./logo_formation/lvc_100px.png"})}),Object(h.jsxs)("div",{className:"experience__name",children:[Object(h.jsx)("p",{children:"La Vie Claire"}),Object(h.jsx)("p",{children:"Charg\xe9 de marketin relationnel"})]})]}),Object(h.jsxs)("div",{className:"experience__description__study",children:[Object(h.jsx)("div",{className:"experience__date",children:Object(h.jsx)("p",{children:"2018"})}),Object(h.jsx)("div",{className:"experience__logo",children:Object(h.jsx)("img",{src:"./logo_formation/coteclient_100px.png"})}),Object(h.jsxs)("div",{className:"experience__name",children:[Object(h.jsx)("p",{children:"C\xf4t\xe9 Client"}),Object(h.jsx)("p",{children:"Charg\xe9 d'\xe9tudes"})]})]}),Object(h.jsxs)("div",{className:"experience__description__study",children:[Object(h.jsx)("div",{className:"experience__date",children:Object(h.jsx)("p",{children:"2017"})}),Object(h.jsx)("div",{className:"experience__logo",children:Object(h.jsx)("img",{src:"./logo_formation/decitre_100px.png"})}),Object(h.jsxs)("div",{className:"experience__name",children:[Object(h.jsx)("p",{children:"Decitre"}),Object(h.jsx)("p",{children:"Charg\xe9 de mission marketing"})]})]})]}),Object(h.jsxs)("div",{className:"experience__image",children:[Object(h.jsx)("p",{children:"EXPERIENCES"}),Object(h.jsx)("img",{src:"./Images/laptop-g518aa136d_1280.png"})]})]})]})})},N=function(){return Object(h.jsx)("section",{id:"formation",className:"formation",children:Object(h.jsxs)("div",{className:"formation__container",children:[Object(h.jsxs)("div",{className:"formation__title",children:[Object(h.jsx)("img",{src:"./picto/iconmonstr-linkedin-3-64-white.png",alt:"picto-user"}),Object(h.jsx)("h2",{children:".Curriculum Vitae"})]}),Object(h.jsxs)("div",{className:"formation__content",children:[Object(h.jsxs)("div",{className:"formation__image",children:[Object(h.jsx)("p",{children:"FORMATIONS"}),Object(h.jsx)("img",{src:"./Images/laptop-g518aa136d_1280.png"})]}),Object(h.jsxs)("div",{className:"formation__description",children:[Object(h.jsxs)("div",{className:"formation__description__study openclassrooms",children:[Object(h.jsx)("div",{className:"formation__date",children:Object(h.jsx)("p",{children:"2020"})}),Object(h.jsx)("div",{className:"formation__logo",children:Object(h.jsx)("img",{src:"./logo_formation/openClassRooms_100px.png"})}),Object(h.jsxs)("div",{className:"formation__name",children:[Object(h.jsx)("p",{children:"OPENCLASSROOMS"}),Object(h.jsx)("p",{children:"Web Developper"})]})]}),Object(h.jsxs)("div",{className:"formation__description__study esdes",children:[Object(h.jsx)("div",{className:"formation__date",children:Object(h.jsx)("p",{children:"2017"})}),Object(h.jsx)("div",{className:"formation__logo",children:Object(h.jsx)("img",{src:"./logo_formation/esdes_100px.png"})}),Object(h.jsxs)("div",{className:"formation__name",children:[Object(h.jsx)("p",{children:"ESDES"}),Object(h.jsx)("p",{children:"Master Marketing"})]})]}),Object(h.jsxs)("div",{className:"formation__description__study baccalaureat",children:[Object(h.jsx)("div",{className:"formation__date",children:Object(h.jsx)("p",{children:"2020"})}),Object(h.jsx)("div",{className:"formation__logo",children:Object(h.jsx)("img",{src:"./logo_formation/iconmonstr-school-21-96.png"})}),Object(h.jsxs)("div",{className:"formation__name",children:[Object(h.jsx)("p",{children:"BACCALAUREAT"}),Object(h.jsx)("p",{children:"ES option Math\xe9matique"})]})]})]})]})]})})},f=function(){return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"container__logo",children:Object(h.jsx)("img",{src:"./logo/logo.png",alt:"logo"})}),Object(h.jsx)("div",{className:"container__nav",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#projects",children:"Projets"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#formation",children:"Formations"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#experience",children:"Experiences"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})})]})})},E=function(){return Object(h.jsx)("section",{id:"about",className:"about",children:Object(h.jsxs)("div",{className:"about__container",children:[Object(h.jsxs)("div",{className:"about__title",children:[Object(h.jsx)("img",{src:"./picto/iconmonstr-user-20-64 white.png",alt:"picto-user"}),Object(h.jsx)("h2",{children:"About me."})]}),Object(h.jsxs)("div",{className:"about__content",children:[Object(h.jsx)("div",{className:"about__description",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Bonjour! Je m'appelle Fran\xe7ois-Nicolas, j\u2019ai 28 ans d\xe9veloppeur web junior. J\u2019ai commenc\xe9 dans le monde du travail par du marketing avec une sp\xe9cialisation pour le CRM et l\u2019analyse de donn\xe9es. "}),Object(h.jsx)("p",{children:"En 2020 je me suis lanc\xe9 dans une reconversion professionnelle pour devenir d\xe9veloppeur web sp\xe9cialis\xe9 front-end via une formation avec Openclassrooms."}),Object(h.jsx)("p",{children:"Aujourd\u2019hui mon objectif est de trouver un projet ou un travail dans le  d\xe9veloppement de site et application web pour une agence ou un annonceur."}),Object(h.jsx)("p",{children:"Mon langage actuel pour le d\xe9veloppement web est le JavaScript et son frameworks REACT"})]})}),Object(h.jsxs)("div",{className:"about__image",children:[Object(h.jsx)("div",{className:"bloc1"}),Object(h.jsx)("div",{className:"bloc2",children:Object(h.jsx)("img",{src:"./Images/photo de profil N&B-modified.png",alt:"picto-user"})})]})]})]})})},w=function(){return Object(h.jsx)("section",{id:"projects",className:"projects",children:Object(h.jsxs)("div",{className:"projects__container",children:[Object(h.jsxs)("div",{className:"projects__title",children:[Object(h.jsx)("img",{src:"./picto/iconmonstr-folder-11-64.png",alt:"picto-user"}),Object(h.jsx)("h2",{children:".Projets"})]}),Object(h.jsxs)("div",{className:"projects__content",children:[Object(h.jsx)("a",{href:"https://github.com/Purtzmann/francoisnicolasmarcmartin_7_15062021",children:Object(h.jsxs)("div",{className:"project__bloc",children:[Object(h.jsx)("div",{className:"project__content",children:Object(h.jsx)("p",{children:"GROUPOMANIA"})}),Object(h.jsx)("div",{className:"project__description",children:Object(h.jsx)("p",{children:"SOCIAL NETWORK POUR ENTREPRISE"})}),Object(h.jsxs)("div",{className:"project__image",children:[Object(h.jsx)("img",{src:"./logo_techno/VS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/html_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/sass_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/react_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/redux_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/mysql_60px.png",alt:""})]})]})}),Object(h.jsx)("a",{href:"https://github.com/Purtzmann/francoisnicolasmarcmartin_6_07062021",children:Object(h.jsxs)("div",{className:"project__bloc",children:[Object(h.jsx)("div",{className:"project__content",children:Object(h.jsx)("p",{children:"SOPECKO"})}),Object(h.jsx)("div",{className:"project__description",children:Object(h.jsx)("p",{children:"MISE EN PLACE D'UNE API POUR UN FORUM"})}),Object(h.jsxs)("div",{className:"project__image",children:[Object(h.jsx)("img",{src:"./logo_techno/VS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/JS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/mongo_60px.png",alt:""})]})]})}),Object(h.jsx)("a",{href:"https://github.com/Purtzmann/Purtzmann-francoisnicolasmarcmartin_5_22042021",children:Object(h.jsxs)("div",{className:"project__bloc",children:[Object(h.jsx)("div",{className:"project__content",children:Object(h.jsx)("p",{children:"ORINOCO"})}),Object(h.jsx)("div",{className:"project__description",children:Object(h.jsx)("p",{children:"CREATION D'UN SITE ECOMMERCE POUR LA VENTE DE PELUCHES"})}),Object(h.jsxs)("div",{className:"project__image",children:[Object(h.jsx)("img",{src:"./logo_techno/VS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/html_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/sass_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/JS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/mongo_60px.png",alt:""})]})]})}),Object(h.jsx)("a",{href:"https://github.com/Purtzmann/francoisnicolasmarcmartin_4_01072021",children:Object(h.jsxs)("div",{className:"project__bloc",children:[Object(h.jsx)("div",{className:"project__content",children:Object(h.jsx)("p",{children:"LA CHOUETTE AGENCE"})}),Object(h.jsx)("div",{className:"project__description",children:Object(h.jsx)("p",{children:"OPTIMISATION SEO POUR LE SITE D'UNE AGENCE "})}),Object(h.jsxs)("div",{className:"project__image",children:[Object(h.jsx)("img",{src:"./logo_techno/VS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/html_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/css_60px.png",alt:""})]})]})}),Object(h.jsx)("a",{href:"https://github.com/Purtzmann/francoisnicolasmarcmartin_3_07032021",children:Object(h.jsxs)("div",{className:"project__bloc",children:[Object(h.jsx)("div",{className:"project__content",children:Object(h.jsx)("p",{children:"OHMYFOOD"})}),Object(h.jsx)("div",{className:"project__description",children:Object(h.jsx)("p",{children:"MOBILE WEBISTE POUR DES CARTES DE RESTAURANTS"})}),Object(h.jsxs)("div",{className:"project__image",children:[Object(h.jsx)("img",{src:"./logo_techno/VS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/html_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/css_60px.png",alt:""})]})]})}),Object(h.jsx)("a",{href:"https://github.com/Purtzmann/francoisnicolasmarcmartin_2_15012021",children:Object(h.jsxs)("div",{className:"project__bloc",children:[Object(h.jsx)("div",{className:"project__content",children:Object(h.jsx)("p",{children:"RESERVIA"})}),Object(h.jsx)("div",{className:"project__description",children:Object(h.jsx)("p",{children:"HOME PAGE POUR UN SITE DE RESERVATION "})}),Object(h.jsxs)("div",{className:"project__image",children:[Object(h.jsx)("img",{src:"./logo_techno/VS_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/html_60px.png",alt:""}),Object(h.jsx)("img",{src:"./logo_techno/css_60px.png",alt:""})]})]})})]})]})})},S=function(){return Object(h.jsx)("div",{className:"side",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://github.com/Purtzmann/",children:Object(h.jsx)("img",{className:"side__picto",src:"./picto/iconmonstr-github-1-64-side.png",alt:""})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/francois-nicolas-marc-martin/",children:Object(h.jsx)("img",{className:"side__picto",src:"./picto/iconmonstr-linkedin-3-64-side.png",alt:""})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://twitter.com/Francois2M",children:Object(h.jsx)("img",{className:"side__picto",src:"./picto/iconmonstr-twitter-3-64-side.png",alt:""})})})]})})},P=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)(f,{}),Object(h.jsx)(S,{}),Object(h.jsx)(u,{}),Object(h.jsx)(E,{}),Object(h.jsx)(w,{}),Object(h.jsx)(N,{}),Object(h.jsx)(v,{}),Object(h.jsx)(g,{})]})};var C=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(P,{})})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(c){var s=c.getCLS,t=c.getFID,i=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),t(e),i(e),n(e),r(e)}))},A=(s(53),Object(o.a)({reducer:p}));n.a.render(Object(h.jsx)(r.a,{store:A,children:Object(h.jsx)(C,{})}),document.getElementById("root")),R()}},[[54,1,2]]]);
//# sourceMappingURL=main.9b41dba9.chunk.js.map