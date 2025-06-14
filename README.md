## Unit Assignment: Music Playlist Explorer

Submitted by: Caleb Calderon

Estimated time spent: 27 hours spent in total

Deployed Application (**required**): [Music Playlist Explorer Deployed Site](https://site-unit2-project1-music-playlist-kbqu.onrender.com/index.html)

### Application Features

#### CORE FEATURES

- [X] **Display Playlists**
  - [X] Dynamically render playlists on the homepage using JavaScript.
    - [X] Playlists should be shown in grid view.
    - [X] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [X] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [X] **Playlist Components**
  - [X] Each tile should display the playlist's:
    - [X] Cover image
    - [X] Name
    - [X] Author
    - [X] Like count

- [X] **Playlist Details**
  - [X] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [X] The modal should show the playlist's:
    - [X] Cover image
    - [X] Name
    - [X] Author
    - [X] List of songs, including each song's:
      - [X] Title
      - [X] Artist
      - [X] Duration
  - [X] The modal itself should:
    - [X] Not occupy the entire screen.
    - [X] Have a shadow to show that it is a pop-up.
    - [X] Appear floating on the screen.
    - [X] The backdrop should appear darker or in a different shade.

- [X] **Like Playlists**
  - [X] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [X] When the heart icon is clicked:
    - [X] If previously unliked:
      - [X] The like count on the playlist tile should increase by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [x] If previously liked:
      - [x] The like count on the playlist tile should decrease by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [X] a playlist with a like count of 0
      - [X] a playlist with a non-zero like count

- [X] **Shuffle Songs**
  - [X] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [X] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once. 
  
- [X] **Featured Page**
  - [X] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [X] Playlist Image
    - [X] Playlist Name
    - [X] List of songs, including each song's:
      - [X] Title
      - [X] Artist
      - [X] Duration
  - [X] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row. 
    - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once. 
  - [x] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons. 

#### STRETCH FEATURES

- [X] **Add New Playlists**
  - [X] Allow users to create new playlists.
  - [ ] Using a form, users can input playlist:
    - [X] Name
    - [X] Author
    - [X] Cover image
    - [X] Add one or more songs to the playlist, specifying the song's:
      - [X] Title
      - [X] Artist
  - [X] The resulting playlist should display in the grid view.
  - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist. 

- [ ] **Edit Existing Playlists**
  - [ ] Enable users to modify the details of existing playlists.
  - [X] Add an edit button to each playlist tile.
  - [ ] Users can update the playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Songs
  - [ ] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [ ] Editing all of a playlist's features (name, creator, AND songs)
    - [ ] Editing some of a playlist's features (name, creator, OR songs) 

- [X] **Delete Playlists**
  - [X] Add a delete button to each playlist tile within the grid view.
  - [X] When clicked, the playlist is removed from the playlist grid view.

- [X] **Search Functionality**
  - [X] Implement a search bar that allows users to filter playlists by:
    - [X] Name 
    - [X] Author
  - [X] The search bar should include:
    - [X] Text input field
    - [X] Submit/Search Button
    - [X] Clear Button
  - [X] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [X] Presses the Enter Key
    - [X] Clicks the Submit/Search Button 
  - [X] User can click the clear button. When clicked:
    - [X] All text in the text input field is deleted
    - [X] All playlists in the `data.json` file are displayed in a grid view
    - [X] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [X] If users can add a playlist, added playlists should be included in search results.
      - [ ] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [X] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications. 

- [ ] **Sorting Options**
  - [X] Implement a drop-down or button options that allow users to sort the playlist by:
    - [ ] Name (A-Z alphabetically)
    - [ ] Number of likes (descending order)
    - [ ] Date added (most recent to oldest, chronologically)
  - [ ] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.




### Walkthrough Video

`https://www.loom.com/share/27d1019adddc4ba3bea37e2e89047462?sid=485b9ba0-5f20-4634-a411-e59103103d7a`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Add your response here:
I think that the Labs really prepared me well with the css in specifc flex boxes. I had a really good understanding of the flex model and the box model and a really good tool that I used in specific was the froggy flex box website. This website that codepath linked gave me great insight on how to set the flex direction, justifying content, and aligning items. I also think that the labs helped with dom manipulation and I got a sold foundation of that through the labs. For example, helped me understand the different between query selector, get element by ID, and query selector all and when to use them.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Add your response here:
I would have done a couple of things differntly. First, I feel like my code could have been structed and organized a bit better. I could have worked a bit better and instead on working on stretch features, make sure my code for the MVP featuers was well written and well commented so I would have focused more on that. I also would have added a button where I can open and close the add playlist form so it is not in the top of the screen ugly at all times. I would have also dynamically added a way that if you fill out the form the new playlist song image would update as well because right now it is just dynamic. I would have also finished working on the edit button and the sort button. I added the initial buttons in the HTML but did not get time to finish writing the JS for it and i wish I couldve completed that. And the final thing i wish I would have done differently is that I would have used better CSS styling with complementary colors, and made this whole project look a bit nicer. I plan to implement all of these things after the internship when I have more time so that I can put it on my resume!

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here:
I think that the project demo could have been e bit shorter. The video was over 2:30 minutes long and I think this is because I really wanted to show that the features worked and and showed the same features a few times. Other than that I think it went well but in the future I would like to add a voice recording explaning what each feature does.

*Did you use any open source libraries?

I used an open source library for my heart icon called font awesome

### Shout out
Shout out to Terrance (peer instructor) and Braden Jones. Braden helped me alot with the shuffle portion for the JS as I had a bit trouble writing that and Terrance helped me alot in general but gave me good advice and was super helpful with the CSS portion of the project. Thanks guys!