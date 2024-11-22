To-Do List Application
Overview
A web-based application to manage tasks effectively with features like creating, editing, completing, and deleting tasks. Built using Node.js, Express.js, and MongoDB for seamless performance.

Features
Add tasks with a title and description.
View a list of all tasks.
Mark tasks as complete (with validation to avoid duplicate completions).
Edit and delete tasks.
Validation ensures non-empty titles and prevents invalid operations.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Frontend: EJS, CSS
Setup
Clone the repository:

git clone <repository_url>
cd todo-app
Install dependencies:

npm install
Start the database and server:

mongod
npm start
Visit the app at http://localhost:3000.

Usage
Create a Task: Add a title and description.
Manage Tasks: View, edit, complete, or delete tasks easily.
