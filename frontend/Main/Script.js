// Get the modal
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.querySelector('.login-button');

// Get the element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
if (btn) {
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
}

// When the user clicks on (x), close the modal
if (span) {
    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// When the user clicks outside of the modal, close the modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Close modal with ESC key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

document.getElementById("Shuffle_reviews").addEventListener("click", function () {
    //Get all the cards
    let cards = document.querySelector(".card")

    //Check if there are cards to replace
    if (cards.length > 3) {
        let hiddenCard = document.querySelector(".card.hidden");
        if(hiddenCard) {
            hiddenCard.classList.remove("hidden");
        }
        //replace the first card with the new card
        cards[0].parentNode.replaceChild(hiddenCard, cards[0]);
    } else {
        alert("No more cards to be replaced");
    }
});
