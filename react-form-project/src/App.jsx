import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
const inputdata= [
    {"required":true, "type":"text", "name":"firstname","errormessage":"Between 3 to 18 chars"},
{"name":"lastname","type":"text","required":false,"errormessage":""},
    {"required":true, "type":"email", "name":"email","errormessage":"Enter valid email address"},
{"name":"phonenumber","type":"number","required":true,"errormessage":"Enter valid number"},
    {"required":true, "type":"password", "name":"password","errormessage":"Enter valid password"},
{"name":"confirmpassword","type":"password","required":true,"errormessage":"Password should be same"}
]
function App() {
//   const [count, setCount] = useState(0)
    const formelem=useRef()
    // const formelem=document.getElementById("myform")
    useEffect(()=>{if (!formelem.current.checkValidity()){
        if (!(formelem.current.password.value===formelem.current.confirmpassword.value)){
            inputdata[4].errormessage="Password should be same"
        }
    }},)
  return (
    
    <div className="container">
        <section className="img-section">
            <div className="logo">
                <img src="src/assets/mestre-free-fire-logo-png_seeklogo-359652.png" alt=""/>
                <span className="logo-text">ODIN</span>
            </div>
            <p className="background-text">Photo by helwest</p>
            
        </section>
             <section className="text-container">
            <div className="text-section">
                This is not a real online service! 
                You know you need something like
                this in your life to help you realize 
                your deepest dreams. Sign up now to 
                get started.
            </div>
            <div className="anothertextsection">You know you want to.</div>
            <div className="formi">
                <div className="mb">Let's do this!</div>
                <form id="myform" ref={formelem} action="" method="post">
                    <div className='grid-container'>
                        {inputdata.map((inpobj, index) => (
        <Form key={index} index={index} inpobj={inpobj}/>
        // <div key={index} className="inputs">
        //     <label for={inpobj.name}>{inpobj.name.toUpperCase()}{inpobj.required?"*":""}</label>
        //     <input minlength={(inpobj.name==="firstname")?"3":undefined} maxlength={(inpobj.name==="firstname")?"18":undefined} required={inpobj.required} type={inpobj.type} name={inpobj.name} id={inpobj.name}/>
        // </div>

      ))}
      </div>
                        {/* <div class="inputbunch">
                            <div class="inputs">
                                <label for="fname">FIRST NAME*</label>
                                <input minlength="3" maxlength="18" required type="text" name="firstname" id="fname"/>
                            </div>

                            <div class="inputs">
                                <label for="lname">LAST NAME</label>
                                <input type="text" name="lastname" id="lname"/>
                            </div>
                        </div>
                        <div class="inputbunch">
                            <div class="inputs">
                                <label for="email">EMAIL*</label>
                                <input type="email" name="email" id="email"/>
                            </div>

                            <div class="inputs">
                                <label for="phonenumber">PHONE NUMBER*</label>
                                <input type="tel" required name="phonenumber" id="phonenumber"/>
                            </div>
                        </div>
                        <div class="inputbunch">
                            <div class="inputs">
                                <label for="password">PASSWORD*</label>
                                
                                <input class="password-input" name="password" id="password" type="password" 
       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
       title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
       required/>
                            </div>

                            <div class="inputs">
                                <label for="confirmpassword">CONFIRM PASSWORD*</label>
                                <input class="password-input" type="password" id="confirmpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
       title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
       required/>
                            </div>
                        </div> */}
                        <div className="gender">GENDER*</div>
                        <div>
                            <input required className="radio-btn" type="radio" name="gender" id="male" value="male"/>
                            <label htmlFor="
                            male">Male</label>
                        </div>
                        <div>
                            <input className="radio-btn" type="radio" name="gender" id="female" value="female"/>
                            <label htmlFor="
                            female">Female</label>
                        </div>
                        <div>
                            <input className="radio-btn" type="radio" name="gender" id="other" value="other"/>
                            <label htmlFor="
                            other">Other</label>
                            <p className="error-message" id="error-gender">Gender is required</p>
        
                        </div>
                            {/* <p className="error-message" id="error">"po</p> */}
        
                </form>
            </div>
            <button id="submit-form" form = "myform" type="submit">Create Account</button>
            <p>Already have an account? <a href="">Log in</a></p>
        </section>  
  
    </div>
   )
}

export default App
