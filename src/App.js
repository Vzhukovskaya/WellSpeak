import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsList from './components/WordsList/Words';
import wordsdata from './components/worddata.json';
import Motion from './components/Motion/Motion';

function App() {
  const wordslist = wordsdata;
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <WordsList data={wordslist} />
        <Motion data={wordslist} />
      </div>
      <Footer />
    </div>
  );
};

export default App;