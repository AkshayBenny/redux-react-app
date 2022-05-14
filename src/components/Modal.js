import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cart/cartSlice';
import { openModal, closeModal } from '../redux/modal/modalSlice';
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove items from shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            className='confirm-btn'
          >
            Confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type='button'
            className='clear-btn'
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
