// Main entry point for the restaurant API
// This serves as a simple frontend that documents the API endpoint

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = `
      <div>
        <h1>🏴‍☠️ Restaurant API</h1>
        <p>Ahoy! Welcome to our restaurant API, matey!</p>
        <h2>Available Endpoints:</h2>
        <ul>
          <li><strong>GET /api/menu</strong> - Returns the restaurant menu with 5 delicious items</li>
        </ul>
        <h3>Example Response:</h3>
        <pre id="menu-data">Loading menu...</pre>
        <button id="fetch-menu">Fetch Menu</button>
      </div>
    `;

    const fetchMenuButton = document.getElementById('fetch-menu');
    const menuDataElement = document.getElementById('menu-data');

    fetchMenuButton?.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/menu');
        const menuData = await response.json();
        if (menuDataElement) {
          menuDataElement.textContent = JSON.stringify(menuData, null, 2);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
        if (menuDataElement) {
          menuDataElement.textContent = 'Error loading menu';
        }
      }
    });

    // Auto-fetch menu on load
    fetchMenuButton?.click();
  }
});
