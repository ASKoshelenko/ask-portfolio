import React from 'react'
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { AboutPage } from './pages/AboutPage';
import { Header } from './components/Header';
// import { MainPage } from './pages/MainPage';
import { Main } from './components/Main'
import { About } from './components/About'
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';



function App() {
  return (
          <>
            <Header />
            <Main />
            <About />
            <Projects />
            <Portfolio />
            <WhyChooseMe />
            <Services />
            <Footer />
          </>
         
      

  );
}

export default App;
