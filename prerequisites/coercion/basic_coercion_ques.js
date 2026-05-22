"use strict"

// testing coercion basics
console.log("case: 1 + 2 - 1: ", 1 + "2" - 1)
// returns 11
/*
* because it would translate into
* (1 + "2") - 1
* thus its "1 + 2" - 1
* since its "+" we apply toString and concat
* "12" - 1
* since its "-" we aggressively apply ToNumber on both
* "12" -> 12 - 1 => 11
* result = 11
* */

console.log("case: '0' == false: ", '0' == false)
// returns true
/*
* because during "==" we tend to convert both sides into same type
* so '0' becomes just 0 due to ToNumber
* false becomes just 0 due to ToNumber
* thus 0 == 0
* result = true
* */

console.log("case: null == 0: ", null == 0)
// returns false
/*
* classic special case. null with == doesn't coerce into 0
* thus null == 0 is false
* result = false
* */

console.log("case: 1 + 2 + \"3\": ", 1 + 2 + "3")
// returns "33"
/*
* here this translates to (1 +2) + "3"
* so (1+2) = 3
* now 3 + "3"
* since one is string, we force it into ToString "3" + "3"
* results = 33
* */

console.log("case: \"1\" + 2 + 3: ", "1" + 2 + 3)
// returns "123"
/*
* here this translates to ("1" +"2") + 3
* so ("1" + "2") = "12"
* now "12" + "3"
* since one is string, we force it into ToString "12" + "3"
* results = "123"
* */

console.log("case: undefined + 1: ", undefined + 1)
// returns NaN
/*
* translates to (undefined + 1)
* we aggressively try to convert into ToNumber on both sides
* ToNumber(undefined) = NaN
* so NaN + 1 = NaN
* results = NaN
* */

console.log("case: null + 1: ", null + 1)
// returns 1
/*
* translates to (null + 1)
* we aggressively try to convert into ToNumber on both sides
* ToNumber(null) = 0
* so 0 + 1 = 1
* results = 1
* */

console.log("case: +true: ", +true)
// returns 1
// because + force converts into Number Type
// results in 1

// !! note: I got confused, keeping it simple, it is just negation
console.log("case: !\"\": ", !"")
// returns false
// because ! force converts into boolean Type
// thus !false = negation of false = true
// results in true

console.log("case: Boolean(\"false\"): ", Boolean("false"))
// results true
// because Boolean of non-empty string is true