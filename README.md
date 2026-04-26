# Nakhla 🌴
### Saudi Local Brands Discovery Platform

---

## Project Description

Nakhla is a full-stack web application designed to support and promote Saudi local brands through one centralized digital platform.

The application allows users to discover, browse, and explore Saudi brands across multiple categories such as fashion, beauty, perfumes, abayas, and accessories.

Nakhla connects customers with local businesses while providing a modern and user-friendly shopping discovery experience.

---

# Front-End 🌐

## Front-End Features

### Customer Features
- User login and sign up
- Browse Saudi brands by category
- Search brands by name or category
- View detailed brand profiles
- Add and remove favorite brands
- Submit ratings and reviews

### Brand Owner Features
- Brand owner dashboard
- Create and manage brand profiles
- Submit verification requests

### Admin Features
- Admin dashboard
- Manage verification requests
- Add and delete categories

---

## Front-End Technologies Used

- React.js
- Vite
- JavaScript ES6+
- CSS
- React Context API
- React Router DOM

---

## How to Run the Front-End

Open the terminal and run:

```bash
cd nakhla-frontend
npm install
npm run dev
```

Then open this link in the browser:

```txt
http://localhost:5173
```

---

# Back-End ⚙️

## Back-End Description

The backend was developed using Node.js, Express.js, and MongoDB Atlas.

It provides RESTful APIs that support the main features of the Nakhla application, including user authentication, brand management, reviews, favorites, categories, and verification requests.

The backend connects to MongoDB Atlas to store and manage application data.

---

## Back-End Features

### Authentication Features
- Register new users
- Login existing users
- Generate JWT token
- Protect private routes
- Support different user roles:
  - Customer
  - Brand Owner
  - Admin

### Brand Features
- Get all brands
- Get brand by ID
- Create brand profile
- Update brand information
- Delete brand
- Filter brands by category
- Search brands by name

### Review Features
- Add review to a brand
- Rate brand using stars
- Get all reviews for a specific brand
- Delete review
- Automatically update brand average rating

### Favorite Features
- Add brand to favorites
- View user favorite brands
- Remove brand from favorites

### Category Features
- Get all categories
- Add new category
- Delete category

### Verification Features
- Brand owner submits verification request
- Admin views verification requests
- Admin approves or rejects verification requests
- Verified brands are marked as verified

---

## Back-End Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- JWT Authentication
- bcryptjs
- dotenv
- cors
- nodemon

---

## Project Folder Structure

```txt
4---Front_End-Prototype/
│
├── nakhla-frontend/
│   └── Front-end React application
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Brand.js
│   │   ├── Review.js
│   │   ├── Favorite.js
│   │   ├── Category.js
│   │   └── VerificationRequest.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── brandController.js
│   │   ├── reviewController.js
│   │   ├── favoriteController.js
│   │   ├── categoryController.js
│   │   └── verificationController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── brandRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── favoriteRoutes.js
│   │   ├── categoryRoutes.js
│   │   └── verificationRoutes.js
│   │
│   └── middleware/
│       ├── authMiddleware.js
│       └── errorMiddleware.js
│
└── README.md
```

---

## How to Run the Back-End

Open the terminal and run:

```bash
cd backend
npm install
npm run dev
```

The back-end server will run on:

```txt
http://localhost:5000
```

To test if the server is running, open:

```txt
http://localhost:5000
```

Expected response:

```json
{
  "message": "Nakhla Backend API is running"
}
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/nakhla?retryWrites=true&w=majority
JWT_SECRET=nakhla_secret_key_2026
```

Important notes:

- Do not push the `.env` file to GitHub.
- The `.env.example` file is included to show the required variables.
- Database credentials must be kept private.

---

# API Documentation

Base URL:

```txt
http://localhost:5000/api
```

---

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

Description: Creates a new user account.

Request body:

```json
{
  "name": "Danah",
  "email": "danah@example.com",
  "password": "123456",
  "role": "customer"
}
```

Response example:

```json
{
  "_id": "userId",
  "name": "Danah",
  "email": "danah@example.com",
  "role": "customer",
  "token": "jwtToken"
}
```

---

### Login User

```http
POST /api/auth/login
```

Description: Logs in an existing user and returns a JWT token.

Request body:

```json
{
  "email": "danah@example.com",
  "password": "123456"
}
```

Response example:

```json
{
  "_id": "userId",
  "name": "Danah",
  "email": "danah@example.com",
  "role": "customer",
  "token": "jwtToken"
}
```

---

### Get Current User

```http
GET /api/auth/me
```

Description: Returns the currently logged-in user.

Headers:

```txt
Authorization: Bearer token
```

---

## Brand APIs

### Get All Brands

```http
GET /api/brands
```

Description: Returns all brands.

Optional query examples:

```http
GET /api/brands?category=Fashion
GET /api/brands?search=abaya
```

