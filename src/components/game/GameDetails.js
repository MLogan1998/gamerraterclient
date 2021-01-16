import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"
import { FormControl, Radio, FormControlLabel, RadioGroup, FormLabel, Button } from '@material-ui/core';

import "./GameDetails.css"

export const GameDetails = (props) => {
    const { game, getGameById, createRating } = useContext(GameContext)
    const [ rating, setRating ]= useState(1)

    useEffect(() => {
        const { gameId } = props.match.params
        getGameById(gameId)
    }, [])
    
    const handleRating = (event) => setRating(event.target.value)

    const addRating = (event) =>{
        event.preventDefault();
        const gameId = props.match.params.gameId
        const userId = localStorage.getItem("user_id")

        const userRating = {
            rating: parseInt(rating),
            player: parseInt(userId),
            game: parseInt(gameId)
        }
        createRating(userRating)
    }

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
                    <div className="detail_container">
                        <h4 className="header">Average Rating</h4>
                        <p className="detail">{game.avg_rating}</p>
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
                <div className="rating-container">
                    <h4 className="header">Rate This Game:</h4>
                    <div className="radio-container">
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" row >
                                <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="6" control={<Radio />} label="6" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="7" control={<Radio />} label="7" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="8" control={<Radio />} label="8" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="9" control={<Radio />} label="9" labelPlacement="top" onChange={handleRating} />
                                <FormControlLabel value="10" control={<Radio />} label="10" labelPlacement="top" onChange={handleRating} />
                            </RadioGroup>
                            <Button variant="outlined" onClick={addRating}>Submit Your Rating</Button>
                        </FormControl>
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
