// Unsplash Images API request

const apiKey = 'au_Vtt9JQBiEz3H1tYztX0tPC-5YLk30n7f7xwnPDqI';
const images = document.querySelectorAll('.image');

fetch(`https://api.unsplash.com/photos/random?query=restaurant&count=10&client_id=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    data.forEach((photo, index) => {
      images[index].src = photo.urls.regular;
    });
  });

   //getImages Function
function getImages() {
    fetch(`https://api.unsplash.com/photos/random?query=food&count=10&client_id=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        data.forEach((photo, index) => {
          images[index].src = photo.urls.regular;
       });
     });
  }
 
 // Set interval
 getImages();
 setInterval(getImages, 10000);