# Solution of role based bashboard assignment # 


# Role-Based Dashboard

This repository contains a **Role-Based Dashboard** project built as part of the MERN Stack Developer Internship assignment. The dashboard dynamically adapts its features and accessibility based on the roles of users, ensuring secure and personalized experiences.

## Features
- **User Authentication**: Secure login system with role-based access.
- **Role Management**: Admin, Manager, and User roles with distinct permissions.
- **Dynamic Dashboard**: Different views and actions based on user roles.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Secure API**: Backend endpoints protected with middleware to ensure proper role-based access.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/priyaanshusoni/MERN-Stack-Developer-Internship-Assignment.git
   cd role-based-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Access the application:
   Open [http://localhost:5000](http://localhost:5000) in your browser.

## Folder Structure
```
role-based-dashboard/
├── backend/            # Node.js and Express.js backend
│   ├── controllers/    # API logic
│   ├── middleware/     # Authentication and role-based access control
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API routes
│   └── server.js       # Entry point for the backend
├── frontend/           # React.js frontend
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Role-specific pages
│   │   ├── services/   # API service calls
│   │   └── App.js      # Main application file
├── .env                # Environment variables
├── package.json        # Dependency manager
└── README.md           # Project documentation
```

## Usage
1. **Admin**:
   - Manage users and roles.
   - Access detailed analytics.
2. **Manager**:
   - View and manage team performance.
3. **User**:
   - Access personalized dashboard and tasks.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any queries or feedback, feel free to reach out:
- **Email**:priyanshu.developerr@gmail.com
- **GitHub**: [Priyaanshu Soni](https://github.com/priyaanshusoni)
