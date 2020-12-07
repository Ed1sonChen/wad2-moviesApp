import React from 'react'
import './WatchList.css'
import { Link } from "react-router-dom";

export default class WatchList extends React.Component {
    constructor(props) {
        super(props)
        let list = localStorage.getItem('likes')
        list = list && JSON.parse(list)
        console.log(list)

        this.state = {
            movies: list
        }
    }
    render() {
        let { movies } = this.state
        if (!movies) {
            movies = []
        }
        return <div className="container watch-list">
            <ul className="movies-watch">
                {
                    movies.map(item => <li className="item" key={item.id}>
                        <Link to={`/movies/details/${item.id}`}>

                            <img className="carousel-img" src={item.coverImg} alt={item.name} />
                            <p className="movie-name">{item.name}</p>
                            {
                                item.tags && item.tags.length > 0 && <p className="genre_name">{item.tags[0].name}</p>
                            }

                            <p className="rating">
                                <svg className="rating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path>
                                </svg>{item.score}</p>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    }
}