/* form validation */
function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Password = document.getElementById("Password").value;
    var cnfmPassword = document.getElementById("cnfmPassword").value;

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(name == null || name == ''){
        document.getElementById("errorName").innerHTML="Name can't be blank";
    } else{
        document.getElementById("errorName").innerHTML="";
    }   

    if(email == null || email == ''){
        document.getElementById("errorEmail").innerHTML="Email can't be blank";
    } else if (!reg.test(email)){
        document.getElementById("errorEmail").innerHTML="Invalid Email";
    } else{
        document.getElementById("errorEmail").innerHTML="";
    } 

    if(Password == null || Password == ''){
        document.getElementById("errorPass").innerHTML="Password can't be blank";
    } else{
        document.getElementById("errorPass").innerHTML="";
    }

    if(cnfmPassword == null || cnfmPassword == ''){
        document.getElementById("errorCnfmPass").innerHTML="Confirm Password can't be blank";
    } else{
        document.getElementById("errorCnfmPass").innerHTML="";
    }

    
}