var sub = new Array();
sub[0] = "One";
sub[1] = "Two";
sub[2] = "Three";
for(var i=sub.length -1;i>=0; i--){
	document.write(sub[i] + "<br>");
}
document.write("<br><br><br>");


var sub = new Array("One","Two","Three");
for (var i=sub.length -1;i>=0; --i){
	document.write(sub[i]+"<br>")
}



// =================NEATEAD LOOP==============

// ===========MULTIDIMENTIONAL ARRAY=============



var sum = 0;
for(var x=0; x<5; x++){
	for (var y=0; y<1; y++) {
		for (var z=0; z<1; z++)	{

			document.write(x);
			document.write("<br>");
		}
	}
}



// ===========================================================================================================


	var user = {
		name : "Lilly",
		age : 24,
		isMarried: true,
		favColor: ["pink", "red", "blue"]
	}
	console.log(user.favColor[1]);
	user.name = "Milly"  // reAdd name "Milly"
	user.job = "Teacher"	// add job "Teacher"



	var users = [
		{
			name: "milly",
			password: "12345"
		},
		{
			name: "lilly",
			password: "23456"
		},
		{
			name: "billy",
			password: "34567"
		}
	]

	console.log(users[2].username);

	// ============FUNCTION==============
	
	function hello(){
		console.log("Hello World");
	}
	hello();
	function movie(m){
		console.log(m);
	}
	movie("The persuit of Happiness");
	function movie(m,n){
		return m*n;
	}
	movie(3,2);




	function checkDriverAge(){
		var age = Number(prompt("Enter your age: "));

		if(age<18){
			document.write("<h1>Sorry, You are too young to drive this car. Power off.</h1>");
		}else if(age===18){
			document.write("<h1>Congratulations on your first year of driving. Enjoy the ride!</h1>");
		}else if(age>18){
			document.write("<h1>Powering On. Enjoy the ride!</h1>");
		}else{
			document.write("<h1>Sorry wrong input.</h1>");
		}
	}

	console.log(checkDriverAge());



	function checkDriverAge2(age){
		
			if(age<18){
				document.write("<h1>Sorry, You are too young to drive this car. Power off.</h1>");
			}else if(age===18){
				document.write("<h1>Congratulations on your first year of driving. Enjoy the ride!</h1>");
			}else if(age>18){
				document.write("<h1>Powering On. Enjoy the ride!</h1>");
			}else{
				document.write("<h1>Sorry wrong input.</h1>");
			}
	}

	console.log(checkDriverAge2(92));




	var dataBase = [
		{
			username: "Milly",
			password: "122333"
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
	function signIn(){
		var usernamePrompt = prompt("Enter username");
		var passwordPrompt = prompt("Enter password");

		if(usernamePrompt===dataBase[0].username && passwordPrompt===dataBase[0].password){
			console.log(newsFeed);
		}
		else{
			alert("invalid");
		}
	}