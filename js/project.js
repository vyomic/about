function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    return truncatedWords.join(' ');
}
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the container element
        const projectContainer = document.getElementById('projectContainer');
        const conf = data.conf;

        // Loop through the data and create HTML cards dynamically
        data.project.forEach(project => {
            //truncate Description
            const brief = truncateText(project.description, conf[0].descriptionLen);
            // Create elements
            const card = document.createElement('div');
            card.classList.add('gridbox');
            card.innerHTML = `
            <div class="imgbox">
                <img height="300" src="img/project.jpg" alt="Image" style="vertical-align: super; position: relative; left: -70px;">
            </div>
            <div class="detbox">
                <h3 class="title">${project.title}</h3>
                <p class="des">${brief}</p>
                <p class="date">${project.date}</p>
                <div class="button">
                <a href="${project.link}" target="_blank"><button>Click</button></a>
                </div>
            </div>`;
            // Append the card to the container
            projectContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));