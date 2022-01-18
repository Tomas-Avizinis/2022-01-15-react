import React from 'react';
import RaceCard from "./RaceCard";
import MonsterCard from "./MonsterCard";

const GameStart = ({players, monsters, gameStatus, choosePlayer, game}) => {


    return (
        <div >
            <h1>select race</h1>
            <div className={'start-game'}>
                {players.map((pl)=><RaceCard player={pl} key={pl.race} gameStatus={gameStatus} choosePlayer={choosePlayer} game={game}/>)}

                {/*{monsters.map((m)=><MonsterCard monster={m} key={m.name}/>)}*/}
            </div>

        </div>
    );
};

export default GameStart;
