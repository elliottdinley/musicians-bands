const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

let Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
}); 

module.exports = {
    Song
};