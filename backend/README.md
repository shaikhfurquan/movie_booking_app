# movie_booking_app
# Movie Booking API Documentation

This repository provides the documentation for User APIs of the Movie Booking system. These APIs handle user management operations such as sign-up, login, profile retrieval, and user updates.

## Base URL
```
localhost:4000/api/v1/user
```

---

## APIs Overview

### 1. Sign-Up User API
**Endpoint:** `POST /signup`

**Request Body:**
```json
{
    "name": "sf",
    "email": "sf@gmail.com",
    "password": "123456"
}
```

**cURL Command:**
```bash
curl --location 'localhost:4000/api/v1/user/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "sf",
    "email": "sf@gmail.com",
    "password": "123456"
}'
```

---

### 2. Login API
**Endpoint:** `POST /login`

**Request Body:**
```json
{
    "email": "sf@gmail.com",
    "password": "123456"
}
```

**cURL Command:**
```bash
curl --location 'localhost:4000/api/v1/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "sf@gmail.com",
    "password": "123456"
}'
```

---

### 3. Get User Profile API
**Endpoint:** `GET /profile`

**cURL Command:**
```bash
curl --location 'localhost:4000/api/v1/user/profile' \
--header 'Cookie: token=<your_token_here>'
```

---

### 4. Get All Users API
**Endpoint:** `GET /users`

**cURL Command:**
```bash
curl --location 'localhost:4000/api/v1/user/users' \
--header 'Cookie: token=<your_token_here>'
```

---

### 5. Get User by ID API
**Endpoint:** `GET /:userId`

**Example:**
```
localhost:4000/api/v1/user/675be162a5f24d234842cb09
```

**cURL Command:**
```bash
curl --location 'localhost:4000/api/v1/user/675be162a5f24d234842cb09' \
--header 'Cookie: token=<your_token_here>'
```

---

### 6. Logout User API
**Endpoint:** `GET /logout`

**cURL Command:**
```bash
curl --location 'localhost:4000/api/v1/user/logout' \
--header 'Cookie: token=<your_token_here>'
```

---

### 7. Update User API
**Endpoint:** `PUT /update`

**Request Body:**
```json
{
    "name": "kp"
}
```

**cURL Command:**
```bash
curl --location --request PUT 'localhost:4000/api/v1/user/update' \
--header 'Content-Type: application/json' \
--header 'Cookie: token=<your_token_here>' \
--data '{
    "name": "kp"
}'
```

---

### 8. Delete User API
**Endpoint:** `DELETE /delete`

**Request Body:**
```json
{
    "name": "kp"
}
```

**cURL Command:**
```bash
curl --location --request DELETE 'localhost:4000/api/v1/user/delete' \
--header 'Content-Type: application/json' \
--header 'Cookie: token=<your_token_here>' \
--data '{
    "name": "kp"
}'
```

---

## Authentication
Most of the APIs require an authentication token passed in the `Cookie` header as `token`. Ensure you include a valid JWT token when making authenticated requests.

## Response Status Codes
- `200 OK`: Successful operation.
- `201 Created`: Resource successfully created.
- `400 Bad Request`: Missing or invalid input.
- `401 Unauthorized`: Authentication required or failed.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Server error.

## Notes
- Replace `<your_token_here>` in the cURL commands with a valid JWT token received after login.
- Ensure the server is running at `localhost:4000` or update the base URL accordingly.


