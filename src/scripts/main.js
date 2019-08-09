import API from "./contactCollection.js"
import contactForm from "./contactForm.js"

const contactFormContainer = document.querySelector("#contact-form")


API.getAllContactData()
  .then(data => console.log(data))

// contactFormContainer.appendChild(contactForm.nameSection)