---

### Get Brand by ID

```http
GET /api/brands/:id
```

Description: Returns one brand by its ID.

---

### Create Brand

```http
POST /api/brands
```

Description: Allows a brand owner or admin to create a brand profile.

Headers:

```txt
Authorization: Bearer token
```

Request body:

```json
{
  "name": "Local Brand",
  "description": "A Saudi local fashion brand.",
  "category": "Fashion",
  "logoUrl": "https://example.com/logo.png",
  "coverUrl": "https://example.com/cover.png",
  "website": "https://example.com",
  "instagram": "@localbrand"
}
```

---

### Update Brand

```http
PUT /api/brands/:id
```

Description: Updates brand information.

Headers:

```txt
Authorization: Bearer token
```

---

### Delete Brand

```http
DELETE /api/brands/:id
```

Description: Deletes a brand.

Headers:

```txt
Authorization: Bearer token
```

---

## Review APIs

### Get Reviews by Brand

```http
GET /api/reviews/brand/:brandId
```

Description: Returns all reviews for a specific brand.

---

### Add Review

```http
POST /api/reviews
```

Description: Allows a customer to add a rating and review.

Headers:

```txt
Authorization: Bearer token
```

Request body:

```json
{
  "brandId": "brandId",
  "stars": 5,
  "comment": "Amazing brand!"
}
```

---

### Delete Review

```http
DELETE /api/reviews/:id
```

Description: Deletes a review.

Headers:

```txt
Authorization: Bearer token
```

---

## Favorite APIs

### Get My Favorites

```http
GET /api/favorites
```

Description: Returns the logged-in customer’s favorite brands.

Headers:

```txt
Authorization: Bearer token
```

---

### Add Favorite

```http
POST /api/favorites
```

Description: Adds a brand to the customer’s favorites.

Headers:

```txt
Authorization: Bearer token
```

Request body:

```json
{
  "brandId": "brandId"
}
```

---

### Remove Favorite

```http
DELETE /api/favorites/:brandId
```

Description: Removes a brand from favorites.

Headers:

```txt
Authorization: Bearer token
```

---

## Category APIs

### Get Categories

```http
GET /api/categories
```

Description: Returns all available categories.

---

### Create Category

```http
POST /api/categories
```

Description: Allows admin to add a new category.

Headers:

```txt
Authorization: Bearer token
```

Request body:

```json
{
  "name": "Fashion"
}
```

---

### Delete Category

```http
DELETE /api/categories/:id
```

Description: Allows admin to delete a category.

Headers:

```txt
Authorization: Bearer token
```

---

## Verification APIs

### Submit Verification Request

```http
POST /api/verification
```

Description: Allows a brand owner to submit a brand verification request.

Headers:

```txt
Authorization: Bearer token
```

Request body:

```json
{
  "brandId": "brandId",
  "documentUrl": "https://example.com/document.pdf"
}
```

---

### Get Verification Requests

```http
GET /api/verification
```

Description: Allows admin to view all verification requests.

Headers:

```txt
Authorization: Bearer token
```

---

### Approve or Reject Verification Request

```http
PUT /api/verification/:id
```

Description: Allows admin to approve or reject a verification request.

Headers:

```txt
Authorization: Bearer token
```

Request body:

```json
{
  "status": "approved",
  "adminNote": "Verified successfully"
}
```

---

## Database Collections

The backend uses MongoDB collections:

- users
- brands
- reviews
- favorites
- categories
- verificationrequests

---

## Testing

The APIs were tested using Postman.

Recommended testing order:

1. Register a customer
2. Register a brand owner
3. Register an admin
4. Login as brand owner
5. Create a brand
6. Get all brands
7. Login as customer
8. Add a review
9. Add a favorite
10. Login as admin
11. Add category
12. Submit and manage verification request

---

## Team Members

- Batool Alawami
- Danah Alalwan
- Reham Alsubhi
- Toka Alarki

---

## Team Contributions

| Team Member | Role | Main Contribution |
|---|---|---|
| Batool Alawami | Authentication Developer | User model, register API, login API, JWT protection |
| Danah Alalwan | Brand API Developer | Brand model, brand CRUD APIs, search and category filtering |
| Reham Alsubhi | Reviews and Favorites Developer | Review model, favorite model, review APIs, favorite APIs |
| Toka Alarki | Admin and Documentation Developer | Category APIs, verification APIs, backend documentation |

---

## Version Control

- The backend was added to the same GitHub repository as the front-end.
- Each team member contributed through GitHub commits.
- Clear commit messages were used.
- `.env` and `node_modules` are excluded from GitHub.
- `.env.example` is included for setup guidance.

---

## Security Notes

- Passwords are hashed using bcryptjs.
- JWT is used for authentication and protected routes.
- Sensitive database credentials are stored in `.env`.
- `.env` is ignored using `.gitignore`.

---