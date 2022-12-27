import Paper from "@mui/material/Paper";
import React, { ChangeEvent, useEffect, useState } from "react";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMoviesMutation } from "../services/movieApi";
import { QueryResponse } from "../types/query-response.type";
import { MovieSearchResult } from "../components/MoviesSearchResult";

export const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [getMovies, { data: movies }] = useGetMoviesMutation();

  useEffect(() => {
    if (query) {
      fetchMovie();
    }
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "570",
        alignContent: "center",
        marginTop: "50px",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 540,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Your Movie"
          value={query}
          onChange={handleSearch}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className="results">
        {movies?.results?.length > 0 &&
          //@todo change type
          movies.results.map((movie: any) => (
            <MovieSearchResult key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};
