function emailsent(){

    let text = document.getElementById("sendemaillink");
    text.innerHTML = "Email Sent!";

   let check = document.getElementById("checkemail");
   check.innerHTML = "Check Your Email...";
}


function changeColor(){

    document.getElementById("heart").style.color = "red";

}


function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }