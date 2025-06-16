import { Router } from "express";

const listProducts = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
  { id: 3, name: 'Product C', price: 300 }
];

class ProductsRouter{
  router: Router;
  
  constructor() {
    this.router = Router();
    this.loadRoutes();
  }

  private loadRoutes() {

    this.router.get('/', (request, response) => {
      response.json(listProducts);
    });

    // detail/1    ---- detail?id=1&name=ProductA
    this.router.get('/detail/:idProduct', (req, res) => {
      console.log(req.params.idProduct)
      console.log(req.query.name)
    })

    this.router.post('/', (request, response) => {
      response.json({ message: 'Product created' });
    });

    this.router.put('/', (request, response) => {
      response.json({ message: 'Product updated' });
    })

    this.router.delete('/', (request, response) => {
      response.json({ message: 'Product deleted' });
    })
  }
}

const productsRouter = new ProductsRouter();
export default productsRouter.router;