<script setup lang="ts">
import MatchesImage from "@/assets/images/matches.jpg";
import PlayersImage from "@/assets/images/players.jpg";
import TeamsImage from "@/assets/images/teams.jpg";
import LeaguesImage from "@/assets/images/player2.jpg";

const router = useRouter();

const matchQuery = ref("");
const searchMatches = () => {
  router.push({ name: "matches", query: { q: matchQuery.value } });
};
</script>

<template>
  <div id="header" class="m-10 mb-10">
    <div
      class="container h-100 d-flex flex-column text-white justify-content-center font-weight-bold"
    >
      <h1 class="display-1">Attack On Football</h1>
      <h2 class="lead">Latest Football League and Player News</h2>
    </div>
  </div>

  <div class="container bg-dark">
    <!-- Matches-->
    <IntroSearchCard
      name="Matches"
      :image="MatchesImage"
      class="mb-5"
      style="margin-top: -5rem"
      @search="matchQuery = $event"
      @press="searchMatches"
    />
    {{matchQuery}}
    <!-- Leagues -->
    <IntroSearchCard name="Leagues" :image="PlayersImage" class="mb-5" />
    <!-- Teams -->
    <IntroSearchCard name="Players" :image="TeamsImage" class="mb-5" />
    <!-- Player -->
    <IntroSearchCard name="Teams" :image="LeaguesImage" class="mb-5" />
  </div>
</template>

<style scoped>
#header {
  background-image: url(@/assets/images/intro.jpg);
  opacity: 0.8;
  background-size: cover;
  height: 600px;
}
</style>
