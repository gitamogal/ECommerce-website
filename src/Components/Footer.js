import React from 'react'
import './Footer.css';
import About from '../pages/About';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="footer">
            <h4>Ajio</h4 >
            <div className="footer-para">
              <p><a href="#">Join Our Team</a></p>
              <p><a href="#">Terms & Conditions</a></p>
              <p><a href="#">We Respect Your Privacy</a></p>
              {/* <Link <a href="#">Fees & Payments</a></link> */}
             <Link className='payment' to={'./payment'}>  <a className="nav-link active" aria-current="page" href="#">Payments</a></Link>
              <p><a href="#">Returns & Refunds Policy</a></p>
            </div>
          </div>
          <div className="footer">
            <h4>Help</h4 >
            <div className="footer-para">
              <p><a href="#">Track Your Order</a></p>
              <p><a href="#">Frequently Asked Questions</a></p>
              <p><a href="#">Returns</a></p>
              <p><a href="#">Cancellation</a></p>
              <p><a href="#">Payments</a></p>
              <p><a href="#">Customer Care</a></p>
            </div>
          </div>
          <div className="footer">
            <h4>Shop by</h4>
            <div className="footer-para">
              <p><a href="#">Men</a></p>
              <p><a href="#">Women</a></p>
              <p><a href="#">Kids</a></p>
              <p><a href="#">Indie</a></p>
              <p><a href="#">Stores</a></p>
              <p><a href="#">New Arrivals</a></p>
              <p><a href="#">Brand Directory</a></p>
              <p><a href="#">Home</a></p>
              <p><a href="#">Collection</a></p>
            </div>
          </div>
          <div className="footer">
            <div className='FooterList'>
              <h4>Follow us</h4>
              <p><Link className='style' to={'./About'}style={{color: "Black"}}> About Us</Link> </p>
              <p><Link className='style' to={''}style={{color: "Black"}}> Contact Us</Link> </p>
              <p><Link className='style' to={'./Privacy'}style={{color: "Black"}}> Privacy</Link> </p>
              <p><Link className='style' to={''}style={{color: "Black"}}> Terms</Link> </p>
            </div>
            <div className="icon-img">
              <img
                src={require('./image/facebook.png')} alt="logo" width="30px" height="25px"
                className="ficon"
              />
              <img
                src={require('./image/instagram.png')} alt="logo" width="30px" height="25px"
                className="ficon"
              />
              <img
                src={require('./image/twitter.png')} alt="logo" width="30px" height="30px"
                className="ficon"
              />
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="footerend">
        <p><a href="#" />copyright © | Design & Develop By <b> Gita Mogal</b></p>
      </div>
    </>
  )
}

export default Footer