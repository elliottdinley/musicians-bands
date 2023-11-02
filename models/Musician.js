const {Sequelize, sequelize} = require('../db');
const { DataTypes } = require('sequelize');

let Musician = sequelize.define('Musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
});

module.exports = {
    Musician
};