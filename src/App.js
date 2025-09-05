import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestComponent from "./components/RequestComponent";
import IncidentComponent from "./components/IncidentComponent";
import TrackerComponent from "./components/TrackerComponent";
import MonthlyIncidentComponent from "./components/MonthlyIncidentComponent";
import MonthlyWoScadeComponent from "./components/MonthlyWoScadeComponent";
import GuideRequestsComponent from "./components/GuideRequestsComponent";
import GuideRequestsMessagesComponent from "./components/GuideRequestsMessagesComponent";
import GuideIncidentsComponent from "./components/GuideIncidentsComponent"
import GuideIncidentsMessageComponent from "./components/GuideIncidentsMessagesComponent"
import PageBaseComponent from "./components/PageBaseComponent";


function App() {
  return ( 
      <PageBaseComponent />
  );
}

  
export default App;
