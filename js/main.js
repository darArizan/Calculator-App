// let a = 5;
// let b = 3;
// var f = 77;
// console.log(sum(a, b));
// console.log(sub(a, b));
// console.log(div(a, b));
// console.log(mul(a, b));



// function sum(x, y) {
//     console.log("f = ", f);
//     var f = 55;
//     return x + y;
// }
// let c = function(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// function div(x, y) {
//     return x / y;
// }

// function mul(x, y) {
//     return x * y;
// }
// let arrowFunction = () => "hello";

// let a = "JavaScript";
// let b = "SCSS"
// let text = `We are learning ${a} and ${b}!`


for (let i = 1; i <= 100; i++) {
    let fizzBuzz=(i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
        (i % 3 === 0) ? "Fizz" :
            (i % 5 === 0 && i % 3 !== 0) ? "Buzz" : i
          console.log(fizzBuzz)  
}



