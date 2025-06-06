 function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".toggle-icon");
    const isOpen = content.style.display === "block";
      
    // Close all
    document.querySelectorAll(".faq-answer").forEach(el => el.style.display = "none");
    document.querySelectorAll(".toggle-icon").forEach(el => el.textContent = "+");

    if (!isOpen) {
    content.style.display = "block";
    icon.textContent = "−";
    }
}


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
 
