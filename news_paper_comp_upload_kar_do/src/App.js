import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/news';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import { preconnect } from 'react-dom';

// class based ka main fayda varible use karne me hota hia jaise 
// c variable bana lia aur class hai to this.c karke usi functiin ka utha lia ,, this se use karne me usi ke variable access ho jate hai 


// export default class App extends Component { // class
const App = ()=> {

  // classs--------------------------------------
  // state = {
  //   progress : 0 
  // }
  // setProgress = (progre)=>{
  //   this.setState({progress:progre})
  // }


  const [progress , setprogress] = useState(0);

  const setProgress = (progre)=>{
    setprogress(progre);
    }
  // api_key= process.env.REACT_APP_NEWS_API
  const api_key='fe902e3b9c7941d0ba506a0afa481323'


//class
  // render() {
    return (
    <Router>
      <Navbar/>
      <LoadingBar
        color="#fa0720"
        progress={progress}
        height={4}
        // onLoaderFinished={() => setProgress(0)}
      />
    <div className="container my-3" >
        <Routes>
          <Route exact path="/" element={<News apikeyy={api_key} setProgress = {setProgress} key="general" pagesize={12} country="us" category="general" />} />
          <Route exact path="/sports" element={<News apikeyy={api_key} setProgress = {setProgress} key="sports" pagesize={12} country="us" category="sports" />} />
          <Route exact path="/science" element={<News apikeyy={api_key} setProgress = {setProgress} key="science" pagesize={12} country="us" category="science" />} />
          <Route exact path="/business" element={<News apikeyy={api_key} setProgress = {setProgress} key="business" pagesize={12} country="us" category="business" />} />
          <Route exact path="/health" element={<News apikeyy={api_key} setProgress = {setProgress} key="health" pagesize={12} country="us" category="health" />} />
          <Route exact path="/technology" element={<News apikeyy={api_key} setProgress = {setProgress} key="technology" pagesize={12} country="us" category="technology" />} />
          <Route exact path="/entertainment" element={<News apikeyy={api_key} setProgress = {setProgress} key="entertainment" pagesize={12} country="us" category="entertainment" />} />
        </Routes>
      </div>
    </Router>
    )
  
}

export default App;

 
//---------------------------------------------------------------




/*
        <Route path="/sports" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="sports" />} />
        <Route path="/science" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="science" />} />
        <Route path="/general" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="general" />} />
        <Route path="/business" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="business" />} />
        <Route path="/health" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="health" />} />
        <Route path="/entertainment" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="entertainment" />} />
        <Route path="/technology" element={<News apikeyy={api_key} setProgress = {setProgress} pagesize={12} country="us" category="technology" />} />

*/

// ye function based component hai , but ek aur hota hia class based component .. ab se usko seekhna hai 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
