const musicContainer =document.getElementById('music-container'),
playBtn = document.getElementById('play'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');

const audio = document.getElementById('audio'),
progress = document.getElementById('progress'),
progressContainer = document.getElementById('progress-container'),
title = document.getElementById('title'),
cover = document.getElementById('cover');

// song titles
const songs =['audio1','audio2','audio3'];

// keep Track of song
let songIndex = 2;

// Initialy load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `audio/${song}.mp3`;
    cover.src = `img/${song}.jpeg`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

// Event Listeners
playBtn.addEventListener('click',() => {
const isPlaying = musicContainer.classList.contains('play');
if(isPlaying){
    pauseSong();
} else {
    playSong();
}
})