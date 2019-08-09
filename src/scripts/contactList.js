import createContact from "./contact.js"
import API from "./contactCollection.js"

const contactListContainer = document.querySelector("#contact-list-container")

export default {
  renderContacts() {
    API.getAllContactData()
      .then(contacts => {
        contacts.forEach(contact => contactListContainer.appendChild(createContact.createContactListItem(contact)))
      })
  }
}