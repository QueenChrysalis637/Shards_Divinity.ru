// main.js — аккордеон для раскрытия секций
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.rule-section');
  sections.forEach((section, index) => {
    const header = section.querySelector('.section-header');
    const content = section.querySelector('.section-content');
    if (!header || !content) return;
    // Первый раздел по умолчанию открыт
    if (index === 0) {
      content.classList.add('open');
      header.classList.add('open');
    } else {
      content.classList.remove('open');
      header.classList.remove('open');
    }
    header.addEventListener('click', () => {
      content.classList.toggle('open');
      header.classList.toggle('open');
    });
  });
});