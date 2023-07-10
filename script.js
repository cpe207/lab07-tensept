const firstnameInput = document.querySelector("#first-name-input")
const submitBtn = document.querySelector("#submit-btn")
const lastnameInput = document.querySelector("#last-name-input")
const email = document.querySelector("#email-input") 
const passwordInput = document.querySelector("#password-input") 

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstnameInput.onkeyup = () => {
  firstnameInput.classList.remove("is-valid");
  firstnameInput.classList.remove("is-invalid")
};

lastnameInput.onkeyup = () => {
  lastnameInput.classList.remove("is-valid");
  lastnameInput.classList.remove("is-invalid")
}

email.onkeyup = () => {
  email.classList.remove("is-valid");
  email.classList.remove("is-invalid")
}

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid")
}

submitBtn.onclick = () => {
  let isfirstNameok = false;
  let islastNameok = false;
  let isemailok = false;
  let ispasswordok = false;

  if(firstnameInput.value === ""){
    firstnameInput.classList.add("is-invalid");
  }else{
    firstnameInput.classList.add("is-valid");
    isfirstNameok = true;
  }

  if(lastnameInput.value === ""){
    lastnameInput.classList.add("is-invalid");
  }else{
    lastnameInput.classList.add("is-valid");
    islastNameok = true;
  }

  if(email.value === ""){
    email.classList.add("is-invalid");
  }else{
    if(validateEmail(email.value) == true){
      email.classList.add("is-valid");
      isemailok = true;
    }else email.classList.add("is-invalid");
    
  }

  if(passwordInput.value.length < 6){
    passwordInput.classList.add("is-invalid");
  }else{
      passwordInput.classList.add("is-valid");
      ispasswordok = true;
    }



  if(isfirstNameok && islastNameok && isemailok && ispasswordok){
    alert("Registered successfully");
  }
};
