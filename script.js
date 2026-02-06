const BASE_URL =
https://pluto-boys-global.onrender.com"; // <-- replace with your Render URL

//REGISTER USER
function register() {
    let username =
document.getElementById("newUsername") .value;
    let password = 
document.getElementById("newPassword") .value;
   let message = 
document.getElementById("regMessage")

if (!username || !password) {
    message.textContent = "FILL IN ALL FIELDS";
    message.style.color ="red";
    return;
}
fetch( `${BASE_URL}/register`,{
   method: "POST",
   headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ username, password})
   })
   .then (res => res.json())
   .then( data =>{
    message.style.color ="green";
    message.textContent = data.message;
   });
}
//LOGIN USER
function login(){
    let username =
document.getElementById("username") .value;
    let password =
document.getElementById("password") .value;
    let message = 
document.getElementById("loginMessage");

    fetch( `${BASE_URL}/login`,{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ username, password})
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            message.style.color = "green";
            message.textContent = data.message;
            localStorage.setItem("token", data.token);
        } else {
            message.style.color = "red";
            message.textContent = data.message;
        }
    });
}

//logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

//redirect if not logged in (optional)
if (window.location.href.includes("dashboard.html") &&
localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}