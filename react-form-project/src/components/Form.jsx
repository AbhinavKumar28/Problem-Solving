// const inputdata= [
//     {"required":true, "type":"text", "name":"firstname"},
// {"name":"lastname","type":"text","required":false,},
//     {"required":true, "type":"email", "name":"email"},
// {"name":"phonenumber","type":"tel","required":true,},
//     {"required":true, "type":"password", "name":"password"},
// {"name":"confirmpassword","type":"password","required":true}
// ]
function Form({index,inpobj}){
    console.log(inpobj.errormessage)
    return (
        // <div class="inputs">
        //     <label for="fname">FIRST NAME*</label>
        //     <input minlength="3" maxlength="18" required type="text" name="firstname" id="fname"/>
        // </div>
        <div key={index} className="inputs">
            <label htmlFor={inpobj.name}>{inpobj.name.toUpperCase()}{inpobj.required?"*":""}</label>
            <input pattern={((inpobj.name==="password")||(inpobj.name==="confirmpassword"))?"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}":undefined}
       title={((inpobj.name==="password")||(inpobj.name==="confirmpassword"))?"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters":undefined} 
       minLength={(inpobj.name==="firstname")?"3":undefined} maxLength={(inpobj.name==="firstname")?"18":undefined} required={inpobj.required} type={inpobj.type} name={inpobj.name} id={inpobj.name}/>
            <p className="error-message" id={inpobj.name+"error"}>{inpobj.errormessage}</p>
        </div>

    )
}
export default Form;