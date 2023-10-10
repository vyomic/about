function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    // Get hours, minutes, and seconds in 24-hour format
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = hours + ":" + minutes;
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();

function currdate() {
    const clockElement = document.getElementById("date");
    const now = new Date();            
    // Get the current date
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = day + "/" + month + "/" + year;
    clockElement.textContent = dateString;
}

// Update the clock every second
setInterval(currdate, 1000);

// Initial call to display the time immediately
updateClock();