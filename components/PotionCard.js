import React from 'react';

const PotionCard = ({item, addInventory}) => {

    // console.log('potion',item);

    if (item.hasOwnProperty('maxdamage')) {
        console.log('weapon');
    }

    if (!item.hasOwnProperty('maxdamage')) {
        console.log('potion');
    }

    return (
        <div className={'item-card'} style={{margin: '5px'}} onClick={()=>addInventory(item)}>
            <img src={item.image}  alt=""/>
            <div style={{paddingLeft:'15px'}}>
                <p>price: <b>{item.price}</b></p>
                <p>title: <b>{item.title}</b></p>
                <p> Effect: <b>{item.effect.health}</b> </p>
            </div>
        </div>
    );
};

export default PotionCard;