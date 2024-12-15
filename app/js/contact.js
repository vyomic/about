emailjs.init({
    publicKey: 'iTw5ULK7AA-e04eDe',
  });
$('#myform').on('click', 'button', function(e) {
    e.preventDefault();
emailjs.sendForm('service_uplzfcc', 'template_0s52lfo', 'form').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );})