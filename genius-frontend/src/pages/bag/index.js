import React from 'react'
import "./styles.css"
import tshirt from './tshirt.svg'
//import {ReactComponent as tshirt} from './tshirt.svg'


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
      <div className='bag_container'>  
      <p className ='bag_title'>Bag</p>
      <div className='bag_list_container'> <p> Product</p>
            <p> Quantity</p>
            <p>Price </p>     
             </div>
            
      <ul className= 'bag_card_container'>
          {products.map( product =>
              (
                <li className='bag_card'>
                    <img className='bag_card_item' src= {tshirt}/>
                    <div className='bag_prodruct_name'><p className='bag_product'>{product.name}</p></div>
                    <input className ='bag_card_quantity bag_card_item'
                        type="number"
                        value={state[product.name]}
                        min='1' 
                        max='10'
                        onChange={(e) =>
                            dispatch({
                              type: "fill_input",
                              fieldName: product.name,
                              payload: e.currentTarget.value, 
                            
                            })
                        }
                    />
                    <button className='bag_button bag_card_item'> Remove</button>
                    <p className='bag_product_price'>{product.price}$</p>
                </li>
               
              )
            )
          }
          
      </ul>
      <div className='bag_line'></div>
      <div className ='bag_total_container'>
        <div className= 'bag_total_title'>
        <p >Subtotal</p>
        <p >Shipping</p>
        <div className='bag_line_total'></div>
        <p >Total</p>
        </div>
        <div className='unit'>
        <p>{state.total}$</p>
        <p>{state.shipping}$</p>
        <p>{state.shipping + state.total}$</p>
        <button> Checkout</button>
        </div>
         {/*comment here*/}
      </div>
      </div>
     
  
      </>
  )
};

export default Bag