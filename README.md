
# Twitter Clone

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A full-stack Twitter clone built using modern web technologies. This project replicates core Twitter functionalities such as posting tweets, liking, commenting, and user authentication, while leveraging a robust tech stack for scalability and performance.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [API Documentation](#api-documentation)


---

## Features

- **User Authentication**: Secure signup, login, and logout functionality.
- **Tweet Management**: Create, edit, delete, and view tweets.
- **Like & Comment System**: Interact with tweets by liking and commenting.
- **Image Uploads**: Upload tweet images using Cloudinary for media storage.
- **Responsive Design**: Fully responsive UI for seamless use across devices.
- **Real-Time Updates**: Fetch and display tweets dynamically using TanStack Query.

---

## Tech Stack

This project uses the following technologies:

- **Frontend**:
  - React (with functional components and hooks)
  - TanStack Query (for state management and API data fetching)
  - Axios (for HTTP requests)
  - TailwindCSS / Material-UI (styling framework, specify if used)

- **Backend**:
  - Node.js with Express.js (RESTful API)
  - MongoDB (database for storing user and tweet data)
  - Mongoose (ODM for MongoDB)
  - Nodemon (for automatic server restart during development)

- **Media Storage**:
  - Cloudinary (for image uploads and hosting)

- **Other Tools**:
  - JWT (JSON Web Tokens) for authentication
  - Bcrypt (password hashing)
  - ESLint and Prettier (code quality and formatting)

---

## Installation

### Prerequisites

- Node.js >= 16.x
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account for media uploads
- Git installed on your machine

### Steps to Run Locally

1. **Clone the Repository**:
 ```bash
 git clone https://github.com/QRadislav/twitter-clone.git
 cd twitter-clone
 ```
2. **Download Dependencies**:
 ```
 # Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
 ```
3. **Create ```env.``` file**:
```
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

4. **Start Backend server and Frontend App **:

```
npm run
```
5.  **Access the Application** : Open your browser and navigate to `http://localhost:5000`.

## API Documentation

The backend exposes a RESTful API (Will be added later).
