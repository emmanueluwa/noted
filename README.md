# Productivity Note-Taking App Backend

This is the backend server for a React Native productivity note-taking application. It provides API endpoints for managing tasks/notes and calculating daily completion scores.

## Tech Stack

- Node.js
- Express.js
- MongoDB

## API Endpoints

The server provides the following CRUD endpoints:

| Method | Endpoint   | Description                   |
| ------ | ---------- | ----------------------------- |
| GET    | /          | Retrieve all notes/tasks      |
| POST   | /          | Create a new note/task        |
| GET    | /:uniqueId | Retrieve a specific note/task |
| PUT    | /:uniqueId | Update a specific note/task   |
| DELETE | /:uniqueId | Delete a specific note/task   |

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:

git clone https://github.com/emmanueluwa/noted.git

2. Navigate to the project directory:

cd noted

3. Install dependencies:

npm install

4. Create a `.env` file in the root directory and add your MongoDB connection string:

MONGODB_URI=your_mongodb_connection_string

5. Start the server:

npm start

The server should now be running on `http://localhost:8000`
