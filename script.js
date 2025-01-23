const toggleMenu = document.getElementById('toggle-menu');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

toggleMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

// Navegar entre secciones
const buttons = document.querySelectorAll('#menu button');
const sections = document.querySelectorAll('.section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        sections.forEach(section => section.classList.remove('active'));
        const target = document.getElementById(button.dataset.target);
        if (target) target.classList.add('active');
    });
});
