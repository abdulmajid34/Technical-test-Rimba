<script setup>
</script>

<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
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
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>

            <div class="d-flex ms-4">
              <button class="btn btn-success rounded">Get Started</button>
            </div>
          </div>
      </div>
    </nav>

    
  </section>
</template>