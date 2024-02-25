// import logo from './logo.svg';
// import { Card } from 'antd';
import './App.css';
import Maincaurosel from'./components/Main-caurosel/Maincaurosel';
import Navbar from './components/Navbar/Navbar'
// import CardDisplay from './components/CardDisplay/CardDisplay';
import Main from './components/Main/Main';
import Responsive from './components/NewArrival/Responsive';
// import Card1 from './components/Card1/Card1';
import ActiveWear from './components/ActiveWear/ActiveWear';
// import background1 from './Images/New_Arrivals_front/10002.webp'
// import Card from './components/Card/Card';
// import Shirt from './components/Shirt/Shirt';
// import Accessories from './components/Accessories/Accessories';
// import Winter from './components/Winter-collection/Winter';
import Shiping from './components/Shiping/Shiping';
import BrowseMore from './components/BrowseMore/BrowseMore';
// import Main1 from './components/Main1/Main1';
import Maincard from './components/Maincard/Maincard';
import Footer from './components/Footer/Footer';
import Svg from './components/SVG/Svg';
import Svg1 from './components/Svg1/Svg1.jsx'
function App() {
  const color1='#ccc';
  const color2='#fff';
  const color3='#000';
  return (
    <>
     <Navbar/>
  <Maincaurosel/>
  {/* <Svg main={color1} /> */}
    <Main/>
    {/* <Svg1 main={color2}/> */}
    <Svg1 main={color1} />
    <Responsive/>
  <Svg1 main={color1}/>
    <ActiveWear/>
    <Svg main={color2} id='select'/>
      <BrowseMore/>
    {/* <Main/> */}
    {/* <Card/> */}
    {/* <Accessories/> */}
    {/* <Winter/> */}
   {/* <Shiping/> */}
   {/* <Shirt/> */}
   {/* <Main1/> */}
   {/* <Maincard/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
