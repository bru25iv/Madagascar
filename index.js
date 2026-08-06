const movieList = document.getElementById("movie-list");

// Read movies from localStorage (your teammate will add them)
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
      <button>Book Now</button>
    `;

    // Add booking logic inside the loop
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
      bookings.push({
        title: movie.title,
        genre: movie.genre,
        showtime: movie.showtime,
        poster: movie.poster
      });
      localStorage.setItem("bookings", JSON.stringify(bookings));
      alert(`${movie.title} has been booked!`);
    });

    movieList.appendChild(card);
  });
}

