import React from 'react';
import {useState} from "react";
import ItemCard from "./ItemCard";

const Arena = ({ addInventory, myInventory, gameStatus, player, money, monsters}) => {
    const rand= Math.floor(Math.random()*monsters.length);
    const monster=(monsters[rand]);
    // const [monster, setMonster]=useState(monsters[rand]); //nereikia
    const [myHealth, SetMyHealth] = useState(player.health);
    const [monsterHealth, SetMonsterHealth] = useState(monster.health);

    console.log('healths:', myHealth, monsterHealth);

    const fight=()=>{
        console.log('hit');
    }

    return (
        <div>
            <div className={'main-header'}>
                <h3>Welcome to Arena</h3>
                <button onClick={()=>gameStatus('shop')}>Shop</button>
            </div>
            <div className={'flex  arena'}>
                <div className={'main-container'}>
                    <header>my player</header>
                    <img src={player.image} className={'fighter'} alt=""/>
                    <div className={'progress-bg'}>
                        <div className={'progress'} style={{width:myHealth+'%'}}></div>
                    </div>

                    <div>{player.race}  health: <b>{player.health}</b></div>
                </div>
                <button className={'attack'} onClick={fight}>Attack</button>
                <div className={'main-container'}>
                    <header className={'flex'}>Monster</header>
                    <img src={monster.image} className={'fighter'} alt=""/>
                    <div className={'progress-bg'}>
                        <div className={'progress'} style={{width:monsterHealth+'%'}}></div>
                    </div>
                    <div>{monster.name}  health: <b>{monster.health}</b></div>
                </div>
            </div>

        </div>
    );
};

export default Arena;

// name: "Basilisk",
//     maxDamage: 5,
//     health: 100