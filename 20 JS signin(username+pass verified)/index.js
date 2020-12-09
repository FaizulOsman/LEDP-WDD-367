// var study = ["book", "pen", "pencil", "whiteboard"];

// for(var i=study.length-1; i>=0; i--){
// 	 document.write(study[i]+"<br>");
// }




// var a = 10;

// while(i< 10){
// 	 document.write(a+"<br>");
// 	 a++;
// }



	// var b = 10;
	// do()














	// for(var i=1; i<=20; i++){
	// 	if(i%2==0){
	// 		document.write(i+"<br>");
	// 	}
	// }





	var dataBase = [
		{
			username: "aaa",
			password: "111"
		},
		{
			username: "bbb",
			password: "222"
		},
		{
			username: "ccc",
			password: "333"
		}
	];
	var newsFeed = [
		{
			username: "Lamyah",
			status: "Hello"
		},
		{
			urerneme: "Fatema",
			status: "Hi"
		}
	];
	function signIn(x){

		var usernamePrompt = prompt("Enter username");
		var passwordPrompt = prompt("Enter password");
				if(usernamePrompt===dataBase[x].username && passwordPrompt===dataBase[x].password){
					console.log(newsFeed);
				}
				else{
					alert("invalid");
				}
	}

	signIn(1 || 2 ||3)










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
// 		status: "yayyy I am learning JS"
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