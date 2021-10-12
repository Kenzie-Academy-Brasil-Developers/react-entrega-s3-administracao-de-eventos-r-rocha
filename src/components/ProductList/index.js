import axios from "axios";
import { useState, useEffect } from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@material-ui/core";

const ProductList = () => {
    const [beers, setBeers] = useState([]);

    const getListOfBeers = () => {
        axios
            .get("https://api.punkapi.com/v2/beers?per_page=80")
            .then((response) => {
                console.log(response.data);
                setBeers(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    alert(error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert("Error", error.message);
                }
            });
    };

    useEffect(() => {
        getListOfBeers();
    }, []);

    return (
        <Grid container justifyContent="center">
            {beers.map((beer) => (
                <Box key={beer.id} sx={{ width: 370 }}>
                    <Grid item display="flex" mt={2}>
                        <Card sx={{ backgroundColor: "rgb(204 149 192 / 0.3)", display: "flex", flexDirection: "column", justifyContent: "space-between", height: 675, width: 365 }}>
                            <CardHeader
                                disableTypography
                                avatar={
                                    <Avatar sx={{ bgcolor: "blueviolet", fontWeight: 600, width: 56, height: 56 }}>
                                        {beer.name.substr(0, 1)}
                                    </Avatar>
                                }
                                title={
                                    <Typography
                                        sx={{ fontSize: 27 }}
                                    >
                                        {beer.name}
                                    </Typography>
                                }
                                subheader={
                                    <Typography fontSize={13}>
                                        {beer.tagline}
                                    </Typography>
                                }
                            />
                            <Box sx={{ width: 75 }}>
                                <CardMedia
                                    component="img"
                                    image={beer.image_url}
                                    alt={beer.name}
                                    sx={{ ml: 17 }}
                                />
                            </Box>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="blueviolet">
                                    {`Since ${beer.first_brewed}`}
                                </Typography>
                                <Typography variant="h6" color="blueviolet">
                                    Description:
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: 11 }}>
                                    {beer.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Box>
            ))}
        </Grid>
    );
};

export default ProductList;
