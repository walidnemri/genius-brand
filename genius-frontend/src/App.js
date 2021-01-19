<<<<<<< HEAD
import react from "react";
import Landing from "./pages/landing";

class App extends react.Component {
  render() {
    return (
      <>
        <Landing />
      </>
    );
  }
=======
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/e-shop/E-shop";
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
>>>>>>> dab091d8475a732d99383bc3799f6b6d8f34096b
}
export default App;