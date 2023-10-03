const Carousel = () => {
    return (<>
    <div className="container my-5">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="./img/carousel/pizza.png" className="w-100 d-block" alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Pizzas are offered by the slice or whole.</h5>
                          </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel/salads.webp" className="w-100 d-block" alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>A refreshing salad to go along with your meal.</h5>
                          </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel/sandwiches.webp" className="w-100 d-block" alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Sandwiches are offered by half or whole. Comes with a side!</h5>
                          </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>  );
}
 
export default Carousel;