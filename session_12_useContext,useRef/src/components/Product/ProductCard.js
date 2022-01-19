import { useContext, useRef } from 'react'
import './ProductCard.css'
import LangCtx from '../../Contexts/language'
function ProductCard(props) {
    const langCtxValue = useContext(LangCtx)
    const inputRef = useRef(null)
    return (
        <div className="product-card-container">
            <div>
                <span>{langCtxValue.lang === 'en' ? 'Product name: ' : "Tên sản phẩm: "}</span>
                <span>{props.name}</span>
            </div>
            <div>
                <span>{langCtxValue.lang === 'en' ? 'Price: ' : "Giá: "}</span>
                <span>{props.price}</span>
            </div>
            <div>
                <span>{langCtxValue.lang === 'en' ? 'Quantity: ' : "Số lượng: "}</span>
                <span>{props.quantity}</span>
            </div>
            <div>
                <input type="text" ref={inputRef} placeholder="Product Note" />
            </div>
            <div>
                <button
                    onClick={() => { inputRef.current.focus() }}
                >{langCtxValue.lang === 'en' ? 'Add to Cart ' : "Thêm vào giỏ hàng "}</button>
            </div>

        </div>
    )
}

export default ProductCard
