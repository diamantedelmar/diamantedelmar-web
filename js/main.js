document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's an internal link within the same page (e.g., #section)
            if (this.pathname === window.location.pathname && this.hash !== '') {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
            // If it's a link to a different page, let default behavior happen
        });
    });

    // Sticky Header
    const header = document.querySelector('.main-header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger Menu for Mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Testimonial Slider (Index Page)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let currentSlide = 0;
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-item');
        const totalSlides = testimonials.length;
        const sliderDotsContainer = document.querySelector('.slider-dots');

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showSlide(i));
            sliderDotsContainer.appendChild(dot);
        }

        const dots = sliderDotsContainer.querySelectorAll('.dot');

        function showSlide(index) {
            testimonials.forEach((slide, i) => {
                slide.style.display = 'none';
                dots[i].classList.remove('active');
            });
            testimonials[index].style.display = 'block';
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Initialize slider
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }


    // Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = item.src;
            lightboxImg.alt = item.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Apartment thumbnail gallery (Apartments Page)
    document.querySelectorAll('.apartment-gallery').forEach(gallery => {
        const mainImage = gallery.querySelector('img:first-child');
        const thumbnails = gallery.querySelectorAll('.thumbnail-grid img');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                mainImage.src = thumbnail.src;
                mainImage.alt = thumbnail.alt;
            });
        });
    });


    // Contact Form Submission (Contact Page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Basic validation (browser's HTML5 validation handles most of it)
            if (this.checkValidity()) {
                // In a real application, you'd send this data to a server
                // using fetch() or XMLHttpRequest here.
                alert('Το μήνυμά σας εστάλη. Θα επικοινωνήσουμε σύντομα μαζί σας!');
                this.reset(); // Clear the form
            } else {
                // This branch usually handles cases where browser validation fails or custom validation is added
                alert('Παρακαλούμε συμπληρώστε όλα τα απαιτούμενα πεδία σωστά.');
            }
        });
    }

});