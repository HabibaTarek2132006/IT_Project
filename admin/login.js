function login(e){
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let msg = document.getElementById("msg");

  let admins = [
    { email: "suzan@gmail.com", password: "1234" },
    { email: "raghad@gmail.com", password: "1234" },
    { email: "habiba@gmail.com", password: "1234" },
    { email: "shahd@gmail.com", password: "1234" },
    { email: "salma@gmail.com", password: "1234" }
  ];

  let found = admins.find(a => a.email === email && a.password === password);

  if(found){
    localStorage.setItem("adminLoggedIn", "true");

    msg.style.color = "green";
    msg.innerText = "Login successful ✔";

    setTimeout(() => {
      window.location.href = "admin.html";
    }, 1000);

  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid email or password ❌";
  }
}