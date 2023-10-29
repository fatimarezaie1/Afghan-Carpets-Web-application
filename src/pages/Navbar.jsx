import React from "react";
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from './Services'
import {AiOutlineMenu} from 'react-icons/ai'
import data from './data'
import './style.css'
export default function Navbar(){
    const element = data.map(item => <Services img={item.img} title={item.title} description={item.description}/>)
    return(
        <BrowserRouter>
        <nav className="navbar navbar-expand-sm">
        <div className='container-fluid'>
            <Link className="navbar-brand" to='/'>#Afghan Carpets</Link>
            <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#navbar'>
               <AiOutlineMenu/>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
                <li className="nav-itme"><Link className="nav-link" to='/'>Home</Link></li>
                <li className="nav-itme"><Link className="nav-link" to='/about'>About</Link></li>
                <li className="nav-itme"><Link className="nav-link" to='/Services'>Services</Link></li>
                <li className="nav-itme"><Link className="nav-link" to='/contact'>Contact</Link></li>
            </ul>
        </div>
          
        </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Services" element={<section className="ser-img">
                <div className="title text-center">
                    <h1>Choose Afghan Carpets and be rely</h1>
                    <h3>something</h3>
                    <h5>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis <br/> egestas. 
                    Proin pharetra nonummy pede. Mauris et orci.</h5>
                </div>
                    
                {element}</section>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
   
}