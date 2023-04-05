/**** SIGN-UP FORM AND VERIFICATION ****/
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
    const nameInput = document.querySelector("#name");
    const lastNameInput = document.querySelector("#lname");
    const numberInput = document.querySelector("#number");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirmpass");
    var errorMessage = document.querySelector(".message");
    var errorLnMessage = document.querySelector(".lnmessage");
    var errorNumMessage = document.querySelector(".nummessage");
    var errorEmaMessage = document.querySelector(".emamessage");
    var errorPassMessage = document.querySelector(".passmessage");
    var errorConPassMessage = document.querySelector(".conpassmessage");

    /**** name input validation ****/
    if (nameInput.value.length === 0) {
        event.preventDefault();
        nameInput.classList.add("input-error-active");
        errorMessage.innerHTML = "Fill field";
    } else if (/[!@#$%&*]/.test(nameInput.value)) {
        event.preventDefault();
        errorMessage.innerHTML = "no special characters allowed";
    } else {
        nameInput.classList.add("input-success-active");
        errorMessage.innerHTML = "";
    }
    /**** name input validation ****/

    /**** last name input validation ****/
    if (lastNameInput.value.length === 0) {
        event.preventDefault();
        lastNameInput.classList.add("input-error-active");
        errorLnMessage.innerHTML = "Fill field";
    } else if (/[!@$#%&*]/.test(lastNameInput.value)) {
        event.preventDefault();
        errorLnMessage.innerHTML = "no special characters allowed";
    } else {
        lastNameInput.classList.add("input-success-active");
        errorLnMessage.innerHTML = "";
    }
    /**** last name input validation ****/

    /**** number name input validation ****/
    if (numberInput.value.length === 0) {
        event.preventDefault();
        numberInput.classList.add("input-error-active");
        errorNumMessage.innerHTML = "Fill field";
    } else if (/[!@#$%&*]/.test(numberInput.value)) {
        event.preventDefault();
        errorNumMessage.innerHTML = "no special characters allowed";
    } else {
        numberInput.classList.add("input-success-active");
        errorNumMessage.innerHTML = "";
    }
    /**** number name input validation ****/

    /**** email input validation ****/
    if (emailInput.value.length === 0) {
        event.preventDefault();
        emailInput.classList.add("input-error-active");
        errorEmaMessage.innerHTML = "Fill field";
    } else {
        emailInput.classList.add("input-success-active");
        errorEmaMessage.innerHTML = "";
    }
    /**** email input validation ****/

    /**** password input validation ****/
    if (passwordInput.value.length === 0) {
    event.preventDefault();
    passwordInput.classList.add("input-error-active");
    errorPassMessage.innerHTML = "Fill field";
    } else if (passwordInput.value.length < 6) {
        event.preventDefault();
        errorPassMessage.innerHTML = "Your password needs more characters";
    } else if (!/[A-Z]/.test(passwordInput.value)) {
        event.preventDefault();
        errorPassMessage.innerHTML = "Your password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(passwordInput.value)) {
        event.preventDefault();
        errorPassMessage.innerHTML = "Your password must contain at least one lowercase letter";
    } else if (!/\d/.test(passwordInput.value)) {
        event.preventDefault();
        errorPassMessage.innerHTML = "Your password must contain at least one number";
    }  else {
        passwordInput.classList.add("input-success-active");
        errorPassMessage.innerHTML = "";
    }
    /**** password input validation ****/

    /**** confirmpassword input validation ****/
    if (confirmPasswordInput.value.length === 0) {
        event.preventDefault();
        confirmPasswordInput.classList.add("input-error-active");
        errorConPassMessage.innerHTML = "Passwords don't match!";
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        event.preventDefault();
        confirmPasswordInput.classList.add("input-error-active");
        errorConPassMessage.innerHTML = "Passwords don't match!";
    } else {
        confirmPasswordInput.classList.add("input-success-active");
        errorConPassMessage.innerHTML = "";
    }    
    /**** confirmpassword input validation ****/
})

/**** SIGN-UP FORM AND VERIFICATION ****/