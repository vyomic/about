// Fullscreen function
function fullScreen() {
    var element = document.documentElement;
    
    // Standard Fullscreen API
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } 
    // Firefox Fullscreen API
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } 
    // Webkit Fullscreen API (Chrome, Safari, Opera)
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } 
    // IE/Edge Fullscreen API
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else {
        console.error("Fullscreen API is not supported by this browser.");
    }
}

// Handle the fullscreen button click
$('#enterFullscreenButton').click(function() {
    fullScreen();
});

// Function to update time and date
function updateTime() { 
    var now = new Date();

    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var month = now.toLocaleString('default', { month: 'short' });
    var year = now.getFullYear().toString().substr(-2);

    var timeString = `${hours}:${minutes}`;
    var dateString = `${day}-${month}-${year}`;

    // Update the elements with the new time and date
    $('#timebox .time').text(timeString);
    $('#timebox .date').text(dateString);
}

// Initial call to update time and date
updateTime();

// Set interval to update time and date every second
setInterval(updateTime, 1000);

// Handle navigation clicks
$('#navigation').on('click', 'li', function(e) {
    e.preventDefault(); // Prevent default link behavior

    var $this = $(this);
    
    // Check if it's the "Contact Me" link
    if ($this.attr('title') === 'Contact Me') {
        // Toggle the contact box and active state
        $('#contactbox').toggleClass('contact');
        $this.toggleClass('active');
    } else if ($this.attr('class') !== 'theme') {
        // Remove the active class from all links
        $('nav ul li').removeClass('active');
        $('#contactbox').removeClass('contact');
        
        // Add active class to the clicked link
        $this.addClass('active');
    }
});
