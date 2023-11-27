let num1 = document.querySelector("#first-num");
let num2 = document.querySelector("#second-num");

let plus_btn = document.querySelector("#plus");
let minus_btn = document.querySelector("#minus");
let multiple_btn = document.querySelector("#multiple");
let divide_btn = document.querySelector("#divide");
let clear_btn = document.querySelector("#clear");

let result = document.querySelector("#result")



function chooseOperator(action) {
    let number1 = num1.value;
    let number2 = num2.value;

    if (isNaN(number1) || isNaN(number2)) {
        result.innerHTML = "Please enter valid numbers.";
        return;
    }
    let result_operator;

    switch (action) {
        case 'plus':
            result_operator = parseInt(number1) + parseInt(number2);
            break;
        case 'minus':
            result_operator = parseInt(number1) - parseInt(number2);
            break;
        case 'multiple':
            result_operator = parseInt(number1) * parseInt(number2);
            break;
        case 'divide':
            if (parseInt(number2) === 0) {
                result_operator = "There is no division by zero operation.";
                return result_operator
            }
            result_operator = parseInt(number1) / parseInt(number2);
            result_operator = result_operator.toFixed(2);


            break;
        default:
            break;

    }
    result.innerHTML = result_operator;
    return result_operator;
}

plus_btn.addEventListener('click', function() {
    result.innerHTML = chooseOperator('plus')
})

minus_btn.addEventListener('click', function() {
    result.innerHTML = chooseOperator('minus')
})

multiple_btn.addEventListener('click', function() {
    result.innerHTML = chooseOperator('multiple')
})

divide_btn.addEventListener('click', function() {
    result.innerHTML = chooseOperator('divide')
})

clear_btn.addEventListener('click', function() {
    num1.value = " ";
    num2.value = " ";
    result.innerHTML = "Netice sifirlandi.";

})