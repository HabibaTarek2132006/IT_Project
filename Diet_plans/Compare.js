const dishes = {
  "Chicken Shish Tawook": { cal: 250, protein: 30, fat: 8 },
  "Butter Chicken": { cal: 450, protein: 28, fat: 30 },
  "Chicken Alfredo": { cal: 600, protein: 25, fat: 40 },
  "Beef Lasagna": { cal: 550, protein: 30, fat: 25 },
  "Lamb Rogan Josh": { cal: 500, protein: 32, fat: 28 },
  "Koshari": { cal: 400, protein: 12, fat: 10 },
  "Pizza": { cal: 700, protein: 20, fat: 35 },
  "Feteer Meshaltet": { cal: 800, protein: 10, fat: 50 },
  "Jalebi": { cal: 300, protein: 2, fat: 15 },
  "Roti": { cal: 120, protein: 4, fat: 2 }
};

window.onload = () => {
  let d1 = document.getElementById("dish1");
  let d2 = document.getElementById("dish2");

  for (let dish in dishes) {
    d1.add(new Option(dish, dish));
    d2.add(new Option(dish, dish));
  }
};

function compare() {
  let a = document.getElementById("dish1").value;
  let b = document.getElementById("dish2").value;

  if (a === b) {
    alert("Please select two different dishes to compare.");
    return;
  }

  let x = dishes[a];
  let y = dishes[b];

  document.getElementById("result").innerHTML = `
    <div class="result-card">
      <h2>${a}</h2>
      <p> Calories: ${x.cal}</p>
      <p> Protein: ${x.protein}g</p>
      <p> Fat: ${x.fat}g</p>
    </div>

    <div class="result-card">
      <h2>${b}</h2>
      <p> Calories: ${y.cal}</p>
      <p> Protein: ${y.protein}g</p>
      <p> Fat: ${y.fat}g</p>
    </div>
  `;
}