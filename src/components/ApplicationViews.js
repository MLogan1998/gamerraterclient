import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider.js"
import { GameList } from "./game/GameList.js"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { ReviewForm } from "./game/ReviewForm"
import { ImageForm } from "./game/ImageForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            // backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games" render={props => <GameList {...props} />} />
                <Route exact path="/games/:gameId(\d+)" render={props => <GameDetails {...props} />} />
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />
                <Route exact path="/games/create-review/:gameId(\d+)" render={props => <ReviewForm {...props} />} />
                <Route exact path="/games/upload-image/:gameId(\d+)" render={props => <ImageForm {...props} />} />
            </GameProvider>
        </main>
    </>
}
