<template>
  <div id="header" class="m-10 ">
    <div
      class="container h-100 d-flex flex-column text-white justify-content-center font-weight-bold"
    >
      <h1 class="display-1">Title</h1>
      <h2 class="lead">Description goes here example text</h2>
    </div>
  </div>

  <!-- Matches-->
  <div class="container-fluid bg-light border rounded-lg position-relative"
  style="height: 500px"
    >
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <div class="col-4">
        <img
          src="@/assets/images/matches.jpg"
          alt="Matches"
          height="880"
          width="1320"
          class="img-fluid rounded"
        />
      </div>

      <div class="col-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Match of the day"
            aria-label="Match of the day"
            aria-describedby="basic-addon1"
          />
        </div>

        <button type="button" class="btn btn-primary">Search Matches</button>
      </div>
    </div>
  </div>

  <!-- Leagues -->
  <div class="container-fluid bg-light border rounded-lg position-relative"
    style="height: 500px"
    >
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <div class="col-4">
        <img
          src="@/assets/images/teams.jpg"
          alt="Matches"
          height="880"
          width="1320"
          class="img-fluid rounded"
        />
      </div>

      <div class="col-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="League Tables"
            aria-label="League Tables"
            aria-describedby="basic-addon1"
          />
        </div>

        <button type="button" class="btn btn-primary">Search Leagues</button>
      </div>
    </div>
  </div>

  <!-- Teams -->
  <div class="container-fluid bg-light border rounded-lg position-relative"
    style="height: 500px"
    >
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <div class="col-4">
        <img
          src="@/assets/images/player2.jpg"
          alt="Matches"
          height="880"
          width="1320"
          class="img-fluid rounded"
        />
      </div>

      <div class="col-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Teams"
            aria-label="Teams"
            aria-describedby="basic-addon1"
          />
        </div>

        <button type="button" class="btn btn-primary">Search Teams</button>
      </div>
    </div>
  </div>

  <!-- Player -->
  <div
    class="container-fluid bg-light border rounded-lg position-relative"
    style="height: 500px"
  >
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <div class="col-4">
        <img
          src="@/assets/images/players.jpg"
          alt="Matches"
          height="880"
          width="1320"
          class="img-fluid rounded"
        />
      </div>

      <div class="col-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Players"
            aria-label="Players"
            aria-describedby="basic-addon1"
          />
        </div>

        <button type="button" class="btn btn-primary">Search Players</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  background-image: url(@/assets/images/intro.jpg);
  /* opacity: 0.8; */
  background-size: cover;
  height: 600px;
}
</style>
