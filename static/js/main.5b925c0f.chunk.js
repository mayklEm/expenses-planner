(this["webpackJsonpexpense-planner"]=this["webpackJsonpexpense-planner"]||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(86),c=a.n(o),s=(a(97),a(52)),l=a(10),u=a(5),i=a(6),m=a(55),d=a(22);function f(){var e=Object(m.a)(["\n  fragment EntryData on Entry {\n    _id\n    title\n    type\n    amount\n    is_recurring\n    date\n  }\n  \n  query GetAllEntries {\n    entries (\n      query: { is_recurring: false }\n      sortBy: DATE_ASC\n    ) {...EntryData}\n    \n    recurringEntries: entries (\n      query: { is_recurring: true }\n    ) {...EntryData}\n  }\n"]);return f=function(){return e},e}var p=Object(d.gql)(f()),b=a(48),g=a.n(b),v=function(e,t,a){var n=e.filter((function(e){return g()(e.date).startOf("month").isSame(a.startOf("month"))})),r=t.map((function(e){var t=g()(e.date).month(a.get("month")).year(a.get("year")).toISOString();return Object(u.a)(Object(u.a)({},e),{},{date:t})}));return h(n.concat(r))},h=function(e){return e.sort((function(e,t){return e.date>t.date?1:e.date<t.date?-1:0}))},E=Object(l.g)((function(e){var t=Object(n.useState)(1e4),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(4),l=Object(i.a)(s,2),u=l[0],m=l[1],f=Object(n.useState)([]),b=Object(i.a)(f,2),h=b[0],E=b[1],x=Object(n.useState)([]),y=Object(i.a)(x,2),w=y[0],O=y[1],j=Object(n.useState)([]),N=Object(i.a)(j,2),k=N[0],S=N[1],C=o,I=Object(d.useLazyQuery)(p,{onCompleted:function(e){console.log("completed with data:",e),E(e.entries),O(e.recurringEntries)},onError:function(e){console.log(e)}}),A=Object(i.a)(I,2),M=A[0],_=A[1];_.loading,_.error,_.data;return Object(n.useEffect)((function(){M()}),[]),Object(n.useEffect)((function(){for(var e=[],t=0;t<u;t++)e.push(g()().add(t,"month").startOf("month"));S(e)}),[u]),r.a.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-xs md:text-sm"},r.a.createElement("div",{className:"max-w-2xl w-full"},r.a.createElement("div",{className:"grid grid-cols-2 gap-3"},r.a.createElement("div",{className:"col-span-1"},r.a.createElement("label",{htmlFor:"balance",className:"block text-sm font-medium leading-5 text-gray-700"},"Initial balance"),r.a.createElement("input",{name:"balance",id:"balance",defaultValue:o,type:"number",onChange:function(e){c(parseInt(e.target.value)||o)},className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("label",{htmlFor:"months",className:"block text-sm font-medium leading-5 text-gray-700"},"Number of months"),r.a.createElement("input",{name:"months",id:"months",defaultValue:u,min:"1",type:"number",onChange:function(e){m(parseInt(e.target.value)||u)},className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}))),k.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.format("MM-YYYY")},r.a.createElement("div",{className:"mt-8"},e.format("MMMM YYYY")),r.a.createElement("div",{className:"grid grid-cols-12 gap-1"},v(h,w,e).map((function(e){return C="income"===e.type?C+e.amount:C-e.amount,r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement("div",{className:"col-span-2"},g()(e.date).format("D.M.")),r.a.createElement("div",{className:"col-span-6"},e.title),r.a.createElement("div",{className:"col-span-2"},e.amount),r.a.createElement("div",{className:"col-span-2"},C))}))))}))))})),x=a(91),y=a(4),w=a.n(y),O=a(11),j=a(47),N=r.a.createContext(),k=function(){var e=r.a.useContext(N);if(!e)throw new Error("You must call useRealmApp() inside of a <RealmAppProvider />");return e},S=function(e){var t=e.appId,a=e.children,n=r.a.useState(new j.a(t)),o=Object(i.a)(n,2),c=o[0],s=o[1];r.a.useEffect((function(){s(new j.a(t))}),[t]);var l=r.a.useState(c.currentUser),m=Object(i.a)(l,2),d=m[0],f=m[1];function p(){return(p=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.logIn(t);case 2:f(c.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=c.currentUser)||void 0===t?void 0:t.logOut();case 2:f(c.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=Object(u.a)(Object(u.a)({},c),{},{currentUser:d,logIn:function(e){return p.apply(this,arguments)},logOut:function(){return b.apply(this,arguments)},forceLogout:function(){d&&(d.accessToken=null,d.refreshToken=null,f(null))}});return r.a.createElement(N.Provider,{value:g},a)};function C(){var e=k(),t=r.a.useState("login"),a=Object(i.a)(t,2),n=a[0],o=(a[1],r.a.useState("")),c=Object(i.a)(o,2),s=c[0],m=c[1],d=r.a.useState(""),f=Object(i.a)(d,2),p=f[0],b=f[1],g=r.a.useState({}),v=Object(i.a)(g,2),h=(v[0],v[1]);r.a.useEffect((function(){m(""),b(""),h({})}),[n]);var E=r.a.useState(!1),x=Object(i.a)(E,2),y=(x[0],x[1]),N=function(){var t=Object(O.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),h((function(e){return Object(u.a)(Object(u.a)({},e),{},{password:null})})),t.prev=2,t.next=5,e.logIn(j.b.emailPassword(s,p));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),I(t.t0,h);case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(){return t.apply(this,arguments)}}();return e.currentUser?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"max-w-md w-full"},r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},"Sign in")),r.a.createElement("form",{className:"mt-8"},r.a.createElement("div",{className:"rounded-md shadow-sm"},r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Email address",name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Email address",onChange:function(e){h((function(e){return Object(u.a)(Object(u.a)({},e),{},{email:null})})),m(e.target.value)},value:s})),r.a.createElement("div",{className:"-mt-px"},r.a.createElement("input",{"aria-label":"Password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Password",onChange:function(e){b(e.target.value)},value:p}))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",onClick:function(e){e.preventDefault(),N()}},r.a.createElement("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3"},r.a.createElement("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}))),"Sign in")))))}function I(e,t){var a=function(e){var t,a=e.message.split(":"),n=a[a.length-1].trimStart();if(!n)return{status:"",message:""};var r=Object(x.a)(/(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(status ([0-9][0-9][0-9])/,{message:1,status:2}),o=n.match(r),c=null!==(t=null===o||void 0===o?void 0:o.groups)&&void 0!==t?t:{},s=c.status,l=c.message;return{status:s,message:l}}(e),n=a.status;switch(a.message||n){case"invalid username":t((function(e){return Object(u.a)(Object(u.a)({},e),{},{email:"Invalid email address."})}));break;case"invalid username/password":case"invalid password":case"401":t((function(e){return Object(u.a)(Object(u.a)({},e),{},{password:"Incorrect password."})}));break;case"name already in use":case"409":t((function(e){return Object(u.a)(Object(u.a)({},e),{},{email:"Email is already registered."})}));break;case"password must be between 6 and 128 characters":case"400":t((function(e){return Object(u.a)(Object(u.a)({},e),{},{password:"Password must be between 6 and 128 characters."})}))}}var A=r.a.createContext(),M=function(e){var t=e.children,a=Object(l.f)(),n=r.a.useState(),o=Object(i.a)(n,2),c=o[0],s=o[1],u=k();r.a.useEffect((function(){return a.listen((function(){return s(void 0)}))}),[]),r.a.useEffect((function(){401===c&&u.forceLogout()}),[c]);return r.a.createElement(A.Provider,{value:{setErrorStatusCode:s}},t)},_=function(e,t){var a=new d.HttpLink({uri:"https://realm.mongodb.com/api/client/v2.0/app/".concat(e.id,"/graphql"),fetch:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var a=Object(O.a)(w.a.mark((function a(n,r){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.currentUser){a.next=2;break}throw new Error("Must be logged in to use the GraphQL API");case 2:return a.next=4,e.currentUser.refreshCustomData().catch((function(e){t(401)}));case 4:return r.headers.Authorization="Bearer ".concat(e.currentUser.accessToken),a.abrupt("return",fetch(n,r));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}),n=new d.InMemoryCache;return new d.ApolloClient({link:a,cache:n})};function D(e){var t=e.children,a=k(),o=Object(n.useContext)(A).setErrorStatusCode,c=r.a.useState(_(a,o)),s=Object(i.a)(c,2),l=s[0],u=s[1];return r.a.useEffect((function(){u(_(a,o))}),[a]),r.a.createElement(d.ApolloProvider,{client:l},t)}a(113);var U=a(39),F=function(e){var t=e.component,a=Object(U.a)(e,["component"]),n=k();return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return n.currentUser?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},P=a(19);function Y(){var e=Object(m.a)(["\n  mutation AddEntry($data: EntryInsertInput!){\n    insertOneEntry(data: $data) {\n      _id\n      title\n    }\n  }\n"]);return Y=function(){return e},e}var q=Object(d.gql)(Y()),T=Object(l.g)((function(e){var t=k(),a=Object(d.useMutation)(q),o=Object(i.a)(a,2),c=o[0],s=(o[1].data,Object(n.useState)({title:"",amount:0,type:"expense",date:new Date,is_recurring:!1,user:{link:t.currentUser._id}})),l=Object(i.a)(s,2),m=l[0],f=l[1],p=function(e){var t,a=e.target,n=a.name;t=a instanceof HTMLInputElement&&"checkbox"===a.type?a.checked:"date"===a.type?new Date(a.value):a.value,f(Object(u.a)(Object(u.a)({},m),{},Object(P.a)({},n,t)))};return r.a.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"max-w-md w-full"},r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},"Add entry")),r.a.createElement("form",{className:"mt-8"},r.a.createElement("div",{className:"grid grid-cols-2 gap-3"},r.a.createElement("div",{className:"col-span-2"},r.a.createElement("input",{name:"title",value:m.title,onChange:p,placeholder:"Title",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-2"},r.a.createElement("input",{name:"date",value:m.date.toISOString().split("T")[0],onChange:p,type:"date",placeholder:"Date",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("input",{name:"amount",value:m.amount,onChange:p,type:"number",min:"0",placeholder:"Amount",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("select",{name:"type",value:m.type,onChange:p,placeholder:"Type",className:"mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"},r.a.createElement("option",{value:"expense"},"Expense"),r.a.createElement("option",{value:"income"},"Income"))),r.a.createElement("div",{className:"col-span-2 flex items-start"},r.a.createElement("div",{className:"items-center h-5"},r.a.createElement("input",{onChange:p,checked:m.is_recurring,id:"is_recurring",name:"is_recurring",type:"checkbox",className:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"})),r.a.createElement("div",{className:"ml-3 text-sm leading-5"},r.a.createElement("label",{htmlFor:"is_recurring",className:"font-medium text-gray-700"},"Is recurring")))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),c({variables:{data:m}}).then((function(e){console.log(e)}))},type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},"Add")))))}));var z=function(){return r.a.createElement(S,{appId:"expenses-planner-react-tcjrv"},r.a.createElement(s.a,null,r.a.createElement(M,null,r.a.createElement(D,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,{exact:!0,path:"/",component:E}),r.a.createElement(F,{exact:!0,path:"/entries/add",component:T}),r.a.createElement(l.b,{exact:!0,path:"/login",component:C}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(115)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.5b925c0f.chunk.js.map