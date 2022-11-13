<script setup lang="ts">
const { pending, data: fixtures } = useLazyFetch("/api/fixtures");
</script>

<template>
  <div class="container bg-light">
    <div class="px-5 rounded-3">
      <div class="py-5">
        <h1 class="display-5 fw-bold">Matches</h1>
        <p class="col-md-8 fs-4">Description about matches goes in this box</p>
      </div>
    </div>

    <h1 v-if="pending">Loading...</h1>
    <template v-else>
      <div
        v-for="fixture in fixtures"
        :key="fixture.fixture.id"
        class="card mb-3"
      >
        <div class="card-body text-center">
          <h1>{{ fixture.league.name }}</h1>

          <div class="d-flex gap-3 justify-content-evenly">
            <div class="d-flex align-middle">
              <div>
                <img :src="fixture.teams.home.logo" class="w-25" />
                <p class="mb-0">Home</p>
                <p class="fs-4">{{ fixture.teams.home.name }}</p>
              </div>
              <p class="fs-1">4</p>
            </div>
            <div class="d-flex align-middle">
              <p class="fs-1">3</p>
              <div>
                <img :src="fixture.teams.away.logo" class="w-25" />
                <p class="mb-0">Away</p>
                <p class="fs-4">{{ fixture.teams.away.name }}</p>
              </div>
            </div>
          </div>

          <p class="pre">{{ fixture }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
