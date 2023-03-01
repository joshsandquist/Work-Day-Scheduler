// This code wil not run until the HTML is rendered using the .ready method
$(document).ready(function () {
var saveButtonEl = $('.saveBtn')
saveButtonEl.on('click', function() {
//I used 'this' refering to the save button, and selected the id attribute of the parent element
//This will allow me to select which hour block the save button is activating.
var hourId = $(this).parent().attr('id')
//This code will select the user input in the text box and save it as a value for local storage
//The sibling element refers to the sibling of the save button, which in this case is the text input
var description = $(this).siblings('.description').val().trim();
//This line will save our data to local storage using hourId as a key and description as a value
localStorage.setItem(hourId, description)
})
  // This will retrieve the current hour for comparison in selecting the proper class
var currentHour = dayjs().hour()
//The .each method is used to loop through all instances of the .time-block class
$('.time-block').each(function() {
  //This variable uses the split method to retieve the hour number from hour id
  //The index of [1] retrieves the second word, in this case the hour
  var hour = $(this).attr('id').split('-')[1]
  // conditional logic to add the correct class based on the curent class
  if (hour < currentHour) {
    $(this).addClass('past')
  //used the regular eqauality operator as we are comparing a string number to a primative number
  } else if ( hour == currentHour) {
    $(this).addClass('present')
  } else if (hour > currentHour) {
    $(this).addClass('future')
  }
  // variable to retrieve specified hour input from local storage
  var savedInput = localStorage.getItem('hour-' + hour)
  //if there is a value stored to the specified hour, it will retrieve it and set it to the text area
  if(savedInput) {
  //this.children is used to navigate from the .time-block class to the .description class
    $(this).children('.description').val(savedInput)
  }
})
//uses dayJs to retrieve current day of week, month, day, and year to display on page
  var currentDayEl = $('#currentDay')
  var dateToday = dayjs().format('dddd, MMMM D, YYYY')
  currentDayEl.text(dateToday)
});
