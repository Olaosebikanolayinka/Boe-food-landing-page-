document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const closeNav = document.getElementById('closeNav');

    if (hamburger && navMenu && closeNav) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.add('open');
            closeNav.style.display = 'block';
        });

        closeNav.addEventListener('click', function() {
            navMenu.classList.remove('open');
            closeNav.style.display = 'none';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                closeNav.style.display = 'none';
            });
        });
    }
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Optionally, you can clear the form fields here
            this.reset();
            // Show a success message
            let msg = document.createElement('div');
            msg.className = 'success-message';
            msg.textContent = 'Thank you for contacting us! We will get back to you soon.';
            // Remove any existing message
            let oldMsg = document.querySelector('.success-message');
            if (oldMsg) oldMsg.remove();
            this.parentNode.appendChild(msg);
        });