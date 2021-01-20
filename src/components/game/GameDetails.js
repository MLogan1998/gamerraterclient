import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"
import { FormControl, Radio, FormControlLabel, RadioGroup, FormLabel, Button, TextField } from '@material-ui/core';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import "./GameDetails.css"
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const GreyRadio = withStyles({
  root: {
    color: grey[200],
    '&$checked': {
      color: grey[400],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const GameDetails = (props) => {
    const { game, setGame, getGameById, createRating } = useContext(GameContext)
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
        createRating(userRating).then(setRating)
    }

    return (
            <div className="main_container">
                <article className="game">
                    <h1 className="list-h1 mb-4">{game.title}</h1>
                    <h5 className="list-h1">Specifications</h5>
                    <div className="card-container">
                        <Card>
                            <CardHeader className="card-style-h">Year Released</CardHeader>
                            <CardBody className="card-style-b">{game.year_released}</CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="card-style-h">Game Designer</CardHeader>
                            <CardBody className="card-style-b">{game.designer}</CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="card-style-h">Number of Players</CardHeader>
                            <CardBody className="card-style-b">{game.number_of_players}</CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="card-style-h">Time to Play</CardHeader>
                            <CardBody className="card-style-b">{game.time_to_play} Hours</CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="card-style-h">Reccomended Age</CardHeader>
                            <CardBody className="card-style-b">{game.age}</CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="card-style-h">Average Rating</CardHeader>
                            <CardBody className="card-style-b">{game.avg_rating}</CardBody>
                        </Card>
                    </div>
                    <div className="detail_container">
                        <h5 className="list-h1">Categories</h5>
                        <ListGroup horizontal>
                        {
                            game.categories && game.categories.map(category => {
                                return <ListGroupItem className="detail-cat-name">{category.name}</ListGroupItem>
                            })
                        }
                        </ListGroup> 
                    </div>
                    <div className="rating-container">
                    <h5 className="list-h1">Rate This Game</h5>
                        <div className="radio-container">
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1" color="secondary" row >
                                    <FormControlLabel className="radio-btn" value="1" control={<GreyRadio />} label="1" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="2" control={<GreyRadio />} label="2" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="3" control={<GreyRadio />} label="3" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="4" control={<GreyRadio />} label="4" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="5" control={<GreyRadio />} label="5" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="6" control={<GreyRadio />} label="6" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="7" control={<GreyRadio />} label="7" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="8" control={<GreyRadio />} label="8" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="9" control={<GreyRadio />} label="9" labelPlacement="top" onChange={handleRating} />
                                    <FormControlLabel className="radio-btn" value="10" control={<GreyRadio />} label="10" labelPlacement="top" onChange={handleRating} />
                                </RadioGroup>
                                
                            </FormControl>
                        </div>
                    <Button variant="contained" color="primary" onClick={addRating}>Submit Your Rating</Button>
                </div>
                <div className="review_container">
                    <h5 className="list-h1">Reviews</h5>
                    <div className="review-detail">
                    {
                        game.reviews && game.reviews.map(review => {
                            return <Card className="rev-card h-100">
                                        <CardBody className="rev-body card-style-h">
                                            {review.review}
                                        </CardBody>
                                        <CardFooter className="rev-footer card-style-b">
                                            {review.player.user.first_name} {review.player.user.last_name}
                                        </CardFooter>
                                   </Card>
                        })
                    }
                    </div>
                    <Button className="mt-1" variant="contained" color="primary" onClick={() => {props.history.push({ pathname: `create-review/${game.id}` })}}>Add Your Review</Button>
                </div>
                <div className="image_container">
                    <h5 className="list-h1">Action Shots</h5>
                    <div className="review-detail">
                    {
                        game.pictures && game.pictures.map(picture => {
                            return <img src={picture.action_pic}></img>
                        })
                    }
                    </div>
                    <Button className="mt-1" variant="contained" color="primary" onClick={() => {props.history.push({ pathname: `upload-image/${game.id}` })}}>Upload Image</Button>
                </div>
                </article>
                <div className="control-panel">
                    
                </div>
            </div>
    )
}
