document.addEventListener('DOMContentLoaded', function() {
    
    // Validação do Formulário (Bootstrap standard)
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Simulação de envio bem sucedido
                event.preventDefault(); // Impede refresh para podermos ver o alert
                alert('Mensagem enviada com sucesso! A equipa PotatoPower agradece.');
                form.reset();
                form.classList.remove('was-validated');
                return;
            }

            form.classList.add('was-validated');
        }, false);
    }

    console.log("PotatoPower Lab: JavaScript carregado corretamente.");
});