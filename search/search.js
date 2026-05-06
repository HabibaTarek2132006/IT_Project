document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");
  const noResults = document.getElementById("noResults");

  // ✅ ناخد الكلمة من navbar
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  if (query) {
    input.value = query;
    filter(query);
  }

  input.addEventListener("input", function () {
    filter(this.value);
  });

  function filter(value) {
    let count = 0;

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value.toLowerCase())) {
        card.style.display = "block";
        count++;
      } else {
        card.style.display = "none";
      }
    });

    noResults.style.display = count === 0 ? "block" : "none";
  }

});