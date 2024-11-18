// Inicializar los íconos de Feather
feather.replace();

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de aparición al hacer scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.benefit-item, .testimonial-item, .pricing-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Llamar una vez al cargar la página

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario, por ejemplo usando fetch
    console.log('Formulario enviado');
    
    // Mostrar un mensaje de confirmación
    alert('Gracias por contactarnos. Te responderemos pronto.');
    
    // Limpiar el formulario
    this.reset();
});

// Animación de hover para los botones CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Cambiar el color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 52, 89, 0.9)'; // Color primario con transparencia
    } else {
        header.style.backgroundColor = 'var(--color-primary)';
    }
});