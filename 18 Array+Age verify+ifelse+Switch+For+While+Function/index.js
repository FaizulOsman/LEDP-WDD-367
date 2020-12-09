	// var x = prompt("Enter your number: 80");

	// if(x>79 && x<=100){
	// 	document.write("A+")
	// }
	// else if(x>69 && x<80){
	// 	document.write("A")
	// }
	// else if(x>59 && x<70){
	// 	document.write("A-")
	// }
	// else if(x>49 && x<60){
	// 	document.write("B")
	// }
	// else if(x>39 && x<50){
	// 	document.write("C")
	// }
	// else if(x>32 && x<40){
	// 	document.write("D")
	// }
	// else if(x>=0 && x<33){
	// 	document.write("F")
	// }
	// else{
	// 	document.write("Invalid Number")
	// }







// var num = prompt("Enter digit: ");
// switch (num) {
//     case "1":
//         document.write("One");
//         break;

//     case "2":
//         document.write("Two");
//         break;

//     default:
//         document.write("Not match");
// }





	// for(var x = 1; x<10; x++){
	// 	document.write(x + "<br>");
	// }





// var x = 3;

// while (x<10) {
// 	document.write(x + "<br>");
// 	x++;
// }







// function fun(x,y) {
// 	var a=x/y;
// 	document.write("result is " +a);
// }
// fun(100,20);




// ===================================================================================================================================


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




	var array = ["Banana ", "Apples ", "Oranges ", "Blueberries "];
	console.log(array.shift());
	document.write(array);
	document.write("<br>");


	document.write(array.sort());
	document.write("<br>")


	console.log(array.push(" Kiwi "));
	document.write(array);
	document.write("</br>")


	document.write(array.reverse());
	document.write("<br><br>")


	var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	document.write(array2[1][1][0]);
