/**
 * OpenClaw Landing Page - JavaScript
 * Interactive features: countdown, animations, payment handling
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initCountdown();
    initStickyCTA();
    initLiveNotifications();
    initFAQ();
    initHeaderScroll();
    initNetworkTabs();
    initSpotsCounter();
    initAnimations();
});

// ========================================
// Countdown Timer
// ========================================
function initCountdown() {
    // Set deadline to 24 hours from now
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 24);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            // Reset countdown
            deadline.setHours(deadline.getHours() + 24);
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========================================
// Sticky CTA Button (Mobile)
// ========================================
function initStickyCTA() {
    const stickyCta = document.getElementById('stickyCta');
    const pricingSection = document.getElementById('pricing');

    if (!stickyCta || !pricingSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stickyCta.classList.remove('visible');
            } else {
                // Only show on mobile
                if (window.innerWidth <= 768) {
                    stickyCta.classList.add('visible');
                }
            }
        });
    }, { threshold: 0.1 });

    observer.observe(pricingSection);

    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            stickyCta.classList.remove('visible');
        }
    });
}

// ========================================
// Live Notifications
// ========================================
function initLiveNotifications() {
    const notification = document.getElementById('liveNotification');
    const notificationText = document.getElementById('notificationText');

    if (!notification || !notificationText) return;

    const names = [
        'Ahmad dari Jakarta',
        'Budi dari Surabaya',
        'Citra dari Bandung',
        'Dewi dari Yogyakarta',
        'Eko dari Medan',
        'Farah dari Makassar',
        'Gilang dari Semarang',
        'Hana dari Palembang',
        'Indra dari Malang',
        'Joko dari Batam'
    ];

    const cities = ['baru saja membeli', 'baru saja mendapatkan Pro', 'baru saja upgrade ke Bundle'];

    function showNotification() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAction = cities[Math.floor(Math.random() * cities.length)];
        
        notificationText.textContent = `${randomName} ${randomAction}`;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }

    // Show first notification after 5 seconds
    setTimeout(showNotification, 5000);

    // Then show every 15-25 seconds
    setInterval(() => {
        const delay = Math.random() * 10000 + 15000; // 15-25 seconds
        setTimeout(showNotification, delay);
    }, 25000);
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ========================================
// Header Scroll Effect
// ========================================
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========================================
// Network Tabs (Payment)
// ========================================
function initNetworkTabs() {
    const tabs = document.querySelectorAll('.method-tab');
    const walletAddress = document.querySelector('.address-text');

    // Wallet addresses - using TRC20 only
    const addresses = {
        trc20: 'TEW7r4BVnr88psSVDNK45D7GGrWgo93FwS'
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active to clicked tab
            tab.classList.add('active');
            
            // Update wallet address
            const network = tab.dataset.network;
            if (walletAddress && addresses[network]) {
                walletAddress.textContent = addresses[network];
            }
        });
    });
}

// ========================================
// Spots Counter (Urgency)
// ========================================
function initSpotsCounter() {
    const spotsElement = document.getElementById('spotsLeft');
    
    if (!spotsElement) return;

    let spots = 12;
    const minSpots = 3;

    // Decrease spots randomly
    setInterval(() => {
        if (spots > minSpots && Math.random() > 0.7) {
            spots--;
            spotsElement.textContent = spots;
            
            // Add visual feedback
            spotsElement.style.color = '#dc2626';
            spotsElement.style.fontWeight = '700';
            
            setTimeout(() => {
                spotsElement.style.color = '';
                spotsElement.style.fontWeight = '';
            }, 1000);
        }
    }, 30000); // Check every 30 seconds
}

// ========================================
// Package Selection
// ========================================
function selectPackage(packageName, idrPrice, usdtPrice) {
    const packageNames = {
        'basic': 'Paket Basic',
        'pro': 'Paket Pro',
        'bundle': 'Paket Bundle'
    };

    // Update payment details
    const selectedPackage = document.getElementById('selectedPackage');
    if (selectedPackage) {
        selectedPackage.innerHTML = `
            <span class="package-name">${packageNames[packageName]}</span>
            <span class="package-price">Rp ${idrPrice.toLocaleString('id-ID')}</span>
            <span class="package-usdt">~${usdtPrice} USDT</span>
        `;
    }

    // Scroll to payment section
    document.getElementById('payment').scrollIntoView({ behavior: 'smooth' });

    // Highlight selected package visually
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.style.transform = '';
        card.style.borderColor = '';
    });

    event.target.closest('.pricing-card').style.borderColor = '#6366f1';
}

// ========================================
// Copy Address
// ========================================
function copyAddress() {
    const addressText = document.querySelector('.address-text');
    
    if (!addressText) return;

    navigator.clipboard.writeText(addressText.textContent).then(() => {
        // Show feedback
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#10b981';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ========================================
// Animations on Scroll
// ========================================
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.benefit-card, .testimonial-card, .pricing-card, .faq-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// USDT Rate Updater (Mock)
// ========================================
function updateUSDTRate() {
    const rateTime = document.getElementById('rateTime');
    
    if (rateTime) {
        const now = new Date();
        rateTime.textContent = now.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}

// Update rate every 5 minutes
setInterval(updateUSDTRate, 300000);
updateUSDTRate();

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🔥 OpenClaw Landing Page', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cReady to convert visitors! 🚀', 'font-size: 14px; color: #10b981;');
