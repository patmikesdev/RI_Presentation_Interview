// import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/"
import Landing from "../pages/landing/"
import Search from "../pages/search/"
import Submit from "../pages/submit/"
import Edit from "../pages/edit/"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}> {/*NOTE: absence of path attribute = "layout route", requires use of <Outlet /> */}
            <Route path="/" element={<Landing />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/submit" element={<Submit />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
