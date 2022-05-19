import React, { Children } from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

const Menubar = ()=>{
    return(
        <>
            <div className='row bg-info bg-opacity-75'>
            <div className='col-12 text-center'>
                <Navbar>
                    <Link to='/contactapp' className='nav-link btn btn-outline-success'>Contact App</Link>
                    <Link to='/github' className='nav-link btn btn-outline-success'>Github</Link>
                    <Link to='/githubfn' className='nav-link btn btn-outline-success'>Github Fn</Link>
                    <Link to='/classcomp' className='nav-link btn btn-outline-success'>Class Comp</Link>
                    <Link to='/modal' className='nav-link btn btn-outline-success'>Modal</Link>
                    <Link to='/todo' className='nav-link btn btn-outline-success'>To Do</Link>
                    <Link to='/hoccountry' className='nav-link btn btn-outline-success'>HOC Country</Link>
                    <Link to='/hocstate' className='nav-link btn btn-outline-success'>HOC State</Link>
                    <Link to='/test' className='nav-link btn btn-outline-success'>Test</Link>
                    <Link to='/home' className='nav-link btn btn-outline-success'>Home</Link>
                    <Link to='/cricket' className='nav-link btn btn-outline-success'>Cricket</Link>
                    <Link to='/bollywood' className='nav-link btn btn-outline-success'>Bollywood</Link>
                    <Link to='/liftstate' className='nav-link btn btn-outline-success'>Lift State</Link>
                    <Link to='/emi' className='nav-link btn btn-outline-success'>EMI</Link>
                    <Link to='/refclass' className='nav-link btn btn-outline-success'>RefClass</Link>
                    <Link to='/reffn' className='nav-link btn btn-outline-success'>Ref Fn</Link>
                    <Link to='/formfn' className='nav-link btn btn-outline-success'>Form Fn</Link>
                    <Link to='/formfn2' className='nav-link btn btn-outline-success'>Form Fn 2</Link>
                </Navbar>
            </div>
            </div>
        </>
    )
}

export default Menubar;



// ref
// ref Children
// useRef - Hook