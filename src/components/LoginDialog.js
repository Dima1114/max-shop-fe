import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Grid, TextField} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import {makeStyles} from "@material-ui/core/styles";
import {api} from "../api";
import {getUserInfo} from "../actions/authActions";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: 'unset'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const LoginDialog = ({open, setOpen}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const formData = new FormData();
        formData.append('username', username)
        formData.append('password', password)
        api.post("login", formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                dispatch(getUserInfo())
                console.log(response);
                // setOpen(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
        >
            <DialogTitle>{"Login"}</DialogTitle>
            <DialogContent className={classes.root}>
                <form noValidate autoComplete="off">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>
                            <AccountCircleIcon/>
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                fullWidth
                                label="username"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>
                            <LockIcon/>
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                fullWidth
                                label="password"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLogin} color="primary">
                    Login
                </Button>
                <Button onClick={handleClose} color="primary">
                    Registration
                </Button>
            </DialogActions>
        </Dialog>
    );
}

