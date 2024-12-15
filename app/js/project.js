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


    function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ');
}

$(document).ready(function() {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log("json loaded");
        const projectContainer = $('#projectContainer');
        const conf = data.conf;
  
        data.project.forEach(project => {
          // Truncate description using a separate function (if needed)
          const brief = truncateText(project.description, conf[0].descriptionLen);
  
          // Create elements using jQuery
          const card = $('<div>').addClass('gridbox');
          card.html(`
            <div class="imgbox">
              <img height="300" src="app/img/project.jpg" alt="Image" style="vertical-align: super; position: relative; left: -70px;">
            </div>
            <div class="detbox">
              <h3 class="title">${project.title}</h3>
              <p class="des">${brief}</p>
              <p class="date">${project.date}</p>
              <div class="button">
                <a href="${project.link}" target="_blank"><button>Click</button></a>
              </div>
            </div>
          `);
  
          // Append the card to the container
          projectContainer.append(card);
        });
      })
      .catch(error = console.error('Error fetching data:', error));
  });
  
})