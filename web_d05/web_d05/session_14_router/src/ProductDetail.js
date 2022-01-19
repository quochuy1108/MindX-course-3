import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return <div>This is product {params.id} detail page</div>;
};

export default ProductDetail;
