import { useState } from "react";

import likeIcon from "../../images/like_icon.png"
import unlikeIcon from "../../images/unlike_icon.png"

import "./Product.scss"

const Product = (props) => {
    const {productData, likesCounter, lastProductRef, src} = props;

    const [like, setLike] = useState(productData.liked)

    const handleClick =(e) => {
        if (like) {
            setLike(false);
        } else {
            setLike(true);
            likesCounter(e.target.id);
        }
        
    }
    return (
        <>
            <article ref={lastProductRef} className="article">
                <p className="article--price">{productData.price} €</p>
                <img src={src} alt={`Imagen de ${productData.title}`} title={`Imagen de ${productData.title}`} className="article--img"/>
                <div>
                    <h3>{productData.title}</h3>
                    <h4>{productData.author}</h4>
                </div>
                <div>
                    <div>
                        <p>{productData.likes_count}</p>
                        <button onClick={handleClick}>
                        {like ? (
                            <img 
                                src={likeIcon} 
                                alt="icono de un puño con un dedo hacia arriba para dar like" 
                                title="icono de me gusta"
                                id={productData.id}
                            />
                            ) : (
                                <img 
                                src={unlikeIcon} 
                                alt="icono de un puño con un dedo hacia arriba para dar like" 
                                title="icono de me gusta"
                                id={productData.id}
                            />
                            )}
                            
                        </button>
                        
                    </div>
                </div>
            
            </article>
    
        </>
        
        
    )
}

export default Product;