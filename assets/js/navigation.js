

const eye = document.querySelector('#eye');
const passwordinput = document.querySelector('#modalLRInput11');

eye.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passwordinput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordinput.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


const eye2 = document.querySelector('#eye2');
const passwordregister = document.querySelector('#modalLRInput16');

eye2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passwordregister.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordregister.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }