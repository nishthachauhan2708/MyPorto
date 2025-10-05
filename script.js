
function searchPortfolio() {
  const input = document.getElementById('searchInput');
  alert('Search: ' + input.value + ' (customize real search logic here)');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky stack Z-index effect for projects-vert-stack (next card appears in front)
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll('.projects-vert-stack .project-card');
  let maxZ = 1;
  cards.forEach(card => {
    card.style.zIndex = 1;
    const rect = card.getBoundingClientRect();
    if (rect.top <= 90 && rect.bottom >= 120) {
      card.style.zIndex = 99 + maxZ++;
    }
  });
});

