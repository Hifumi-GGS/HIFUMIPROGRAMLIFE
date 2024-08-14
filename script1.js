 const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

    yesBtn.addEventListener('click', () => {
      alert('Reign is happy! See you soon!');
      sendEmail('CHOP CHOP BOY, SHE SAID YES!!');
    });
    noBtn.addEventListener('click', () => {
      alert('Reign is sad');
      sendEmail('She said no, Too bad man...');
    });

    playBtn.addEventListener('click', () => {
      audio.play();
    });
    pauseBtn.addEventListener('click', () => {
      audio.pause();
    });

    function sendEmail(message) {
      const email = 'reignjoshua.parnaso@unc.edu.ph'
      const subject = 'Notif: ';
      const body = `Subject: ${subject}\r\n\r\n${message}`;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
