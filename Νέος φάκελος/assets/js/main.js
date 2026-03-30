/**
 * main.js
 * * Contains all the vanilla JavaScript for the Diamante Del Mar website.
 * This includes:
 * 1. Mobile Menu Toggle
 * 2. Apartment Page Photo Gallery
 */

document.addEventListener('DOMContentLoaded', function() {

    /**
     * 1. Mobile Menu Toggle
     * * Handles the opening and closing of the mobile navigation menu.
     */
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            // Optional: Change hamburger icon to an 'X' icon on open
            if (!mobileMenu.classList.contains('hidden')) {
                menuBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            } else {
                menuBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
            }
        });
    }

    /**
     * 2. Apartment Page Photo Gallery
     * * Allows users to click on a thumbnail image to display it as the main image.
     */
    const mainImage = document.getElementById('main-image');
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');

    if (mainImage && thumbnailsContainer) {
        const thumbnails = thumbnailsContainer.querySelectorAll('img');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update the main image's src to the clicked thumbnail's src
                mainImage.src = this.src;

                // Update alt text for accessibility
                mainImage.alt = this.alt;

                // Manage the active state border for thumbnails
                // First, remove the active class from all thumbnails
                thumbnails.forEach(t => {
                    t.classList.remove('border-amber-500');
                    t.classList.add('hover:border-2', 'hover:border-amber-500'); // Ensure hover effect is re-applied
                });

                // Then, add the active class to the clicked thumbnail
                this.classList.add('border-amber-500');
                this.classList.remove('hover:border-2', 'hover:border-amber-500'); // Remove hover effect from active thumb
            });
        });
    }
    
    /**
     * Note on Sticky Booking Card:
     * The sticky behavior for the booking card on apartment pages is handled
     * purely by CSS using Tailwind's `sticky` and `top-*` utility classes.
     * This is more performant than using a JavaScript scroll listener.
     * The relevant classes are applied directly in the HTML file (e.g., `apartments/phaedra.html`).
     */

});