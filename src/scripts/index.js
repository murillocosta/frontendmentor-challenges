document.getElementsByClassName("submit").addEventListener("click", submit, false);

function submit() {
    
    let firstName = document.getElementById(firstName).value;
    let lastName = document.getElementById(lastName);
    let emailAddress = document.getElementById(emailAddress);
    let password = document.getElementById(password);

    let errorName = document.getElementById(errorName);
    

    if (firstName.length == 0) {
        errorName.innerHTML = "erro"
}
}

function validar () {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById('emailAdress');
    let password = document.getElementById('password');
    
    
    if(firstName.value == '') {    
    textName.innerHTML = 'First Name cannot be empty.'
    firstName.style.border = '2px solid #f0787a';
    firstName.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
}
    if (lastName.value == '') {
      textLastName.innerHTML = "Last Name cannot be empty."  
      lastName.style.border = '2px solid #f0787a';
      lastName.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }
    if (email.value == '') {
        textEmail.innerHTML = "Looks like this is not an email."  
        email.style.border = '2px solid #f0787a';
        email.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
        // email.placeholder = "email@example/com";
        email.value = 'email@example/com';
        
}
     
    if (password.value == '') {
        textPassword.innerHTML = "Password cannot be empty."
        password.style.border = '2px solid #f0787a';
        password.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }

    
}