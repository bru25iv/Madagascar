document.addEventListener('DOMContentLoaded', () => {
    const bookingList = document.querySelector('.booking-list');
    const bookingEmpty = document.querySelector('.booking-empty');
    const bookingInstructions = document.querySelector('.booking-instructions');
    const browseMovies = document.querySelector('.browse-movies');

    const bookingForm = document.querySelector('.booking-form');

    function formatShortDate(value) {
        if (!value) return '-';
        return new Date(value).toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }

    function formatPrice(value) {
        const number = Number(value);
        return Number.isFinite(number) ? `$${number.toFixed(2)}` : '-';
    }

    function renderBookings() {
        const bookings = getBookings();
        bookingList.innerHTML = '';

        if (!bookings.length) {
            if (bookingEmpty) bookingEmpty.style.display = 'block';
            if (bookingInstructions) bookingInstructions.style.display = 'block';
            if (browseMovies) browseMovies.style.display = 'block';
            return;
        }

        if (bookingEmpty) bookingEmpty.style.display = 'none';
        if (bookingInstructions) bookingInstructions.style.display = 'none';
        if (browseMovies) browseMovies.style.display = 'none';

        bookings.forEach((booking) => {
            bookingList.appendChild(createBookingCard(booking));
        });
    }

    function createBookingCard(booking) {
        const card = document.createElement('article');
        card.className = 'booking-card';

        const cardContent = document.createElement('div');
        cardContent.className = 'booking-card-content';
        cardContent.innerHTML = `
            <div class="booking-card-header">
                <div>
                    <h3 class="movie-title">${booking.movieTitle || 'Untitled movie'}</h3>
                    <p class="booking-customer">${booking.customerName || 'Guest'}</p>
                </div>
                <span class="booking-date">${formatShortDate(booking.bookingDate)}</span>
            </div>
            <div class="booking-meta">
                <div><span>Theater</span><strong>${booking.theater || '-'}</strong></div>
                <div><span>Showtime</span><strong>${formatShortDate(booking.showtime)}</strong></div>
                <div><span>Ticket price</span><strong>${formatPrice(booking.ticketPrice)}</strong></div>
                <div><span>Seats</span><strong>${booking.seats || '-'}</strong></div>
                <div><span>Seat count</span><strong>${booking.seatCount ?? '-'}</strong></div>
            </div>
        `;

        const actionBar = document.createElement('div');
        actionBar.className = 'booking-actions';

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => openEditForm(card, booking));

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            if (!confirm('Delete this booking?')) return;
            deleteBooking(booking.id);
            renderBookings();
        });

        actionBar.append(editButton, deleteButton);
        card.append(cardContent, actionBar);

        return card;
    }

    function openEditForm(card, booking) {
        const existingForm = card.querySelector('.edit-form');
        if (existingForm) return;

        const form = document.createElement('form');
        form.className = 'edit-form';
        form.innerHTML = `
            <label>
                Theater
                <select name="theater" required>
                    <option value="">Select theater</option>
                    <option value="Westgate" ${booking.theater === 'Westgate' ? 'selected' : ''}>Westgate</option>
                    <option value="Two Rivers" ${booking.theater === 'Two Rivers' ? 'selected' : ''}>Two Rivers</option>
                    <option value="Garden City" ${booking.theater === 'Garden City' ? 'selected' : ''}>Garden City</option>
                    <option value="Junction" ${booking.theater === 'Junction' ? 'selected' : ''}>Junction</option>
                    <option value="Sarit" ${booking.theater === 'Sarit' ? 'selected' : ''}>Sarit</option>
                </select>
            </label>
            <label>
                Seat numbers
                <input name="seats" value="${booking.seats || ''}" required />
            </label>
            <label>
                Seat count
                <input type="number" name="seatCount" min="1" value="${booking.seatCount || 1}" required />
            </label>
            <div class="edit-actions">
                <button type="submit" class="save-btn">Save</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </div>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const updatedSeats = formData.get('seats').trim();
            const updatedTheater = formData.get('theater');
            const updatedSeatCount = Number(formData.get('seatCount')) || 1;

            if (!updatedSeats || !updatedTheater) {
                window.alert('Please fill in all required fields before saving.');
                return;
            }

            booking.seats = updatedSeats;
            booking.theater = updatedTheater;
            booking.seatCount = updatedSeatCount;
            updateBooking(booking);
            renderBookings();
        });

        form.querySelector('.cancel-btn').addEventListener('click', () => {
            form.remove();
        });

        card.appendChild(form);
    }

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(bookingForm);

        const newBooking = {
            id: `booking-${Date.now()}`,
            movieTitle: formData.get('movie').trim(),
            customerName: formData.get('customer').trim(),
            seats: formData.get('seats').trim(),
            theater: formData.get('theater'),
            seatCount: Number(formData.get('seatCount')) || 1,
            showtime: formData.get('showtime'),
            ticketPrice: Number(formData.get('price')) || 0,
            bookingDate: new Date().toISOString(),
        };

        if (!newBooking.movieTitle || !newBooking.customerName || !newBooking.seats || !newBooking.theater || !newBooking.showtime) {
            window.alert('Please fill in all required fields before adding a booking.');
            return;
        }

        createBooking(newBooking);
        bookingForm.reset();
        renderBookings();
    });

    // click handler for the browse link/button
    if (browseMovies) {
        browseMovies.style.cursor = 'pointer';
        browseMovies.addEventListener('click', (e) => {
            // navigate to booking page (update path if different)
            window.location.href = 'booking.html';
        });
    }

    renderBookings();
});
