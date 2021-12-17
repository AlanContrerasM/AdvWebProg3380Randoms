import React, { useEffect, useState } from 'react';
import axios from 'axios';



import './styles.css';

function App() {

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [drinks, setDrinks] = useState();

  const fetchData = async () =>{
    const resp = await axios.get(url);
    console.log(resp.data.drinks);
    setDrinks(resp.data.drinks);

  }

  useEffect(() => {
    fetchData();
    
    return () => {}
  }, [])

  


  return (
    <div className="App">
      <h1>It's Festive season. Lets have some fun!!</h1>
      <h1>Types of Margarita Drinks</h1>

      <div className="drinks">
        {!drinks ? "loading" : drinks.map((drink, index)=>{
          return (
            <div className='drink' key={drink.idDrink}>
              <h3>Drink {index + 1}</h3>
              <h2>Drink {drink.strDrink}</h2>
              <div className='details'>
                  <p>Drink Category: {drink.strCategory}</p>
                  <p>Glass: {drink.strGlass}</p>
                  <img height={150} width={150} src={drink.strDrinkThumb} alt="the drink"/>
                  <p>Instructions: {drink.strInstructions}</p>
                  <p>Date Modified: {drink.dateModified}</p>
              </div>
            </div>);
        })}

      </div>

      
    </div>
  );
}

export default App;


