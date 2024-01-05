import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsList from './components/WordsList/Words';
import wordsdata from './components/worddata.json';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Motion from './components/Motion/Motion';
import ForUse from './components/ForUse/ForUse';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const wordslist = wordsdata;
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Routes>
            <Route path="/" element={<WordsList data={wordslist} />} />
            <Route path="/motion" element={<Motion data={wordslist} />} />
            <Route path="/foruse" element={<ForUse />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;