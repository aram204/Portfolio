function sendEmail() {
  const params = {
    name: document.querySelector('.js-name').value,
    email: document.querySelector('.js-email').value,
    message: document.querySelector('.js-message').value
  };

  const serviceID = "service_i6bucci";
  const templateID = "template_t3vnm9a";

  const button = document.querySelector('.js-send-button')
  button.innerHTML = `
          <svg class="loading-icon" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" 
            class="hds-flight-icon--animation-loading">

            <g fill="#000000" fill-rule="evenodd" clip-rule="evenodd">

              <path fill="CurrentColor" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2" />

              <path fill="CurrentColor" d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />

            </g>

          </svg>`


  emailjs.send(serviceID, templateID, params)
    .then(() => {
      button.innerHTML = 'Sent'
      setTimeout(() => {
        button.innerHTML = 'Send Message'
      }, 1000)
      console.log("Success");
    })
    .catch(err => {
      console.error("Error:", err);
    });
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        sendEmail();
        this.reset(); 
    });
};
