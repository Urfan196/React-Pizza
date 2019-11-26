import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


class App extends Component {

  constructor() {
    super()

    this.state = {
      pizzas: [],
      pizza: {
        topping: '',
        size: '',
        vegetarian: null 
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas').then(resp => resp.json())
    .then(pizzas => {
      return this.setState({pizzas})
    })
  }

  handleEdit = (pizza) => {
    this.setState({pizza})
  }

  handleSubmit = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        this.state.pizza
      )
    }
    ).then(resp => resp.json())
    .then(pizza => {
      const newArray = this.state.pizzas.map(piz => {
        if(pizza.id === piz.id){
          return pizza
        } else {
          return piz
        }
      })
      this.setState({pizzas: newArray})
    })
  }

  changeTopping = (e) => {
    this.setState({
      pizza: {...this.state.pizza, topping: e.target.value }
    })
  }

  changeSize = (e) => {
    this.setState({
      pizza: {...this.state.pizza, size: e.target.value }
    })
  }

  changeSize = (e) => {
    this.setState({
      pizza: {...this.state.pizza, size: e.target.value }
    })
  }

  changeVeg = (e) => {
  if(e.target.value === 'Vegetarian'){
    return this.setState({
        pizza: {...this.state.pizza, vegetarian: true}
      })
  } else {
    return this.setState({
      pizza: {...this.state.pizza, vegetarian: false}
    })
  }
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza = {this.state.pizza} handleSubmit={this.handleSubmit} changeTopping={this.changeTopping} changeSize={this.changeSize}
        changeVeg={this.changeVeg}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit = {this.handleEdit}/>
      </Fragment>
    );
  }
}
 
export default App;
