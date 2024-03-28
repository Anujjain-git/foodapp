import React from "react";
import { Link } from "react-router-dom";

function Carousal() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" id ="carousel">
  <div class="carousel-caption" style={{zIndex:"10"}}>
        <form className="d-flex">
            <input className="form-control me-2 bg-dark" style={{"color": "white"}} type ="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" style={{backgroundColor: "success"}}>Search</button>

        </form>
      </div>
    <div className="carousel-item active">
      <img height="400px" src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" style={{filter: "brightness(30%"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img height="400px" src="https://images.unsplash.com/photo-1494415859740-21e878dd929d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMGhkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" style={{filter: "brightness(30%"}}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img height="400px" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" style={{filter: "brightness(30%"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousal