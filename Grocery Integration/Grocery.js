let grocery = JSON.parse(localStorage.getItem("grocery")) || [];

function render() {
    const container = document.getElementById("itemsContainer");

    if (!container) return;

    container.innerHTML = "";

    if (grocery.length === 0) {
        container.innerHTML = "<p>No recipes added yet 🛒</p>";
        return;
    }

    grocery.forEach((item, index) => {
        container.innerHTML += `
        <div class="item">

            <img src="${item.img}">

            <div>
                <h2>${item.name}</h2>

                <p><b>Ingredients:</b></p>

                <ul>
                    ${item.ingredients.map(i => `<li>${i}</li>`).join("")}
                </ul>

                <button onclick="removeItem(${index})">❌ Remove</button>
            </div>

        </div>
        `;
    });
}

/* حذف عنصر واحد */
function removeItem(index) {
    grocery.splice(index, 1);
    localStorage.setItem("grocery", JSON.stringify(grocery));
    render();
}

/* مسح كل العناصر */
function clearAll() {
    localStorage.removeItem("grocery");
    grocery = [];
    render();
}

/* تشغيل العرض أول ما الصفحة تفتح */
render();