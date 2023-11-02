const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

let Band = sequelize.define('Band', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});

module.exports = {
    Band
};