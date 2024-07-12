import React from "react";


const HappyClients = () => {
  return (
    <section className="happyclients" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="300">
      <div className="container headings text-center">
        <h1 className="text-center font-weight-bold">OUR HAPPY CLIENTS</h1>
        <p className="text-center text-captalize pt-1">Our Satisfied Customer Says</p>
      </div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="box">
                  <a href="#"><img  alt="client" className="img-fluid img-thumbnail" /></a>
                  <p className="m-4"><h2>✨Excellence at Every Step💝</h2> We pride ourselves on delivering top-notch service and exceeding expectations.</p>
                  <h1>Anil Bajiya</h1>
                  <h2>Web Developer</h2>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </div>
              </div>
              {/* Repeat the structure for other clients */}
            </div>
          </div>
          {/* Repeat the structure for other carousel items */}
        </div>

        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
};

export default HappyClients;
