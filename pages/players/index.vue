<script setup lang="ts">
const { pending, data: players } = useLazyFetch("/api/players");
</script>

<template>
  <div class="container bg-dark">
    <div class="px-5 rounded-3">
      <div class="py-5">
        <h1 class="display-5 fw-bold">Players</h1>
        <p class="col-md-8 fs-4"></p>
      </div>
    </div>

    <h1 v-if="pending">Loading...</h1>
    <template v-else>
      <NuxtLink :to="`/matches/${player.player.id}`" 
        v-for="player in players"
        :key="player.player.id"
        class="text-black text-decoration-none">
      <div
        class="card mb-3"
      >
      <div class="breaker">
          <div class="title-box">
              <img :src="player.player.photo" class="w-25" alt="player"/>
              
              <div class="right_side">
                  <h5 id="f_name">First Name: {{player.player.name}}</h5>
                  <h5 id="l_name">Last Name: {{player.player.name}}</h5>
                  <p id="team">Team: {{player.statistics.team.name}}</p>
                  <p id="age">Age: {{player.player.age}}</p>
                  <p id="date">Date: {{player.player.birth.date}}</p>
                  <p id="nation">Nationality: {{player.player.nationality}}</p>
                  <p id="height">Height: {{player.player.height}}</p>
                  <p id="weight">Weight: {{player.player.weight}}</p>
                  <p id="injuries">Injury Status: {{player.player.injured}}</p>
              </div>
          </div>

          <div id="playerStats" class="player-stats">
            <p id="league">League: {{player.statistics.team.league.name}}</p>
            <p id="assists">Goals: {{player.statistics.goals.total}}</p>
            <p id="assists">Assists: {{player.statistics.goals.assists}}</p>
            <p id="yellow_cards">Yellow Cards: {{player.statistics.cards.yellow}}</p>
            <p id="red_cards">Red Cards: {{player.statistics.cards.red}}</p> 
          </div>
        </div>
      </div>
    </NuxtLink>
    </template>
  </div>
</template>
