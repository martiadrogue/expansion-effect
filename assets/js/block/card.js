var cardSet = document.getElementsByClassName('card');

function setCardOnClicKEventListener() {
  for (var i = 0, length = cardSet.length; i < length; i++) {
    cardSet[i].addEventListener('click', onClickCardHandler);
  }
}

setCardOnClicKEventListener();
