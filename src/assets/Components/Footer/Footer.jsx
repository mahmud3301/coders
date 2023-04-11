import React from 'react';
import media from '../../Icons/Group 9969.png'

const Footer = () => {
    return (
        <><br /><br />
            <div className='bg-black text-white'>
                <footer className="footer p-20 ">
                    <div>
                        <h1 className='text-3xl font-bold'>Coders</h1>
                        <p className='text-slate-400'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p><br />
                        <img src={media} />
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Work</a>
                        <a className="link link-hover">Latest News</a>
                        <a className="link link-hover">Careers</a>
                    </div>
                    <div>
                        <span className="footer-title">Product</span>
                        <a className="link link-hover">Prototype</a>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Customers</a>
                        <a className="link link-hover">Integrations</a>
                    </div>
                    <div>
                        <span className="footer-title">Support</span>
                        <a className="link link-hover">Help Desk</a>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Become a Partner</a>
                        <a className="link link-hover">Developers</a>
                    </div>
                    <div>
                        <span className="footer-title">Contact</span>
                        <a className="link link-hover">524 Broadway , NYC</a>
                        <a className="link link-hover">+1 777 - 978 - 5570</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;