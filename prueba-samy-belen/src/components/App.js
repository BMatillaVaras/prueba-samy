import { useState, useEffect } from "react";
import getImages from "../services/getImages";
import searchElement from "../services/searchElemnt";
import countLikesPost from "../services/countLikesPost";

import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import getPagination from "../services/getPagination";

function App() {

  const [productsData, setProductsData] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getImages().then((response) => {
        setProductsData(response);
    });
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight  = document.documentElement.offsetHeight;
    if(userScrollHeight >= windowBottomHeight) {
      let page = pageNumber + 1;
      setPageNumber(page)
      getPagination(page).then((response) => {
        setProductsData(...productsData, response);
      })

    }
  }
  
  
  const handleFilter = (data) => {
    setQuery(data);
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
      />
    </div>
  );
}

export default App;
