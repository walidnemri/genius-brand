import Landing from "./pages/landing";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/e-shop";
import Lookbook from "./pages/lookbook";
import News from "./pages/news";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/lookbook">
          <Lookbook />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
