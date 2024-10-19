// Function to toggle between login and signup forms
function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

// Signup function
function signup(event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if both email and password are provided
    if (email && password) {
        // Check if user is already registered
        if (localStorage.getItem(email)) {
            alert("This email is already registered. Please log in.");
        } else {
            // Store email and password in localStorage
            const userData = { password: password };
            localStorage.setItem(email, JSON.stringify(userData));

            alert("Sign up successful! You can now log in.");
            toggleForm();  // Switch to login form
        }
    } else {
        alert("Please fill in all fields.");
    }
}

// Login function
function login(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if both email and password are provided
    if (email && password) {
        // Retrieve stored user data
        const storedUserData = localStorage.getItem(email);

        // Check if user is registered
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            // Validate the password
            if (userData.password === password) {
                alert("Login successful!");
                // Navigate to a different page after login
                window.location.href = "homepage.html"; // Redirect to dashboard page or any other page
            } else {
                alert("Incorrect password. Please try again.");
            }
        } else {
            alert("This email is not registered. Please sign up.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}
