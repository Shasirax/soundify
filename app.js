const soundifyApp = {
  artists: [
    {
      name: "Luna",
      albums: [
        {
          title: "Midnight Sessions",
          songs: [
            { nr: 1, title: "Night Walk", seconds: 210 },
            { nr: 2, title: "Starlight", seconds: 195 },
          ],
        },
      ],
    },
  ],
};

// Task 1: Snabb-navigering
const songLength = (song) => {
  return song.seconds;
};

const starlight = songLength(soundifyApp.artists[0].albums[0].songs[1])

console.log(starlight);


//Task 2: Räkna Speltid
const totalLength = (artists) => {
  let total = 0;
  artists.forEach((artist) => {
    artist.albums.forEach((album) => {
      album.songs.forEach((song) => {
        total += song.seconds;
      });
    });
  });

  return total;
};

const totalSekunder = totalLength(soundifyApp.artists)

console.log(totalSekunder);


//Task 3: Lägg till ny låt
let newSong = {nr: 3, title: "Moonfall", seconds: 200}

const addSongToAlbum = (song, album) => {
	album.push(song)
}

addSongToAlbum(newSong, soundifyApp.artists[0].albums[0].songs)

console.log(soundifyApp)

//Task 4: Sök artist
const getAlbumByArtist = (query) => {
	return soundifyApp.artists
		.filter((artist) => artist.name.toLowerCase() === query.toLowerCase())
		.map((artist) => artist.albums);
};

console.log(getAlbumByArtist("luna"))