"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Role.hasMany(models.User);
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      unique: true,
    },
    {
      sequelize,
      modelName: "Roles",
      timestamps: true,
      tableName: "roles",
    }
  );
  return Role;
};
