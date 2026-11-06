import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AboutUs from './AboutUs'
import CartItem from './CartItem'
import ProductList from './ProductList'
import { selectCartCount } from './CartSlice'

function getPage() {
  const hash = window.location.hash
  if (hash === '#plants') return 'plants'
  if (hash === '#cart') return 'cart'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)
  const count = useSelector(selectCartCount)

  useEffect(() => {
    function navigate() {
      setPage(getPage())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', navigate)
    return () => window.removeEventListener('hashchange', navigate)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-current={page === 'home' ? 'page' : undefined}>
            <span className="brand-icon" aria-hidden="true">✿</span>
            Paradise Nursery
          </a>
          <nav aria-label="Main navigation">
            <a href="#plants" aria-current={page === 'plants' ? 'page' : undefined}>Plants</a>
            <a href="#cart" className="cart-link" aria-current={page === 'cart' ? 'page' : undefined}
              aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h3l3 13h11l3-9H6" />
                <circle cx="9" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
              </svg>
              <span>Cart</span><span className="badge">{count}</span>
            </a>
          </nav>
        </div>
      </header>
      <main>
        {page === 'home' && (
          <>
            <section className="hero" aria-labelledby="home-title">
              <div className="hero-content">
                <p className="eyebrow">Indoor plant shop</p>
                <h1 id="home-title">Paradise Nursery</h1>
                <p>Find houseplants and fragrant herbs for your windowsill, desk, or favorite corner.</p>
                <a className="button hero-button" href="#plants">Get Started</a>
              </div>
            </section>
            <AboutUs />
          </>
        )}
        {page === 'plants' && <ProductList />}
        {page === 'cart' && <CartItem />}
      </main>
      <footer>Paradise Nursery · Indoor plants and herbs</footer>
    </>
  )
}
