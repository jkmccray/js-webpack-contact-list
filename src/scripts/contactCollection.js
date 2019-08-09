const API = {
  getAllContactData() {
    return fetch("http://localhost:8088/contacts")
      .then(contacts => contacts.json())
  },
  saveContact(contactObj) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObj)
    })
  }
}

export default API