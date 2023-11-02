const { sequelize } = require('./db.js');

const { Band, Musician, Song } = require('./index.js')

beforeEach(async () => {
	await sequelize.sync();
});

test('Can create a new Band', async () => {
    const newBand = await Band.create({ name: 'Test Band', genre: 'Test Genre' });
    expect(newBand.name).toBe('Test Band');
    expect(newBand.genre).toBe('Test Genre');
});

test('Can create a new Musician', async () => {
    const newMusician = await Musician.create({ name: 'Test Musician', instrument: 'Test Instrument' });
    expect(newMusician.name).toBe('Test Musician');
    expect(newMusician.instrument).toBe('Test Instrument');
});

test('Can create a new Song', async () => {
    const newSong = await Song.create({ title: 'Test Song', year: 2023, length: 180 });
    expect(newSong.title).toBe('Test Song');
    expect(newSong.year).toBe(2023);
    expect(newSong.length).toBe(180);
});

test('Can update a Band instance', async () => {
    const bandToUpdate = await Band.create({ name: 'Band to Update', genre: 'Old Genre' });
    await bandToUpdate.update({ genre: 'New Genre' });
    const updatedBand = await Band.findByPk(bandToUpdate.id);
    expect(updatedBand.genre).toBe('New Genre');
});

test('Can update a Musician instance', async () => {
    const musicianToUpdate = await Musician.create({ name: 'Musician to Update', instrument: 'Old Instrument' });
    await musicianToUpdate.update({ instrument: 'New Instrument' });
    const updatedMusician = await Musician.findByPk(musicianToUpdate.id);
    expect(updatedMusician.instrument).toBe('New Instrument');
});

test('Can update a Song instance', async () => {
    const songToUpdate = await Song.create({ title: 'Song to Update', year: 2020, length: 200 });
    await songToUpdate.update({ length: 250 });
    const updatedSong = await Song.findByPk(songToUpdate.id);
    expect(updatedSong.length).toBe(250);
});

test('Can delete a Band instance', async () => {
    const bandToDelete = await Band.create({ name: 'Band to Delete', genre: 'Test Genre' });
    await bandToDelete.destroy();
    const deletedBand = await Band.findByPk(bandToDelete.id);
    expect(deletedBand).toBeNull();
});

test('Can delete a Musician instance', async () => {
    const musicianToDelete = await Musician.create({ name: 'Musician to Delete', instrument: 'Test Instrument' });
    await musicianToDelete.destroy();
    const deletedMusician = await Musician.findByPk(musicianToDelete.id);
    expect(deletedMusician).toBeNull();
});

test('Can delete a Song instance', async () => {
    const songToDelete = await Song.create({ title: 'Song to Delete', year: 2023, length: 180 });
    await songToDelete.destroy();
    const deletedSong = await Song.findByPk(songToDelete.id);
    expect(deletedSong).toBeNull();
});