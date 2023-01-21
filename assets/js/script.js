var button = document.getElementById('read-btn');

button.addEventListener('click', function() {
    var card = document.querySelector('.card');

    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'LEIA MENOS';
    }

    button.textContent = 'LEIA MAIS';
});