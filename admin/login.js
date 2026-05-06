function login(){

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let msg = document.getElementById("msg");

  // 🔐 بيانات الأدمن (تقدري تغيريهم)
  let adminEmail = "suzan@gmail.com";
  let adminPassword = "1234";

  if(email === adminEmail && password === adminPassword){

    // تسجيل دخول
    localStorage.setItem("adminLoggedIn", "true");

    msg.style.color = "lightgreen";
    msg.innerText = "Login successful ✔";

    // تحويل للداشبورد
    setTimeout(()=>{
      window.location.href = "admin.html";
    }, 1000);

  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid email or password ❌";
  }
}