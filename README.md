# RI Presentation Interview for Patrick Mikes, 9/12

- ### To view rendered markdown in VSC, press shift cmd v 

## Initial Set Up Instructions
- ### To start the mongod server, in separate terminal window (a window that you can leave open for the duration during which you want the database to be accessible), enter the command

        $ mongod --dbpath /usr/local/var/mongodb

    Alternatively, you can also just run the built in npm script, but all it does is the same as above

        $ npm run launchMongo

- ### Split Terminal windows in VSC
    - We want two terminals open simultaneously, one representing our front end dev server (create react app), the other our backend API server with express
    - To open the integrated terminal with VSC, you can press the key combination ctrl and \` (the \ is an escape character for the markdown format, it's not one you press. If you're seeing that, you should hit shift cmd v to see the rendered version of this markdown file) 
    - Once you have a single terminal open, to open a split second terminal, you can press the keys cmd \\. Alternatively in the terminal toolbar right above the terminal window in vsc, you can click the split pane icon.
    
- ### Server set up
    - From the root project directory, enter the server/ directory with the command

            $ cd server/
    
    - Install the node modules
    
            $ npm install
    
    - To seed the DB with the initial Data, run the following command
    
            $ npm run seed
    
    - As an alternative, to seeding from the BSON file, you can seed directly from a json file with
    
            $ npm run importDBfromJSON
    
    - At this point, you should be ready to launch the backend server, just run the command
    
            $ npm start
    

- ### Front End Dev Server set up
    - From the root project directory, enter the client/ directory with the command
    
            $ cd client/
    
    - Install the node modules

            $ npm install

    - All you should need to do now to launch the dev server from create-react-app is run the command
    
            $ npm start

