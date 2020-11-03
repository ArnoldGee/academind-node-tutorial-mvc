const products =[]

module.exports = class Product {
  constructor(title){
    this.title = title
  }

  save() {
    products.push(this)
  }
  static fetchAll(){ 
    /* "Static" means that you can call the method before or without having to instantiate the class */
    return products;
  }
}