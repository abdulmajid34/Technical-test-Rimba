<template>
    <section id="content-signin" style="background-color: #FFF5E0; height: 100vh">
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top"
            style="transition: background-color 0.3s ease-in-out;">
            <div class="container">
                <a class="navbar-brand" href="/"><i class="bi bi-book pe-1" style="font-size: 30px;"></i> Library <span
                        style="color: #d5802b; font-weight: 700;">Books</span></a>
            </div>
        </nav>

        <div class="container" style="padding-top: 10rem;">
            <div class="row" style="margin-left: 0;">
                <div class="col-md-7 style-img-signin">
                    <img src="../assets/images/nong-9pw4TKvT3po-unsplash.jpg" alt="gambar">
                </div>
                <div class="col-md-5">
                    <div class="my-4">
                        <h2 class="text-center" style="font-weight: 700; color: #d5802b;">Signin Page</h2>
                    </div>
                    <div class="card rounded-lg style-card-signin">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>                            
                            <button type="submit" class="btn" style="background-color: #d5802b; color: white; font-weight: 700;">Submit</button>
                            <p class="py-3">belum punya akun? daftar disini <span><a href="/signup">signup</a></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .style-img-signin img {
        width: 100%;
        height: 500px;
        image-rendering: auto;
        object-fit: cover;
        border-radius: 10px;
    }
    .style-card-signin {
        width: 100%;
        height: auto;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 15px 15px #d5802b;
    }
</style>