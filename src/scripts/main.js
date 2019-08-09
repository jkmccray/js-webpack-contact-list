import API from "./contactCollection.js"
import renderContacts from "./contactList.js"
import contactForm from "./contactForm.js"

const contactFormContainer = document.querySelector("#contact-form")
const contactListContainer = document.querySelector("#contact-list-container")


API.getAllContactData()
  .then(contacts => {
      renderContacts.renderContacts(contacts)
    })