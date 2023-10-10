import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import Menu from './components/Menu';
import { Routes,Route } from 'react-router-dom';
import MenuList from './components/menuPage/MenuList';
import SearchResult from './components/menuPage/SearchResult';
import NotFound from './components/NotFound';
function App() {

  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {  
    const fetchData = async () => {
      let response = await fetch('/json/menuItems.json');
      let data = await response.json();
  
      setMenuItems(data); 
    };
   
    console.log("Inside useEffect, App.js")
    fetchData();
  }, []);

  return (
    <div className='container-fluid'>
       <Routes>
      <Route path='/' element={[<Jumbotron/>,<Carousel/>,<Menu items={menuItems}/>]}></Route>
     
        <Route path='/menu' element={<MenuList/>}></Route>
        <Route path='/menu/:searchTerm' element={<SearchResult />}></Route> 
        <Route path='/notfound' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
