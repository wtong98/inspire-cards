/**
 * Defines a simple card with an inspirational / creativity-generating message.
 *
 * author: William Tong (williamtong105@gmail.com)
 * date: 8/29/2019
 */

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
    }
}));

/**
 * Props:
 *  text: text to be displayed
 */
export default function Card(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h3"> {props.text} </Typography>
        </Paper>
    );
}
