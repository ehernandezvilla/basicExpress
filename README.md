# Web Application for Animal Data Submission with Express

This project sets up a basic web application that allows users to submit animal names through a frontend interface. The submitted data is then sent to a backend server using a POST request, where it's stored and can be retrieved.

## Table of Contents

- [Backend (`server.js`)](#backend-serverjs)
  - [Setup](#setup)
  - [Endpoints](#endpoints)
  - [Server Start](#server-start)
- [Frontend (`app.js`)](#frontend-appjs)
  - [Data Submission](#data-submission)
  - [Data Sending](#data-sending)
- [Usage](#usage)
- [Development Tools](#development-tools)

## Backend (`server.js`)

The backend is built using Node.js and the Express framework.

### Setup

- Uses **Express** for routing and middleware.
- Utilizes **body-parser** to parse incoming request bodies.
- Enables **CORS** for cross-origin requests.
- Serves static files from the `website` directory.

### Endpoints

- `GET /all`: Returns all stored data.
- `POST /add`: Responds with 'POST received'.
- `POST /animal`: Accepts a JSON object with an animal name and stores it in an array.

### Server Start

The server listens on port 3000 and logs a confirmation message upon successful startup.

## Frontend (`app.js`)

The frontend provides an interface for users to submit animal names and handles the communication with the backend.

### Data Submission

- The `submitData` function triggers when a user submits an animal name.
- Validates the input and sends the data to the server using the `postData` function.

### Data Sending

- The `postData` function sends a POST request to the server's `/animal` endpoint.
- Sends data in JSON format and expects a JSON response from the server.
- Logs the server's response or any errors to the console.

## Usage

1. Start the backend server by running `node server.js` in the terminal.
2. Open the frontend interface in a browser.
3. Enter an animal name in the input field and submit. The data will be sent to the server and stored.

## Development Tools

- **Visual Studio Code**: Primary code editor used for development.
- **Node.js and Express**: Used for backend server setup.
- **body-parser**: Middleware to handle POST request data.
- **CORS**: Middleware to handle cross-origin requests.

