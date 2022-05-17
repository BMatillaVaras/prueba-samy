import Product from "../Product/Product";

import "./Main.scss"

const Main = (props) => {

    const {productsData, likesCounter, loading, error, lastProductRef} = props;

    const products = productsData.map((product, index) => {
        if(productsData.length === index + 1) {
            return (
                <li key={product.id}>
                <Product 
                    productData={product} 
                    likesCounter={likesCounter} 
                    lastProductRef={lastProductRef}
                    src={product.image}
                />
            </li>
            )
        } else {
            return (
                <li key={product.id}>
                    <Product productData={product} likesCounter={likesCounter} src={product.image} />
                </li>
            )
        }
        
    })

    return (
        <main className="main">
            <ul className="main--productsList">
                {products}
            </ul>
            <p>{loading && "Cargando... "}</p>
            <p>{error && "Se ha producido un error"}</p>
            
        </main>
    )
}

export default Main;