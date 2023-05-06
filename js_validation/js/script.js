document.addEventListener("keyup", checkEmail);
document.addEventListener("keyup", checkUsername);
document.addEventListener("keyup", checkPassword);
document.addEventListener("keyup", confirmPw);
document.addEventListener("change", subAlert);
document.addEventListener("change", checkTerms);
document.addEventListener("submit", validate);
document.addEventListener("reset", reset);


let msg;
let defaultMsg = "";

let inputList = document.getElementsByTagName("div");

// create p tag to contain msg after email checking
let emailError=document.createElement("p");
emailError.setAttribute("class","warning");

// email checking part
let em = document.getElementById("email");
inputList[1].append(emailError);

function checkEmail() {
    let emailValue = document.getElementById("email").value;
    let emailRegEx = /\S+@\S+\.\S+/;
    if (emailRegEx.test(emailValue)) {
        msg = defaultMsg;
    } else {
        msg = "Email address should be non-empty with the format xyz@xyz.xyz.";
    }
    document.getElementsByClassName("warning")[0].textContent = msg;
}


// create p tag to contain msg after username checking
let usernameError=document.createElement("p");
usernameError.setAttribute("class","warning");

// username checking part
let username = document.getElementById("username");
inputList[2].append(usernameError);

function checkUsername() {
    let usernameValue = document.getElementById("username").value; 
    if (usernameValue == "") {
        msg = "User name should be non-empty.";
    } else if (usernameValue.length > 20) {
        msg = "User name should be within 20 characters long.";
    } else {
        msg = defaultMsg;
    }
    document.getElementsByClassName("warning")[1].textContent = msg;
}


// create p tag to contain msg after password length checking
let pwError=document.createElement("p");
pwError.setAttribute("class","warning");

// password length checking part
let pw = document.getElementById("pass");
inputList[3].append(pwError);

function checkPassword() {
    let pwValue = document.getElementById("pass").value;
    let pwReg = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (pwValue == "") {
        msg = "Password should be non-empty";
    } else if (pwValue.length < 6) {
        msg = "Password should be at least 6 characters";
    } else if (!(pwReg.test(pwValue))) {
        msg = "Password should be at least 1 uppercase, 1 lowercase.";
    } else {
        msg = defaultMsg;
    }
    document.getElementsByClassName("warning")[2].textContent = msg;
}

// create p tag to contain msg after password re-enter checking
let pwReenter=document.createElement("p");
pwReenter.setAttribute("class","warning");

// password length checking part
let pwr = document.getElementById("pass2");
inputList[4].append(pwReenter);

function confirmPw() {
    let pwrValue = document.getElementById("pass2").value;
    if (pwrValue == pw.value) {
        msg = defaultMsg;
    } else {
        msg = "Please retype the password."
    }
    document.getElementsByClassName("warning")[3].textContent = msg;
}


// create p tag to contain msg after subscription checkbox checking
let subCheck=document.createElement("span");
subCheck.setAttribute("class","alert");

// password length checking part
let subCheckValue = document.getElementById("subscription");
inputList[5].append(subCheck);

function subAlert() {
    let subscription = document.getElementById("subscription");
    if (subscription.checked) {
        msg = "Please check spam mail box if our newsletter is not found in inbox.";
    } else {
        msg = defaultMsg;
    }
    document.getElementsByClassName("alert")[0].textContent = msg;
}

// create p tag to contain msg after t&c checkbox checking
let tcCheck=document.createElement("span");
tcCheck.setAttribute("class","warning");

// password length checking part
let tc = document.getElementById("terms");
inputList[6].append(tcCheck);

function checkTerms() {
    let terms = document.getElementById("terms");
    if (terms.checked) {
        msg = defaultMsg;
    } else {
        msg = "Please accept the terms and conditions.";
    }
    document.getElementsByClassName("warning")[4].textContent = msg;
}


function validate() {
    //assume the form is in correct status
    let status = true;
    for (i = 0; i < document.getElementsByClassName("warning").length ; i++) {
        if (document.getElementsByClassName("warning")[i].innerText != "") {
            status = false;
            break;
        };
    }
    console.log(status);
}


function reset() {
    for (k = 0; k < document.getElementsByClassName("warning").length ; k++) {
        document.getElementsByClassName("warning")[k].innerText = "";
    }

    for (j = 0; j < document.getElementsByClassName("alert").length ; j++) {
        document.getElementsByClassName("alert")[j].innerText = "";
    }
}

console.log(document.getElementsByClassName("warning"));
console.log(document.getElementsByClassName("alert"));


