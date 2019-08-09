import elFactory from "./contact.js"

const contactForm = {
  nameSection: elFactory("fieldset"),
  nameLabel: elFactory("label", { for: "fullName" }, "Name "),
  nameInput: elFactory("input", { type: "text", id: "fullName", placeholder: "Enter person's full name", autofocus: true }),
  phoneNumSection: elFactory("fieldset"),
  phoneNumLabel: elFactory("label", { for: "fullName" }, "Name "),
  phoneNumInput: elFactory("input", { type: "text", id: "fullName", placeholder: "Enter person's full name", autofocus: true }),
  addressSection: elFactory("fieldset"),
  addressLabel: elFactory("label", { for: "address" }, "Address "),
  addressInput: elFactory("input", { type: "text", id: "address", placeholder: "Address" }),
  saveBtn: elFactory("button", { id: "saveEntry" }, "Save Address")
}

export default contactForm