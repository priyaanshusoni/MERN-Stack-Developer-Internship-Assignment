# MERN Stack Developer Internship Assignment - Question 3

This repository contains the solution to **Question 3** of the MERN Stack Developer Internship assignment. The solution demonstrates skills in backend development, database handling, and efficient implementation of a given problem.

## Features
- **RESTful API**: Built with Express.js for efficient communication between the client and server.
- **Database Integration**: MongoDB for persistent data storage.
- **Error Handling**: Robust error handling mechanisms for API requests.
- **Scalability**: Modular and scalable code structure.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Language**: JavaScript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/priyaanshusoni/MERN-Stack-Developer-Internship-Assignment.git
   cd Q3
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
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the API:
   Use a tool like Postman or cURL to test the endpoints at [http://localhost:5000](http://localhost:5000).

## Folder Structure
```
Q3/
├── controllers/    # API logic and request handling
├── models/         # MongoDB schemas
├── routes/         # API routes
├── middleware/     # Middleware for validation and error handling
├── .env            # Environment variables
├── server.js       # Entry point for the application
├── package.json    # Dependency manager
└── README.md       # Project documentation
```

## API Endpoints
| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | `/api/data`    | Fetch all data            |
| POST   | `/api/data`    | Add new data              |
| PUT    | `/api/data/:id`| Update existing data by ID|
| DELETE | `/api/data/:id`| Delete data by ID         |

## Usage
1. **Fetch Data**: Retrieve all available records.
2. **Add Data**: Insert new entries into the database.
3. **Update Data**: Modify existing records by their ID.
4. **Delete Data**: Remove records by their ID.

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
- **Email**: priyanshu.developerr@gmail.com
- **GitHub**: [Priyaanshu Soni](https://github.com/priyaanshusoni)
