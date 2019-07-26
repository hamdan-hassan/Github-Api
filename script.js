let btn = document.getElementById("btn");
let users = document.getElementById("users");
let h1 = document.getElementById("h1");

btn.addEventListener("click" , function() {

	let xhr = new XMLHttpRequest();

	xhr.open("GET","https://api.github.com/users",true);
   

	xhr.onloadstart = function () {
		
		h1.textContent = "Loading...";
	}



xhr.onload = function() {

	h1.textContent = "";
	if (this.status == 200) {

	let user = JSON.parse(this.responseText);
	let output = "";

	for(let i = 0; i < user.length; i++) {
		output+= "<div class = 'user'>" + 
		"<img src=" + user[i].avatar_url + " width = '80' height = '80'>" +
		"<ul>" +
		"<li>Login: " + user[i].login + "</li>" +
		"<li>Id: " + user[i].id + "</li>" +
		"</ul>" +
		"</div>";

	  }

	users.innerHTML = output;


	 }


   }



	xhr.send();


});

