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

// fill dropdowns
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

  // 🚨 منع نفس الاختيار
  if (a === b) {
    alert("اختاري أكلة مختلفة للمقارنة 👀");
    return;
  }

  let x = dishes[a];
  let y = dishes[b];

  document.getElementById("result").innerHTML = `
    <table>
      <tr>
        <th>Feature</th>
        <th>${a}</th>
        <th>${b}</th>
      </tr>

      <tr>
        <td>Calories</td>
        <td>${x.cal}</td>
        <td>${y.cal}</td>
      </tr>

      <tr>
        <td>Protein</td>
        <td>${x.protein}g</td>
        <td>${y.protein}g</td>
      </tr>

      <tr>
        <td>Fat</td>
        <td>${x.fat}g</td>
        <td>${y.fat}g</td>
      </tr>
    </table>
  `;
}