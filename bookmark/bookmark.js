const container = document.querySelector(".bookmark-container");

// تحميل البيانات
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// عرض البيانات
function renderBookmarks() {
  container.innerHTML = "";

  if (bookmarks.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>No bookmarks yet ❤️</p>";
    return;
  }

  bookmarks.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("bookmark-card");

    card.innerHTML = `
      <button class="delete-btn" onclick="deleteItem(${index})">✖</button>
      <h3>${item.icon} ${item.name}</h3>
      <p>Saved from ${item.from}</p>
    `;

    container.appendChild(card);
  });
}

renderBookmarks();

// ❌ حذف عنصر واحد
function deleteItem(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBookmarks();
}

// 🗑️ حذف الكل
function clearBookmarks() {
  localStorage.removeItem("bookmarks");
  bookmarks = [];
  renderBookmarks();
}