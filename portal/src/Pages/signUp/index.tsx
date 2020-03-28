import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import {
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    Button,
    Paper,
    Typography,
    IconButton
} from '@material-ui/core';
import { Login } from '../../store/reducer/App/actions';
import { useDispatch } from 'react-redux';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { NavLink } from 'react-router-dom';
import { RouteKeys } from '../../Router/RoutePaths';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200
        }
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        height: '500px',
        alignItems: 'center',
        color: '#ab3040'
    },
    input: {
        padding: '30px',
        backgroundColor: 'white'
    },
    createUser: {
        paddingLeft: '30px',
        backgroundColor: 'white'
    },
    LoginBox: {
        padding: '10%',
        backgroundColor: '#ab3040'
    },
    link: {
        color: 'black'
    }
}));

const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisable, setPasswordVisable] = useState(false);

    const onLogin = () => {
        dispatch(Login(true));
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };
    return (
        <div className={classes.content}>
            <Typography variant='h5' color='inherit'>
                Create User
            </Typography>
            <div className={classes.content}>
                <Paper variant='outlined' square={false}>
                    <div className={classes.LoginBox}>
                        <form
                            className={classes.root}
                            noValidate
                            autoComplete='off'
                        >
                            <div className={classes.input}>
                                <FormControl>
                                    <InputLabel htmlFor='input-with-icon-adornment'>
                                        UserName
                                    </InputLabel>
                                    <Input
                                        id='input-with-icon-adornment'
                                        value={userName}
                                        startAdornment={
                                            <InputAdornment position='start'>
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        onChange={event =>
                                            setUserName(event.target.value)
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className={classes.input}>
                                <FormControl>
                                    <InputLabel htmlFor='input-with-icon-adornment'>
                                        Password
                                    </InputLabel>
                                    <Input
                                        required={true}
                                        value={password}
                                        type={
                                            passwordVisable
                                                ? 'text'
                                                : 'password'
                                        }
                                        id='input-with-icon-adornment'
                                        startAdornment={
                                            <InputAdornment position='start'>
                                                <LockIcon />
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={() =>
                                                        setPasswordVisable(
                                                            !passwordVisable
                                                        )
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                >
                                                    {passwordVisable ? (
                                                        <Visibility />
                                                    ) : (
                                                            <VisibilityOff />
                                                        )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        onChange={event =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className={classes.createUser}>
                                <NavLink
                                    to={RouteKeys.SignIn}
                                    className={classes.link}
                                >
                                    <Button variant='contained' color='default'>
                                        Back to sign in
                                    </Button>
                                </NavLink>
                            </div>
                            <div className={classes.input}>
                                <Button
                                    variant='contained'
                                    color='default'
                                    endIcon={<LockIcon />}
                                    onClick={onLogin}
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                    </div>
                </Paper>
            </div>
        </div>
    );
};
export default SignUp;
