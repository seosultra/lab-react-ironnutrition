import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ setFood, food }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    let newFood = {
      name,
      image,
      calories,
      servings,
    };
    e.preventDefault();
    setFood([...food, newFood]);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
