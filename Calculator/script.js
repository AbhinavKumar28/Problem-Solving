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
        return addition(num1,num2)
    }else if (operator === "-"){
        return subtraction(num1,num2)
    }else if(operator === "*"){
        return multiplication(num1,num2)
    }else if (operator === "/"){
        return division(num1,num2)
    }else {
        console.log("Invalid operator")
    }
}
let a = ""
let b= ""
let op=""
let flag =0
let resflag=0
let sign = "+"
let result=0
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
    resflag=0
    if (b!==""){
        onClickEqual()
        op=oper
    }else if (a!==""){
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
            if (a===""){
                a="0"
            }
            a=a+"."
            mainInputElement.value=a
        }
    }else {
        if (b.includes(".")){
            return
        }else {
            if (b===""){
                b="0"
            }
            b=b+"."
            mainInputElement.value=b
        }
    }
}//keyboard backspace not working.
const onClickClear=()=>{
    a=""
    b=""
    op=""
    flag=0
    mainInputElement.value=""
    resflag=0
    sign="+"
}
const onClickSign=()=>{
    if (sign==="+"){
        sign="-"
        if (flag===0){
            a="-"+a
            console.log("hi")
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
const onClickEqual=()=>{
    resflag=1
    if ((a==="")||(b==="")){
        return
    }else{
        if ((a==="-")||(b==="-")){
            return
        }else {
            let numone=Number(a)
            let numtwo=Number(b)
            console.log(numone,numtwo)
            if ((numtwo===0)&&(op==="/")){
                return
            }
            result=operate(op,numone,numtwo)
            mainInputElement.value=result
            a=result.toString()
            b=""
        }
    }
}