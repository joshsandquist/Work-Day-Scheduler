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
})
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var currentDayEl = $('#currentDay')
  var dateToday = dayjs().format('dddd, MMMM D, YYYY')
  currentDayEl.text(dateToday)
});
