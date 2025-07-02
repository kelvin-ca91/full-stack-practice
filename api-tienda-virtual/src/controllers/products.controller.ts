const listProducts = [
  { id: 11, name: 'Product A', price: 100, categoria: 1 },
  { id: 222, name: 'Product B', price: 200, categoria: 2 },
  { id: 33, name: 'Product C', price: 300, categoria: 1 },
];

class ProductsController{
  
  listarProdutos(categoria:number, orden:string) { 
    let _listProducts = [...listProducts]; // Copia del array original
    if (categoria) {
      // Filtrar productos por categoría
      _listProducts = _listProducts.filter(item => item.categoria === categoria);
    }

    // Ordenar productos
    const sortedProducts = _listProducts.sort((a, b) => {
      if (orden === 'asc') {
        return a.id - b.id; // Ascendente
      } else if (orden === 'desc') {
        return b.id - a.id; // Descendente
      }
      return 0; // Sin orden específico
    });
    return sortedProducts;
  }

}
export default new ProductsController()