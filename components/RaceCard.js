import React from 'react';

const RaceCard = ({player, choosePlayer, gameStatus, game}) => {

    return (
        <div className={'race-card flex'} onClick={()=>{
                    if (game==='start') {
                        gameStatus('main');
                        choosePlayer(player);
                    }
                }
            }>

            <img src={player.image} alt={player.race}/>
            <div className={'flex-col'}>
                <h3>Race: <b>{player.race}</b></h3>
                <p>damage: <b>{player.damage}</b></p>
                <p>health: <b>{player.health}</b></p>
                <p>energy: <b>{player.energy}</b></p>
                <p>stamina: <b>{player.stamina}</b></p>
                <p>strength: <b>{player.strength}</b></p>
                <p>Slots: <b>{player.inventorySlots}</b></p>
                <p>Gold: <b>{player.gold}</b></p>
            </div>
        </div>
    );
};

export default RaceCard;

// {
//     image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltad40c8b16ba5146c/6165db02ff59d903990f26dd/3BSJB91SIUBO1613677288515.png",
//         race: "Dwarf",
//     damage: 5,
//     health: 90,
//     energy: 30,
//     stamina: 4,
//     strength: 3,
//     inventorySlots: 5,
//     gold: 300
// },