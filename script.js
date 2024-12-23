//your JS code here. If required.
// Fetch form elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkboxInput = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingUserContainer = document.getElementById("existing-user-container");
const form = document.getElementById("login-form");

// Function to load saved user data if available
function loadSavedUser() {
	const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");

	// If there are saved details, display the existing user button
	if (savedUsername && savedPassword) {
		const existingUserButton = document.createElement("button");
		existingUserButton.id = "existing";
		existingUserButton.textContent = "Login as existing user";
		existingUserContainer.innerHTML = ""; // Clear any existing buttons
		existingUserContainer.appendChild(existingUserButton);

		// Handle click for the existing user button
		existingUserButton.addEventListener("click", () => {
			alert(`Logged in as ${savedUsername}.`);
		});
	}
}

// Handle form submission
form.addEventListener("submit", (event) => {
	event.preventDefault(); // Prevent page reload

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();
	const rememberMe = checkboxInput.checked;

	if (rememberMe) {
		// Save to local storage if "Remember me" is checked
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else {
		// Remove from local storage if "Remember me" is unchecked
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}

	// Show login alert
	alert(`Logged in as ${username}.`);

	// Reload saved user data
	loadSavedUser();
});

// Initial load of saved user data
loadSavedUser();
