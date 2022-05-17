import { useState } from "react";

import likeIcon from "../../images/like_icon.png";
import unlikeIcon from "../../images/unlike_icon.png";
import repostIcon from "../../images/repost_icon.png";

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
                <div className="article--priceContainer">
                  <p className="article--priceContainer__price">{productData.price} €</p>
                </div>
                
                <img src={src} alt={`Imagen de ${productData.title}`} title={`Imagen de ${productData.title}`} className="article--img"/>
                <div className="article--titleContainer">
                    <h3 className="article--titleContainer__title">{productData.title}</h3>
                    <h4 className="article--titleContainer__author">by <span>{productData.author}</span></h4>
                </div>
                <div className="article--iconsContainer">
                    <div className="article--iconsContainer__like">
                        <p className="like--counter">{productData.likes_count}</p>
                        <button onClick={handleClick} className="like--button">
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
                    <div className="article--iconsContainer__repost">
                        <p className="repost--counter">000</p>
                        <button className="repost--button">
                            <img 
                                src={repostIcon} 
                                alt="icono de repost" 
                                title="icono de repost"
                            />
                        </button>
                        
                    </div>
                </div>
            
            </article>
    
        </>
        
        
    )
}

export default Product;