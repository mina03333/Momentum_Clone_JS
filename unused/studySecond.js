const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//you can do it this way too
const loginButton = document.querySelector("#login-form button")

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name.")
    } else if (username.length > 20) {
        alert("Your name is too long")
    } else {
        console.log("hello", loginInput.value);
    }
}

loginButton.addEventListener("click", onLoginBtnClick)