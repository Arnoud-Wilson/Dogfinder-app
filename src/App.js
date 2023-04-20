import React from "react";
import Navigation from "./components/navigation/Navigation";
import AllDogs from "./pages/alldogs/AllDogs";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import SignUp from "./pages/signup/SignUp";
import SingleDog from "./pages/singledog/SingleDog";
import NotFound from "./pages/notfound/NotFound";
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <Navigation />
          <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/alldogs" element={ <AllDogs /> } />
                <Route path="/search" element={ <Search /> } />
                <Route path="/singledog/:id" element={ <SingleDog /> } />
                <Route path="*" element={ <NotFound /> } />
          </Routes>
      </>
  );
}

export default App;
