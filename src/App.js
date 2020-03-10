import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import GroceryForm from './components/groceryform'
import Grocery from './components/grocery'

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Bread", inCart: false, },
      { id: 2, name: "Milk", inCart: false, },
      { id: 3, name: "Eggs", inCart: false, },
      { id: 4, name: "Apples", inCart: false, },
      { id: 5, name: "Bananas", inCart: false, },
      { id: 6, name: "Fish", inCart: false, },
      { id: 7, name: "Carrots", inCart: false, },
      { id: 8, name: "Yogurt", inCart: false, },
      { id: 9, name: "Grapes", inCart: false, },
      { id: 10, name: "Chicken", inCart: false, },
      { id: 11, name: "Orange Juice", inCart: false, },
      { id: 12, name: "Tomatoes", inCart: false, },
      { id: 13, name: "Soup", inCart: false, },
    ]
  }


  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
  
  addGrocery = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqId(), inCart: false }
    this.setState({ groceries: [grocery, ... groceries]});
    }

  renderGroceries = () => {
    const { groceries, } = this.state;
    return groceries.map( grocery =>
      <li key={grocery.id}>{grocery.name}</li>
      )
  };
  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            inCart: !grocery.inCart
          }
        }
        return grocery
      })
    })
  }

  render () {
    const { groceries } = this.state 
    return (
      <div className="card">
        <h1>Grocery List</h1>
        <hr/> 
          <List name="My Grocery List" items={groceries} inCartClick={this.handleClick}/>
     
        <br/>
        <GroceryForm addGrocery={this.addGrocery} /> 
        </div>
    );
  }
}

export default App;
