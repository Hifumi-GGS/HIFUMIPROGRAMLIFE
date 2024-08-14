
   const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

    
    playBtn.addEventListener('click', () => {
      audio.play();
    });
    pauseBtn.addEventListener('click', () => {
      audio.pause();
    });

    
