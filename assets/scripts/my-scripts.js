function flip (id) {
  var cardFlip = document.getElementById(id);
  function toggleFlip () {
    if(cardFlip.style.transform == "rotateY(180deg)") {
      cardFlip.style.transform = "rotateY(0deg)";
    }
    else {
      cardFlip.style.transform = "rotateY(180deg)";
    }
  }
  cardFlip.addEventListener("click", toggleFlip);
}

flip("card1");
flip("card2");
flip("card3");
flip("card4");
flip("card5");