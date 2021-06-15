import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {blueGrey} from "@material-ui/core/colors";
import {IconButton} from "@material-ui/core";
import {Instagram} from "@material-ui/icons";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: blueGrey[600],
        color: theme.palette.background.paper
    },
    footer: {
        backgroundColor: theme.palette.primary.dark,
        marginTop: theme.spacing(1),
    }
});

function Footer(props) {
    const {classes} = props;

    return (
        <footer className={classes.footer}>
            <div className={classes.root}>
                <Typography component="p">
                    @2021 All right reserved
                </Typography>
                <Typography component="h4">
                    MAX-Shop
                </Typography>
                <Typography>
                    <IconButton color={'inherit'}><FacebookIcon/></IconButton>
                    <IconButton color={'inherit'}><Instagram/></IconButton>
                    <IconButton color={'inherit'}><YouTubeIcon/></IconButton>
                </Typography>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
