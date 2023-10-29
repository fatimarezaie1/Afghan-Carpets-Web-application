import { Button } from "bootstrap";
import React from "react";
import {Link} from 'react-router-dom'
export default function Contact(){
    return(
            <div className="contact-page shadow-lg p-4 mb-4 bg-light">
                <form action="/action_page.php" className="form">
                    <div className="mb-3 mt-3">
                        <label for='email' className="form-label">Email: </label>
                        <input type="text" className="form-control" placeholder="Enter Emai"  name="email" id="email"/>
                    </div>
                    <div className="mb-3 ">
                        <label for='pwd' className="form-label">Password: </label>
                        <input type="password" className="form-control" placeholder="Enter password"  name="psd"/>
                     </div>
                     <div className="mb-3 ">
                        <label for='Comment'>Comments: </label>
                        <textarea className="form-control" rows='5' id="comment"  name="text"></textarea>
                     </div>
                     <div className="form-check mb-3">
                        <label for='form-check-label' className="form-label">
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}