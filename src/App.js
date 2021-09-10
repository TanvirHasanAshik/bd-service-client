import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import About from './components/About/About';
import AddService from './components/Admin/AddService/AddService';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServiceBooking from './components/ServiceBooking/ServiceBooking';
import BookingRequest from './components/Admin/BookingRequest/BookingRequest';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact  path="/">
          <Home></Home>
        </Route> 
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/admin/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/admin/addService">
          <AddService></AddService>
        </Route>
        <Route path="/admin/bookingRequest">
          <BookingRequest></BookingRequest>
        </Route>
        <Route path="/serviceDetails/:id">
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/serviceBooking/:id">
          <ServiceBooking></ServiceBooking>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
