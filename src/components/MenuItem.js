const MenuItem = (props) => {

    console.log("Inside MenuItem"); 

    console.log(props.id + " " + props.name);

    return (<>
        <div className="row" >
            <div className="col-sm-4 menu-item" key={props.item.id}>
                <a href="#" className="hover-underline-animation">
                    <img src={`${props.item.image}`} alt="menu item" />
                    <p>{props.item.name}</p>
                </a>

            </div>
        </div>
    </>  );
}
 
export default MenuItem;