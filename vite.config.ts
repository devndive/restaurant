import { defineConfig } from 'vite';

// Menu data for the API
const MENU_ITEMS = [
  { id: 1, name: 'Grilled Salmon', price: 24.99 },
  { id: 2, name: 'Beef Steak', price: 32.5 },
  { id: 3, name: 'Caesar Salad', price: 14.99 },
  { id: 4, name: 'Pasta Carbonara', price: 18.99 },
  { id: 5, name: 'Chocolate Cake', price: 8.99 },
];

export default defineConfig({
  configureServer(server) {
    server.middlewares.use('/api/menu', (req, res, next) => {
      if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(JSON.stringify(MENU_ITEMS));
      } else {
        next();
      }
    });
  },
});
