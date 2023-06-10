//rating is a global variable set on ratingButton.js script

const handleSubmitClick = () => {
  if(!rating){
    return;
  }
  const path = `thankYouPage.html?rating=${rating}`;
  console.log(location.hostname === 'localhost' ? `./${path}`: `./interactive-rating-component/${path}`);
  window.location.href = location.hostname === 'localhost' ? `./${path}`: `./interactive-rating-component/${path}`;
};

const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', handleSubmitClick);