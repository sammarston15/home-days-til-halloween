
// set the day you're counting down to
const halloween = new Date('October 31, 2019 00:00:00').getTime();

// update the count every 1 second
const x = setInterval(function() {

    // get today's date and time
    const now = new Date().getTime();

    // find the distance between now and the countdown date
    const distance = halloween - now;

    // time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) /  (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);

    // Display the result in the element with id
    // const idElement = document.getElementById('count'); 
    document.getElementsByClassName("days")[0].innerHTML = days + "   ";
    document.getElementsByClassName("hours")[0].innerHTML = hours + "   ";
    document.getElementsByClassName("minutes")[0].innerHTML = minutes + "   ";
    document.getElementsByClassName("seconds")[0].innerHTML = seconds + "   ";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementsByClassName("count").innerHTML = "IT BE HALLOWEEN";
    }

}, 1000);