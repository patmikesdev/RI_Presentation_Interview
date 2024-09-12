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

# 1: Routing with React Router
### (A): <u>Pull up the file for App.js, which can be found at</u> 
```
./client/src/base/App.js
```
```js
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}> 
            <Route path="/" element={<Landing />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/submit" element={<Submit />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```
- Here you can see the Route tree for the entire application. Another way to think of this is like a site-map - it specifies all the different pages that are reachable through the app. 
- One of these routes in particular is different from the others though.
  - Which one is it?
  - What makes it different?
  - What does the different mean? 

- If you said the `<Layout>` route, congratulations! It's different because <u>*it doesn't have any path attribute*</u>. This makes it what is creatively named as a <u>layout route</u> in React Router (not to be confused with the Layout component which the route renders)
- In React Router, layout routes are used when you have some JSX that you'd like to be a parent to an entire set of routes. It saves you from having to repeat the same code for each individual page. It's named this because most commonly, the sort of thing it's used for is when you have a set of pages that you want to display nested within common HTML, and perhaps apply common styles and functionality. The layout route simply wraps all the nested routes in its element. 
- Let's head over the this Layout component and check it out. 

### (B): <u>Pull up the file for the Layout component, which can be found at </u>
```
./client/src/components/Layout/index.js
```
```js
import { Outlet } from "react-router"
import Navbar from "../Navbar/"
import "./layout.css"

export default function Layout() {
    return (
        <div className="Layout">
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}
```
- Does anyone see a component that might be important for making this a true layout route?

- The `<Outlet></Outlet>` component!! 
- What this Outlet component does is tell React Router to render, at this location in the entire DOM, whichever one of the `<Route>`s nested inside the layout `<Route>` (see above, `App.js`) correctly matched the url the visitor has navigated to. 
- So for instance, if we visited `/search`, what the router renders would look like this
```html
<Lavout>
   <Search></Search>
</Layout>
```
- What would be the biggest benefit for structuring your code this way?


- <u>*REUSABILITY*</u>. You can see in this example here, using the layout route allows me to apply both the common html elements I want present on every page (`<Navbar>` and `<main>`), and also to apply a set of common styles (`import './layout.css'`). I only need to do this once!

#### <u>Bonus Exercise</u>
  - What happens though in our application if somebody tries to visit a URL for which there is no match? We need to implement a generic, catch-all route that will display a nice message gently telling our user they're lost, and helping them back to the home page. 
    - (Hint) what symbol is often used, for instance in RegExps or glob patterns, when we want to specify a character/characters that matches anything? You may have also heard it called a wildcard symbol. Where would you use this in a `<Route>` component? 

# Reusability

