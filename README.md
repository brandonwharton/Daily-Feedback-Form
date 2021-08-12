# Redux Feedback Form

## Description

_Duration: Two-day Sprint_

The goal of this project was to create a feedback collection form using React and Redux. The requirements were that 
each of the four feedback views existing on their own component with navigation routes to move to the next one. The feedback
for the first three views needed to be validated and were required, while the fourth comment view was optional. It was required
that Redux get used to store the data in a reducer along each step of the way before getting sent to a database after confirming on
a review component. A success message component was to show up after submission along with an option to fill out another feedback form,
which would send the user back to the start of the form and clear any existing data from the reducer.

I opted to create a two-way route system, with the capacity to move forward and backward along the feedback form in order to go back and
alter an existing choice. The previous choice is conditionally rendered, and a new choice needs to be submitted before moving forward. I
added a progress bar above the feedback form that tracks the user's progress as they fill out the form fields. I also added an admin page
navigable by a /admin route which displays the full list of feedback from the database as a table. There's an option to delete feedback from
the database on the admin page which prompts a confirmation before sending the delete request.

You can view this project on Heroku [here](https://frozen-meadow-03062.herokuapp.com/#/).
For the admin section click [here](https://frozen-meadow-03062.herokuapp.com/#/admin). Apologies if the link takes a little while to load, it's being hosted for free and is probably sleeping.

## Screen Shot

![app screenshot](/wireframes/screenshots/feedback-form-screenshot.png)
![app screenshot](/wireframes/screenshots/feedback-form-screenshot2.png)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Homebrew](https://brew.sh/)

## Installation

1. Using provided database.sql file, use a database manager of your choice ([Postico](https://eggerapps.at/postico/)) to create a local
database with the listed table name and structure.
2. Begin running your local database by running `brew services start postgresql` in a terminal.
    - Stop database by running `brew services stop postgresql` in that same terminal.
3. Navigate to the root directory of the project in another terminal.
4. Run `npm install` in the terminal to install dependencies locally.
5. Run `npm run server` in your terminal to start the project's local server.
    - Stop the local server by pressing `ctrl-c`.
6. Run `npm run client` in another terminal to start the client page.
    - Stop the local server by pressing `ctrl-c`.    
7. Open a browser window and navigate to [http://localhost:3000/](http://localhost:3000/) to use the app.

## Usage

1. The main view is the beginning of a feedback form. There are instructions for a form of self reflection and feedback to be ranked on a scale from
   1-5. The arrow button the right takes you to the next feedback entry. The next two entries are similar, with the fourth being a field to enter in 
   comments. All of the red buttons on the left navigate you one view previous if you'd like to adjust any of your feedback. 
2. After the comment is a review page which displays the feedback selections you've chosen. There is still an option to go back and make changes, as well
   as a submit button which sends your feedback data to the database. After clicking the submit button you're brought to a confirmation page with a button
   that lets you start a new feedback form and navigates you back to the beginning.
3. Naviagating to the /admin route in the URL bar brings you to an Admin page with a table containing all the previous feedback in the database. There is
   a delete button for each piece of feedback which removes that feedback entry from the database. 


## Built With

- React
- Redux
- Node.js
- PostgreSQL
- Axios
- Express
- Material UI

## Acknowledgement

As always, a huge thank you to [Prime Digital Academy](https://www.primeacademy.io/) for the continued instruction
and inspiration in bringing this projects to life.


