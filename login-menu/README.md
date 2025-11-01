# Login Menu Project

## Overview
This project is a simple login menu application that includes user authentication and an admin page. The application is structured to provide a clean and efficient user experience.

## Project Structure
```
login-menu
├── public
│   ├── index.html        # Main login page
│   ├── admin.html        # Admin page (currently empty)
│   ├── css
│   │   └── styles.css    # CSS styles for the project
│   ├── js
│   │   ├── main.js       # Main JavaScript logic
│   │   └── auth.js       # Authentication logic
│   └── fonts
│       ├── CaskaydiaCoveNerdFont-Bold.woff2
│       └── CaskaydiaCoveNerdFont-Bold.woff
├── src
│   └── server.js         # Server-side script for handling requests
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Features
- User login functionality with validation.
- Admin page for administrative tasks (to be implemented).
- Responsive design using CSS.
- Secure password handling with hashing.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Start the server:
   ```
   node src/server.js
   ```
5. Open your browser and go to `http://localhost:PORT` (replace PORT with the actual port number).

## Usage
- Users can log in using their credentials.
- Upon successful login, users will be redirected to the admin page.
- The admin page is currently under development.

## Admin Credentials
- Username: `m64x`
- Password: `Mur4sxz1512@`

## Future Enhancements
- Implement functionalities on the admin page.
- Improve user interface and experience.
- Add more security features for user authentication.