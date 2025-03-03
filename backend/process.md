# User Registration Endpoint Creation Manual

## Objective
This manual provides step-by-step instructions for creating a user registration endpoint in the backend application.

## Prerequisites
- Ensure you have Node.js and npm installed.
- Set up a MongoDB database and have the connection URI ready.
- Install necessary packages: `express`, `cors`, `dotenv`, `mongoose`, `bcrypt`, `jsonwebtoken`, and `express-validator`.

## Steps to Create User Registration Endpoint

### Step 1: Set Up the Server
1. **Create a file named `server.js`.**
2. **Import the required modules:**
   - `http` for creating the server.
   - Your main application file (e.g., `app.js`).
   - `dotenv` for environment variable management.
3. **Configure the server to listen on a specified port.**
4. **Log a message to confirm the server is running.**

### Step 2: Configure the Application
1. **Create a file named `app.js`.**
2. **Import necessary modules:**
   - `express` for handling HTTP requests.
   - `cors` for enabling Cross-Origin Resource Sharing.
   - Your database connection function.
   - User routes.
3. **Set up middleware:**
   - Use `cors()` to allow cross-origin requests.
   - Use `express.json()` and `express.urlencoded()` to parse incoming request bodies.
4. **Connect to the database using your connection function.**
5. **Define the route for user registration.**

### Step 3: Define User Routes
1. **Create a file named `user.routes.js`.**
2. **Import `express` and `express-validator`.**
3. **Create a router instance.**
4. **Define a POST route for `/register`.**
5. **Use validation middleware to check the incoming request data:**
   - Ensure the first name is at least 3 characters long.
   - Validate the email format.
   - Ensure the password is at least 3 characters long.
6. **Link the route to the registration handler in the controller.**

### Step 4: Implement Registration Logic
1. **Create a file named `user.controller.js`.**
2. **Import the user model and the user creation service.**
3. **Define the `registerUser` function:**
   - Validate the request using `express-validator`.
   - If validation fails, return a 400 status with error messages.
   - If validation passes, extract user data from the request body.
   - Hash the password using the user model's method.
   - Call the user creation service to save the user to the database.
   - Generate an authentication token for the user.
   - Return a 201 status with the token and user data.

### Step 5: Create User Service
1. **Create a file named `user.service.js`.**
2. **Import the user model.**
3. **Define a function to create a user:**
   - Check that all required fields (first name, email, password) are provided.
   - Create a new user instance using the user model.
   - Return the created user.

### Step 6: Define User Model
1. **Create a file named `User.model.js`.**
2. **Import `mongoose`, `bcrypt`, and `jsonwebtoken`.**
3. **Define the user schema with fields for full name, email, password, and socket ID.**
4. **Add methods to the schema:**
   - A method to generate an authentication token.
   - A method to compare passwords.
   - A static method to hash passwords.

### Step 7: Connect to the Database
1. **Create a file named `db.js`.**
2. **Import `mongoose`.**
3. **Define a function to connect to the MongoDB database:**
   - Use the connection URI from environment variables.
   - Log a success message upon successful connection.
   - Log an error message if the connection fails.

### Step 8: Define User Login Route
1. **Create a file named `user.routes.js`.**
2. **Import `express` and `express-validator`.**
3. **Create a router instance.**
4. **Define a POST route for `/login`.**
5. **Use validation middleware to check the incoming request data:**
   - Validate the email format.
   - Ensure the password is provided.
6. **Link the route to the login handler in the controller.**

### Step 9: Implement Login Logic
1. **Create a file named `user.controller.js`.**
2. **Import the user model.**
3. **Define the `loginUser` function:**
   - Validate the request using `express-validator`.
   - If validation fails, return a 400 status with error messages.
   - If validation passes, extract user credentials from the request body.
   - Find the user by email.
   - If the user is not found, return a 401 status with an error message.
   - Compare the provided password with the stored hashed password.
   - If the password is incorrect, return a 401 status with an error message.
   - Generate an authentication token for the user.
   - Return a 200 status with the token and user data.

### Step 10: Define User Logout Route
1. Open the `user.routes.js` file.
2. Import the authentication middleware that checks if the user is logged in.
3. Create a new POST route for `/logout`.
4. Link this route to a function in the user controller that will handle the logout logic.

### Step 11: Implement Logout Logic
1. Open the `user.controller.js` file.
2. Create a function called `logoutUser`.
3. In this function, implement the logic to invalidate the user's session or token.
4. Send a response back to the user confirming that they have successfully logged out.

### Step 12: Define User Profile Route
1. Go back to the `user.routes.js` file.
2. Create a new GET route for `/profile`.
3. Link this route to a function in the user controller that will handle retrieving the user's profile information.

### Step 13: Implement Get User Profile Logic
1. In the `user.controller.js` file, create a function called `getUserProfile`.
2. In this function, access the user's information from the request (this should be done by the authentication middleware).
3. Send a response back to the user with their profile information, such as their full name and email address.

## Conclusion
By following these steps, you will have successfully created a user registration endpoint in your backend application. Ensure to test the endpoint thoroughly to confirm that it works as expected.