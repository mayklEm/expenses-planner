(this["webpackJsonpexpense-planner"]=this["webpackJsonpexpense-planner"]||[]).push([[0],{101:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(88),s=a.n(o),c=(a(101),a(55)),l=a(11),i=a(5),u=a(6),m=a(19),d=a(4),p=a.n(d),f=a(12),b=a(49),g=r.a.createContext(),v=function(){var e=r.a.useContext(g);if(!e)throw new Error("You must call useRealmApp() inside of a <RealmAppProvider />");return e},h=function(e){var t=e.appId,a=e.children,n=r.a.useState(new b.a(t)),o=Object(u.a)(n,2),s=o[0],c=o[1];r.a.useEffect((function(){c(new b.a(t))}),[t]);var l=r.a.useState(s.currentUser),m=Object(u.a)(l,2),d=m[0],v=m[1];function h(){return(h=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.logIn(t);case 2:v(s.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=s.currentUser)||void 0===t?void 0:t.logOut();case 2:v(s.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(i.a)(Object(i.a)({},s),{},{currentUser:d,logIn:function(e){return h.apply(this,arguments)},logOut:function(){return x.apply(this,arguments)},forceLogout:function(){d&&(d.accessToken=null,d.refreshToken=null,v(null))}});return r.a.createElement(g.Provider,{value:y},a)},x=a(14),y=a(32);function E(){var e=Object(y.a)(["\n  mutation DeleteEntry($query: EntryQueryInput!) {\n    deleteOneEntry(query: $query) {\n      _id\n      title\n    }\n  }\n"]);return E=function(){return e},e}function w(){var e=Object(y.a)(["\n  mutation AddEntry($data: EntryInsertInput!) {\n    insertOneEntry(data: $data) {\n      _id\n      title\n    }\n  }\n"]);return w=function(){return e},e}var j=Object(x.gql)(w()),O=Object(x.gql)(E()),N=function(e){var t=v(),a=Object(x.useMutation)(j),o=Object(u.a)(a,2),s=o[0],c=(o[1].data,Object(n.useState)({title:"",amount:0,type:"expense",date:new Date,is_recurring:!1,user:{link:t.currentUser._id}})),l=Object(u.a)(c,2),d=l[0],p=l[1],f=function(e){var t,a=e.target,n=a.name;t=a instanceof HTMLInputElement&&"checkbox"===a.type?a.checked:"date"===a.type?new Date(a.value):a.value,p(Object(i.a)(Object(i.a)({},d),{},Object(m.a)({},n,t)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fixed z-10 inset-0 overflow-y-auto"},r.a.createElement("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},r.a.createElement("div",{className:"fixed inset-0 transition-opacity"},r.a.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})),r.a.createElement("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen"}),"\u200b",r.a.createElement("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},r.a.createElement("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},r.a.createElement("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},r.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline"},"Deactivate account"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("form",{className:"mt-8"},r.a.createElement("div",{className:"grid grid-cols-2 gap-3"},r.a.createElement("div",{className:"col-span-2"},r.a.createElement("input",{name:"title",value:d.title,onChange:f,placeholder:"Title",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-2"},r.a.createElement("input",{name:"date",value:d.date.toISOString().split("T")[0],onChange:f,type:"date",placeholder:"Date",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("input",{name:"amount",value:d.amount,onChange:f,type:"number",min:"0",placeholder:"Amount",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("select",{name:"type",value:d.type,onChange:f,placeholder:"Type",className:"mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"},r.a.createElement("option",{value:"expense"},"Expense"),r.a.createElement("option",{value:"income"},"Income"))),r.a.createElement("div",{className:"col-span-2 flex items-start"},r.a.createElement("div",{className:"items-center h-5"},r.a.createElement("input",{onChange:f,checked:d.is_recurring,id:"is_recurring",name:"is_recurring",type:"checkbox",className:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"})),r.a.createElement("div",{className:"ml-3 text-sm leading-5"},r.a.createElement("label",{htmlFor:"is_recurring",className:"font-medium text-gray-700"},"Is recurring")))))))),r.a.createElement("div",{className:"bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},r.a.createElement("span",{className:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},r.a.createElement("button",{type:"button",onClick:function(t){t.preventDefault(),s({variables:{data:d}}).then((function(t){console.log(t),e.setShowModal(!1)}))},className:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Add")),r.a.createElement("span",{className:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},r.a.createElement("button",{onClick:e.setShowModal(!1),type:"button",className:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Cancel")))))))};function k(){var e=Object(y.a)(["\n  fragment EntryData on Entry {\n    _id\n    title\n    type\n    amount\n    is_recurring\n    date\n  }\n  \n  query GetAllEntries {\n    entries (\n      query: { is_recurring: false }\n      sortBy: DATE_ASC\n    ) {...EntryData}\n    \n    recurringEntries: entries (\n      query: { is_recurring: true }\n    ) {...EntryData}\n  }\n"]);return k=function(){return e},e}var S=Object(x.gql)(k()),C=a(36),I=a.n(C),_=a(43),A=a(70),q=a(92),M=a(93);function D(){var e=Object(y.a)(["\n  mutation UpdateApplication($query: ApplicationQueryInput, $set: ApplicationUpdateInput!) {\n    updateOneApplication(query: $query, set: $set) {\n      _id\n      balance\n    }\n  }\n"]);return D=function(){return e},e}function Y(){var e=Object(y.a)(["\n  query GetApplication($query: ApplicationQueryInput) {\n    application (\n      query: $query\n    ) {\n      balance\n    }\n  }\n"]);return Y=function(){return e},e}var U=Object(x.gql)(Y()),F=Object(x.gql)(D());_.b.add(q.a),_.b.add(M.a);var T=a(117),$=function(e,t,a){var n=e.filter((function(e){return I()(e.date).startOf("month").isSame(a.startOf("month"))})),r=t.map((function(e){var t=I()(e.date).month(a.get("month")).year(a.get("year")).toISOString();return Object(i.a)(Object(i.a)({},e),{},{date:t})}));return P(n.concat(r).filter((function(e){return I()(e.date).isAfter(I()())})))},P=function(e){return e.sort((function(e,t){return e.date>t.date?1:e.date<t.date?-1:0}))},z=Object(l.g)((function(e){var t=Object(n.useState)(1e4),a=Object(u.a)(t,2),o=a[0],s=a[1],c=Object(n.useState)(4),l=Object(u.a)(c,2),i=l[0],m=l[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),f=p[0],b=p[1],g=Object(n.useState)([]),h=Object(u.a)(g,2),y=h[0],E=h[1],w=Object(n.useState)([]),j=Object(u.a)(w,2),k=j[0],C=j[1],_=Object(x.useMutation)(O),q=Object(u.a)(_,1)[0],M=Object(x.useMutation)(F),D=Object(u.a)(M,1)[0],Y=Object(n.useState)(""),P=Object(u.a)(Y,2),z=P[0],L=P[1],Q=v(),B=r.a.useRef(document.createElement("input")),H=Object(n.useState)(!1),R=Object(u.a)(H,2),V=R[0],G=R[1],J=o,W=Object(x.useLazyQuery)(S,{onCompleted:function(e){console.log("completed with data:",e),b(e.entries),E(e.recurringEntries)},onError:function(e){console.log(e)}}),K=Object(u.a)(W,2),X=K[0],Z=K[1],ee=(Z.loading,Z.error,Z.data,Object(x.useLazyQuery)(U,{variables:{query:{_id:Q.currentUser.customData.application}},onCompleted:function(e){s(e.application.balance),B.current.value=e.application.balance},onError:function(e){console.log(e)}})),te=Object(u.a)(ee,1)[0];return Object(n.useEffect)((function(){X(),te()}),[]),Object(n.useEffect)((function(){for(var e=[],t=0;t<i;t++)e.push(I()().add(t,"month").startOf("month"));C(e)}),[i]),r.a.createElement(r.a.Fragment,null,V&&r.a.createElement(N,{setShowModal:G}),r.a.createElement("div",{className:"min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-xs md:text-sm"},r.a.createElement("div",{className:"max-w-2xl w-full"},r.a.createElement("div",{className:"grid grid-cols-2 gap-3"},r.a.createElement("div",{className:"col-span-1"},r.a.createElement("label",{htmlFor:"balance",className:"block text-sm font-medium leading-5 text-gray-700"},"Initial balance"),r.a.createElement("input",{ref:B,name:"balance",id:"balance",defaultValue:o,type:"number",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("label",{htmlFor:"months",className:"block text-sm font-medium leading-5 text-gray-700"},"Number of months"),r.a.createElement("input",{name:"months",id:"months",defaultValue:i,min:"1",type:"number",onChange:function(e){m(parseInt(e.target.value)||i)},className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-2"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),s(parseInt(B.current.value)),D({variables:{query:{_id:Q.currentUser.customData.application},set:{balance:B.current.value}}}).then((function(e){console.log(e)}))},type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},"Set")),r.a.createElement("div",{className:"col-span-2"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),G(!0)},type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},"Add new entry"))),k.map((function(e){return $(f,y,e).length<=0?"":r.a.createElement(r.a.Fragment,{key:e.format("MM-YYYY")},r.a.createElement("div",{className:"mt-8"},e.format("MMMM YYYY")),r.a.createElement("div",{className:"entries-container border rounded divide-y"},$(f,y,e).map((function(t){return J="income"===t.type?J+t.amount:J-t.amount,r.a.createElement("div",{key:t._id,onClick:function(){L("".concat(e.format("MM-YYYY"),":").concat(t._id))},className:"entry p-2"},r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("div",{className:"w-2/12"},I()(t.date).format("D.M.")),r.a.createElement("div",{className:"w-6/12"},t.title),r.a.createElement("div",{className:T("w-2/12","text-right","font-semibold",{"text-red-500":"expense"===t.type,"text-green-500":"income"===t.type})},"expense"===t.type?"-":"+",t.amount),r.a.createElement("div",{className:"w-2/12 text-right font-semibold"},J)),z==="".concat(e.format("MM-YYYY"),":").concat(t._id)&&r.a.createElement("div",{className:"flex justify-end space-x-2 text-xs mt-2"},r.a.createElement("button",{onClick:function(){q({variables:{query:{_id:t._id}}}).then((function(e){console.log(e)}))},className:"border-b border-red-500 text-red-500"},r.a.createElement(A.a,{icon:["far","trash-alt"]})," Delete"),r.a.createElement("button",{className:"border-b border-indigo-500 text-indigo-500"},r.a.createElement(A.a,{icon:["fas","pencil-alt"],className:""})," Edit")))}))))})))))})),L=a(95);function Q(){var e=v(),t=r.a.useState("login"),a=Object(u.a)(t,2),n=a[0],o=(a[1],r.a.useState("")),s=Object(u.a)(o,2),c=s[0],m=s[1],d=r.a.useState(""),g=Object(u.a)(d,2),h=g[0],x=g[1],y=r.a.useState({}),E=Object(u.a)(y,2),w=(E[0],E[1]);r.a.useEffect((function(){m(""),x(""),w({})}),[n]);var j=r.a.useState(!1),O=Object(u.a)(j,2),N=(O[0],O[1]),k=function(){var t=Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),w((function(e){return Object(i.a)(Object(i.a)({},e),{},{password:null})})),t.prev=2,t.next=5,e.logIn(b.b.emailPassword(c,h));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),B(t.t0,w);case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(){return t.apply(this,arguments)}}();return e.currentUser?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"max-w-md w-full"},r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},"Sign in")),r.a.createElement("form",{className:"mt-8"},r.a.createElement("div",{className:"rounded-md shadow-sm"},r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Email address",name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Email address",onChange:function(e){w((function(e){return Object(i.a)(Object(i.a)({},e),{},{email:null})})),m(e.target.value)},value:c})),r.a.createElement("div",{className:"-mt-px"},r.a.createElement("input",{"aria-label":"Password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Password",onChange:function(e){x(e.target.value)},value:h}))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",onClick:function(e){e.preventDefault(),k()}},r.a.createElement("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3"},r.a.createElement("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"}))),"Sign in")))))}function B(e,t){var a=function(e){var t,a=e.message.split(":"),n=a[a.length-1].trimStart();if(!n)return{status:"",message:""};var r=Object(L.a)(/(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(status ([0-9][0-9][0-9])/,{message:1,status:2}),o=n.match(r),s=null!==(t=null===o||void 0===o?void 0:o.groups)&&void 0!==t?t:{},c=s.status,l=s.message;return{status:c,message:l}}(e),n=a.status;switch(a.message||n){case"invalid username":t((function(e){return Object(i.a)(Object(i.a)({},e),{},{email:"Invalid email address."})}));break;case"invalid username/password":case"invalid password":case"401":t((function(e){return Object(i.a)(Object(i.a)({},e),{},{password:"Incorrect password."})}));break;case"name already in use":case"409":t((function(e){return Object(i.a)(Object(i.a)({},e),{},{email:"Email is already registered."})}));break;case"password must be between 6 and 128 characters":case"400":t((function(e){return Object(i.a)(Object(i.a)({},e),{},{password:"Password must be between 6 and 128 characters."})}))}}var H=r.a.createContext(),R=function(e){var t=e.children,a=Object(l.f)(),n=r.a.useState(),o=Object(u.a)(n,2),s=o[0],c=o[1],i=v();r.a.useEffect((function(){return a.listen((function(){return c(void 0)}))}),[]),r.a.useEffect((function(){401===s&&i.forceLogout()}),[s]);return r.a.createElement(H.Provider,{value:{setErrorStatusCode:c}},t)},V=function(e,t){var a=new x.HttpLink({uri:"https://realm.mongodb.com/api/client/v2.0/app/".concat(e.id,"/graphql"),fetch:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var a=Object(f.a)(p.a.mark((function a(n,r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.currentUser){a.next=2;break}throw new Error("Must be logged in to use the GraphQL API");case 2:return a.next=4,e.currentUser.refreshCustomData().catch((function(e){t(401)}));case 4:return r.headers.Authorization="Bearer ".concat(e.currentUser.accessToken),a.abrupt("return",fetch(n,r));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}),n=new x.InMemoryCache;return new x.ApolloClient({link:a,cache:n})};function G(e){var t=e.children,a=v(),o=Object(n.useContext)(H).setErrorStatusCode,s=r.a.useState(V(a,o)),c=Object(u.a)(s,2),l=c[0],i=c[1];return r.a.useEffect((function(){i(V(a,o))}),[a]),r.a.createElement(x.ApolloProvider,{client:l},t)}a(120);var J=a(44),W=function(e){var t=e.component,a=Object(J.a)(e,["component"]),n=v();return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return n.currentUser?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},K=Object(l.g)((function(e){var t=v(),a=Object(x.useMutation)(j),o=Object(u.a)(a,2),s=o[0],c=(o[1].data,Object(n.useState)({title:"",amount:0,type:"expense",date:new Date,is_recurring:!1,user:{link:t.currentUser._id}})),l=Object(u.a)(c,2),d=l[0],p=l[1],f=function(e){var t,a=e.target,n=a.name;t=a instanceof HTMLInputElement&&"checkbox"===a.type?a.checked:"date"===a.type?new Date(a.value):a.value,p(Object(i.a)(Object(i.a)({},d),{},Object(m.a)({},n,t)))};return r.a.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"max-w-md w-full"},r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},"Add entry")),r.a.createElement("form",{className:"mt-8"},r.a.createElement("div",{className:"grid grid-cols-2 gap-3"},r.a.createElement("div",{className:"col-span-2"},r.a.createElement("input",{name:"title",value:d.title,onChange:f,placeholder:"Title",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-2"},r.a.createElement("input",{name:"date",value:d.date.toISOString().split("T")[0],onChange:f,type:"date",placeholder:"Date",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("input",{name:"amount",value:d.amount,onChange:f,type:"number",min:"0",placeholder:"Amount",className:"mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"})),r.a.createElement("div",{className:"col-span-1"},r.a.createElement("select",{name:"type",value:d.type,onChange:f,placeholder:"Type",className:"mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"},r.a.createElement("option",{value:"expense"},"Expense"),r.a.createElement("option",{value:"income"},"Income"))),r.a.createElement("div",{className:"col-span-2 flex items-start"},r.a.createElement("div",{className:"items-center h-5"},r.a.createElement("input",{onChange:f,checked:d.is_recurring,id:"is_recurring",name:"is_recurring",type:"checkbox",className:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"})),r.a.createElement("div",{className:"ml-3 text-sm leading-5"},r.a.createElement("label",{htmlFor:"is_recurring",className:"font-medium text-gray-700"},"Is recurring")))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),s({variables:{data:d}}).then((function(e){console.log(e)}))},type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},"Add")))))}));var X=function(){return r.a.createElement(h,{appId:"expenses-planner-react-tcjrv"},r.a.createElement(c.a,null,r.a.createElement(R,null,r.a.createElement(G,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,{exact:!0,path:"/",component:z}),r.a.createElement(W,{exact:!0,path:"/entries/add",component:K}),r.a.createElement(l.b,{exact:!0,path:"/login",component:Q}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a(121)}},[[96,1,2]]]);
//# sourceMappingURL=main.49b0c494.chunk.js.map