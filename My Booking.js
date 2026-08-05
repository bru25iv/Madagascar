
document.addEventListener('DOMContentLoaded', () => {
    const movies = document.querySelectorAll('.movie');

    movies.forEach((movie) => {
        const statusEl = movie.querySelector('.booking-status');
        const stubEl = movie.querySelector('.ticket-stub');

        if (!statusEl || !stubEl) return;

        movie.style.cursor = 'pointer';

        movie.addEventListener('click', () => {
            const isBooked = statusEl.textContent.trim().toLowerCase() === 'booked';

            if (isBooked) {
                statusEl.textContent = 'Not booked';
                movie.classList.remove('booked');
            } else {
                statusEl.textContent = 'Booked';
                movie.classList.add('booked');
            }
        });

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'booking-btn';
        button.textContent = 'Book';

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const isBooked = statusEl.textContent.trim().toLowerCase() === 'booked';

            if (isBooked) {
                statusEl.textContent = 'Not booked';
                movie.classList.remove('booked');
                button.textContent = 'Book';
            } else {
                statusEl.textContent = 'Booked';
                movie.classList.add('booked');
                button.textContent = 'Cancel';
            }
        });

        stubEl.insertBefore(button, stubEl.firstChild);
    });
});
````