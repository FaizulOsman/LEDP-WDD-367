function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = x.length;
}


function myFunction1() {
  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x;
}



$(document).ready(function() { 
  $(function() { 
    $("#my_date_picker").datepicker(); 
  }); 
})