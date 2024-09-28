import logo from './logo.svg';
import React, { useState } from 'react';
import GroceryChart from './GrocerryChart';
import GroceryInput from './GroceryInput';

import './App.css';

function App() {
  const [dataFromChild, setDataFromChild] = useState('');
  const [dataReceived, setDataReceived] = useState(false);
  const [category, setCategory] = useState('');
  const [categorySelected, setCategorySelectedState] = useState(false);
  const categories = ['Grocery', 'Rent', 'Utilities', 'Transportation', 'Entertainment'];

  // Function to handle data from child
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    setDataReceived(true);
  };
  const onSelectCategory = (data) => {
    setCategory(data)

    console.log(dataFromChild)
    coneole.log(dataReceived)
    setCategorySelectedState(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        {!dataReceived && <GroceryChart  onDataSend={handleDataFromChild}  />}
      
    {dataReceived && <div className="flex space-x-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          {category}
        </button>
      ))}
    </div>}
    {categorySelected && <GroceryInput new_data={dataFromChild}/>}
        
      </header>
    </div>
  );
}

export default App;
