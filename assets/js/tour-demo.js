
/*$('.show').click(function() {
    $('#target').show(10);
    $('.show').hide(0);
    $('.hide').show(0);
});
$('.hide').click(function() {
    $('#target').hide(10);
    $('.show').show(0);
    $('.hide').hide(0);
});

*/

/*let a = document.getElementById("inlineFormInput").value;

let b = document.getElementById("plus");

b.addEventListener('click', function(){

        a=1;
        let c = a++;
      a=c;

}); */

var counter = 0

// Display total
$("#inlineFormInput2").text(counter);

// When button is clicked
$("#plus").click(function(){
  //Add 10 to counter
  counter = counter + 1;
	// Display total
	$("#inlineFormInput2").text(counter);
});


//Subtract
$("#minus").click(function(){
  counter = counter - 1;
  $("#inlineFormInput2").text(counter);
});
