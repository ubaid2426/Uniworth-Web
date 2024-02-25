import React from 'react'
import './ActiveWear.css';
import Svg1 from '../Svg1/Svg1';
import Svg from '../SVG/Svg';
const ActiveWear = (props) => {
  const color1='#000';
  const color2='#ccc';
  return (
    <div className='main'>
      <svg/>
      <div className="section1">
      {/* <div class="bottom" data-negative="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z" fill='#000'></path>
          </svg>  */}
     {/* </div> */}
         {/* <Svg1 main={color2}/> */}
      </div>
      <div className="section2">
      {/* <Svg1 main={color1}/> */}
        <div className="sec-sub">
      {/* <Svg1 main={color2}/> */}
               {/* <Svg/> */}
          <div className="sec-1"><span>Active Wear</span></div>
          <div className="sec-2"><span>Uniworth Active Wear – Not Just Comfort, But Performance! The Core Collection Brings Together A Selection Of Performance Gear And Essentials Catering To The Demand Of A Variety Of Workouts.</span></div>
          <div className="sec-3"><button>Shop Now</button></div>
        </div>
      </div>
      <div className="section3"></div>
    </div>
  )
}

export default ActiveWear;
