import { Redirect, Route, Switch } from "react-router";
import LoginPageComp from "./Pages/LoginPage/page/LoginPageComp";
import FeedsPageComp from "./Pages/FeedsPage/page/FeedsPageComp";
import { useSelector } from "react-redux";
import "./App.css";

function App(props) {
    
    let auth = useSelector((state=>state.auth.isAuth))
    let route;
    console.log("App auth variable:",auth)
    // auth=true;

    route = auth ? (
        <>
            <Route path="/feeds">
                <FeedsPageComp />
            </Route>
            <Redirect to="/feeds"/>
         </>
    ) : (
            <Route path="/">
                <LoginPageComp />
            </Route>

    );
    return (
        <div className="App">
            <Switch>
                {route}
            </Switch>
        </div>
    );
}

export default App;
