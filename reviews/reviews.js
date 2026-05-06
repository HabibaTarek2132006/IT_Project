const container = document.querySelector(".reviews-container");

function addReview() {
  const name = document.getElementById("name").value;
  const stars = document.getElementById("stars").value;
  const text = document.getElementById("text").value;

  if (name === "" || text === "") {
    alert("Please fill all fields!");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("review-card");

  card.innerHTML = `
    <h3>👤 ${name}</h3>
    <p>${stars}</p>
    <p>"${text}"</p>
  `;

  container.appendChild(card);

  document.getElementById("name").value = "";
  document.getElementById("text").value = "";
}