import React, { useContext, useEffect, setState, useState } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"
import { ListGroup, ListGroupItem, FormGroup, Input, Label } from 'reactstrap'
import { Button, TextField, FormControl, Select, InputLabel } from '@material-ui/core';

import "./GameList.css"

export const GameList = (props) => {
    const { games, getGames, searchGames, sortGames } = useContext(GameContext)
    const [ select, setSelect] = useState({})

    useEffect(() => {
        getGames()
    }, [])

    const searchEvent = (e) => {
        if (e.key == 'Enter') {
           const term = (e.target.value)
           searchGames(term)
        }
    }
    const handleChange = (event) => {
        const selected = event.target.value;
        setSelect(selected)
        sortGames(selected)
      };
    

    return (
        <article className="games">
            <h1 className="list-h1">Games</h1>
            <div className="list-controls">
                <Button variant="contained" color="primary"
                    onClick={() => {
                        props.history.push({ pathname: "/games/new" })
                    }}
                >Register New Game</Button>
                                <FormGroup>
                    <Input className="search-list" type="search" name="search" id="exampleSearch" placeholder="Search Games" onKeyDown={searchEvent} />
                </FormGroup>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple">Sort By</InputLabel>
                    <Select
                    native
                    value={select}
                    onChange={handleChange}
                    label="Sort By"
                    inputProps={{
                        name: 'sort',
                        id: 'outlined-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value={'id'} />
                    <option value={'year_released'}>Year Released</option>
                    <option value={'time_to_play'}>Time To Play</option>
                    <option value={'designer'}>Designer</option>
                    </Select>
                </FormControl>

            </div>
            <div className="game-links">
                <ListGroup className="link-box">          
                {
                   games && games.results ? games.results.map(game => {
                        const gamelink = `/games/${game.id}`
                        return <ListGroupItem  tag="a" key={`game--${game.id}`} href={gamelink} className="list-links">{game.title}</ListGroupItem>
                    }) :''
                }
                </ListGroup>

            </div>
        </article>
    )
}
