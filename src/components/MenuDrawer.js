import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {MenuItemAccordion} from "./MenuItemAccordion";

const useStyles = makeStyles({
    list: {
        width: 'auto',
    },
    itemText: {
        paddingRight: 20
    }
});

export const MenuDrawer = ({menuList, open, toggle}) => {
    const classes = useStyles();

    return (
        <div>
            <Drawer anchor={'left'} open={open} onClose={toggle}>
                <div className={classes.list}>
                    <List>
                        {menuList && menuList.map(item =>
                            <MenuItemAccordion key={item.name} menuItem={item}/>)}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}




