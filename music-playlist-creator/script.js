function loadPlaylistFromJson() {
    fetch('data/data.json')
    .then(res => res.json())
    .then(data => {
        if (data.playlists.length === 0) {
            alert("Json is Empty");
            return;
        }

        const container = document.getElementById("playlist-cards");

        for (const playlist of data.playlists) {
            const playlistCard = document.createElement("div");
            playlistCard.setAttribute("class", "playlist");

            const playlistImg = document.createElement("img");
            playlistImg.setAttribute("class", "playlist-img");
            playlistImg.src = playlist.playlist_art;
            playlistImg.alt = playlist.playlist_name;
            playlistCard.appendChild(playlistImg);

            const playlistContent = document.createElement("div");
            playlistContent.setAttribute("class", "playlist-content");
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

            playlistCard.addEventListener('click', () => {
                openModal(playlist);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching the JSON:', error);
    });
}

function openModal(playlist) {
    const modal = document.getElementById('modal');
    modal.style.display = "block"; 
    console.log(playlist);
    
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', closeModal);
    
    const modalPlaylistTitle = document.getElementById('modal-playlist-title')
    modalPlaylistTitle.innerHTML = `${playlist.playlist_name}`;

    const modalPlaylistCreator = document.getElementById('modal-playlist-creator')
    modalPlaylistCreator.innerHTML = `Created by: ${playlist.playlist_author}`;
    
    const mainModalImg = document.getElementById("main-modal-img");
    mainModalImg.src = playlist.playlist_art;

    const songImages = document.querySelectorAll(".song-img");
    playlist.songs.forEach((song, index) => {
        if (index < songImages.length) {
            const songImg = songImages[index];
            songImg.src = song.song_art;
        }
    });

    const songTitles = document.querySelectorAll(".song-title");
    playlist.songs.forEach((song, index) => {
        if (index < songTitles.length) {
            const songTitle = songTitles[index];
            songTitle.innerHTML = `${song.title}`;
        }
    })

    const artistNames = document.querySelectorAll(".artist-name");
    playlist.songs.forEach((song, index) => {
        if (index < artistNames.length) {
            const artistName = artistNames[index];
            artistName.innerHTML = `${song.artist}`;
        }
    })

    const artistDurations = document.querySelectorAll(".duration");
    playlist.songs.forEach((song, index) => {
        if (index < artistDurations.length) {
            const artistDuration = artistNames[index];
            artistDuration.innerHTML = `${song.duration}`;
        }
    })
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}


loadPlaylistFromJson();

