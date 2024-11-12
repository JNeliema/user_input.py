// Function to validate registration form
function validateRegistrationForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country');
    const terms = document.getElementById('terms');

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('countryError').textContent = '';
    document.getElementById('termsError').textContent = '';

    // Name validation
    if (!name.value.trim()) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Password validation
    if (password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Confirm Password validation
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Age validation
    const ageValue = parseInt(age.value, 10);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
        document.getElementById('ageError').textContent = 'Age must be a number between 18 and 100.';
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required.';
        isValid = false;
    }

    // Country validation
    if (!country.value) {
        document.getElementById('countryError').textContent = 'Country is required.';
        isValid = false;
    }

    // Terms and Conditions validation
    if (!terms.checked) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
        alert('Registration successful!');
        // You can add form submission logic here
        // e.g., form.submit();
    }
}

// Function to validate login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get form elements
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    // Clear previous errors
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginEmail.value.trim() || !emailPattern.test(loginEmail.value)) {
        document.getElementById('loginEmailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Password validation
    if (!loginPassword.value.trim()) {
        document.getElementById('loginPasswordError').textContent = 'Password is required.';
        isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
        alert('Login successful!');
        // You can add form submission logic here
        // e.g., form.submit();
    }
}

// Attach event listeners to the forms
document.getElementById('registrationForm').addEventListener('submit', validateRegistrationForm);
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);
