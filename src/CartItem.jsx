import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, selectCartCount, selectCartItems, selectCartTotal, updateQuantity } from './CartSlice'
import { formatPrice } from './plants'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  return (
    <section className="page cart-page" aria-labelledby="cart-title">
      <p className="eyebrow">Your selection</p>
      <h1 id="cart-title">Shopping cart</h1>
      <p className="cart-total" aria-live="polite">
        {count} {count === 1 ? 'item' : 'items'} · Total cart amount <strong>{formatPrice(total)}</strong>
      </p>
      {items.length === 0 && <p className="empty-cart">Your cart is empty.</p>}
      <ul className="cart-items">
        {items.map(({ id, name, image, price, quantity }) => (
          <li className="cart-row" key={id}>
            <img src={image} alt={`${name} illustration`} width="112" height="84" />
            <div>
              <h2>{name}</h2>
              <p>{formatPrice(price)} each</p>
              <button className="delete" type="button" aria-label={`Delete ${name}`}
                onClick={() => dispatch(removeItem(id))}>Delete</button>
            </div>
            <div className="quantity" role="group" aria-label={`${name} quantity`}>
              <button type="button" aria-label={`Decrease ${name} quantity`}
                onClick={() => dispatch(updateQuantity({ id, quantity: quantity - 1 }))}>−</button>
              <span>{quantity}</span>
              <button type="button" aria-label={`Increase ${name} quantity`}
                onClick={() => dispatch(updateQuantity({ id, quantity: quantity + 1 }))}>+</button>
            </div>
            <strong className="line-total">{formatPrice(price * quantity)}</strong>
          </li>
        ))}
      </ul>
      <div className="cart-actions">
        <a className="button secondary" href="#plants">Continue Shopping</a>
        <button type="button" onClick={() => setCheckoutMessage('Coming Soon')}>Checkout</button>
      </div>
      <p className="checkout-message" role="status">{checkoutMessage}</p>
    </section>
  )
}
