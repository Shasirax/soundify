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

const songLength = (song) => {
  return song.seconds;
};

console.log(songLength(soundifyApp.artists[0].albums[0].songs[1]));

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

console.log(totalLength(soundifyApp.artists));

const getAlbumByArtist = (query) => {
  return soundifyApp.artists
    .filter((artist) => artist.name.toLowerCase() === query.toLowerCase())
    .map((artist) => artist.albums);
};

console.log(getAlbumByArtist("luna"))
console.log(totalLength(soundifyApp.artists))


let newSong = {nr: 3, title: "Moonfall", seconds: 200}

const addToAlbum = (song, album) => {
	album.push(song)
}

addToAlbum(newSong, soundifyApp.artists[0].albums[0].songs)

console.log(soundifyApp)
