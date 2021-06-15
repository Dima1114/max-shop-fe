import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import * as IconsList from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export const MenuItemAccordion = ({menuItem}) => {
    const classes = useStyles();

    const DynamicIcon = ({name}) => {
        const Icon = IconsList[name]
        return (
            <React.Fragment>
                {name && Icon && <Icon/>}
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <ListItem className={classes.heading} button key={menuItem.name}>
                        <ListItemIcon><DynamicIcon name={menuItem.thumbnail}/></ListItemIcon>
                        <ListItemText className={classes.itemText} primary={menuItem.name}/>
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {menuItem && menuItem.subCategories && menuItem.subCategories.map(item =>
                            <ListItem button key={item.name}>
                                <ListItemText primary={item.name}/>
                            </ListItem>)}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
