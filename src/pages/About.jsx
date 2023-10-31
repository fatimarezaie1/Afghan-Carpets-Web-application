import React from "react";
import {Link} from 'react-router-dom'

export default function About(){
    return(
        <div>
            <div className="title text-center">
                <h1>Choose Afghan Carpets and be rely</h1>
                <h3>something</h3>
                <h5>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis <br/> egestas. 
                Proin pharetra nonummy pede. Mauris et orci.</h5>
            </div>
            <div className="d-flex mb-5">
                <img src={'13.jpg'} className="px-5 rounded"/>   
                <div id="accordion" className="p-3">
                    <div className="card">
                        <div className="card-header">
                            <Link className='btn' data-bs-toggle='collapse' to='#collapseOne'>carpets </Link>
                        </div>
                        <div className="collapse show" id="collapseOne" data-bs-parent='#accordion'>
                            <div className="card-body">
                             Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus 
                             on the text you want. If you need to stop reading before you reach the end, Word remembers where you
                              left off - even on another device.
                            </div>
                        </div>
                    </div>

                    {/* ----------------------------- */}

                    <div className="card">
                        <div className="card-header">
                            <Link className='collapsed btn' data-bs-toggle='collapse' to='#collapseTwo'>By hands</Link>
                        </div>
                        <div className="collapse" id="collapseTwo" data-bs-parent='#accordion'>
                            <div className="card-body">
                             Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus 
                             on the text you want. If you need to stop reading before you reach the end, Word remembers where you
                              left off - even on another device.
                            </div>
                        </div>
                    </div>

                    {/* ----------------------------- */}

                    <div className="card">
                        <div className="card-header">
                            <Link className='collapsed btn' data-bs-toggle='collapse' to='#collapseThree'>By machins</Link>
                        </div>
                        <div className="collapse" id="collapseThree" data-bs-parent='#accordion'>
                            <div className="card-body">
                             Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus 
                             on the text you want. If you need to stop reading before you reach the end, Word remembers where you
                              left off - even on another device.
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className="container-fluid ">
            <p className="h3 text-center">Video provides a powerful way to help you prove your point</p>
            <div className="card container" >
                    <img src={'c.jpeg'} className="card-img-top container" alt="top" style={{width:'100%'}}/>
                <div className="card-img-overlay d-flex flex-column container  p-5" id="card-description" style={{height:'300px',backgroundColor:'white',opacity:'0.8'}}>
                    <h4 className="card-title">Afghan Carpet</h4>
                    <p className="card-text">Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                    To make your document look professionally.
                    </p>
                    <Link to='/services' className='btn btn-primary'>SEE OUR SERVIECES</Link>
                </div>
            </div>
        </div>
            
        </div>
    )
}