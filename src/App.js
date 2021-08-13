import {Amplify} from "aws-amplify";
import {withAuthenticator} from "@aws-amplify/ui-react";
import config from './aws-exports';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {GlobalProvider} from "./Context/GlobalState";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { WatchList } from "./components/WatchList";
import { Add } from "./components/Add";

Amplify.configure(config);

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <WatchList />
          </Route>
          <Route path={"/watched"}>
            <Watched />
          </Route>
          <Route path={"/add"}>
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default withAuthenticator(App);
