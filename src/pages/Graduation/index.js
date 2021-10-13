import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';

const Graduation = () => {
  const { graduationList, removeFromGraduationList } =
    useContext(GraduationContext);

  return (
    <Grid container justifyContent="center">
      {graduationList.map((beer) => (
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
                <Button
                  variant="outlined" 
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    removeFromGraduationList(beer);
                  }}
                >
                  Remover da Lista
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

export default Graduation;
