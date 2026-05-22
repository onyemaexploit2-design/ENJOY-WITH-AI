// Theme toggle
let darkMode = true;

const themeBtn = document.getElementById("themeBtn");

function updateTheme() {
  document.body.className = darkMode ? "dark" : "light";
  themeBtn.innerText = darkMode ? "☀ Light Mode" : "🌙 Dark Mode";
}

themeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  updateTheme();
});

updateTheme();

// WhatsApp / Call button
document.getElementById("contactBtn").addEventListener("click", () => {
  const action = confirm("PRESS OK TO CHAT OR CANCEL TO CALL");

  if (action) {
    window.open("https://wa.me/2347019329268", "_blank");
  } else {
    window.open("tel:07019329268");
  }
});

// Chat system
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

function addMessage(role, text) {
  const div = document.createElement("div");
  div.className = role;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// initial message
addMessage("ai", "Hi 👋 I’m your AI assistant.");

function sendMessage() {
  if (!input.value.trim()) return;

  const userText = input.value;
  addMessage("user", userText);
  input.value = "";

  setTimeout(() => {
    addMessage(
      "ai",
      `AI Response: I understand "${userText}". ENJOY WITH ME can help automate your business.`
    );
  }, 1000);
}

// Waitlist
document.getElementById("waitlistForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("successMsg");

  if (!name || !email) return;

  msg.textContent = "✅ Successfully joined the waitlist!";
  this.reset();
});