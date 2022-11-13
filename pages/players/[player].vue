<script setup lang="ts">
const route = useRoute();
const { pending, data } = useLazyFetch(`/api/players/${route.params.player as string}`);
</script>

<template>
  <h1 v-if="pending">Loading...</h1>
  <h1 v-else-if="!data">Unknown match</h1>
  <div id="background" v-else>
      <div class="breaker">
          <div class="title-box">
              <img :src="data.player.photo" class="w-25" alt="player"/>
              
              <div class="right_side">
                  <h5 id="f_name">First Name: {{data.player.name}}</h5>
                  <h5 id="l_name">Last Name: {{data.player.name}}</h5>
                  <p id="team">Team: {{data.statistics.team.name}}</p>
                  <p id="age">Age: {{data.player.age}}</p>
                  <p id="date">Date: {{data.player.birth.date}}</p>
                  <p id="nation">Nationality: {{data.player.nationality}}</p>
                  <p id="height">Height: {{data.player.height}}</p>
                  <p id="weight">Weight: {{data.player.weight}}</p>
                  <p id="injuries">Injury Status: {{data.player.injured}}</p>
              </div>
          </div>

          <div id="playerStats" class="player-stats">
            <p id="league">League: {{data.statistics.team.league.name}}</p>
            <p id="assists">Goals: {{data.statistics.goals.total}}</p>
            <p id="assists">Assists: {{data.statistics.goals.assists}}</p>
            <p id="yellow_cards">Yellow Cards: {{data.statistics.cards.yellow}}</p>
            <p id="red_cards">Red Cards: {{data.statistics.cards.red}}</p> 
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
    width: 35rem;
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