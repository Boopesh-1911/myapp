import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdPersonAddAlt } from "react-icons/md";
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
import { Routes } from "../Router";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import NavBar from "../../Components/NavBar";

const mockData = [
  {
    name: "G Sakthipriya",
    databaseType: 'http:// "a list is decl...',
    host: "Savannah Nguyen",
    port: 484,
    userName: "Guy Hawkins",
    database: "My SQAL",
    status: true,
  },
  {
    name: "Mathi Krishnan",
    databaseType: "http://www.zotware...",
    host: "Marvin McKinney",
    port: 460,
    userName: "Kristin Watson",
    database: "Windows Registry",
    status: true,
  },
  {
    name: "Sushma M",
    databaseType: "http://www.zoomit....",
    host: "Annette Black",
    port: 279,
    userName: "Marvin McKinney",
    database: "File Monitoring",
    status: true,
  },
  {
    name: "Surendran Selvaraj",
    databaseType: "http://www.dambas...",
    host: "Bessie Cooper",
    port: 9359,
    userName: "Ronald Richards",
    database: "Web Proxy",
    status: true,
  },
  {
    name: "Balla Daniella",
    databaseType: "http://www.codeho...",
    host: "Ralph Edwards",
    port: 11,
    userName: "Floyd Miles",
    database: "SSL/TLS Inspection",
    status: true,
  },
  {
    name: "Sípos Veronika",
    databaseType: "http://www.zotware...",
    host: "Jerome Bell",
    port: 8811,
    userName: "Courtney Henry",
    database: "Mail Server",
    status: true,
  },
  {
    name: "Virág Mercédesz",
    databaseType: "http://www.donwar...",
    host: "Cody Fisher",
    port: 80,
    userName: "Jacob Jones",
    database: "Packet Capture",
    status: true,
  },
  {
    name: "Gáspár Gréta",
    databaseType: "http://www.grooves...",
    host: "Ronald Richards",
    port: 88,
    userName: "Darlene Robertson",
    database: "Detonation Chamber",
    status: true,
  },
  {
    name: "Virág Mercédesz",
    databaseType: "http://www.labdrill.c...",
    host: "Cody Fisher",
    port: 80,
    userName: "Jacob Jones",
    database: "Packet Capture",
    status: true,
  },
];

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="main-content">
        <NavBar/>

        <div className="header-bar">
          <SideBar/>

          <div className="content-with-sidebar">
            <div className="header-bar">
              <div className="breadcrumb-container">
                <div className="breadcrumb">Home / Connections</div>
                <div className="breadcrumb-title">Connections</div>
              </div>

              <button className="add-new-button">
                <MdPersonAddAlt style={{ marginRight: "8px" }} />
                Add new
              </button>
            </div>

            <hr></hr>
            <table className="data-table">
              <thead className="table-header">
                <tr>
                  <th className="table-header-cell">NAME</th>
                  <th className="table-header-cell">DATA BASE TYPE</th>
                  <th className="table-header-cell">HOST</th>
                  <th className="table-header-cell">PORT</th>
                  <th className="table-header-cell">USER NAME</th>
                  <th className="table-header-cell">DATA BASE</th>
                  <th className="table-header-cell">STATUS</th>
                  <th className="table-header-cell">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((item, index) => (
                  <tr className="table-row" key={index}>
                    <td className="table-cell">{item.name}</td>
                    <td className="table-cell">{item.databaseType}</td>
                    <td className="table-cell">{item.host}</td>
                    <td className="table-cell">{item.port}</td>
                    <td className="table-cell">{item.userName}</td>
                    <td className="table-cell">{item.database}</td>
                    <td className="table-cell">
                      <span
                        className={`status-indicator ${
                          item.status ? "active" : "inactive"
                        }`}
                      ></span>
                      Active
                    </td>
                    <td className="table-cell">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button className="page-button" disabled>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="page-button active">1</button>
              <button className="page-button">2</button>
              <button className="page-button" disabled>
                ...
              </button>
              <button className="page-button">99</button>
              <button className="page-button">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className="footer">Powered by Neural Schema</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
