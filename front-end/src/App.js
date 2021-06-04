import { Route, Switch } from "react-router";
import "./App.css";
import LoginPageComp from "./containers/LoginPageComp/LoginPageComp";
import ProfilePageComp from "./containers/ProfilePageComp/ProfilePageComp";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route to="/" exact component={LoginPageComp} />
                <Route to="/profile" component={ProfilePageComp} />
            </Switch>
        </div>
    );
}

export default App;
