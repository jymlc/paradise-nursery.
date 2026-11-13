
import { useEffect, useState } from 'react'
import AboutUs from './AboutUs'
import CartItem from './CartItem'
import ProductList, { Navbar } from './ProductList'

function getPage() {
  const hash = window.location.hash

  if (hash === '#plants') return 'plants'
  if (hash === '#cart') return 'cart'

  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    function navigate() {
      setPage(getPage())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', navigate)

    return () => {
      window.removeEventListener('hashchange', navigate)
    }
  }, [])

  return (
    <>
      <Navbar page={page} />

      <main>
        {page === 'home' && (
          <>
            <section
              className="hero"
              aria-labelledby="home-title"
            >
              <div className="hero-content">
                <p className="eyebrow">
                  Indoor plant shop
                </p>

                <h1 id="home-title">
                  Paradise Nursery
                </h1>

                <p>
                  Find houseplants and fragrant herbs
                  for your windowsill, desk, or
                  favorite corner.
                </p>

                <a
                  className="button hero-button"
                  href="#plants"
                >
                  Get Started
                </a>
              </div>
            </section>

            <AboutUs />
          </>
        )}

        {page === 'plants' && <ProductList />}

        {page === 'cart' && <CartItem />}
      </main>

      <footer>
        Paradise Nursery · Indoor plants and herbs
      </footer>
    </>
  )
}

