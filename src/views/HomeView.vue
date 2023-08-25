

<template>
  <section style="background-color: #FFF5E0;">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top" style="transition: background-color 0.3s ease-in-out;">
      <div class="container">
          <a class="navbar-brand" href="/home"><i class="bi bi-book pe-1" style="font-size: 30px;"></i> Library <span style="color: #d5802b; font-weight: 700;">Books</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#recommendation">Recommendation</a>
                </li>
                <li class="nav-item pe-2">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>

            <div class="d-flex">
              <button class="btn rounded" style="background-color: #d5802b; color: white">Signin</button>
            </div>
          </div>
      </div>
    </nav>

    <!-- Jumbotron layout -->
    <section id="home" >
      <div class="style-jumbotron">
        
        <div class="row style-content-jumbotron" style="margin-right: 0;">
          <div class="col-md-6 my-auto style-title-jumbotron">
            <div class="" style="margin-left: 8rem;">
              <h1 style="font-size: 50px;">Library <span style="color: #d5802b; font-weight: 700;">Books</span></h1>
              <p style="font-size: 20px; font-weight: 400; padding-bottom: 10px; height: 150px;">Buku adalah <span id="generate-text"></span></p>              
              <button class="btn rounded" style="width: 120px; background-color: #d5802b; color: white">Get Started</button>
            </div>
          </div>
          <div class="col-md-6 style-image-jumbotron">
            <img src="../assets/images/arif-riyanto-UD9nADGj2mc-unsplash.jpg" alt="jumbotron_image">
          </div>
        </div>
      </div>
    </section>  
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,133.3C384,117,480,75,576,101.3C672,128,768,224,864,229.3C960,235,1056,149,1152,112C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

  </section>

  <section style="padding-bottom: 10rem; background-color: #fff;">
    <div class="row mx-3" style="margin-right: 0;">
      <div class="col-md-3 text-center">
        <div class="card style-card"> 
          <h2>Novel</h2>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="card style-card">
          <h2>
            Comic
          </h2>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="card style-card">
          <h2>Technology</h2>
        </div>
      </div>  
      <div class="col-md-3 text-center">
        <div class="card style-card">
          <h2>Kids</h2>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="row" style="margin-right: 0;">
      <div class="col-md-7" style="height: 500px;">
        <div class="fixed-image">
          <img src="../assets/images/olesia-buyar-ZD03qVhBJZg-unsplash.jpg" alt="Gambar Tetap">
        </div>
      </div>
      <div class="col-md-5 my-auto">
        <h1>About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem quidem beatae eius explicabo quibusdam debitis magnam sapiente. Laborum sint rerum praesentium blanditiis ea. Dolor vel aliquid eaque eos! Dolore facere provident maiores quae? Dolor excepturi quia debitis veritatis placeat numquam deleniti obcaecati nam accusamus eligendi vero perspiciatis, provident perferendis!</p>
      </div>
    </div>
  </section>
  
</template>

<script>

  document.addEventListener('DOMContentLoaded', function() {    
    const txtElement = ['jembatan ilmu untuk menghubungkan pengetahuan dengan kehidupan nyata.'];
    let count = 0;
    let txtIndex = 0;
    let currentTxt ='';
    let words ='';
  
    (function ngetik(){
      if(count == txtElement.length) {
          count = 0;
      }

      currentTxt = txtElement[count];

      words = currentTxt.slice(0, ++txtIndex);      
      document.getElementById('generate-text').textContent = words;

      if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
      }

      if(count == txtElement.length) {
        console.log("stop");
        setTimeout(function() {
          ngetik()
        }, 3000)
      } else {
        setTimeout(ngetik, 100);
      }
      
    })();

    // NAVBAR STICKY

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        console.log(window.screenY, 'scroll');
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });

  });

</script>

<style scoped>
  .style-jumbotron  {
   padding-top: 10rem;

  }

  .style-image-jumbotron img {
    width: 100%; 
    height: 500px; 
    image-rendering: auto; 
    object-fit: cover;
    border-radius: 10px;     
  }

  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff; 
    color: white;
    padding: 10px;
    width: 100%;
    z-index: 1000;
    
  }

  .style-card {
    height: 150px;
    padding: 50px 0;
    /* border: 1px solid black; */
    box-shadow: 10px 10px #FFF5E0;
  }

  .style-card:hover {
    box-shadow: none;
    transition: all 0.3s;
    border: 1px solid black;
  }
  .fixed-image img {
    position: fixed;
    image-rendering: auto; 
    object-fit: cover;
    width: 50%;
    /* height: 600px; */
    top: 70%; 
    left: 30%; 
    transform: translate(-50%, -50%); 
    z-index: -1; 
  }

  @media only screen and (max-width: 768px) {
    #navbar {
      background-color: #fff;
    }
  }

  @media only screen and (max-width: 600px) {
    #navbar {
      background-color: #fff;
    }
    .style-content-jumbotron {
      display: flex;
      flex-direction: column-reverse;
    }

    .style-title-jumbotron {
      margin-left: -6rem;
      padding: 20px 0;      
    }
  }

</style>