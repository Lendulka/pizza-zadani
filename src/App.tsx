import ToppingsSelect from './components/ToppingsSelect';
import toppings from './data/topings';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <div className="pizza" />
        <h1>Build your own pizza</h1>
      </header>
      <main>
        <ToppingsSelect toppings={toppings} />
      </main>
    </div>
  );
};

export default App;