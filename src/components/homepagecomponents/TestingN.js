// const TestingN = () =>{
//     return (
//         <div>
//             <div id="Welcome">
//
//                 <nav className="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
//                     <a className="navbar-brand" href="#Welcome">
//                         <img src="assets/images/logo.png" width="50" height="50" className="d-inline-block"
//                              alt=""/> Punjabi Restaurant
//                     </a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
//                             aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarText">
//                         <ul className="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#Welcome">Welcome</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#Restaurant">Restaurant</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#Menu">Menu</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#Reservation">Reservation</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#OurLocation">Our Location</a>
//                             </li>
//
//                         </ul>
//                     </div>
//                 </nav>
//                 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//                     <ol className="carousel-indicators">
//                         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                     </ol>
//                     <div className="carousel-inner">
//                         <div className="carousel-item active">
//                             <img className="d-block w-100 img-fluid img-slider" src="assets/images/slider1.jpg"
//                                  alt="First slide"/>
//                             <div className="carousel-caption">
//                                 <h2>Welcome!</h2>
//                                 <p>...</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <img className="d-block w-100 img-fluid img-slider" src="assets/images/slider2.jpg"
//                                  alt="Second slide"/>
//                             <div className="carousel-caption">
//                                 <h2>Traditional Italian Cuisine</h2>
//                                 <p>...</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <img className="d-block w-100 img-fluid img-slider" src="assets/images/slider3.jpg"
//                                  alt="Third slide"/>
//                             <div className="carousel-caption">
//                                 <h2>Selected Products</h2>
//                                 <p>...</p>
//                             </div>
//                         </div>
//                     </div>
//                     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
//                        data-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Previous</span>
//                     </a>
//                     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
//                        data-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Next</span>
//                     </a>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row" id="Restaurant">
//                     <div className="col navMenu">
//                         <h2 className="text-center">~ Restaurant ~</h2>
//                     </div>
//                 </div>
//                 <div className="row bg-light">
//                     <div className="col-md-6">
//                         <h3>Location</h3>
//                         <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving
//                             delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse
//                             through our website and check out our menu. We hope you'll soon join us for a superb Italian
//                             culinary experience.</p>
//                         <h5>A Unique Experience</h5>
//                         <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving
//                             delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse
//                             through our website and check out our menu. We hope you'll soon join us for a superb Italian
//                             culinary experience.</p>
//                     </div>
//                     <div className="col-md-6" data-aos="fade-up">
//                         <img className="img-fluid" src="assets/images/location.jpg"/>
//                     </div>
//                 </div>
//                 <div className="row bg-light"><br/></div>
//                 <div className="row bg-light">
//                     <div className="col-md-6 order-md-1 order-2" data-aos="fade-up">
//                         <img className="img-fluid " src="assets/images/cuisine.jpg"/>
//                     </div>
//                     <div className="col-md-6 order-md-12 order-1">
//                         <h3>Cuisine</h3>
//                         <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving
//                             delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse
//                             through our website and check out our menu. We hope you'll soon join us for a superb Italian
//                             culinary experience.</p>
//                         <h5>A Unique Experience</h5>
//                         <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving
//                             delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse
//                             through our website and check out our menu. We hope you'll soon join us for a superb Italian
//                             culinary experience.</p>
//                     </div>
//                 </div>
//
//                 <div className="row" id="Menu">
//                     <div className="col navMenu">
//                         <h2 className="text-center">~ Menu ~</h2>
//                     </div>
//                 </div>
//                 <div className="row bg-light">
//                     <div className="col-md-4" data-aos="slide-up">
//                         <div className="card view zoom">
//                             <img className="card-img-top img-fluid " src="assets/images/meat-menu.jpg"/>
//                             <div className="card-body">
//                                 <h5 className="card-title">~ Meat Menu ~</h5>
//                                 <ul className="list-group list-group-flush">
//                                     <li className="list-group-item">Bocconcini di carne in nido di sfoglia</li>
//                                     <li className="list-group-item">Bruschette con maiale al curry</li>
//                                     <li className="list-group-item">Uova al prosciutto</li>
//                                     <li className="list-group-item">Vitello tonnato</li>
//                                     <li className="list-group-item">Fesa di tacchino marinata con olive</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4" data-aos="slide-up">
//                         <div className="card">
//                             <img className="card-img-top img-fluid " src="assets/images/fish-menu.jpg"/>
//                             <div className="card-body">
//                                 <h5 className="card-title">~ Fish Menu ~</h5>
//                                 <ul className="list-group list-group-flush">
//                                     <li className="list-group-item">Carpaccio di polpo</li>
//                                     <li className="list-group-item">Cozze al verde</li>
//                                     <li className="list-group-item">Cocktail di gamberi</li>
//                                     <li className="list-group-item">Risotto alla crema di scampi</li>
//                                     <li className="list-group-item">Ravioli di pesce con crema di scampi</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4" data-aos="slide-up">
//                         <div className="card">
//                             <img className="card-img-top img-fluid" src="assets/images/menu-vegetarian.jpg"/>
//                             <div className="card-body">
//                                 <h5 className="card-title">~ Vegetarian Menu ~</h5>
//                                 <ul className="list-group list-group-flush">
//                                     <li className="list-group-item">Parmigiana di melanzane</li>
//                                     <li className="list-group-item">Strudel con ricotta e spinaci</li>
//                                     <li className="list-group-item">Polpette di spinaci e ricotta</li>
//                                     <li className="list-group-item">Frittata di patate al forno</li>
//                                     <li className="list-group-item">Spaghetti con le polpettine vegetariane</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row" id="Reservation">
//                     <div className="col navMenu">
//                         <h2 className="text-center">~ Reservation ~</h2>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className=" col-lg-12 reserve-container" data-aos="fade-up">
//                         <img className="img-fluid image-reserve" src="assets/images/reserve.jpg"/>
//                         <div className="reserve-text col-lg-12 ">
//                             <h1 className="text-center">Timetables</h1>
//                             <div className="row">
//                                 <div className="col-6">
//                                     <h2 className="text-center">Lunch</h2>
//                                     <h5 className="text-center">12:00 - 15:00</h5>
//                                 </div>
//                                 <div className="col-6">
//                                     <h2 className="text-center">Dinner</h2>
//                                     <h5 className="text-center">19:30 - 23:30</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br/>
//                 <div className="row bg-light">
//                     <div className="col">
//                         <form>
//                             <div className="form-row">
//                                 <div className="form-group col-6">
//                                     <h3>Reserve</h3>
//                                     <label htmlFor="inputDate"> Date</label>
//                                     <input type="date" className="form-control" id="inputDate"
//                                            placeholder="Data gg/mm/aaaa"/>
//                                 </div>
//                                 <div className="form-group col-6">
//                                     <h3>Details</h3>
//                                     <label htmlFor="inputName"> Name</label>
//                                     <input type="text" className="form-control" id="inputName" placeholder="Name"/>
//                                 </div>
//                                 <div className="form-group col-6">
//                                     <label htmlFor="inputTime"> Timetables</label>
//                                     <input type="time" className="form-control" id="inputTime"
//                                            placeholder="Timetables"/>
//                                 </div>
//                                 <div className="form-group col-6">
//                                     <label htmlFor="inputEmail"> Email</label>
//                                     <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
//                                 </div>
//                                 <div className="form-group col-6">
//                                     <label htmlFor="inputNumber"> Number of Guests</label>
//                                     <input type="number" className="form-control" id="inputNumber"
//                                            placeholder="Number of Guests"/>
//                                 </div>
//                                 <div className="form-group col-6">
//                                     <label htmlFor="inputCel"> Phone</label>
//                                     <input type="tel" className="form-control" id="inputCel" placeholder="Phone"/>
//                                 </div>
//                                 <div className="form-group col-12">
//                                     <label htmlFor="inputComment"> Further requests</label>
//                                     <textarea className="form-control" rows="4" id="inputComment"
//                                               placeholder="Further requests"></textarea>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-md-4 col-md-offset-4">
//                                     <button type="submit" className="btn btn-secondary btn-block">Reserve</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="row" id="OurLocation">
//                     <div className="col navMenu">
//                         <h2 className="text-center">~ Our Location ~</h2>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-3">
//                         <h3>Address:</h3>
//                         <p>Test street no 78963 </p>
//                         <h3>Email:</h3>
//                         <p>mail@example.com</p>
//                     </div>
//                     <div className="col-md-3">
//                         <h3>Address:</h3>
//                         <p>Test street no 78963 </p>
//                         <h3>Email:</h3>
//                         <p>mail@example.com</p>
//                     </div>
//                     <div className="col-md-3">
//                         <h3>Address:</h3>
//                         <p>Test street no 78963 </p>
//                         <h3>Email:</h3>
//                         <p>mail@example.com</p>
//                     </div>
//                     <div className="col-md-3">
//                         <h3>Address:</h3>
//                         <p>Test street no 78963 </p>
//                         <h3>Email:</h3>
//                         <p>mail@example.com</p>
//                     </div>
//                 </div>
//                 <div className="row footer bg-light">
//                     <div className="col">
//                         <p className="text-center">Follow us:
//                             <a className="social-icon" href="#"><i className="fab fa-facebook"></i></a>
//                             <a className="social-icon" href="#"><i className="fab fa-instagram"></i></a></p>
//                     </div>
//                     <div className="col">
//                         <p className="text-center">Copyright &copy; 2020</p>
//                     </div>
//                     <div className="col">
//                         <p className="text-center">Powered by: <a href="#">with love</a></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }