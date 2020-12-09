// $(window).load(function () {
// $('#gallery').jqcarousel();
// });











$(".redBtn").click(function(){
	$(".box").filter(".blue, .yellow").hide(2000);
	$(".red").show(1000);
})
$(".blueBtn").click(function(){
	$(".box").filter(".red, .yellow").hide(2000);
	$(".blue").show(1000);
})
$(".yellowBtn").click(function(){
	$(".box").filter(".blue, .red").hide(2000);
	$(".yellow").show(1000);
})
$(".all").click(function(){
	$(".box").show(1000);
})