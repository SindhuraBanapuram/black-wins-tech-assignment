const Contact = require("../models/Contact");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const newContact = await Contact.create({ name, email, phone, address });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
