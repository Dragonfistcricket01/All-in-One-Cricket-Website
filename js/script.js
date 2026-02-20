// Clock Functionality
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    if (clockElement) clockElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Toggle theme when button is clicked
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            body.classList.toggle('dark-mode');

            // Save the preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

// Menu Icon and Navigation Functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navOverlay = document.getElementById('navOverlay');
    const menu = document.getElementById('menu');
    const body = document.body;

    if (menuIcon && navOverlay && menu) {
        // Toggle menu
        menuIcon.addEventListener('click', function () {
            menuIcon.classList.toggle('close');
            navOverlay.classList.toggle('reveal-nav');
            menu.classList.toggle('reveal-items');

            // Toggle body scroll
            if (navOverlay.classList.contains('reveal-nav')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking on a regular menu item (not submenu items)
        const regularMenuItems = document.querySelectorAll('.menu-item:not(.menu-item-with-sub)');
        regularMenuItems.forEach(item => {
            item.addEventListener('click', function () {
                menuIcon.classList.remove('close');
                navOverlay.classList.remove('reveal-nav');
                menu.classList.remove('reveal-items');
                body.style.overflow = 'auto';
            });
        });
    }

    // Submenu functionality for mobile
    const menuItemsWithSub = document.querySelectorAll('.menu-item-with-sub');

    menuItemsWithSub.forEach(item => {
        item.addEventListener('click', function (e) {
            // Only handle click on mobile (width <= 1024px)
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const submenuId = this.getAttribute('data-submenu');
                const submenu = document.getElementById(`submenu-${submenuId}`);

                if (submenu) {
                    // Close all other submenus
                    const allSubmenus = document.querySelectorAll('.submenu');
                    allSubmenus.forEach(sub => {
                        if (sub !== submenu) {
                            sub.classList.remove('active');
                        }
                    });

                    // Toggle current submenu
                    submenu.classList.toggle('active');

                    // Rotate arrow
                    const arrow = this.querySelector('i');
                    if (arrow) {
                        if (submenu.classList.contains('active')) {
                            arrow.style.transform = 'rotate(180deg)';
                        } else {
                            arrow.style.transform = 'rotate(0deg)';
                        }
                    }
                }
            }
        });
    });

    // Handle window resize - reset submenus when switching to desktop
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth > 1024) {
                // Desktop mode - remove active class from all submenus
                const allSubmenus = document.querySelectorAll('.submenu');
                allSubmenus.forEach(sub => {
                    sub.classList.remove('active');
                });

                // Reset all arrows
                const allArrows = document.querySelectorAll('.menu-item-with-sub i');
                allArrows.forEach(arrow => {
                    arrow.style.transform = 'rotate(0deg)';
                });
            }
        }, 250);
    });
});

// FAQ Drop-down Functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                // Test if this item is currently active
                const isActive = item.classList.contains('active');

                // Close all FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // If this item wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Account Dropdown Functionality
document.addEventListener('DOMContentLoaded', function () {
    const accountBtn = document.getElementById('account-btn');
    const accountDropdown = document.getElementById('accountDropdown');

    if (accountBtn && accountDropdown) {
        accountBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            accountDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!accountBtn.contains(e.target) && !accountDropdown.contains(e.target)) {
                accountDropdown.classList.remove('active');
            }
        });
    }
});

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button');
            const originalHTML = submitBtn.innerHTML;

            // Loader
            submitBtn.innerHTML = '<span class="spinner"><i class="ri-loader-4-line"></i></span>';
            submitBtn.disabled = true;

            // Add spinner animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .spinner {
                    display: inline-block;
                    animation: spin 1s linear infinite;
                }
            `;
            if (!document.getElementById('spinner-style')) {
                style.id = 'spinner-style';
                document.head.appendChild(style);
            }

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="ri-check-line"></i>';
                submitBtn.style.background = '#4caf50';
                submitBtn.disabled = false;

                setTimeout(() => {
                    emailInput.value = '';
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }
});