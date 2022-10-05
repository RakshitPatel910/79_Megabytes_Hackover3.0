import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';

import useStyles from './styles';
// import { createPost, updatePost } from '../../actions/posts';

function Form({  }) {

    const [date, setDate] = useState(null);

    
    const [eventData, setEventData] = useState({
        organizerId: JSON.parse(localStorage.getItem('profile')),
    eventName: '',
    location: '',
    date: Date,
    seat: 0,
    availSeat: 0,
    image: '',
    price: 0,
    approved: false
    });
    // const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();

    useEffect(() => {
        // if(post) setPostData(post);
    }, [])
    

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const user = JSON.parse(localStorage.getItem('profile'));
        // console.log(postData);
        // console.log(user._id, 'hii')
        setEventData({ ...eventData, organizerId: user._id})
        // if(currentId) {
        //     // dispatch(updatePost(currentId, postData));
        // } else {
        //     // console.log('1')
        //     // dispatch(createPost(postData));
        // }

        const data = await axios.post('http://localhost:3010/addEvent',{
            organizerId: eventData.organizerId,
            eventName: eventData.eventName,
            location: eventData.location,
            date: eventData.date,
            seat: eventData.seat,
            availSeat: eventData.availSeat,
            image: eventData.image,
            price: eventData.price,
            approved: false
        })

        if(data.data.status == true){
            console.log("Event Scheduled!!!")
        } 

        clear();
    }

    const clear = () => {
        // setCurrentId(null);
        setEventData({organizerId: JSON.parse(localStorage.getItem('profile')),
        eventName: '',
        location: '',
        date: '',
        seat: 0,
        availSeat: 0,
        image: '',
        price: 0,
        approved: false });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                {/* <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Memory</Typography> */}
                <TextField name="eventName" variant="outlined" label="EventName" fullWidth value={eventData.eventName} onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })}></TextField>
                <TextField name="location" variant="outlined" label="Location" fullWidth value={eventData.location} onChange={(e) => setEventData({ ...eventData, location: e.target.value })}></TextField>
                <TextField name="seat" variant="outlined" label="Seat" fullWidth value={eventData.seat} onChange={(e) => setEventData({ ...eventData, seat: e.target.value })}></TextField>
                <TextField name="price" variant="outlined" label="Price" fullWidth value={eventData.price} onChange={(e) => setEventData({ ...eventData, price: e.target.value })}></TextField>
                {/* <TextField name="tags" variant="outlined" label="Tags" fullWidth value={eventData.tags} onChange={(e) => setEventData({ ...eventData, tags: e.target.value.split(',') })}></TextField> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date of Event"
                        value={date}
                        onChange={(newDate) => {
                        setDate(newDate);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, image: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" size="medium" color="secondary" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form