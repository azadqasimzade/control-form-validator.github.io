const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const rePassword = document.querySelector('#rePassword');

// error message
function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

// success message
function success(input) {
    input.className = 'form-control is-valid mb-3';
}

// check required inputs
function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value === '') {
            error(input, `${input.id} is required!`);
        } else {
            success(input);
        }
    });
}

// check email
function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, `${input.id} adress in not correct!`);
    }
}

// check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} minimum ${min} charakters!`);
    } else if (input.value.length > max) {
        error(input, `${input.id} maximum ${max} characters!`);
    } else {
        success(input);
    }
}

// check phone
function checkPhone(input) {
    var phoneno = /^\d{10}$/;
    if (phoneno.test(input.value)) {
        success(input);
    } else {
        error(input, `${input.id} must be 10 characters!`);
    }
}

// check passwords
function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, `${input2.id} do not match!`);
    }
}

// add event listeners
form.addEventListener('submit', (e) => {
    checkRequired([username, email, phone, password, rePassword]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 8, 12);
    checkPhone(phone);
    checkPasswords(password, rePassword);
    e.preventDefault();
});

// sohw and hide passwords
const showIcon1 = document.getElementById('showIcon1');
const showIcon2 = document.getElementById('showIcon2');

state = false;

showIcon1.addEventListener('click', () => {
    if (state) {
        password.setAttribute('type', 'text');
        showIcon1.classList.add('active');
        state = false;
    } else {
        password.setAttribute('type', 'password');
        showIcon1.classList.remove('active');
        state = true;
    }
});

showIcon2.addEventListener('click', () => {
    if (state) {
        rePassword.setAttribute('type', 'text');
        showIcon2.classList.add('active');
        state = false;
    } else {
        rePassword.setAttribute('type', 'password');
        showIcon2.classList.remove('active');
        state = true;
    }
});


// button disabled
function control(formId) {
    let invalids = document.getElementById(formId).querySelectorAll(':invalid').length,
        dsButton = document.getElementById(formId).querySelector('#dsButton');
    if (invalids == 0) {
        dsButton.removeAttribute('disabled');
    } else {
        dsButton.setAttribute('disabled', 'disabled');
    }
}

control('form1');



// password.addEventListener('keyup', () => {
//     if (password.value.length !== 0) {
//         showIcon1.classList.add('active');
//         password.setAttribute('type', 'text');
//         state = false;
//     } else {
//         showIcon1.classList.remove('active');
//         password.setAttribute('type', 'password');
//         state = true;
//     }
// });