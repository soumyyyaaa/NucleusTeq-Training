var pwd = document.getElementById("password");

function pwd_rules_focusin() {
    document.getElementById("pwd-rules").style.display = "block";
}

function pwd_rules_focusout() {
    document.getElementById("pwd-rules").style.display = "none";
}

function lower_case() {
    var letter = document.getElementById("letter");
    var lowerCaseLetters = /[a-z]/g;
    if (pwd.value.match(lowerCaseLetters)) {
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
    }
}

function upper_case() {
    var capital = document.getElementById("capital");
    var upperCaseLetters = /[A-Z]/g;
    if (pwd.value.match(upperCaseLetters)) {
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
    }
}

function number() {
    var number = document.getElementById("number");
    var numbers = /[0-9]/g;
    if (pwd.value.match(numbers)) {
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
    }
}

function length_pwd() {
    var length = document.getElementById("length");
    if (pwd.value.length >= 8) {
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
    }
}

function special_char() {
    var special = document.getElementById("special");
    var specials = /[-~!#*$@_%+=.^&?]/g;
    if (pwd.value.match(specials)) {
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
    }
}

function login() {
    alert("You have logged in successfully!!");
}
