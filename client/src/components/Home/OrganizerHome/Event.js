import React, { useState } from 'react';

import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import EventCard from './EventCard/EventCard';

function Event() {

    const classes = useStyles();

    const [events, setEvents] = useState([{
        organizerId: '1234',
        eventName: 'Concert',
        location: 'Mumbai',
        date: Date,
        seat: 50,
        availSeat: 0,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevent%2F&psig=AOvVaw0rQrRTt4dOhzZQvnhAuCeB&ust=1664996909379000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjngPyix_oCFQAAAAAdAAAAABAJ',
        price: 1000,
        approved: true
    }]);

    return (
        !events.length ? <CircularProgress color="secondary" /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {events.map((event) => (
                    <Grid key={event.organizerId} item xs={12} sm={6}>
                        <EventCard event={event} setCurrentId={events.organizerId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Event