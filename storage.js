// storage.js

const STORAGE_KEY = 'cinemaBoookings';
/**
 * Returns all bookings stored in localStorage.
 */
// Get all bookings
export function getBookings() {
    try {
        const bookings = localStorage.getItem(STORAGE_KEY);
        return bookings ? JSON.parse(bookings) : [];
    } catch (error) {
        console.error("Error loading bookings:", error);
        return [];
    }
}
/**
 * Returns all bookings stored in localStorage.
 */
// Save a new booking
export function saveBooking(booking) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
}
/**
 * Returns all bookings stored in localStorage.
 */
//Add a new booking to the existing bookings
export function addBooking(newBooking) {
    const bookings = getBookings();
    bookings.push(newBooking);
    saveBooking(bookings);
}
/**
 * Returns all bookings stored in localStorage.
 */
//Get one booking by id
export function getBookingById(id) {
    return getBookings().find(booking => booking.id === id);
}
/**
 * Returns all bookings stored in localStorage.
 */
//update an existing booking
export function updateBooking(id, updatedBooking) {
    const bookings = getBookings();
    const index = bookings.findIndex(booking => booking.id === id);
    if (index !== -1) {
        bookings[index] = updatedBooking;
        saveBooking(bookings);
    }
}

if (!newBooking.id) {
    throw new Error("Booking must have an ID");
}

// Delete a booking by id
export function deleteBooking(id) {
    const bookings = getBookings().filter(booking => booking.id !== id);
    saveBooking(bookings);
}