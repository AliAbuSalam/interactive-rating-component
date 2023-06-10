//rating is a global variable set on ratingButton.js script

const handleSubmitClick = () => {
  if(!rating){
    return;
  }
  const path = `thankYouPage.html?rating=${rating}`;
  window.location.href = `./${path}`;
};

const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', handleSubmitClick);