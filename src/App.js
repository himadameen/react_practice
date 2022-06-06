import logo from './logo.svg';
import React from 'react';
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
import HOC_City from './hoc/HOC_City';
import ToDo from './ToDo';
import ModalComp from './Modal';
import ClassComp from './ClassComp';
import Github from './Github';
import GithubFn from './GithubFn';
import ContactApp from './ContactApp';
import HookReducer from './hooks/HookReducer';
import Parent, { NameContext } from './context/Parent';
import PracApi from './PracApi';


import Header from './common/Header';
import Menubar from './common/Menubar';
import Footer from './common/Footer';
import Left from './common/Left';
import Right from './common/Right';

import DataApp from './common/DataApp';
import Login from './Login';
import ColorApp from './ColorApp';
import NotFound from './common/NotFound';

function App() {
  return (
      <BrowserRouter>
        <DataApp>
          <Header/>
          <Menubar/>
          <div className='row'>
            <Left/>
            <div className='col-8 bg-light bg-opacity-75'>
              <Routes>
                <Route path='/pracapi' element={<PracApi />}/>
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
                <Route path='/hoccity' element={<HOC_City/>}/>
                <Route path='/todo' element={<ToDo />}/>
                <Route path='/modal' element={<ModalComp />}/>
                <Route path='/classcomp' element={<ClassComp />}/>
                <Route path='/github' element={<Github />}/>
                <Route path='/githubfn' element={<GithubFn />}/>
                <Route path='/contactapp' element={<ContactApp />}/>
                <Route path='/hookreducer' element={<HookReducer />}/>
                <Route path='/parent' element={<Parent />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/colorapp' element={<ColorApp />}/>
                <Route path='/apps'>
                  <Route path='app1' element={<EMI />}/>
                  <Route path='app2' element={<ColorApp />}/>
                  <Route path='app3' element={<GithubFn />}/>
                </Route>
                <Route path='/' element={<Home />}/>
                <Route path='/*' element={<NotFound />}/>
              </Routes>
            </div>
            <Right/>
          </div>
          <Footer/>
        </DataApp>
      </BrowserRouter>
  );
}

export default App;
