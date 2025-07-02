import { Router } from "express";
import productsController from "../controllers/products.controller";

const listProducts = [
  { id: 11, name: 'Product A', price: 100, categoria: 1 },
  { id: 222, name: 'Product B', price: 200, categoria: 2 },
  { id: 33, name: 'Product C', price: 300, categoria: 1 },
];

class ProductsRouter{
  router: Router;
  
  constructor() {
    this.router = Router();
    this.loadRoutes();
  }

  private loadRoutes() {

    // /producto?dato=valor&dato2=valor2 ==> request.query
    // /producto/{dato} ==> request.params

    // Listado de productos
    this.router.get('/', (request, response) => {
      const orden = String(request.query.orden) || 'asc';
      const categoria = Number(request.query.categoria);

      const listProductsFinal = productsController.listarProdutos(categoria, orden)

      response.json(listProductsFinal);
    });

    // Detalle de un producto
    this.router.get('/detail/:idProduct', (req, res) => {
      const idProd = req.params.idProduct;
      const productFound = listProducts.find(item => item.id === parseInt(idProd));
      if (productFound) {
        res.json(productFound);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    })

    // Crear producto
    this.router.post('/', (request, response) => {
      const nombre = request.body.nombre;
      const precio = request.body.precio;
      listProducts.push({ id: listProducts.length + 1, name: nombre, price: precio, categoria: 1 });
      response.json({ message: 'Product created' });
    });

    // Actualizar producto
    this.router.put('/:idProduct', (request, response) => {
      const precio = request.body.precio;
      const idProd = request.params.idProduct;
      const index = listProducts.findIndex(item => item.id === parseInt(idProd));
      if (index === -1) {
        response.status(404).json({ message: 'Product not found' });
      } else {
        listProducts[index].price = precio
        response.json({ message: 'Product updated' });
      }
    })

    this.router.delete('/:idProduct', (request, response) => {
      const idProd = request.params.idProduct;
      const index = listProducts.findIndex(item => item.id === parseInt(idProd));
      if (index === -1) {
        response.status(404).json({ message: 'Product not found' });
      } else {
        listProducts.splice(index, 1); // Eliminar el producto del array
        response.json({ message: 'Product deleted' });
      }
    })
  }
}

const productsRouter = new ProductsRouter();
export default productsRouter.router;