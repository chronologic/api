(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{523:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"type-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-basics"}},[e._v("#")]),e._v(" Type basics")]),e._v(" "),a("p",[e._v("We've touched upon types in most previous sections, i.e. that these are driven by metadata and that they are created and converted to/from automatically by the API. Since they appear in all results, we will divert a bit from the regularly scheduled program in explaining the API interfaces to giving some info on the base types.")]),e._v(" "),a("h2",{attrs:{id:"everything-is-a-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#everything-is-a-type"}},[e._v("#")]),e._v(" Everything is a type")]),e._v(" "),a("p",[e._v("Just to re-iterate from the above. Everything returned by the API is a type and has a consistent interface. This means that a "),a("code",[e._v("Vec<u32>")]),e._v(" (an array of "),a("code",[e._v("u32")]),e._v(" values) as well as a "),a("code",[e._v("Struct")]),e._v(" (an pre-defined object) or an "),a("code",[e._v("Enum")]),e._v(" has the same consistent base interface. Specific types types will have values, based on the type - decorated and available.")]),e._v(" "),a("p",[e._v("As a minimum, anything returned by the API, be it a "),a("code",[e._v("Vec<...>")]),e._v(", "),a("code",[e._v("Option<...>")]),e._v(", "),a("code",[e._v("Struct")]),e._v(" or any normal type will always have the following methods -")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".eq(<other value>)")]),e._v(' - checks for equality against the other value. In all cases, it will accept "like" values, i.e. in the case of a number you can pass a primitive (such as '),a("code",[e._v("1")]),e._v("), a hex value (such as "),a("code",[e._v("0x01")]),e._v(") or even an "),a("code",[e._v("Unit8Array")])]),e._v(" "),a("li",[a("code",[e._v("toHex()")]),e._v(" - returns a hex-base representation of the value, always prefixed by "),a("code",[e._v("0x")])]),e._v(" "),a("li",[a("code",[e._v("toJSON()")]),e._v(" - returns a JSON-like representation of the value, this is generally used when calling "),a("code",[e._v("JSON.stringify(...)")]),e._v(" on the value")]),e._v(" "),a("li",[a("code",[e._v("toString()")]),e._v(" - returns a string representation, in some cases this performs additional encoding, i.e. for "),a("code",[e._v("Address")]),e._v(", "),a("code",[e._v("AccountId")]),e._v(" and "),a("code",[e._v("AccountIndex")]),e._v(" it will encode to the ss58 address")]),e._v(" "),a("li",[a("code",[e._v(".toU8a()")]),e._v(" - returns a "),a("code",[e._v("Uint8Array")]),e._v(" representation of the encoded value (generally exactly as passed to the node, where values are SCALE encoded)")])]),e._v(" "),a("p",[e._v("Additionally, the following getters and utilities are available -")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".isEmpty")]),e._v(" - "),a("code",[e._v("true")]),e._v(" if the value is an all-empty value, i.e. "),a("code",[e._v("0")]),e._v(" in for numbers, all-zero for Arrays (or anything "),a("code",[e._v("Uint8Array")]),e._v("), "),a("code",[e._v("false")]),e._v(" is non-zero")]),e._v(" "),a("li",[a("code",[e._v(".hash")]),e._v(" - a "),a("code",[e._v("Hash")]),e._v(" (once again with all the methods above) that is a "),a("code",[e._v("blake2-256")]),e._v(" representation of the contained value")])]),e._v(" "),a("h2",{attrs:{id:"comparing-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparing-types"}},[e._v("#")]),e._v(" Comparing types")]),e._v(" "),a("p",[e._v("To reiterate the above API, the "),a("code",[e._v(".eq")]),e._v(" method is the preferred means of comparing base types, rather than the JavaScript equality operator ("),a("code",[e._v("===")]),e._v(").")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" metadata "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("rpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getMetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("asV3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This will not work, because `name` is an instance of `Text`, not a string")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// const system = modules.find(m => m.name === 'system');")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This will work, because `Text.eq()` can compare against a string")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" system "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("m")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("eq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'system'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h2",{attrs:{id:"working-with-numbers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-numbers"}},[e._v("#")]),e._v(" Working with numbers")]),e._v(" "),a("p",[e._v("All numbers wrap and extend an instance of "),a("a",{attrs:{href:"https://github.com/indutny/bn.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bn.js"),a("OutboundLink")],1),e._v(". This means that in addition to the interfaces defined above, they have some additional methods -")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".toNumber()")]),e._v(" - a JS number (limited to 2^53 - 1). This does mean that for large values, e.g. "),a("code",[e._v("Balance")]),e._v(" (a "),a("code",[e._v("u128")]),e._v(" extension), this can cause overflows")]),e._v(" "),a("li",[a("code",[e._v(".add(...)")]),e._v(", "),a("code",[e._v(".sub(...)")]),e._v(", ... - all the base methods available on the "),a("code",[e._v("BN")]),e._v(" object")])]),e._v(" "),a("p",[e._v("In cases where a "),a("code",[e._v("Compact")]),e._v(" is returned, i.e. "),a("code",[e._v("Compact<Balance>")]),e._v(", the value is wrapped. This object should be "),a("code",[e._v(".unwrap()")]),e._v("-ed first to gain access to the underlying "),a("code",[e._v("Balance")]),e._v(" object.")]),e._v(" "),a("h2",{attrs:{id:"working-with-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-structures"}},[e._v("#")]),e._v(" Working with structures")]),e._v(" "),a("p",[e._v("All structures, a wrapping of an object containing a number of member variables, is an implementation of a standard JS "),a("code",[e._v("Map")]),e._v(" object, so all the functions available on a "),a("code",[e._v("Map")]),e._v(" such as "),a("code",[e._v(".entries()")]),e._v(" are available. Additionally it is decorated with actual getters for the fields.")]),e._v(" "),a("p",[e._v("As an example, a "),a("code",[e._v("Header")]),e._v(" will have getters for the "),a("code",[e._v(".parentHash")]),e._v(", "),a("code",[e._v(".number")]),e._v(", "),a("code",[e._v(".stateRoot")]),e._v(", "),a("code",[e._v(".extrinsicsRoot")]),e._v(" and "),a("code",[e._v(".digest")]),e._v(" fields. The same applies for all structures, as they are returned, each member will have an associated getter.")]),e._v(" "),a("p",[e._v("Be aware that in the JS version naming defaults to "),a("code",[e._v("camelCase")]),e._v(" where names of fields in Substrate defaults to "),a("code",[e._v("snake_case")]),e._v(". (Each version aligning with conventions in the respective languages)")]),e._v(" "),a("h2",{attrs:{id:"working-with-enums"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-enums"}},[e._v("#")]),e._v(" Working with enums")]),e._v(" "),a("p",[e._v("Each enum has additional getters which are injected based on the fields wrapped. These take the form of "),a("code",[e._v(".is<Name>")]),e._v(" and "),a("code",[e._v(".as<Name>")]),e._v(" to allow you to check is the enum is a certain value or to retrieve the underlying value as a specific type.")]),e._v(" "),a("p",[e._v("As a real-world example, when an extrinsic is applied, the "),a("code",[e._v("Phase")]),e._v(" enum has one of two states, "),a("code",[e._v("ApplyExtrinsic(u32)")]),e._v(" or "),a("code",[e._v("Finalization")]),e._v(". In this case "),a("code",[e._v(".isApplyExtrinsic")]),e._v(" would be "),a("code",[e._v("true")]),e._v(" when an extrinsic is being applied, and "),a("code",[e._v(".asApplyExtrinsic")]),e._v(" would return the value as a "),a("code",[e._v("u32")]),e._v(" (which is the index of the extrinsic in the block, as it is being applied). When "),a("code",[e._v("isisApplyExtrinsic")]),e._v(" is "),a("code",[e._v("false")]),e._v(" and "),a("code",[e._v("asApplyExtrinsic")]),e._v(" is called, the getter will throw.")]),e._v(" "),a("h2",{attrs:{id:"working-with-option-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-option-type"}},[e._v("#")]),e._v(" Working with Option<Type>")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("Option<Type>")]),e._v(" attempts to mimic the Rust approach of having "),a("code",[e._v("None")]),e._v(" and "),a("code",[e._v("Some")]),e._v(" available. This means the following getters & methods are available on an "),a("code",[e._v("Option")]),e._v(" -")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".isNone")]),e._v(" - is "),a("code",[e._v("true")]),e._v(" if no underlying values is wrapped, effectively the same as "),a("code",[e._v(".isEmpty")])]),e._v(" "),a("li",[a("code",[e._v(".isSome")]),e._v(" - this is "),a("code",[e._v("true")]),e._v(" is a value is wrapped, i.e. if a "),a("code",[e._v("Option<u32>")]),e._v(" has an actual underlying "),a("code",[e._v("u32")])]),e._v(" "),a("li",[a("code",[e._v(".unwrap()")]),e._v(" - when "),a("code",[e._v("isSome")]),e._v(", this will return the wrapped value, i.e. for "),a("code",[e._v("Option<u32>")]),e._v(", this would return the "),a("code",[e._v("u32")]),e._v(". When the value is "),a("code",[e._v("isNone")]),e._v(", this call will throw an exception.")]),e._v(" "),a("li",[a("code",[e._v(".unwrapOr(<default value>)")]),e._v(" - this extends "),a("code",[e._v("unwrap()")]),e._v(", returning the wrapped value when "),a("code",[e._v("isSome")]),e._v(" and in the case of "),a("code",[e._v("isNone")]),e._v(" it will return the "),a("code",[e._v("<default value>")]),e._v(" passed.")])]),e._v(" "),a("h2",{attrs:{id:"working-with-tuples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-tuples"}},[e._v("#")]),e._v(" Working with Tuples")]),e._v(" "),a("p",[e._v("A tuple is defined in the form of "),a("code",[e._v("(u32, AccountId)")]),e._v(". To access the individual values, you can access t via the index, i.e.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Assuming a tuple defined as `(32, AccountId)`")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" accountId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tuple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("accountId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v(" has ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("toNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v(" values")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"extending-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-types"}},[e._v("#")]),e._v(" Extending types")]),e._v(" "),a("p",[e._v("For customized chains, the need exists to register types so the API is aware of how to decode values for those types. The next section will provide a "),a("router-link",{attrs:{to:"/start/types.extend.html"}},[e._v("walk-through for the definition of custom types")]),e._v(" allowing the definition or re-definition of any type the API is aware of.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);