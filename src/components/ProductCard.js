import React, {useEffect} from 'react';
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
import {blueGrey, red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Button, CircularProgress} from "@material-ui/core";
import {getImage} from "../actions/imageActions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: 345,
        backgroundColor: blueGrey[50]
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

export default function ProductCard({product}) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState(false);
    const thumbnail = useSelector(state => state.image[product.thumbnailId] || {})

    useEffect(() => {
            if (product.thumbnailId) {
                dispatch(getImage("thumbnails", product.thumbnailId, {}))
            }
        },
        [dispatch, product.thumbnailId])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getPrice = () => {
        let priceString = (product.cost / 100) + ''
        if (!priceString.includes('.')) {
            priceString += '.00'
        }
        return priceString
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <React.Fragment>
                        {product.salePrice && <Avatar aria-label="recipe" className={classes.avatar}>
                            %
                        </Avatar>}
                    </React.Fragment>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon/>
                //     </IconButton>
                // }
                title={<Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>}
                // subheader="September 14, 2016"
            />
            {thumbnail && thumbnail.loading === false ? <CardMedia
                className={classes.media}
                component={'img'}
                src={thumbnail.data || "/logo512.png"}
                title="Paella dish"
            /> : <CircularProgress/>}
            <CardContent>
                <Typography variant="h5" color="textPrimary" component="h2">
                    {getPrice()}
                </Typography>
                {product.salePrice && <Typography variant="h5" color="textPrimary" component="h2">
                    {product.salePrice}
                </Typography>}
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
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
