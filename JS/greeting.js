const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");  /*id + tag 로 검색 가능*/
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `hello ${username}`; //유저 네임 출력
  greeting.classList.remove(HIDDEN_CLASSNAME); //greeting hidden clss 삭제
}

function onSubmit(event) {
  event.preventDefault(); //페이지 넘김 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); //login form 숨김
  const username = loginInput.value; //input value를 username에 저장
  localStorage.setItem(USERNAME_KEY, username); //localstorage에 저장  /*recap 하기*/
  paintGreetings(username); //paintgreeting() 실행
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //localStorage 저장된 값 확인(Null or not)

if (savedUsername === null) {  //저장된 userName === null -> loginForm Diplay
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {  //else -> greeting
  paintGreetings(savedUsername);
}