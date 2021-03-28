const Product = ({product}) => {
    const {N: name, C: coast, P: left} = product 
    return (
        <div className="product__container">
            <div className="product-name">{name} ({left})</div>
            <div className="product-coast">{coast}</div>
        </div>
    )
}
export default Product