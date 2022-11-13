<template>
<div id="background">
    <div class="breaker">
        <div class="title-box">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="@assets/images/Chelsea.jpeg" class="img-fluid rounded-start" alt="Team_Logo">
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

        <div id="playerStats" class="player-stats">
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

.copyright{
    color: white;
    font-size: 0.75rem;
    padding: 20px auto;
    margin: 20px auto auto;
    bottom: 0;
}

.bottom-container {
    position: fixed;
    bottom: 0;
    margin: 0;
    background-color: blue;
    padding: 30px 0 20px;
}
</style>