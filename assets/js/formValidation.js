/* form validation */
function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const Password = document.getElementById("Password").value;
    const cnfmPassword = document.getElementById("cnfmPassword").value;

    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    if(name == null || name == ''){
        document.getElementById("errorName").innerHTML="Name can't be blank";
    } else{
        document.getElementById("errorName").innerHTML="";
    }   

    if(email == null || email == ''){
        document.getElementById("errorEmail").innerHTML="Email can't be blank";
    } else if (!regEmail.test(email)){
        document.getElementById("errorEmail").innerHTML="Invalid Email";
    } else{
        document.getElementById("errorEmail").innerHTML="";
    } 

    if(Password == null || Password == ''){
        document.getElementById("errorPass").innerHTML="Password can't be blank";
    } else if (!regPass.test(Password)){
        document.getElementById("errorPass").innerHTML="Invalid password";
    } else{
        document.getElementById("errorPass").innerHTML="";
    }

    if(cnfmPassword == null || cnfmPassword == ''){
        document.getElementById("errorCnfmPass").innerHTML="Confirm Password can't be blank";
    } else if(Password != cnfmPassword){
        document.getElementById("errorCnfmPass").innerHTML="Password and Confirm password not matched";
    } else{
        document.getElementById("errorCnfmPass").innerHTML="";
    }

    // alert("Form is successfully validated");
}