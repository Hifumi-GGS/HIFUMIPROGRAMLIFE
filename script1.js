
   const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

     const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
   
    yesBtn.addEventListener('click', () => {
      Swal.fire("REIGN IS VERY HAPPY");
    });
    noBtn.addEventListener('click', () => {
      Swal.fire("REIGN IS VERY SAD");
    });
    playBtn.addEventListener('click', () => {
      audio.play();
    });
    pauseBtn.addEventListener('click', () => {
      audio.pause();
    });

    
