import Header from './Header';
import Footer from './Footer';
import Main from './main';
import './App.css';
import data from './data.json';
import { useState } from 'react';
import Selectedbeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [clickedbeast, setclickedbeast] = useState(data[0]);
  const [displaySelectedBeast, setdisplaySelectedBeast] = useState(false)
 
  // let beastSelect = () =>{
  //   setclickedbeast(clickedbeast)
  // }
  return (
    <div className="App">
      <Header/>
      <Main beastdata={data} setdisplaySelectedBeast={setdisplaySelectedBeast} Selectedbeast={setclickedbeast}/>
      <Selectedbeast clickedbeast={clickedbeast}  displaySelectedBeast={displaySelectedBeast}  setdisplaySelectedBeast={setdisplaySelectedBeast} />
      <Footer/>
    </div>
  );
}

export default App;
