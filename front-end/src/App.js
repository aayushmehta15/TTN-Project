import { Redirect, Route, Switch } from "react-router";
import LoginPageComp from "./Pages/LoginPage/page/LoginPageComp";
import FeedsPageComp from "./Pages/FeedsPage/page/FeedsPageComp";
import { useSelector } from "react-redux";
import "./App.css";
import ProfileEditPage from "./Pages/ProfileEditPage/ProfileEditPage";

function App(props) {
    let checkAuth = useSelector(state => state.auth.isAuth);
    let route;
    // console.log("App auth variable:", auth);
    // // auth=true;

    route = checkAuth ? (
        <>
            <Route path="/feeds">
                <FeedsPageComp />
            </Route>
            {/* <Route path="/edit/profile" exact>
                <ProfileEditPage />
            </Route> */}
            <Redirect to="/feeds" />
        </>
    ) : (
        <Route path="/">
            <LoginPageComp />
        </Route>
    );
    return (
        <div className="App">
            <Switch>{route}</Switch>
        </div>
    );
}

export default App;
