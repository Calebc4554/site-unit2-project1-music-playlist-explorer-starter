    const playlist = document.querySelectorAll('.playlist');
    const modal = document.getElementById('modal');



fetch('data/data.json')
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("playlist-cards");
        console.log(container);

        for (const playlist of data.playlists) {

            const playlistCard = document.createElement("div");
            playlistCard.setAttribute("class", "playlist");

            const playlistImg = document.createElement("img");
            playlistImg.setAttribute("class", "playlist-img");
            playlistImg.src = playlist.playlist_art;
            playlistImg.alt = playlist.playlist_name;
            playlistCard.appendChild(playlistImg);

            const playlistContent = document.createElement("div")
            playlistContent.setAttribute("class", "playlist-content")
            playlistCard.appendChild(playlistContent);

            const playlistName = document.createElement("h2");
            playlistName.textContent = playlist.playlist_name;
            playlistContent.appendChild(playlistName);

            const playlistAuthor = document.createElement("p");
            playlistAuthor.textContent = playlist.playlist_author;
            playlistContent.appendChild(playlistAuthor);

            const playlistLikes = document.createElement("p");
            playlistLikes.textContent = playlist.playlist_likes;
            playlistContent.appendChild(playlistLikes);

            container.appendChild(playlistCard);

            console.log(container);
        }
    });

    playlist.forEach((playlist) => {
        playlist.addEventListener('click', () => {
            modal.style.display = "block";
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = "none";
    });





