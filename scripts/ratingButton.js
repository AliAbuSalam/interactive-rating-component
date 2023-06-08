let rating = null;

const handleRatingClick =(ratingButtons) => (event) => {
  event.preventDefault();
  activeButton = ratingButtons.find(button => button.classList.contains('on'));

  if(activeButton){ //turn off any previous active button before activating the clicked button
    activeButton.classList.remove('on');
    activeButton.classList.add('off');
  }
  const target = event.target
  rating = target.textContent;
  console.log('rating: ', rating);
  target.classList.remove('off')
  target.classList.add('on');
}

let ratingButtonChildren = document.getElementById('rating-button').childNodes;
let ratingButtons = Array.from(ratingButtonChildren).filter(child => child.nodeName === 'DIV');

ratingButtons.forEach(button => button.addEventListener('click', handleRatingClick(ratingButtons)));