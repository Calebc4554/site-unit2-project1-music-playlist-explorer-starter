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

function loadModalFromJson () {
    fetch('data/data.json')
    .then(res => res.json())
    .then(data => {

        if (data.playlists.length === 0) {
            alert("Json is Empty");
            return;
        }

        const container = document.getElementById("modal");

        for (const playlist of data.playlists) {

            const modalContent= document.querySelector("main-");
            modalContent.setAttribute("class", "modal-content");

            const mainModal= document.createElement("div");
            mainModal.setAttribute("class", "main-modal");
            modalContent.appendChild(mainModal)

            const mainModalImg = document.createElement("img");
            mainModalImg.setAttribute("class", "");
            mainModalImg.src = playlist.playlist_art;
            mainModalImg.alt = playlist.playlist_name;
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
        const playlist = document.querySelectorAll('.playlist');

        playlist.forEach((playlist) => {
            playlist.addEventListener('click', () => {
                modal.style.display = "block";
            });
        });
    });
}

loadModalFromJson();

