import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/e-shop";
import Lookbook from "./pages/lookbook";
import News from "./pages/news";
import Admin from "./pages/admin";
import Product from "./pages/product";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const products = [
  { id: 1, name: "", description: "", price: 0 },
  { id: 2, name: "", description: "", price: 0 },
  { id: 3, name: "", description: "", price: 0 },
  { id: 4, name: "", description: "", price: 0 },
  { id: 5, name: "", description: "", price: 0 },
  { id: 6, name: "", description: "", price: 0 },
  { id: 7, name: "", description: "", price: 0 },
  { id: 8, name: "", description: "", price: 0 },
  { id: 9, name: "", description: "", price: 0 },
  { id: 10, name: "", description: "", price: 0 },
  { id: 11, name: "", description: "", price: 0 },
  { id: 12, name: "", description: "", price: 0 },
  { id: 13, name: "", description: "", price: 0 },
];

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/e-shop">
          <Shop props={products} />
        </Route>

        <Route path="/lookbook">
          <Lookbook />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/product/:id">
          <Product props={products} />
        </Route>

        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
