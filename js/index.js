// let nums = document.querySelectorAll('.calc__button');
let nums = document.getElementsByClassName('calc__num')
let display = document.querySelector('.calc__display');
let deleteBtn = document.querySelector('.calc__delete');
let operators = document.querySelectorAll('.operators');
let equal = document.querySelector('.calc__equal')
operators = Array.from(operators)

nums = Array.from(nums)
let num1;
let num2;
let operat;
let result;

nums.forEach(btn => {
    btn.addEventListener('click', event => {

        display.value += btn.innerHTML

    });

});

deleteBtn.addEventListener('click', event => {
    display.value = '';

})

operators.forEach(operator => {
    operator.addEventListener('click', event => {
        num1 = parseInt(display.value)
        operat = operator.innerHTML
        display.value += operator.innerHTML
        display.value = ''

    });

});

equal.addEventListener('click', subNum)

function subNum() {
    num2 = display.value
    num2 = parseInt(num2)


    switch (operat) {

        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;

    }
    display.value = result
    console.log(result)

}









