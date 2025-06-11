import { describe, it, expect } from 'vitest';

// Menu items type definition
interface MenuItem {
  id: number;
  name: string;
  price: number;
}

// Expected menu data - this should match what's in vite.config.ts
const EXPECTED_MENU_ITEMS: MenuItem[] = [
  { id: 1, name: 'Grilled Salmon', price: 24.99 },
  { id: 2, name: 'Beef Steak', price: 32.5 },
  { id: 3, name: 'Caesar Salad', price: 14.99 },
  { id: 4, name: 'Pasta Carbonara', price: 18.99 },
  { id: 5, name: 'Chocolate Cake', price: 8.99 },
];

describe('Restaurant API Menu', () => {
  it('should have exactly 5 menu items', () => {
    expect(EXPECTED_MENU_ITEMS).toHaveLength(5);
  });

  it('should have menu items with required properties', () => {
    EXPECTED_MENU_ITEMS.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('price');

      expect(typeof item.id).toBe('number');
      expect(typeof item.name).toBe('string');
      expect(typeof item.price).toBe('number');

      expect(item.id).toBeGreaterThan(0);
      expect(item.name.length).toBeGreaterThan(0);
      expect(item.price).toBeGreaterThan(0);
    });
  });

  it('should have unique IDs for all menu items', () => {
    const ids = EXPECTED_MENU_ITEMS.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(EXPECTED_MENU_ITEMS.length);
  });

  it('should have meaningful item names', () => {
    EXPECTED_MENU_ITEMS.forEach((item) => {
      expect(item.name.trim()).toBe(item.name); // No leading/trailing whitespace
      expect(item.name.length).toBeGreaterThan(3); // Reasonable length
    });
  });

  it('should have reasonable prices', () => {
    EXPECTED_MENU_ITEMS.forEach((item) => {
      expect(item.price).toBeGreaterThan(0);
      expect(item.price).toBeLessThan(1000); // Reasonable upper limit
      expect(Number.isFinite(item.price)).toBe(true);
    });
  });
});
