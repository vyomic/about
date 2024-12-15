$(document).ready(function() {
    $("#navigation").load("components/navbar/navbar.html");
    $('#contentbox').load("components/home/home.html");
    
    // load content from module
    $('#navigation').on('click', 'li', function(e) {
        e.preventDefault();
        if ($(this).attr('pageLoad')){

            var page = $(this).attr('pageLoad');
            if(page=="components/contact/contact.html"){
                $('#contactbox').load(page);  
            }
                else if (page=="bitapp/quiz_v1/quiz.html") {
             $('#contentbox').load("bitapp/quiz_v1/quiz.html");
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
                var newCSS = currCSS.includes('app/css/day.css') ? 'app/css/night.css' : 'app/css/day.css';
            
                // Update href attribute of stylesheet link
                $('#cssTheme').attr('href', newCSS);
                };
        }
    });
});
