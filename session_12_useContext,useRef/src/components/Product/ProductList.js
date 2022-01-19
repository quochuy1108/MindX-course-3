import React from 'react'
import ProductCard from './ProductCard'

const data = [
    { id: 1, name: "Computer", price: 1000, quantity: 10 },
    { id: 2, name: "Bike", price: 200, quantity: 20 },
    { id: 3, name: "Phone", price: 500, quantity: 100 },
    { id: 4, name: "Car", price: 3000, quantity: 25 },
    { id: 5, name: "Water", price: 5, quantity: 2000 },
]
function ProductList() {
    return (
        <div>
            <p>Total: {data.length}</p>
            <div>
                {data.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList
