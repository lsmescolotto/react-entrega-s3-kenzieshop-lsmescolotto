import { Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styles/global";
import Home from "./pages/home";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
