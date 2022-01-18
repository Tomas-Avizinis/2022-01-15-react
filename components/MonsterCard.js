import React from 'react';

const MonsterCard = ({monster}) => {
    console.log(monster);
    return (
        <div className={'race-card flex'}>
            <img src={monster.image} alt={monster.name}/>
            <div className={'flex-col'}>
                <h3>Race: <b>{monster.name}</b></h3>
                <p>damage: <b>{monster.maxDamage}</b></p>
                <p>health: <b>{monster.health}</b></p>
            </div>
        </div>
    );
};

export default MonsterCard;