const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


function saveData()
{
let name,email,psw;
name=document.getElementById("name").value;
email=document.getElementById("email").value;

psw=document.getElementById("psw").value;

localStorage.setItem("name",name)
localStorage.setItem("email",email)
localStorage.setItem("psw",psw)
}