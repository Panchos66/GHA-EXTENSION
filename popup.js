// Example array of daily health facts
const healthFacts = [
  "Over 1 billion people lack access to  basic health care services.",
  "Malaria is preventable and treatable, yet it still causes over 400,000 deaths annually.",
  "Vaccination has saved millions of lives by preventing deadly diseases.",
  // Add more facts here
];

// Function to get a random fact
function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * healthFacts.length);
  return healthFacts[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
  const factText = document.getElementById("fact-text");
  factText.textContent = getRandomFact();
});

function toggleDarkMode() {
  const darkModeBtn = document.getElementById('darkModeBtn');
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    darkModeBtn.innerText = "Dark Mode";
  } else {
    document.body.classList.add('dark-mode');
    darkModeBtn.innerText = "Light Mode";
  }
}

// Add event listener to the darkModeBtn
document.addEventListener("DOMContentLoaded", function() {
  const darkModeBtn = document.getElementById('darkModeBtn');
  darkModeBtn.addEventListener("click", toggleDarkMode);
});

