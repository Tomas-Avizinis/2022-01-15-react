import React from 'react';

const WeaponCard = ({item, addInventory}) => {
    // console.log('weapon',item);
    return (
        <div className={'item-card'} style={{margin: '5px'}} onClick={()=>addInventory(item)}>
            <img src={item.image}  alt=""/>
            <div style={{paddingLeft:'15px'}}>
                <p>price: <b>{item.price}</b></p>
                <p>max damage: <b>{item.maxDamage}</b></p>
                <p>energy per hit: <b>{item.energyPerHit}</b></p>
                <p> Effects: <b>{item.effects.map((ef,idx)=><span key={idx}> {ef} </span>)}</b> </p>
            </div>
        </div>
    );
};

export default WeaponCard;
