import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        maxWidth: 345,
        // paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(360deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ProductCard({title, price, salePrice}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <React.Fragment>
                        {salePrice && <Avatar aria-label="recipe" className={classes.avatar}>
                            %
                        </Avatar>}
                    </React.Fragment>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon/>
                //     </IconButton>
                // }
                title={title}
                // subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                component={'img'}
                image="/logo512.png"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    {price}
                </Typography>
                {salePrice && <Typography variant="body1" color="textPrimary" component="p">
                    {salePrice}
                </Typography>}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <IconButton
                    aria-label="add to cart"
                    onClick={handleExpandClick}
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}>
                    <AddShoppingCartIcon/>
                </IconButton>
                <Button
                    aria-label="Buy now"
                >
                    Buy now
                </Button>
            </CardActions>
        </Card>
    );
}
