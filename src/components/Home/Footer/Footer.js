import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Let us handle your <br /> project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general</p>
                    </div>
                    <div className='col-md-6'>

                        <form action="" className='footer-form'>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                            <br/>
                            <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Your Name/ Company's Name"/>
                            <br/>
                            <textarea class="form-control" placeholder='Your message' rows="8"></textarea>
                            <br/>
                            <button type="submit" className='btn btn-dark'> Send</button>
                        </form>

                    </div>

                </div>
                <p className='text-center copyright'>Copyright Orange Labs {(new Date()).getFullYear()}</p>



            </div>

        </div>
    );
};

export default Footer;