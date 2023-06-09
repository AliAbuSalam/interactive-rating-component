//rating is a global variable set on ratingButton.js script

const handleSubmitClick = () => {
  if(!rating){
    return;
  }
  window.location.href = `/thankYouPage.html?rating=${rating}`;
};

const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', handleSubmitClick);