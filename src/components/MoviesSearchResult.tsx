import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  movie: {
    title: string;
    poster_path: string;
    release_date: string;
  };
}

export const MovieSearchResult = (props: Props) => {
  return (
    <Card sx={{ display: "flex", height: 180, m: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.movie.title.substring(0, 25)}
          </Typography>
          <Typography color="text.secondary" component="div">
            {props.movie.release_date.split("-")[0]}
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
            <Button variant="contained">Add to WatchList</Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};
