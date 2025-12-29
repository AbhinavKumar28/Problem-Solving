
function Form({index,inpobj}){
    console.log(inpobj.errormessage)
    return (
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