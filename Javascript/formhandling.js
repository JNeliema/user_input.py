document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const summary = document.getElementById('formSummary');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Capture form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.querySelector('input[name="contact"]:checked')?.value;
        const terms = document.getElementById('terms').checked;

        // Data validation
        let errors = [];
        if (!name) errors.push('Name is required.');
        if (!email || !validateEmail(email)) errors.push('Invalid email format.');
        if (!contact) errors.push('Preferred contact method must be selected.');
        if (!terms) errors.push('You must accept the terms and conditions.');

        // Display errors or process data
        if (errors.length > 0) {
            summary.innerHTML = errors.map(error => `<p class="error">${error}</p>`).join('');
        } else {
            // Store form data in an object
            const formData = {
                name,
                email,
                contact,
                termsAccepted: terms
            };

            // Display form data
            summary.innerHTML = `
                <h3>Form Summary</h3>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Preferred Contact Method:</strong> ${formData.contact}</p>
                <p><strong>Terms Accepted:</strong> ${formData.termsAccepted ? 'Yes' : 'No'}</p>
            `;
        }
    });

    // Real-time validation feedback
    document.getElementById('email').addEventListener('input', () => {
        const email = document.getElementById('email').value;
        const error = validateEmail(email) ? '' : 'Invalid email format.';
        document.querySelector('label[for="email"] + .error')?.remove();
        if (error) {
            const errorElem = document.createElement('span');
            errorElem.className = 'error';
            errorElem.textContent = error;
            document.querySelector('label[for="email"]').appendChild(errorElem);
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
