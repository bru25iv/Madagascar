// storage.js

const STORAGE_KEY = 'cinemaBoookings';

//Get all bookings
export function getBookings() {
    const bookings = localStorage.getItem(STORAGE_KEY);
    return bookings ? JSON.parse(bookings) : [];
}

// Save a new booking
export function saveBooking(booking) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
}

//Add a new booking to the existing bookings
export function addBooking(newBooking) {
    const bookings = getBookings();
    bookings.push(newBooking);
    saveBooking(bookings);
}

//Get one booking by id
export function getBookingById(id) {
    return getBookings().find(booking => booking.id === id);
}

//update an existing booking
export function updateBooking(id, updatedBooking) {
    const bookings = getBookings();
    const index = bookings.findIndex(booking => booking.id === id);
    if (index !== -1) {
        bookings[index] = updatedBooking;
        saveBooking(bookings);
    }
}

// Delete a booking by id
export function deleteBooking(id) {
    const bookings = getBookings().filter(booking => booking.id !== id);
    saveBooking(bookings);
}