$(document).ready(function() {
    // Create two variable with the names of the months and days in an array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    // Create a newDate() object
    var newDate = new Date();
    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    // Output the day, date, month and year   
    $('.datetime--date').html(dayNames[newDate.getDay()] + ', ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
    
    // setInterval( function() {
    //     // Create a newDate() object and extract the seconds of the current time on the visitor's
    //     var seconds = new Date().getSeconds();
    //     // Add a leading zero to seconds value
    //     $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    // },1000);
        
    setInterval( function() {
        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes value
        $(".datetime--time-minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
        
    setInterval( function() {
        // Create a newDate() object and extract the hours of the current time on the visitor’s
        var hours = new Date().getHours();

        // Calculate period
        if (hours > 12) {
            var period = "PM";
        } else {
            var period = "AM";
        };

        // Convert to 12 hour clock
        var hours = hours > 12 ? hours - 12 : hours;

        // Add a leading zero to the hours value
        $(".datetime--time-hours").html(( hours < 10 ? "0" : "" ) + hours);
        $(".datetime--time-period").html(period);
    }, 1000);
});