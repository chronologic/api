(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{512:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"create-an-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-an-instance"}},[t._v("#")]),t._v(" Create an instance")]),t._v(" "),e("p",[t._v("We have the API installed, we have an understanding of what will actually be exposed and how the API knows what to expose. So down the rabbit hole we go - let's create an actual API instance, and then take it from there -")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WsProvider "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Construct")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wsProvider "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://poc-3.polkadot.io'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ApiPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wsProvider "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genesisHash"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("We will have some explanation on the ES2015 syntax used next, but just a small note on the above - where other code is included (or just some previous boilerplate is used), you will see "),e("code",[t._v("...")]),t._v(" in most of the examples. This is not due to laziness, but rather just to keep things straight and to the point.")]),t._v(" "),e("h2",{attrs:{id:"es2015-usage-and-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es2015-usage-and-examples"}},[t._v("#")]),t._v(" ES2015 Usage and examples")]),t._v(" "),e("p",[t._v("Before we jump into an explanation of the above example, be aware that in all cases we are using ES2015, including using things like "),e("code",[t._v("async")]),t._v("/"),e("code",[t._v("await")]),t._v(", "),e("code",[t._v("import")]),t._v(" and others. Depending on your environment, this may require some adjustments.")]),t._v(" "),e("p",[t._v("While we are using the "),e("code",[t._v("await")]),t._v(" naked in all examples (this removes boilerplate), it will need to be wrapped in an "),e("code",[t._v("async")]),t._v(" block, for we could warp all samples inside a "),e("code",[t._v("async function main () { ... }")]),t._v(" and then just call "),e("code",[t._v("main()")]),t._v(".")]),t._v(" "),e("p",[t._v("In the case of Node.js you would change the "),e("code",[t._v("import")]),t._v(" into "),e("code",[t._v("require")]),t._v(", i.e.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WsProvider "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("We are basing all our examples on the "),e("router-link",{attrs:{to:"/examples/promise/"}},[t._v("ApiPromise")]),t._v(" version of the API, however there is also an RxJS version available. Since Promises are a part of the ES2015 specification, it covers the greater amount of use and is the one that will be used in 95% of the cases and should be familiar to 100% of all developers. However if you are in an environment where RxJs is recommended or your have a great affinity ot it, you could take a look at the "),e("router-link",{attrs:{to:"/examples/rx/"}},[t._v("RxJS examples")]),t._v(" once you are familiar with the base concepts introduced here.")],1),t._v(" "),e("p",[t._v("For now... just ignore the various flavors and focus on understanding the concepts.")]),t._v(" "),e("h2",{attrs:{id:"providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#providers"}},[t._v("#")]),t._v(" Providers")]),t._v(" "),e("p",[t._v("Focusing on the construction, any API requires a provider and we create one via the "),e("code",[t._v("const wsProvider = new WsProvider(...)")]),t._v(". By default, if none is provided to the API it will construct a default "),e("code",[t._v("WsProvider")]),t._v(" instance to connect to "),e("code",[t._v("ws://127.0.0.1:9944")]),t._v(".")]),t._v(" "),e("p",[t._v("We generally recommend always specifying the endpoint since in most cases we want to connect to an external node and even for local nodes, it is always better being explicit, less magic that can make you wonder in the future.")]),t._v(" "),e("p",[t._v('At this time the only provider type that is fully supported by the API is the WebSocket version. Polkadot/Substrate really comes alive with possibilities once you have access to bi-directional RPCs such as what WebSockets provide. (It is technically possible to have some limited capability via bare-HTTP, but at this point WebSockets is the only fully-operational and supported version - always remember that it is just "upgraded HTTP".)')]),t._v(" "),e("h2",{attrs:{id:"api-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-instance"}},[t._v("#")]),t._v(" API Instance")]),t._v(" "),e("p",[t._v("The API creation is done via the "),e("code",[t._v("ApiPromise.create")]),t._v(" interface which is a shortcut version for calling "),e("code",[t._v("new")]),t._v(" and then waiting until the API is connected. Without the "),e("code",[t._v("async")]),t._v(" syntax, this would be,")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("ApiPromise\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wsProvider "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genesisHash"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("In most cases we would suggest using the "),e("code",[t._v(".create")]),t._v(" shortcut, which really just takes care of the following boilerplate that otherwise needs to be provided -")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the instance")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiPromise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wsProvider "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait until we are ready and connected")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isReady"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genesisHash"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h2",{attrs:{id:"advanced-creation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-creation"}},[t._v("#")]),t._v(" Advanced creation")]),t._v(" "),e("p",[t._v("There are more advanced cases where you would prefer to use the longer version, for instance: if you want to explicitly listen to events emitted, you probably want to attach to the API even before connecting to the chain. All API instances implement an "),e("code",[t._v("EventEmitter")]),t._v(" interface, with "),e("code",[t._v("on")]),t._v(" handlers, which emit "),e("code",[t._v("connected")]),t._v(", "),e("code",[t._v("disconnected")]),t._v(", "),e("code",[t._v("ready")]),t._v(" and "),e("code",[t._v("error")]),t._v(" events, allowing you to listen to events on the transport layer.")]),t._v(" "),e("p",[t._v("In these cases, create via "),e("code",[t._v("new")]),t._v(", attach listeners and then wait for the "),e("code",[t._v("isReady")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"do-something"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#do-something"}},[t._v("#")]),t._v(" Do something")]),t._v(" "),e("p",[t._v("Now that we have the API initialized, the next step would be to start using it to interact and extract data "),e("router-link",{attrs:{to:"/start/api.consts.html"}},[t._v("starting with chain constants")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);