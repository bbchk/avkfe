
// import { DB_PORT, DB_DOMAIN } from '@/config/constants';
// const database_url = `http://${DB_DOMAIN}:${DB_PORT}`;
const database_url = `http://localhost:8080`;

const fetchProducts = async () => {
  const response = await fetch(`${database_url}/products`);

  if (!response.ok) {
    // TODO: introduce custom errors
    throw new Error('Failed to get products');
  }

  return await response.json();
};

export { fetchProducts };
