<script setup lang="ts">
const { pending, data: leagues } = useLazyFetch("/api/leagues");
</script>

<template>
  <div id="match Table" class="matches-table"></div>

  <div class="mt-10 container">
    <h1 v-if="pending">Loading...</h1>
    <template v-else>
      <div
        v-for="league in leagues?.response"
        :key="league.league.id"
        class="card card-body mb-3"
      >
        <h1>
          {{ league.league.name }}

          <small class="small">
            <span class="badge bg-secondary">{{ league.league.type }}</span>
            <span class="badge bg-secondary">{{ league.country.name }}</span>
          </small>
        </h1>

        <h2>Seasons</h2>
        <div
          v-for="season in league.seasons"
          :key="season.start"
          class="card mb-2"
        >
          <h3>{{ season.year }} ({{ season.start }} - {{ season.end }})</h3>
          <p>Current: {{ season.current }}</p>
          <p class="pre">{{ season }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
