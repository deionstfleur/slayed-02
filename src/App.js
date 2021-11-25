import React from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import Instagram from './assets/ig.png'
import logo1 from './assets/logo-instagram.svg'
import home from './assets/home-outline.svg'
import Landing from './Landing';
import Hair from './assets/hair-dryer-dryer-svgrepo-com.svg'
import './App.css';


function App() {
  return (
    <div>
      
      {/* <div id="dt-nav" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Logo</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Socials</a>
        <a class="p-2 text-dark" href="#">Serivces</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Contact</a>
    </div> */}


    <nav id="navbar" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a id="logo-fix" class="navbar-brand"  href="#">
          +
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
           
         
          
          </ul>
          <form class="form-inline mt-2 mt-md-0">
          <ul id="right-wing" class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#booking-nav">Booking</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#socials-nav">Socials</a>
            </li>
          </ul>
            {/* <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> */}
            <a style={{textDecoration: 'none'}} href="#contact-nav"> 
            <button id="right-wing-2" class="btn btn-outline-success my-2 my-sm-0" type="submit">Contact</button>
            </a>
          </form>
        </div>
    </nav>

    <div>
    <div>
    <Landing />


<div class="container section-1">
        {/* <!-- Example row of columns --> */}
        <div class="row text-center">
          <div class="col-md-6">
          <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
       
            <p><a class="btn" id="button" href="#" role="button">View details »</a></p>
          </div>
          <div id="booking-nav" class="col-md-6">
            <h2>Booking</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
       
            <p><a class="btn" id="button" href="#" role="button">View details »</a></p>
          </div>
  
        </div>
  </div>
<div id="socials-nav" class="container bg-grey" style={{marginBottom: 50, marginTop: 20,}}>
  
   <div id="square-container" class="row">

     <div class="col-md-6">

       <div  class="row">

          <div class="col-6  square">
            <h2> lorem ipsum </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>

          </div>


          <div class="col-6 square">
          <h2> lorem ipsum </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
          </div>
       </div>

       <div id="second-row" class="row">

        <div class="col-6 square">
        <h2> lorem ipsum </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
        </div>


          <div class="col-6 square">
          <h2> lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
          </div>
      </div>



     </div>

     <div class="col-md-6">
     <h1 class="text-center follow"> Terms and Conditions</h1>
     </div>

   </div>

   {/* <div id="mobile">
     
     <div class="container">

       <div class="row">
     
     <div class="col-12">
     <h1>Terms and Conditions</h1>
     </div>
<div id="scroll"  class="row">
     <div class="col-3 square">
        <h2> lorem ipsum </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
     </div>


     <div class="col-3 square">
        <h2> lorem ipsum </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
     </div>

     <div class="col-3 square">
        <h2> lorem ipsum </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
     </div>

     <div class="col-3 square">
        <h2> lorem ipsum </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis sit amet nunc auctor elementum molestie in magna. Donec sed quam a turpis congue ornare.</p>
     </div>
</div>


       </div>

     </div>

     <div>


     </div>

   </div> */}

</div>

<div  class="container">
        {/* <!-- Example row of columns --> */}
        <div class="row">
          <div class="col-md-6">
          <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
       
            <p><a class="btn" id="button" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md-6">

          <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>
            
          </div>
  
        </div>
  </div>

<div class="container" style={{marginBottom: 50, marginTop: 20}}>
  <h2 style={{fontWeight: 700}} class="text-center phrase">Like anyone else, there are days I feel beautiful and days I don't, and when I don't, I book an appointment with SlayedBySarah.</h2>
  {/* <p class="text-center" style={{width: '75%', margin: 'auto', color: 'gray', fontSize: 17}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium ligula nunc, ac aliquam ex accumsan quis. Phasellus eu ultricies diam. Ut ante nunc, mollis sit amet tincidunt in, tristique eget orci. </p> */}

</div>

    </div>

    </div>


    <footer id="contact-nav" class="blog-footer">
      <p>Web template built by <a href="#">DST</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
     
     
    </div>
  );
}

export default App;
