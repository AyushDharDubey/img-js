document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const signInError = document.getElementById('signInError');

    signInForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        signInError.innerHTML = '';

        const email = document.getElementById('signInEmail').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            signInError.innerHTML += 'Invalid email format.<br/>';
            return;
        }

        const password = document.getElementById('signInPassword').value;

        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login successful');
            } else {
                signInError.innerHTML += result.error;
            }
        } catch (error) {
            alert(error.message);
        }
    });
});