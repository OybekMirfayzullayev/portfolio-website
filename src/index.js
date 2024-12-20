import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/main.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Projects from './components/Projects.jsx';
import About from './components/About.jsx' 
import Main from './components/Main.jsx'


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path='/' element={<Main/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='*'/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
