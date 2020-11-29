import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [game, setGame] = useState({})

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setGames)
    }

    const getGameById = (id) => {
       return fetch(`http://localhost:8000/games/${id}`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
      })
      .then(response => response.json())
      .then(setGame)
    }

    return (
      <GameContext.Provider value={{ games, getGames, getGameById, game }} >
          { props.children }
      </GameContext.Provider>
  )
}
