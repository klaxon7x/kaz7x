import React from 'react';
import { Grid, CardActionArea, CardMedia } from '@mui/material';
import Container from '@mui/material/Container';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import Carddata from './carddata2.json'

export const Cards2 = () => {
    return (
        <>
            <Container maxWidth="lg">

                <Grid container spacing={2} style={{ marginTop: "28px" }}>
                    {Carddata.map((result, index) => (

                        <Grid item xs={12} sm={4} ms={4} key={index}>

                            <Card component="li"
                                sx={{ minWidth: 300, flexGrow: 1 }}>
                                <CardCover >
                                    <img
                                        src={result.img}
                                        srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent >
                                    <Typography
                                        level="body-lg"
                                        fontWeight="lg"
                                        textColor="#fff"
                                        mt={{ xs: 12, sm: 18 }}
                                    >
                                        {result.title}

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {result.des}

                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* <Card sx={{ maxWidth: 345 }} style={{ border: "1px", padding: "10px", marginBottom: "30px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={result.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.des}

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card> */}


                        </Grid>


                    ))}
                </Grid>
            </Container>


        </>
    )
};

export default Cards2;
