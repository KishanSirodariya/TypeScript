"use strict";
function add(n1, n2) {
    // if( typeof n1 !== 'number' || typeof n2 !== 'number'|| typeof n1 !== 'string' || typeof n2 !== 'string')
    // {
    //     debugger
    //     throw new Error("Error!");
    // }
    // else 
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    else if (typeof n1 === 'string' || typeof n2 === 'string')
        return n1 + n2;
}
//   const number1 = '5';
//   const number2 = 2.8;
//   const result = add(number1, number2);
console.log(add(50, 2));
console.log(add('50', 2));
console.log(add(true, 2));
function task(a1, a2) {
    a1.push(a2);
    for (var _i = 0, a1_1 = a1; _i < a1_1.length; _i++) {
        var hobby = a1_1[_i];
        console.log(hobby.toUpperCase());
    }
}
var a1 = ['Sports', 'Cooking'];
var a2 = ['Sports', 'Cooking'];
task(a1, a2);
