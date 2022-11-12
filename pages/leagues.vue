<script setup lang="ts"></script>

<template>
  <body id="header" class="container d-flex">
    <div class="bg-light border rounded-lg" style="height: 20%; width: 70%">
      <div class="row">
        <div class="col-5">
          <h1 class="text-center">Team 1</h1>
          <img
            src="@/assets/images/players.jpg"
            alt="Matches"
            height="auto"
            width="auto"
            class="img-fluid rounded"
          />
        </div>

        <div class="col-2 align-center">Vs</div>

        <div class="col-5">
          <h1 class="text-center">Leagues</h1>
          <img
            src="@/assets/images/players.jpg"
            alt="Matches"
            height="auto"
            width="auto"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
#header {
  background-image: url(@/assets/images/intro.jpg);
  /* opacity: 0.8; */
  background-size: cover;
  height: 600px;
}
</style>
