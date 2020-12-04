import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"

import "./GameDetails.css"

export const GameDetails = (props) => {
    const { game, getGameById } = useContext(GameContext)

    useEffect(() => {
        const { gameId } = props.match.params
        getGameById(gameId)
    }, [])

    return (
        <article className="game">
            <h4 className="header">Title</h4>
            <p className="detail">{game.title}</p>
            <h4 className="header">Game Designer</h4>
            <p className="detail">{game.designer}</p>
            <h4 className="header">Year Released</h4>
            <p className="detail">{game.year_released}</p>
            <h4 className="header">Number of Players</h4>
            <p className="detail">{game.number_of_players}</p>
            <h4 className="header">Time to Play</h4>
            <p className="detail">{game.time_to_play} hours</p>
            <h4 className="header">Reccomended Age</h4>
            <p className="detail">{game.age}</p>
            <h4 className="header">Categories</h4>
            <div className="cat-detail">    
            {
                game.categories && game.categories.map(category => {
                    return <p className="detail-cat-name">{category.name}</p>
                })
            }
            </div>
            <h4 className="header">Reviews</h4>
            <div>
            {
                game.reviews && game.reviews.map(review => {
                    return <p className="detail-review">{review.review}</p>
                })
            }
            </div>

        </article>
    )
}
