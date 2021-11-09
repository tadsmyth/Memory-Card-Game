const cards = document.querySelectorAll('.card')

// [] Create vars for the first and second card.
// [x]Create a check to see if card has been flipped or not

let cardBeenFlipped = false
let firstCard
let secondCard



function flipCard() {
    // adds the 'flip' class to any clicked card and removes it if it has the class
    this.classList.toggle('flip')
    //  check if card has been flipped
    if (cardBeenFlipped == false) {
        cardBeenFlipped = true
        // gives the first card the class of flipped
        firstCard = this
    } else {
        cardBeenFlipped = false
        secondCard = this
        console.log({firstCard, secondCard})
        
    }
}

cards.forEach(card => card.addEventListener('click' , flipCard))
