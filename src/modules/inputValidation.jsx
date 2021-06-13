

// shared function for validating inputs on forms that require a number
// between 1 and 5
const inputValidation = (event, rating) => {
    // keep page from refreshing on click
    event.preventDefault();
    // form validation
    // check for empty input field
    if (rating === '') {
        return
    // check for an input field that's too long
    } else if (rating.length !== 1) {
        return;
    // check for characters that aren't numbers
    } else if (typeof Number(rating) !== 'number') {
        return;
    // check to make sure input is between 1 and 5
    } else if (rating < 1 || rating > 5) {
        return;
    }
    // pass back rating if it meets necessary criteria
    return rating;
}

module.exports = inputValidation;