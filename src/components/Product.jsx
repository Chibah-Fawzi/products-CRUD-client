/* eslint-disable react/prop-types */

export default function Product({ product }) {
    return (
        <div>
            <div className="product-card">
                <img src={product.image} alt={product.title} width={200} height={200} />
                <h3>{product.title}</h3>
                <div style={{ display: 'flex' }}>
                    <h6>{product.price}$</h6>
                    <h6>{product?.rating?.rate}</h6>
                    <h6>{product?.rating?.count}</h6>
                </div>
            </div>
        </div>
    )
}
