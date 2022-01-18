import React from 'react';
import RaceCard from "./RaceCard";
import ItemCard from "./ItemCard";

const Main = ({player, gameStatus, myInventory, choosePlayer, game, money}) => {
    // console.log(player);
    return (
        <div>
            <div className={'main-header'}>
                <button onClick={()=>gameStatus('shop')}>Shop</button>
                <button onClick={()=>gameStatus('arena')}>Arena</button>
            </div>
            <div className={'flex'}>
                <div className={'main-container'}>
                    <header>My player</header>
                    <RaceCard player={player} choosePlayer={choosePlayer} gameStatus={gameStatus} game={game}/>
                </div>

                <div className={'main-container'}>
                    <header className={'flex'}>
                        <p>My inventory</p>
                        <p>Free slots: {player.inventorySlots-myInventory.length}</p>
                        <p>Gold: {money}</p>
                    </header>
                    {(myInventory.length!==0) && myInventory.map((item, idx)=><ItemCard item={item} key={idx}/>)}
                </div>
            </div>

        </div>
    );
};

export default Main;
