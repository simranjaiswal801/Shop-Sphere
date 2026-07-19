export const formatPrice = (price) => {
  return `₹${Math.round(price * 86).toLocaleString("en-IN")}`;
};



// USE this function in ProductCard.jsx to format the price instead of directly calculating it there.

// import { formatPrice } from "../utils/formatPrice";

// <h3>{formatPrice(product.price)}</h3>;