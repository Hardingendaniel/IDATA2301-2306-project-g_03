// Get the modal
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.querySelector('.login-button');

// Get the element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
if (btn) {
    btn.addEventListener('click', function () {
        modal.style.display = 'block';
    });
}


// When the user clicks on (x), close the modal
if (span) {
    span.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

// When the user clicks outside of the modal, close the modal
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Close modal with ESC key
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

//make it so smaller screen resolutions doesn't have a horizontal scrollbar when in fullscreen mode.
function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}

// Function to update CSS based on fullscreen mode
function updateScrollbars() {
    if (isFullscreen()) {
        document.body.classList.add('fullscreen');
    } else {
        document.body.classList.remove('fullscreen');
    }
}

// Event listener for fullscreen change
document.addEventListener('fullscreenchange', updateScrollbars);
document.addEventListener('webkitfullscreenchange', updateScrollbars);
document.addEventListener('mozfullscreenchange', updateScrollbars);
document.addEventListener('MSFullscreenChange', updateScrollbars);

// Initial call to set scrollbar state
updateScrollbars();



