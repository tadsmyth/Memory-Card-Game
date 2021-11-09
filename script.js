const cards = document.querySelectorAll('.card')

// [x] Create vars for the first and second card.
// [x] Create a check to see if card has been flipped or not

let cardBeenFlipped = false
let firstCard
let secondCard


// MATCHING LOGIC
// [] check to see if cards match
// How to compare the two cards? Img name?
//     [x] Maybe use data-card = fourofspades? I think that would work...
//      How will they match? using if statement or a strict comparison? maybe includes()
//  [x] If the cards match, need to disable so they can't be clicked again
//          do this by removing the eventlistener like Filipe brought up in Discord

function flipCard() {
    // adds the 'flip' class to any clicked card and removes it if it has the class
    this.classList.toggle('flip')
    //  check if card has been flipped for first time
    if (cardBeenFlipped == false) {
        cardBeenFlipped = true
        // gives the first card the class of flipped
        firstCard = this
    // checks for the second click
    } else {
        cardBeenFlipped = false
        secondCard = this
        //  checks to see if the func is reading the data from HTMl of each card
        // console.log(firstCard.dataset.card)
        // console.log(secondCard.dataset.card)
        
        if (firstCard.dataset.card === secondCard.dataset.card) {
            // Remove the click event so it can't be clicked again
            firstCard.removeEventListener('click' , flipCard)
            secondCard.removeEventListener('click' , flipCard)
            // remove the flip class to turn card back over if it's not a match
            // [x] delay the flip over to see the other card using timeout
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
              }, 1200)
        }
        
    }
}

function disableCard() {

}

// function matchCheck() {
//     if (firstCard.dataset.card === secondCard.dataset.card) {
//         // Remove the click event so it can't be clicked again
//         firstCard.removeEventListener('click' , flipCard)
//         secondCard.removeEventListener('click' , flipCard)
//     } else if (secondCard.dataset.card === firstCard.dataset.card) {

//     }
// }

//  Global event listeners

cards.forEach(card => card.addEventListener('click' , flipCard))




//  CURRENT BUGS
// if you click another set of cards before the first set is finished comparing, the first pair won't flip back over.
// Nothing is shuffled, so that's too easy lmao
// The game isn't couting player pairs yet. Honestly may not need to do this. Maybe just clear the board.