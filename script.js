const toggleMenu = document.getElementById('toggle-menu');
const sidebar = document.getElementById('sidebar');
const buttons = document.querySelectorAll('#menu button');
const sections = document.querySelectorAll('.section');

// Mostrar/Ocultar Sidebar
toggleMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

// Navegación de secciones
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Resaltar opción activa
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Cambiar sección activa
        sections.forEach(section => section.classList.remove('active'));
        const target = document.getElementById(button.dataset.target);
        if (target) target.classList.add('active');
    });
});

// Mostrar descripción de licenciaturas
const licenciaturaButtons = document.querySelectorAll('.licenciatura-btn');
licenciaturaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const info = btn.nextElementSibling;
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});
