import './App.css';
import React,{useState} from 'react';
import Navbra from './components/Navbra';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(0);

  const progressState = (data) => {
    setProgress(data);
  }

  let pageSize = 15;
    return (
      <div>
        <Router>
          <Navbra />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News apiKey={apiKey} progressState={progressState} key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News apiKey={apiKey} progressState={progressState} key="business" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News apiKey={apiKey} progressState={progressState} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/technology"><News apKeyi={apiKey} progressState={progressState} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
            <Route exact path="/health"><News apiKey={apiKey} progressState={progressState} key="health" pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News apiKey={apiKey} progressState={progressState} key="science" pageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News apiKey={apiKey} progressState={progressState} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
          </Switch>
        </Router>
      </div>
    )
}