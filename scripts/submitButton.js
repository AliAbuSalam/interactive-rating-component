const handleSubmitClick = () => {
  console.log('rating: ', rating);
  window.location.href = '/thankYouPage.html';
};

const submitButton = document.getElementById('submit-button')
console.log('submitButton: ', submitButton);

submitButton.addEventListener('click', handleSubmitClick);