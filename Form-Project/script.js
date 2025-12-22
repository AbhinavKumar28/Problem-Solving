// document.getElementById("").
const button = document.querySelector('#submit-form');
const form = document.querySelector('#myform');

button.addEventListener('mouseenter', () => {
  if (form.reportValidity()) {
    const conpass = document.querySelector('#confirmpassword').value;
    const pass = document.querySelector('#password').value;
    if (pass===conpass){
        console.log('Form is valid, proceed with submission');
    }else{
        console.log("passwords don't match.")
    }
} else {
    console.log('Form is invalid, browser showed messages');
  }
});