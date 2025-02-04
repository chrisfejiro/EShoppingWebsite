import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvision/StateProvider'
import {getBasketTotal} from '../StateProvision/Reducer'

const Subtotal = () => {
  const [{basket},dispatch]=useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value)=>(
        <>
            <p>
                Subtotal({basket.length} items): <strong>${value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" name="" id="" />This order contains a gift
            </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
    //   prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal