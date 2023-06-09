const params = new URLSearchParams(window.location.search);

const rating = params.get('rating');

console.log('rating: ', rating);

const ratingValue = document.getElementById('rating-value');

if(rating >= 1 && rating <= 5){
  ratingValue.innerHTML = rating;
}