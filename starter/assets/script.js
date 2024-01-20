// variable to store date 
var todayDate = dayjs().format('D dddd, MMMM, YYYY');
var currentTime = dayjs().format('HH');
var saveButton = $('.saveBtn');
var timeBlocks = $('.time-block');
var plannerHours = $('.hour');
var eventToSave;

$('#currentDay').text(todayDate);
// set interval to update date every 24 hours
setInterval(() => {
    $('#currentDay').text(today);
}, (1000 * 60 * 60 * 24));


function saveEvent(event) {
    var buttonClicked = event.target;
    console.log(buttonClicked.text())
};

timeBlocks.on('click', '.saveBtn', saveEvent);

// each function iterate through each element and compare current time to time block time and color accordingly past, present and future

plannerHours.each(function() {
    var value = $(this).text();
    var hoursOnly = value.split(':')[0];
    console.log(hoursOnly);
        if (value.includes('PM') && hoursOnly < 12) {
            hoursOnly = Number(hoursOnly) + 12;
        };
        if (hoursOnly > currentTime) {
            var element = $(`#${hoursOnly}`)
            element.addClass('future')
        } else if (hoursOnly == currentTime) {
            $(`#${hoursOnly}`).addClass('present')
        } else {
            $(`#${hoursOnly}`).addClass('past')
        };
});
