# Redux Feedback Form

## Description

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

## Screen Shot

![app screenshot](/wireframes/screenshots/feedback-form-screenshot.png)

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
