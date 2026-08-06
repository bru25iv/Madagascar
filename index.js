const movieList = document.getElementById("movie-list");

const movies = [
  {
    title: "Minions and Monsters",
    genre: "Comedy",
    showtime: "6:00 PM",
    price: "INR 400",
    poster: "https://m.media-amazon.com/images/M/MV5BZjZkNzgyYTUtNjA1Yy00OTNmLTg5YWEtNmU4ZGM0ZjkwMmZhXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/HCYCke3VAZ0"
  },
  {
    title: "Spider-Man: Brand New Day",
    genre: "Action",
    showtime: "8:00 PM",
    price: "INR 520",
    poster: "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/7e9EH9gdgy0"
  },
  {
    title: "The Odyssey",
    genre: "Adventure",
    showtime: "9:30 PM",
    price: "INR 520",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/The_Odyssey_%282026_film%29_poster.jpg",
    trailer: "https://www.youtube.com/embed/Mzw2ttJD2qQ"
  },
  {
    title: "Toy Story 5",
    genre: "Animation",
    showtime: "10:30 PM",
    price: "INR 500",
    poster: "https://image.tmdb.org/t/p/original/pxG26JdyuiDvJbSoucknaFiLeZD.jpg",
    trailer: "https://www.youtube.com/embed/c51ND9Hdbw0"
  },
  {
    title: "Motor City",
    genre: "Thriller",
    showtime: "10:30 PM",
    price: "ksh 1,400",
    poster: "https://image.tmdb.org/t/p/original/lGovcOtxugJPhfJjFKud9EbWtOA.jpg",
    trailer: "https://www.youtube.com/embed/t6RklhKu9os"
  }
];

// Render movie cards
movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title} poster">
    <h2>${movie.title}</h2>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Showtime:</strong> ${movie.showtime}</p>
    <p><strong>Price:</strong> ${movie.price}</p>
    <button class="book-btn">Book Now</button>
    <button class="trailer-btn">Watch Trailer</button>
  `;

  card.querySelector(".book-btn").addEventListener("click", () => {
    alert(`${movie.title} has been booked!`);
  });

  card.querySelector(".trailer-btn").addEventListener("click", () => {
    window.open(movie.trailer, "_blank");
  });

  movieList.appendChild(card);
});

// Background slideshow
const backgrounds = movies.map(movie => movie.poster);
let bgIndex = 0;
document.body.style.backgroundImage = `url(${backgrounds[bgIndex]})`;

setInterval(() => {
  bgIndex = (bgIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
}, 5000);
