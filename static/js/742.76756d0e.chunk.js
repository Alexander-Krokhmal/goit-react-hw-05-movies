"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[742],{708:function(n,e,t){t.d(e,{a:function(){return c},j:function(){return r}});var r="https://image.tmdb.org/t/p/w500",c="https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg"},742:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,c,a,o,i,u,s,p,h,l=t(861),d=t(885),f=t(757),m=t.n(f),x=t(731),v=t(689),g=t(933),w=t(791),b=t(708),Z=t(168),j=t(981),k=j.Z.main(r||(r=(0,Z.Z)(["\n    padding: ","px;\n"])),(function(n){return n.theme.space[4]})),y=j.Z.div(c||(c=(0,Z.Z)(["\n    h2 {\n        font-size: 20px;\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.accentTextColor})),_=j.Z.ul(a||(a=(0,Z.Z)(["\n    margin-top: ","px;\n    margin-bottom: ","px;\n\n    a {\n        font-weight: 700;\n        display: block;\n        padding-top: ","px;\n        padding-bottom: ","px;\n        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n        &:hover,\n        &:focus {\n            color: ",";\n        }\n    }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.accent})),C=(0,j.Z)(x.rU)(o||(o=(0,Z.Z)(["\n    display: block;\n    min-width: 60px;\n    max-width: 140px;\n    padding: ","px;\n    height: ","px;\n    border: 1px solid ",";\n    color: ",";\n    font-weight: 500;\n    border-radius: 4px;\n    margin-bottom: ","px;\n    text-align: center;\n    background-color: ",";\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n            color: ",";\n    }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accentTextColor}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accentBackgroundColor}),(function(n){return n.theme.colors.accent})),P=j.Z.div(i||(i=(0,Z.Z)(["\n    margin-bottom: ","px;\n    padding: ","px;\n    border-radius: 5px;\n    box-shadow: ",";\n\n    @media screen and (min-width: 768px) {\n        display: flex;\n    }\n\n    h2 {\n        margin-bottom: ","px;\n        color: ",";  \n    }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.boxShadow.second}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accentTextColor})),S=j.Z.div(u||(u=(0,Z.Z)(["\n    width: 100%;\n    height: auto;\n    border-radius: 5px;\n\n    @media screen and (max-width: 767.98px) {\n        margin-bottom: ","px;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 200px;\n        height: 300px;\n        margin-right: ","px;\n    }\n\n    img {\n        width: 100%;\n        border-radius: 5px;\n\n        @media screen and (min-width: 768px) {\n            width: 200px;\n        }\n    }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),U=j.Z.p(s||(s=(0,Z.Z)(["\n    margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]})),T=j.Z.div(p||(p=(0,Z.Z)(["\n    margin-bottom: ","px;\n  \n    h3 {\n        margin-bottom: ","px;\n    }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]})),z=j.Z.div(h||(h=(0,Z.Z)(["\n    h3 {\n        margin-bottom: ","px;\n    }\n"])),(function(n){return n.theme.space[2]})),O=t(184),B=function(n){var e=n.title,t=n.genres,r=n.overview,c=n.image,a=n.rating,o=n.year;return(0,O.jsxs)(P,{children:[(0,O.jsx)(S,{children:(0,O.jsx)("img",{src:c,alt:e,width:"200px",height:"300px"})}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("h2",{children:[e," (",o,")"]}),(0,O.jsxs)(U,{children:["User score: ",a,"%"]}),(0,O.jsxs)(T,{children:[(0,O.jsx)("h3",{children:"Overwiev"}),(0,O.jsx)("p",{children:r})]}),(0,O.jsxs)(z,{children:[(0,O.jsx)("h3",{children:"Genres"}),(0,O.jsx)("p",{children:t})]})]})]})},G=[{href:"cast",label:"Cast"},{href:"reviews",label:"Reviews"}],R=function(){var n,e,t=(0,w.useState)({}),r=(0,d.Z)(t,2),c=r[0],a=r[1],o=(0,v.UO)().movieId,i=(0,v.TH)(),u=(0,w.useRef)(null!==(n=null===i||void 0===i||null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");if((0,w.useEffect)((function(){function n(){return n=(0,l.Z)(m().mark((function n(){var e,t,r,c,i,u,s;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.Pg(o);case 2:e=n.sent,t=e.genres,r=e.original_title,c=e.overview,i=e.poster_path,u=e.vote_average,s=e.release_date,a({title:r,genres:t.map((function(n){return n.name})).join(", "),overview:c,poster_path:i?b.j+i:b.a,rating:Math.round(10*u),year:s.slice(0,4)});case 5:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[o]),!c)return null;var s=c.title,p=c.genres,h=c.overview,f=c.poster_path,Z=c.rating,j=c.year;return(0,O.jsxs)(k,{children:[(0,O.jsx)(C,{to:u.current,children:"Go back"}),(0,O.jsx)(B,{rating:Z,image:f,title:s,genres:p,overview:h,year:j}),(0,O.jsxs)(y,{children:[(0,O.jsx)("h2",{children:"Additional inormation"}),(0,O.jsx)(_,{children:G.map((function(n){var e=n.href,t=n.label;return(0,O.jsx)("li",{children:(0,O.jsx)(x.rU,{to:e,children:t})},e)}))}),(0,O.jsx)(w.Suspense,{fallback:null,children:(0,O.jsx)(v.j3,{})})]})]})}},933:function(n,e,t){t.d(e,{$w:function(){return f},Df:function(){return h},OQ:function(){return l},Pg:function(){return d},Xj:function(){return m}});var r=t(413),c=t(861),a=t(757),o=t.n(a),i=t(44),u="https://api.themoviedb.org/3/",s="movie/",p={api_key:"70dd3cfa80de1915d6c85a48e09c15b1",language:"en-US"},h=function(){var n=(0,c.Z)(o().mark((function n(){var e,t,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u).concat("trending/movie/day"),t={params:(0,r.Z)((0,r.Z)({},p),{},{page:1})},n.prev=2,n.next=5,i.ZP.get(e,t);case 5:return c=n.sent,n.abrupt("return",c.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u).concat("search/movie"),c={params:(0,r.Z)((0,r.Z)({},p),{},{page:1,query:e})},n.prev=2,n.next=5,i.ZP.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u).concat(s).concat(e),c={params:(0,r.Z)({},p)},n.prev=2,n.next=5,i.ZP.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u).concat(s).concat(e).concat("/credits"),c={params:(0,r.Z)({},p)},n.prev=2,n.next=5,i.ZP.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data.cast);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,c.Z)(o().mark((function n(e){var t,c,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u).concat(s).concat(e).concat("/reviews"),c={params:(0,r.Z)((0,r.Z)({},p),{},{page:1})},n.prev=2,n.next=5,i.ZP.get(t,c);case 5:return a=n.sent,n.abrupt("return",a.data.results);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=742.76756d0e.chunk.js.map