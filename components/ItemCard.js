import React from 'react';

const ItemCard = ({item, addInventory}) => {

    return (
        <div className={'item-card'} style={{margin: '5px'}} onClick={()=>addInventory(item)}>
            <img src={item.image}  alt=""/>
            <div style={{paddingLeft:'15px'}}>
                <p>price: <b>{item.price}</b></p>
                {item.title && <p>title: <b>{item.title}</b></p>}
                {item.effect && <p> Effect: <b>{item.effect.health}</b></p>}
                {item.maxDamage && <p>max damage: <b>{item.maxDamage}</b></p>}
                {item.energyPerHit && <p>energy per hit: <b>{item.energyPerHit}</b></p>}
                {item.effects && <p> Effects: <b>{item.effects.map((ef, idx) => <span key={idx}> {ef} </span>)}</b></p>}
            </div>
        </div>
    );
};
export default ItemCard;


// <p>price: <b>{item.price}</b></p>
// <p>max damage: <b>{item.maxDamage}</b></p>
// <p>energy per hit: <b>{item.energyPerHit}</b></p>
// <p> Effects: <b>{item.effects.map((ef,idx)=><span key={idx}> {ef} </span>)}</b> </p>