// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
var saveButtonEl = $('.saveBtn')
saveButtonEl.on('click', function() {
//I used 'this' refering to the save button, and selected the id attribute of the parent
//This will allow me to select which hour block the save button is activating.
var hourId = $(this).parent().attr('id')
//This code will select the user input in the text box and save it as a value for local storage
var description = $(this).siblings('.description').val().trim();
//This line will save our data to local storage using hourId as a key and description as a value
localStorage.setItem(hourId, description)
})

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDayEl = $('#currentDay')
  var dateToday = dayjs().format('dddd, MMMM DD[th]')
  currentDayEl.text(dateToday)
});
