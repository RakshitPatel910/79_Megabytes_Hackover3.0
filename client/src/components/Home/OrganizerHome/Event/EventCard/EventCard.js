import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from '../styles';

function EventCard({ event, setCurrentId }) {
    
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {/* <CardMedia className={classes.media} image={event.image} title={event.eventName} /> */}
            {/* <div className={classes.overlay}>
                <Typography variant="h6">{event.creator}</Typography>
                <Typography variant="body2">{moment(event.createdAt).fromNow()}</Typography>
            </div> */}
            <img className={classes.media} src={event.image} alt={event.eventName} />
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => setCurrentId(event.eventName)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            {/* <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{event.tags.map((tag) => `#${tag} `)}</Typography>
            </div> */}
            <Typography className={classes.title} variant="h5" gutterBottom>{event.eventName}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{event.location}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}} >
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {event.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}} >
                    <DeleteIcon fontSize="small" />
                    &nbsp; Delete
                </Button>
            </CardActions>

        </Card>
  )
}

export default EventCard