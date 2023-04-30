import React, {useContext} from "react";
import Navigation from "./components/navigation/Navigation";
import AllDogs from "./pages/alldogs/AllDogs";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import SignUp from "./pages/signup/SignUp";
import SingleDog from "./pages/singledog/SingleDog";
import NotFound from "./pages/notfound/NotFound";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import DogFinder from "./components/DogFinder";
import {AuthContext} from "./context/CustomContextProvider";
import DogFinderPage from "./pages/Dogfinder/DogFinderPage";

function App() {
    const { isAuth } = useContext(AuthContext);

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
                <Route path="dogfinderpage/:kids/:dogs/:train/:energy/:protect" element={ isAuth === true ? <DogFinderPage /> : < Navigate to="/" /> } />
                <Route path="*" element={ <NotFound /> } />
          </Routes>
      </>
  );
}

export default App;


