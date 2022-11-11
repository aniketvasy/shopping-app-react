import React from 'react'
import { IoBagCheck } from "react-icons/io5";


const orderDetail = (props) => {
console.log("======>",props)
  return (<>
    <div className='order-detail'>
      <div className='order-detail-titlecomp'>
        <p className='order-detail-title'>Order Details</p>
      </div>


      <div className="order-detail-total-item-comp detail-pair">
        <p className='order-detail-total-item detail-key'>
          TOTAL ITEMS
          </p>
          <p className='order-detail-total-item-value detail-value'>
          {props.totalItem}
          </p>
      </div>


      <div className="order-detail-subtotal-comp detail-pair">
        <p className='order-detail-subtotal detail-key'>
          SUBTOTAL
          </p>
          <p className='order-detail-subtotal-value detail-value'>
          ₹ {props.subtotal}
          </p>
      </div>


      <div className="order-detail-shipping-comp detail-pair">
        <p className='order-detail-shipping detail-key'>
          SHIPPING
          </p>
          <p className='order-detail-shipping-value detail-value'>
          ₹ {props.shipping}
          </p>
      </div>


      <div className="order-detail-total-comp detail-pair">
        <p className='order-detail-total detail-key'>
          TOTAL 
          </p>
          <p className='order-detail-total-value detail-value'>
          ₹ {props.subtotal}
          </p>
      </div>
    </div>
    <div className='order-checkout-button-comp'>
      <button className='order-checkout-button'>Checkout <IoBagCheck className='checkout-icon'/></button>
    </div>
    </>
  )
}

export default orderDetail