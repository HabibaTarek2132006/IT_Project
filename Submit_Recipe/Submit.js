document.getElementById("recipeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let ingredients = document.getElementById("ingredients").value;
  let steps = document.getElementById("steps").value;
  let category = document.getElementById("category").value;
  let imageInput = document.getElementById("image");

  if (!name || !ingredients || !steps) {
    document.getElementById("msg").innerText = "Please fill all fields!";
    return;
  }

  let reader = new FileReader();

  reader.onload = function() {

    let recipe = {
      id: Date.now(),
      name,
      ingredients,
      steps,
      category,
      image: reader.result || "",
      status: "pending"
    };

    let pending = JSON.parse(localStorage.getItem("pendingRecipes")) || [];
    pending.push(recipe);
    localStorage.setItem("pendingRecipes", JSON.stringify(pending));

    document.getElementById("msg").innerText = "Recipe sent for review ✔";
    document.getElementById("recipeForm").reset();
  };

  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    reader.onload();
  }
});