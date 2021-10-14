function validate(){
    
    let text;
    
    const name = document.getElementById("name").value;
    const requiredName = document.getElementById("requiredName");

    if (name == ""){
        text = ("name must be filled out!");
        requiredName.style.display = "block";
        requiredName.innerHTML = text;
    } else if (name.length < 4 || name.length > 30 ){
        text = ("name must be between 4-30 characters");
        requiredName.style.display = "block";
        requiredName.innerHTML = text;
    } else {
        requiredName.style.display = "none";
    }
    
    const email = document.getElementById("email").value;
    const requiredEmail = document.getElementById("requiredEmail");
    if (email == ""){
        text = ("email must be filled out!");
        requiredEmail.style.display = "block";
        requiredEmail.innerHTML = text;
    } else {
        requiredEmail.style.display = "none";
    }

    const pass = document.getElementById("password").value;
    const requiredPass = document.getElementById("requiredPass");
    if (pass == ""){
        text = ("password must be filled out!");
        requiredPass.style.display = "block";
        requiredPass.innerHTML = text;
    } 
    else if(pass.length < 8 || pass.length > 30){
        text = ("password must be between 8-30 characters");
        requiredPass.style.display = "block";
        requiredPass.innerHTML = text;
    }
    else {
        requiredPass.style.display = "none";
    }

    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const requiredGender = document.getElementById("requiredGender");
    if (male.checked == false && female.checked == false){
        text = ("you have to choose one gender!");
        requiredGender.style.display = "block";
        requiredGender.innerHTML = text;
    } else {
        requiredGender.style.display = "none";
    }

    const term = document.getElementById("term");
    const requiredTerm = document.getElementById("requiredTerm");
    if (term.checked == false){
        text = ("you have to agree Term & Privacy!");
        requiredTerm.style.display = "block";
        requiredTerm.innerHTML = text;
    } else {
        requiredTerm.style.display = "none";
    }

    if (name == "" || email == "" || pass == "" || male.checked == false && female.checked == false || term.checked == false){
        return false;
    }
}