$(document).ready(function() {
    $('.urlbox').on('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        var inputText = $('#urlinput').val();
        var query = "https://www.google.com/search?q="+inputText;
        //var newHtml= "<iframe src='"+query+"' title='Your Search Results'></iframe>";
        var newHtml= "<iframe src='https://www.youtube.com/' title='Your Search Results'></iframe>";
        console.log(query);
      $("#mainbody").html(newHtml);
      
    });
    
});
