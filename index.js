const movieList = document.getElementById("movie-list");

// Dummy dataset for testing (remove later when teammate adds localStorage code)
localStorage.setItem("movies", JSON.stringify([
  {
    title: "Spider-Man: Brand New Day",
    genre: "Action",
    showtime: "7:30 PM",
    price: "$10",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Spider-Man_Brand_New_Day.jpg",
    trailer: "https://www.youtube.com/embed/EXAMPLE_ID"
  },
  {
    title: "The Odyssey",
    genre: "Adventure",
    showtime: "9:00 PM",
    price: "$12",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/86/Odyssey_movie_poster.jpg",
    trailer: "https://www.youtube.com/embed/EXAMPLE_ID"
  }
]));

// Get movies from localStorage
const movies = JSON.parse(localStorage.getItem("movies")) || [];

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
            <button>Book Now</button>
        `;

        movieList.appendChild(card);
    });
}
