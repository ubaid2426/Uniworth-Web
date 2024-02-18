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
function App() {
  return (
    <>
     <Navbar/>
  <Maincaurosel/>
    <Main/>
    {/* <CardDisplay/> */}
    {/* <NewArrival/> */}
    <Responsive/>
    {/* <Card1/> */}
    <ActiveWear/>
      <BrowseMore/>
    {/* <Main/> */}
    {/* <Card/> */}
    {/* <Accessories/> */}
    {/* <Winter/> */}
   <Shiping/>
   {/* <Shirt/> */}
   {/* <Main1/> */}
   <Maincard/>
    </>
  );
}

export default App;
