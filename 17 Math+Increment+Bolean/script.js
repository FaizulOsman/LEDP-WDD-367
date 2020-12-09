var x = 1;
var y = 2;
var z = 3;
 	//x++	post increment
 	//++x	pre increment
 	x+=y;
 	y++;
 	++z;

document.write("1 + 2 = " +x);

document.write("<br>");

document.write("2++ = "+y+ " (post increment)");

document.write("<br>");

document.write("++3 = "+z+ " (pre increment)");


document.write("<br>");
document.write("<br>");

 var a = 1;
 var b = "1";

document.write(a==b);
document.write("<br>");
document.write(a===b);
document.write("<br>");
document.write(a!=b);
document.write("<br>");
document.write(a!==b);



	var x = 13;

	if(x>10){
		if(x<20){
			if(x==13){
				document.write("This num is 13")
			}
			else{
				document.write("This num is not 13")
			}
		}
		else{
			document.write("This num is not equal 13")
		}
	}
	else if(x==10){
		document.write("This number is 10")
	}
	else{
		document.write("x<10")
	}



	




	var fNum = Number(prompt("First number:"));
	var lNum = Number(prompt("Last number:"));

	var sum = fNum + lNum;
	var sub = fNum - lNum;
	var multi = fNum * lNum;
	var div = fNum / lNum;

	alert("Sum: " + sum);
	alert("Sub: " + sub);
	alert("Multi: " + multi);
	alert("Div: " + div);