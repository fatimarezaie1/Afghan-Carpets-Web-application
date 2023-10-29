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
                            <Link className='btn' data-bs-toggle='collapse' to='#collapseOne'>Collapse Group Item #1</Link>
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
                            <Link className='collapsed btn' data-bs-toggle='collapse' to='#collapseTwo'>Collapse Group Item #2</Link>
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
                            <Link className='collapsed btn' data-bs-toggle='collapse' to='#collapseThree'>Collapse Group Item #3</Link>
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
            
        </div>
    )
}