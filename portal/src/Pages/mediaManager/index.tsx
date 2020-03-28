import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MediaViewer from '../../Components/mediaViewer';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    input: {
        display: 'none'
    }
}));

const Media = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <input
                    accept='image/*'
                    className={classes.input}
                    id='contained-button-file'
                    multiple
                    type='file'
                />
                <label htmlFor='contained-button-file'>
                    <Button variant='contained' color='primary' component='span'>
                        Upload
                </Button>
                </label>
            </div>
            <div className={classes.root}>
                <MediaViewer />
            </div>
        </div>
    );
};

export default Media;
