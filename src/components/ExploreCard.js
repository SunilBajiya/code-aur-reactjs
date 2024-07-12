import "./ExploreCard.css";
import React  from "react";

function ExploreCard() {
  return (
    <section style={{ marginBottom: '130%' ,marginTop :'20px'}} className="pricing" id="pricingdiv" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="200">
  <div className="container headings">
    <h1 style={{ color: '#fff', textAlign: 'center' }}>OUR BEST Explore. Experience. Enjoy.</h1>
    <p style={{ color: '#fff', textAlign: 'center' }}>🌍 Tour Packages Starting from ₹3000/Person</p>
  </div>
  <div className="container" style={{  marginTop :'20px'}} >
    <div className="row"  style={{ margin: '90px' }} >
      <div className="col-lg-4 col-12 card-second">
        <div style={{margin :'80px'}} className="card text-center">
          <img src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="Tour Image" style={{ width: '100%', height: '40vh' }}  />
          <div  className="card-header">TOUR PACKAGE <p>Limited slots available. Don't miss out on this incredible opportunity!</p></div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">₹<span className="money">4000</span>/person</li>
              <li className="list-group-item">Scenic Locations</li>
              <li className="list-group-item">Transportation Included</li>
              <li className="list-group-item">Expert Guides</li>
              <li className="list-group-item">24/7 Customer Support</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-info ml-2" data-toggle="tooltip" data-placement="top" title="More Information">
              <i style={{ color: '#000' }} className="fas fa-share-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12 card-second">
        <div style={{margin :'80px'}} className="card text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVxd8IjvUO7w3ezdKLe-xSQw7tVqrTCIEr9kVwckutUu3oYNE4f2OuhsDEQ&s" className="card-img-top" alt="Tour Image" style={{ width: '100%', height: '40vh' }}  />
          <div className="card-header">TOUR PACKAGE <p>Limited slots available. Don't miss out on this incredible opportunity!</p></div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">₹<span className="money">3500</span>/person</li>
              <li className="list-group-item">Scenic Locations</li>
              <li className="list-group-item">Transportation Included</li>
              <li className="list-group-item">Expert Guides</li>
              <li className="list-group-item">24/7 Customer Support</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-info ml-2" data-toggle="tooltip" data-placement="top" title="More Information">
              <i style={{ color: '#000' }} className="fas fa-share-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12 card-second" style={{ height: 50 }}>
        <div style={{margin :'80px'}} className="card text-center">
          <img src="data:image/jpeg;base64,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
          Xi11ZL5cRQq3qOtc1yvVyx9FD0//9k=" className="card-img-top" alt="Tour Image" style={{ width: '100%', height: '40vh' }}  />
          <div className="card-header">TOUR PACKAGE <p>Limited slots available. Don't miss out on this incredible opportunity!</p></div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">₹<span className="money">6000</span>/person</li>
              <li className="list-group-item">Scenic Locations</li>
              <li className="list-group-item">Transportation Included</li>
              <li className="list-group-item">Expert Guides</li>
              <li className="list-group-item">24/7 Customer Support</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="More Information">
              <i style={{ color: '#000' }} className="fas fa-share-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default ExploreCard;

