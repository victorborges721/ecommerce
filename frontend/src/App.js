import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </Router>
  );
}

export default App;
