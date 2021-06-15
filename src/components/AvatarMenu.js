import React, {useRef, useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import IconButton from "@material-ui/core/IconButton";
import {LoginDialog} from "./LoginDialog";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginLeft: 10,
        marginRight: 10
    },
    name: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

export default function AvatarMenu() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [openLogin, setOpenLogin] = useState(false)
    const profile = useSelector(state => state.auth?.profile?.data || {})

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleLoginToggle = (event) => {
        event.preventDefault()
        setOpenLogin(true)
        handleClose(event)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            {openLogin && <LoginDialog open={openLogin} setOpen={setOpenLogin}/>}
            {profile.isActive && <div className={classes.name}>{profile.name}</div>}
            <IconButton
                ref={anchorRef}
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggle}
            >
                <PermIdentityIcon/>
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My Cart</MenuItem>
                                    {!profile.isActive && <MenuItem onClick={handleLoginToggle}>Login</MenuItem>}
                                    {profile.isActive && <MenuItem onClick={handleClose}>Logout</MenuItem>}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
