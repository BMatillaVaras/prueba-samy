import { useState } from "react";

import likeIcon from "../../images/like_icon.png"
import unlikeIcon from "../../images/unlike_icon.png"

const Product = (props) => {
    const {productData, likesCounter} = props;

    const [like, setLike] = useState(props.liked)

    const handleClick =(e) => {
        if (like) {
            setLike(false);
        } else {
            setLike(true);
            likesCounter(e.target.id);
        }
        
    }
    return (
        <article>
            <p>{productData.price} €</p>
            <img src={productData.image} alt={`Imagen de ${productData.title}`} title={`Imagen de ${productData.title}`}/>
            <div>
                <h3>{productData.title}</h3>
                <h4>{productData.author}</h4>
            </div>
            <div>
                <div>
                    <p>{productData.likes_count}</p>
                    <button id={productData.id} onClick={handleClick}>
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
    )
}

export default Product;