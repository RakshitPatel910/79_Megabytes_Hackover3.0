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
    //     
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
        const id = `${user._id}`;
        console.log(typeof id);
        console.log(JSON.stringify(user._id))
        const data = await axios.post("http://localhost:3010/events", {organizerId: id});
        console.log(data)
        // if (data.data.status == true) {
          //    console.log("status is true");

          // navigate("/");
          setEvents(data.data.event);
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