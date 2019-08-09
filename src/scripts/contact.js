import elFactory from "./factory.js"

const createContact = (contactObj) => {
  const contactListItem = elFactory("section")
  const name = elFactory("h2", {}, contactObj.name)
  const phoneNumber = elFactory("h3", {}, contactObj.phoneNumber)
  const address = elFactory("h3", {}, contactObj.address)
  contactListItem.appendChild(name)
  contactListItem.appendChild(phoneNumber)
  contactListItem.appendChild(address)
  return contactListItem
}

export default createContact
