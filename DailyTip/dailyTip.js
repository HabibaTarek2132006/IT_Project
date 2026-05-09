const tips = [
  "Add salt after water starts boiling when cooking pasta.",
  "Let meat rest before cutting for better taste.",
  "Don’t wash mushrooms too much.",
  "Preheat your pan before cooking.",
  "Use lemon instead of extra salt.",
  "Cut onions under cold water to avoid tears.",
  "Taste your food before serving.",
  "Marinate meat for at least 30 minutes."
];

let currentTip = "";

/* random tip */
function newTip(){
  const random = Math.floor(Math.random() * tips.length);
  currentTip = tips[random];

  document.getElementById("tipText").innerText = currentTip;
}

/* save tip */
function saveTip(){
  let saved = JSON.parse(localStorage.getItem("favTips")) || [];

  if(!saved.includes(currentTip)){
    saved.push(currentTip);
  }

  localStorage.setItem("favTips", JSON.stringify(saved));

  showFavorites();
}

/* delete tip */
function deleteTip(index){
  let saved = JSON.parse(localStorage.getItem("favTips")) || [];

  saved.splice(index, 1);

  localStorage.setItem("favTips", JSON.stringify(saved));

  showFavorites();
}

/* show favorites */
function showFavorites(){
  let saved = JSON.parse(localStorage.getItem("favTips")) || [];

  let list = document.getElementById("favList");
  list.innerHTML = "";

  saved.forEach((tip, index) => {

    let li = document.createElement("li");

    li.innerHTML = `
      <span>${tip}</span>
      <button class="delete-btn" onclick="deleteTip(${index})">🗑️</button>
    `;

    list.appendChild(li);
  });
}

/* init */
window.onload = function(){
  newTip();
  showFavorites();
}