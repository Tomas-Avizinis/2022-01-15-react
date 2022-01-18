import React, {useState} from 'react';
import ItemCard from "./ItemCard";


const Shop = ({trader, addInventory, myInventory, gameStatus, player, money}) => {

    const [department, setDepartment] = useState('weapons')
    const shopFor=(item)=>setDepartment(item);

    return (
        <div>
            <div className={'main-header'}>
                <button onClick={()=>gameStatus('main')}>Main</button>
                <button onClick={()=>gameStatus('arena')}>Arena</button>
            </div>
            <div className={'flex'}>
                <div className={'main-container'}>
                    <header>
                        <button onClick={()=>shopFor('weapons')}>Weapons</button>
                        <button onClick={()=>shopFor('potions')}>Potions</button>
                    </header>
                    {department==='weapons' && trader.weapons.map((item, idx)=><ItemCard item={item} key={idx} addInventory={addInventory}/>)}
                    {department==='potions' && trader.potions.map((item,idx)=><ItemCard item={item} key={idx} addInventory={addInventory}/>)}
                </div>

                <div className={'main-container'}>
                    <header className={'flex'}>
                        <p>My inventory</p>
                        <p>Free slots: {player.inventorySlots-myInventory.length}</p>
                        <p>Gold: {money}</p>
                    </header>

                    {myInventory.map((item, idx)=><ItemCard item={item} key={idx}/>)}
                </div>
            </div>

        </div>
    );
};

export default Shop;