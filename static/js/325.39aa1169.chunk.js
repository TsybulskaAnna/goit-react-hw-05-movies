"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{8530:function(e,r,n){n.d(r,{Hx:function(){return u},Tg:function(){return o},d$:function(){return v},eb:function(){return l},uV:function(){return p}});var t=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"45b0b261b921954ac82a34bd1131a569"}}),o=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/day",{parans:{page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie/",{params:{query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},4325:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(1413),a=n(5861),s=n(885),i=n(7757),c=n.n(i),o=n(2791),u=n(501),l=n(6871),v=n(8530),p={goBack:"movieDetailsPage_goBack__gAebg",wrapper:"movieDetailsPage_wrapper__kmPut",about:"movieDetailsPage_about__vqkbY",score:"movieDetailsPage_score__MK4dr",overwiev:"movieDetailsPage_overwiev__QSdyG",genresTitle:"movieDetailsPage_genresTitle__sJZRH",genres:"movieDetailsPage_genres__LiaVf",info:"movieDetailsPage_info__G9PsW",links:"movieDetailsPage_links__AVOFn",genresItem:"movieDetailsPage_genresItem__qaqEt",link:"movieDetailsPage_link__ZHtlQ"},m=n(184),d=function(){var e,r=(0,o.useState)({movie:{},loading:!1,error:null}),n=(0,s.Z)(r,2),i=n[0],d=n[1],f=(0,l.UO)().id,g=(0,l.s0)(),h=(0,l.TH)(),_=(null===h||void 0===h||null===(e=h.state)||void 0===e?void 0:e.from)||"/";(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,v.eb)(f);case 4:r=e.sent,d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{movie:r,loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!1,error:e.t0.message})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]);var x=i.movie,k=i.loading,w=i.error,b=x.poster_path,j=x.title,Z=x.vote_average,P=x.overview,N=x.genres;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:p.goBack,onClick:function(){return g(_)},children:"\u21a9 Go back"}),k&&(0,m.jsx)("p",{children:"...Loading"}),x&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:p.wrapper,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+b,alt:j,className:p.img}),(0,m.jsxs)("div",{className:p.about,children:[(0,m.jsx)("h2",{children:j}),(0,m.jsxs)("p",{className:p.score,children:[" User score: ",10*Z,"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{className:p.overwiev,children:P}),(0,m.jsx)("h3",{className:p.genresTitle,children:"Genres"}),(0,m.jsx)("p",{children:N&&N.map((function(e){return(0,m.jsx)("span",{className:p.genresItem,children:e.name},e.id)}))})]})]}),(0,m.jsxs)("div",{className:p.links,children:[(0,m.jsx)("h3",{className:p.info,children:"Aditional information"}),(0,m.jsx)(u.rU,{state:{from:_},className:p.link,to:"/movies/".concat(f,"/cast"),children:"Cast"}),(0,m.jsx)(u.rU,{state:{from:_},className:p.link,to:"/movies/".concat(f,"/reviews"),children:"Reviews"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(l.j3,{})})]}),w&&(0,m.jsx)("p",{children:w})]})}}}]);
//# sourceMappingURL=325.39aa1169.chunk.js.map