import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Project from './Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <div id="scroller-center" className="flex justify-center items-center">
    <div id="scroller" className="flex gap-10 flex-col justify-center items-center w-5/12 h-auto">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects/:projectID" element={<Project/>} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  </div>
</>);
