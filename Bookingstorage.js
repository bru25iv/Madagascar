// storage.js

const STORAGE_KEY = 'cinemaBoookings';
/**
 * Returns all bookings stored in localStorage.
 */
// Get all bookings
export function getBookings() {
    try {
        const storedBookings = localStorage.getItem(STORAGE_KEY);
return storedBookings ? JSON.parse(storedBookings) : [];
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
export function addBooking(newBooking) {
    const bookings = getBookings();

    if (bookings.some(booking => booking.id === newBooking.id)) {
        console.warn("Booking with this ID already exists.");
        return;
    }

    bookings.push(newBooking);
    saveBooking(bookings);
}

    return getBookings().find(booking => booking.id === id);
/**
 * Returns all bookings stored in localStorage.
 */
//update an existing booking
export function addBooking(newBooking) {
    const bookings = getBookings();

    if (bookings.some(booking => booking.id === newBooking.id)) {
        console.warn("Booking with this ID already exists.");
        return;
    }

    bookings.push(newBooking);
    saveBooking(bookings);
}
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

// Check if a booking exists
export function bookingExists(id) {
    return getBookings().some(booking => booking.id === id);
}