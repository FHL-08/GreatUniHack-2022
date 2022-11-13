<script setup lang="ts">
const route = useRoute();
const { pending, data: fixtures } = useLazyFetch(
  `/api/fixtures?q=${(route.query.q as string) ?? ""}`
);
</script>

<template>
  <div class="container bg-dark">
    <div class="px-5 rounded-3">
      <div class="py-5">
        <h1 class="display-5 fw-bold">Matches</h1>
        <p class="col-md-8 fs-4"></p>
      </div>
    </div>

    <h1 v-if="pending">Loading...</h1>
    <template v-else>
      <NuxtLink
        :to="`/matches/${fixture.fixture.id}`"
        v-for="fixture in fixtures"
        :key="fixture.fixture.id"
        class="text-black text-decoration-none"
      >
        <div class="card mb-3">
          <div class="card-body text-center">
            <h1>{{ fixture.league.name }}</h1>

            <div class="d-flex gap-3 justify-content-evenly">
              <div class="d-flex align-middle">
                <div>
                  <img :src="fixture.teams.home.logo" class="w-25" />
                  <p class="mb-0">Home</p>
                  <p class="fs-4">{{ fixture.teams.home.name }}</p>
                </div>
                <p class="fs-1">{{ fixture.goals.home }}</p>
              </div>
              <div class="d-flex align-middle">
                <p class="fs-1">{{ fixture.goals.away }}</p>
                <div>
                  <img :src="fixture.teams.away.logo" class="w-25" />
                  <p class="mb-0">Away</p>
                  <p class="fs-4">{{ fixture.teams.away.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>
