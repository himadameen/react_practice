import logo from './logo.svg';
import './App.css';
import './css/myStyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Test from './Test';
import Home from './Home';
import Cricket from './Cricket';
import Bollywood from './Bollywood';
import LiftState from './LiftState';
import EMI from './emi/EMI';
import RefClass from './RefClass';
import RefFn from './RefFn';
import FormFn from './FormFn';
import FormFnValidation from './FormFnValidation';
import HOC_Country from './hoc/HOC_Country';
import HOC_State from './hoc/HOC_State';
import ToDo from './ToDo';

import Header from './common/Header';
import Menubar from './common/Menubar';
import Footer from './common/Footer';
import Left from './common/Left';
import Right from './common/Right';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header/>
        <Menubar/>
        <div className='row'>
          <Left/>
          <div className='col-8 bg-light bg-opacity-75'>
            <Routes>
              <Route path='/test' element={<Test />}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/cricket' element={<Cricket/>}/>
              <Route path='/bollywood' element={<Bollywood/>}/>
              <Route path='/liftstate' element={<LiftState/>}/>
              <Route path='/emi' element={<EMI/>}/>
              <Route path='/refclass' element={<RefClass/>}/>
              <Route path='/reffn' element={<RefFn/>}/>
              <Route path='/formfn' element={<FormFn/>}/>
              <Route path='/formfn2' element={<FormFnValidation/>}/>
              <Route path='/hoccountry' element={<HOC_Country/>}/>
              <Route path='/hocstate' element={<HOC_State/>}/>
              <Route path='/todo' element={<ToDo />}/>
            </Routes>
          </div>
          <Right/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
