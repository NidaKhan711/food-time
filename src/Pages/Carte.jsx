import { useContext } from 'react';
import '../Style/Carte.scss'
import DelI from '../assets/deli.png';
import { CartContext } from '../Context/ContProvide'


const Carte = () => {
    const {cartItems,removeFromCart,allData} = useContext(CartContext)
    

    return (
        <div className="food-display">
            <h2>Top Dishes Near You</h2>

            {
             allData.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <ul className="item-list">
                                <li className="item">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-price">${item.price}</span>
                                    <span className='item-num'>{cartItems[item.id]}</span>
                                    <img onClick={() => removeFromCart(item.id)} src={DelI} alt="Remove" className="remove-icon" />
                                </li>
                                <hr />
                            </ul>
                        )
                    }
                })
            }

        </div>
    );
};


export default Carte;
