import React from 'react';
import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  handleChange: (selected: boolean) => void;
}

const Topping: React.FC<IToppingProps> = ({ topping, handleChange }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={handleChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;


