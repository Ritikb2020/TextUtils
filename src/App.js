import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1500);
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - light Mode';
    }
  }

  return (
    <>
    <Router>
<Navbar title={"TextUtils"} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
  {/* <Switch> old syntax for react router
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/">
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
    </Route>
  </Switch> */}
  <Routes>
    <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />          
    <Route exact path="/about" element={<About />} /> 
  </Routes>
</div>
</Router>
    </>
  );
}

export default App;

