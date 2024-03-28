import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="container mb-0">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mb-0">
    <div className="col-md-4 d-flex align-items-center">
      
      <span className="text-muted">&copy; 2021 Company, FoodPlaza Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      {/* <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#twitter"/></svg></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#instagram"/></svg></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#facebook"/></svg></Link></li> */}
    </ul>
  </footer>
</div>
    )
}
export default Footer