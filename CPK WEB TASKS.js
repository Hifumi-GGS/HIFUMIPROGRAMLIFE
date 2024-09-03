const audio = document.getElementById('class-music');

const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

const volumeSlider = document.getElementById('volume-slider');

// Event listeners
playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);
stopBtn.addEventListener('click', stopMusic);
volumeSlider.addEventListener('input', adjustVolume);

// Functions
function playMusic() {
  audio.play();
  playBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseMusic() {
  audio.pause();
  playBtn.disabled = false;
  pauseBtn.disabled = true;
}

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
  playBtn.disabled = false;
  pauseBtn.disabled = true;
}

function adjustVolume() {
  audio.volume = volumeSlider.value / 100;
  document.getElementById('volume-label').innerHTML = `Volume: ${volumeSlider.value}%`;
}

const pageTransition = document.querySelector('.page-transition');

pageTransition.classList.add('fade-in');

window.addEventListener('beforeunload', () => {
  pageTransition.classList.add('fade-out');
});

//contact us function

const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');


contactLink.addEventListener('click', () => {
  contactModal.classList.add('show');
});


closeModal.addEventListener('click', () => {
  contactModal.classList.remove('show');
});


window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove('show');
  }
});