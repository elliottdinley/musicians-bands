const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")

Band.hasMany(Musician);
Musician.belongsTo(Band);

Band.hasMany(Song);
Song.belongsTo(Band);

module.exports = {
    Band,
    Musician,
    Song
};
