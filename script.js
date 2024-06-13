document.addEventListener('DOMContentLoaded', function() {
    console.log('Documento cargado y listo');

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            console.log('Nombre:', name);
            console.log('Email:', email);
            console.log('Mensaje:', message);
            alert('Mensaje enviado exitosamente.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
