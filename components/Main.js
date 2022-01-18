import React from 'react';
import RaceCard from "./RaceCard";

const Main = ({player, gameStatus}) => {
    // console.log(player);
    return (
        <div>
            <div className={'main-header'}>
                <button onClick={()=>gameStatus('shop')}>Shop</button>
                <button>Arena</button>
            </div>
            <div className={'flex'}>
                <div className={'main-container'}>
                    <header>My player</header>
                    <RaceCard player={player} />
                </div>

                <div className={'main-container'}>
                    <header>My inventory</header>
                </div>
            </div>

        </div>
    );
};

export default Main;
