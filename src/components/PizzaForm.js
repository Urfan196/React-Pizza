import React from "react"
import { stat } from "fs"

const PizzaForm = (props) => {

  const {id, topping, size, vegetarian} = props.pizza 

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} onChange={props.changeTopping}/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={props.changeSize} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian ? true : false} onChange={props.changeVeg}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian ? false : true} onChange={props.changeVeg}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => props.handleSubmit(e, id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
