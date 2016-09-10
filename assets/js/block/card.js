var cardSet = document.getElementsByClassName('card');

for (var i = 0, length = cardSet.length; i < length; i++) {
  cardSet[i].addEventListener('click', onClickCardHandler);
}
