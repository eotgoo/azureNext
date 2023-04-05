import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Movie() {
  const [filteredMovie, setFilteredMovie] = useState([]);
  const getMovies = async () => {
    try {
      const result = await axios.get("http://localhost:8000/movies");
      console.log("movies:", result.data.movies);
      setFilteredMovie(result.data.movies);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  useEffect(() => {
    console.log("-----");
    getMovies();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredMovie?.map((x, index) => {
          const { poster, title, plot, type } = x;
          return (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 300,
                  height: 400,
                  marginTop: "50px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={poster}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {plot}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography color="primary">type: {type}</Typography>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
