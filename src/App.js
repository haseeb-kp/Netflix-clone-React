import React from "react";
import {originals,action,horror,romance,comedy,trending} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import Navbar from './Components/Navbar/navbar'
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>

    </div>
  );
}

export default App;
