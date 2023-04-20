//First we will select all HTML elements wit a class of card
let cards = document.querySelectorAll(".card");

//Now we will make a foreach loop and we will add an event listener on each card
cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    //When the mouse enters a card, the code first remove the active class from all the cards using another foreach method.
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    //then add the active class to the specific card that the mouse entered
    card.classList.add("active");
  });
});
