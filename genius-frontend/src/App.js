import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/e-shop";
import Lookbook from "./pages/lookbook";
import News from "./pages/news";
import Navbar from "./components/Navbar"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
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
      </Switch>
    </Router>
  );
}
export default App;