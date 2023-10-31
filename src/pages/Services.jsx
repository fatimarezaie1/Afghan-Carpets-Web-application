import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";
export default function Services(prop){
    return(
        <div>
            <div  className="main card mx-5" style={{height:'400px', width: '300px'}}  >
                <img src={prop.img}/>
                <div className='card-img-overlay' style={{backgroundColor: "white", height:'250px',fontSize:'14px',opacity:'0.8'}} >
                    <h3>{prop.title}</h3>
                    <p>{prop.description}</p>
                    <button className="btn btn-info" data-bs-toggle='modal' data-bs-target='#box'><Link to='/contact' className="nav-link"></Link>More Detail</button>
                    
                </div>
                <div className="modal" id='box'>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header"> 
                                    <h1 className="modal-title">Afghan Carpets</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body d-flex ">
                                    <img src={'content.jpeg'} style={{height:'350px',width:'300px'}} className="mx-5"/>
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                                    Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                                    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                                    Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                                    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss='modal' type="button">close</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            
    </div>
    )
}