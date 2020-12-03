import React, { useContext, useState, useEffect } from 'react'
import { GameContext } from "./GameProvider"

import "./GameForm.css"

export const GameForm = props => {
  const { createGame, getCategories, categories } = useContext(GameContext)

  const [currentGame, setCurrentGame] = useState({
    title: "",
    description: "",
    designer: "",
    yearReleased: "",
    numberOfPlayers: 1,
    timeToPlay: 1,
    age: 8,
    categoryId: 1
  })

  useEffect(() => {
    getCategories()
  }, [])

  const handleControlledInputChange = (event) => {
    const newGameState = Object.assign({}, currentGame)
    newGameState[event.target.name] = event.target.value
    setCurrentGame(newGameState)
}

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" required autoFocus className="form-control"
                value={currentGame.title}
                onChange={handleControlledInputChange}
            />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="designer">Game Designer: </label>
          <input type="text" name="designer" required autoFocus className="form-control"
              value={currentGame.designer}
              onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Game Description: </label>
          <input type="text" name="description" required autoFocus className="form-control"
              value={currentGame.description}
              onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="yearReleased">Release Date: </label>
          <input type="date" name="yearReleased" required autoFocus className="form-control"
              value={currentGame.yearReleased}
              onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="numberOfPlayers">Number of Players: </label>
            < select
              onChange={handleControlledInputChange}
              className="browser-default custom-select" 
              name="numberOfPlayers">
                <option key={1} value={1}>1</option>
                <option key={2} value={2}>2</option>
                <option key={3} value={3}>3</option>
                <option key={4} value={4}>4</option>
                <option key={5} value={5}>5</option>
            </select >
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="timeToPlay">Length of Game: </label>
            < select
              onChange={handleControlledInputChange}
              className="browser-default custom-select" 
              name="timeToPlay">
                <option key={1} value={1}>1</option>
                <option key={2} value={2}>2</option>
                <option key={3} value={3}>3</option>
                <option key={4} value={4}>4</option>
                <option key={5} value={5}>5</option>
            </select >
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="age">Reccomended Age: </label>
            < select
              onChange={handleControlledInputChange}
              className="browser-default custom-select" 
              name="age">
                <option key={5} value={5}>5</option>
                <option key={6} value={6}>6</option>
                <option key={7} value={7}>7</option>
                <option key={8} value={8}>8</option>
                <option key={9} value={9}>9</option>
                <option key={10} value={10}>10</option>
                <option key={11} value={11}>11</option>
                <option key={12} value={12}>12</option>
                <option key={13} value={13}>13</option>
                <option key={14} value={14}>14</option>
                <option key={15} value={15}>15</option>
                <option key={16} value={16}>16</option>
                <option key={17} value={17}>17</option>
                <option key={18} value={18}>18+</option>
            </select >
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
                <label htmlFor="categoryId">Game Category: </label>
          < select
            onChange={handleControlledInputChange}
            className="browser-default custom-select" 
            name="categoryId" >
            {
              categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)
            }
          </select >
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
            // Prevent form from being submitted
            evt.preventDefault()

            const game = {
                title: currentGame.title,
                description: currentGame.description,
                designer: currentGame.designer,
                yearReleased: currentGame.yearReleased,
                numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                timeToPlay: parseInt(currentGame.timeToPlay),
                age: parseInt(currentGame.age),
                categoryId: parseInt(currentGame.categoryId)
            }

            createGame(game).then(() => props.history.push({ pathname: "/games" }))
        }}
        className="btn btn-2 btn-sep icon-create">Create</button>
    </form>
  )
}
