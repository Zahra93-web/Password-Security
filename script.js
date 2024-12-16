document.getElementById('check-btn').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');

    // Clear previous feedback
    feedback.textContent = '';

    // Validate if the password is empty
    if (!password) {
        feedback.textContent = 'Please enter a password!';
        feedback.classList.remove('weak', 'moderate', 'strong');
        feedback.classList.add('weak');
        return;
    }

    // Password Strength Criteria
    let strength = 0;

    // Check length (password should be at least 8 characters)
    if (password.length >= 8) strength++;
    
    // Check for numbers
    if (/\d/.test(password)) strength++;
    
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength++;
    
    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Set feedback based on strength
    if (strength === 1) {
        feedback.textContent = 'Weak password';
        feedback.classList.remove('moderate', 'strong');
        feedback.classList.add('weak');
    } else if (strength === 2) {
        feedback.textContent = 'Moderate password';
        feedback.classList.remove('weak', 'strong');
        feedback.classList.add('moderate');
    } else if (strength >= 3) {
        feedback.textContent = 'Strong password';
        feedback.classList.remove('weak', 'moderate');
        feedback.classList.add('strong');
    } else {
        feedback.textContent = 'Password is too short or weak';
        feedback.classList.remove('moderate', 'strong');
        feedback.classList.add('weak');
    }
});
