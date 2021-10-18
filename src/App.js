import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import SignIn from "./pages/Login/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
