
import { useLocation, useParams } from "react-router-dom"
import ListFormat from "./ListFormat"
import FilterTagBar from "./FilterTagBar"
import SearchBar from "./SearchBar"



const SearchResult = () => {
    let loca = useLocation()
    let params = useParams()
    let searchFilterArr = loca.state
    let tagArr = Array.from (new Set(searchFilterArr.map(food=>food.tag)))
    let searchTerm = params.searchTerm
    
    
    return ( <>
      
      {<SearchBar value={searchTerm}/>} 
      <ListFormat tagArr={tagArr} foodList={searchFilterArr}/>
      </>
         ) }
 
export default SearchResult;