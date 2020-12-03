import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"

import "./GameList.css"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    props.history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            <div className="game-links">          
            {
                games.map(game => {
                    const gamelink = `/games/${game.id}`
                    return <Link className="nav-link game-link" key={`game--${game.id}`} to={gamelink}>{game.title}</Link>
                })
            }
            </div>
        </article>
    )
}
