import React from 'react';
// import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


const FeaturedPet = () => {
    return <> 
    <Grid item xs={12} md={6}>
        <Card sx={{display: "flex"}}>
            <CardContent sx={{flex: 1}}>
                <Typography component="h2" variant='h5'>
                    Cooper
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Breed - Golden Retriever 
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Category - Dog
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Age - 2months
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Color - Golden
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    Cooper is a sweet little boy looking for his forever home.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    View deets...
                </Typography>
                
            </CardContent>
            <CardMedia component='img' sx={{
                width: 250
            }}
            image={"https://www.thesprucepets.com/thmb/F-6m45bLy1Ecu2p-egqup7BPVzI=/2124x0/filters:no_upscale():strip_icc()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg"}
            />

            
            

        </Card>

        </Grid> 
        </>;
}


export default FeaturedPet;
