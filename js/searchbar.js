$(document).ready(function() {
    $('.urlbox').on('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        var inputText = $('#urlinput').val();
        var query = "https://www.bing.com/search?q="+inputText;
        //var newHtml= "<iframe src='"+query+"' title='Your Search Results'></iframe>";
        var newHtml= "<iframe src='"+query+"' title='Your Search Results' width='100%' height='580px'></iframe>";
        console.log(query);
      $("#mainbody").html(newHtml);
      
    });
    
});
