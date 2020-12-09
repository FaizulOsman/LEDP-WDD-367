// 	var database = [
// 	{
// 		username: "aaa",
// 		password: "111"
// 	},
// 	{
// 		username: "bbb",
// 		password: "222"
// 	},
// 	{
// 		username: "ccc",
// 		password: 333
// 	}

// ];

// var newsFeed = [
// 	{
// 		username: "lamia",
// 		status: "Javascript is very cool"
// 	},
// 	{
// 		username: "Fatima",
// 		status: "yah I am learning JS"
// 	}

// ];

// 	var usernamePrompt = prompt("Enter Username");
// 	var passwordPrompt = prompt("Enter Password");

// function userValidation(u,p){
// 		for(var i = 0; i < database.length; i++){
// 				if ( u === database[i].username && p == database[i].password) {
// 						return true;
// 				}
// 		}
// 		return false;
// }


// function signIn(user,pass){
// 	if (userValidation(user,pass)) {
// 		console.log(newsFeed);
// 	}else{
// 		alert("Invalid");
// 	}
// }

// signIn(usernamePrompt,passwordPrompt);





 // var btn = document.getElementById("click");
 // var body = document.body;
 // // btn.onclick = function(){
 // // 	console.log("clicked!")
 // // }

 // btn.addEventListener("click", function(){
 // 	//body.style.background = "red";
 // 	//body.setAttribute("style", "background: green")
 // 	body.classList.toggle("bg");
 // })


function showHide() {
  var x = document.getElementById("div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


