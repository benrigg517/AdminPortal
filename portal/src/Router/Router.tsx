import React, { useEffect, useState } from "react";
import Dashboard from "../Pages/dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../Pages/about";
import Oops from "../Pages/oops";
import Home from "../Pages/home";
import { RouteKeys } from "./RoutePaths";
import FAQPage from "../Pages/FAQPage";
import { makeStyles } from "@material-ui/core";
import SignIn from "../Pages/signIn";
import { State } from "../store/interfaces";
import { AppInterface } from "../store/reducer/App/interfaces";
import { useSelector } from "react-redux";
import Media from "../Pages/mediaManager";
import SignUp from "../Pages/signUp";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}));

export const Routes = () => {
    const classes = useStyles();
    const App: AppInterface = useSelector((state: State) => state.App);
    const [authState, setAuthState] = useState(false);
    useEffect(() => {
        setAuthState(App.LoggedIn);
    }, [App.LoggedIn]);

    switch (authState) {
        case true:
            return (
                <div style={{ display: "flex" }}>
                    <>
                        <Dashboard />
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Switch>
                                <Route
                                    exact
                                    path={RouteKeys.Home}
                                    component={Home}
                                />
                                <Route exact path='/'>
                                    <Redirect to={RouteKeys.Home} />
                                </Route>
                                <Route
                                    exact
                                    path={RouteKeys.About}
                                    component={About}
                                />
                                <Route
                                    exact
                                    path={RouteKeys.FAQPage}
                                    component={FAQPage}
                                />
                                <Route
                                    exact
                                    path={RouteKeys.Media}
                                    component={Media}
                                />
                                <Route component={Oops} />
                            </Switch>
                        </main>
                    </>
                </div>
            );
        case false:
            return (
                <>
                    <Switch>
                        <Route
                            exact
                            path={RouteKeys.SignIn}
                            component={SignIn}
                        />
                        <Route exact path='/'>
                            <Redirect to={RouteKeys.SignIn} />
                        </Route>
                        <Route
                            exact
                            path={RouteKeys.SignUp}
                            component={SignUp}
                        />
                    </Switch>
                </>
            );
    }
};
