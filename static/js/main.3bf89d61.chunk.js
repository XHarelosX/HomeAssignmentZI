(this["webpackJsonpstar-wars-ui-api"]=this["webpackJsonpstar-wars-ui-api"]||[]).push([[0],{10:function(e,t,i){e.exports={divConteiner:"FavortieMovies_divConteiner__21Zq5",link:"FavortieMovies_link__3wPD0",imgContainer:"FavortieMovies_imgContainer__1OPVY",moviesUl:"FavortieMovies_moviesUl__34B4A",title:"FavortieMovies_title__16beD",li:"FavortieMovies_li__WYxlS",noMovieFoundMsg:"FavortieMovies_noMovieFoundMsg__1rVpa",clearBtn:"FavortieMovies_clearBtn__j7f1s"}},15:function(e,t,i){e.exports={formContainer:"LoginForm_formContainer__2Mjx7",form:"LoginForm_form__1qqHA",charMsg:"LoginForm_charMsg__faK4Z",invalidInput:"LoginForm_invalidInput__2RXJ7",divContainer:"LoginForm_divContainer__24I9T"}},16:function(e,t,i){e.exports={movieLi:"MovieItem_movieLi__wRcTN",movieTitleAndStar:"MovieItem_movieTitleAndStar__1ALIg",starIcon:"MovieItem_starIcon__3hw0d",img:"MovieItem_img__zF5_y"}},17:function(e,t,i){e.exports={liMsg:"UserPage_liMsg__15olo",divLink:"UserPage_divLink__73Ehf",link:"UserPage_link__3Zo6T"}},23:function(e,t,i){e.exports={divContainer:"HomePage_divContainer__1EZX1",login:"HomePage_login__2d5h4"}},24:function(e,t,i){e.exports={header:"Header_header__23kqC",logoutButton:"Header_logoutButton__34qFD"}},26:function(e,t,i){e.exports={divUlContainer:"MovieList_divUlContainer__-e353",moviesUl:"MovieList_moviesUl__15LBL"}},31:function(e,t,i){e.exports={starIcon:"StarIcon_starIcon__2lHKK"}},37:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i.n(n),a=i(28),c=i.n(a),s=(i(37),i(2)),r=i(7),l=i(11),d={value:"",isTouched:!1};function v(e,t){return"INPUT"===t.type?{value:t.value,isTouched:e.isTouched}:"BLUR"===t.type?Object(l.a)(Object(l.a)({},e),{},{isTouched:!0}):e}var u=function(e){var t=Object(n.useReducer)(v,d),i=Object(r.a)(t,2),o=i[0],a=i[1],c=e(o.value),s=!c&&o.isTouched;return{value:o.value,isValid:c,hasError:s,valueChangeHandler:function(e){a({type:"INPUT",value:e.target.value})},inputBlurHandler:function(e){a({type:"BLUR",value:e.target.value})}}},j=i(0),m=o.a.createContext({token:"",isLoggedIn:!1,login:function(){},logout:function(){}}),b=function(e){var t=e.children,i=Object(n.useState)(""),o=Object(r.a)(i,2),a=o[0],c=o[1],s={token:a,isLoggedIn:!!a,login:function(e){c(e)},logout:function(){c("")}};return Object(j.jsx)(m.Provider,{value:s,children:t})},g=m,h=function(e){return e.trim().length>3},f=i(15),O=i.n(f),_=function(){var e=Object(s.g)(),t=Object(n.useContext)(g),i=u(h),o=i.value,a=i.isValid,c=i.hasError,r=i.valueChangeHandler,l=i.inputBlurHandler,d=function(i){i.preventDefault(),t.login(o);var n=function(e){var t=new Date;return t.setTime(t.getTime()+60*e*1e3),t.toUTCString()}(30);document.cookie="".concat(o,"=").concat(o,"; expires=").concat(n,"; path=/"),e.push("./userpage")},v=o.length&&c?Object(j.jsx)("div",{className:O.a.charMsg,children:"At list 4 characters"}):null,m=o&&c?O.a.invalidInput:"";return Object(j.jsx)("div",{className:O.a.formContainer,children:Object(j.jsxs)("form",{className:O.a.form,onSubmit:d,children:[Object(j.jsx)("div",{children:"Please enter your username"}),Object(j.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(j.jsx)("input",{className:m,type:"text",id:"username",value:o,onChange:r,onBlur:l}),v,Object(j.jsx)("button",{disabled:!a,onClick:d,children:"Continue"})]})})},x=i(9),p=i(23),M=i.n(p),C=function(){var e=Object(s.g)(),t=Object(n.useContext)(g),i=t.isLoggedIn?Object(j.jsx)("div",{children:"Logging in..."}):Object(j.jsx)(x.b,{to:"/login",className:M.a.login,children:"Please Log in"});return Object(n.useEffect)((function(){var i=document.cookie.split("=")[1];i&&(t.login(i),e.push("/userpage"))}),[t,e]),Object(j.jsxs)("div",{className:M.a.divContainer,children:[Object(j.jsx)("p",{children:"Welcome to StarWars UI API!"}),Object(j.jsx)("p",{children:"Simple App For All the Star Wars Information"}),Object(j.jsx)("p",{children:"based on swapi.dev API."}),Object(j.jsx)("div",{children:i})]})},I=i(24),S=i.n(I),L=function(e){var t=e.logoutBtnHandler,i=Object(n.useContext)(g).isLoggedIn;return Object(j.jsxs)("header",{className:S.a.header,children:[Object(j.jsx)("div",{children:"Star Wars UI API"}),i&&Object(j.jsx)("button",{className:S.a.logoutButton,onClick:t,children:"Logout"})]})},N=i(25),k=i.n(N),F=i(30),T=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),i=t[0],o=t[1],a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],l=c[1];return{isLoading:i,error:s,sendRequest:Object(n.useCallback)(function(){var e=Object(F.a)(k.a.mark((function e(t,i){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),l(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,n.json();case 10:a=e.sent,i(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),l(e.t0.message||"Something went wrong!");case 17:o(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,i){return e.apply(this,arguments)}}(),[])}},w=i(6),y=i.n(w),P=i(32),A=o.a.createContext({selectedMovieToShow:null,favoritesMovies:[],setSelectedMovieHandler:function(){},setFavoriteMoviesHandler:function(){},setFavoriteMoviesFromLocalStorage:function(){},clearFavoriteMovies:function(){}}),H=function(e){var t=e.children,i=Object(n.useContext)(g),o=Object(n.useState)(null),a=Object(r.a)(o,2),c=a[0],s=a[1],d=Object(n.useState)(null),v=Object(r.a)(d,2),u=v[0],m=v[1],b={favoritesMovies:u,selectedMovieToShow:c,setSelectedMovieHandler:function(e){s(e)},setFavoriteMoviesHandler:function(e){if(u&&u.find((function(t){return t.movieId===e.episode_id})))return console.log("Already in Favorites");var t={movieId:e.episode_id,movieTitle:e.title,movieReleaseDate:e.release_date,movieDirector:e.director,movieProducer:e.producer,movieOpeningCrawl:e.opening_crawl};m((function(e){return e?[].concat(Object(P.a)(e),[t]):[t]}))},setFavoriteMoviesFromLocalStorage:function(){var e=localStorage.getItem("favoriteMovies=".concat(i.token));if(e){var t=JSON.parse(e),n=Object.entries(t).map((function(e){return e[1]}));m(n)}},clearFavoriteMovies:function(){localStorage.removeItem("favoriteMovies=".concat(i.token)),m(null)}};return Object(n.useEffect)((function(){if(u){var e=JSON.stringify(Object(l.a)({},u));localStorage.setItem("favoriteMovies=".concat(i.token),e)}else;}),[i.token,u]),Object(j.jsx)(A.Provider,{value:b,children:t})},U=A,B=function(){var e=Object(n.useContext)(U).selectedMovieToShow;return Object(j.jsx)("div",{className:y.a.divConteiner,children:null===e?Object(j.jsx)("p",{className:y.a.noSelectedMovieMsg,children:"Please Select Movie."}):Object(j.jsxs)("section",{className:y.a.section,children:[Object(j.jsxs)("div",{className:y.a.divImgAndTitle,children:[Object(j.jsx)("p",{className:y.a.movieTitle,children:e.title}),Object(j.jsx)("img",{className:y.a.imgContainer,src:"".concat("/HomeAssignmentZI","/Images/StarWarsEpisode").concat(e.episode_id,".jpg"),alt:"Movie Poster"})]}),Object(j.jsxs)("div",{className:y.a.informationLayout,children:[Object(j.jsxs)("div",{className:y.a.movieDetails,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:y.a.spanCategory,children:"Release date: "}),e.release_date]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:y.a.spanCategory,children:"Director: "}),e.director]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:y.a.spanCategory,children:"Producer: "}),e.producer]})]}),Object(j.jsx)("div",{className:y.a.openingText,children:Object(j.jsx)("p",{children:e.opening_crawl})})]})]})})},E=i(31),D=i.n(E),R=function(){return Object(j.jsx)("svg",{className:D.a.starIcon,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 117.1",children:Object(j.jsx)("path",{d:"M64.42 2l15.71 36.7L120 42.26a3.2 3.2 0 011.82 5.62l-30.18 26.3 8.9 39a3.19 3.19 0 01-2.42 3.82 3.27 3.27 0 01-2.46-.46L61.41 96.1l-34.34 20.54a3.18 3.18 0 01-4.38-1.09 3.14 3.14 0 01-.37-2.38l8.91-39L1.09 47.88a3.24 3.24 0 01-.32-4.52 3.32 3.32 0 012.29-1l39.72-3.56L58.49 2a3.24 3.24 0 015.93 0z",fill:"#ffd401"})})},W=i(16),q=i.n(W),J=function(e){var t=e.DisplayMovieInfoOnClick,i=e.AddMovieToFavoritesOnClick,n=e.children,o=e.id,a=e.img;return Object(j.jsxs)("li",{className:q.a.movieLi,children:[Object(j.jsxs)("div",{className:q.a.movieTitleAndStar,children:[Object(j.jsx)("div",{onClick:t.bind(null,o),children:n}),Object(j.jsx)("div",{className:q.a.starIcon,onClick:i.bind(null,o),children:Object(j.jsx)(R,{})})]}),Object(j.jsx)("img",{onClick:t.bind(null,o),className:q.a.img,src:a,alt:"movie Poster"})]})},Z=i(26),V=i.n(Z),G=function(e){var t=e.movies,i=Object(n.useContext)(U),o=function(e){var n=t.filter((function(t){return t.episode_id===e}));i.setSelectedMovieHandler(Object(l.a)({},n[0]))},a=function(e){var n=t.filter((function(t){return t.episode_id===e}));i.favoritesMovies&&i.favoritesMovies.includes(n[0].title)||i.setFavoriteMoviesHandler(n[0])},c=t.map((function(e){return Object(j.jsx)(J,{id:e.episode_id,img:"".concat("/HomeAssignmentZI","/Images/StarWarsEpisode").concat(e.episode_id,".jpg"),DisplayMovieInfoOnClick:o,AddMovieToFavoritesOnClick:a,children:e.title},e.episode_id)}));return Object(n.useEffect)((function(){i.setFavoriteMoviesFromLocalStorage()}),[]),Object(j.jsxs)("div",{className:V.a.divUlContainer,children:[Object(j.jsx)("p",{children:"Click on the movie more information."}),Object(j.jsx)("ul",{className:V.a.moviesUl,children:c})]})},K=i(17),X=i.n(K),Y=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),i=t[0],o=t[1],a=T(),c=a.isLoading,s=a.error,l=a.sendRequest,d=function(e){try{var t=e.results.sort((function(e,t){return e.episode_id-t.episode_id}));o(t)}catch(i){console.error(i)}},v=c?Object(j.jsx)("li",{className:X.a.liMsg,children:"Loading Movies..."}):s?Object(j.jsx)("li",{className:X.a.liMsg,children:"Falied to get movies..."}):Object(j.jsx)(G,{movies:i});return Object(n.useEffect)((function(){document.cookie.split("=")[1]&&l({url:"https://swapi.dev/api/films/"},d)}),[l]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:X.a.divLink,children:Object(j.jsx)(x.b,{to:"/favorites",className:X.a.link,children:"Favorite movies page"})}),v,Object(j.jsx)(B,{})]})},z=i(10),Q=i.n(z),$=function(){var e=Object(n.useContext)(U),t=e.favoritesMovies,i=t?t.map((function(e){return Object(j.jsxs)("li",{className:Q.a.li,children:[Object(j.jsx)("div",{className:Q.a.title,children:e.movieTitle}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:Q.a.imgContainer,src:"".concat("/HomeAssignmentZI","/Images/StarWarsEpisode").concat(e.movieId,".jpg"),alt:"Movie Poster"})})]},e.movieId)})):Object(j.jsx)("p",{className:Q.a.noMovieFoundMsg,children:"Click on the yellow star in the movile list to add movies"});return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:Q.a.divConteiner,children:[Object(j.jsx)(x.b,{to:"/userpage",className:Q.a.link,children:"Movie list page"}),Object(j.jsx)("button",{className:Q.a.clearBtn,onClick:e.clearFavoriteMovies,children:"Clear Favorite"})]}),Object(j.jsx)("ul",{className:Q.a.moviesUl,children:i})]})};var ee=function(){var e=Object(n.useContext)(g),t=Object(s.g)();return Object(n.useEffect)((function(){document.cookie.split("=")[1]&&(e.isLoggedIn=!0)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{logoutBtnHandler:function(){document.cookie=document.cookie.split("=")[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/",localStorage.removeItem("favoriteMovies=".concat(e.token)),e.logout(),t.replace("/home")}}),Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{exact:!0,path:"/home",component:C}),Object(j.jsx)(s.b,{exact:!0,path:"/login",component:_}),e.isLoggedIn?Object(j.jsxs)(H,{children:[Object(j.jsx)(s.b,{exact:!0,path:"/favorites",children:Object(j.jsx)($,{})}),Object(j.jsx)(s.b,{exact:!0,path:"/userpage",children:Object(j.jsx)(Y,{})})]}):Object(j.jsx)(s.a,{to:"/home"}),Object(j.jsx)(s.b,{path:"*",children:Object(j.jsx)(s.a,{to:"/home"})})]})]})},te=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,46)).then((function(t){var i=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),o(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)(ee,{})})})}),document.getElementById("root")),te()},6:function(e,t,i){e.exports={divConteiner:"MovieInfoSection_divConteiner__LAW0a",noSelectedMovieMsg:"MovieInfoSection_noSelectedMovieMsg__sOjVg",movieTitle:"MovieInfoSection_movieTitle__2EMVE",informationLayout:"MovieInfoSection_informationLayout__apGYS",divImgAndTitle:"MovieInfoSection_divImgAndTitle__2ZE9f",imgContainer:"MovieInfoSection_imgContainer__3JHaA",movieDetails:"MovieInfoSection_movieDetails__2DhDl",spanCategory:"MovieInfoSection_spanCategory__6BDG1",openingText:"MovieInfoSection_openingText__necsX",section:"MovieInfoSection_section__1LCUk"}}},[[45,1,2]]]);
//# sourceMappingURL=main.3bf89d61.chunk.js.map