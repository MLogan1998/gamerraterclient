import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [game, setGame, getGame ] = useState({})
    const [ categories, setCategories] = useState([])

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

    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
          method: "POST",
          headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(game)
        })
        .then(res => res.json())
        .then(getGames)
    }

    const getCategories = () => {
      return fetch("http://localhost:8000/categories", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }
      })
      .then(response => response.json())
      .then(setCategories)
  }

    const createReview = (review) => {
      return fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
      })
      .then(res => res.json())
    .then(setGame)
  }

  const createImage = (review) => {
    return fetch("http://localhost:8000/image", {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
  .then(setGame)
}

const createRating= (rating) => {
  return fetch("http://localhost:8000/rating", {
    method: "POST",
    headers: {
      "Authorization": `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(rating)
  })
  .then(res => res.json())
  // .then(getGame)
}

    return (
      <GameContext.Provider value={{ games, getGames, getGameById, game, createGame, getCategories, categories, createReview, createImage, createRating }} >
          { props.children }
      </GameContext.Provider>
  )
}
