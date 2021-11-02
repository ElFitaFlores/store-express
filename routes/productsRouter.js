const express = require('express')
const router = express.Router()

const products = [
  {
    name: 'Product 1',
    quantity: 1
  },
  {
    name: 'Product 2',
    quantity: 2
  },
]

router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json(products[id])
})

module.exports = router
