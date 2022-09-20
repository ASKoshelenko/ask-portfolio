import React from 'react'
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { AboutPage } from './pages/AboutPage';
import { Header } from './components/Header';
// import { MainPage } from './pages/MainPage';
import { Main } from './components/Main'
import { About } from './components/About'
import { Services } from './components/Services';



function App() {
  return (
          <>
            <Header />
            <Main />
            <About />
            <Services />
          </>
         
      

  );
}

export default App;
