//=========================HOME WORK========================
//==========================================================

// function functionOne() {
//   var x = document.getElementById("input").value;
//   document.getElementById("value").innerHTML = x;
// }


//==========================================================


// var input = document.getElementById("input");
// var button = document.getElementById("enter");
// var value = document.getElementById("value");

// button.addEventListener("click", function(){
// 	value.innerHTML = input.value;
// });


// input.addEventListener("keypress", function(x){
// 	if(x.keyCode === 13){
// 		value.innerHTML = input.value;
// 	}
// });



//==========================================================


// var myTextInput = document.getElementById("textInput");
// var textLive = document.getElementById("text_live");

// myTextInput.onkeyup = function (){
// 	textLive.textContent = this.value;
// }










// ============================CLASS 22==========================
//===============================================================










// $("p")
// $("#id")
// $(".class")
// $("#id p")
// $("p").text("")
// $("p").css({color: "green", background: "black"})

// $("p").addClass("")
// $("p").removeClass("")
// $("p").toggleClass("")

// $("p").remove()

// $("a").attr("href", "www.facebook.com");
// $("a").text("Facebook");

// $("a").removeAttr("href");

// var text = "<p></p>"


// $("button").click(function(){

// })

// $("button").on("keypress", function(){

// })








// $("h2").css({color: "red", background: "lightgray"});
// $("#demo").addClass("class");
// $("#demo").removeClass("class");
// $("#demo").toggleClass("class");
// $("h2").remove();
// $("h1").text("H1");

// $("a").attr("href", "https://facebook.com");
// $("a").text("Facebook");
// $("a").removeAttr("href");


// var text = "<p>Hello World</p>";
// $("body").append(text);
// $("body").prepend(text);
// $("h2").append(text);
// $("h2").after(text);
// $("h2").before(text);



$("button").click(function(){
	// $("#divId").hide(1000).show(2000);
	// $("#divId").toggle(2000);
	// $("a").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
	 $("#divId").slideUp(2000);
	// $("#divId").slideToggle(2000);
	
})