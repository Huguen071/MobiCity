document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Processar a denúncia aqui (simulação)
        alert('Denúncia enviada com sucesso!');
        
        form.reset();
    });
});