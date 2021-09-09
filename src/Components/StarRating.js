import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';

const StarRating = (stars) => {
 

    console.log("stars",stars); 
    return(

        <>
            <Box component="fieldset" berderColor="transparent">
                <Rating name="read-only"  value={stars}/>
            </Box>
        </>
    )
}

export default StarRating;