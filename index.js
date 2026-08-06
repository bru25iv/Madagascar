const movieList = document.getElementById("movie-list");

const movies = [
  {
    title: "Minions and Monsters",
    genre: "Comedy",
    showtime: "8:00 PM",
    poster: "https://m.media-amazon.com/images/M/MV5BZjZkNzgyYTUtNjA1Yy00OTNmLTg5YWEtNmU4ZGM0ZjkwMmZhXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Spider-Man: Brand New Day",
    genre: "Action",
    showtime: "9:00 PM",
    poster: "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "The Odyssey",
    genre: "Adventure",
    showtime: "9:30 PM",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/The_Odyssey_%282026_film%29_poster.jpg"
  },
  {
    title: "Toy Story 5",
    genre: "Animation",
    showtime: "10:00 PM",
    poster: "https://image.tmdb.org/t/p/original/pxG26JdyuiDvJbSoucknaFiLeZD.jpg"
  },
  {
    title: "Motor City",
    genre: "Thriller",
    showtime: "10:30 PM",
    poster: "https://image.tmdb.org/t/p/original/lGovcOtxugJPhfJjFKud9EbWtOA.jpg"
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
      <button>Book Now</button>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      alert(`${movie.title} has been booked!`);
    });

    movieList.appendChild(card);
  });
}


