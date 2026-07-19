// axios ki zarurat nahi hai

const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products?limit=100`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

export async function getSingleProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return await res.json();
}
