import Product from "../Product/Product";

import "./Main.scss"

const Main = (props) => {

    const {productsData, likesCounter} = props;

    const products = productsData.map((product) => {
            return (
                <li key={product.id}>
                    <Product productData={product} likesCounter={likesCounter} />
                </li>
            )
    })

    return (
        <main className="main">
            <ul className="main--productsList">
                {products}
            </ul>
        </main>
    )
}

export default Main;