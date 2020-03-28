import React, { useEffect, useState } from "react";
import Dashboard from "../Pages/dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../Pages/about";
import Oops from "../Pages/oops";
import Home from "../Pages/home";
import { RouteKeys } from "./RoutePaths";
import FAQPage from "../Pages/FAQPage";
import { makeStyles, withStyles, LinearProgress } from "@material-ui/core";
import SignIn from "../Pages/signIn";
import { State } from "../store/interfaces";
import { AppInterface } from "../store/reducer/App/interfaces";
import { useSelector, useDispatch } from "react-redux";
import Media from "../Pages/mediaManager";
import SignUp from "../Pages/signUp";
import { changeLoading } from "../store/reducer/App/actions";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    root: {
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1)
    }
}));

const ColourLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: "#ab3040"
    },
    barColorPrimary: {
        backgroundColor: "#f5878a"
    }
})(LinearProgress);

export const Routes = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const App: AppInterface = useSelector((state: State) => state.App);
    const [authState, setAuthState] = useState(false);
    useEffect(() => {
        setAuthState(App.LoggedIn);
    }, [App.LoggedIn]);

    const load = () => {
        return new Promise(resolve => setTimeout(resolve, 200)) // 2 seconds
    }

    useEffect(() => {
        load().then(() => {
            // fade out
            setTimeout(() => {
                dispatch(changeLoading(false));
            }, 500)
        }).catch(() => {
            dispatch(changeLoading(false))
        })
    }, [App.Loading])

    if (!App.Loading) {
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
                                    <Route exact path={RouteKeys.SignIn}>
                                        <Redirect to={RouteKeys.Home} />
                                    </Route>
                                    <Route exact path={RouteKeys.SignUp}>
                                        <Redirect to={RouteKeys.Home} />
                                    </Route>
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
                            <Route exact path={RouteKeys.Home}>
                                <Redirect to={RouteKeys.SignIn} />
                            </Route>
                            <Route exact path='/'>
                                <Redirect to={RouteKeys.Home} />
                            </Route>
                            <Route
                                exact
                                path={RouteKeys.SignUp}
                                component={SignUp}
                            />
                            <Route component={SignIn} />
                        </Switch>
                    </>
                );
        }
    } else {
        return (
            <div className={classes.root}>
                <ColourLinearProgress className={classes.margin} />
            </div>
        )
    }
};
