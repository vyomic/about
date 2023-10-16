$(document).ready(function() {
  
  $('#urlinput').focus(function() {
    $('#urlinput').attr("placeholder", "Search on bing...");
  });

  $('#urlinput').blur(function() {
    $('#urlinput').attr("placeholder", "https://vyomic.github.io/about");
  });



  $('.urlbox').on('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      var inputText = $('#urlinput').val();
      var query = "https://www.bing.com/search?q="+inputText;
      //var newHtml= "<iframe src='"+query+"' title='Your Search Results'></iframe>";
      var newHtml=  "<iframe src='"+query+"' title='Your Search Results' width='100%' height='100%'></iframe>";
      console.log(query);
    $("#mainbody").html(newHtml);
    
  });
  
});
