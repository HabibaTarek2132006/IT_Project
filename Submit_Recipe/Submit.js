document.getElementById("recipeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let ingredients = document.getElementById("ingredients").value;
  let steps = document.getElementById("steps").value;
  let category = document.getElementById("category").value;

  if (name === "" || ingredients === "" || steps === "") {
    document.getElementById("msg").innerText = "Please fill all fields!";
    return;
  }

  let recipe = {
    name: name,
    ingredients: ingredients,
    steps: steps,
    category: category
  };

  // LocalStorage
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.push(recipe);
  localStorage.setItem("recipes", JSON.stringify(recipes));

  document.getElementById("msg").innerText = "Recipe added successfully ✔";

  document.getElementById("recipeForm").reset();
});