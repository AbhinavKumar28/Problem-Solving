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
let a = ""
let b= ""
let op=""
let flag =0
let sign = "+"
const mainInputElement = document.getElementById("mainInput")
const onClickNum=(num)=>{
    if (flag===0){
        a=a+num
        mainInputElement.value=a
    }else {
        b=b+num
        mainInputElement.value=b
    }
}
const onClickOp=(oper)=>{
    if (a!==""){
        op=oper
        flag=1
        mainInputElement.value=""
        b=""
    }
}
const onClickDot = ()=>{
    if (flag===0){
        if (a.includes(".")){
            return
        }else {
            a=a+"."
            mainInputElement.value=a
        }
    }else {
        if (b.includes(".")){
            return
        }else {
            b=b+"."
            mainInputElement.value=b
        }
    }
}
const onClickClear=()=>{
    a=""
    b=""
    op=""
    flag=0
    mainInputElement.value=""
}
const onClickSign=()=>{
    if (sign==="+"){
        sign="-"
        if (flag===0){
            a="-"+a
            mainInputElement.value=a
        }else {
            b="-"+b
            mainInputElement.value=b
        }
    }else {
        sign="+"
        if (flag===0){
            let newstring=a.slice(1)
            a=newstring
            mainInputElement.value=a
        }else {
            let newstring=b.slice(1)
            b=newstring
            mainInputElement.value=b
        }
    }
}