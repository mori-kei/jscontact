"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      this.Category = this.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }

  Contact.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len: [0, 20],
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isEmail: true,
          len: [0, 100],
        },
      },
    },
    {
      sequelize,
      modelName: "Contact",
    }
  );

  return Contact;
};
