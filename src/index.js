import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar'
import Home from './Home';
import Project from './Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
      <React.StrictMode>
        <BrowserRouter>
          <Navbar/>
          <div id="scroller-center" className="flex justify-center items-center">
            <div id="scroller" className="flex gap-10 flex-col py-5
                                          justify-center items-center
                                          w-5/12 h-auto">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects/:projectID" element={<Project/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </React.StrictMode>
</>);
