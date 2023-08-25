

<template>
  <section style="background-color: #FFF5E0;">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top" style="transition: background-color 0.3s ease-in-out;">
      <div class="container">
          <a class="navbar-brand" href="/"><i class="bi bi-book pe-1" style="font-size: 30px;"></i> Library <span style="color: #d5802b; font-weight: 700;">Books</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
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
              <router-link to="/signin">
                <button class="btn rounded" style="background-color: #d5802b; color: white">Signin</button>
              </router-link>
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
    <div class="container">
      <div class="row" style="margin-right: 0;">
        <div class="col-md-3 text-center" data-aos="fade-right">
          <div class="style-card"> 
            <h2>Novel</h2>
          </div>
        </div>
        <div class="col-md-3 text-center" data-aos="fade-down">
          <div class="style-card">
            <h2>
              Comic
            </h2>
          </div>
        </div>
        <div class="col-md-3 text-center" data-aos="fade-up">
          <div class="style-card">
            <h2>Technology</h2>
          </div>
        </div>  
        <div class="col-md-3 text-center" data-aos="fade-left">
          <div class="style-card">
            <h2>Kids</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="row" style="margin-right: 0; height: 400px;">
      <div class="col-md-7" data-aos="fade-right">
        <div class="fixed-image">
          <img src="../assets/images/olesia-buyar-ZD03qVhBJZg-unsplash.jpg" alt="Gambar Tetap">
        </div>
      </div>
      <div class="col-md-5 my-auto style-text-about" data-aos="fade-left">
        <h1>About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem quidem beatae eius explicabo quibusdam debitis magnam sapiente. Laborum sint rerum praesentium blanditiis ea. Dolor vel aliquid eaque eos! Dolore facere provident maiores quae? Dolor excepturi quia debitis veritatis placeat numquam deleniti obcaecati nam accusamus eligendi vero perspiciatis, provident perferendis!</p>
      </div>
    </div>

    
  </section>

  <section style="background-color: #FFF5E0; padding-top: 10rem;">
    
    <div class="container">
      <div class="row" style="margin-right: 0;">
        <span class="text-center" style="font-size: 80px; color: #d5802b;"><i class="bi bi-quote"></i></span>
        <p class="text-center" style="font-size: 40px;">Dengan membaca kamu mengenal dunia. Dengan menulis kamu dikenal dunia.</p>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,176C384,149,480,75,576,64C672,53,768,107,864,138.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </section>

  <section id="recommendation" style=" background-color: #fff;">
    <div class="container">
      <div class="row" style="margin-bottom: 5rem;">
        <div class="text-center">
          <h2>Recommendation</h2>
        </div>
      </div>
      <div class="row" style="margin-right: 0;">        
          <div class=" col-md-4">
            <div class="card style-card-list">              
                <img src="../assets/images/shayna-douglas-LVtTIR8SyjU-unsplash.jpg" alt="gambar1">              
              <span class="title-book">Buku 1</span>
            </div>
          </div>
          <div class=" col-md-4">
            <div class="card style-card-list">              
                <img src="../assets/images/annie-spratt-5Ufh1edjdak-unsplash.jpg" alt="gambar1">              
              <span class="title-book">Buku 2</span>
            </div>
          </div>
          <div class=" col-md-4">
            <div class="card style-card-list">              
                <img src="../assets/images/aziz-acharki-gXndgCS-CGo-unsplash.jpg" alt="gambar1">              
              <span class="title-book">Buku 3</span>
            </div>
          </div>
          <div class=" col-md-4 my-4">
            <div class="card style-card-list">              
                <img src="../assets/images/dariusz-sankowski-dvK_CT1Wg78-unsplash.jpg" alt="gambar1">              
              <span class="title-book">Buku 4</span>
            </div>
          </div>
          <div class=" col-md-4 my-4">
            <div class="card style-card-list">              
                <img src="../assets/images/nong-9pw4TKvT3po-unsplash.jpg" alt="gambar1">              
              <span class="title-book">Buku 5</span>
            </div>
          </div>
          <div class=" col-md-4 my-4">
            <div class="card style-card-list">              
                <img src="../assets/images/thoa-ngo-UhdlN7u87nA-unsplash.jpg" alt="gambar1">              
              <span class="title-book">Buku 6</span>
            </div>
          </div>
        </div>      
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF5E0" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,133.3C384,117,480,75,576,64C672,53,768,75,864,74.7C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
    
    <section id="contact" style="background-color: #FFF5E0">
      <div class="container">

        <div class="row" style="padding-bottom: 20px;"> 
          <div class="col-md-5">
            <h2>Library <span>Books</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptates atque maxime quasi quos nesciunt. Consectetur laboriosam facere aliquam natus?</p>
          </div>
          <div class="col-md-3">
            <h2>Social</h2>
            <div class="style-social-contact">
              <span><i class="bi bi-instagram"></i> Instagram</span>
              <span><i class="bi bi-facebook"></i> Facebook</span>
              <span><i class="bi bi-linkedin"></i> Linkedin</span>
            </div>
          </div>
          <div class="col-md-4">
            <h2>Contact us</h2>
            <div class="style-social-contact">
              <span>+62 123123123123</span>
              <span>test@mail.com</span>
            </div>
          </div>
        </div>

        <div style="width: 100%; height: 1px; background-color: black;"></div>
        <div class="py-3">
          <span>
            copyright
          </span>
        </div>
      </div>
  </section>
</template>

<script>
  import AOS from 'aos';
  // import 'aos/dist/aos.css';
  AOS.init();

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
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });

    window.addEventListener('scroll', () => {
      if(window.screenY == 0) {
        navbar.classList.add("sticky");
      }
    })

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
    height: 400px;
    top: 50%; 
    left: 30%; 
    transform: translate(-50%, -50%); 
    z-index: -1; 
  }
  
  .style-card-list img {
    width: 100%;    
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
  .style-card-list .title-book {
      position: absolute;
      top: 80%;
      color: white;
      font-weight: 700;
      font-size: 25px;
      padding-left: 10px;      
  }

  .style-social-contact {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    #navbar {
      background-color: #fff;      
    }    
    .fixed-image img {
      display: flex;
      width: 100%;
      margin: 0 73px;
    }
    .style-text-about {
      text-align: center;
      font-size: 20px;      
    }
    .style-card-list {
      padding-bottom: 10px;
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