const { program } = require("commander");


const contactsOperations = require("./contacts/index.js");

program
    .option("-a, --action <type>", "contact operation")
    .option("-i, --id <type>", "contact id")
    .option("-n, --name <type>", "contact name")
    .option("-e, --email <type>", "contact email")
    .option("-p, --phone <type>", "contact phone")

program.parse(process.argv);

const options = program.opts();
console.log(options);

const invokeAction = async ({action, id, data}) => {
    switch (action) {
        case "getAll":
            const contacts = await contactsOperations.getAll();
            console.log(contacts);
            break;
        case "getById":
            const contact = await contactsOperations.getById(id);
            if (!contact) {
                throw new Error('Contact not found');
            }
            console.log(contact);
            break;
        case "add":
            const newContact = await contactsOperations.add(data);
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contactsOperations.updateById(id, data);
            if (!updateContact) {
                throw new Error('Contact not found');
            }
            console.log(updateContact);
        case "removeById":
            const removeContact = await contactsOperations.removeById(id);
            console.log(removeContact);
            break;
        default:
            console.log("Uknown action");
    }
        
}

invokeAction(options);