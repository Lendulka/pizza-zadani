import ITopping from "../../models/Topping";
import Topping from "../Topping";
import { useState } from "react";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [toppingsTotal, setToppingsTotal] = useState<ITopping[]>(toppings)

  const handleChange = (selected: boolean, index: number) => {
    console.log(`selected: ${selected} index: ${index}`)
    const toppingsCopy = [...toppingsTotal]
    toppingsCopy[index] = { ...toppingsCopy[index], selected: selected }
    setToppingsTotal(toppingsCopy)
  }

  const toppingsSelected = toppingsTotal.filter(top => top.selected === true)
  const toppingsSelectedCount = toppingsSelected.length
  console.log(toppingsSelected)

  const toppingsSelectedSum = toppingsSelected.reduce((acc, top) => acc + top.price * 1, 0);
  const toppingsSelectedSumRounded = (Math.round(toppingsSelectedSum * 100) / 100).toFixed(2)

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingsSelectedCount},
        total price: {toppingsSelectedSumRounded} Euro
      </p>

      <div className="toppings">
        {toppingsTotal.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            handleChange={selected => handleChange(selected, index)} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;

