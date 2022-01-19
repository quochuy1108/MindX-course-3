import { useParams } from 'react-router-dom'

function ProductDetail() {

    const params = useParams()
    console.log(params);

    return (
        <div>
            product list {params.id}
        </div>
    )
}

export default ProductDetail
