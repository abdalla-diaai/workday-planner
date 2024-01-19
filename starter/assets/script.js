// variable to store date 
var today = dayjs().format('D dddd, MMMM, YYYY');
$('#currentDay').text(today);
// set interval to update date every 24 hours
setInterval(() => {
    $('#currentDay').text(today);
}, (1000 * 60 * 60 * 24));

