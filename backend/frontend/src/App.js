import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/shipping" component={ShippingScreen} />
        <Route exact path="/payment" component={PaymentScreen} />
        <Route exact path="/confirmation" component={ConfirmationScreen} />
      </Switch>
    </Router>
  );
}

export default App;
