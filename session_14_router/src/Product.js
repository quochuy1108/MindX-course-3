import { Link } from 'react-router-dom'
import './Product.css'
function Product() {

    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
    ]

    return (
        <div>
            <h1>This is my Product List</h1>
            {products.map(product => {
                return (
                    <Link key={product.id} to={`/product/${product.id}`}><div className="product-item">{product.name}</div></Link>
                )
            })}


        </div>
    )
}



export default Product
