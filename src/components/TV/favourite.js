import React from 'react'
import './favourite.css'
import { Link } from "react-router-dom";

export default class favourite extends React.Component {
    constructor(props) {
        super(props)
        let list = localStorage.getItem('favourites')
        list = list && JSON.parse(list)
        console.log(list)

        this.state = {
            tv: list
        }
    }
    render() {
        let { tv } = this.state
        if (!tv) {
            tv = []
        }
        return <div className="container watch-list">
            <ul className="movies-watch">
                {
                    tv.map(item => <li className="item" key={item.id}>
                        <Link to={`/tv/details/${item.id}`}>

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