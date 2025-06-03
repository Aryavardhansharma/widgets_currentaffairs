document.addEventListener('DOMContentLoaded', function() {
    const periods = document.querySelectorAll('.period');
    const timeline = document.querySelector('.timeline-container');
    
    // Add interactive effects
    periods.forEach(period => {
        // Click effect with ripple
        period.addEventListener('click', function(e) {
            // Remove any existing ripples
            document.querySelectorAll('.ripple').forEach(ripple => {
                ripple.remove();
            });
            
            // Create new ripple
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            this.querySelector('.marker').appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1200);
            
            // Pulse animation
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 500);
        });
        
        // Keyboard navigation
        period.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Mobile touch optimization
    let touchStartY = 0;
    
    timeline.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    timeline.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        if (Math.abs(touchEndY - touchStartY) < 10) {
            const target = document.elementFromPoint(
                e.changedTouches[0].clientX, 
                e.changedTouches[0].clientY
            );
            const period = target.closest('.period');
            if (period) period.click();
        }
    }, { passive: true });
    
    // Reduced motion preference
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
        document.documentElement.style.setProperty('--glow-intensity', '0.3');
        
        const styles = document.createElement('style');
        styles.textContent = `
            *, *::before, *::after {
                transition-duration: 0.01ms !important;
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(styles);
    }
});