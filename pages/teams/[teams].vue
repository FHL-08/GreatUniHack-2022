<template>
<div id="background">
    <div class="breaker">
        <div class="title-box w-30% h-50%">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="@/assets/images/Chelsea.jpeg" class="img-fluid rounded-start" alt="Team_Logo">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Chelsea (Team Name)</h5>
                            <p class="card-text">Coach</p>
                            <p class="card-text">Coach Name (API)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="player-stats  ">
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Player 1</li>
                    <li class="list-group-item">Player 2</li>
                    <li class="list-group-item">Player 3</li>
                </ul>
                <div class="card-footer">
                    Team Members of Team Name
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
#background {
    height: 100vh;
    background-image: url(@/assets/images/intro.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.breaker {
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  width: 40%;
  background-color: white;
  border-radius: 10px;
  text-transform: uppercase;
}
</style>