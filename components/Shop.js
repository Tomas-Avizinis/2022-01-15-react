import React, {useState} from 'react';
import ItemCard from "./ItemCard";


const Shop = ({trader, addInventory, myInventory}) => {

    const [department, setDepartment] = useState('weapons')
    const shopFor=(item)=>setDepartment(item);

    return (
        <div>
            <div className={'main-header'}>
                <button>Shop</button>
                <button>Arena</button>
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
                    <header>My inventory</header>
                    {myInventory.map((item, idx)=><ItemCard item={item} key={idx}/>)}
                </div>
            </div>

        </div>
    );
};

export default Shop;