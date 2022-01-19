import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import game from './game/game'



export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCard] = useState([]);

    useEffect(() => {
        setCard(game.createCardsFromTechs())
    }, [])

    function restart() {
        game.clearCards();
        setCard(game.createCardsFromTechs());
        setGameOver(false);
    }

    function handleFlip(card) {
        game.flipCard(card.id, () => {
            // Game Over Call Back
            setGameOver(true);
        }, () => {
            // No Match Call Back
            setCard([...game.cards])
        })
        setCard([...game.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}