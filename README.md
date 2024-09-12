# RI Presentation Interview for Patrick Mikes, 9/12

- ### To view rendered markdown in VSC, press shift cmd v 

## ❖ Initial Set Up Instructions
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
[Click here to pull up App Component](./client/src/base/App.js)
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
[Click here to pull up Layout Component](./client/src/components/Layout/index.js)
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
  - Once you're done, test it out in the app by trying to navigate to some random, misnamed page, see if your new component renders correctly


# 2: Reusability

 - I've said it before, and I'll say it again; making reusable components is the name of the game in react. It's ability to streamline the development process can be a game changer, particularly when you have a tight deadline you need to meet (which will basically be alwuays in the professional world.)
 - One of the most common elements that can really benefit from reusability are Cards. I've ended up using them all over most of my applications, and you can see them used over and over in this application. 
 - Reusability can be a double-edged sword however.
   - You want to make your reusable components able to customized, to take in specific content for instance. 
   - However, it can be easy to fall into the trap of making a single component overly complex in order to accomodate many different use cases, when you might actually be better served simply making a separate component. 
 - It's a balancing act, but here are some tips on some simple ways to make your components BOTH <u>*reusable*</u> and <u>*customizable*</u>
 
  ### (A): <u>Pull up the file for the Card component</u>
[Click here to pull up Card Component](./client/src/components/Card/index.js)
```
./client/src/components/Card/index.js
```
```js
import { Card } from "react-bootstrap"
import "./cardStyle.css"

const { Header, Body, Footer } = Card 

export default function CustomCard({header="header", footer="footer", style=null, classes='', children=null}) { //note default parameters
    return (

            <Card style={{...style}} className={classes}>
                <Header className="fs-2" style={{position: 'sticky', top: 0, zIndex:5}}>{header}</Header>
                <Body className="d-flex p-5" style={{zIndex: 0}}>{children}</Body>
                <Footer className="fs-2" style={{zIndex: 0}}>{footer}</Footer>
            </Card>

    )
}
```
 - First, look at the very top import. We're using a Card component from react-bootstrap, so it already has a lot of helpful pre-defined styles for us to use as a base. 
 - Can anyone describe to me what this line here is doing? What is it called, and why is it here?  
 ```js 
 const { Header, Body, Footer } = Card 
 ```
 - Look at the function signature. What is the set of {} braces doing inside there? `function CustomCard({ --- })`
  - Answer: All react function components really only receive a single argument, most often called <u>*props*</u>. However, we almost always need more than one value to create our component. So props is an object, and its property names are the attribute names that were passed via the JSX used to render the component. 
  - For instance, 
  ```jsx
  <MyComponent p1={'someString'} p2={42}></MyComponent>
  ```  
   - if MyComponent has a signature that looks like this
  ```js
  export default function MyComponent(props){
        // in here, props is an object that for this rendering, was passed these two properties
        // {
        //   p1: 'someString',
        //   p2: 42
        // }
  }
  ```
   - However, especially in components where there are a many prop values, it can become tedious to have to preface every reference to one of them by saying props.p1, or props.whatever. 
   - That's why we can destructure the individual properties 






 <!-- ### (A): <u>Pull up the files for the Landing Page and Card components</u>
  - Note, to keep both of these open at once, after you open them, double click the tab along the top bar until the file name is no longer italicized. 
  - These files can be found here: 

[Click here to pull up Landing Page Component](./client/src/pages/landing/index.js)
```
./client/src/pages/landing/index.js
``` -->






