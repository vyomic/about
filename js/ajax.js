$(document).ready(function() {
  // Add a click event handler to the button
  $(".navli").click(function() {
    var elementData = $(this).data("url");
    // Use AJAX to load the content of newPage.html
    if (elementData !== undefined) {
      $.ajax({
        url: elementData,
        dataType: "html",
        success: function(response) {
      //     // Replace the entire body content with the content of newPage.html
          $("body").html(response);
        },
        error: function() {
          alert("Failed to load new page.");
        }
      });
    }
    else {
      console.log("not found");
    }
  });
});

