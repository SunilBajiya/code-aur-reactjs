import "./FooterStyles.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="titleto">
          <h1>PhotoAlbum</h1>
          <p>Choose your favourite destination.</p>
        </div>

        <div className="soicon">
         <h3>Follow Us On:</h3>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
      <div className="col-lg-2 col-md-4">
        <div className="footer-widget">          
        <h4 className="footer-widget-title">Project</h4> 
          <ul  className="footer-links">
         <li><a href="/">Changelog</a></li> 
        <li> <a href="/">Status</a></li>  
         <li><a href="/">Lincense</a></li> 
         <li><a href="/">All Versions</a></li> 
         </ul>
        </div>
        </div>
        <div className="col-lg-2 col-md-4">
        <div className="footer-widget">
        <h4 className="footer-widget-title">Tour Type</h4>
        <ul className="footer-links">
        <li><a href="#">Wild & Adventure Tours</a></li>
        <li><a href="#">Group Tour</a></li>
        <li><a href="#">Seasonal Tours</a></li>
        <li><a href="#">Relaxation Tours</a></li>
        <li><a href="#">Family Friendly Tours</a></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-2 col-md-4">
        <div className="footer-widget">
        <h4 className="footer-widget-title">Quick Link</h4>
        <ul className="footer-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Tour Package</a></li>
        <li><a href="#">Destination</a></li>
        <li><a href="#">Tour Guide</a></li>
        <li><a href="#">Booking Process</a></li>
        <li><a href="#">Blog</a></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-2 col-md-4">
        <div className="footer-widget">
                <h4 className="footer-widget-title">Other</h4>
                <ul className="footer-links">
               <li> <a href="/">Terms of service</a></li> 
               <li> <a href="/">Privacy Policy</a></li> 
               </ul>
              </div>
            </div>
          </div>
          </div>
  );
};
export default Footer;
