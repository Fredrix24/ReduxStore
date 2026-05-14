import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addItem } from './store/actions';
import './App.css';

function App() {
  const cart = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const productName = prompt('Введите название товара:');
    if (productName && productName.trim()) {
      dispatch(addItem(productName.trim()));
    } else if (productName !== null) {
      alert('Название не может быть пустым!');
    }
  };

  return (
    <div className="app">
      <h1>Корзина товаров</h1>
      
      <button className="add-btn" onClick={handleAddItem}>
        + Добавить товар
      </button>

      <div className="cart-list">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span className="item-title">{item.title}</span>
            <div className="counter">
              <button 
                className="counter-btn"
                onClick={() => dispatch(decrement(item.id))}
                disabled={item.count <= 1}
              >
                −
              </button>
              <span className="count">{item.count}</span>
              <button 
                className="counter-btn"
                onClick={() => dispatch(increment(item.id))}
                disabled={item.count >= 25}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {cart.length === 0 && (
        <div className="empty-cart">
          Корзина пуста. Добавьте товары!
        </div>
      )}
    </div>
  );
}

export default App;