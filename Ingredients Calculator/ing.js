let basePeople = 2;
let ingredients = [];

/* 🍲 Load Recipe */
function loadRecipe(){
  let name = document.getElementById("name").value;
  let country = document.getElementById("country").value;
  let people = parseInt(document.getElementById("people").value);

  let lines = document.getElementById("input").value.trim().split("\n");

  ingredients = lines.map(line => {
    let parts = line.trim().split(" ");
    let amount = parseFloat(parts[0]);

    return {
      amount: isNaN(amount) ? 0 : amount,
      unit: parts[1] || "",
      name: parts.slice(2).join(" ")
    };
  });

  document.getElementById("title").innerText = name;
  document.getElementById("countryText").innerText = "Country: " + country;

  update(people);
}

/* 🧮 Update */
function update(people){
  let list = document.getElementById("output");
  list.innerHTML = "";

  let factor = getCountryFactor();

  ingredients.forEach(item => {
    if(item.amount === 0){
      list.innerHTML += `<li>${item.name}</li>`;
    } else {
      let newAmount = (item.amount * people * factor) / basePeople;
      newAmount = Math.round(newAmount * 100) / 100;
      list.innerHTML += `<li>${newAmount} ${item.unit} ${item.name}</li>`;
    }
  });
}

/* 🌍 Country effect */
function getCountryFactor(){
  let country = document.getElementById("country").value;
  let factors = {
    Egypt: 1,
    USA: 1.5,
    Italy: 1.2,
    India: 0.8
  };
  return factors[country] || 1;
}

/* 📌 Navbar */
fetch("../../component/navbar/nav.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar").innerHTML = data;
});

/* 📌 Footer */
fetch("../../component/footer/footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
});
