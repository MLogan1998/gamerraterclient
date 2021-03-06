import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [game, setGame, getGame ] = useState({})
    const [ categories, setCategories] = useState([])

    const getGames = () => {
        return fetch("https://ml-gamer-rater.herokuapp.com/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setGames)
    }

    const getGameById = (id) => {
       return fetch(`https://ml-gamer-rater.herokuapp.com/games/${id}`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
      })
      .then(response => response.json())
      .then(setGame)
    }

    const createGame = (game) => {
        return fetch("https://ml-gamer-rater.herokuapp.com/games", {
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
      return fetch("https://ml-gamer-rater.herokuapp.com/categories", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("lu_token")}`
          }
      })
      .then(response => response.json())
      .then(setCategories)
  }

    const createReview = (review) => {
      return fetch("https://ml-gamer-rater.herokuapp.com/reviews", {
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
    return fetch("https://ml-gamer-rater.herokuapp.com/image", {
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
  return fetch("https://ml-gamer-rater.herokuapp.com/rating", {
    method: "POST",
    headers: {
      "Authorization": `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(rating)
  })
  .then(res => res.json())
}

const searchGames = (searchTerm) => {
  return fetch(`https://ml-gamer-rater.herokuapp.com/games?q=${searchTerm}`,{
      headers:{
      "Authorization": `Token ${localStorage.getItem("lu_token")}`
      }
  })
      .then(response => response.json())
      .then(setGames)
}

const sortGames = (selected) => {
  return fetch(`https://ml-gamer-rater.herokuapp.com/games?orderby=${selected}`,{
      headers:{
      "Authorization": `Token ${localStorage.getItem("lu_token")}`
      }
  })
      .then(response => response.json())
      .then(setGames)
}

    return (
      <GameContext.Provider value={{ games, getGames, getGameById, game, createGame, getCategories, categories, createReview, createImage, createRating, searchGames, sortGames }} >
          { props.children }
      </GameContext.Provider>
  )
}
