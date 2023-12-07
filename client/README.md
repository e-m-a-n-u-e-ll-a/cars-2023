# TOP CARS
In this site you can sell and buy cars for free! 
You can post your car in our website and you can see
what others have posted.
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)


 ## Introduction
 Top Cars is a web application that provides a platform for users to buy and sell luxury cars effortlessly.
 ## Features
 1. User Authentication:
  Allow users to create accounts, log in, and manage their posts securely.
 2. Data visualisation:
  Generate interactive charts and graphs to visualize data.
## Installation
1. **Clone the repository:**

    ```powershell
        git clone https://github.com/e-m-a-n-u-e-ll-a/cars-2023.git
    ```
 2. **Navigate to the project directory :**

    ```powershell
    cd ./server
     ```powershell
     cd ./client
     
3.  **Install dependencies:**

    ```powershell
    npm install

4.  **Start the application:**

    ```powershell
   ./server npm start
    ```powershell
   ./client npm run dev

5. **Open your browser:**

    Visit [http://localhost:127.0.0.1:5173](http://127.0.0.1:5173) to view the application
    ## Usage

### Posting a Car

1. **Create an Account:**
   - Navigate to the [registration page](http://127.0.0.1:5173/users/register) and create a new account.

2. **Log In:**
   - Go to the [login page](http://127.0.0.1:5173/users/login) and log in with your credentials.

3. **Navigate to the Dashboard:**
   - Once logged in, visit the dashboard find your post to manage it.
   - Edit your post
   - Delete your post

4. **Add a New Car:**
   - Click on the "Add Car" button to create a new car listing.
   - Fill in the required details, such as the car model, image URL, description, price, year, and mileage.
   - Click the "Submit" button to post your car.


### Interacting with Others

1. **Leave Comments:**
   - Engage with other users by leaving comments on their car listings.
   - Share your thoughts, ask questions, or express interest in a particular car.

## Configuration

To configure and customize certain aspects of the project, follow the instructions below:

### Environment Variables

1. **Database Configuration:**
     - `DB_HOST`: 'mongodb'.
     - `DB_PORT`: '27017'.
     - `DB_NAME`: 'cars'.

2. **Authentication Secrets:**
   - Set the following environment variables to secure authentication:
     - `JWT_SECRET`: 'mysupersecretSecret'.

