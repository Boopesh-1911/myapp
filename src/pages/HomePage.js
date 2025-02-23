import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Routes as appRoutes} from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
import Connection from './Connection/Connection'
import Operation from "./Operation/Operation";
import DataUrl from "./DataUrl/DataUrl";
import Settings from "./Settings/Settings";
import Teams from "./Teams/Teams";
import NotFound from "../Components/NotFound";





const MainContent = () => {
   
    return (
  
      <>
        <div className="maincontent">
              <ToastContainer />
              <Routes>
                <Route exact path={appRoutes.Connection} element={<Connection />}/>
                <Route exact path={appRoutes.Operation} element={<Operation/>}/>
                <Route exact path={appRoutes.DataUrl} element={<DataUrl/>}/>
                <Route exact path={appRoutes.Settings} element={<Settings/>}/>
                <Route exact path={appRoutes.Teams} element={<Teams/>}/>
                <Route path="*" element={<NotFound />}/>
                </Routes>
  
            </div>
          
        </>
      
    );
  };
  
  export default MainContent;