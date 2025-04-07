document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && message) {
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            contactForm.reset(); // Reset the form
        } else {
            alert('Please fill in all fields.');
        }
    });
});