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
function task(n1, n2) {
    console.log(n1);
    console.log(n2);
    n1.push(n2);
    for (var _i = 0, n1_1 = n1; _i < n1_1.length; _i++) {
        var hobby = n1_1[_i];
        console.log(hobby.toUpperCase());
    }
}
var we = ['Sports', 'Cooking'];
var wee = ['Sports', 'Cooking'];
task(we, wee);
