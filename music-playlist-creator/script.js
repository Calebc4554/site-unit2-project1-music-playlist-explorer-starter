    const playlist = document.querySelectorAll('.playlist');
    const modal = document.getElementById('modal');

    playlist.forEach((playlist) => {
        playlist.addEventListener('click', () => {
            modal.style.display = "block";
        });
    });
    
    modal.addEventListener('click', () => {
        modal.style.display = "none";
    });

