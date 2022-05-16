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

  const observer = useRef();
  const lastProductRef = useCallback( node => {
    console.log(node)
  });

  // useProductSearch(query, pageNumber)

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
        lastProductRef={lastProductRef}
      />
    </div>
  );
}

export default App;
