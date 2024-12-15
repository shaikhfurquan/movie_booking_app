import express from 'express';
import { isAuthUser , isAuthAdmin } from '../middlewares/isAuth.middleware.js';
import { addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../controllers/movie.controller.js';

const movieRouter = express.Router();


movieRouter.post('/add' , isAuthAdmin , addMovie)
movieRouter.get('/movies' , getAllMovies)
movieRouter.get('/movies/:movieId' , getMovieById)
movieRouter.put('/update/:movieId',isAuthAdmin , updateMovie)
movieRouter.delete('/delete/:movieId', isAuthAdmin , deleteMovie)

export default movieRouter
