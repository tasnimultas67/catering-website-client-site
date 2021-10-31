import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './Provider/AuthProvider';
import Home from './Conponents/Pages/Home/Home';
import Services from './Conponents/Pages/Services/Services';
import NavBar from './Conponents/Header/NavBar/NavBar';
import MyOrders from "./Conponents/Pages/MyOrders/MyOrders";
import ManageOrders from "./Conponents/Pages/ManageOrders/ManageOrders";
import ServiceDetails from "./Conponents/Pages/ServiceDetails/ServiceDetails";
import Login from "./Conponents/Login/Login";
import Register from "./Conponents/Register/Register";
import PrivateRoute from "./Conponents/PrivateRoute/PrivateRoute";
import NotFound from "./Conponents/NotFound/NotFound";
import AddService from "./Conponents/AddService/AddService";
import ManageServices from "./Conponents/Pages/ManageServices/ManageServices";
import BookNow from "./Conponents/Pages/BookNow/BookNow";
import UpdateOrder from "./Conponents/Pages/UpdateOrder/UpdateOrder";
import Contact from "./Conponents/Pages/Contact/Contact";
import Footer from "./Conponents/Footer/Footer";
import About from "./Conponents/Pages/About/About";

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
      <NavBar></NavBar>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute exact path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <Route exact path='/manageorders'>
            <ManageOrders></ManageOrders>
          </Route>
          <PrivateRoute exact path='/manageservices'>
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path='/addservice'>
            <AddService></AddService>
          </Route>
          <PrivateRoute exact path='/manageorders/updateUserOrder/:id'>
            <UpdateOrder></UpdateOrder>
          </PrivateRoute>
          <PrivateRoute exact path='/servicedetails/:id'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute exact path='/bookNow/:id'>
            <BookNow></BookNow>
          </PrivateRoute>
          <PrivateRoute exact path='/contact'>
            <Contact></Contact>
          </PrivateRoute>
          <Route exact path='/aboutus'>
            <About></About>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
