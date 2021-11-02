const express = require('express')
const router = express.Router()
const ProductService = require('../services/productsService')

const service = new ProductService()

router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const product = service.findOne(id)
    res.json(product)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
})

module.exports = router
