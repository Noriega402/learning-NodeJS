let add = 0;
let test = 0;
let test2 = 0;

console.time('tempo');
    for (let index = 0; index < 1000000; index++) {
        add += index;
    }
console.timeEnd('tempo')

console.time('v1');
    for (let index = 0; index < 100000000; index++) {
        test = test + index;
    }
console.timeEnd('v1')

console.time('v2');
    for (let index = 0; index < 100000000; index++) {
        test2++;
    }
console.timeEnd('v2')