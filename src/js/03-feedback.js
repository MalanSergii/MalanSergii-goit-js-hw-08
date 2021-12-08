const throttle = require('lodash.throttle');


const form = document.querySelector(".feedback-form");
const mailInput = document.querySelector("input");
const userMessage = document.querySelector("textarea");

const userData = {
    email: "",
    message: ""
};

const parcedData = JSON.parse(localStorage.getItem("feedback-form-state"));


function isLocalStorage() {
    if (localStorage.getItem("feedback-form-state")) {
        mailInput.value = parcedData.email;
        userMessage.value = parcedData.message;
        userData.email = parcedData.email;
        userData.message = parcedData.message;
    }
}
isLocalStorage();


mailInput.addEventListener("input", throttle((e) => {
    userData.email = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}, 500));


userMessage.addEventListener("input", throttle((e) => {
    userData.message = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData))
}, 500));


form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(userData);
    userData.email = "";
    userData.message = "";
    event.currentTarget.reset()
    localStorage.removeItem("feedback-form-state");
})

