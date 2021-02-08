import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/e-shop";
import Lookbook from "./pages/lookbook";
import News from "./pages/news";
import Admin from "./pages/admin";
import Product from "./pages/product";
import Landing from "./pages/landing";
import Order from "./pages/order";
import Bag from "./pages/bag";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bagContext, totalBag } from "./Context";

import { useState, useMemo } from "react";

function App() {
  const [bagOrder, setBagOrder] = useState([]);

  const value = useMemo(() => ({ bagOrder, setBagOrder }), [
    bagOrder,
    setBagOrder,
  ]);

  const [total, setTotal] = useState(0);

  const valueTotal = useMemo(() => ({ total, setTotal }), [total, setTotal]);

  return (
    <totalBag.Provider value={valueTotal}>
      <bagContext.Provider value={value}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/e-shop">
              <Shop />
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

            <Route path="/bag">
              <Bag />
            </Route>

            <Route path="/product/:id">
              <Product />
            </Route>

            <Route path="/landing">
              <Landing />
            </Route>

            <Route path="/checkout">
              <Order />
            </Route>
          </Switch>
        </Router>
      </bagContext.Provider>
    </totalBag.Provider>
  );
}
export default App;
