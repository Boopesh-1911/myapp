import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/NSIT.jpg";
import userlogo from "../assets/userlogo.jpg";
import searchIcon from "../assets/SearchIcon.jpg";
import Notification from "../assets/notification.jpg";
import NotifiactionCount from "../assets/NotifiactionCount.jpg";

import {
    faSearch,
    faBell,
    faPlus,
    faEllipsisV,
    faChevronLeft,
    faChevronRight,
    faNetworkWired,
    faSyncAlt,
    faDatabase,
    faUserFriends,
    faCog,
  } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return(
        <div className="header">
          <div className="header-logo">
            {" "}
            <img src={logo} />{" "}
          </div>
          <div className="user-info">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-info-text-container">
              <div className="user-name">Hello Sakthipriya !</div>
              <div style={{ fontSize: "12px", color: "#666" }}></div>
            </div>
            <div className="userlogo">
              {" "}
              <img src={userlogo} />{" "}
            </div>
          </div>

          <div className="header-action">
            <div className="search-container">
              <div>
              <input
                type="text"
                className="search-bar"
                placeholder="Search Something..."
              />
              
              </div>
            </div>
          </div>

          <div className="header-actions">
            <button className="notification-button">
            <img src={Notification} style={{ marginRight: "20px" }} />
              <div style={{ marginRight: "30px" }}>Notification</div>
              
                <img src={NotifiactionCount}
                style={{ marginRight: "10px" }}/>
                
              
            </button>
          </div>
        </div>
    );
}

export default NavBar;


