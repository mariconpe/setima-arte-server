import express from "express";
import MovieController from "../controllers/moviesController.js";

const movies = express.Router();

movies
    .get("/movies", MovieController.viewMovies)
    .get("/movies/:id", MovieController.viewMoviesById)
    .post("/movies", MovieController.addMovies)
    .put("/movies/:id", MovieController.updateMovie)
    .delete("/movies/:id", MovieController.deleteMovie)

export default movies;