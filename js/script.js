document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Debug: Log to check if elements are found
    console.log('Burger Menu:', burgerMenu);
    console.log('Nav Menu:', navMenu);

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            console.log('Burger menu clicked');
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                console.log('Menu link clicked:', link.textContent);
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } else {
        console.error('Burger menu or nav menu not found in DOM');
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('h3').textContent;
            alert(`Explore ${productName}!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const featureNum = card.getAttribute('data-feature');
            card.style.background = `radial-gradient(circle, rgba(0,255,136,0.3), rgba(0,0,0,0.8))`;
            setTimeout(() => {
                card.style.background = 'rgba(255,255,255,0.1)';
            }, 300);
            console.log(`Feature ${featureNum} clicked!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    const socialIcons = document.querySelectorAll('.social-icon');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            console.log(`Newsletter subscription attempt with email: ${emailInput.value}`);
            alert('Thanks for subscribing to Volt Energy Drink updates!');
            emailInput.value = '';
        });
    }

    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = icon.getAttribute('data-platform');
            console.log(`Clicked social icon: ${platform}`);
            alert(`Follow Volt on ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
            });

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            }

            console.log(`FAQ toggled: ${item.querySelector('h3').textContent}`);
        });
    });
});
