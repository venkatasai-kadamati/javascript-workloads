// comments work the same way as JS

/*
    Types in TypeScript
    - All below are prmitive types in TS
    - These can't be further derived, as they are atomic
    string -> stores text
    number -> integers, real
    boolean
    undefined
    null
    bigint
    symbol
*/

/*
   Type Annotation/Signature
   var <variable_name> : <type> = <value>
*/

let id: number = 5;
console.log("id: ", id);

/*
    TS isn't dumb, it can infer the type.
    But !!! If we try to change the type later,
    It doesn't allow - so it is against the original JavaScript dynamic nature
*/

/*
    doing: id = "Venkat" is wrong now,
    since we are changing the type from number to string
    -> In short don't violate your own declaration,
    you start with number, stick with number.
 */

// var behaves the same as let.

/*
    It can happen that we have multiple possible types for a variable
    Suppose we so we use union of types
    var <variable_name> : (string | number) = <value>

    - ts avoids heterogeneous arrays
    - "any" type allows js behavior of hetro-array
    */
// let arr: (number | string)[] = [1,2,3];


// // let firstID: any = "13xoe";
// let firstID: string | number = "13xoe";
// // ts avoids dynamic typing feature of js
// // to use js dynamic typing - <any> is the ts type we would want to have

// // but to limit usage, we can definitely use union of types
// // (string | number)
// firstID = 1;
// console.log(firstID);

// // array type
// let arr: (number | string)[] = [1,2,3];
// // ts avoids hetergenours arrays
// // any converts into js behaviour
// arr[1] = "3";

// using array values as a tuple - just a collection of values separated with comma
let arr: [number, string, boolean] = [1, "venkat", true];
console.log(arr)



