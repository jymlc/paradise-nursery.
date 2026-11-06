import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from './CartSlice'
import { categories, formatPrice } from './plants'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  return (
    <div className="page">
      <p className="eyebrow">The collection</p>
      <h1>Shop plants</h1>
      <p className="page-intro">Browse indoor plants by category and add your favorites to the cart.</p>
      {categories.map(({ id, name, plants }) => (
        <section className="category" key={id} aria-labelledby={id}>
          <h2 id={id}>{name}</h2>
          <div className="product-grid">
            {plants.map((plant) => {
              const inCart = cartItems.some((item) => item.id === plant.id)
              return (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={`${plant.name} illustration`} width="320" height="200" loading="lazy" />
                  <div className="product-details">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-actions">
                      <strong>{formatPrice(plant.price)}</strong>
                      <button type="button" disabled={inCart} onClick={() => dispatch(addItem(plant))}>
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
