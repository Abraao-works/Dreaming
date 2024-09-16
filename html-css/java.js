document.getElementById('profile-button').addEventListener('click', function() {
    const menu = document.getElementById('profile-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Opcional: Fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.getElementById('profile-menu');
    const button = document.getElementById('profile-button');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
});
