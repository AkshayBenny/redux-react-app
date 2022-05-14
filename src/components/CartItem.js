import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const totalCost = useSelector((state) => state.cart.total);
  console.log(totalCost);
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>
          remove
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increase(id))} className='amount-btn'>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button onClick={() => dispatch(decrease(id))} className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
