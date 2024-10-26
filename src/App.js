import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Website from './components/Website';
import Email from './components/Email';
import OnlineStore from './components/OnlineStore';
import OnlineCourses from './components/Course';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/email" element={<Email />} />
        <Route path="/online store" element={<OnlineStore />} />
        <Route path="/online courses" element={<OnlineCourses />} />
      </Routes>


      <Footer/>
      </BrowserRouter>
           
          
          






     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
