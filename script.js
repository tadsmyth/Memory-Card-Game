const cards = document.querySelectorAll('.card')
const newGameBtn = document.querySelector('.new-game-btn')

// [x] Create vars for the first and second card.
// [x] Create a check to see if card has been flipped or not

let cardBeenFlipped = false
let firstCard
let secondCard
// disableBoard will turn off the other cards until a match has been decided or not using a boolean
let disableBoard = false

// MATCHING LOGIC
// [] check to see if cards match
// How to compare the two cards? Img name?
//     [x] Maybe use data-card = fourofspades? I think that would work...
//      How will they match? using if statement or a strict comparison? maybe includes()
//  [x] If the cards match, need to disable so they can't be clicked again
//          do this by removing the eventlistener like Filipe brought up in Discord
//      if cards match, should they be hidden or removed from board or nah?

function flipCard() {
    if (disableBoard == true) return
    if (this === firstCard) return
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
        
        if (firstCard.dataset.card === secondCard.dataset.card) {
            // Remove the click event so it can't be clicked again
            firstCard.removeEventListener('click' , flipCard)
            secondCard.removeEventListener('click' , flipCard)
            // remove the flip class to turn card back over if it's not a match
            // [x] delay the flip over to see the other card using timeout
        } else {
           disableBoard = true
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
                disableBoard = false
              }, 1100)
        }
        
    }
}


// Shuffle Function
// This func is wrapped inside an IIEF to exceute when the browser reloads
(function shuffleBoard() {
    cards.forEach(card => card.classList.remove('flip'))
    
    cards.forEach(cards => cards.style.order = Math.floor(Math.random() * 12 ) )
})()


//  Global event listeners

cards.forEach(card => card.addEventListener('click' , flipCard))
newGameBtn.addEventListener('click' , shuffleBoard)




//  CURRENT BUGS
// [RESOLVED - kind of, there's a 1.1 sec delay until you can click another card]  if you click another set of cards before the first set is finished comparing, the first pair won't flip back over.
// Nothing is shuffled, so that's too easy lmao
// The game isn't couting player pairs yet. Honestly may not need to do this. Maybe just clear the board.
//  if player clicks the same card twice, it fails to match and removes the event listener

// CURRENT OBSTACLES

// Resolving first bug. IE, disable all other cards that aren't the clicked pair.
//  How to shuffle the cards, maybe using DOM to rearrange the imgs within their container?
// Creating a win screen
//  New Game Button needs to reset and reshuffle the board

// SHUFFLE IDEAS
//  cards are in flex bos, flex items have a numerical position.
// [] give each flex item a random position using Math.floor(Math.random( * 12 ))? 
// [] Create this func and make it a click event for the new game button.