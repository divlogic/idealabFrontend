import React from 'react';
import './App.css';
import QueueContainer from './components/Queue/QueueContainer';
import UploadContainer from './components/Upload/UploadContainer';
import LoginManager from './components/Login/LoginManager';
import SidebarNavigation from './SidebarNavigation';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  const activeUser = 'admin';
  const sidebar = activeUser ? <SidebarNavigation /> : null;
  return (
    <div className="App">
      <HashRouter>
        {sidebar}
      <Switch>
        <Route exact path="/queue" component={QueueContainer} />
        <Route exact path="/upload" component={UploadContainer} />
        <Route path="/login" component={LoginManager} />
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
