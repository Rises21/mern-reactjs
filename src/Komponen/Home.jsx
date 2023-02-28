import React from "react";
import { TelephoneFill, Whatsapp, Github, EnvelopeAtFill } from 'react-bootstrap-icons';
import { profile, portofolio1} from "../assets/index.js";
function Home() {
  return (
    <>
      <div id="imageHome" className="container-fluid text-center">        
        <figure class="figure mx-auto p-4">
          <img src={profile} class="figure-img img-fluid rounded-circle shadow mx-auto" alt="profile.png" width="200px" />
          <figcaption style={{fontSize: "1.5em",color:"#205295"}} class="figure-caption">Bangkit Setio R</figcaption> 
          <div className="d-flex gap-4">
            <span><TelephoneFill size={20} color="#205295" /> +6283870952393</span>
            <span><Whatsapp size={20} color="#23ff6c" /><a style={{textDecoration: "none",color:"inherit"}} href="htttp://wa.me/6283870952393"> +6283870952393</a></span>    
          </div>
          <div className="d-flex flex-column gap-1 mt-2">
            <span><Github size={20} color="#205295" /><a style={{textDecoration: "none",color:"inherit"}} href="https://github.com/Rises21"> https://github.com/Rises21</a></span>
            <span><EnvelopeAtFill size={20} color="#205295" /> bangkitsetio22@gmail.com</span>
          </div>
        </figure>
    <div className="m-5 p-5 mt-0">
      <h2>My Portofolio</h2><hr />  
      <div className="d-flex justify-content-around flex-wrap gap-2">
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={portofolio1} alt="portofolio1.png" />
          <div className="card-body">
            <h5 className="card-title">Portofolio Website</h5>
            <p className="card-text">Make Portofolio Website using React based CRA Template and styling using Bootstrap.</p>
            <a href="https://mern-reactjs.onrender.com/" target={"_blank"} className="btn btn-secondary">See More Details...</a>
          </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="..." alt="Cooming Soon..." />
          <div className="card-body">
            <h5 className="card-title">Cooming Soon...</h5>
            <p className="card-text">Don't worry i'll be right back with Greatest Portofolio.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a>  */}
          </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="..." alt="Cooming Soon..." />
          <div className="card-body">
            <h5 className="card-title">Cooming Soon...</h5>
            <p className="card-text">Don't worry i'll be right back with Greatest Portofolio.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a>  */}
          </div>
        </div>
      </div>      
    </div>

    </div>


    </>

    );
}

export default Home;
