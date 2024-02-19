import React from 'react'
import Logo from '../../Images/SVG/10001.svg'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='section'>
      <div className="section-main-1">
        <div className="sec1-1">
            <div className="sec1-1-1"><span>KNOW IT ALL FIRST!</span></div>
            <div className="sec1-1-2"><span>Never Miss Anything From Uniworth By Signing Up To Our Newsletter.</span></div>
        </div>
        <div className="sec1-2">
            <div className="sec1-2-1"><input placeholder='Enter Your Email' type="text" /></div>
            <div className="sec1-2-2"><button>Subcribe</button></div>
        </div>
      </div>
      <div className="section-main-2">
        <div className="sec2-1">
            <div className="sec2-1-1">
            <img alt="Uniworth" src="https://uniworthshop.com/ui/images/icon/logo.svg"/>
                </div>
            <div className="sec2-1-2"><span id='uni-para'>Uniworth is a menswear brand, designed entirely in-house, stand-alone Pakistan’s no. 1 Shirt Brand. From timeless tailoring to premium formal shirts, we present a considered edit of quality, wearable clothes, and accessories bearing the Uniworth name.</span></div>
            <div className="sec2-1-3">
                <ul>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaTiktok /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
        <div className="sec2-2">
            <div className="sec2-2-1"><span>Informations</span></div>
            <div className="sec2-2-2">
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">How to order</a></li>
                    <li><a href="#">Size Guide</a></li>
                    <li><a href="#">Return & Exchange Policy</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
        <div className="sec2-3">
            <div className="sec2-3-1"><span>Customer Services</span></div>
            <div className="sec2-3-2">
            <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Payment Option</a></li>
                    <li><a href="#">FAQ'S</a></li>
                    <li><a href="#">Made to Measure</a></li>
                    <li><a href="#">Made To Measure Store</a></li>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Loyalty Card</a></li>
                </ul>
            </div>
        </div>
        <div className="sec2-4">
            <div className="sec2-4-1"><span>Store Information</span></div>
            <div className="sec2-4-2">
            <ul>
                    <li><a href="#"><FaPhoneAlt />+92 307 1234567</a></li>
                    <li><a href="#">+92 307 1234567</a></li>
                    <li><a href="#">7017889@UOL.edu.pk</a></li>
                    <li><a href="#">Mon-Sat: (10:00AM To 06:00PM)</a></li>
                    <li><a href="#">Made to Measure</a></li>
                    <li><a href="#"><button>Find Our Store</button></a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="section-main-3">
        <div className="sec3-1"><span>UNIWORTH DRESS CO. All Rights Reserved.</span></div>
        <div className="sec3-2">
            <div className="sec3-2-1"><span>100% Safe Checkout</span></div>
            <div className="sec3-2-2">Logo Payments</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
