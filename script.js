let btn = document.getElementById("btn");
let users = document.getElementById("users");
let h1 = document.getElementById("h1");
let output = "";

btn.addEventListener("click" , function() {

h1.textContent = "Loading...";
fetch("https://api.github.com/users").then((response) => {
	return response.json();
}).then((data) => {

data.forEach(function (item) {
	output+= "<div class = 'user'>" + 
		"<img src=" + item.avatar_url + " width = '80' height = '80'>" +
 		"<ul>" +
 		"<li>Login: " + item.login + "</li>" +
 		"<li>Id: " + item.id + "</li>" +
 		"</ul>" +
 		"</div>";

users.innerHTML = output;
h1.textContent = "";
  });

});



});

