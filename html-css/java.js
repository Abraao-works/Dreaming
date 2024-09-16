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
function toggleAnswer(answerId) {
    var answer = document.getElementById('answer' + answerId);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}
function startDownload(progressId, button) {
    let progressBar = document.getElementById(progressId);
    let width = 0;
    button.disabled = true; // Desativa o botão enquanto o download está ativo

    let interval = setInterval(function() {
      if (width >= 100) {
        clearInterval(interval);
        button.innerHTML = "Concluído";
        button.style.backgroundColor = "#4CAF50";
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }, 100); // Simula o progresso de download
  }

  function cancelDownload(progressId) {
    let progressBar = document.getElementById(progressId);
    progressBar.style.width = '0'; // Reseta a barra de progresso
    alert("Download cancelado.");
  }