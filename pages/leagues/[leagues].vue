<script setup lang="ts">
const route = useRoute();
const { pending, data } = useLazyFetch(
  `/api/leagues/${route.params.league as string}`
);
</script>

<template>
  <h1 v-if="pending">Loading...</h1>
  <div id="background" v-else>
    <div
      v-for="league in data"
      :key="league.league.id"
      class="card card-body mb-3 breaker"
    >

    <h1>
        {{ league.league.name }}

        <small class="small">
          <span class="badge bg-secondary">{{ league.league.type }}</span>
          <span class="badge bg-secondary">{{ league.country.name }}</span>
        </small>
      </h1>
    </div>

      <h2>Seasons</h2>

      <div
        v-for="season in seasons"
        :key="season.start"
        class="card mb-2"
      >
        <h3>{{ season.year }} ({{ season.start }} - {{ season.end }})</h3>
        <p>Current: {{ season.current }}</p>
        <p class="pre">{{ season }}</p>
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
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  border-radius: 8px;
  text-transform: uppercase;
  color: white;
}
</style>
