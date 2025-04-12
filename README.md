# Crime-Alert-Safety-system

The Crime Safety Report System is a full-stack web application that allows users to report crimes, view reported crimes, filter incidents by location and time, and subscribe to email alerts for nearby crimes. This system is built with ReactJS on the frontend.


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Email Alert System](#email-alert-system)
- [Future Enhancements](#future-enhancements)

---

## Features

- User registration and login
- Submit a crime report with location, time, and description
- View all reported crimes
- Filter crimes by type, location, and date range
- Manage alert preferences (location-based)
- Receive email notifications for nearby crimes

---

## Tech Stack

### Frontend

- ReactJS (React Router, Axios)
- HTML/CSS 
- Context API or local state

### Backend


---

## Project Structure

```
crime-safety-report-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.js
├── package.json
├── README.md
```

---

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

This will run the React app on `http://localhost:3000`.

### Key Frontend Routes

| Path          | Description                      |
|---------------|----------------------------------|
| `/`           | Home page                        |
| `/login`      | Login form                       |
| `/register`   | Register new user                |
| `/reportchart`| Report a new crime               |
| `/crimes`     | View and filter reported crimes  |
| `/alerts`     | Set alert location and radius    |

---

## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crime-safety
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
JWT_SECRET=your_jwt_secret
```

4. Start the backend server:

```bash
npm run dev
```

This will run the backend on `http://localhost:5000`.

---

## API Endpoints

### Auth Routes

```
POST    /api/auth/register       Register new user
POST    /api/auth/login          Login user
GET     /api/auth/profile        Get current user (requires token)
```

### Crime Routes

```
GET     /api/crimes              Get all crimes
POST    /api/crimes/report       Report a new crime
```

### Alert Preferences

```
POST    /api/alerts/preferences   Save user alert settings
GET     /api/alerts/preferences   Get user alert settings
```

---

## Email Alert System

The backend uses Nodemailer to send email alerts to users when a new crime is reported near their saved location.

**Alert Logic:**

- When a new crime is submitted:
  - The system finds users with alert preferences within a defined radius (using Haversine distance calculation).
  - Emails are sent to matching users using Nodemailer.

**Requirements:**

- Users must be registered with:
  - A location (latitude/longitude)
  - An alert radius
  - A valid email address

---

## Future Enhancements

- Add Google Maps integration for location input
- Enable admin dashboard for managing reports
- Add user roles (admin, user)
- Export crime reports as CSV/PDF
- Real-time updates with WebSockets
- Pagination and advanced filtering

---

## How to Contribute

1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit and push your changes
4. Open a pull request

---

## License

This project is licensed under the MIT License.
