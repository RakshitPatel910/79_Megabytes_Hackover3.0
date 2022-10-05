import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import Form from './Form/Form.js';
import Event from './Event/Event';

import useStyles from './styles';

function OrganizerHome() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        // dispatch(getPosts());
    }, [currentId]);


    return (
        <Grow in>
            <Container sx={{ width: '95%' }}>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={5}> 
                    <Grid item xs={12} sm={7}>
                        <Event   />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form currentId={currentId}  setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
  )
}

export default OrganizerHome