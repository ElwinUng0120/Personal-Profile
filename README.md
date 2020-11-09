# Personal-Profile-WithDatabase/Backend
This my personal profile website hosted on heroku: https://personal-profile-withbackend.herokuapp.com/<br>
It is based on the *master* branch.

## What's New?
- server.js: used **express.js** to set up endpoints for calling services from the backend and serve all contents in the *public* folder
- fileSorter.js: used to read the thumbnail images from the *public* folder and return all file names in an array sorted in descending modified time
- porfolioManager.js: used to insert thumbnail images to the *porfolio* page using the array of file names returned from *fileSorter.js*

### Why use backend service if you can manually write all the file names into the code?
- Because I do not want to write all the file names into the code **MANUALLY**
- It also automates the process of adding in new projects to the page since all I need to do is upload a new thumbnail image and add **ONE** link to the code for the project repo

## Future development
- Add JAWSDB for managing thumbnail images, i.e. their names and links to repo
- Deploy in a full MVC model