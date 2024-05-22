# Webapp_group3 Backend
This is our exam project in the courses: **IDATA2301 Web Technologies** and
**IDATA2306 Application Development** at NTNU Ålesund.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Tests](#tests)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hardingendaniel/webapp_group3
   cd ./backend 

2. **Install dependencies**

    Make sure you have **Java** (JDK 17 or higher) and **Maven** installed. Then, run:

   ```bash
   mvn clean install

3. **Install dependencies**

   Make sure you have **Java** (JDK 17 or higher) and **Maven** installed. Then, run:

   ```bash
   mvn spring-boot:run

## API Endpoints
List of key API endpoints:

- Hotels
  - **`GET /api/hotels`**: Gets all hotels.
  - **`POST /api/hotels`**: Adds a new hotel to the database.
  - **`PUT /api/hotels`**: Updates an already existing hotel.
  - **`DELETE /api/hotels`** Deletes a hotel from the database.
  
- Users
  - **`GET /api/users`**: Gets all users.
  - **`POST /api/users`**: Adds a new user to the database.
  - **`PUT /api/users`**: Updates an already existing user.
  - **`PATCH /api/users`**: Updates password.
  - **`DELETE /api/users`**: Deletes a user from the database.
  - **`GET /api/favorites`**: Gets all favorites a user has.
  - **`POST /api/favorites`**: Add a new favorite for a user.

- Bookings
  - **`GET /api/bookings`**: Gets all bookings.
  - **`POST /api/bookings`**: Adds a new booking to the database.
  - **`PUT /api/bookings`**: Updates an already existing booking.
  - **`DELETE /api/bookings`**: Deletes a booking from the database.

## Features
- **Spring boot**: A framework for building production-ready applications
- **RESTful API**: API following REST principles
- **MySql database**
- **Security**: Authentication and authorization using jwt (JSON web tokens).

## Tests
Tests are made using Postman. The test set is stored as  **postmanTest.json** file in the main directory of 
this repository. 