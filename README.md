# Webapp_group3
This is our exam project in the courses: **IDATA2301 Web Technologies** and 
**IDATA2306 Application Development** at NTNU Ålesund.

In this README you will find information about our solution to the exam project.

This file contains an overview of the whole project. For more details concerning each part 
(front- and back-end), se each specific folder's README file.

## Description
Our project specification states that we were to emulate a real-life situation where we got a specification
from a customer. We got assigned the task of making a portal to provide an overview of hotels booking 
for your stay. You can think of this portal as a price aggregator similar to booking.com or 
athotels.com.

In this application we provide a portal for users to find different hotels for different locations,
the ability to log in / create a user, add a booking and add your favorite hotels to a favorite list.

## Getting Started
Our website is available on ***https://group03.web-tek.ninja/*** <br>
If you want to run the website locally, you need to: 
1. Clone this GitHub repository to a desirable place on your computer.
2. Once cloned, you need to add 2 environment files called **.env**. Place each .env file under each
main folder (frontend and backend)
   - Inside the frontend .env file, you need to make an environment variable for your base url, start 
   with REACT_APP_BASE_URL= followed by your localhost followed by /api. Something like this:
    > REACT_APP_BASE_URL=http://localhost:8080/api
   - Inside the backend .env file, you need to add 3 environment variables, one for your secret key, 
   one for your database username and one for your database password. Something like this:
    >JWT_SECRET_KEY="your_secret_key"
    > 
    >DB_USERNAME="database_username"
    > 
    >DB_PASSWORD="database_password"

    *(remember to replace and add your own key, username and password)*

3. To run frontend, open your terminal, navigate to the frontend directory and run these lines of code:
    >   npm install
    >
    > npm start

4. To run backend, open your terminal, navigate to the backend directory and the these lines of code:
    >mvn spring-boot:run
