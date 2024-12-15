# movie_booking_app

# Movie Booking API Documentation

## Users APIs

This document provides details about the User APIs for the Movie Booking application. Below are the available endpoints for user management, including sign-up, login, profile retrieval, and more.

### 1. Sign-Up User API
- **Endpoint:** `POST /api/v1/user/signup`
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
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/profile' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 4. Get All Users API
- **Endpoint:** `GET /api/v1/user/users`
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/users' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 5. Get User by ID
- **Endpoint:** `GET /api/v1/user/{userId}`
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/675be162a5f24d234842cb09' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 6. Logout User API
- **Endpoint:** `GET /api/v1/user/logout`
- **CURL Example:**
    ```bash
    curl --location --request GET 'localhost:4000/api/v1/user/logout' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 7. Update User API
- **Endpoint:** `PUT /api/v1/user/update`
- **Request Body:**
    ```json
    {
        "name": "kp"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'localhost:4000/api/v1/user/update' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data '{
        "name": "kp"
    }'
    ```

### 8. Get Bookings of User API
- **Endpoint:** `GET /api/v1/user/mybookings`
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/user/mybookings' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 9. Delete User API
- **Endpoint:** `DELETE /api/v1/user/delete`
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'localhost:4000/api/v1/user/delete' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

## Notes
- Replace `YOUR_TOKEN_HERE` with the actual token obtained during login.
- Ensure that the server is running on `localhost:4000` or adjust the URL accordingly if hosted elsewhere.

Feel free to reach out for any questions or further clarifications regarding the API usage!







## Admin APIs

This section provides details about the Admin APIs for the Movie Booking application. Below are the available endpoints for admin management.

### 1. Sign-Up Admin API
- **Endpoint:** `POST /api/v1/admin/signup`
- **Request Body:**
    ```json
    {
        "name": "admin",
        "email": "admin@gmail.com",
        "password": "123456"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/signup' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "admin",
        "email": "admin@gmail.com",
        "password": "123456"
    }'
    ```

### 2. Login Admin API
- **Endpoint:** `POST /api/v1/admin/login`
- **Request Body:**
    ```json
    {
        "email": "admin@gmail.com",
        "password": "123456"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "admin@gmail.com",
        "password": "123456"
    }'
    ```

### 3. Get All Admins API
- **Endpoint:** `GET /api/v1/admin/admins`
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/admins' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 4. Get Admin by ID
- **Endpoint:** `GET /api/v1/admin/{adminId}`
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/675be1fda5f24d234842cb0e' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 5. Get Admin Profile API
- **Endpoint:** `GET /api/v1/admin/profile`
- **CURL Example:**
    ```bash
    curl --location 'localhost:4000/api/v1/admin/profile' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 6. Update Admin API
- **Endpoint:** `PUT /api/v1/admin/update`
- **Request Body:**
    ```json
    {
        "name": "New Admin",
        "email": "new@gmail.com"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'localhost:4000/api/v1/admin/update' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE' \
    --data-raw '{
        "name": "New Admin",
        "email": "new@gmail.com"
    }'
    ```

### 7. Logout Admin API
- **Endpoint:** `GET /api/v1/admin/logout`
- **CURL Example:**
    ```bash
    curl --location --request GET 'localhost:4000/api/v1/admin/logout' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

### 8. Delete Admin API
- **Endpoint:** `DELETE /api/v1/admin/delete`
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'localhost:4000/api/v1/admin/delete' \
    --header 'Content-Type: application/json' \
    --header 'Cookie: token=YOUR_TOKEN_HERE'
    ```

## Notes
- Replace `YOUR_TOKEN_HERE` with the actual token obtained during login.
- Ensure that the server is running on `localhost:4000` or adjust the URL accordingly if hosted elsewhere.

Feel free to reach out for any questions or further clarifications regarding the API usage!


