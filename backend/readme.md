# User Registration API

This API handles user registration, validation, and authentication.

## Base URL
```
http://localhost:4000
```

## Endpoints

### 1. Register a New User
**Endpoint:**
```
POST /users/register
```

**Request Body (JSON):**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `firstname`: Minimum 3 characters required.
- `email`: Must be a valid email format.
- `password`: Minimum 3 characters required.

**Success Response:**
```json
{
  "token": "your_generated_jwt_token",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

**Error Responses:**
- **400 Bad Request** (Validation Errors):
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

- **500 Internal Server Error:**
```json
{
  "error": "Something went wrong"
}
```

### 2. Captain Register
**Endpoint:**
```
POST /captains/register
```

**Request Body (JSON):**
```json
{
  "fullname": {
    "firstname": "Captain",
    "lastname": "Smith"
  },
  "email": "captainsmith@example.com",
  "password": "captainpassword123"
}
```

**Success Response:**
```json
{
  "token": "your_generated_jwt_token",
  "captain": {
    "fullname": {
      "firstname": "Captain",
      "lastname": "Smith"
    },
    "email": "captainsmith@example.com"
  }
}
```

**Error Responses:**
- **400 Bad Request** (Validation Errors):
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

- **500 Internal Server Error:**
```json
{
  "error": "Something went wrong"
}
```

### 3. Captain Login
**Endpoint:**
```
POST /captains/login
```

#### Request Body
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password of the captain. Must be at least 3 characters long.

#### Responses
- **200 OK**: Login successful. Returns captain information.
```json
{
  "token": "your_generated_jwt_token",
  "captain": {
    "fullname": {
      "firstname": "Captain",
      "lastname": "Smith"
    },
    "email": "captainsmith@example.com"
  }
}
```
- **400 Bad Request**: Invalid email or password. Returns error messages.
```json
{
  "error": "Invalid email or password"
}
```

### 4. Captain Logout
**Endpoint:**
```
POST /captains/logout
```

**Request Headers:**
- `Authorization` (string, required): Bearer token received upon login.

**Responses:**
- **200 OK**: Logout successful. Returns a confirmation message.
```json
{
  "message": "Successfully logged out"
}
```
- **401 Unauthorized**: No valid token provided.
```json
{
  "error": "Unauthorized"
}
```

### 5. Captain Profile
**Endpoint:**
```
GET /captains/profile
```

**Request Headers:**
- `Authorization` (string, required): Bearer token received upon login.

**Responses:**
- **200 OK**: Returns captain profile information.
```json
{
  "fullname": {
    "firstname": "Captain",
    "lastname": "Smith"
  },
  "email": "captainsmith@example.com"
}
```
- **401 Unauthorized**: No valid token provided.
```json
{
  "error": "Unauthorized"
}
```

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Token)**
- **bcrypt** (For password hashing)
- **express-validator** (For input validation)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   ```
2. Navigate to the project folder:
   ```bash
   cd your-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add:
   ```
   PORT=4000
   JWT_SECRET=your_secret_key
   MONGODB_URI=mongodb://localhost:27017/yourDB
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Notes for Frontend Developers
- Make sure to send the request with `Content-Type: application/json`.
- After successful registration, use the received JWT token for authentication in subsequent requests.
- Handle validation errors properly in the frontend for a better user experience.


