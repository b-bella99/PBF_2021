import "bootstrap/dist/css/bootstrap.min.css";
import './tokoKulkas.css'
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductPolytron from './component/ProductPolytron.jsx'
import Keranjang from './component/Keranjang.jsx'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import SwiftSlider from 'react-swift-slider'

const data =  [
    {'id':'1','src':'https://polytron.co.id/uploads/SBS-rev.jpg'},
    {'id':'2','src':'https://polytron.co.id/uploads/belleza-3.jpg'},
    {'id':'3','src':'https://polytron.co.id/uploads/PWMhijab.jpg'},
    {'id':'4','src':'https://polytron.co.id/uploads/2880x1488.jpg'},
    {'id':'5','src':'https://polytron.co.id/uploads/showcase-2880x1490-rev.jpg'},
    {'id':'6','src':'https://polytron.co.id/uploads/wonderwashlanding.jpg'},
    {'id':'7','src':'https://polytron.co.id/uploads/Neuva-ice.jpg'}
  ];

const TokoKulkas = () => {
    return (
        <Router>
            <div className='OnlineShop'>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route exact path='/products'><ProductPolytron /></Route>
                        <Route exact path='/cart'><Keranjang /></Route>
                        <Route exact path='/about'><About /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Navbar({ title }) {
    return (
        <nav className="navbar bg-white">
            <h1>
                <div className="text-danger">{title}</div>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Polytron Store'
};

function Home() {
    return (
        <div className="text-center">
            <h1>Welcome to <b className="text-danger">Polytron Store</b></h1><hr />
            <SwiftSlider data={data} showDots={true} enableNextAndPrev={true}/>
            <br/><br/><hr />
            <h6>Polytron helps you discover a range of electronic products with the latest technology including Audio Video, Home Appliances, Smartphones and more.</h6>
        </div>
    );
}


function About() {
    return (
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-xl-10 col-md-12">
                        <div class="card user-card-full">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25"> <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/165801834_2299803176818830_4398061619605448896_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFfoCcNvb6ff5uDtCtDGmyqPEBEXLKBGZM8QERcsoEZkyG0Nh4J-GAgBMgm65cB2z6HOZ8j6RUAo0EpCgc-uZGc&_nc_ohc=yBQqAclW3X4AX9U6fI-&_nc_ht=scontent-sin6-2.xx&oh=3783b7eec87dd9657b9fc2505a2af5a6&oe=6086E07A" class="img-radius" alt="User-Profile-Image" /> </div>
                                        <h6 class="f-w-600">Bella Setyowati</h6>
                                        <p>College Students</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-muted f-w-400">bella.setyowati99@gmail.com</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Phone</p>
                                                <h6 class="text-muted f-w-400">(+62) 838-5706-0978</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Detail</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">NIM</p>
                                                <h6 class="text-muted f-w-400">1841720004</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Major</p>
                                                <h6 class="text-muted f-w-400">Information Technology</h6>
                                            </div>
                                            <div class="col-sm-12">
                                                <p class="m-b-10 f-w-600">Address</p>
                                                <h6 class="text-muted f-w-400">Wijaya Kusuma Street No.9A, Sekarpuro</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TokoKulkas;