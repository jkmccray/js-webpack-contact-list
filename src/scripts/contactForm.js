import elFactory from "./factory.js"
import API from "./contactCollection.js"
import createContact from "./contact.js"
import renderContacts from "./contactList.js"

const contactFormContainer = document.querySelector("#contact-form")

export default {
  createContactForm() {
    const nameSection = elFactory("fieldset")
    const nameLabel = elFactory("label", { for: "fullName" }, "Name ")
    const nameInput = elFactory("input", { type: "text", id: "fullName", placeholder: "Name", autofocus: true })
    const phoneNumSection = elFactory("fieldset")
    const phoneNumLabel = elFactory("label", { for: "phoneNumber" }, "Phone Number ")
    const phoneNumInput = elFactory("input", { type: "text", id: "phoneNumber", placeholder: "Phone Number", autofocus: true })
    const addressSection = elFactory("fieldset")
    const addressLabel = elFactory("label", { for: "address" }, "Address ")
    const addressInput = elFactory("input", { type: "text", id: "address", placeholder: "Address" })
    const saveBtn = elFactory("button", { id: "saveContact" }, "Save Contact")
    contactFormContainer.appendChild(nameSection)
    nameSection.appendChild(nameLabel)
    nameSection.appendChild(nameInput)
    contactFormContainer.appendChild(phoneNumSection)
    phoneNumSection.appendChild(phoneNumLabel)
    phoneNumSection.appendChild(phoneNumInput)
    contactFormContainer.appendChild(addressSection)
    addressSection.appendChild(addressLabel)
    addressSection.appendChild(addressInput)
    contactFormContainer.appendChild(saveBtn)
  },
  saveNewContact() {
    document.querySelector("#saveContact").addEventListener("click", () => {
      const name = document.querySelector("#fullName")
      const phoneNumber = document.querySelector("#phoneNumber")
      const address = document.querySelector("#address")
      const contactObj = createContact.createContactObj(name, phoneNumber, address)
      API.saveContact(contactObj).then(renderContacts.renderContacts)
      name.value = ""
      phoneNumber.value = ""
      address.value = ""
    })
  }
}