// Hamburger menü
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
  sideMenu.style.display = sideMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Modal aç/kapat fonksiyonları
function openBizKimiz() {
  document.getElementById('bizModal').style.display = 'block';
}
function closeBizKimiz() {
  document.getElementById('bizModal').style.display = 'none';
}

function openSunum() {
  document.getElementById('sunumModal').style.display = 'block';
}
function closeSunum() {
  document.getElementById('sunumModal').style.display = 'none';
}

function openFeedback() {
  document.getElementById('feedbackModal').style.display = 'block';
}
function closeFeedback() {
  document.getElementById('feedbackModal').style.display = 'none';
}

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
  const modals = ['bizModal','sunumModal','feedbackModal'];
  modals.forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};
