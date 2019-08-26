import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import Main from './components/Main';
import HowItWorks from './components/HowItWorks';
import StepOne from './components/StepOne';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Route path="/" exact component={Main} />
        <Route path="/howItWorks" component={HowItWorks} />
        <Route path="/protege" component={StepOne} />
      </BrowserRouter>
    </div>
  );
}

export default App;
