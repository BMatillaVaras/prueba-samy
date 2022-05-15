import Product from "../Product/Product";


const Main = (props) => {

    const {productsData} = props;

    const products = productsData.map((product) => {
        return (
            <li key={product.id}>
                <Product productData={product} />
            </li>
        )
    })

    return (
        <main>
            {products}
        </main>
    )
}

export default Main;