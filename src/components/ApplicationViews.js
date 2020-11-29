import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider.js"
import { GameList } from "./game/GameList.js"
import { GameDetails } from "./game/GameDetails"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games" render={props => <GameList {...props} />} />
                <Route exact path="/games/:gameId" render={props => <GameDetails {...props} />} />
            </GameProvider>
        </main>
    </>
}
