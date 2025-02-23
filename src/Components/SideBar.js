import React from "react";
import connectionlogo from "../assets/people_alt.jpg";
import operationlogo from "../assets/operationlogo.jpg";
import datalogo from "../assets/datalogo.jpg";
import teamlogo from "../assets/teamlogo.jpg";
import settinglogo from "../assets/settinglogo.jpg";
import { useNavigate } from "react-router-dom";
import { Routes } from "../pages/Router";

function SideBar() {

    const navigate = useNavigate();
  return (
    <div className="sidebars-container ">
      <div className="sidebar1 ">
        <div className="sidebar-icon">
          <img src={connectionlogo} />
          <span className="sidebar-icon-text">Connections</span>
        </div>
        <div
          className="sidebar-icon"
          onClick={() => navigate(Routes.Operation)}
        >
          <img src={operationlogo}/>
          <span className="sidebar-icon-text">Operation</span>
        </div>
        <div className="sidebar-icon" onClick={() => navigate(Routes.DataUrl)}>
          <img src={datalogo}/>
          <span className="sidebar-icon-text">0 Data URL</span>
        </div>
      </div>

      <div className="sidebar1">
        <div className="sidebar-icon" onClick={() => navigate(Routes.Teams)}>
          <img src={teamlogo} />
          <span className="sidebar-icon-text">Teams</span>
        </div>
        <div className="sidebar-icon" onClick={() => navigate(Routes.Settings)}>
          <img src={settinglogo} />
          <span className="sidebar-icon-text">Settings</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
