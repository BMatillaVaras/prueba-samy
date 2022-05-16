import { useState, useEffect } from "react";
import getImages from "../services/getImages";
import searchElement from "../services/searchElemnt";
import countLikesPost from "../services/countLikesPost";

import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getImages().then((response) => {
        setProductsData(response);
    });
  }, [])

  const handleFilter = (data) => {
    searchElement(data).then((response) => {
      setProductsData(response)
    })
  }

  const likesCounter = (id) => {
    countLikesPost(id);
  }

  return (
    <div className="app">
      <Header handleFilter={handleFilter}/>
      <Main productsData={productsData} likesCounter={likesCounter}/>
    </div>
  );
}

export default App;
