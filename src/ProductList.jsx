
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems, selectCartCount } from './CartSlice'
import { categories, formatPrice } from './plants'

// Shared Navbar for Home, Plants, and Cart pages
export function Navbar({ page }) {
  const count = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a
          className="brand"
          href="#home"
          aria-current={page === 'home' ? 'page' : undefined}
        >
          <span className="brand-icon" aria-hidden="true">✿</span>
          Paradise Nursery
        </a>

        <nav className="navbar" aria-label="Main navigation">
          <a
            href="#home"
            aria-current={page === 'home' ? 'page' : undefined}
          >
            Home
          </a>
          <a
            href="#plants"
            aria-current={page === 'plants' ? 'page' : undefined}
          >
            Plants
          </a>
          <a
            href="#cart"
            className="cart-link"
            aria-current={page === 'cart' ? 'page' : undefined}
            aria-label={`Cart, ${count} items`}
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h3l3 13h11l3-9H6" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
            </svg>
            <span>Cart</span>
            <span className="badge" aria-live="polite">
              {count}
            </span>
          </a>
        </nav>
      </div>
    </header>
  )
}

// Plant data: 3 categories with 6 unique plants each.
// Full category definitions are in src/plants.js.
export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
  }

  return (
    <div className="page">
      <p className="eyebrow">The collection</p>
      <h1>Shop plants</h1>
      <p className="page-intro">
        Browse indoor plants by category and add your
        favorites to the cart.
      </p>

      {categories.map(({ id, name, plants }) => (
        <section
          className="category"
          key={id}
          aria-labelledby={id}
        >
          <h2 id={id}>{name}</h2>

          <div className="product-grid">
            {plants.map((plant) => {
              const inCart = cartItems.some(
                (item) => item.id === plant.id
              )

              return (
                <article
                  className="product-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={`${plant.name} illustration`}
                    width="320"
                    height="200"
                    loading="lazy"
                  />

                  <div className="product-details">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>

                    <div className="product-actions">
                      <strong>
                        {formatPrice(plant.price)}
                      </strong>

                      <button
                        type="button"
                        disabled={inCart}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {inCart
                          ? 'Added to Cart'
                          : 'Add to Cart'}
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

