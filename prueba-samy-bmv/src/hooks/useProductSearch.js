import { useEffect, useState } from "react";

import getPagination from "../services/getPagination";

export default function useProductSearch(query, pageNumber) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        getPagination(pageNumber).then((response) =>{
            setProducts(prevProducts => {
                return [...prevProducts, ...response.map(product => product)]
            })
            setHasMore(response.hasMore)
            console.log(response)
        } )             
    }, [query, pageNumber])
    
  return null;
}