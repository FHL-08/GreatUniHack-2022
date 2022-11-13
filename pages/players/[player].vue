<script setup lang="ts">
const route = useRoute();
const { pending, data } = useLazyFetch(
  `/api/players/${route.params.player as string}`
);
</script>

<template>
  <h1 v-if="pending">Loading...</h1>
  <h1 v-else-if="!data">Unknown match</h1>
  <div id="background" v-else>
    <div class="breaker col bg-dark">
      <div class="title-box">
        <img :src="data.player.photo" class="w-25 h-25 ml-25 mt-25" alt="player" />

        <div class="right_side mr-50 " style="text-color: white;">
          <h5 id="f_name">First Name: {{ data.player.firstname }}</h5>
          <h5 id="l_name">Last Name: {{ data.player.lastname }}</h5>
          <p id="age">Age: {{ data.player.age }}</p>
          <p id="date">Date: {{ data.player.birth.date }}</p>
          <p id="nation">Nationality: {{ data.player.nationality }}</p>
          <p id="height">Height: {{ data.player.height }}</p>
          <p id="weight">Weight: {{ data.player.weight }}</p>
          <p id="injuries">Injury Status: {{ data.player.injured }}</p>
        </div>
      </div>
    </div>

    <div
      class="buying bg-dark text-center text-white"
      v-for="statistic in data.statistics"
    >
      <h5>Player Statistics</h5>
      <p id="team" v-if="statistic.team">Team: {{ statistic.team?.name }}</p>
      <p id="league" v-if="statistic.team">
        League: {{ statistic.league?.name }}
      </p>
      <p id="assists" v-if="statistic.team">
        Goals: {{ statistic.goals?.total }}
      </p>
      <p id="assists" v-if="statistic.team">
        Assists: {{ statistic.goals?.assists }}
      </p>
      <p id="yellow_cards" v-if="statistic.team">
        Yellow Cards: {{ statistic.cards?.yellow }}
      </p>
      <p id="red_cards" v-if="statistic.team">
        Red Cards: {{ statistic.cards?.red }}
      </p>
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
  color: white;
}

.buying {
  position: absolute;
  padding: 16px;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  border-radius: 8px;
  text-transform: uppercase;
  color: white;
}
.breaker {
  position: absolute;
  padding: 16px;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  border-radius: 8px;
  text-transform: uppercase;
  color: white;
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
.title-box img {
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

.copyright {
  color: white;
  font-size: 0.75rem;
  padding: 20px auto;
  margin: 20px auto auto;
  bottom: 0;
}
/*java script*/
</style>
