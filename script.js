// Mostrar/ocultar el menú lateral
const toggleMenu = document.getElementById('toggle-menu');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

toggleMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    main.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
});

// Navegación entre secciones
const buttons = document.querySelectorAll('#menu button');
const sections = document.querySelectorAll('.section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        sections.forEach(section => section.classList.remove('active'));
        const target = document.getElementById(button.dataset.target);
        if (target) target.classList.add('active');
    });
});

// Botones interactivos de licenciaturas
const licBtns = document.querySelectorAll('.licenciatura-btn');

licBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const info = btn.nextElementSibling;
        const isVisible = info.style.display === 'block';
        // Ocultar todas las descripciones
        document.querySelectorAll('.licenciatura-info').forEach(info => {
            info.style.display = 'none';
        });
        // Mostrar/ocultar la información actual
        info.style.display = isVisible ? 'none' : 'block';
    });
});
