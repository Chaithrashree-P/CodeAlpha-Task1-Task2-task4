cconst audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

// Song titles and artists with online URLs
const songs = [
  { title: 'Song Title 1', artist: 'Artist 1', src: 'music/ringtone audio.mpeg' },
  { title: 'Song Title 2', artist: 'Artist 2', src: 'music/WhatsApp Audio 2024-07-19 at 2.18.44 PM.mpeg' },
  { title: 'Song Title 3', artist: 'Artist 3', src: 'music/WhatsApp Audio 2024-07-19 at 2.18.44 PM (1).mpeg' }
    { title: 'Song Title 3', artist: 'Artist 3', src: 'C:\\Users\\chaithra\\Downloads\\soundwave-media\\music\\media\\Good-Day-Wake-Up-NEFFEX.mp3' }
];

let songIndex = 0;

// Load song
function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
}

// Play song
function playSong() {
  audio.play();
  playBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

// Pause song
function pauseSong() {
  audio.pause();
  playBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress
function setProgress(e) {
  const width = this.client
