import React, {useState, useContext} from 'react'
import { GameContext } from "./GameProvider"

export const ImageForm = (props) => {
  const { createImage } = useContext(GameContext)
  const [currentImage, setCurrentImage] = useState({
    base64:''
  })

  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }

  const createGameImageString = (event) => {
    getBase64(event.target.files[0], (base64ImageString) => {
        console.log("Base64 of file is", base64ImageString);
        setCurrentImage({base64: base64ImageString})
    });
  }

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Upload An Image</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="game_image">Image: </label>
          <input type="file" id="game_image" onChange={createGameImageString} />
        </div>
      </fieldset>
      <button type="submit"
              onClick={evt => {
                  evt.preventDefault()
                  const { gameId } = props.match.params
                  const image = {
                      image: currentImage.base64,
                      gameId: `${gameId}`
                  }
                  createImage(image).then(() => props.history.push({ pathname: `/games/${gameId}` }))
              }}
              className="btn btn-2 btn-sep icon-create">Upload</button>
    </form>
  )
}
