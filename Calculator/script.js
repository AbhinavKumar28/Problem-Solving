const addition = (num1, num2) => {
    return num1+num2
}
const subtraction = (num1,num2) => {
    return num1-num2
}
const multiplication = (num1, num2) => {
    return num1*num2
}
const division = (num1, num2) => {
    return num1/num2
}
const operate = (operator, num1,num2)=>{
    if (operator==="+"){
        addition(num1,num2)
    }else if (operator === "-"){
        subtraction(num1,num2)
    }else if(operator === "*"){
        multiplication(num1,num2)
    }else if (operator === "/"){
        division(num1,num2)
    }else {
        console.log("Invalid operator")
    }
}
