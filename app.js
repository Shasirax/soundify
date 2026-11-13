const soundifyApp = {
	artists: [
		{
			name: "Luna",
			album: [
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
}

console.log(songLength(soundifyApp.artists[0].album[0].songs[1]));
