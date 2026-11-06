const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export const formatPrice = (cents) => usd.format(cents / 100)

const catalog = [
  ['easy-care', 'Easy-care houseplants', [
    ['snake-plant', 'Snake Plant', 1800, 'Upright leaves with yellow edges.', 'blade', '#3f7950', '#d7ce7a'],
    ['zz-plant', 'ZZ Plant', 2200, 'Glossy leaflets on arching stems.', 'sprig', '#315d42', '#70985c'],
    ['spider-plant', 'Spider Plant', 1500, 'Arching striped leaves spill over the pot.', 'grass', '#557b49', '#e2e8b3'],
    ['aloe-vera', 'Aloe Vera', 1400, 'Fleshy pointed leaves form a rosette.', 'blade', '#60846c', '#9db69b'],
    ['jade-plant', 'Jade Plant', 1600, 'Rounded, fleshy leaves on branching stems.', 'sprig', '#4d764d', '#8ba36a'],
    ['pothos', 'Golden Pothos', 1700, 'Trailing heart-shaped foliage with golden markings.', 'vine', '#52773c', '#c5ba53'],
  ]],
  ['fragrant-herbs', 'Fragrant herbs', [
    ['lavender', 'Lavender', 1800, 'Slender stems with fragrant purple flower spikes.', 'flower', '#6b814e', '#8c62a7'],
    ['rosemary', 'Rosemary', 1200, 'Needle-like foliage with a pine fragrance.', 'grass', '#4f7155', '#8e9f7f'],
    ['peppermint', 'Peppermint', 1000, 'A vigorous herb with a fresh mint fragrance.', 'sprig', '#348257', '#6aa165'],
    ['lemon-balm', 'Lemon Balm', 1100, 'Soft leaves with a light lemon fragrance.', 'sprig', '#668439', '#a4b960'],
    ['sweet-basil', 'Sweet Basil', 1200, 'Broad aromatic leaves for a sunny windowsill.', 'vine', '#448046', '#80a15c'],
    ['chamomile', 'Chamomile', 1300, 'Feathery foliage and small daisy-like flowers.', 'daisy', '#68874c', '#f4d571'],
  ]],
  ['leafy-favorites', 'Leafy favorites', [
    ['monstera', 'Monstera', 2800, 'Large, split leaves on sturdy stems.', 'split', '#357052', '#87a672'],
    ['peace-lily', 'Peace Lily', 2400, 'Deep green leaves and white blooms.', 'flower', '#3a7652', '#fff8e5'],
    ['rubber-plant', 'Rubber Plant', 2500, 'Thick oval leaves with burgundy tones.', 'sprig', '#4b5640', '#9e6d65'],
    ['prayer-plant', 'Prayer Plant', 2100, 'Patterned leaves fold upward in the evening.', 'vine', '#436942', '#d17c79'],
    ['bird-nest-fern', 'Bird’s Nest Fern', 2300, 'Wavy green fronds fan out from a central rosette.', 'grass', '#689548', '#a9b96b'],
    ['arrowhead-plant', 'Arrowhead Plant', 1900, 'Pale arrow-shaped leaves on trailing stems.', 'vine', '#5f895f', '#c3cf9f'],
  ]],
]

function illustration(shape, green, accent, index) {
  const backgrounds = ['#e5eddb', '#f2e9dc', '#e4eee9', '#f5edd6', '#ebe8f0', '#e9efda']
  const leaf = {
    blade: '<path d="M0 0Q-22 -44 0 -96Q22 -44 0 0Z"/><path d="M0 -8V-85" stroke-width="3"/>',
    grass: '<path d="M0 0Q-8 -62 17 -101Q7 -54 0 0Z"/><path d="M0 -7Q-1 -57 15 -96" stroke-width="2"/>',
    sprig: '<path d="M0 0V-86" stroke-width="3"/><ellipse cx="-11" cy="-36" rx="12" ry="8" transform="rotate(28 -11 -36)"/><ellipse cx="11" cy="-50" rx="13" ry="8" transform="rotate(-26 11 -50)"/><ellipse cx="-11" cy="-64" rx="12" ry="8" transform="rotate(27 -11 -64)"/><ellipse cy="-83" rx="9" ry="13"/>',
    vine: '<path d="M0 0Q2 -30 -5 -64" stroke-width="3"/><path d="M-5 -52C-58 -77 -24 -106 -5 -88C15 -109 49 -82 -5 -52Z"/><path d="M-5 -57V-85" stroke-width="2"/>',
    flower: '<path d="M0 0V-93" stroke-width="3"/><path d="M0 -24Q-27 -32 -27 -54Q-8 -53 0 -24M0 -39Q23 -43 23 -62Q7 -62 0 -39"/><ellipse cy="-84" rx="9" ry="19" fill="currentColor"/>',
    daisy: '<path d="M0 0V-85" stroke-width="3"/><path d="M0 -25Q-27 -32 -24 -51Q-10 -49 0 -25"/><circle cy="-85" r="14" fill="#fffdf1"/><circle cy="-85" r="6" fill="currentColor"/>',
    split: '<path d="M0 0V-66" stroke-width="3"/><path d="M0 -41Q-32 -49 -34 -69L-17 -67L-34 -79Q-29 -104 -3 -103Q22 -108 33 -85L15 -77L34 -77Q33 -53 0 -41Z"/><path d="M0 -46V-98" stroke-width="2"/>',
  }[shape]

  const stems = [-50, -26, 0, 25, 49].map((angle, stem) =>
    `<g transform="translate(160 144) rotate(${angle}) scale(${stem % 2 === 0 ? 0.84 : 1.06})">${leaf}</g>`,
  ).join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
    <rect width="320" height="200" fill="${backgrounds[index]}"/>
    <circle cx="160" cy="99" r="74" fill="#fff" opacity=".32"/>
    <ellipse cx="160" cy="181" rx="52" ry="7" fill="#234432" opacity=".13"/>
    <g fill="${green}" stroke="${accent}" color="${accent}" stroke-linecap="round" stroke-linejoin="round">${stems}</g>
    <path d="M129 142h62l-10 36h-42z" fill="#b66c50"/>
    <path d="M139 151h43l-6 24h-30z" fill="#c98262"/>
    <rect x="126" y="139" width="68" height="10" rx="3" fill="#d59471"/>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const categories = catalog.map(([id, name, rows]) => ({
  id,
  name,
  plants: rows.map(([plantId, plantName, price, description, shape, green, accent], index) => ({
    id: plantId,
    name: plantName,
    price,
    description,
    image: illustration(shape, green, accent, index),
  })),
}))
