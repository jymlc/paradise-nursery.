# Paradise Nursery Shopping Cart Application

Paradise Nursery is an online houseplant shop built with React, Redux Toolkit, and Vite. Browse 18 plants in three categories, then add plants to the cart and adjust quantities. The navigation count, line subtotals, and cart total update from the same Redux store. Checkout displays a “Coming Soon” message.

## Run locally

Use Node.js 22 or later.

```sh
npm install
npm run dev
```

Run `npm run build` to create the production site in `dist/`. Run `npm run preview` to preview that build locally.

## Graded files

| Task | File | What it covers |
| --- | --- | --- |
| 1 | [README.md](README.md) | Project name, description, and setup |
| 2 | [AboutUs.jsx](src/AboutUs.jsx) | Nursery introduction |
| 3 | [App.css](src/App.css) | Landing background image and responsive styling |
| 4 | [App.jsx](src/App.jsx) | Landing page, Get Started, and navigation |
| 5 | [CartSlice.jsx](src/CartSlice.jsx) | Redux add, remove, and quantity actions |
| 6 | [ProductList.jsx](src/ProductList.jsx) | Categories, plant cards, and Add to Cart |
| 7 | [CartItem.jsx](src/CartItem.jsx) | Quantities, totals, delete, checkout, and continue shopping |

The catalog and its SVG plant illustrations are bundled with the app. Cart state is kept in memory while the page is open.
