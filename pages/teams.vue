<template>
<div id="background">
    <div class="breaker">
        <div class="title-box">
            <img src="@/assets/images/players.jpg" alt="player"/>
            
            <div class="card">
                <div class="card-header">
                    Teams
                </div>
                <div class="card-body">
                    <div class="row g-0 ml-12">
                        <div class="col-md-4">
                            <img src="@/assets/images/teams.jpg" alt="team"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> Team Name </h5>
                                <h6 class="card-text"> Coach: </h6>
                                <p class="card-text"> Coach Name </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div id="playerStats" class="player-stats">

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