// script.js
// Show details for any popup
function showDetails(id) {
    // Create overlay if it doesn't exist
    let overlay = document.getElementById('overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
    }
    overlay.style.display = 'block';
    
    // Show the requested details
    const details = document.getElementById(id);
    details.style.display = 'block';
    
    // Prevent scrolling when details are open
    document.body.style.overflow = 'hidden';
    
    // Close when clicking overlay
    overlay.addEventListener('click', function() {
        hideDetails(id);
    });
}

// Hide details
function hideDetails(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openDetails = document.querySelector('.era-details[style*="display: block"]');
        if (openDetails) {
            hideDetails(openDetails.id);
        }
    }
});

// Prevent event bubbling from details content
document.querySelectorAll('.era-details').forEach(details => {
    details.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});