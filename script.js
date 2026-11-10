const BASE_URL = "https://pluto-boys-global.onrender.com";

async function postJSON(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

function showMessage(el, text, ok) {
  el.textContent = text;
  el.style.color = ok ? "green" : "red";
}

// REGISTER
async function register() {
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value;
  const message = document.getElementById("regMessage");

  if (!username || !password) {
    showMessage(message, "Fill in all fields", false);
    return;
  }
  try {
    const { ok, data } = await postJSON("/register", { username, password });
    showMessage(message, data.message || (ok ? "Account created" : "Registration failed"), ok);
    if (ok) setTimeout(() => (window.location.href = "index.html"), 1200);
  } catch {
    showMessage(message, "Can't reach the server. Try again in a minute.", false);
  }
}

// LOGIN
async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!username || !password) {
    showMessage(message, "Fill in all fields", false);
    return;
  }
  try {
    const { ok, data } = await postJSON("/login", { username, password });
    if (ok && data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      showMessage(message, data.message || "Login failed", false);
    }
  } catch {
    showMessage(message, "Can't reach the server. Try again in a minute.", false);
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// Redirect to login if not signed in
if (window.location.pathname.endsWith("dashboard.html") &&
    !localStorage.getItem("token")) {
  window.location.href = "index.html";
}

// Form hooks (safe on any page)
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});