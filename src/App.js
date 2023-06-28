import logo from './logo.svg';
import './App.css';
import NavMenu from './components/common/NavMenu';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Fleets from './components/pages/Fleets';
import Fleet from './components/pages/Fleet';
import Clusters from './components/pages/Clusters';
import Users from './components/pages/Users';
import Deployments from './components/pages/Deployments';
import Configuration from './components/pages/Configuration';
import Preferences from './components/pages/Preferences';
import Policies from './components/pages/Policies';
import Policy from './components/pages/Policy';
import Logout from './components/pages/Logout';
function App() {

   return <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/fleets" exact element={<Fleets />} />
        <Route path="/fleet" exact element={<Fleet />} />
        <Route path="/clusters" exact element={<Clusters />} />
        <Route path="/deployments" exact element={<Deployments />} />
        <Route path="/policies" exact element={<Policies />} />
        <Route path="/policy" exact element={<Policy />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/configuration" exact element={<Configuration />} />
        <Route path="/preferences" exact element={<Preferences />} />
        <Route path="/logout" exact element={<Logout />} />
      </Routes>
    </Router>
   </>;
}

export default App;
