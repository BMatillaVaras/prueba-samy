const Product = (props) => {
    return (
        <article>
            <h3>{props.productData.title}</h3>
            <h4>{props.productData.author}</h4>
        </article>
    )
}

export default Product;