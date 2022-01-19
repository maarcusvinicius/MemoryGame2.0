import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function GameOver(props) {
    return (props.show ?
        <div id="gamerOver">
            <div>
                Parabéns, você completou o jogo!
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
        </div> : <Fragment />
    )
}