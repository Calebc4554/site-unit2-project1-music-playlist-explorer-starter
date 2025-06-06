    
    //global variables
    let allPlaylists = [];       
    let editingIndex = -1;
    let currentFilterQuery = ""; 


    // dynamically add playlist from json
    function loadPlaylistFromJson() {
        fetch('data/data.json')
        .then(res => res.json())
        .then(data => {

            //check if json is empty and alert if it is
            if (data.playlists.length === 0) {
                alert("Json is Empty");
                return;
            }


            allPlaylists = data.playlists; 
            const container = document.getElementById("playlist-cards");

            //for each playlist in the json create all of the elements and append it to the container
            for (const playlist of allPlaylists) {
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


                //create the edit button dynamically
                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.classList.add("edit-button");
                playlistContent.appendChild(editBtn);

                //when the edit button is clicked it stops the past event and runs the startEditing function
                editBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                startEditing(playlist);
                });


                //create the delete button dynamically
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-button");
                playlistContent.appendChild(deleteBtn);

                //when the delete button is clicked it stops the past event and runs the deletePlaylist function
                deleteBtn.addEventListener("click", (event) => {
                    event.stopPropagation();
                    deletePlaylist(playlist);
                });


                //when the likes icon is clicked it stops passed event and runs the function toggleLike
                playlistLikesIcon.addEventListener('click', (event) => {
                    event.stopPropagation();
                    toggleLike(playlistLikesIcon, playlistLikes);
                });


                //When the playlistCard is clicked it runs the function openModal
                playlistCard.addEventListener('click', () => {
                    openModal(playlist);
                });

            }
        })

        //Catch any error I might have missed
        .catch(error => {
            console.error('Error fetching the JSON:', error);
        });
    }

// function for deleting playlist
function deletePlaylist(playlist) {

    // if the index is negative then it doesnt exist so stop
    const idx = allPlaylists.indexOf(playlist);
    if (idx === -1) return;

    //if playlist is found remove it from all playlist
    allPlaylists.splice(idx, 1);

    const container = document.getElementById("playlist-cards");
    const playlistCards = container.getElementsByClassName("playlist");

    //loop through playlist cards to see if title matches if it does then set displau of card to none to hide it
    for (let i = 0; i < playlistCards.length; i++) {
        const card = playlistCards[i];
        const playlistNameElement = card.querySelector("h2");
        if (playlistNameElement && playlistNameElement.textContent === playlist.playlist_name) {
            card.style.display = "none"; 
            break;
        }
    }
}
    //didnt get to implement with the time I
    function startEditing() {

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
            const songContainer = document.querySelector('.song-container');
            while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }
        songs.forEach((song) => {
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

// add new playlist 
document.getElementById('add-playlist-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const playlistName = document.getElementById('new-playlist-name').value;
    const playlistImg = document.getElementById('new-playlist-img').value;
    const playlistAuthor = document.getElementById('new-playlist-author').value;

    const songInputs = document.querySelectorAll('.song-input-row');
    const songs = Array.from(songInputs).map(input => ({
        title: input.querySelector('.new-song-title').value,
        artist: input.querySelector('.new-song-artist').value,
        duration: '3:00',
        song_art: 'https://picsum.photos/200/200'
    }));

    const newPlaylist = {
        playlist_name: playlistName,
        playlist_author: playlistAuthor,
        playlist_art: playlistImg,
        playlist_likes: 0,
        songs: songs
    };

    allPlaylists.push(newPlaylist);

    addPlaylistToDOM(newPlaylist);

    this.reset();
});

document.getElementById('add-song-button').addEventListener('click', function() {
    
    const songContainer = document.getElementById('new-songs-container');
    const newSongInputRow = document.createElement('div');
    newSongInputRow.classList.add('song-input-row');
    newSongInputRow.innerHTML = `
        <input type="text" class="new-song-title" required placeholder="Song Title" />
        <input type="text" class="new-song-artist" required placeholder="Artist Name" />
    `;
    songContainer.appendChild(newSongInputRow);
});

function addPlaylistToDOM(playlist) {

    const container = document.getElementById("playlist-cards");

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


// search feature
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    filterPlaylists(query);
});
document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    filterPlaylists(''); 
});

//filter the playlist function
function filterPlaylists(query) {
    const container = document.getElementById("playlist-cards");
    container.innerHTML = ''; 

    const filteredPlaylists = allPlaylists.filter(playlist => {
        return playlist.playlist_name.toLowerCase().includes(query) ||
        playlist.playlist_author.toLowerCase().includes(query);
    });

    filteredPlaylists.forEach(playlist => {
        addPlaylistToDOM(playlist);
    });
}