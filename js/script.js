// Espera que o documento carregue
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o formulário
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Impede o envio real do formulário
            event.preventDefault();
            event.stopPropagation();

            // Validação simples do Bootstrap
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            } else {
                // Simulação de sucesso (Feedback ao utilizador - Nielsen)
                alert('Obrigado! A sua mensagem sobre batatas foi enviada com sucesso.');
                form.reset();
                form.classList.remove('was-validated');
            }
        });
    }

    // Exemplo extra: Log na consola para provar uso de JS
    console.log("PotatoPower Lab: Sistema carregado.");
});