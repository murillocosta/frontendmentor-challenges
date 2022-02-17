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

