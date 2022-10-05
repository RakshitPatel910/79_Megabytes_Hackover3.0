import React, { useState,useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';

import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import EventCard from './EventCard/EventCard';
import axios from 'axios';

function Event() {

    const classes = useStyles();

    const navigete = useNavigate();
    

    //  const handleSubmit = async () => {
    //    // event.preventDefault();
    //    // const data = new FormData(event.currentTarget);
    //    // console.log({
    //    // email: data.get('email'),
    //    // password: data.get('password'),
    //    // });

    
    //      console.log("customer");
    //      const data = await axios.get("http://localhost:3010/getAllEvent");
    //         console.log(data)
    //      if (data.data.status == true) {
    //     //    console.log("status is true");

    //        // navigate("/");
    //        setEvents(data.data)
    //        // setUser({ userId: data.profile._id, type: 10 })
    //      } else {
    //        alert("Email or Password is incorrect");
    //      }
       

       
    //  };

    const [events, setEvents] = useState([
    //     {
    //     // organizerId: '1234',
    //     // eventName: 'Concert',
    //     // location: 'Mumbai',
    //     // date: Date,
    //     // seat: 50,
    //     // availSeat: 0,
    //     // image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevent%2F&psig=AOvVaw0rQrRTt4dOhzZQvnhAuCeB&ust=1664996909379000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjngPyix_oCFQAAAAAdAAAAABAJ',
    //     // price: 1000,
    //     // approved: true
    // },
    // {
    //     // organizerId: '',
    //     // eventName: 'MusicalConcert',
    //     // location: 'NewYork',
    //     // seat: 1000,
    //     // availSeat: 0,
    //     // image: 'data:image/png;base64,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',
    //     // price: 2000,
    //     // approved: false
    //   }
    
    ]);

    useEffect(() => {
      const handleSubmit = async () => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        // email: data.get('email'),
        // password: data.get('password'),
        // });
        const user = JSON.parse(localStorage.getItem('profile'));
        console.log(user._id);
        const data = await axios.post("http://localhost:3010/events", {organizerId: JSON.stringify(user._id)});
        // console.log(data);
        console.log(data)
        // if (data.data.status == true) {
          //    console.log("status is true");

          // navigate("/");
          // setEvents(data.data.event);
          // setUser({ userId: data.profile._id, type: 10 })
        // } else {
        //   alert("Email or Password is incorrect");
        // }
      };

      handleSubmit();
    }, []);

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