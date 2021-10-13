import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

/** import providers */
import { GraduationContext } from "../../providers/graduation";
import { WeddingContext } from "../../providers/wedding";
import { ConfraternizationContext } from "../../providers/confraternization";

const ProductList = () => {
  const [beers, setBeers] = useState([]);

  const { addToGraduationList } = useContext(GraduationContext);
  const { addToWeddingList } = useContext(WeddingContext);
  const { addToConfraternizationList } = useContext(
    ConfraternizationContext
  );

  const getListOfBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers?per_page=80")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("Error", error.message);
        }
      });
  };

  useEffect(() => {
    getListOfBeers();
  }, []);

  const history = useHistory();

  return (
    <Grid container justifyContent="center">
      {beers.map((beer) => (
        <Box key={beer.id} sx={{ width: 370 }}>
          <Grid item display="flex" mt={1}>
            <Card
              sx={{
                backgroundColor: "rgb(204 149 192 / 0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 715,
                width: 370,
                ml: 1,
              }}
            >
              <CardHeader
                disableTypography
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#ff2525",
                      fontWeight: 600,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {beer.name.substr(0, 1)}
                  </Avatar>
                }
                title={
                  <Typography sx={{ fontSize: 25 }}>{beer.name}</Typography>
                }
                subheader={
                  <Typography
                    fontSize={13}
                  >{`Since ${beer.first_brewed}`}</Typography>
                }
              />
              <Box sx={{ width: 67 }}>
                <CardMedia
                  component="img"
                  image={beer.image_url}
                  alt={beer.name}
                  sx={{ ml: 15 }}
                />
              </Box>
              <CardContent>
                <Typography color="blueviolet" variant="h6">
                  Brief description
                </Typography>

                <Typography sx={{ fontSize: 12 }}>
                  {beer.description}
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup size="small" variant="text">
                  <Button
                    onClick={() => {
                      addToGraduationList(beer);
                      history.push("/graduation");
                    }}
                  >
                    Formatura
                  </Button>
                  <Button
                    onClick={() => {
                      addToWeddingList(beer);
                      history.push("/wedding");
                    }}
                  >
                    Casamento
                  </Button>
                  <Button
                    onClick={() => {
                      addToConfraternizationList(beer);
                      history.push("/confraternization");
                    }}
                  >
                    Confraternização
                  </Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;
