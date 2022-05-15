import { useState, useEffect } from "react";
import getImages from "../services/getImages";

import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getImages().then((response) => {
        setProductsData(response);
    });
  }, [])

  return (
    <div className="App">
      <Header />
      <Main productsData={productsData}/>
    </div>
  );
}

export default App;
