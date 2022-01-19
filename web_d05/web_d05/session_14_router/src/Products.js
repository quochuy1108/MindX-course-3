import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="product-item">{product.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
