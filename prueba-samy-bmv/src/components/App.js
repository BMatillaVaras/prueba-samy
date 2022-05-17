import { useState, useEffect, useRef, useCallback } from "react";
import getImages from "../services/getImages";
import searchElement from "../services/searchElemnt";
import countLikesPost from "../services/countLikesPost";

import useProductSearch from "../hooks/useProductSearch";

import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {

  const [productsData, setProductsData] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const {loading, error, products, hasMore} = useProductSearch(query, pageNumber);

  const observer = useRef();
  const lastProductRef = useCallback( node => {
    if (loading) return ;
    // console.log(observer.current)
    // if (observer.current) observer.current.disconnect()
    // observer.current = new IntersectionObserver(entries => {
    //   if (entries[0].isIntersecting && hasMore) {
    //     setPageNumber(prevPageNumber => pervPageNumber + 1)
    // })
    if (node) observer.current.observer(node)
    console.log(node)
  }, [loading.hasMore]);



  useEffect(() => {
    getImages().then((response) => {
        setProductsData(response);
    });
  }, [])
  
  
  const handleFilter = (data) => {
    setQuery(data);
    setPageNumber(1);
    searchElement(data).then((response) => {
      setProductsData(response)
    })
  }

  const likesCounter = (id) => {
    countLikesPost(id);
  }

  return (
    <div className="app">
      <Header handleFilter={handleFilter} query={query}/>
      <Main 
        productsData={productsData} 
        likesCounter={likesCounter} 
        loading={loading}
        error={error}
        lastProductRef={lastProductRef}
      />
    </div>
  );
}

export default App;
