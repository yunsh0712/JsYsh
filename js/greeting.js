const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //브라우저가 이벤트에 대한 기본 동작을 막는기능
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("USERNAME_KEY", loginInput.value);//value Input Box에서 입력받은 값
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
    
}