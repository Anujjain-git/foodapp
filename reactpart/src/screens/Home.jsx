import Navbarreal from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";

function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCar] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch(`${window.location.origin}/api/foodData`, {
            method: "Post",
            headers: {
                "Content-Type": 'application/json'
            }
        });

        response = await response.json();
        setFoodCar(response[1]);
        setFoodItem(response[0]);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <Navbarreal />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div class="carousel-caption" style={{ zIndex: "10", marginBottom: "50px" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2 border-success bg-dark" style={{ color: "green", backgroundColor:"transparent" }} type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e)=>{setSearch(e.target.value)}}  />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img height="760px" 

                        src = "https://themewagon.github.io/food-funday/images/blog_bg.jpg" style={{ filter: "brightness(50%", backgroundPosition:"center" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img height="760px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Indian-Food-wikicont.jpg/1024px-Indian-Food-wikicont.jpg" style={{ filter: "brightness(50%", backgroundPosition:"center" }} className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img height="760px" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg" style={{ filter: "brightness(50%", backgroundPosition:"center" }} className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img height="760px" src="https://themewagon.github.io/food-funday/images/newsletter-bg.jpg" style={{ filter: "brightness(50%", backgroundPosition:"center" }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container">
                {
                    foodCat.length !== 0 ? foodCat.map((data) => {
                        return (
                            <div className="row mb-3">
                                <div key={data._id} className="fs-3 text-success m-3">
                                    {data.CategoryName}
                                </div>

                                <hr className="bg-success"/>

                                {foodItem.length !== 0 ? foodItem.filter((item) =>( item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())) ).map(filterItems => {
                                    return (
                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                            <Card
                                            
                                                foodItem = {filterItems}
                                                options = {filterItems.options[0]}
                                            />
                                        </div>
                                    )
                                }) :
                                    <div>No Such Data Found</div>
                                }
                            </div>
                        )
                    })
                        : <div>""""</div>
                }

            </div>
            < Footer />
        </div>
    )
}
export default Home

