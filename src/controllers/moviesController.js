import movies from '../models/TopMovie.js';

class MovieController{

    static viewMovies = (req, res) => {
        movies.find((err, movies) => {
            res.status(200).json(movies)
        })
    }

    static viewMoviesById = (req, res) => {
        const id = req.params.id

        movies.findById(id, (err, movies) => {
            if (!err) {
                res.status(200).send(movies)
            }
            else res.status(500).send({message: err.message})
        })
    }

    static addMovies = (req, res) => {
        let movie = new movies(req.body)
        movie.save((err) => {
            if (err) {
                res.status(500).json({message: `${err.message} - failed to add movie`})
            }
            else res.status(201).json(movie.toJSON())
        })
    }
    
    static updateMovie = (req, res) => {
        const id = req.params.id

        movies.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err){
                res.status(200).send({message: 'Movie updated sucessfully!'})
            }
            else res.status(500).send({message: err.message})
        })
    }

    static deleteMovie = (req, res) => {
        const id = req.params.id

        movies.findByIdAndDelete(id, (err) =>{
            if (!err){
                res.status(200).send({message:'Movie deleted sucessfully!'})
            }
            else res.status(500).send({message: err.message})
        })
    }
}

export default MovieController;