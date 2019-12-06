# Ambassador Coding Challenge

## Problem

This app was developed to use referral marketing to grow a list of landing pages and track visits. Users can add any new page to the list (as long as it is unique), visit, edit or delete existing page links, and view the number of times each link has been clicked.

## Solution

My solution is full stack, but focuses primarily on front-end, with a very basic node.js server to fulfill HTTP requests to a simple database.

## Technical Choice

I chose to write the frontend in React to be modular and scalable. While this app is very simple, there are multiple components shared between pages and dynamically rendered based on what is fetched from the database. I used redux to keep data organized and share data across the application. While this small app may not have been the best use case for redux (being that the state is very simple and could have been handled at the component level), adding a redux store will allow the application to scale easily if we needed to expand its uses with a more complex data model and more pieces of state to keep track of.

As I wanted to focus on the frontend, I kept my backend very simple, with just a few api endpoints to perform CRUD operations with the database. I chose Node.js with Express because it allows for a very simple server with quick setup time, and a Postgresql database for the ease of integrating with Heroku deployment.

## If I had More Time

There are many features I would like to add if I were to spend more time on the project. Some of these include: Showing a link not found page if a user tries to go to a link that hasn’t been created yet, creating user accounts so only link creators can edit or delete a link, showing historic names of links so users can find links based on previous names, more validation of link name text (currently only checking if a link exists or is empty, but I’m sure it would be easy to break if a user were to type special characters), and live updates of link click numbers.

Additionally, if I had more time I would have written better test coverage. I would have liked to write unit tests for helper functions and tests to make sure my database queries are returning data in the format I’m expecting it in.

## Deployment

My application is deployed at
https://reed-referral-app.herokuapp.com/

And the html/css exercise can be found at
https://reed-referral-app.herokuapp.com/html-css-exercise
