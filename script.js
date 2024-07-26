// hover animation 
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, index * 100); // Stagger animation timing
    });
});
