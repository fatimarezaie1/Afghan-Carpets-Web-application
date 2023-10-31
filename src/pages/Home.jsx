import React from 'react'
import {GrNext ,GrPrevious} from 'react-icons/gr'
import {BsWhatsapp,BsFacebook,BsInstagram} from 'react-icons/bs'
import {FaLocationDot} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
export default function Home(){
  return(
      <div className='contianer-fluid home'>
        <div className='carousel slide mx-auto' data-bs-ride='carousel' id='slide' style={{maxWidth:'90%'}}>
          <div className='carousel-indicators'>
            <button data-bs-target='#slide' data-bs-slide-to='0' className='active'></button>
            <button data-bs-target='#slide' data-bs-slide-to='1' ></button>
            <button data-bs-target='#slide' data-bs-slide-to='2'></button>
          </div>
      
          <div className='carousel-inner'>
              <div className='carousel-item active text-center'>
                  <img src={'a.jpeg'} className='d-block center slide-img' style={{width:'100%',height:'450px'}}  />
                  <div className='carousel-caption text-dark 'style={{width:'50%', backgroundColor:'white',opacity:'0.8',margin:'0 auto'}}>
                      <h3>Los Angelse</h3>
                      <p>We Hab Such a Great Time In LA!</p>
                      <Link className='btn btn-success' to='/contact'><AiOutlineShoppingCart /></Link>
                  </div>
              </div>
              <div className='carousel-item '>
                <img src={'b.jpeg'} className='d-block center' style={{width:'100%',height:'450px'}} />
                <div className='carousel-caption text-dark 'style={{height:'150px',width:'50%', backgroundColor:'white',opacity:'0.8',margin:'0 auto'}}>
                      <h3>Los Angelse</h3>
                      <p>We Hab Such a Great Time In LA!</p>
                      <Link className='btn btn-success' to='/contact' style={{fontSize:'1em'}}><AiOutlineShoppingCart /></Link>
                  </div>
              </div>
              <div className='carousel-item '>
                <img src={'c.jpeg'} className='d-block center' style={{width:'100%',height:'450px'}} />
                <div className='carousel-caption text-dark 'style={{height:'150px',width:'50%', backgroundColor:'white',opacity:'0.8',margin:'0 auto'}}>
                      <h3>Los Angelse</h3>
                      <p>We Hab Such a Great Time In LA!</p>
                      <Link className='btn btn-success' to='/contact' style={{fontSize:'1em'}}><AiOutlineShoppingCart /></Link>
                  </div>
              </div>
          </div>
            <button className='carousel-control-prev' data-bs-target='#slide' data-bs-slide='prev'>
              <GrPrevious style={{fontSize:'3rem'}} /> 
            </button>

            <button className='carousel-control-next' data-bs-target='#slide' data-bs-slide='next'>
                <GrNext style={{fontSize:'3rem'}} />
            </button>
        </div>
        <h1 className='text-center m-4'>Afghan Carpets</h1>

        <div className='d-flex slide'>
             <img src={'content.jpeg'} className='col-3 img-home img-rounded' style={{height:'300px'}}/>
             <div className='col-9 mx-3'>
             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
              Mauris et orci.Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.Suspendisse dui purus, scelerisque at, vulputate vitae,
               pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy
               pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy
               pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy</p>
              <Link className='btn btn-info' to='/Services'>SEE OUR GALLERY</Link>
             </div>
        </div>
        
        <footer className='fixed-bottom footer text-white' style={{backgroundColor:'#000',opacity:'0.9'}}>
            <span><BsWhatsapp />074 947 4430</span>
            <span><Link to='https://facebook.com' className='btn text-white'><BsFacebook/>Facebook</Link></span>
            <span><Link to='https://instagram.com' className='btn text-white'><BsInstagram />Instagram</Link></span>
            <span><FaLocationDot />Dasht-e-Barchi, Kabul, Afghanistan</span>
  </footer> 
    </div>   
  )
}
