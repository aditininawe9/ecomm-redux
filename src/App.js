import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./components/Details/Details";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
      </Provider>
    </Router>
  );
}

export default App;
