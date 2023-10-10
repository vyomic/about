// full screen
var myModal = new bootstrap.Modal(document.getElementById('staticBackdros'))
myModal.show()
document.addEventListener('DOMContentLoaded', function () {
    var enterFullscreenButton = document.getElementById('enterFullscreenButton');

    enterFullscreenButton.addEventListener('click', function () {
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
    });
});

// theme Change

document.addEventListener('DOMContentLoaded', function () {
    var theme = document.getElementById('theme');
    var stylesheetLink = document.getElementById('stylesheet');
    var currentStylesheet = 'css/styleD.css'; // The initial stylesheet

    theme.addEventListener('click', function () {
        if (currentStylesheet === 'css/styleD.css') {
            // Switch to an alternative stylesheet
            currentStylesheet = 'css/night.css';
        } else {
            // Switch back to the default stylesheet
            currentStylesheet = 'css/styleD.css';
        }

        // Update the href attribute of the stylesheet link
        stylesheetLink.href = currentStylesheet;
    });
});