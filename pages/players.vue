<template>

<div id="background">
    <div class="breaker">
        <div class="title-box">
            <img src="@/assets/images/players.jpg" alt="player"/>
            
            <div class="right_side">
                <p id="team">Team:</p>
                <p id="league">League:</p>
                <p id="assists">Assists:</p>
                <p id="yellow_cards">Yellow Cards:</p>
                <p id="red_cards">Red Cards:</p>
                <p id="injuries">Injuries:</p>
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

.breaker {
  position: absolute;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: white;
  border-radius: 8px;
  text-transform: uppercase;
}

.right_side {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
.title-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: left;
  width: 100%;
  font-size: 1.2rem;
}
.title-box img{
    display: flex;
    flex-direction: column;
    height: auto;
    width: 10rem;
    align-items: left;
    margin-left: 0px;
}

/*java script*/
.player-stats {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}

.player-title {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.player-title p {
  font-size: 1.5rem;
}

.copyright{
    color: white;
    font-size: 0.75rem;
    padding: 20px auto;
    margin: 20px auto auto;
    bottom: 0;
}
/*java script*/
</style>