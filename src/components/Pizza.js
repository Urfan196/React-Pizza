import React from "react"

const Pizza = (props) => {

  const {id, topping, size, vegetarian} = props.pizza 

  const vegInfo = vegetarian ? 'Yes': 'No'

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegInfo}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.handleEdit(props.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
