# Movie Booking API Documentation

## Available APIs
- [Users APIs](#users-apis)
  - [1. Sign-Up User API](#1-sign-up-user-api)
  - [2. Login API](#2-login-api)
  - [3. Get User Profile API](#3-get-user-profile-api)
  - [4. Get All Users API](#4-get-all-users-api)
  - [5. Get User by ID](#5-get-user-by-id)
  - [6. Logout User API](#6-logout-user-api)
  - [7. Update User API](#7-update-user-api)
  - [8. Get Bookings of User API](#8-get-bookings-of-user-api)
  - [9. Delete User API](#9-delete-user-api)
- [Admin APIs](#admin-apis)
  - [1. Sign-Up Admin API](#1-sign-up-admin-api)
  - [2. Login Admin API](#2-login-admin-api)
  - [3. Get All Admins API](#3-get-all-admins-api)
  - [4. Get Admin by ID](#4-get-admin-by-id)
  - [5. Get Admin Profile API](#5-get-admin-profile-api)
  - [6. Update Admin API](#6-update-admin-api)
  - [7. Logout Admin API](#7-logout-admin-api)
  - [8. Delete Admin API](#8-delete-admin-api)
- [Movie APIs](#movie-apis)
  - [1. Add Movie API](#1-add-movie-api)
  - [2. Get All Movies API](#2-get-all-movies-api)
  - [3. Get Movie by ID API](#3-get-movie-by-id-api)
  - [4. Update Movie API](#4-update-movie-api)
  - [5. Delete Movie API](#5-delete-movie-api)
- [Booking APIs](#booking-apis)
  - [1. New Booking API](#1-new-booking-api)
  - [2. Get All Bookings API](#2-get-all-bookings-api)
  - [3. Get Booking by ID API](#3-get-booking-by-id-api)
  - [4. Delete Booking by ID API](#4-delete-booking-by-id-api)

---

## Users APIs

This document provides details about the User APIs for the Movie Booking application. Below are the available endpoints for user management, including sign-up, login, profile retrieval, and more.

### 1. Sign-Up User API
- **Endpoint:** `POST /api/v1/user/signup`
- **Description:** Register a new user in the system.
- **Request Body:**
    ```json
    {
        "name": "sf",
        "email": "sf@gmail.com",
        "password": "123456"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/signup' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "sf",
        "email": "sf@gmail.com",
        "password": "123456"
    }'
    ```

### 2. Login API
- **Endpoint:** `POST /api/v1/user/login`
- **Description:** Authenticate a user and return a token for session management.
- **Request Body:**
    ```json
    {
        "email": "sf@gmail.com",
        "password": "123456"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "sf@gmail.com",
        "password": "123456"
    }'
    ```

### 3. Get User Profile API
- **Endpoint:** `GET /api/v1/user/profile`
- **Description:** Retrieve the profile information of the logged-in user.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/profile' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 4. Get All Users API
- **Endpoint:** `GET /api/v1/user/users`
- **Description:** Retrieve a list of all registered users (admin access required).
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/users' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 5. Get User by ID
 - **Endpoint:** `GET /api/v1/user/{userId}`
- **Description:** Retrieve details of a specific user by their ID.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/675be162a5f24d234842cb09' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 6. Logout User API
- **Endpoint:** `GET /api/v1/user/logout`
- **Description:** Log out the currently authenticated user and invalidate the session token.
- **CURL Example:**
    ```bash
    curl --location --request GET 'localhost:4000/api/v1/user/logout' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 7. Update User API
- **Endpoint:** `PUT /api/v1/user/update`
- **Description:** Update the profile information of the logged-in user.
- **Request Body:**
    ```json
    {
        "name": "updated name"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'localhost:4000/api/v1/user/update' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data '{
        "name": "updated name"
    }'
    ```

### 8. Get Bookings of User API
- **Endpoint:** `GET /api/v1/user/bookings`
- **Description:** Retrieve all bookings made by the logged-in user.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/bookings' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 9. Delete User API
- **Endpoint:** `DELETE /api/v1/user/delete/{userId}`
- **Description:** Delete a user from the system (admin access required).
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'localhost:4000/api/v1/user/delete/675be162a5f24d234842cb09' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

## Admin APIs

This section provides details about the Admin APIs for the Movie Booking application. Below are the available endpoints for admin management.

### 1. Sign-Up Admin API
- **Endpoint:** `POST /api/v1/admin/signup`
- **Description:** Register a new admin in the system.
- **Request Body:**
    ```json
    {
        "name": "admin1",
        "email": "admin1@gmail.com",
        "password": "admin123"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/signup' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "admin1",
        "email": "admin1@gmail.com",
        "password": "admin123"
    }'
    ```

### 2. Login Admin API
- **Endpoint:** `POST /api/v1/admin/login`
- **Description:** Authenticate an admin and return a token for session management.
- **Request Body:**
    ```json
    {
        "email": "admin1@gmail.com",
        "password": "admin123"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "admin1@gmail.com",
        "password": "admin123"
    }'
    ```

### 3. Get All Admins API
- **Endpoint:** `GET /api/v1/admin/admins`
- **Description:** Retrieve a list of all registered admins.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/admins' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 4. Get Admin by ID
- **Endpoint:** `GET /api/v1/admin/{adminId}`
- **Description:** Retrieve details of a specific admin by their ID.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/675be162a5f24d234842cb09' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 5. Get Admin Profile API
- **Endpoint:** `GET /api/v1/admin/profile`
- **Description:** Retrieve the profile information of the logged-in admin.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/profile' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 6. Update Admin API
- **Endpoint:** `PUT /api/v1/admin/update/{adminId}`
- **Description:** Update the profile information of a specific admin.
- **Request Body:**
    ```json
    {
        "name": "admin1 updated"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'localhost:4000/api/v1/admin/update/675c80eeba57969c611f4b2f' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data '{
        "name": "admin1 updated"
    }'
    ```

### 7. Logout Admin API
- **Endpoint:** `GET /api/v1/admin/logout`
- **Description:** Log out the currently authenticated admin and invalidate the session token.
- **CURL Example:**
    ```bash
    curl --location --request GET 'localhost:4000/api/v1/admin/logout' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 8. Delete Admin API
- **Endpoint:** `DELETE /api/v1/admin/delete/{adminId}`
- **Description:** Delete an admin from the system.
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'localhost:4000/api/v1/admin/delete/675c80eeba57969c611f4b2f' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

## Movie APIs

This section provides details about the Movie APIs for the Movie Booking application. Below are the available endpoints for movie management.

### 1. Add Movie API
- **Endpoint:** `POST /api/v1/movie/add`
- **Description:** Add a new movie to the system.
- **Request Body:**
    ```json
    {
        "title": "3 iditos - by admin1",
        "description": "A mind-bending thriller about dream infiltration.",
        "actors": ["Amer", "khan"],
        "releaseDate": "2024-12-26",
        "posterUrl": "https://example.com/posters/inception.jpg",
        "featured": true
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/movie/add' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data '{
        "title": "3 iditos - by admin1",
        "description": "A mind-bending thriller about dream infiltration.",
        "actors": ["Amer", "khan"],
        "releaseDate": "2024-12-26",
        "posterUrl": "https://example.com/posters/inception.jpg",
        "featured": true
    }'
    ```

### 2. Get All Movies API
- **Endpoint:** `GET /api/v1/movie/movies`
- **Description:** Retrieve a list of all movies in the system.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/movie/movies' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 3. Get Movie by ID API
- **Endpoint:** `GET /api/v1/movie/movies/{movieId}`
- **Description:** Retrieve details of a specific movie by its ID.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/movie/movies/675c5277432d3edff4382649' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 4. Update Movie API
- **Endpoint:** `PUT /api/v1/movie/update/{movieId}`
- **Description:** Update the details of an existing movie.
- **Request Body:**
    ```json
    {
        "title": "pk updated"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'localhost:4000/api/v1/movie/update/675c80eeba57969c611f4b2f' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data '{
        "title": "pk updated"
    }'
    ```

### 5. Delete Movie API
- **Endpoint:** `DELETE /api/v1/movie/delete/{movieId}`
- **Description:** Remove a movie from the system by its ID.
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'localhost:4000/api/v1/movie/delete/675c80eeba57969c611f4b2f' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

## Booking APIs

This section provides details about the Booking APIs for the Movie Booking application. Below are the available endpoints for booking management.

### 1. New Booking API
- **Endpoint:** `POST /api/v1/booking/newBooking`
- **Description:** Create a new booking for a specific movie and seat.
- **Request Body:**
    ```json
    {
        "movie": "675ed75091f4c83f58ec5069",
        "seatNumber": "1A",
        "date": "2022-08-22"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/booking/newBooking' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data '{
        "movie": "675ed75091f4c83f58ec5069",
        "seatNumber": "1A",
        "date": "2022-08-22"
    }'
    ```

### 2. Get All Bookings API
- **Endpoint:** `GET /api/v1/booking/bookings`
- **Description:** Retrieve a list of all bookings made in the system.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/booking/bookings' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 3. Get Booking by ID API
- **Endpoint:** `GET /api/v1/booking/{bookingId}`
- **Description:** Retrieve details of a specific booking by its ID.
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/booking/675ee952cde0b8634a976daa' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 4. Delete Booking by ID API
- **Endpoint:** `DELETE /api/v1/booking/{bookingId}`
- **Description:** Remove a booking from the system by its ID.
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'localhost:4000/api/v1/booking/675ef31a0ac94a1f2929ec61' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```