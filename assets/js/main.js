// Main JavaScript file for the portfolio site

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle (if needed)
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add loading states for interactive elements
    const interactiveElements = document.querySelectorAll('.interactive-container');
    interactiveElements.forEach(element => {
        if (!element.querySelector('.dashboard-container')) {
            element.innerHTML = '<div class="loading">Loading interactive content...</div>';
        }
    });

    // Smooth animations for cards
    const cards = document.querySelectorAll('.post-preview, .project-card, .background-card, .featured-item');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Copy code blocks functionality (for blog posts)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-button';
        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.5rem;
            background: #007acc;
            color: white;
            border: none;
            border-radius: 3px;
            font-size: 0.75rem;
            cursor: pointer;
        `;
        
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = 'Copy';
                }, 2000);
            });
        });

        const pre = block.parentElement;
        if (pre) {
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
        }
    });

    // Search functionality (if implemented)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const items = document.querySelectorAll('.post-preview, .project-card, .background-card');
            
            items.forEach(item => {
                const title = item.querySelector('h2').textContent.toLowerCase();
                const description = item.querySelector('p')?.textContent.toLowerCase() || '';
                
                if (title.includes(query) || description.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Theme toggle (if dark mode is implemented)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Analytics tracking (if needed)
    function trackEvent(eventName, properties = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, properties);
        }
    }

    // Track outbound links
    const outboundLinks = document.querySelectorAll('a[href^="http"]');
    outboundLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('click_external_link', {
                link_url: this.href,
                link_text: this.textContent
            });
        });
    });

    // Track project interactions
    const projectLinks = document.querySelectorAll('.project-card a, .btn');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('click_project_link', {
                link_url: this.href,
                link_text: this.textContent
            });
        });
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other scripts
window.PortfolioUtils = {
    trackEvent: function(eventName, properties = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, properties);
        }
    },
    debounce: debounce
}; 