let num1 = Number(prompt('Введите число'))
let oper = prompt('Выберите действие \n+\n-\n*\n/')
let num2 = Number(prompt('Введите  второе число'))
const calc = ()=> {
    let result
    (isNaN(num1) || isNaN(num2)) ?
        alert('Введите только число'):
        true
    switch (oper){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case '*':
            result=num1*num2;
            break;
        case '/':
            (num2 === 0) ? result = "ошибка": result = num1/num2;
            break;
        default:
            alert('Выберите правильное действие')
    }
    alert(result)
}
calc()