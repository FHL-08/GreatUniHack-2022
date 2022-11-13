<template>
  <!-- <footer class="footer mt-auto py-3 my-4 mb-2 fixed-bottom" >
    </footer> -->

  <footer
    class="text-center text-white mt-auto"
    style="background-color: #3f51b5"
  >
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Links -->
      <section class="mt-1.5">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-3">
          <!-- Grid column -->
          <div class="col-md-1">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink
                to="https://github.com/nuxt"
                class="nav-link active text-white"
              >
                Github
              </NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-1">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink
                to="https://linkedin.com/"
                class="nav-link active text-white"
              >
                LinkedIn
              </NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-1">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink
                to="https://twitter.com/nuxt_js"
                class="nav-link active text-white"
              >
                Twitter
              </NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style scoped>
.copyright {
  color: black;
  font-size: 1rem;
  padding: 20px auto;
  margin: 20px auto auto;
  bottom: 0;
  text-align: center;
}
</style>
