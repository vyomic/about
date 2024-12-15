$(document).ready(function () {
  document.getElementById('fullScreenBox').style.display = 'block';

  var enterFullscreenButton = document.getElementById('fullScreen');

  enterFullscreenButton.addEventListener('click', function () {
  
    document.getElementById('fullScreenBox').style.display = 'none';
    var element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();

    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
    document.getElementById('exitFs').style.visibility='visible';
  });
  

  // Function to update time and date
  function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var month = now.toLocaleString('default', { month: 'short' });
    var year = now.getFullYear().toString().substr(-2);
    // var dayOfWeek = now.toLocaleString('default', { weekday: 'long' });

    var timeString = hours + ':' + minutes;
    var dateString = day + '-' + month + '-' + year;

    $('#timebox .time').text(timeString);
    $('#timebox .date').text(dateString);
  }

  // Initial call to update time and date
  updateTime();

  // Set interval to update time and date every second
  setInterval(updateTime, 1000);


  // Handle click event on navigation links
  $('#navigation').on('click', 'li', (function (e) {
    e.preventDefault(); // Prevent default link behavior
    if ($(this).attr('title') == 'Contact Me') {
      // Remove active class from all links
      if ($('#contactbox').hasClass('contact')) {
        $('#contactbox').removeClass('contact');
        $('nav ul li').removeClass('active');
      }

      // Add active class to the clicked link
      else {
        $('#contactbox').addClass('contact');
        $(this).addClass('active');
      }
    }
    else if ($(this).attr('class') != 'theme') {
      // Remove active class from all links
      $('nav ul li').removeClass('active');
      $('#contactbox').removeClass('contact');
      console.log('class added')

      // Add active class to the clicked link

      $(this).addClass('active');
    }
  }));



 


});
