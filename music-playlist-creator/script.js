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


fetch('data/data.json')
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById = ("playlist-cards");

        for (const playlist of data.playlists) {

            const playlistCard = document.createElement("div")
            playlistCard.classList.add = "playlist"

            const playlistImg = document.createElement("img")
            playlistImg.classList.add = "playlist-img"
            playlistImg.src = playlist.playlist_art
            playlistImg.alt = playlist.playlist_name
            playlistCard.appendChild(playlistImg)

            const playlistName = document.createElement("h2")
            playlistName.textContent = playlist.playlist_name
            playlistCard.appendChild(playlistName)

            const playlistAuthor = document.createElement("p")
            playlistAuthor.textContent = playlist.playlist_author
            playlistCard.appendChild(playlistAuthor)

            const playlistLikes = document.createElement("p")
            playlistLikes.textContent = playlist.playlist_likes
            playlistCard.appendChild(playlistLikes)

            container.appendChild(playlistCard);
        }
    });





