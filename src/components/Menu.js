import MenuItem from "./MenuItem";

const Menu = (props) => {

    let menuItemsArray = props.items; 
    console.log("Inside Menu");
    console.log(menuItemsArray); 

    return ( <>
    <div className="container text-center my-5">
            <h4 className="mb-4">Explore our Menu</h4>
            {menuItemsArray.map((menuItem) => {
                <MenuItem item ={menuItem}/>
                console.log(menuItem); 
            })}
        </div>
    </> );
}
 
export default Menu;