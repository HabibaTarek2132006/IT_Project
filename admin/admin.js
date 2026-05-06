// LOAD DATA
function loadData(){

  let pending = JSON.parse(localStorage.getItem("pendingRecipes")) || [];
  let approved = JSON.parse(localStorage.getItem("recipes")) || [];

  let p = document.getElementById("pending");
  let a = document.getElementById("approved");

  p.innerHTML = "";
  a.innerHTML = "";

  // PENDING
  pending.forEach((r,i)=>{
    p.innerHTML += `
      <div class="card">
        <h3>${r.name}</h3>

        <img src="${r.image}">

        <p>🌍 ${r.country}</p>
        <p>📂 ${r.category}</p>
        <p>${r.ingredients}</p>

        <button class="btn-approve" onclick="approve(${i})">Approve</button>
        <button class="btn-reject" onclick="reject(${i})">Reject</button>
        <button class="btn-edit" onclick="editPending(${i})">Edit</button>
      </div>
    `;
  });

  // APPROVED
  approved.forEach((r,i)=>{
    a.innerHTML += `
      <div class="card">
        <h3>${r.name}</h3>

        <img src="${r.image}">

        <p>🌍 ${r.country}</p>
        <p>📂 ${r.category}</p>
        <p>${r.ingredients}</p>

        <button class="btn-edit" onclick="editApproved(${i})">Edit</button>
        <button class="btn-delete" onclick="deleteApproved(${i})">Delete</button>
      </div>
    `;
  });
}

// APPROVE
function approve(i){
  let pending = JSON.parse(localStorage.getItem("pendingRecipes"));
  let approved = JSON.parse(localStorage.getItem("recipes")) || [];

  approved.push(pending[i]);
  pending.splice(i,1);

  localStorage.setItem("pendingRecipes", JSON.stringify(pending));
  localStorage.setItem("recipes", JSON.stringify(approved));

  loadData();
}

// REJECT
function reject(i){
  let pending = JSON.parse(localStorage.getItem("pendingRecipes"));
  pending.splice(i,1);

  localStorage.setItem("pendingRecipes", JSON.stringify(pending));
  loadData();
}

// EDIT PENDING
function editPending(i){
  let pending = JSON.parse(localStorage.getItem("pendingRecipes"));

  let name = prompt("Edit name", pending[i].name);
  if(name) pending[i].name = name;

  localStorage.setItem("pendingRecipes", JSON.stringify(pending));
  loadData();
}

// EDIT APPROVED
function editApproved(i){
  let approved = JSON.parse(localStorage.getItem("recipes"));

  let name = prompt("Edit name", approved[i].name);
  if(name) approved[i].name = name;

  localStorage.setItem("recipes", JSON.stringify(approved));
  loadData();
}

// DELETE
function deleteApproved(i){
  let approved = JSON.parse(localStorage.getItem("recipes"));
  approved.splice(i,1);

  localStorage.setItem("recipes", JSON.stringify(approved));
  loadData();
}

// ADD ADMIN RECIPE (WITH IMAGE + COUNTRY + CATEGORY)
document.getElementById("adminForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("a_name").value.trim();
  let ingredients = document.getElementById("a_ing").value.trim();
  let steps = document.getElementById("a_steps").value.trim();
  let country = document.getElementById("a_country").value.trim();
  let category = document.getElementById("a_category").value.trim();
  let imageInput = document.getElementById("a_image");

  // VALIDATION
  if(!name || !ingredients || !steps || !country){
    alert("❌ Please fill all required fields");
    return;
  }

  let reader = new FileReader();

  reader.onload = function(){

    let recipe = {
      id: Date.now(),
      name,
      ingredients,
      steps,
      country,
      category,
      image: reader.result,
      status: "approved"
    };

    let approved = JSON.parse(localStorage.getItem("recipes")) || [];
    approved.push(recipe);

    localStorage.setItem("recipes", JSON.stringify(approved));

    document.getElementById("adminForm").reset();
    loadData();
  };

  if(imageInput.files[0]){
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    reader.onload();
  }
});

loadData();