import React, { useContext, useState } from 'react'
import { GameContext } from "./GameProvider"
import { Button } from '@material-ui/core';

import "./ReviewForm.css"

export const ReviewForm = (props) => {
  const { createReview  } = useContext(GameContext)
  const [currentReview, setCurrentReview] = useState({
    review:""
  })
  
  const handleControlledInputChange = (event) => {
    const newReviewState = Object.assign({}, currentReview)
    newReviewState[event.target.name] = event.target.value
    setCurrentReview(newReviewState)
}

  return (

<form className="games reg-form">
<h2 className="gameForm__title">Add Your Review</h2>
<fieldset>
<div className="form-group">
<label htmlFor="Review">Review: </label>
<textarea rows="5" name="review" required autoFocus className="text-area" onChange={handleControlledInputChange}></textarea>
</div>
</fieldset>
<Button className="mt-1" variant="contained" color="primary" type="submit"
        onClick={evt => {
            evt.preventDefault()
            const { gameId } = props.match.params
            const review = {
                review: currentReview.review,
                gameId: `${gameId}`
            }
            createReview(review).then(() => props.history.push({ pathname: `/games/${gameId}` }))
        }}
        >Create</Button>
</form>
)
}
