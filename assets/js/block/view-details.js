var viewDetails = document.getElementsByClassName('view-details')[0];
var closeLink = document.getElementsByClassName('view-details__close-link')[0];

function setCloseLinkOnClicKEventListener() {
  closeLink.addEventListener('click', onClickCloseLinkHandler);
}

function onClickCardHandler(e) {
  e = e || window.event;
  e.preventDefault();
  var target = (typeof e.target !== 'undefined') ? e.target : e.srcElement;
  var dim = target.getBoundingClientRect();
  var centerHeight = target.offsetHeight / 2;
  var centerWidth = target.offsetWidth  / 2;
  var x = dim.left + centerHeight;
  var y = dim.top + centerWidth;
  viewDetails.style.transformOrigin = Math.round(x) + 'px ' + Math.round(y) + 'px';
  setTimeout(function () {
    viewDetails.classList.add('view-details--expand');
  }, 50);
}

function onClickCloseLinkHandler() {
  viewDetails.classList.remove('view-details--expand');
}

setCloseLinkOnClicKEventListener();
