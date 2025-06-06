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

                const likesContainer = document.createElement("div");
                likesContainer.setAttribute("class", "likes-container");

                const playlistLikes = document.createElement("p");
                playlistLikes.setAttribute("class", "playlist-likes");
                playlistLikes.textContent = playlist.playlist_likes;
                likesContainer.appendChild(playlistLikes);

                const playlistLikesIcon = document.createElement("i");
                playlistLikesIcon.setAttribute("class", "fas fa-heart");
                likesContainer.appendChild(playlistLikesIcon);
                playlistContent.appendChild(likesContainer);
                container.appendChild(playlistCard);

                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.classList.add("edit-button");
                playlistContent.appendChild(editBtn);

                editBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                startEditing(playlist);
                });

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-button");
                playlistContent.appendChild(deleteBtn);

                deleteBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                deletePlaylist(playlist);
                });

                playlistLikesIcon.addEventListener('click', (event) => {
                    event.stopPropagation();
                    toggleLike(playlistLikesIcon, playlistLikes);
                });

                playlistCard.addEventListener('click', () => {
                    openModal(playlist);
                });

            }
        })
        .catch(error => {
            console.error('Error fetching the JSON:', error);
        });
    }

    function toggleLike(icon, likesElement) {
        const isLiked = icon.classList.toggle("liked");
        let likesCount = parseInt(likesElement.textContent, 10);

        if (isLiked) {
            likesCount += 1;
        } else {
            likesCount -= 1;
        }
        likesElement.textContent = likesCount;
    }

    function openModal(playlist) {
        const modal = document.getElementById('modal');
        modal.style.display = "block"; 
        console.log(playlist);
        
        const closeButton = document.getElementById('close-button');
        closeButton.addEventListener('click', closeModal);
        
        const modalPlaylistTitle = document.getElementById('modal-playlist-title');
        modalPlaylistTitle.innerHTML = `${playlist.playlist_name}`;
        const modalPlaylistCreator = document.getElementById('modal-playlist-creator');
        modalPlaylistCreator.innerHTML = `Created by: ${playlist.playlist_author}`;
        const mainModalImg = document.getElementById("main-modal-img");
        mainModalImg.src = playlist.playlist_art;

        function updateModalWithSongs(songs) {
            const songImages = document.querySelectorAll(".song-img");
            const songTitles = document.querySelectorAll(".song-title");
            const artistNames = document.querySelectorAll(".artist-name");
            const artistDurations = document.querySelectorAll(".duration");
            songs.forEach((song, index) => {
                if (index < songImages.length) {
                    songImages[index].src = song.song_art;
                    songTitles[index].innerHTML = `${song.title}`;
                    artistNames[index].innerHTML = `${song.artist}`;
                    artistDurations[index].innerHTML = `${song.duration}`;
                }
            });
        }
        updateModalWithSongs(playlist.songs);
        const shuffleButton = document.getElementById("shuffle-button");
        shuffleButton.onclick = function() {
            shuffle(playlist.songs);
            updateModalWithSongs(playlist.songs);
        };
    }
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
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

    function displayRandomPlaylist() {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => {
                const randomPlaylist = data.playlists[Math.floor(Math.random() * data.playlists.length)];

                document.getElementById('featured-img').src = randomPlaylist.playlist_art;

                document.getElementById('modal-playlist-title').innerHTML = `${randomPlaylist.playlist_name}`;

                document.getElementById('modal-playlist-creator').innerHTML = `Created by: ${randomPlaylist.playlist_author}`;

                const songContainer = document.querySelector('.song-container');
                while (songContainer.firstChild) {
                    songContainer.removeChild(songContainer.firstChild);
                }

                randomPlaylist.songs.forEach((song, index) => {
                    const article = document.createElement('article');
                    article.classList.add('songs');

                    const img = document.createElement('img');
                    img.classList.add('song-img');
                    img.src = song.song_art;
                    article.appendChild(img);

                    const div = document.createElement('div');
                    div.classList.add('song-info');

                    const h3 = document.createElement('h3');
                    h3.classList.add('song-title');
                    h3.innerHTML = `${song.title}`;
                    div.appendChild(h3);

                    const p = document.createElement('p');
                    p.classList.add('artist-name');
                    p.innerHTML = `${song.artist}`;
                    div.appendChild(p);

                    const durationDiv = document.createElement('div');
                    durationDiv.classList.add('duration-container');

                    const durationP = document.createElement('p');
                    durationP.classList.add('duration');
                    durationP.innerHTML = `${song.duration}`;
                    durationDiv.appendChild(durationP);

                    div.appendChild(durationDiv);
                    article.appendChild(div);

                    songContainer.appendChild(article);
                });
            })
            .catch(error => {
                console.error('Error fetching the JSON:', error);
            });
    }

    displayRandomPlaylist();

    const featuredButton = document.getElementById('featured-button');
    const allPlaylistsButton = document.getElementById('all-playlists-button');
    featuredButton.addEventListener('click', () => {
        window.location.href = 'featured.html';
    });
    allPlaylistsButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });


