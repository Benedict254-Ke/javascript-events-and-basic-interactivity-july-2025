// -------------------- Event Handling --------------------

// Toggle dark/light theme
const toggleBtn = document.getElementById("toggleThemeBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Random quote feature
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes."
];

const quoteBtn = document.getElementById("randomQuoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});

// -------------------- Custom Form Validation --------------------
const form = document.getElementById("contactForm");
const errorDisplay = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  let errors = [];

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate username
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters long.");
  }

  // Validate email (simple regex check)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate message
  if (message.length < 10) {
    errors.push("Message must be at least 10 characters long.");
  }

  // Show errors or success
  if (errors.length > 0) {
    errorDisplay.textContent = errors.join(" ");
    errorDisplay.style.color = "red";
  } else {
    errorDisplay.textContent = "Form submitted successfully!";
    errorDisplay.style.color = "green";
    form.reset(); // Clear form after success
  }
});