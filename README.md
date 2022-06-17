## Week 1 Assignment: Flixster

Submitted by: **Roman Scott**

Estimated time spent: **20** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [X] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### STRETCH FEATURES

- [ ] Deploy website using GitHub Pages. 
- [X] Allow user to view more details about a movie within a popup.
- [X] Improve the user experience through CSS & animation.
- [X] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [X] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

[Demo](demo.mp4)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, they did help me complete the assignment. I believe modifying the innerHTML helped me the most because it allowed me to dynamically update the page when search queries were
ran or more results needed to be loaded. I also believe the fetch() call helped, as it allowed me to interact with the API and obtain results.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have added a way to "star" movies and add them to a "Watch Later" category, so that way people could go back and visit movies that interested them.
I would also add a way to sort movies by release date and their vote count, showing the most popular or newest ones first.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I believe in terms of usability, the entire web app works well. The query and search functionalities work well, and the website looks very polished. What I noticed that my peer
did well was that they placed a lot of care into how the website looked on smaller devices and they did a better job at responsiveness than I did (mine is responsive, but
the YouTube embed inside the popup does not resize on mobile devices).

### Open-source libraries used

- Add any links to open-source libraries used in your project.

https://bulma.io/
https://fontawesome.com/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Chris Barfield