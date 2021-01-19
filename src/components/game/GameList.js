import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Button } from '@material-ui/core';

import "./GameList.css"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <div className="game-links">
                <h1 className="list-h1">Games</h1>
                <ListGroup className="link-box">          
                {
                    games.map(game => {
                        const gamelink = `/games/${game.id}`
                        return <ListGroupItem  tag="a" key={`game--${game.id}`} href={gamelink} className="list-links">{game.title}</ListGroupItem>
                    })
                }
                </ListGroup>

            </div>
            <div className="list-controls">
                <Button variant="contained" color="primary"
                    onClick={() => {
                        props.history.push({ pathname: "/games/new" })
                    }}
                >Register New Game</Button>
            </div>
        </article>
    )
}
