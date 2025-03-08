Contact Management API

Overview

This is a simple Contact Management API built using Node.js, Express, and MongoDB. It provides CRUD operations to manage contacts, including features like search and validation.

Features

Create, read, update, and delete contacts

Search contacts by name or email

Input validation using express-validator

MongoDB connection with Mongoose

Error handling middleware

Tech Stack

Node.js - JavaScript runtime

Express.js - Web framework

MongoDB - NoSQL database

Mongoose - ODM for MongoDB

dotenv - Environment variable management

Installation

Prerequisites

Ensure you have the following installed:

Node.js

MongoDB

Steps

Clone the repository:

git clone  https://github.com/SindhuraBanapuram/black-wins-tech-assignment.git
cd contact-management-api

Install dependencies:

npm install

Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server
node server.js or npm star
