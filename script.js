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
            link.addEventListener('click', (e) => {
                // If this is the menu dropdown toggle, don't close the nav
                if (link.id === 'menuDropdownToggle') {
                    e.preventDefault(); // Prevent jump
                    return;
                }
                navMenu.classList.remove('open');
                closeNav.style.display = 'none';
            });
        });
    }

    const menuDropdownToggle = document.getElementById('menuDropdownToggle');
    const menuDropdown = document.getElementById('menuDropdown');
    const arrow = menuDropdownToggle ? menuDropdownToggle.querySelector('.arrow') : null;

    if (menuDropdownToggle && menuDropdown && arrow) {
        menuDropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // <-- Add this line
            menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
            arrow.classList.toggle('open');
        });

        document.addEventListener('click', function(e) {
            if (!menuDropdownToggle.contains(e.target) && !menuDropdown.contains(e.target)) {
                menuDropdown.style.display = 'none';
                arrow.classList.remove('open');
            }
        });
    }

    // Add cart count badge to each cart icon
    document.querySelectorAll('.icon.cart').forEach(cartIcon => {
        // Create badge element if not present
        let badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = '';
        badge.style.display = 'none';
        cartIcon.appendChild(badge);

        let count = 0;
        cartIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            count++;
            badge.textContent = count;
            badge.style.display = 'inline-flex';
        });
    });

    // Toggle favorite icon color
    document.querySelectorAll('.icon.favorite').forEach(favIcon => {
        favIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            favIcon.classList.toggle('active');
        });
    });

    const seeMoreBtn = document.getElementById('see-more');
    const seeLessBtn = document.getElementById('see-less');
    const hiddenCards = document.querySelectorAll('.box.hidden-card');

    if (seeMoreBtn && seeLessBtn) {
        seeMoreBtn.addEventListener('click', function() {
            hiddenCards.forEach(card => card.classList.remove('hidden-card'));
            seeMoreBtn.style.display = 'none';
            seeLessBtn.style.display = 'inline-block';
        });

        seeLessBtn.addEventListener('click', function() {
            hiddenCards.forEach(card => card.classList.add('hidden-card'));
            seeMoreBtn.style.display = 'inline-block';
            seeLessBtn.style.display = 'none';
            window.scrollTo({ top: document.querySelector('.menu-container').offsetTop, behavior: 'smooth' });
        });
    }
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            this.reset();
        
            let msg = document.createElement('div');
            msg.className = 'success-message';
            msg.textContent = 'Thank you for contacting us! We will get back to you soon.';
           
            let oldMsg = document.querySelector('.success-message');
            if (oldMsg) oldMsg.remove();
            this.parentNode.appendChild(msg);
        });