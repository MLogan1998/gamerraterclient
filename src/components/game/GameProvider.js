import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames, game, setGame ] = useState([])

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
       return fetch(`http://localhost:8088/games/${id}`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
      })
      .then(response => response.json())
      .then(setGames)
    }

    return (
      <GameContext.Provider value={{ games, getGames, getGameById }} >
          { props.children }
      </GameContext.Provider>
  )
}
