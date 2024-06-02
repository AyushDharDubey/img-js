document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const errorMessage = document.getElementById('error-message');

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessage.innerHTML = '';

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            errorMessage.innerHTML += 'Passwords do not match. <br/> ';
        }

        const phone = document.getElementById('phone').value;
        const phoneRegex  = /^(\+\d{1,3}\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{4})$/;

        if (!phoneRegex.test(phone)) {
            errorMessage.innerHTML += 'Invalid phone number format. <br/> ';
        }

        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            errorMessage.innerHTML += 'Invalid email format.';
        }

        if (!errorMessage.innerHTML){
            alert('Signup successful.')
        }
    });
});
