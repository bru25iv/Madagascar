# Madagascar
# Cinema Booking 

## Overview
A web application that displays a list of movies currently showing, complete with posters, genres, showtimes, and ticket prices. Users can book tickets or watch trailers directly from the interface. The site also features a dynamic background slideshow for a cinematic feel.

## Features
- Responsive movie listing cards with posters, genre, showtime, and price.
- Interactive buttons:
  - Book Now → confirms booking with an alert.
  - Watch Trailer → opens the trailer in a new tab.
- Background slideshow that auto‑plays movie posters every 5 seconds.
- Dark overlay for readability against bright backgrounds.
- Navigation links for Home, About, Booking, and My Bookings.
- Footer with social media links.

## Technologies Used
- HTML for structure
- CSS for styling and layout
- JavaScript for dynamic rendering and slideshow
- Font Awesome for social media icons
- Git
- Github pages

## Contributors
- Bruno – Project Lead
- Bonaya - about page
- Peace -bookings
- Victor - localstoeage
- Rachel - home page

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/movie-listing.git
2. Navigate into the project:
   cd Madagascar
3. Open the project in your visual studio code.
4. Open index.html in your browser or use live server.

## Behavior-Driven Development (BDD)

### Scenario 1: Viewing Movies on the Home Page

Given- a user opens the Cinema Booking website  
When- they view the Home page  
Then-they should see the currently showing movies, movie details, prices, "Book Now" buttons, and "Watch Trailer" buttons.

### Scenario 2: Movie Slideshow

Given -a user is on the Home page  
When -5 seconds have passed  
Then -the background image should automatically change to the next movie.

### Scenario 3: Watching a Movie Trailer

Given-a user is viewing a movie on the Home page  
When- they click the "Watch Trailer" button  
Then-the movie trailer should open in a new browser tab.

### Scenario 4: Booking a Movie

Given- a user wants to watch a movie  
When - they click the "Book Now" button  
Then - they should be able to choose a cinema, date, time, ticket type, and seat.

### Scenario 5: Selecting a Ticket Type

Given - a user is making a booking  
When- they select their ticket type  
Then- they should be able to choose between a Standard or VIP ticket.

### Scenario 6: Viewing Cinema Information

Given- a user opens the About page  
When- they view the page  
Then- they should see information about the cinema and its location.

### Scenario 7: Viewing My Bookings

Given- a user has completed a booking  
When- they open the "My Bookings" page  
Then- they should be able to see the movie, cinema, date, time, ticket type, and seat they selected.

## Licence
This project is licensed under the MIT License.

Copyright (c) 2026 Cinema Bokking Website

