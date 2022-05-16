import Product from "../Product/Product";

import "./Main.scss"

const Main = (props) => {

    const {productsData, likesCounter, lastProductRef} = props;

    const products = productsData.map((product, index) => {
        if( productsData.lenght === index + 1) {
            return (
                <li key={product.id}>
                <Product productData={product} likesCounter={likesCounter} lastProductRef={lastProductRef}/>
            </li>
            )
        } else {
            return (
                <li key={product.id}>
                    <Product productData={product} likesCounter={likesCounter} />
                </li>
            )
        }
        
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