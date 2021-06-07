import "bootstrap/dist/css/bootstrap.min.css";
import './style/About.css';
import Navbar from './Navbar';
import foto from '../foto.png';
import Footer from './Footer';

function About() {
    return (
        <div>
            <Navbar />
            <div class="page-content page-container bg-light" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-10 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25"> <img src={foto} class="img-radius" alt="User-Profile-Image" width="150px" height="200px"/> </div>
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
                                                    <h6 class="text-muted f-w-400">(+62) 838-5706-xxx8</h6>
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
                                                    <h6 class="text-muted f-w-400">Wijaya Kusuma Street, Sekarpuro</h6>
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
            <Footer />
        </div>

    );
}

export default About;