const models = require("../models");

async function listContacts() {
  // const contacts = await models.Contact.findAll();
  const contacts = await models.Contact.findAll({ include: "category" });
  console.log(
    contacts.map((contact) => {
      return contact.name;
    })
  );

  for (const contact of contacts) {
    // const category = await contact.getCategory();
    const category = contact.category;
    if (category) {
      console.log("カテゴリのある連絡先");
      console.log(category.name, contact.name);
    }
  }

  const category = await models.Category.findOne();
  // Categoryモデルのインスタンスを起点にして、所属する複数のContactを取ってくる
  const categoryContacts = await category.getContacts();
  console.log(`カテゴリ: ${category.name}に属する連絡先`);
  console.log(
    categoryContacts.map((contact) => {
      return contact.name;
    })
  );
}

listContacts();
