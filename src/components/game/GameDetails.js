import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"

export const GameDetails = (props) => {
    const { games, getGameById } = useContext(GameContext)

    useEffect(() => {
      const gameId = 3
        getGameById(gameId)
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    const gamelink = `/games/${game.id}`

                    return <section key={`game--${game.id}`} className="game">
                        <Link className="nav-link" to={gamelink}>{game.title}</Link>
                    </section>
                })
            }
        </article>
    )
}