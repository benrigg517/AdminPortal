import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import { NavLink } from "react-router-dom";
import { RouteKeys } from "../../Router/RoutePaths";
import { Button } from "@material-ui/core";
import { Login } from "../../store/reducer/App/actions";
import LockIcon from "@material-ui/icons/Lock";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#ab3040"
    },
    Bar: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyItems: "space-between"
    },
    button: {
        position: "fixed",
        top: "1%",
        right: "1%"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "white"
    },
    toolbar: theme.mixins.toolbar,
    link: {
        color: "black"
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(Login(false));
    };
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.Bar}>
                    <div>
                        <Typography variant="h6" noWrap>
                            Admin Portal
                        </Typography>
                    </div>
                    <div className={classes.button}>
                        <Button
                            variant="contained"
                            color="default"
                            endIcon={<LockIcon />}
                            onClick={onLogout}
                        >
                            Logout
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <List>
                    <NavLink to={RouteKeys.Home} className={classes.link}>
                        <ListItem button key={"Home"}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                    </NavLink>
                    <NavLink to={RouteKeys.About} className={classes.link}>
                        <ListItem button key={"About"}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                    </NavLink>
                    <NavLink to={RouteKeys.FAQPage} className={classes.link}>
                        <ListItem button key={"FAQ"}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"FAQ"} />
                        </ListItem>
                    </NavLink>
                    <NavLink to={RouteKeys.Media} className={classes.link}>
                        <ListItem button key={"Media Manager"}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Media Manager"} />
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
        </div>
    );
};

export default Dashboard;
