const movieList = document.getElementById("movie-list");

const movies = [
  {
    title: "Minions and Monsters",
    genre: "Comedy",
    showtime: "8:00 PM",
    price: "$8",
    poster: "https://m.media-amazon.com/images/M/MV5BZjZkNzgyYTUtNjA1Yy00OTNmLTg5YWEtNmU4ZGM0ZjkwMmZhXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/HCYCke3VAZ0?si=JJFU1oIWCHCsp0Ry"
  },
  {
    title: "Spider-Man: Brand New Day",
    genre: "Action",
    showtime: "9:00 PM",
    price: "$12",
    poster: "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/embed/7e9EH9gdgy0?si=qSIE8D-d4lN1Izho"
  },
  {
    title: "The Odyssey",
    genre: "Adventure",
    showtime: "9:30 PM",
    price: "$15",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/The_Odyssey_%282026_film%29_poster.jpg",
    trailer: "https://www.youtube.com/embed/Mzw2ttJD2qQ?si=7kcwECh9IKopqojn"
  },
  {
    title: "Toy Story 5",
    genre: "Animation",
    showtime: "10:00 PM",
    price: "$10",
    poster: "https://image.tmdb.org/t/p/original/pxG26JdyuiDvJbSoucknaFiLeZD.jpg",
    trailer: "https://www.youtube.com/embed/c51ND9Hdbw0?si=qzLScVEFvNhKfU29" // placeholder
  },
  {
    title: "Motor City",
    genre: "Thriller",
    showtime: "10:30 PM",
    price: "$14",
    poster: "https://image.tmdb.org/t/p/original/lGovcOtxugJPhfJjFKud9EbWtOA.jpg",
    trailer: "https://www.youtube.com/embed/t6RklhKu9os?si=h5tlIXUYSrugd3f_"
  }
];

if (movies.length === 0) {
  movieList.innerHTML = "<p>No movies available.</p>";
} else {
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

    // Book Now button
    const bookBtn = card.querySelector(".book-btn");
    bookBtn.addEventListener("click", () => {
      alert(`${movie.title} has been booked!`);
    });

    // Watch Trailer button
    const trailerBtn = card.querySelector(".trailer-btn");
    trailerBtn.addEventListener("click", () => {
      // Open trailer in a new tab
      window.open(movie.trailer, "_blank");
    });

    movieList.appendChild(card);
  });
}
