import React from 'react'

const AddRemoveButton = (props) => {
    const [add,remove] = props.methods;
    const [productQuantity] = props.state;
  return (
    <>
    <div className='quantity'>
    <button className=' quantity-button add-quantity' onClick={()=>{add()}}>+</button>
    <p>{productQuantity}</p>
    <button className='quantity-button remove-quantity' onClick={()=>{remove()}}>-</button>
    </div>
    </>
  )
}

export default AddRemoveButton