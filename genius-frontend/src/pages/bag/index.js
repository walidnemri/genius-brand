import React from 'react'


const products = [
    {
        name: "genius sweartshirt neon green",
        price: 85,
  
    },
    {
        name: "genius hoodies black white",
        price: 100,
        
    }
]

const  Bag = () => {
  const initalState = {
    "genius hoodies black white": 0,
    "genius sweartshirt neon green":0,
    products,
    total:0,
    shipping:5,
  }
  const [state, dispatch] = React.useReducer(reducer, initalState);

  const getTotal = () => {
    let total = 0

    state.products.forEach( product => total += product.price * state[product.name])
    console.log(total)

    dispatch({ type: "total", payload: total})
    //return total
  }

  React.useEffect(() => {
    getTotal()
  },[state["genius hoodies black white"]])

  React.useEffect(() => {
    getTotal()
  },[state["genius sweartshirt neon green"]])

  function reducer(state, action) {
      switch (action.type) {
        case "fill_input":
          return {
            ...state,
            [action.fieldName]: action.payload,
          };
        case "total":
          return {
            ...state,
            total: action.payload,
          };
        default:
          return state;
      }
    }
    return (
      <>
      <div>Bag</div>
      <ul>
          {products.map( product =>
              (
                <li>
                    {product.name}
                    <input
                        type="number"
                        value={state[product.name]}
                        onChange={(e) =>
                            dispatch({
                              type: "fill_input",
                              fieldName: product.name,
                              payload: e.currentTarget.value,
                            })
                        }
                    />
                    {product.price}$
                </li>
              )
            )
          }
      </ul>
      <div>
        <div>subtotal {state.total}$</div>
        <div>shipping {state.shipping}$</div>
        <div>total {state.shipping + state.total}$</div>
      </div>
      </>
  )
};

export default Bag