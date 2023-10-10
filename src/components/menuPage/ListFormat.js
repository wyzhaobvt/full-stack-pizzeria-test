const ListFormat = (props) => {
    return ( 
        props.tagArr
        .map((tag)=>{
            return(
                <div id={tag} className="mx-2 mt-4 mb-5">
                <h3 className="m-2">{tag.toUpperCase()}</h3>
                <div class="scrollMenu">
                {props.foodList.filter(item=>item.tag===tag).map(filterPro=> (
                <div class="cardProduct card  rounded-0 border-light-subtle" style={{"width":"15rem"}}>
                <img src={`/img/productList/${filterPro.image}`} class="card-img-top rounded-0" alt="..."/>
                <button className="btn btn-danger  addBtn d-inline px-3 py-1 mt-0 mx-0 rounded-1">Add</button>
                <div class="card-body">
                    <p class="card-text fw-bold mb-1">{filterPro.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <p class="card-text text-body fw-semibold d-inline mb-0">{filterPro.price}</p>   
                </div>
                </div>
                </div>))}
 </div>
  </div>)}
   )
     );
}
 
export default ListFormat;