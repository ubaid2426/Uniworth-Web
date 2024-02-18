import React from 'react';
import { Carousel } from 'antd';
import './Main-caurosel.css'
const MainCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <main id='main'>
        <Carousel afterChange={onChange} autoplay >
          <div>
            <span className='contentStyle_Mobile'>
            <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/f961c5d93378765c1200a42e2f9eb74e.jpg" alt="jacket sale"/>
            </span>
            <span className='contentStyle_Desktop'>
            <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"/>
            </span>
          </div>
          <div>
            <span className='contentStyle_Mobile'>
            <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/512f6b7aa82365aa761da7cebce571c8.jpg" alt="shalwar kameez"/>
            </span>
            <span className='contentStyle_Desktop'>
            <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/0f6fcc33650557e4129b71d7bb75f07c.jpg" alt="shalwar kameez"/>
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"/> */}
            </span>
          </div>
          <div>
            <span className='contentStyle_Desktop'>
            <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/fd1a7ccc637a23cbb24bc7a5f5d74d52.jpg" alt="formal Shirt"></img>
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"></img> */}
            </span>
            <span className='contentStyle_Mobile'>
            <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/951343197d9b488c7c469ae416c2f7dd.jpg" alt="formal Shirt"/>
            {/* <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/f961c5d93378765c1200a42e2f9eb74e.jpg" alt="jacket sale"/> */}
            </span>
          </div>
          <div>
            <span className='contentStyle_Mobile'>
            {/* <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/f961c5d93378765c1200a42e2f9eb74e.jpg" alt="jacket sale"/> */}
            {/* <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/951343197d9b488c7c469ae416c2f7dd.jpg" alt="formal Shirt"></img> */}
            <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/4444506a6ff34cd8426a84634eb83440.jpg" alt="jacket"></img>
            </span>
            <span className='contentStyle_Desktop'>
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"></img> */}
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/fd1a7ccc637a23cbb24bc7a5f5d74d52.jpg" alt="formal Shirt"></img> */}
            <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/022fbd3899bb203f6b818d128d2866cf.jpg" alt="jacket"></img>
            </span>
          </div>
        </Carousel>
      </main>
    </div>
  );
};

export default MainCarousel;
