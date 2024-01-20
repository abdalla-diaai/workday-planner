// variable to store date 
var todayDate = dayjs().format('D dddd, MMMM, YYYY');
var currentTime = dayjs().format('HH');
// dummy time for testing the page
// var currentTime = 13;
var saveButton = $('.saveBtn');
var timeBlocks = $('.time-block');
var plannerHours = $('.hour');
var dayEvents;
var eventToSave;
var eventID;
var storedEvents;

function saveEvent(event) {
    // to traverse DOM from parent time block to children textarea
    if (!dayEvents) {
        dayEvents = {};
    };
    // get stored events if existent
    storedEvents = JSON.parse(localStorage.getItem('event'));
    if (storedEvents !== null) {
        storedEvents = dayEvents;
    };
    eventToSave = $(event.target).parent().children('textarea');
    eventID = eventToSave.attr('id');
    if (eventID in dayEvents) {
        localStorage.removeItem(eventID);
         
    };
    dayEvents[eventID] = eventToSave.val();
    localStorage.setItem('event', JSON.stringify(dayEvents));
};

function renderSavedEvents() {
    eventsArray = JSON.parse(localStorage.getItem('event'));
    if (eventsArray) {
        for (const [key, value] of Object.entries(eventsArray)) {
            $(`#${key}`).text(value);
        };
    };
};

// each function iterate through each element and compare current time to time block time and color accordingly past, present and future

plannerHours.each(function () {
    var value = $(this).text();
    var hoursOnly = value.split(':')[0];
    // get hours and convert to 24 hours
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

$('#currentDay').text(todayDate);

// set interval to update date every 24 hours
setInterval(() => {
    $('#currentDay').text(today);
}, (1000 * 60 * 60 * 24));

// run main function to save events on click
timeBlocks.on('click', '.saveBtn', saveEvent);
renderSavedEvents();