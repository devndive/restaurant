# 🏴‍☠️ Restaurant API

Ahoy! This be a TypeScript-based restaurant API that serves up a delicious menu for ye hungry developers!

## Features

- **Single API Endpoint**: `GET /api/menu` - Returns 5 restaurant menu items
- **TypeScript**: Full type safety for all the code
- **Testing**: Comprehensive test suite with Vitest
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier for consistent code style
- **Development Server**: Vite dev server with hot reload

## API Endpoint

### GET /api/menu

Returns an array of 5 menu items, each containing:
- `id` (number): Unique identifier for the menu item
- `name` (string): Name of the dish
- `price` (number): Price of the dish

**Example Response:**
```json
[
  { "id": 1, "name": "Grilled Salmon", "price": 24.99 },
  { "id": 2, "name": "Beef Steak", "price": 32.50 },
  { "id": 3, "name": "Caesar Salad", "price": 14.99 },
  { "id": 4, "name": "Pasta Carbonara", "price": 18.99 },
  { "id": 5, "name": "Chocolate Cake", "price": 8.99 }
]
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:5173/api/menu
   ```

4. **View the API documentation:**
   Open your browser to `http://localhost:5173` to see the API documentation page.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Lint the code
- `npm run lint:fix` - Lint and fix issues
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── index.tsx          # Main entry point with API documentation page
├── menu.test.ts       # Tests for menu data structure
└── api.test.ts        # Integration tests for API

Configuration files:
├── vite.config.ts     # Vite configuration with API middleware
├── vitest.config.ts   # Vitest testing configuration
├── tsconfig.json      # TypeScript configuration
├── eslint.config.js   # ESLint configuration
└── .prettierrc        # Prettier configuration
```

## Testing

The project includes comprehensive tests that verify:
- Menu contains exactly 5 items
- Each item has required properties (id, name, price)
- All IDs are unique
- Data types are correct
- Values are reasonable

Run tests with:
```bash
npm test
```

## Development

The API endpoint is implemented as Vite middleware in `vite.config.ts`. The menu data is served directly from the development server, making it easy to modify and test during development.

Arrr! Happy coding, matey! 🏴‍☠️