import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider.js"
import { GameList } from "./game/GameList.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games" render={props => <GameList {...props} />} />
            </GameProvider>
        </main>
    </>
}
