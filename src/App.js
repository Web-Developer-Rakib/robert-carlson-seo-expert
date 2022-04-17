import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Blogs from "./Components/Blogs/Blogs";
import CheckOut from "./Components/CheckOut/CheckOut";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import RequireAuth from "./Hooks/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="blogs"
          element={
            <RequireAuth>
              <Blogs></Blogs>
            </RequireAuth>
          }
        ></Route>
        <Route path="about-me" element={<AboutMe></AboutMe>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
