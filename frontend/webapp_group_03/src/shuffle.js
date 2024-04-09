document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;
    const shufflebackwards = document.getElementById("Shuffle_reviews2");

    function showCards(index) {
        cards.forEach(card => {
            card.style.display = 'none';
        });

        const totalCards = cards.length;
        const nextIndex1 = (index + 1) % totalCards;
        const nextIndex2 = (index + 2) % totalCards;

        cards[index].style.display = 'block';
        cards[nextIndex1].style.display = 'block';
        cards[nextIndex2].style.display = 'block';

        if (index === 0) {
            shufflebackwards.style.display = 'none';
        } else {
            shufflebackwards.style.display = 'block';
        }

    }
    showCards(currentIndex);

    document.getElementById('Shuffle_reviews').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCards(currentIndex);
    });

    document.getElementById('Shuffle_reviews2').addEventListener('click',()=> {
        if (currentIndex > 0) {
            currentIndex = (currentIndex - 1) %cards.length;
            showCards(currentIndex);
        }
    });
});

