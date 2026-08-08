const BOOKING_STORAGE_KEY = 'cinemaBookings';

function getBookings() {
    const raw = localStorage.getItem(BOOKING_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

function saveBookings(bookings) {
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookings));
}

function createBooking(booking) {
    const bookings = getBookings();
    bookings.push(booking);
    saveBookings(bookings);
    return booking;
}

function updateBooking(updatedBooking) {
    const bookings = getBookings().map((booking) => {
        return booking.id === updatedBooking.id ? updatedBooking : booking;
    });
    saveBookings(bookings);
    return updatedBooking;
}

function deleteBooking(id) {
    const bookings = getBookings().filter((booking) => booking.id !== id);
    saveBookings(bookings);
}





