// Hamburger menü
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

// Modallar
const feedbackModal = document.getElementById("feedbackModal");
const bizModal = document.getElementById("bizModal");
const sunumModal = document.getElementById("sunumModal");

// Hamburger menü aç/kapat
hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

// Menü dışında tıklanınca kapanır
document.addEventListener("click", (event) => {
  if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
    sideMenu.classList.remove("active");
  }
});

// Biz Kimiz modal aç/kapat
function openBizKimiz() {
  bizModal.style.display = "flex";
}
function closeBizKimiz() {
  bizModal.style.display = "none";
}

// Sunum modal aç/kapat
function openSunum() {
  sunumModal.style.display = "flex";
}
function closeSunum() {
  sunumModal.style.display = "none";
}

// Feedback modal aç/kapat
function openFeedback() {
  feedbackModal.style.display = "flex";
}
function closeFeedback() {
  feedbackModal.style.display = "none";
}

// ESC tuşuna basınca tüm modallar kapanır
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    bizModal.style.display = "none";
    sunumModal.style.display = "none";
    feedbackModal.style.display = "none";
  }
});
