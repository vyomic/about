$(document).ready(function() {
    $('.urlbox').on('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        var inputText = $('#urlinput').val();
        var query = "https://www.google.com/search?q="+inputText;
        console.log(query);
        $.ajax({
            url: query,
            dataType: "html",
            success: function(response) {
          //     // Replace the entire body content with the content of newPage.html
              $("#mainbody").html(response);
            },
            error: function() {
              alert("Failed to load new page.");
            }
          });
    });
});