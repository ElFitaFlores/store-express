class ProductsService {
  constructor() {
    this.generate()
  }

  generate(){
    this.products = [
      {
        name: 'Product 1',
        quantity: 1
      },
      {
        name: 'Product 2',
        quantity: 2
      },
    ]
  }

  create(){}

  find(){
    return this.products
  }

  findOne(id){
    const product = this.products[id]

    if (!product) {
      throw new Error('Not found')
    }
    return product
  }

  update(){}

  delete(){}
}

module.exports = ProductsService
