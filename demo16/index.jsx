import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './app.css';

const Dashboard = () => (
  <div>
    <p>Dashboard</p>
  </div>
);

const Inbox = () => (
  <div>
    <p>Inbox</p>
  </div>
);

const Calendar = () => (
  <div>
    <p>Calendar</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <header>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
        Logged in as Jane
      </header>
      <Route exact path="/" component={Dashboard} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/calendar" component={Calendar} />
    </div>
  </Router>
);

render((
  <App />
), document.querySelector('#app'));
