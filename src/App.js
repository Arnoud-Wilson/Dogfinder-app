import React from "react";
import Navigation from "./components/navigation/Navigation";
import AllDogs from "./pages/alldogs/AllDogs";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import SignUp from "./pages/signup/SignUp";
import SingleDog from "./pages/singledog/SingleDog";
import './App.css';

function App() {
  return (
      <>
          <Navigation />
          <Home />
          <SignUp />
          <Login />
          <AllDogs />
          <Search />
          <SingleDog />
      </>
  );
}

export default App;
