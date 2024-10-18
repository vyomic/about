$(document).ready(function() {
    $("#navigation").load("module/navbar.html");
    $('#contentbox').load("module/home.html");
    
    // load content from module
    $('#navigation').on('click', 'li', function(e) {
        e.preventDefault();
        if ($(this).attr('pageLoad')){

            var page = $(this).attr('pageLoad');
            if(page=="module/contact.html"){
                $('#contactbox').load(page);  
            }
                else if (page=="module/quiz.html") {
             $('#contentbox').load("module/quiz.html");
}
            else{
                console.log('clicked')
                // Load the clicked page into #content div
                $('#contentbox').load(page);
                $('#contactbox').empty();
            }
        }
        else { 
            if ($(this).hasClass('theme')){
                // Check current stylesheet
                // console.log('theme clicked')
                var currCSS = $('#cssTheme').attr('href');
            
                // Toggle between style.css and night.css
                var newCSS = currCSS.includes('css/day.css') ? 'css/night.css' : 'css/day.css';
            
                // Update href attribute of stylesheet link
                $('#cssTheme').attr('href', newCSS);
                };
        }
    });
});
