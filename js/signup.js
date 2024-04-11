document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const qualification = document.getElementById('qualification').value;
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+/;
    const phoneRegex = /^+91[6-9]\d{9}/;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let errors = [];

    if (!name.trim()) {
        errors.push('Name is required');
    }

    if (!emailRegex.test(email)) {
        errors.push('Email is not valid');
    }

    if (!passwordRegex.test(password)) {
        errors.push('Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
    }

    if (password !== confirmPassword) {
        errors.push('Passwords do not match');
    }

    if (!phoneRegex.test(phone)) {
        errors.push('Phone number should be a 10-digit number');
    }

    if (isNaN(age) || age < 18) {
        errors.push('Age should be a number and at least 18');
    }

    if (qualification === '') {
        errors.push('Educational qualification is required');
    }

    if (gender === '') {
        errors.push('Gender is required');
    }

    if (!city.trim()) {
        errors.push('City is required');
    }

    if (errors.length > 0) {
        displayErrors(errors);
    } else {
        alert('Account created successfully');
        document.getElementById('signup-form').reset();
    }
});

function displayErrors(errors) {
    errors.forEach(error => {
        alert(error);
    });
}