const buttons = document.querySelectorAll('.faq-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const openItem = document.querySelector('.faq-item.active');
        if (openItem && openItem !== item) {
            openItem.classList.remove('active');
        }
        item.classList.toggle('active');
    });
  });
 
function toggleMenu() {
    document.getElementById('nav-left').classList.toggle('show');
    document.getElementById('nav-right').classList.toggle('show');
}
