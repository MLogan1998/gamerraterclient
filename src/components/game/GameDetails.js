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
            <div className="main_container">
                <article className="game">
                    <div className="detail_container">
                        <h4 className="header">Title</h4>
                        <p className="detail">{game.title}</p>
                    </div>
                    <div className="detail_container">
                        <h4 className="header">Game Designer</h4>
                        <p className="detail">{game.designer}</p>
                    </div>
                    <div className="detail_container">
                        <h4 className="header">Year Released</h4>
                        <p className="detail">{game.year_released}</p>
                    </div>
                    <div className="detail_container">
                        <h4 className="header">Number of Players</h4>
                        <p className="detail">{game.number_of_players}</p>
                    </div>
                    <div className="detail_container">
                        <h4 className="header">Time to Play</h4>
                        <p className="detail">{game.time_to_play} hours</p>
                    </div>
                    <div className="detail_container">
                        <h4 className="header">Reccomended Age</h4>
                        <p className="detail">{game.age}</p>
                    </div>
                    <div className="detail_container">
                        <h4 className="header">Categories</h4>
                        <div className="cat-detail">    
                        {
                            game.categories && game.categories.map(category => {
                                return <p className="detail-cat-name">{category.name}</p>
                            })
                        }
                        </div>
                    </div>
                </article>
                <div className="review_container">
                    <h4 className="header">Reviews</h4>
                    <div className="review-detail">
                    {
                        game.reviews && game.reviews.map(review => {
                            return <p className="detail-review">"{review.review}"</p>
                        })
                    }
                    </div>
                </div>
                <div className="image_container">
                    <h4 className="header">Action Shots</h4>
                    <div className="review-detail">
                    {
                        game.pictures && game.pictures.map(picture => {
                            return <img src={picture.action_pic}></img>
                        })
                    }
                    </div>
                </div>
                <div className="control-panel">
                    <button className="btn btn-2 btn-sep icon-create" onClick={() => {props.history.push({ pathname: `create-review/${game.id}` })}}>Review Game</button>
                    <button className="btn btn-2 btn-sep icon-create" onClick={() => {props.history.push({ pathname: `upload-image/${game.id}` })}}>Upload Image</button>
                </div>
            </div>
    )
}
