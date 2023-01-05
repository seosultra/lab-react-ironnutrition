import './App.css';
import {} from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [query, setQuery] = useState('');

  const handleDelete = (name) => {
    const copyF = [...food];
    const newF = copyF.filter((deletedF) => deletedF.name !== name);
    setFood(newF);
  };

  return (
    <div className="App">
      <AddFoodForm food={food} setFood={setFood} />
      <Search query={query} setQuery={setQuery} />
      {food
        .filter((theFood) => {
          return theFood.name.toLowerCase().includes(query.toLowerCase());
        })
        .map((foods) => {
          return <FoodBox food={foods} handleDelete={handleDelete} />;
        })}
    </div>
  );
}

export default App;
