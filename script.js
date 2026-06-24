const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const form = document.getElementById('loginForm');
const demoMessage = document.getElementById('demo-message');

function toggleButton() {
  loginBtn.disabled = !(username.value.trim() && password.value.trim());
}

username.addEventListener('input', toggleButton);
password.addEventListener('input', toggleButton);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Educational demo only: nothing is sent anywhere.
  // In a real app, this is where you'd call your own backend's auth API.
  demoMessage.style.display = 'block';
  form.reset();
  loginBtn.disabled = true;
});
