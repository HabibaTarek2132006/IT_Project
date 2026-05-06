// register
function register() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;

  if (!name || !email || !pass) {
    alert("Please fill all fields");
    return;
  }

  const user = { name, email, pass };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully 🎉");
  window.location.href = "login.html";
}

// login
function login() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No account found, please register first");
    return;
  }

  if (email === savedUser.email && pass === savedUser.pass) {
    alert("Login successful ✅");
    window.location.href = "/index.html";
  } else {
    alert("Wrong email or password ❌");
  }
}