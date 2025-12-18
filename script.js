const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const preview = document.getElementById("preview");
const result = document.getElementById("result");
const imageInput = document.getElementById("imageInput");

// LOGIN
function login() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Masukkan nama pengguna!");
        return;
    }
    loginPage.classList.remove("active");
    homePage.classList.add("active");
}

// LOGOUT
function logout() {
    homePage.classList.remove("active");
    loginPage.classList.add("active");
    result.innerHTML = "";
    preview.hidden = true;
    imageInput.value = "";
}

// PREVIEW GAMBAR
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.hidden = false;
    }
});

// SIMULASI KLASIFIKASI AI
function classifyImage() {
    if (!imageInput.files[0]) {
        alert("Silakan unggah gambar terlebih dahulu!");
        return;
    }

    const classifications = [
        "Lingkungan Bersih 🌿",
        "Lingkungan Tercemar 🏭",
        "Area Hijau 🌳",
        "Sampah Plastik ♻️"
    ];

    const randomResult = classifications[Math.floor(Math.random() * classifications.length)];

    result.innerHTML = `
        Hasil Klasifikasi AI: <br>
        <span style="color:#2563eb">${randomResult}</span>
    `;
}
