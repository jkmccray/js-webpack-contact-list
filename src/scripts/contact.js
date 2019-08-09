import elFactory from "./factory.js"

export default {
  createContactListItem(contactObj) {
    const contactListItem = elFactory("section")
    const name = elFactory("h2", {}, contactObj.name)
    const phoneNumber = elFactory("h3", {}, contactObj.phoneNumber)
    const address = elFactory("h3", {}, contactObj.address)
    contactListItem.appendChild(name)
    contactListItem.appendChild(phoneNumber)
    contactListItem.appendChild(address)
    return contactListItem
  },
  createContactObj(name, phoneNumber, address) {
    return {
      name: name.value,
      phoneNumber: phoneNumber.value,
      address: address.value
    }
  }
}