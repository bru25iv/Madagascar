const createBookingButtons = () => {
  document.querySelectorAll('.ticket-stub').forEach((stub) => {
    stub.querySelector('.booking-toggle')?.remove();

    const button = document.createElement('button');
    button.className = 'booking-toggle';
    button.type = 'button';
    button.dataset.booked = 'false';
    button.setAttribute('aria-pressed', 'false');
    button.textContent = 'Book now';
    stub.appendChild(button);
  });

  document.querySelectorAll('.booking-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const movie = button.closest('.movie');
      const status = movie?.querySelector('.booking-status');
      const isBooked = button.dataset.booked === 'true';
      const nextBooked = !isBooked;

      button.dataset.booked = String(nextBooked);
      button.setAttribute('aria-pressed', String(nextBooked));
      button.textContent = nextBooked ? 'Cancel booking' : 'Book now';
      button.classList.toggle('booked', nextBooked);

      if (status) {
        status.textContent = nextBooked ? 'Booked' : 'Not booked';
        status.classList.toggle('booked', nextBooked);
      }

      movie?.classList.toggle('booked', nextBooked);
    });
  });
};

createBookingButtons();
