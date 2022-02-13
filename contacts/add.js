const { v4 } = require("uuid");
const fs = require("fs/promises");

const getAll = require("./getAll");
const filePath = require("./filePath");

const add = async (data) => {
    const contacts = await getAll();
    const newContact = { ...data, id: v4() };
    contacts.push(newContact);
    await fs.writeFile(filePath, JSON.stringify(contacts));
    return newContact;
}

module.exports = add;