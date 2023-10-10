import { useState,useEffect, useReducer } from 'react';

import ProductList from './ProductList';
import SearchBar from './SearchBar';
import FilterTagBar from './FilterTagBar';


// let reducer= (state,action) =>{
//     switch(action.type){
//         case 'loadProducts':
//             return {...state,foods:action.loadFoods};
//         default:
//             return state;
//     }

// }


const MenuList = () => {
    // const [state,dispatch] = useReducer(reducer,{foods:[]})
    // useEffect(()=>{
    //     getAllProducts().then(foods=>dispatch({type:'loadProducts',loadFoods:foods}))
    //     console.log(state.foods)
    // },[])
    let [foodData,setFoodData] = useState()

    useEffect(() => {
        const getAllProducts = async ()=>{
        let resp =  await fetch('./json/products.json');
        let data = await resp.json();
        setFoodData(data);    
        };
        getAllProducts();
    },[]);
    console.log(foodData)
    return ( 
       <>
       {foodData && <SearchBar foodList={foodData}/>} 
       {<FilterTagBar/>}
      {foodData && <ProductList foodList={foodData}/>} 
       </>
     );
}

 
export default MenuList;