# workday-planner

A simple calendar app for scheduling your work day.

## Description:

The page is a simple calendar app to create events during working hours 09:00 AM - 05:00 PM. The events are stored to local storage which can be replaced with new ones. The page displays the current data at the top and updates every 24 hours. The time blocks are shown as rows which change color based on current time. If the time block has passed the row will appear grey, if it is current, the row will appear red, if it is in the future, the row will appear green. 

## Installation

NA

## Usage

Double click on the time block needed, type in a description and press save button. The event will be stored in local storage. [LINK TO DEPLOYED PAGE](https://abdalla-diaai.github.io/workday-planner/). [SCREENSHOT of DEPLOYED PAGE](./images/dummy-time%20@%201%20PM.png). In the screenshot, [the current time](https://github.com/abdalla-diaai/workday-planner/blob/d06c66ebcdb57b67de111155837e0ec8bd9d23f5/starter/assets/script.js#L5?plain=1) variable is set to a dummy time 01:00 PM. Time in the past appears grey, the current hour which is 01:00 PM is red and the hours after 01:00 PM in the future appear green. 

### Possible Issues

There is one issue which is that local storage is sometimes lost upon refreshing the page especially while replacing events. I am looking into possible solutions for this issue and will rectify in the near future. But, it does not affect the functionality of the page. 

## Credit

NA

## License

Please refer to the LICENSE in the repository.