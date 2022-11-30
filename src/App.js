import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Scrollbtn from './components/Scrollbtn';
import Wave from './components/Wave';

const App = (props) => {

  const [progress, setProgress] = useState(0)



  return (
    <>
      <Router>

        <div>
          <Navbar></Navbar>
          <div className='wave'>

          </div>

          <LoadingBar
            color='#f11946'
            progress={progress}
          />


          <Routes >
            <Route exact path='/' element={<News setProgress={setProgress} key="general" country="in" category="general" />}></Route>
            <Route exact path='/Business' element={<News setProgress={setProgress} key="Business" country="in" category="business" />}></Route>
            <Route exact path='/Sports' element={<News setProgress={setProgress} key="sports" country="in" category="sports" />}></Route>
            <Route exact path='/Entertainment' element={<News setProgress={setProgress} key="Entertainment" country="in" category="entertainment" />}></Route>
            <Route exact path='/Health' element={<News setProgress={setProgress} key="Health" country="in" category="health" />}></Route>
            <Route exact path='/Technology' element={<News setProgress={setProgress} key="Technology" country="in" category="technology" />}></Route>
            <Route exact path='/About' element={<About></About>}></Route>
          </Routes>

          <Scrollbtn></Scrollbtn>


          <Footer></Footer>

        </div>

      </Router>



    </>
  )
}


export default App

