import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import reportWebVitals from "./reportWebVitals"
import Header from "./components/Header"
import FreelanceForm from "./components/FreelanceForm"
import Error from "./components/Error"
import Freelances from './components/FreelanceForm/Freelances';
import Results from './pages/Results';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body{
    margin: 0;
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
