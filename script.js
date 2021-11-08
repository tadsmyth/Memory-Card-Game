const cards = document.querySelectorAll('.card')

function flipCard() {
    // adds the 'flip' class to any clicked card and removes it if it has the class
    this.classList.toggle('flip')
    
}

cards.forEach(card => card.addEventListener('click' , flipCard))
