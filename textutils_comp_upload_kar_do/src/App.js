import React , {useState} from 'react';
import './App.css';

import About from './Components/about';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {

  const [darkmode , setdarkmode] = useState('light');

  const togglemode = ()=>{
    if(darkmode === 'light'){
      setdarkmode('dark');
      document.body.style.backgroundColor = '#2b2b2b' ;
      Showalert("Dark mode has been enabled" , "success")
      // document.title   = 'Textutils - Dark Mode' // baar baar title kaon change karta hai 
    }
    else{
      setdarkmode('light'); 
      document.body.style.backgroundColor = 'white' ;
      Showalert("Light mode has been enabled" , "success")
      // document.title   = 'Textutils - Light Mode'
    }
  }

  const [alert , setAlert] = useState(null);

  const Showalert = (massege  , type)=>{
    setAlert({
      msg : massege , 
      type : type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    // these are below is JSX language 
    // compiled by babel
    //--- agar kuch as a argument dia jaye to usko jaise c++ me argument kahte hia isme prop kahte hia , jaise isme title pass kar rahe hai 
    //mode ki help se argument die jate hai ,, naam kuch bhi ho sakta hai
    <Router>
    <Navbar title="Textutiles" toggle={togglemode} mode={darkmode} about="About Textutils"/>
    <Alert alert={alert}/>
    <div className="container my-3" >
        <Routes>
          <Route exact path="/" element={<Textform Showalert={Showalert} heading="Try textutils - word counter , charactor counter" mode={darkmode}/>} />
          <Route exact path="/about" element={<About mode={darkmode}/>} />
        </Routes>
      </div>
    </Router>
     
   
  );
}

export default App;

// exact me ye hota hia ki agar aap user/path aur user pe jane wale ho to kabhi 
// vo user ko render na kar de user/path pe to uske lie exact use hota hai 
